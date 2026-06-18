# Tournament For Play — Visual Page Redesign

## Context

Tournament For Play (the annual golf fundraiser) currently renders through the
shared `/giving-circles/:slug` route (`GivingCirclePage.tsx` →
`ArticleContentWithSidebar.tsx`), driven by an entry in
`src/app/data/givingCircles.ts`. That template is a plain text article: one
hero image, a sticky jump-nav sidebar, and paragraph blocks. It's shared by
Imagination Ball, Young Professionals, and Dream Builders.

Of those four, Tournament For Play and Imagination Ball are one-time annual
events (golf tournament, gala); Young Professionals and Dream Builders are
ongoing membership-style giving circles. They were modeled as one data shape
for convenience, not because they're the same kind of page. Tournament For
Play, specifically, needs a more visual treatment: stats, a real schedule,
sponsor tiers, and photo texture — none of which the shared template supports.

The page is reached from the "Donate" nav dropdown (`Header.tsx`,
`donateSubPages`), but its breadcrumb currently reads "Support" — a leftover
default in `GivingCirclePage.tsx`, not a deliberate IA choice.

No real event photos or sponsor logo files exist yet — this build uses
clearly-swappable placeholders for both.

## Goals

- Give Tournament For Play a visibly more visual page: stats, a real visual
  schedule, sponsor tiers as cards, and photo texture — replacing the current
  wall of paragraph text.
- Do this without touching the shared template/data used by the other three
  giving circles.
- Keep the existing URL (`#/giving-circles/tournament-for-play`) so no links
  break.
- Fix the breadcrumb to say "Donate" (linking to `#/donate`), matching where
  the page actually lives in nav.

## Non-goals

- Real event photography or sponsor logo files (placeholders only — clearly
  marked as swappable).
- Changing the route/URL structure.
- Changing how Imagination Ball, Young Professionals, or Dream Builders
  render.
- A sticky sidebar jump-nav — the new content is short and visually
  scannable, so it isn't needed.

## Design

### Routing

`GivingCirclePage.tsx` special-cases the `tournament-for-play` slug (same
pattern `ProgramPage.tsx` already uses for educator program slugs) and
renders a new `TournamentForPlayContent.tsx` component instead of
`ArticleContentWithSidebar`. The `tournament-for-play` entry stays in
`givingCircles.ts` (slug, title, badge, cardImage, eyebrow) so the other three
circles' "Other Ways to Give" related-card lists keep linking to it
correctly — only the *rendered* page changes, not the data record other pages
depend on.

The in-page breadcrumb changes from `{ label: "Support", href: "#/support" }`
to `{ label: "Donate", href: "#/donate" }` for this page only (the other
three circles keep "Support").

### `TournamentForPlayContent.tsx`

A new, bespoke component (not data-driven through `givingCircles.ts`
paragraphs — all copy and structured data for schedule/sponsors/stats is
hardcoded directly in this component, matching how `CorporatePartnerPageContent.tsx`
is built). Sections, top to bottom:

1. **Navy hero banner** — inline pattern copied from
   `CorporatePartnerPageContent`'s banner section (not the `GivingHero`
   component, which accepts a `stats` prop but never renders it — confirmed
   dead code). Eyebrow "Annual Golf Fundraiser," heading "Tournament For
   Play," one-line subtitle, and two CTAs: **Join Waitlist** (orange,
   primary) and **Sponsorship Inquiry** (outline). This replaces the current
   buried "SOLD OUT — join the waitlist" sentence with a visible status +
   action pair.

2. **Stats strip** — white section directly under the hero. 4-tile grid
   (`grid-cols-2 md:grid-cols-4`), copied from `DonorRecognitionPage`'s
   existing stats block pattern (big number + label + detail line, staggered
   fade-in via `motion`). Tiles:
   - `14th` — Annual Tournament
   - `$430K+` — Raised in 2026
   - `30` — Foursomes
   - `Aug 17, 2026` — Peachtree Golf Club

3. **Visual schedule timeline** — white `rounded-[24px]` card containing a
   vertical list of time/activity rows (time in bold orange, activity text
   beside it), replacing the single run-on schedule sentence. Same
   staggered-row `motion` pattern as `CorporatePartnerOptions`' wishlist
   list (border-top container, border-bottom rows). Rows sourced from the
   existing schedule data already in `givingCircles.ts`'s paragraph text
   (8:30 Registration & Breakfast, 9:00 Practice Range, 9:45 Welcome Remarks,
   10:00 Shotgun Start, 3:30 Awards Ceremony).

4. **Sponsor tiers grid** — card grid (`CorporatePartnerOptions`-style:
   `grid-cols-1 md:grid-cols-2`), one card per tier: Presenting, Albatross,
   Golf Cart, Early Birdie. The Presenting tier card spans full width
   (featured). Each card contains a row of placeholder logo tiles (gray
   rounded boxes — swappable later with real logo images) plus sponsor names
   as text underneath, sourced from the existing sponsor list in
   `givingCircles.ts`.

5. **Photo strip** — a row of 3–4 placeholder image tiles (reusing the
   existing `img1` educators asset, cropped via `object-cover`, as a visible
   stand-in) for visual texture. Structured as a simple array of image
   imports so real photos can be dropped in later without restructuring.

6. **Closing CTA banner** — navy panel, "Interested in sponsoring or joining
   the waitlist?" with the same two CTAs as the hero (Join Waitlist /
   Sponsorship Inquiry).

7. **Related circles** — reuse the existing related-card markup pattern from
   `ArticleContentWithSidebar`'s related section (image + eyebrow + title +
   excerpt + "Learn More" link), listing the other three giving circles,
   linking to `#/giving-circles/:slug`.

### What doesn't change

- `ArticleContentWithSidebar.tsx`, `givingCircles.ts`'s schema, and the three
  other giving-circle pages — untouched.
- `Header.tsx`'s `donateSubPages` nav entry for Tournament For Play — already
  points at the right URL, no change needed.
- `GivingHero.tsx` — left as-is (its unused `stats` prop is out of scope for
  this work; not fixing it here since nothing else currently depends on it
  rendering).

## Testing

- Visual check in browser: hero renders with both CTAs, stats animate in on
  scroll, schedule timeline rows are legible and ordered correctly, sponsor
  tier cards render with placeholder tiles, photo strip renders, closing CTA
  and related-circles section render and link correctly.
- Confirm the other three giving-circle pages
  (`#/giving-circles/imagination-ball`, `young-professionals`,
  `dream-builders`) still render via `ArticleContentWithSidebar` unchanged.
- Confirm `#/giving-circles/tournament-for-play` breadcrumb reads "Donate"
  and links to `#/donate`.
- Responsive check at mobile/tablet/desktop breakpoints (stats grid,
  sponsor-tier grid, and photo strip all have explicit breakpoint behavior
  to verify).
