# CMA Website Accessibility (ADA) Fixes — WordPress Developer Handoff

**From:** CMA Homepage v2 dev team
**Date:** August 2026
**Applies to:** The production **WordPress** site (theme + WPBakery/templates). This is the
port of the accessibility remediation completed on the new React homepage
(`Homepagev2`, repo `mattybotstew/Homepagev2`).

> **Why this exists:** A partner accessibility vendor flagged ~50 colour-contrast issues,
> a blue/white navigation text contrast problem, and the accessibility toolbar button.
> The fixes below were implemented and verified on the React build (**55 → 0 WCAG AA
> violations across 23 routes**). This doc translates each fix into WordPress terms so the
> same outcomes are applied to the live WP theme. It is **not** the React code — it is the
> spec the WP team ports.

---

## 1. The goal

Bring the WordPress site to **WCAG 2.1 AA, zero automated violations** (axe-core `wcag2a`/`wcag2aa`).

Two of the three vendor flags are fully fixable here:
1. **~50 colour-contrast issues** — a handful of *token-level* color darkenings resolve most
   of them at once (Section 2). Remaining ones are per-component swaps (Section 3).
2. **Blue/white navigation text** — one override in the footer legal links (Section 3.1).

The third (toolbar button) is **not in this repo** — see Section 7.

---

## 2. Color tokens to change (do these first — biggest win)

The design system uses a small set of brand colors. Darkening **four** of them fixes the
majority of contrast failures because the same hex is reused across the whole site.

| Token | Old hex | New hex | On-background contrast after | Fixes |
| --- | --- | --- | --- | --- |
| **Teal dark** (`--cma-teal-dark` / `$cma-teal-dark`) | `#007c87` | **`#00707a`** | 5.9:1 on white | teal-dark badges, links, eyebrows on light backgrounds |
| **Orange dark** (`--cma-orange-dark`) | `#b8620a` | **`#9c4f04`** | 5.9:1 with white text | orange-dark text/badges; white text on orange-dark (was 4.38:1) |
| **Gray** (`--cma-gray`) | `#78787a` | **`#6b7280`** | 4.83:1 | testimonial locations + gray meta text (was 4.41:1) |
| **Blue light** (`--cma-blue-light`) | `#d4e3f3` | **`#e3ecfa`** | 4.9:1 on teal-dark | "blue-light on teal-dark" eyebrow/text on pricing cards |

**Where to change them in WordPress:**
- If the theme uses CSS custom properties → edit the four `:root` variables in `style.css`
  (or wherever tokens are defined).
- If it uses a `theme.json` / SCSS variables / a color-palette plugin → update the same four
  values there. These are **modest shade shifts** — the brand still reads correctly.

> **Paste-ready snippet:** a standalone `wordpress-a11y-overrides.css` (repo root) bundles
> this token block plus the per-component rules in Section 3. If your theme uses `--cma-*`
> variables, the `:root` block is paste-and-done; otherwise use the OLD → NEW hex
> find-replace table at the bottom of that file.

---

## 3. Per-component contrast / color fixes

### 3.1 Footer legal links ("blue/white navigation text" — vendor flag #2)
The translucent white legal links in the footer were failing contrast (~3.94:1). Bump the
alpha from **50% → 70%** (`rgba(255,255,255,0.50)` → `rgba(255,255,255,0.70)`, ≈7:1 on navy).
Do **not** touch the desktop main nav (white on navy) — it already passes at ~10.6:1.

### 3.2 Low-opacity navy text → bump to /80
Anywhere body/sidebar/meta text used navy at `40%–70%` opacity, raise it to **80%**
(`rgba(29,62,107,0.80)`, ≈6:1 on white). Applies to: the "Jump to" sidebar nav, event/contact
cards, membership pricing, and the support page. Rule of thumb: **no navy text below 80%
opacity on a white background.**

### 3.3 Orange CTA buttons → navy-dark text
Navy text on orange was 4.27:1 (just under AA). Change button/link **text color from
`#1d3e6b` → `#152d4d`** (navy-dark) on **every** solid-orange button. This applies sitewide
to all `bg-orange` primary CTAs ("Buy Tickets", "Tour the Museum", "Get Directions", etc.).

### 3.4 Orange stat cards (white-on-orange → navy-on-orange)
Where numbers/stats sit on a solid orange background (About hero, Donate hero, fundraising
event stats), white text is only 2.28:1 — **switch the text to navy** (`#1d3e6b`). Orange
accent numbers stay navy-dark or orange-dark per context. **Never white text on bright
orange.**

### 3.5 Orange text on white → orange-dark
Orange (`#f7941e`) text on white is ~2.7:1. Any orange text on a light background (event
hours, "Separate Ticket Required" pill, fundraising amounts, big stat numbers) → use
**`#9c4f04`** (orange-dark).

### 3.6 Teal eyebrows
Bright teal on white is 2.7:1. **Eyebrows/labels on white or cream → teal-dark `#00707a`**;
eyebrows on **navy heroes → teal-light `#4ad1dc`** (navy is dark, so the lighter teal is used there).

### 3.7 Marquee / ticker tiles
The teal tile with white text was 2.72:1 → use **teal-dark `#00707a`** as the tile background
(white text then passes at 4.9:1). Orange tiles already use navy text (fine).

### 3.8 Instagram "Special Guest" bubble
This label sits on a photo, so the background color gets blended with the image by the audit
tool. Guarantee contrast by placing the text on a **solid navy `#1d3e6b` pill** (dark chip)
instead of translucent over the image.

### 3.9 Sponsor "LOGO" placeholders
Faint navy `#1d3e6b` at 30% was 1.3:1 on the light tile → use **solid navy** text.

---

## 4. Structure / semantic fixes (screen-reader + axe "landmark" flags)

### 4.1 Single `<main>` landmark
Every page must contain exactly **one** `<main>` element. The previous build had multiple or
none (each page rendered its own), which triggered `landmark-one-main` + `region`. Wrap the
page body content in one `<main id="main">…</main>`, and do **not** nest another `<main>`
inside it.

### 4.2 One `<h1>` per page, in order
- **Exhibits page** was missing a level-1 heading (used `h2`). Promote the main hero title to
  `<h1>`.
- **Don't skip levels:** the plan-your-visit tab sub-headings used `h4` directly under `h3` →
  make them `h3`.
- **Footer column headings** (`VISIT` / `EXPLORE` / `SUPPORT` / `CONNECT`) were `h3` but are
  visually plain labels and caused heading-order skips on News/Resources pages → change to
  styled `<p>` (keep the same class/styling).

### 4.3 Header logo link needs an accessible name
The logo is a vector with no text, so the home-link had no accessible name → add
`aria-label="Children's Museum of Atlanta"` to the logo `<a>`.

### 4.4 Icon-only links need accessible names
Social links (Facebook / Instagram / TikTok) that contain only an icon → add `aria-label`
(e.g. `aria-label="Facebook"`). Any other icon-only button/link needs the same treatment.

### 4.5 Form fields — label wiring (fixes `select-name` / input labeling)
Every form control must have a visible `<label>` whose `for` points to the control's `id`.
Unlabeled inputs are a WCAG failure and a screen-reader problem. Apply to the **Contact**
form and **all** program-request forms:

| Form | Controls |
| --- | --- |
| Contact Us | First Name, Last Name, Phone, Email, Department Topic (select), Message |
| Field Trips | (form fields) |
| Scouts | 3 selects |
| Museum On-the-Go | 4 selects |
| Educator PD | 2 selects |
| Corporate Membership | 1 select |

**Pattern** — `<label for="X">Label *</label>` + `<input id="X" …>` (or `<select id="X">`),
with unique `id`s per field.

---

## 5. ARIA / interactive structural fixes (from the Aug 2026 staging scans)

These came out of an axe + Lighthouse audit of `childmusstg.wpenginepowered.com` (both engines)
and are **confirmed to still be present on staging**. They are erased on the React build
(`aria-required-children`, `aria-prohibited-attr`, `link-in-text-block`, and the calendar
`frame-title` all pass there), so they are WP-port-only regressions to fix here.

### 5.1 Tablists can't have `role="tablist"` without the tab wiring
`aria-required-children` was flagged on `.cma-pill-scroll[role="tablist"]` (events / news /
resources / playful-learning / home). A `tablist` role must contain `tab` children with
`tabpanel` counterparts + arrow-key management. **Two options:**
- **Preferred:** drop the `role="tablist"` and let the pills be a plain group of buttons
  (easiest, matches the original click-to-filter behavior). If the container must be labelled,
  use `<div class="cma-pill-scroll" aria-label="Filters">` with no tab roles.
- If you want true tabs, you must fully wire `role="tablist"` → `role="tab"` →
  `aria-selected` + `role="tabpanel"` + keyboard navigation. That's more work; do it only if
  the design genuinely needs it.
> The React source for these filter pills uses **plain `<button>`s with no `tablist`** and reads
> clean — mirror that.

### 5.2 Star-rating container: `aria-label` needs `role="img"`
`aria-prohibited-attr` on `.cma-testimonial-card__stars[aria-label="5 out of 5 stars"]`. The
`aria-label` is being placed on a `<div>`; a bare `<div>` cannot carry it without a role.
**Add `role="img"`** to that container:

```html
<div class="cma-testimonial-card__stars" role="img" aria-label="Rated 5 out of 5 stars">
  <!-- the 5 star SVGs -->
</div>
```
> The React fix (committed) does exactly this: `<div role="img" aria-label="Rated 5 out of 5 stars">`.

### 5.3 Inline links in article body must be underlined
`link-in-text-block` on `.cma-article__body > p > a` (fun-on-tap, imagination-ball). Links that
sit inside prose must be distinguishable without color → **always underline** them, and keep a
non-color hover/focus cue:
```css
.cma-article__body a { text-decoration: underline; text-underline-offset: 3px; }
.cma-article__body a:hover, .cma-article__body a:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }
```
> The React `.cma-prose a` already sets `text-decoration: underline` — replicate that rule in WP.

### 5.4 Calendar iframe needs a title
`frame-title` on `#calendar-iframe` in `/programs/field-trips/`. Frames must have an
accessible name:
```html
<iframe id="calendar-iframe" title="Field Trip calendar" …>
```

### 5.5 SEO on staging — expected, not a real failure
The **61 SEO** score is driven by "Page is blocked from indexing" — normal for a staging host
(`X-Robots-Tag: noindex`). It will clear on production. The "Links do not have descriptive
text (2)" is worth a quick look: give those links a readable label rather than a bare URL.

### 5.6 Best-practices items worth scheduling
`identical-links-same-purpose` (e.g. two adjacent "Learn More"/"Buy" links to the same URL),
console errors, and CSP/HSTS/COOP/XFO hardening are **not WCAG accessibility failures** but
show up here; they're quick follow-ups for the WP/infra team, not part of the ADA-AA pass.

---

## 6. Verification / QA process (how to prove it's done)

The React team verified with **axe-core** (Deque) + Playwright over all routes, targeting
`wcag2a` + `wcag2aa`. Reproduce on WordPress:

1. Install the **Deque axe DevTools** browser extension (or use `@axe-core/cli` / a
   Lighthouse accessibility audit). Lighthouse is preinstalled in Chrome DevTools.
2. Run on **every** template/page type that exists in WP: Home, Plan Your Visit, Exhibits,
   Events, Educators, Museum Store, News, Playful Learning, About, Donate, Memberships,
   Support, Contact + representative detail pages (exhibit, event, article, giving-circle).
3. Target **WCAG 2.1 AA** (axe tags `wcag2a`, `wcag2aa`). **Accept zero violations.**
4. Do a quick **visual pass** on the darkened orange/teal/gray to confirm the slightly
   deeper shades still read as on-brand.
5. Re-run after any future theme changes (contrast regressions are the easiest to reintroduce).

> The audit must render the live DOM — a static HTML validator can't catch contrast or
> landmark/heading issues. Use a rendered-browser tool (axe DevTools / Lighthouse).

---

## 7. Change manifest (for cross-referencing the React source)

The fixes above were implemented across these React files. If you need the exact markup/class
for any single component, these are the ones that changed in commit `4ce9403`:

`src/styles/theme.css`, `src/main.tsx`, `src/app/App.tsx`, `Header`, `Footer`, `PlanTabs`,
`ExhibitsHero`, `AboutHero`, `AboutHistory`, `AboutImpact`, `AboutJoinTeam`, `AboutPeople`,
`AboutTestimonials`, `Testimonials`, `AdmissionPricing`, `ArticleContent`, `ArticleContentWithSidebar`,
`BuyOnlineBenefits`, `CorporateMembershipContent`, `CorporatePartnerOptions`,
`CorporatePartnerPageContent`, `DonateHero`, `DonateImpact`, `DonateOnline`,
`DonorRecognitionTiers`, `EducatorPDProgramContent`, `EducatorsImpact`, `EventContent`,
`ExhibitsFloorPlan`, `FeaturedExhibits`, `FieldTripsProgramContent`, `FundraisingEventContent`,
`GivingHero`, `GridEmptyState`, `Hero`, `ImpactSection`, `InstagramSection`,
`MembershipInfoPageContent`, `MembershipPlanTable`, `MembershipPlans`, `MembershipPricing`,
`MembershipSavingsCalculator`, `MuseumOnTheGoProgramContent`, `MuseumStoreContent`,
`MuseumStoreGifts`, `MuseumStoreHero`, `PlanYourVisit`, `PlanYourVisitHero`,
`ScoutsProgramContent`, `SpecialExperiences`, `SupportPageContent`, `SupportWaysToGive`,
`cmaMarqueeColors`, `ArticlePage`, `CalendarPage`, `CareersPage`, `ContactPage`,
`DonorRecognitionPage`, `ImpactPage`, `NewsPage`, `NotFoundPage`, `PartiesPage`,
`PlanYourVisitPage`, `PlayfulLearningPage`, `SearchPage`, `StyleguidePage`.

Full narrative + tooling details: `docs/a11y-worklog.md` and `docs/accessibility.md` in the repo.

---

## 8. Outstanding — NOT in this repo (needs the partner)

**Accessibility toolbar launcher button.** This is the accessibility vendor's own widget code
(theirs: "our toolbar launcher code"), not part of this codebase (searched for
audioeye/userway/toolbar — nothing local). A ticket is logged to obtain the updated toolbar
code. The size/icon-prominence feedback is a **partner-side design decision**. When the
updated toolbar code arrives, it gets wired into the WP theme; the React team can wire it into
the new build at the same time.

---

**Questions?** Contact the CMA Homepage dev team. Reference repo: `Homepagev2` on GitHub
(`docs/accessibility.md`, `docs/a11y-worklog.md`, commit `4ce9403`).

