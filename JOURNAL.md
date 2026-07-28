# Project journal — Homepagev2

Shared session log for all AI agents. Newest entries at the top.

## 2026-07-28 — Cursor (Composer)
- Added reusable `GridEmptyState` for calendar/events grid when a filter has no results — cream card, icon, optional CTA.
- `CalendarPage` empty state replaces plain paragraph; filtered views get "View All Events" button.

## 2026-07-28 — Cursor (Grok)
- Exhibit body is rich-text-first: optional `content?: string` on `Exhibit`, rendered via `.cma-prose` in `ArticleContent` (paragraphs/sections remain fallback).
- Added `.cma-prose .wp-block-media-text` styles matching Figma text-left / image-right zone rows (276×200, rounded 20px).
- Seeded **Wild Kratts®: Ocean Adventure!** with HTML content + five Media & Text rows; zone photos pulled from live CMA (`wk-tortuga/seahorse/shallow-seas/deep-sea/tot-spot.png`). Sponsors card remains structured outside prose.
- Earlier same day: restored Young Professionals + Dream Builders to Donate nav and undrafted their routes.

## 2026-07-22 — Cursor (Opus 4.8)
- Added dedicated **Parties** page (`/parties`, `PartiesPage.tsx`) from client content spreadsheet.
  - Template 2 clone of `ContactPage` (navy hero → sticky sidebar jump-nav + "Ready to Celebrate?" widget → white article card with Divider-separated sections: Overview, Schedule & Price, Booking, Party Room, Capacity, Food, Decorations, Policies, Party FAQs).
  - Museum Rental callout + closing CTA reuse `PYVCallout`; `Testimonials` between them.
  - Registered route in `main.tsx`; repointed "Parties"/"Birthday Parties" links from `#/plan-your-visit?tab=parties` → `#/parties` in `navLinks.ts`, `Footer.tsx`, `PlanTabs.tsx` (Explore/Book Your Party), and `ContactPage` Birthday Parties dept CTA.
  - Booking CTAs route to `#/contact` (no client-provided booking URL yet); "Request a Call" → `tel:4045273693`. Fixed client copy typos (Recommedned, Praties, membershiop, recieve, Capactiy).
- Loose end: real party booking platform URL + a party hero photo (hero currently uses the navy `cutCMA` treatment like ContactPage).

## 2026-07-07 — Claude Code (setup)
- Adopted agent-agnostic setup: AGENTS.md is canonical (CLAUDE.md is a symlink), this journal tracks cross-agent session history.
- Recent git history at time of setup:
  - f471349 feat: add white background ring around drag cursor arrow
  - 10acc62 feat: directional drag cursor + idle hint for carousel, fix mobile footer balance
  - 6f9d77f fix: link "Learn About Corporate Memberships" CTA to /memberships/corporate
  - f54511f fix: use develop-1.png for Building an Exhibit article image
  - 6cf8b2c chore: add missing Playful Learning asset images to git
  - 529097c fix: use kratts.png for Wild Kratts card in ExhibitsHero featured exhibits
  - 531c3c7 feat: wire real photography into Playful Learning resource cards
  - b662acf fix: constrain Candid badge logo to correct size (55×12px)
