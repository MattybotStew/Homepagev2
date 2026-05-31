# Children's Museum of Atlanta — Homepage v2: Project Context

This document gives a complete picture of how this codebase is structured so you can contribute accurately without needing to explore the repo from scratch.

---

## What this is

A React SPA that serves as the public website for the Children's Museum of Atlanta (CMA). It is deployed to GitHub Pages at `https://mattybotstew.github.io/Homepagev2/`. It is a static front-end only — no backend, no SSR. Content is hard-coded in TypeScript data files (with a headless WordPress integration in progress but not yet used for any page content).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animations | `motion/react` (formerly Framer Motion) |
| Router | `react-router-dom` with **HashRouter** |
| Icons | Font Awesome free tier via `@fortawesome/react-fontawesome` |
| UI primitives | Radix UI (wrapped in `src/app/components/ui/` — shadcn pattern) |
| Fonts | Nunito (Google Fonts, loaded in `src/styles/fonts.css`) |
| Deploy | GitHub Actions → GitHub Pages (`actions/deploy-pages@v4`) |

---

## Critical routing detail

The app uses **`HashRouter`**, not `BrowserRouter`. Every internal link must use the `#/` prefix:

```tsx
// Correct
<Link to="/plan-your-visit">…</Link>        // react-router Link (hash handled automatically)
<a href="#/plan-your-visit">…</a>           // plain anchor (must include #)

// Wrong
<a href="/plan-your-visit">…</a>            // breaks on GitHub Pages
```

`navLinks.ts` stores all nav hrefs as `"#/path"` strings. When comparing against `useLocation().pathname`, strip the `#` prefix.

---

## File structure

```
src/
├── main.tsx                  # Entry point: router, lazy imports, ErrorBoundary, ScrollToTop
├── app/
│   ├── App.tsx               # Homepage (route "/") — assembles section components
│   ├── pages/                # One file per route (lazy-loaded in main.tsx)
│   ├── components/           # Section/feature components used by pages
│   │   └── ui/               # Radix UI wrappers (shadcn pattern) — rarely touched
│   └── data/                 # All static content as typed TS arrays
├── assets/                   # All images (must be .webp), SVGs
├── styles/
│   ├── theme.css             # Design tokens + base element styles (h1–h4, p, button)
│   ├── index.css             # Utility classes (.cma-*), @keyframes, component helpers
│   ├── fonts.css             # Google Fonts @import
│   └── tailwind.css          # @import "tailwindcss"
├── imports/                  # OLD Figma-generated code — do not use or reference
└── vite-env.d.ts
```

`src/imports/` is dead code from early Figma exports. Ignore it entirely.

---

## Routes (all registered in `src/main.tsx`)

| Path | Page component | Notes |
|---|---|---|
| `/` | `App.tsx` | Homepage |
| `/plan-your-visit` | `PlanYourVisitPage` | |
| `/book-your-visit` | `BookYourVisitPage` | |
| `/exhibits` | `ExhibitsPage` | |
| `/exhibits/:slug` | `ExhibitPage` | Data from `exhibits.ts` |
| `/events` | `CalendarPage` | |
| `/events/:slug` | `EventPage` | Data from `events.ts` |
| `/educators` | `EducatorsPage` | |
| `/program/:slug` | `ProgramPage` | Slugs: `field-trips`, `scout-workshops`, `museum-on-the-go`, `educator-professional-development` |
| `/museum-store` | `MuseumStorePage` | |
| `/news` | `NewsPage` | |
| `/resources/playful-learning` | `PlayfulLearningPage` | |
| `/about` | `AboutPage` | |
| `/about/impact` | `ImpactPage` | |
| `/about/careers` | `CareersPage` | |
| `/donate` | `DonatePage` | |
| `/memberships` | `MembershipsPage` | |
| `/memberships/information` | `MembershipInfoPage` | |
| `/support` | `SupportPage` | |
| `/support/legacy` | `LegacyPage` | |
| `/support/corporate-partners` | `CorporatePartnerPage` | |
| `/support/donor-recognition` | `DonorRecognitionPage` | |
| `/giving-circles/:slug` | `GivingCirclePage` | Slugs: `imagination-ball`, `tournament-for-play`, `young-professionals`, `dream-builders` |
| `/contact` | `ContactPage` | |

**No dedicated pages:** Birthday Parties (→ `/book-your-visit`), Press/Media (→ `/contact`).

---

## Data layer

All content lives in `src/app/data/`. Pages read from these files; there is no API call at runtime.

| File | Type | Used by |
|---|---|---|
| `exhibits.ts` | `Exhibit[]` | `ExhibitsPage`, `ExhibitPage` |
| `events.ts` | event objects | `CalendarPage`, `EventPage` |
| `programs.ts` | `Program[]` | `ProgramPage`, `EducatorsPage` |
| `givingCircles.ts` | `Program[]` | `GivingCirclePage` (reuses `Program` type) |
| `articles.ts` | article objects | `NewsPage`, `ArticlePage` |
| `resources.ts` | resource objects | `PlayfulLearningPage` |
| `navLinks.ts` | `NavLink[]` | `Header`, `MobileHeader`, `Footer` |

To add a new exhibit: add an entry to `exhibits.ts` with a unique `slug`. The route `/exhibits/:slug` handles it automatically.

To add a new giving circle: add an entry to `givingCircles.ts`. The route `/giving-circles/:slug` handles it automatically.

To add a new educator program: add an entry to `programs.ts` and add the slug condition in `ProgramPage.tsx`.

---

## CSS architecture — two files, strict separation

### `src/styles/theme.css`
Design tokens and base element styles only.

- All `--cma-*` CSS custom properties (colors, type scale)
- Global element styles: `h1`, `h2`, `h3`, `h4`, `p`, `button`, `input`, `label`
- Tokens are exposed to Tailwind via `@theme inline { --color-cma-*: var(--cma-*) }`

### `src/styles/index.css`
Utility classes and animations.

- `.cma-*` utility classes (`.cma-btn`, `.cma-eyebrow`, `.cma-text-link`, `.cma-section-container`, etc.)
- `@keyframes` for all animations
- Component-scoped helpers (`.cma-testimonial-card`, `.cma-filter-pill`, etc.)

**Rule:** Never duplicate styles across components. Extract to one of these files first.

---

## Brand design tokens

All colors are CSS custom properties used as Tailwind classes (`text-cma-navy`, `bg-cma-orange`, etc.). Never hardcode hex values that match a token.

| Token | Hex | Tailwind class |
|---|---|---|
| `cma-navy` | `#1d3e6b` | `text-cma-navy` / `bg-cma-navy` |
| `cma-orange` | `#f7941e` | `bg-cma-orange` |
| `cma-orange-dark` | `#b8620a` | `bg-cma-orange-dark` |
| `cma-teal` | `#00ADBB` | `bg-cma-teal` |
| `cma-teal-dark` | `#007c87` | `text-cma-teal-dark` |
| `cma-teal-light` | `#4AD1DC` | `bg-cma-teal-light` |
| `cma-teal-pale` | `#cceff1` | `bg-cma-teal-pale` |
| `cma-blue-mid` | `#346094` | `bg-cma-blue-mid` |
| `cma-blue-light` | `#d4e3f3` | `bg-cma-blue-light` |
| `cma-slate` | `#2c3a52` | `bg-cma-slate` |
| `cma-cream` | `#fdf6ee` | `bg-cma-cream` |
| `cma-gray` | `#78787a` | `text-cma-gray` |

---

## Type scale

Defined in `theme.css` as custom properties, applied globally to HTML elements:

| Element | Token | Value | Weight | Line-height |
|---|---|---|---|---|
| `h1` | `--cma-text-display` | `clamp(34px, 5.9vw, 75px)` | 900 | 0.95 |
| `h2` | `--cma-text-h2` | `clamp(28px, 3.75vw, 48px)` | 800 | 1.1 |
| `h3` | `--cma-text-h3` | `20px` | 900 | 1.1 |
| `p` | `--cma-text-body` | `15px` | 500 | 1.65 |
| `button` | — | `15px` | 900 | 1.0 |
| `.cma-eyebrow` | `--cma-text-eye` | `15px` | 700 | 1.0, 3.9px letter-spacing, uppercase |

Do not re-declare these inline on components — they are global.

For responsive font sizes use `clamp(min, Xvw, max)`. Formula: `vw% = target_px / 1440 * 100`.

---

## Page shell — every page uses this exact wrapper

```tsx
<div className="size-full relative">
  <AlertBanner />
  <div className="lg:hidden"><MobileHeader /></div>
  <div className="hidden lg:block"><Header /></div>
  <div className="hidden lg:block"><ScrollProgress /></div>
  {/* page-specific sections */}
  <PowerOfPlayMarquee />
  <Footer />
</div>
```

`AlertBanner` is the thin teal strip at top. `ScrollProgress` is the teal reading-progress bar (desktop only). `PowerOfPlayMarquee` is the scrolling "The Power of Play" strip above the footer. Every page ends with these two.

---

## Page templates — four established patterns

### 1. Hero + stacked sections
Full-width sections stacked vertically. Used by: `ContactPage`, `DonatePage`, `BookYourVisitPage`.

### 2. Sidebar + article card
Two-column layout: sticky 210px sidebar with jump-nav + newsletter widget on left; main white `rounded-[24px]` card on right with `Divider`-separated sections. Used by: `FieldTripsProgramContent`, `MuseumOnTheGoProgramContent`, `ScoutsProgramContent`, `EducatorPDProgramContent`. Use for educator programs with 6+ sections, FAQs, and a request form.

Component: `ArticleContentWithSidebar` — accepts a `sections` array for the sidebar nav and renders children.

### 3. ArticleContentWithSidebar (giving circles / exhibits)
Data-driven detail page. Used by: `GivingCirclePage`, `ExhibitPage`. Data comes from `givingCircles.ts` or `exhibits.ts`.

### 4. GivingHero + sections
`GivingHero` component at top (accepts `eyebrow`, `heading`, `subtitle`, `body`, `stats[]`, `ctas[]`), then content sections, then `Testimonials` + `PYVCallout`. Used by: `SupportPage`, `LegacyPage`, `CorporatePartnerPage`.

---

## Button and link conventions

### CTA buttons (pill shape)
```tsx
// <a> tag CTA — must include font-black explicitly (global button style doesn't apply to <a>)
<a href="#/…" className="cma-btn bg-cma-orange text-white font-black hover:bg-cma-orange-dark">
  Buy Tickets
</a>

// <button> element — font-black comes from global button style
<button className="cma-btn bg-cma-teal text-white hover:bg-cma-teal-dark">
  Submit
</button>
```

`.cma-btn` provides: `inline-flex`, `rounded-[1000px]`, `px-[24px] py-[13px]`, `font-size: 15px`, `font-weight: 900`, `transition`.

Outline variant: `.cma-btn-outline-teal` (white bg, teal border → fills teal on hover).

### Text links
- `.cma-text-link` — standalone action links outside paragraph copy ("Learn More", "Get Directions"). Teal colour, underline on hover/focus-visible only.
- Do not use `.cma-text-link` for links inside paragraph body copy (those need always-visible underline per WCAG).

### Shared shadows
| Class | Use case |
|---|---|
| `shadow-cma-warm` | Cards with orange accent |
| `shadow-cma-panel` | Expanded overlay panels |
| `shadow-cma-btn` | Button drop shadow |
| `shadow-cma-card` | General content cards |

---

## FAQ accordion — two intentional patterns

**Standalone FAQ sections** (e.g. `PlanYourVisitFAQs`, `ContactPage`):
- Each item is its own `rounded-[24px]` card with `border-2 border-black/5`
- Open: `bg-cma-teal-pale`, `font-black` label
- Closed: `bg-white`, `font-semibold` label
- Icon: `faPlus`/`faMinus` in `text-cma-orange text-[12px]` on right

**Embedded program content FAQs** (inside sidebar+article pages):
- Flat `border-b border-black/10` list inside the existing white content card
- `font-extrabold` label, same orange icon
- Do not change to card style — they live inside a card already

---

## Images

- All images in `src/assets/` must be `.webp`. Source `.jpg`/`.png` files exist alongside their `.webp` versions as originals — always import and use the `.webp`.
- Import images as ES modules (`import heroImg from '../../assets/hero-bg.webp'`) — do not use string paths.
- Some assets have hash-named files (e.g. `1bfa9acf….webp`) — these were Figma-exported and are used as-is.
- SVGs are used for decorative elements (waves, icons, squiggles) and are imported directly.

---

## Key shared components

| Component | What it does |
|---|---|
| `Header` | Desktop nav with dropdown submenus. Data from `navLinks.ts`. |
| `MobileHeader` | Mobile nav with slide-out drawer. |
| `AlertBanner` | Thin teal top strip with scrolling announcement text. |
| `ScrollProgress` | Teal reading-progress bar, desktop only. |
| `Hero` | Homepage hero with full-bleed image, headline, CTA buttons, hours widget overlay. |
| `GivingHero` | Reusable hero for giving/support pages. Accepts props for eyebrow, heading, stats, CTAs. |
| `PowerOfPlayMarquee` | "The Power of Play" scrolling strip, appears above footer on every page. |
| `Footer` | Four-column nav + social links + address. Data from `navLinks.ts`. |
| `Testimonials` | Three-column testimonial card grid. |
| `PYVCallout` | "Plan Your Visit" callout strip with CTA. |
| `ArticleContentWithSidebar` | Two-column layout shell used by program and giving circle pages. |
| `MuseumHoursWidget` | Expandable hours panel shown in Hero and header. |
| `PlanYourVisitFAQs` | Canonical standalone FAQ accordion implementation. |
| `Marquee` | Scrolling exhibit/event card strip on homepage. |

---

## Animations

All scroll-triggered animations use `motion/react` (`import { motion } from 'motion/react'`). Standard entry pattern:

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

CSS-only animations (marquee scroll, wave float) are defined as `@keyframes` in `index.css` and applied via `.cma-*` utility classes.

---

## Eyebrow convention

The `.cma-eyebrow` class is used for small uppercase label text above section headings (e.g. "OUR EXHIBITS", "PLAN YOUR VISIT"). Always wrap the section in `overflow-hidden` because the 3.9px letter-spacing can overflow at narrow viewports:

```tsx
<section className="overflow-hidden …">
  <p className="cma-eyebrow text-cma-teal">OUR EXHIBITS</p>
  <h2>…</h2>
</section>
```

---

## Section container

Use `.cma-section-container` for consistent max-width and horizontal padding across sections:

```tsx
<section className="bg-cma-cream py-20">
  <div className="cma-section-container">
    {/* content */}
  </div>
</section>
```

This class provides: `max-width: 1280px`, `margin: auto`, `px: 20px → 40px → 80px` at sm/md breakpoints.

---

## Build

```bash
npm run dev       # Vite dev server at http://localhost:5173/Homepagev2/
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

`vite.config.ts` key settings:
- `base: '/Homepagev2/'` — required for GitHub Pages subdirectory deploy
- `build.minify: 'terser'` with aggressive compression
- Manual chunk splitting: `vendor-react`, `vendor-motion`, `vendor-icons`, `vendor-ui`, `vendor-utils`
- All page components are lazy-loaded in `main.tsx` via `React.lazy()`
- Four critical pages are preloaded in the background on startup: Exhibits, Plan Your Visit, About, Educators

---

## WordPress integration (in progress)

A headless WordPress instance runs at `cma-wordpress.local` (HTTP, local dev only). REST API hooks are wired in but no page currently fetches from it — all content is still in the TypeScript data files. Custom post types have not been set up yet. Do not add WordPress data fetching to any page without confirming the integration is ready.

---

## What NOT to do

- Do not add `font-family`, `font-size`, or `font-weight` inline to elements that already get these from global `h1`–`p` styles in `theme.css`.
- Do not hardcode brand hex values — use `cma-*` tokens.
- Do not use `BrowserRouter` — the app uses `HashRouter` throughout.
- Do not reference anything in `src/imports/` — it is dead code.
- Do not add comments explaining what code does — only add comments for non-obvious constraints or workarounds.
- Do not add error handling or fallbacks for scenarios that cannot happen in a static SPA.
- Do not create new page templates — match one of the four established patterns above.
- Do not use `<a href="/path">` for internal links — use `<Link to="/path">` (react-router) or `<a href="#/path">` for plain anchors.
