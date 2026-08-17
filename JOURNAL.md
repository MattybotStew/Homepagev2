# Project journal — Homepagev2

Shared session log for all AI agents. Newest entries at the top.

## 2026-08-17 — Cline

- Unified the two divergent exhibit sponsor structures into a single `.is-sponsor-panel` cream tile grid inside the white content card (matching the `FundraisingEventContent` cream-tier-card precedent).
  - Doc McStuffins: two `.is-sponsor-item` tiles with "Produced By" / "Presented By" role eyebrows and no notes. Fixed alt text → actual org names (`The Children's Museum of Indianapolis`, `Riley Hospital for Children`) for accessibility.
  - Wild Kratts: two tiles with "Supported By" on both; the two legal credit lines become `.is-sponsor-note` under each figure. The long Kratt Brothers legal paragraph stays below the panel.
- CSS (`index.css` prose section): added `.is-sponsor-panel` / `.is-sponsor-intro` / `.is-sponsor-grid` (auto-fit, minmax 220px) / `.is-sponsor-item` / `.is-sponsor-role` / `figure.is-sponsor-logo` (white 120px tile) / `.is-sponsor-note`. Auto-fit grid collapses to one column under 768px; added mobile padding override (24/16, tile 100px).
- Removed now-dead `.is-sponsor-row`, `.is-partner-row` / `.is-partner-block` / `.is-partner-logo`, the brittle `h2:has(+ .is-partner-row)` centering rule, and their mobile counterparts. Zone rows (`.wp-block-media-text`) left untouched.
- Tokens verified: `--cma-cream` + `--cma-teal-dark` both resolve in `theme.css`.
- Updated `.clinerules` sponsor markup convention note to describe `.is-sponsor-panel`.


## 2026-08-17 — Cline

- Built Doc McStuffins detail page at `#/exhibits/doc-mcstuffins-the-exhibit` (rich-text `content` string → `.cma-prose` via `ArticleContent`), matching the live CMA structure with bottom partner blocks:
  - "This exhibit is produced by:" + logo (6-1.png → `sponsor-produced-by.png`)
  - "This exhibit is presented by:" + logo (5-1.png → `sponsor-presented-by.png`)
  - `<h2>Sponsors</h2>` + intro line + two `.is-sponsor-row` rows (City of Atlanta + Fulton County, reusing existing `sponsor-atl-moca.png` / `sponsor-fulton-arts.png`)
- 4 zone rows (Backyard Clinic & Reception, Nursery, Pet Vet, Emergency Room) using `has-media-on-the-right` media-text blocks + real zone photos downloaded from live WP (7/8/9/11-1-1024x1024 → `docmc-{backyard-clinic,nursery,pet-vet,emergency-room}.png`).
- Exhibit logo `doc-mcstuffins-logo.png` (Doc-McStuffins-logo-transparent-v2.png, 1080×540) floated right via `is-exhibit-logo`.
- New CSS: `.cma-prose .is-partner-block` (+ `.is-partner-logo`) for centered label + centered logo, 40px vertical spacing. `.is-sponsor-row` untouched — no Wild Kratts regression.
- `FeaturedExhibits.tsx`: Doc McStuffins card `href` `#/exhibits` → `#/exhibits/doc-mcstuffins-the-exhibit`.
- Badge "Fall 2026", eyebrow "September 26, 2026 – January 10, 2027". Build passes.

## 2026-08-13 — Cursor (Composer)

- Wild Kratts detail: one exhibit logo (`wild-kratts-logo.png`) floated left of date + intro copy (`.is-exhibit-logo-float`) in the white content card — matches live CMA. Sponsors stay ATL + Fulton rows at bottom.
- Undid Exhibits listing partners section earlier same day.

## 2026-08-13 — Cursor (Grok)

- Briefly added Presenting Partners / Exhibit Sponsors to `#/exhibits`; reverted same day (wrong surface).

## 2026-08-05 — Cursor (Composer)

- Brought `public/museum-walk-through.html` up to WPBakery handoff parity with `museum-tour-map.html`: full numbered instructions + troubleshooting + Media URLs, ASSET_MODE comments, embed hide for instructions, cross-link to tour map. Standalone: https://mattybotstew.github.io/Homepagev2/museum-walk-through.html — copy START→END into Raw HTML; set `ASSET_MODE = "cdn"` for prod WP.

## 2026-08-05 — Cursor (Composer)

- Fixed `#/exhibits` accordion jump-to-footer when opening Walk-Through Tour (and switching back to Tour the Museum). Cause: tall map panel → short walk-through shrinks document height so `scrollY` clamps to the bottom. Fix in `ExhibitsFloorPlan`: pin clicked header’s viewport Y via `useLayoutEffect` + `overflow-anchor: none`; `tabIndex={-1}` on embeds to avoid iframe focus steal.

## 2026-08-05 — Cursor (Composer)

- Walk-Through Tour accordion on `#/exhibits`: replaced outbound “Start Virtual Tour” thumbnail with an embedded room-to-room 360° viewer (`public/museum-walk-through.html?embed=1`). Live CMA page cannot be iframed (`X-Frame-Options: SAMEORIGIN`); built Pannellum multi-scene tour reusing `museum-tour-map/` panos + room chips / orange hotspots. WPBakery START/END markers included.
- Standalone: `/museum-walk-through.html`

## 2026-08-05 — Cursor (Composer)

- GH Pages 404 for museum tour map: Vite `base: './'` made the exhibits iframe resolve to `https://mattybotstew.github.io/museum-tour-map.html` when the document path lacked a trailing slash. Restored `base: '/Homepagev2/'` (matches PROJECT_CONTEXT). Standalone + assets were already in `dist/` and return 200 at the correct URL.
- Working URLs: `https://mattybotstew.github.io/Homepagev2/museum-tour-map.html` (standalone), `https://mattybotstew.github.io/Homepagev2/#/exhibits` (embed).

## 2026-08-05 — Cursor (Composer)

- Museum tour map pin panoramas failed on `file://` (Pannellum XHR blocked). `USE_CDN` now forces spot.cdn / MAP_CDN when `location.protocol === "file:"`; on http(s) local mode resolves via `new URL(rel, location.href)` so Vite + GH Pages `/Homepagev2/` stay correct. Floor img uses same `mapSrc()`. ExhibitsFloorPlan iframe unchanged (`BASE_URL`).

## 2026-08-05 — Cursor (Composer)

- Fixed museum tour map images missing on GitHub Pages: root-absolute `/museum-tour-map/...` and iframe `/museum-tour-map.html` ignored Vite `base: './'` / `/Homepagev2/`. Switched HTML `LOCAL_BASE` + floor `<img>` to relative `museum-tour-map/`; Exhibits iframe uses `import.meta.env.BASE_URL`. Assets were already tracked/deployed (not a gitignore issue).

## 2026-08-05 — Cursor (Composer)

- Exhibits accordion: renamed **Main Floor** → **Tour the Museum**; map iframe first, hover tip + exhibit/mezzanine copy below images.
- Embed mode hides widget intro (copy lives in React); standalone WPBakery keeps intro _below_ the map stage.
- Full map height: iframe uses `aspect-[1675/1515]` (Museum Floor + Mezzanine); open accordion `overflow-visible`; embed CSS no longer caps height / letterboxes the PNG.

## 2026-08-05 — Cursor (Composer)

- Built WPBakery-ready interactive museum tour map: `public/museum-tour-map.html` (START/END Raw HTML paste + instructions), 12 pulse pins → Pannellum 360° viewer, assets in `public/museum-tour-map/` with `ASSET_MODE` local/cdn toggle.
- Embedded on `#/exhibits` via iframe (`?embed=1`) in `ExhibitsFloorPlan` Main Floor accordion (replaced static floor-plan image).

## 2026-08-03 — Cline

- Converted desktop CTA dropdowns in `Header.tsx` from hover-triggered to click-based accordion (mobile-style): `DonateDropdown` and `MembershipsDropdown` now use `useState` + outside-click close via `useRef`/`useEffect`, trigger is a `<button>` that toggles, chevron rotates on open, panel renders conditionally. `BuyTicketsButton` unchanged (plain external link). Main nav `NavItem` hover dropdowns left as-is (out of scope).
- Follow-up (user feedback "still buttons"): converted the CTA buttons inside the **mobile overlay menu** (`MobileHeader.tsx`) — Donate + Memberships are now accordion toggles (chevron rotates, expands to sub-page list), Buy Tickets stays a plain external link.
- Follow-up 2 (user: "normal mobile style links rather than buttons"): restyled mobile menu Donate + Memberships to look identical to the nav-link rows (plain text row, 18px, min-h-64px, chevron right, divider lines, indented sub-panel). Buy Tickets kept as a navy button but now `rounded-full` pill to match the header-bar + desktop CTA pills.
- Follow-up 3: removed `mb-6` gap between main nav list and the Donate/Memberships rows (one continuous stroked list); Buy Tickets spacing above bumped `mt-6` → `mt-8`.
- Follow-up 4: added the missing hairline stroke (`h-[1px] bg-gray-200 mx-5`) between the Memberships row and the Buy Tickets pill.
- Follow-up 5 (user screenshot: strokes invisible): root cause — the standalone 1px dividers are direct children of the `flex flex-col overflow-y-auto` nav; with the menu overflowing, `flex-shrink: 1` compressed them to 0px. Fixed by adding `shrink-0` to all four divider divs in `MobileHeader.tsx`.
- Moved `donateSubPages`, `membershipsSubPages`, `TICKETS_URL`, `MEMBERSHIP_TICKETS_URL` into `src/app/data/navLinks.ts` (shared by Header + MobileHeader); removed the local copies from `Header.tsx`.
- Verified: `pnpm install` ran, dev server hot-reloads all three files cleanly. NOTE: `npm run build` fails on a PRE-EXISTING issue — `vite.config.ts` manualChunks references `framer-motion`, which isn't installed (project uses `motion`). Unrelated to these changes.

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
