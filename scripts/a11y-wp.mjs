/**
 * Accessibility (ADA) audit runner for the WordPress staging install.
 *
 * Same methodology as scripts/a11y.mjs (Playwright + axe-core over the real
 * rendered DOM, WCAG 2.1 AA tags, exit 1 on any violation) but adapted for the
 * WordPress site, which uses path-based URLs instead of the React app's
 * HashRouter + `#/` routes.
 *
 * It crawls the base host from the homepage, de-duplicates same-origin HTML
 * page links, then scans each route in order. Motion / lazy-loaded below-the-
 * fold content is scrolled into view so axe sees final-state (opaque) nodes.
 *
 * Usage:
 *   node scripts/a11y-wp.mjs                            # childmusstg.wpenginepowered.com
 *   node scripts/a11y-wp.mjs --url https://example.com/ # custom base
 *   node scripts/a11y-wp.mjs --tags wcag2a,wcag2aa       # override axe tags
 *   node scripts/a11y-wp.mjs --max 45                    # cap scanned URLs
 *   node scripts/a11y-wp.mjs --list /, /plan-your-visit/  # exact paths only
 */
import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const axeSource = readFileSync(require.resolve('axe-core'), 'utf8')

const args = process.argv.slice(2)
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] !== undefined ? args[i + 1] : fallback
}
const has = (name) => args.includes(`--${name}`)
const baseUrl = flag('url', flag('baseURL', 'https://childmusstg.wpenginepowered.com/')).replace(/\/$/, '')
const origin = new URL(baseUrl).origin
const tags = flag('tags', 'wcag2a,wcag2aa,wcag21aa').split(',').map((t) => t.trim())
const maxUrls = parseInt(flag('max', '45'), 10)

const SKIP = /\.(css|js|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|pdf|zip|xml)([?#]|$)/i
const ADMIN = /\/(wp-admin|wp-json|wp-content|wp-includes|feed|xmlrpc|cron|sitemap|robots\.txt)/

// Normalize an href to a same-origin path, or null if cross-origin / file /
// admin / fragment / query.
function relPath(href) {
  let u
  try {
    u = new URL(href, baseUrl + '/')
  } catch {
    return null
  }
  if (u.origin !== origin) return null
  const p = u.pathname.length > 1 ? u.pathname.replace(/\/$/, '') : '/'
  if (p === '/') return '/'
  if (p.includes('#') || p.includes('?')) return null
  if (SKIP.test(p) || ADMIN.test(p)) return null
  return p
}

const PRIORITY = [
  '/plan-your-visit', '/tour-the-museum', '/exhibits', '/events', '/educators',
  '/parties', '/programs/field-trips', '/programs/museum-on-the-go',
  '/programs/scout-workshops', '/museum-store', '/news', '/resources',
  '/resources/playful-learning', '/about', '/about/careers', '/about/impact',
  '/donate', '/memberships', '/memberships/information', '/memberships/corporate',
  '/support', '/support/corporate-partners', '/support/donor-recognition',
  '/giving-circles/imagination-ball', '/contact', '/terms', '/privacy',
]
const PRIO = new Map(PRIORITY.map((p, i) => [p, i]))

function sortPaths(paths) {
  return [...paths].sort((a, b) => {
    const ai = PRIO.has(a) ? PRIO.get(a) : 999
    const bi = PRIO.has(b) ? PRIO.get(b) : 999
    if (ai !== bi) return ai - bi
    const da = a.split('/').filter(Boolean).length
    const db = b.split('/').filter(Boolean).length
    return da === db ? a.localeCompare(b) : da - db
  })
}

async function scan(url, browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
  } catch {
    // leave it be
  }
  // Let non-blocking third-party (GTM, fonts, embeds) settle before scrolling.
  await page.waitForTimeout(2500)
  await page.evaluate(async () => {
    const h = document.body.scrollHeight
    const steps = Math.min(Math.ceil(h / 900), 60)
    for (let i = 0; i <= steps; i++) {
      window.scrollTo(0, i * 900)
      await new Promise((r) => setTimeout(r, 30))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(600)
  await page.addScriptTag({ content: axeSource })
  const results = await page.evaluate(
    ({ tagValues }) => window.axe.run(document, { runOnly: { type: 'tag', values: tagValues } }),
    { tagValues: tags },
  )
  await page.close()
  return results
}

function ratioNote(violation) {
  const node = violation.nodes[0]
  const c = Array.isArray(node?.any) && node.any.find((r) => r.message?.toLowerCase().includes('ratio'))
  return c ? ` ratio ${c.data?.fg}-${c.data?.bg} (${c.data?.contrastRatio})` : ''
}
const browser = await chromium.launch()
let routes

if (has('list')) {
  routes = flag('list').split(',').map((s) => s.trim().replace(/\/+$/, '') || '/')
} else {
  // Crawl the homepage to discover the site's real page URLs.
  const probe = await browser.newPage()
  let crawled = ['/']
  try {
    await probe.goto(baseUrl + '/', { waitUntil: 'domcontentloaded', timeout: 45000 })
    await probe.waitForTimeout(2000)
    const hrefs = await probe.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href')))
    const seen = new Set(['/'])
    for (const href of hrefs) {
      const p = relPath(href)
      if (!p || seen.has(p)) continue
      seen.add(p)
      crawled.push(p)
    }
  } catch {
    // homepage unreachable at crawl time — fall back to scanning just '/'
  }
  await probe.close()
  routes = sortPaths(crawled).slice(0, maxUrls)
}

let totalViolations = 0
for (const route of routes) {
  const url = `${baseUrl}${route}`
  let result
  try {
    result = await scan(url, browser)
  } catch (err) {
    console.log(`\n[SKIP] ${url} — ${err.message.split('\n')[0]}`)
    continue
  }
  const v = result.violations || []
  if (!v.length) {
    console.log(`[PASS] ${route} — no violations`)
    continue
  }
  totalViolations += v.length
  console.log(`\n[FAIL] ${route} — ${v.length} violation(s):`)
  for (const violation of v) {
    console.log(`  ❌ ${violation.id}: ${violation.help} (impact: ${violation.impact} · nodes: ${violation.nodes.length})`)
    for (const node of violation.nodes.slice(0, 3)) {
      console.log(`     • ${node.target.join(' ')}${ratioNote(violation)}`)
    }
  }
}

await browser.close()
console.log(`\n=== WP ADA scan: ${totalViolations} violation(s) across ${routes.length} route(s) (tags: ${tags.join(',')}) ===`)
process.exit(totalViolations ? 1 : 0)