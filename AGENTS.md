# LLM Instructions — Children's Museum of Atlanta Homepage v2

This file is read by Claude Code and any other LLM assistants working in this repo.
Follow these conventions exactly. Do not introduce patterns that conflict with them.

## Shared Context (read every session)

Read `.clinerules` at the start of every session. It contains current project state, recent changes, open Figma items, and what Cline last did. After making significant changes, update `.clinerules` so Cline stays in sync — keep the "Last Updated", "Active Agent", "Last Commit", and "In Progress" / "Newly Unblocked" / "Still Blocked" fields current.

---

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (arbitrary values, CSS custom property tokens)
- `motion/react` for animations
- Figma MCP for design-to-code (node IDs extracted from Figma URLs)
- Font Awesome free tier via `@fortawesome/react-fontawesome` (SVG, tree-shaken)
  - Solid: `@fortawesome/free-solid-svg-icons`
  - Regular: `@fortawesome/free-regular-svg-icons`
  - Brands: `@fortawesome/free-brands-svg-icons`

---

## CSS Architecture

Two files — keep them separate:

- **`src/styles/theme.css`** — design tokens (`--cma-*` custom properties), base element styles (`h1`–`h4`, `p`, `button`, `input`, `label`). Nothing component-specific goes here.
- **`src/styles/index.css`** — utility classes (`.cma-*`), animations (`@keyframes`), component-scoped helpers. Organized with comments.

**Rule:** All repeating styles must be extracted to one of these files. Do not leave duplicate inline Tailwind classes across components when a shared utility class would serve. Always prefer editing an existing global class over adding inline overrides.

---

## Design Tokens

All brand colors are CSS custom properties exposed as Tailwind tokens via `--color-cma-*`:

| Token | Value |
|---|---|
| `cma-navy` | `#1d3e6b` |
| `cma-orange` | `#f7941e` |
| `cma-orange-dark` | `#b8620a` |
| `cma-teal` | `#00ADBB` |
| `cma-teal-dark` | `#007c87` |
| `cma-teal-light` | `#4AD1DC` |
| `cma-teal-pale` | `#cceff1` |
| `cma-blue-mid` | `#346094` |
| `cma-blue-light` | `#d4e3f3` |
| `cma-slate` | `#2c3a52` |
| `cma-cream` | `#fdf6ee` |

Use `text-cma-navy`, `bg-cma-orange`, etc. Do not hardcode hex values that match a token.

---

## Type Scale

Defined in `theme.css` as `--cma-text-*` custom properties and applied in base element styles:

| Scale | Token | Value | Element |
|---|---|---|---|
| XL | `--cma-text-display` | `clamp(34px, 5.9vw, 75px)` | `h1` — 900 weight, 0.95 line-height, -1px tracking |
| L  | `--cma-text-h2`      | `clamp(28px, 3.75vw, 48px)` | `h2` — 800 weight, 1.1 line-height, -0.02em tracking |
| M  | `--cma-text-h3`      | `20px` | `h3` — 900 weight, 1.1 line-height |
| S  | `--cma-text-body`    | `15px` | `p` — 500 weight, 1.65 line-height |
| EYE | `--cma-text-eye`   | `15px` | `.cma-eyebrow` — 700 weight, 100% line-height, 3.9px letter-spacing, uppercase |

For responsive font sizes use `clamp(min, Xvw, max)`. Formula: `vw% = target_px / 1440 * 100`.

---

## Global Element Styles (theme.css)

These apply to HTML elements globally — do not re-declare them inline on components:

- `h1` — Nunito, display size, 900 weight, 0.95 line-height, -1px tracking
- `h2` — Nunito (inherited), h2 size, 800 weight, 1.1 line-height
- `h3` — Nunito, 20px, 900 weight, 1.1 line-height
- `p`  — Nunito, 15px, 500 weight, 1.65 line-height
- `button` — Nunito, 15px, 900 weight, 1.0 line-height, `text-box-trim: trim-both`, `text-box-edge: cap alphabetic`

**Important:** Global `button` styles only apply to `<button>` elements, not `<a>` tags used as CTAs. Add `font-black text-[15px]` explicitly on `<a>` CTA elements.

---

## Link Styling Conventions

Two distinct patterns — never mix them:

### `.cma-text-link` — standalone action links
Use for card CTAs, section links, etc. that appear outside paragraph copy (e.g. "Buy Now", "Get Directions").

- Default: no underline, teal color only
- Hover: underline appears + shifts to darker teal (`#005a63`)
- Focus-visible: 2px outline ring + underline (keyboard navigation)

### `.cma-inline-link` — links embedded in paragraph copy (TODO: not yet implemented)
- Underline always visible (required by WCAG 1.4.1 — color alone is not sufficient when links are mixed with plain text)

---

## Button Sizing

Standard CTA button (used in Hero, PlanYourVisit, etc.):
- Padding: `px-[24px] py-[13px]`
- Border-radius: `rounded-[1000px]`
- Font: `font-black text-[15px]` (on `<a>` elements)

Do not use larger padding (e.g. `py-[22px]`) unless a specific section explicitly calls for it in Figma.

---

## Shadows

Use the shared shadow utilities from `index.css`:

| Class | Use |
|---|---|
| `shadow-cma-warm` | Cards with orange accent (e.g. MuseumHoursWidget) |
| `shadow-cma-panel` | Expanded overlay panels |
| `shadow-cma-btn` | Buttons |
| `shadow-cma-card` | General content cards |

---

## Page Shell Pattern

Every page uses the same wrapper — do not deviate:

```tsx
<div className="size-full relative">
  <AlertBanner />
  <div className="lg:hidden"><MobileHeader /></div>
  <div className="hidden lg:block"><Header /></div>
  <div className="hidden lg:block"><ScrollProgress /></div>
  {/* page content */}
  <PowerOfPlayMarquee />
  <Footer />
</div>
```

All pages are lazy-loaded in `src/main.tsx` and registered in the `<Routes>` block.

---

## Page Templates

Four established templates — pick the closest match before writing new layout code:

### 1. Hero + stacked sections (e.g. `ContactPage`, `DonatePage`)
Full-width sections stacked vertically. Use `Hero` or a custom navy hero at top. No sidebar.

### 2. Sidebar + article card (e.g. `FieldTripsProgramContent`, `MuseumOnTheGoProgramContent`)
Two-column: sticky 210px sidebar with jump-nav + newsletter widget; main white `rounded-[24px]` card with `Divider`-separated sections. Use for educator programs with 6+ deep sections, FAQs, and a request form. To add a new program: create `*ProgramContent.tsx` cloning the field trips shell, add the slug condition in `ProgramPage.tsx`, and add the data entry to `src/app/data/programs.ts`.

### 3. ArticleContentWithSidebar (e.g. `GivingCirclePage`, `ExhibitPage`)
Generic detail page. Data-driven via `givingCircles.ts` or `programs.ts`. Use for giving circles without a dedicated event format (Young Professionals, Dream Builders). Add entries to `src/app/data/givingCircles.ts`; the route `/giving-circles/:slug` handles them automatically.

### 3b. FundraisingEventContent (e.g. Tournament For Play, Imagination Ball, Fun On Tap)
Bespoke single-event layout: navy hero → breadcrumb/social → stats → schedule/award/leadership card(s) → photo strip → sponsor tiers → closing CTA → "Other Ways to Give". Used for ticketed fundraising events (galas, tournaments, trivia nights). Driven by the optional `fundraisingEvent` field on a `givingCircles.ts` entry — `GivingCirclePage` renders `FundraisingEventContent` automatically whenever that field is present, otherwise falls back to `ArticleContentWithSidebar`. To add a new event: add a `givingCircles.ts` entry with `fundraisingEvent` data, and link it from `Header.tsx`'s `donateSubPages`.

Photo strip and sponsor tiers swap order via the optional `photosAfterSponsors` boolean on `fundraisingEvent` (sponsors-then-photos instead of the default photos-then-sponsors) — used by Fun On Tap, which has no schedule/award/leadership card and leads with its sponsorship pitch instead.

### 4. GivingHero + sections (e.g. `SupportPage`, `CorporatePartnerPage`)
`GivingHero` component at top (accepts `eyebrow`, `heading`, `subtitle`, `body`, `stats[]`, `ctas[]`), followed by a content-specific component, then `Testimonials` + `PYVCallout` + `PowerOfPlayMarquee`. Use for all giving/fundraising landing pages.

---

## FAQ Standard

Two intentional accordion styles — do not mix them:

**Standalone FAQ sections** (e.g. `PlanYourVisitFAQs`, `CalendarPage`, `ContactPage`):
- Each item is its own `rounded-[24px]` card with `border-2 border-black/5`
- Open state: `bg-cma-teal-pale`, `font-black` label
- Closed state: `bg-white`, `font-semibold` label
- Icon: `faPlus`/`faMinus` in `text-cma-orange text-[12px]` on the right
- `PlanYourVisitFAQs` is the canonical reference

**Embedded program content FAQs** (e.g. inside `FieldTripsProgramContent`):
- Flat `border-b border-black/10` list inside the existing white content card
- `font-extrabold` label, same orange icon
- Do not change these to card style — they live inside a card already

---

## Route Map

All routes registered in `src/main.tsx`:

| Route | Page |
|---|---|
| `/` | Homepage |
| `/plan-your-visit` | PlanYourVisitPage |
| `/exhibits` | ExhibitsPage |
| `/exhibits/:slug` | ExhibitPage |
| `/events` | CalendarPage |
| `/events/:slug` | EventPage |
| `/educators` | EducatorsPage |
| `/program/:slug` | ProgramPage (field-trips, scout-workshops, museum-on-the-go, educator-professional-development) |
| `/museum-store` | MuseumStorePage |
| `/news` | NewsPage |
| `/resources/playful-learning` | PlayfulLearningPage |
| `/about` | AboutPage |
| `/about/impact` | ImpactPage |
| `/about/careers` | CareersPage |
| `/donate` | DonatePage |
| `/memberships` | MembershipsPage |
| `/memberships/information` | MembershipInfoPage |
| `/memberships/corporate` | CorporateMembershipPage |
| `/support` | SupportPage |
| `/support/corporate-partners` | CorporatePartnerPage |
| `/support/donor-recognition` | DonorRecognitionPage |
| `/giving-circles/:slug` | GivingCirclePage (imagination-ball, tournament-for-play, fun-on-tap, young-professionals, dream-builders) |
| `/contact` | ContactPage |

**No dedicated pages yet:** Birthday Parties (→ `/plan-your-visit`), Press/Media (→ `/contact`).

---

## Pending: Real Photography Batch (src/assets)

A batch of real exhibit/event/program photos and sponsor logos was dropped into `src/assets`, replacing the generic `educators-img-*`/`exhibits-*-hero`/gray "LOGO" placeholders used across the site. Remove this section once the batch is fully wired in or resolved.

**Confirmed mappings (ready to wire in):**

| Asset | Replaces | Location |
|---|---|---|
| `kratts.png` | Wild Kratts placeholder | FieldTrips/MuseumOnTheGo featured exhibits, exhibits.ts |
| `mcstuff.png` | Doc McStuffins placeholder | Featured exhibits (href="#" currently) |
| `amazing-castle.png` | Amazing Castle placeholder | Featured exhibits (href="#" currently) |
| `fundamentally-foods.png`, `gateway-to-the-world.png`, `outside-the-box.png`, `place-in-space.png`, `step-up-to-science.png`, `Leaping-into-Learning.png`, `ObstacleAdventure.png` | generic exhibit placeholders | `exhibits.ts` (1:1 slug match) |
| `Tiny-con.png`, `gabby-doll-house.png`, `bubble-bash.png`, `artsy-Mondays.png` | generic event placeholders | `events.ts` (1:1 slug match) |
| `FT-Museum-Floor.png`, `FT-Mezz.png` | imgFloor/imgMezz | Field Trips + Museum-On-the-Go "Museum Floor / Mezzanine" cards |
| `donateHerp.png` | hero-donate.webp | DonateHero background |
| `memhero.png` | hero-memberships.webp | MembershipsPage hero background |
| `whyBuyOnline.png` | imgPhoto | BuyOnlineBenefits "Why Buy Online" photo |
| `careers1.png` / `careers2.png` | imgJoin/imgVolunteer | CareersPage "Join Our Team" / "Volunteer" photos |
| `educator-professional.png` | imgPD | EducatorPD overview photo (alt text matches exactly) |
| `museum-on-the-go.png` | imgMezz (overview slot) | MuseumOnTheGo overview photo (alt="Museum On-the-Go") |
| `imgBall-logo.png` (dup of old `imgBall.png`) | — | Imagination Ball logo |
| `pNC-Tour-logo.png` (dup of old `tounyLogo.png`) | gray "LOGO" placeholder | Tournament For Play "Presenting" sponsor (PNC Bank) |
| `pnc1-5.png`, `imaginationBall1-4.png` | generic photo-strip images | Tournament For Play / Imagination Ball photo strips |

**Unresolved — ask the user before guessing:**

| Asset | Open question |
|---|---|
| `fun1-4.png` (520×460) | Fun On Tap has no past-event photo strip (event hasn't happened) — add one? |
| `FUnOnTap-logo.png` (4500×4500) | Different/higher-res version of the already-wired `fun-on-tap-final.webp` logo — replace it, or used elsewhere? |
| `about2/3/4/6.png` | No matching 4-image slot found on the About page. |
| `mus-store2/3.png` | No matching slot found on Museum Store page. |
| `ep-make.png` (376×226) | No clear destination in EducatorPD content. |
| `FRONT.png`, `develop-1.png`, `young.png` | Generic names, no obvious destination. |
| `ed-contact2.png` vs `education-contact.png` | Both look like candidates for EducatorsImpact's "Meet Your Education Contact" photo — unclear which, or if one goes elsewhere. |
| ` field-trip.png` (note leading space in filename), `MOTG.png` | Likely `programs.ts` card images for Field Trips / Museum On-the-Go, not fully certain. |

---

## Figma MCP

The Figma Dev Mode MCP server runs locally on the Figma desktop app at `http://127.0.0.1:3845`. It uses SSE — you must open a persistent SSE connection first to get a session ID, then POST messages to `/messages?sessionId=<id>`.

Available tools: `get_design_context`, `get_metadata`, `get_screenshot`, `get_variable_defs`.

`get_metadata` without a `nodeId` returns the list of all pages in the open file.
`get_metadata` with a page ID returns the full XML layer tree for that page.

The Figma file key is `Ng7kGBnR3uDuuaae0VbPMW`. Key pages:
- `6:122` — Design [WIP] (all page designs)
- `6:124` — Dev [handoff]
- `2:135` — SiteMap

---

## General Rules

- All styles go global first. Only use inline Tailwind arbitrary values for one-off overrides that are genuinely unique to a single element.
- Do not add comments explaining what code does — only add comments for non-obvious WHY (workarounds, constraints).
- Do not add error handling or fallbacks for scenarios that cannot happen.
- Match the existing component patterns before introducing new abstractions.
- Hero eyebrow sections must have `overflow-hidden` on the section wrapper — `cma-eyebrow` letter-spacing can overflow at narrow viewports.

## Session continuity

This project is worked on by multiple AI agents (Claude Code, Gemini CLI, Deep Code, …).
- At session start: read `JOURNAL.md` (newest first) and recent `git log`.
- Before ending a session: add a short entry at the top of `JOURNAL.md` — date, agent/model, what was done, decisions, loose ends.
