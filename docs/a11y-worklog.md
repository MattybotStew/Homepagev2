# Children's Museum of Atlanta — Homepage v2 Accessibility Worklog

**Date:** 2026-08-21 · **Author:** Cline (AI coding agent)
**Repo:** `mattybotstew/Homepagev2` (React 18 + TypeScript + Vite 6, Tailwind CSS v4,
HashRouter, GitHub Pages at `mattybotstew.github.io/Homepagev2/`)

This document is the complete record of the accessibility work done in this session:
the tooling that was added, every change that was made, the verification results, and
the one item still outstanding. The concise how-to-run reference lives in
`docs/accessibility.md`; this is the full worklog.

---

## 1. What was asked and what was delivered

Two requests came in across the session:

1. **"I need accessibility tooling added to VS Code / the project."** The original
   guide was written for a **WordPress** site (pa11y against `localhost:8080`,
   `style.css`/`.php` greps). This repo is a **React + Vite SPA**, so the guide was
   adapted to this stack rather than followed literally (pa11y's old PhantomJS engine
   cannot render a Vite bundle; there is no `style.css`/`localhost:8080`).

2. **A partner email flagged accessibility issues** (from Anneke at the accessibility
   vendor): the accessibility toolbar button, the "blue/white navigation text"
   contrast, and "~50 colour-contrast issues" on the homepage.

**Result:** The site now passes **WCAG AA with 0 violations across 23 routes** (13
main pages + 10 detail pages), verified with a real axe-core + Playwright audit.
Build and ESLint are both green.

---

## 2. Tooling added (files)

| File | Purpose |
| --- | --- |
| `.vscode/extensions.json` | Recommends 3 a11y VS Code extensions (`deque-systems.vscode-axe-linter`, `maxvanderheyden.accessibility-checker`, `jonscott27.web-accessibility`) so the team gets prompted to install them. |
| `eslint.config.mjs` | Flat ESLint config that activates `eslint-plugin-jsx-a11y` (was already a devDependency but had **no config**, so it was doing nothing). A11y rules are set to `warn` so they surface in the Problems panel without failing `npm run lint`. Also wires React + React Hooks + TypeScript. |
| `eslint.a11y.config.mjs` | Reuses the base config and promotes **every** jsx-a11y rule to `error` — a strict a11y gate (exit 1 on any violation). |
| `scripts/a11y.mjs` | The main audit. Uses Playwright (already installed) + axe-core (already installed) to load each route, **scroll through the page so `motion` `whileInView`/staggered animations complete**, then run axe. Scans 23 routes. Exit code `1` if any violations are found. |
| `lighthouserc.json` (modified) | Fixed the stale port `5175 → 4173` and added `startServerCommand: "npm run preview -- --port 4173 --strictPort"` so Lighthouse CI can start its own server. |
| `docs/accessibility.md` | How-to-run reference + summary of the fixes. |

New npm scripts added to `package.json`:

```jsonc
"a11y": "node scripts/a11y.mjs",              // scan a running dev server (default localhost:5173)
"a11y:preview": "npm run build && (vite preview --port 4173 --strictPort &) && sleep 3 && node scripts/a11y.mjs --url http://localhost:4173/Homepagev2/",
"lint": "eslint .",                            // green; a11y shown as warnings
"lint:a11y": "eslint . --config eslint.a11y.config.mjs"  // strict a11y gate
```

New devDependencies installed (with npm):
- `typescript-eslint` — needed to lint `.tsx` files (ESLint's default parser can't parse TypeScript).
- `eslint-plugin-react-hooks` — so `eslint-disable-next-line react-hooks/exhaustive-deps` comments in the code resolve.
- Playwright **Chromium** browser downloaded (for the audit).

> The generic pa11y / puppeteer / `@localhost:8080` workflow from the original guide
> was **not** used — it cannot run this Vite/React SPA. `scripts/a11y.mjs` reuses
> Playwright + axe-core, which are already in the repo.

---

## 3. Why the audit initially found 55 violations (and the methodology fix)

Two distinct causes:

- **Real WCAG AA issues** (the bulk): low-contrast colors — translucent navy/teal/orange
  text, white text on bright orange, bright teal eyebrows, faint placeholder text,
  plus structural issues (missing `<main>` landmark, missing `h1`, skipped heading
  levels, unlabeled form fields, icon-only links without accessible names).
- **False positives from animations**: the site is motion-heavy (every section uses
  `motion` `whileInView` / staggered opacity fades). Scanning at page-load caught
  below-the-fold content **mid-fade at low opacity**, which made axe compute bogus
  low-contrast colors. Fixing the audit methodology (scroll each page first so all
  animations finish) eliminated a whole class of false failures.

---

## 4. The fixes (55 → 0 violations)

### 4a. Design token changes (`src/styles/theme.css`)

These four tokens were darkened so their text/on-background usage meets AA (4.5:1)
on white, cream, and the tinted backgrounds used across the site.

| Token | Before | After | Why |
| --- | --- | --- | --- |
| `--cma-teal-dark` | `#007c87` | `#00707a` | Passes on white (5.9:1), cream, and `teal-pale`. Fixes teal-dark badges/links/eyebrows on light backgrounds. |
| `--cma-orange-dark` | `#b8620a` | `#9c4f04` | White text on it goes 4.38 → 5.9:1. Fixes orange-dark text, badges, and the orange-dark marquee tile. |
| `--cma-gray` | `#78787a` | `#6b7280` | 4.41 → 4.83:1. Fixes testimonial locations and other gray meta text. |
| `--cma-blue-light` | `#d4e3f3` | `#e3ecfa` | Passes on `teal-dark` (4.9:1). Fixes the "blue-light on teal-dark" eyebrow/text on pricing cards. |

### 4b. Color/text contrast fixes

- **Low-opacity navy text** — `text-cma-navy/40`, `/45`, `/50`, `/60`, `/65`, `/70`
  → `/80` (≈6:1 on white) across the sidebar "Jump to" nav, event/contact cards,
  membership pricing, and the support page.
- **Orange CTA buttons** — navy text on orange was 4.27:1 (just under AA). Changed
  the text from `text-cma-navy`/`text-white` to **`text-cma-navy-dark`** (5.9:1) on
  every `bg-cma-orange` button.
- **Orange stat cards** (AboutHero, DonateHero, FundraisingEventContent) — white text
  on `bg-cma-orange` → **navy text** (navy-on-orange passes, white-on-orange is 2.28:1).
- **Orange text on white** — event hours, "Separate Ticket Required" pill, fundraising
  amounts, and ImpactPage stats (`180,000+`, `12,000+`, `4,456`) switched to
  `text-cma-orange-dark`.
- **Teal eyebrows** — bright teal is 2.7:1 on white. Eyebrows on white/cream →
  `text-cma-teal-dark`; eyebrows on navy heroes → `text-cma-teal-light`.
- **Marquee tiles** (`cmaMarqueeColors.ts`) — `bg-cma-teal` + white → `bg-cma-teal-dark`
  + white (2.72 → 4.9:1).
- **Fundraising sponsor "LOGO" placeholders** — `text-cma-navy/30` → solid `text-cma-navy`
  (was 1.3:1 on the light gray tile).
- **Instagram "Special Guest" bubble** — this text sits on a photo; axe blends the
  bubble color with the image behind it. Moved the label onto a **`bg-cma-navy`** chip
  so the contrast is guaranteed regardless of the photo.
- **AboutTestimonials location** — `text-cma-slate/60` → `/80`.

### 4c. Structural / semantic fixes

- **Single `<main>` landmark** — wrapped `<Routes>` in `<main>` in `src/main.tsx`
  (and changed the homepage's own `<main>` to `<div>` to avoid nesting). This removed
  `landmark-one-main` + `region` violations from every non-home page.
- **Header logo link** — added `aria-label="Children's Museum of Atlanta"` (the logo is
  an SVG with no text, so the link had no accessible name).
- **ExhibitsHero** — main title `h2` → `h1` (the `/exhibits` page was missing a
  level-1 heading).
- **PlanTabs** — sub-headings `h4` → `h3` (were skipping a level).
- **Footer** — column headings `h3` → `p` (styled identically; the `h1` → `h3` jump was
  flagging heading-order on News/Resources).
- **Social buttons** (PlanTabs) — added `aria-label` (Facebook/Instagram/TikTok) so the
  icon-only links have accessible names.
- **All form fields** — wired `id` + `htmlFor` on the Contact page (First/Last name,
  phone, email, Department topic select, Message) **and** all program-request forms:
  Field Trips, Scouts (3 selects), Museum On-the-Go (4 selects), Educator PD (2
  selects), Corporate Membership (1 select). This fixed `select-name` / input labeling.

---

## 5. Verification results

| Check | Command | Result |
| --- | --- | --- |
| Axe audit (23 routes) | `npm run a11y` / `node scripts/a11y.mjs` | **0 violations** (was 55) · exit 0 |
| Production build + scan | `npm run a11y:preview` | **0 violations** · build passes |
| ESLint | `npm run lint` | green (exit 0), a11y shown as warnings |
| A11y gate | `npm run lint:a11y` | exit 1 (strict gate — intentional, flags non-AA items axe doesn't, e.g. `href="#"` placeholders) |
| Build | `npm run build` | exit 0 |

Audit route coverage (23): `/`, plan-your-visit, exhibits, events, educators,
museum-store, news, resources/playful-learning, about, donate, memberships, support,
contact, exhibits/fundamentally-foods, events/trick-or-treat, news/tinycon-recap,
resources/playful-learning/playdough-explorations, program/field-trips,
giving-circles/imagination-ball, memberships/information, about/impact, about/careers,
support/corporate-partners.

---

## 6. Full list of files changed

**New files:**
- `.vscode/extensions.json`
- `docs/accessibility.md`
- `eslint.config.mjs`
- `eslint.a11y.config.mjs`
- `scripts/a11y.mjs`

**Modified (package / config):**
- `package.json`, `package-lock.json` (scripts + devDeps)
- `lighthouserc.json`
- `.clinerules` (session state)
- `src/main.tsx`, `src/app/App.tsx`
- `src/styles/theme.css`, `src/styles/index.css`

**Modified (components — 55 files):** the fixes above touched most section components
(e.g. `AboutHero`, `DonateHero`, `FundraisingEventContent`, `EventContent`,
`CalendarPage`, `ImpactPage`, `NewsPage`, `PlayfulLearningPage`, `Footer`, `Header`,
`PlanTabs`, `ExhibitsHero`, `MembershipPlans`, `AdmissionPricing`,
`MembershipSavingsCalculator`, `InstagramSection`, `cmaMarqueeColors`, all five
program-content form files, `ContactPage`, `CareersPage`, `SupportPageContent`,
`CorporatePartnerPageContent`, `MuseumStoreHero`, `SpecialExperiences`, and others —
see `git status` for the exact set).

---

## 7. How to re-run the audit

```bash
# Terminal 1 — start the dev server
npm run dev

# Terminal 2 — run the axe audit (23 routes)
npm run a11y

# Or build + preview + audit in one shot (no dev server needed)
npm run a11y:preview

# In-editor lint (a11y as warnings in the Problems panel)
npm run lint

# Strict a11y gate (exit 1 on violations)
npm run lint:a11y
```

`scripts/a11y.mjs` accepts `--url` (base URL) and `--tags` (axe rule tags). It scrolls
each route before scanning so animations complete — do not remove that step or you
will reintroduce false color-contrast failures.

---

## 8. Outstanding / notes

- **Accessibility toolbar button** — this is the **partner's** widget code (their
  email: "our toolbar launcher code", ticket logged to send it over). It is **not in
  this repo** (searched for audioeye/userway/toolbar — nothing local beyond a "Recite
  Me" mention in content). When the updated toolbar code arrives, wire it in. The
  size/icon-prominence feedback is a partner-side design decision.
- **Design tokens were darkened** (teal-dark, orange-dark, gray, blue-light) to reach
  AA. These are modest shade shifts; worth a quick visual once-over to confirm the
  slightly darker orange/teal reads well in the brand.
- **`npm run lint:a11y` is intentionally strict** and will exit 1 — it flags a11y
  issues that the AA axe audit doesn't (e.g. `href="#"` placeholder links, ambiguous
  "Learn More" link text). The release gate for WCAG AA is `npm run a11y` (0 violations).


