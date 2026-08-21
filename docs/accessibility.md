# Accessibility Testing & Audit

How to run accessibility tooling in this project, plus the results of an initial
axe-core audit (August 2026) and the outstanding items.

> 📖 **Full record of everything done (tooling + every fix): see
> [`docs/a11y-worklog.md`](./a11y-worklog.md).** This file is the quick reference;
> the worklog is the complete narrative.

> ⚠️ The generic "pa11y / puppeteer / WordPress @ localhost:8080" workflow from the
> original a11y guide does **not** apply here. This is a **React + Vite** SPA. Pa11y
> ships an old PhantomJS engine that cannot render a modern Vite bundle, and the
> WordPress file greps target `style.css`/`.php` which don't exist. Everything below
> is adapted to this stack and reuses tooling already in `package.json`.

## One-time setup (done — committed)

- `typescript-eslint` added as a devDependency (needed to lint `.tsx`).
- Playwright Chromium browser downloaded for local auditing.
- `.vscode/extensions.json` recommends three a11y VS Code extensions
  (`deque-systems.vscode-axe-linter`, `maxvanderheyden.accessibility-checker`,
  `jonscott27.web-accessibility`).
- `eslint.config.mjs` enables `eslint-plugin-jsx-a11y` (already a dep but previously
  had no config → was doing nothing). A11y rules are `warn` so they surface in the
  Problems panel without failing `npm run lint`.

## Daily commands

```bash
# In-editor (Problems panel)
npm run lint          # full eslint, jsx-a11y warnings included
npm run lint:a11y     # only jsx-a11y rules, promoted to errors

# Real rendered-DOM audit with axe-core (Playwright + axe-core, no new deps)
npm run dev           # terminal 1: dev server on :5173
npm run a11y          # terminal 2: scan homepage + 12 key routes

# One-shot: build, serve preview on :4173, scan (no dev server needed)
npm run a11y:preview

# Custom base URL / rule tags
node scripts/a11y.mjs --url http://localhost:4173/Homepagev2/ --tags wcag2aa

# Lighthouse accessibility audit (server auto-starts via lighthouserc.json)
npx lhci autorun
```

`scripts/a11y.mjs` loads the app in headless Chromium, injects axe-core, and scans
23 routes. Exit code is `1` if any violations are found.

## Audit results (before → after all fixes)

| Metric | Before | After |
| --- | --- | --- |
| Total violations (23 routes, axe wcag2a/aa) | 55 | **0** |
| `color-contrast` | ~50 | **0** |
| `landmark-one-main` / `region` | every non-home page | **0** |
| `link-name` / `heading-order` / `page-has-heading-one` / `select-name` | several | **0** |

The audit now **passes with zero violations** on every route. `scripts/a11y.mjs`
scrolls through each page before scanning so `motion` `whileInView`/staggered
animations complete — scanning mid-fade otherwise reports false color-contrast
failures for below-the-fold content.

### Fixed (systemic)

1. **Single `<main>` landmark** — wrapped `<Routes>` in `<main>` in `main.tsx`;
   homepage's own `<main>`→`<div>`. Kills `landmark-one-main` + `region`.
2. **Header logo link** — added `aria-label`.
3. **Footer legal links** — `text-white/50`→`text-white/70` (the partner's
   "blue/white navigation text", 3.94→~7:1).
4. **Low-opacity navy text** — `text-cma-navy/40..70`→`/80` (≈6:1 on white)
   across the sidebar nav, event/contact cards, and support page.
5. **Gray token** — `--cma-gray` `#78787a`→`#6b7280` (4.83:1).
6. **Teal token** — `--cma-teal-dark` `#007c87`→`#00707a` (passes on white, cream,
   and teal-pale). Teal eyebrows on white/cream→`teal-dark`, on navy→`teal-light`.
7. **Orange token** — `--cma-orange-dark` `#b8620a`→`#9c4f04` (white text 5.9:1).
   Orange CTA buttons switched from `text-cma-navy`/`text-white` to
   `text-cma-navy-dark` (navy-on-orange was 4.27:1, now 5.9:1).
8. **Blue-light token** — `--cma-blue-light` `#d4e3f3`→`#e3ecfa` (passes on teal-dark).
9. **Orange stat cards** (AboutHero/DonateHero) — white text on `bg-cma-orange` →
   navy text; orange `1988`/`Today` history numbers → `orange-dark`.
10. **Marquee tiles** — `bg-cma-teal`+white → `bg-cma-teal-dark`+white.
11. **Structural** — ExhibitsHero `h2`→`h1`; PlanTabs `h4`→`h3`; Footer column
    headings `h3`→`p` (was skipping levels); PlanTabs social buttons got
    `aria-label`; **all form fields** (Contact page + Field Trips, Scouts, MOTG,
    Educator PD, Corporate Membership) wired with `id`+`htmlFor`.
12. **Instagram "Special Guest" bubble** — moved onto a `bg-cma-navy` chip (axe
    blends text over the photo background, so a dark chip guarantees AA).


## Notes for the accessibility-partner email (Anneke)

- **Toolbar launcher button** — this is the partner's own widget code ("our toolbar
  launcher code"), not in this repo (searched for audioeye/userway/toolbar — nothing
  local beyond the Recite Me mention in PlanTabs content). A ticket has been logged
  to send the updated toolbar code; wire it in when it arrives. Size/icon prominence
  is a partner-side design decision — reply asking them to match the live button.
- **Blue/white navigation contrast** — fixed in the footer legal links (see above).
  The desktop nav (white on navy) passes at ~10.6:1; the flagged failures were the
  translucent white legal links and the teal/gray text tokens listed above.

## Re-running the audit after changes

```bash
npm run a11y:preview   # builds + scans; compare totals to the 16 baseline above
```
