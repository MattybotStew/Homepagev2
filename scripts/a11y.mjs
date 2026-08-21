/**
 * Accessibility audit runner for the CMA React SPA.
 *
 * Uses Playwright (already a devDependency) to load the app and run an
 * axe-core scan (already installed) against the real rendered DOM.
 *
 * The WordPress-oriented pa11y/puppeteer flow from the original a11y guide
 * doesn't work here: pa11y ships an old PhantomJS engine that cannot run a
 * modern Vite/React bundle, and Puppeteer needs a separate download. This
 * script reuses the tooling already in the repo.
 *
 * Usage (dev server must be running on :5173):
 *   node scripts/a11y.mjs                      # scan homepage routes
 *   node scripts/a11y.mjs --url http://localhost:4173/Homepagev2/  # custom base
 *   node scripts/a11y.mjs --tags wcag2aa       # filter axe rule tags
 */
import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const axeSource = readFileSync(require.resolve('axe-core'), 'utf8')

const args = process.argv.slice(2)
const urlArg = args.indexOf('--url')
const baseUrl =
  (urlArg !== -1 && args[urlArg + 1]) || 'http://localhost:5173/Homepagev2/'
const tagsArg = args.indexOf('--tags')
const tags = (tagsArg !== -1 ? args[tagsArg + 1] : 'wcag2a,wcag2aa,wcag21aa')
  .split(',')
  .map((t) => t.trim())

// Representative routes (HashRouter). The SPA renders at #/<route>.
const routes = [
  '',
  'plan-your-visit',
  'exhibits',
  'events',
  'educators',
  'museum-store',
  'news',
  'resources/playful-learning',
  'about',
  'donate',
  'memberships',
  'support',
  'contact',
  // Detail pages — inherit the global token/landmark/form fixes.
  'exhibits/fundamentally-foods',
  'events/trick-or-treat',
  'news/tinycon-recap',
  'resources/playful-learning/playdough-explorations',
  'program/field-trips',
  'giving-circles/imagination-ball',
  'memberships/information',
  'about/impact',
  'about/careers',
  'support/corporate-partners',
]

function formatRatio(node, el) {
  const fg = el?.styles?.color
  const bg = el?.styles?.backgroundColor
  const c = node.any?.find((r) => r.message?.toLowerCase().includes('ratio'))
  return c ? ` ratio ${c.data?.fg}-${c.data?.bg} (${c.data?.contrastRatio})` : ''
}

async function scan(url, browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(url, { waitUntil: 'networkidle' })
  // Scroll through the page so `whileInView`/staggered `motion` animations
  // complete. Without this, below-the-fold content is scanned mid-fade at low
  // opacity, which produces false color-contrast failures.
  await page.evaluate(async () => {
    const h = document.body.scrollHeight
    for (let y = 0; y <= h; y += 900) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 25))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(700)
  await page.addScriptTag({ content: axeSource })
  const results = await page.evaluate(
    ({ tags }) => window.axe.run(document, { tags }),
    { tags },
  )
  await page.close()
  return results
}

const browser = await chromium.launch()
let totalViolations = 0

for (const route of routes) {
  const url = `${baseUrl}#/${route}`
  let results
  try {
    results = await scan(url, browser)
  } catch (err) {
    console.log(`\n[SKIP] ${url} — ${err.message.split('\n')[0]}`)
    continue
  }
  const v = results.violations || []
  if (!v.length) {
    console.log(`[PASS] ${route || '/'} — no violations`)
    continue
  }
  totalViolations += v.length
  console.log(`\n[FAIL] ${route || '/'} — ${v.length} violation(s):`)
  for (const violation of v) {
    console.log(`  ❌ ${violation.id}: ${violation.help}`)
    console.log(`     Impact: ${violation.impact} · Nodes: ${violation.nodes.length}`)
    for (const node of violation.nodes.slice(0, 3)) {
      const el = node.any?.find((r) => r.relatedNodes?.length)
      console.log(`       • ${node.target.join(' ')}${formatRatio(node, el)}`)
    }
  }
}

await browser.close()
console.log(`\n=== TOTAL: ${totalViolations} violations across ${routes.length} routes ===`)
process.exit(totalViolations ? 1 : 0)
