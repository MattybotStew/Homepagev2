# Project journal — Homepagev2

Shared session log for all AI agents. Newest entries at the top.

## 2026-08-24 — Cline (WordPress a11y handoff doc + paste-ready CSS)

- (Continuation) Added `wordpress-a11y-overrides.css` (repo root) — a **paste-ready WCAG AA CSS override** for the WP dev team. Bundles the four `:root` token darkenings (teal-dark `#00707a`, orange-dark `#9c4f04`, gray `#6b7280`, blue-light `#e3ecfa`) plus component rules for footer legal links (white 50→70%), orange CTA text (navy-dark `#152d4d`), marquee teal tile → teal-dark, orange-on-white → orange-dark, and Instagram "Special Guest" bubble → solid navy chip. Bottom block is an OLD→NEW hex find-replace reference for themes that hardcode colors. Caveat documented: only the `:root` token block is paste-and-done (and only if the theme uses `--cma-*` vars); component selectors are common placeholders the team must map to their theme's class names.
- Referenced the snippet from `WORDPRESS-ACCESSIBILITY-HANDOFF.md` §2 (paste-ready note). Committed (see git log).
- **Loose end:** vendor name in the handoff header is generic "accessibility partner" — confirm if the partner is literally named "Ally"/"ADA Ally" and rename if needed.


## 2026-08-24 — Cline (WordPress a11y handoff doc)

- Wrote `WORDPRESS-ACCESSIBILITY-HANDOFF.md` (root, next to `WORDPRESS-DEV-HANDOFF.md`) so the **WordPress dev team** can port the accessibility remediation to the live WP site. Translates the React fixes (commit `4ce9403`, **55 → 0 WCAG AA violations / 23 routes**) into WP terms:
  - **Color tokens (biggest win):** teal-dark `#007c87→#00707a`, orange-dark `#b8620a→#9c4f04`, gray `#78787a→#6b7280`, blue-light `#d4e3f3→#e3ecfa` — with on-background contrast ratios + where to edit in WP (`style.css` / `theme.json` / SCSS).
  - **Per-component fixes:** footer legal-link alpha `50%→70%` (vendor "blue/white nav" flag), navy-opacity text → `/80`, orange CTA text → navy-dark `#152d4d`, orange stat cards white→navy text, orange-on-white → orange-dark, teal eyebrows, marquee teal tile → teal-dark, Instagram "Special Guest" chip → solid navy pill, sponsor placeholders → solid navy.
  - **Structure/semantics:** single `<main>` landmark, one `<h1>` (Exhibits h1, PlanTabs h3, footer headings h3→`<p>`), logo `aria-label`, social `aria-label`s, and `label for`/`id` wiring across Contact + all 5 program forms (Scouts 3 selects, MOTG 4, Educator PD 2, Corporate Membership 1, Field Trips).
  - **QA process** (axe DevTools / Lighthouse, WCAG AA, page-type scan list) + **change manifest** (~65 React files) + **outstanding** (toolbar launcher = partner's code, not in this repo — ticket pending).
- Committed as **`9ae02bd`** "Add WordPress accessibility handoff doc for the WP dev team."
- **Loose end:** no zip / `.css` override snippet attached yet; the doc is the spec for the WP team to port (WP theme is a separate codebase and can't consume React components directly). Vendor name in the doc header is generic "accessibility partner" — confirm if the partner is literally named "Ally"/"ADA Ally" and rename if needed.


## 2026-08-19 — Cline (file:// local preview fix)

- Diagnosed `Museum Walk-Through` failing from the unzipped Desktop package: the pano URL resolves correctly (`file:///…/museum-tour-map/fundamentally-food-kitchen.webp`), but a `file://` document gets a **unique opaque origin with no CORS**, so Pannellum's WebGL texture upload (`texImage2D`) is rejected — "The file … could not be accessed." Not a path/layout bug; double-click `file://` is inherently unsupported for the 360 viewer.
- Patched `public/museum-walk-through.html` + `public/museum-tour-map.html` **and** the Desktop `cma-museum-walk-through/` copies: on `location.protocol === "file:"` they now show a clear in-browser notice (`python3 -m http.server 8000` → `http://localhost:8000/…`) instead of the cryptic Pannellum error. Added `.cma-walk-file-notice` (hidden on embed) and `.cma-tour-map-file-notice`; added a "Do not" guide bullet.
- `MUSEUM-WALK-THROUGH.md`: corrected the environment matrix + "Local preview from zip" (now documents the local-server requirement), added a common-failure row for the `file://` pano error.
- **Loose end:** `cma-museum-walk-through.zip` on Desktop is now stale (its HTML is patched in place, but the zip itself must be rebuilt so the zip carries the fixed `museum-walk-through.html` / `museum-tour-map.html`). Rebuild: `cd public && zip -r cma-museum-walk-through.zip cma-museum-walk-through` (or re-zip the Desktop folder).

## 2026-08-19 — Cursor (Composer, wpdev asset URLs)

- Finished Grok's wpdev sideload fix: floor-plan `<img>` now defaults to production CDN URL (not `museum-tour-map/…`) so WP server-side scans never see relative paths. `useMediaLibrary()` in both widgets now defaults to **CDN/same-origin** on any host that isn't GitHub Pages or localhost; added `isGitHubPages()` / `isLocalDev()` and broader WP host detection (`staging`, `stg`, body `wp-*` class).
- WP error `https://mattybotstew.github.io/…/fundamentally-food-kitchen.webp could not be accessed` = server-side fetch of github.io (Add-from-URL or iframe). Paste START→END only; panos use `location.origin + /wp-content/uploads/…` on wpdev.

## 2026-08-19 — Grok 4.6 (wpdev github.io sideload)

- WP error `The file https://mattybotstew.github.io/Homepagev2/museum-tour-map/fundamentally-food-kitchen.webp could not be accessed` is WordPress **server-side** failing to download a GitHub Pages WebP (same pattern as the earlier media-library fetch). The github.io file itself is 200 / 277 KB. Do not iframe or Add-from-URL github.io on wpdev.
- Widget now treats any WordPress page as media-library mode: `#wpadminbar` / `wp-content` / `api.w.org` / generator, plus hostnames matching CMA, WP Engine, or `wpdev`. Panos resolve to `location.origin + /wp-content/uploads/…` — never github.io. Paste START→END; production file is `…/2026/05/20260430_173004_348-scaled.webp`.

## 2026-08-19 — Grok 4.6 (WP Engine paste)

- Walk-through START→END is the WP Engine / WPBakery payload (live page is still a stub at `/plan-your-visit/tour-the-museum/museum-walk-through/`). Fixes so that paste doesn't fight the theme or go CORS-blind:
  - Scoped CSS to `.cma-walk` (the old `*` reset would zero padding on the whole WP Engine page).
  - Nunito + Pannellum tags now sit *inside* START–END; if WPBakery strips the Pannellum `<script src>`, the widget injects it.
  - `ASSET_MODE=auto` treats `childrensmuseumatlanta.org` **and** `*.wpengine.com` / `*.wpenginepowered.com` as WordPress: panos load from *this origin's* `/wp-content/uploads/…` (same-origin). Staging needs production uploads copied.
  - Off the standalone `.html` file (i.e. on WP), hide the widget heading and drop preview padding so it fills the theme column.
  - Guide updated: Raw HTML only, purge WP Engine cache, don't copy the instructions panel. Same origin-rewrite on the tour map.

## 2026-08-19 — Grok 4.6 (walk-through audit)

- Brought `museum-walk-through.html` + `museum-tour-map.html` to calculator parity: WPBakery instruction `style=""` attributes → `.cma-guide-*` classes in a docs-only `<style>` after the END marker (paste block stylesheet stays untouched). `style_attrs=0` on all three widgets. `npx html-validate` clean on the four HTML files.
- Walk-through extras: Pannellum fallback uses `.cma-walk-fallback` (no inline style); room chips are real `<button>`s (`aria-current`, no fake tabs); viewer is `<section aria-label>` + a visually-hidden `aria-live` that announces the room. Embed class-setter stays duplicated on purpose (pre-START for FOUC on `?embed=1`; IIFE copy because the paste block starts after that script).
- Asset check: all 12 panos + map PNG — local `museum-tour-map/` files are **byte-identical** to the CMA `-scaled` CDN URLs (sha256 match, no CORS headers). Jane's Innovation Station + Step Up To Science remain **2560×1440 (16:9)** locally *and* on CDN; the other 10 panos are 2560×1280 (2:1). Re-export still needs originals + a WP re-upload (new `-scaled` URLs). Hotspot yaw/pitch still unconfirmed by eye.

## 2026-08-19 — Grok 4.6

- Cleared HTML/IDE lint on the membership savings calculator and related files:
  - `public/membership-calculator.html`: WPBakery guide `style=""` attributes → `.cma-guide-*` classes (guide CSS stays in a `<style>` block — required for the self-contained paste). Stepper buttons now have `type="button"`.
  - `index.html` / tour-map img: HTML5 void tags (drop trailing slashes).
  - `.htmlvalidate.json` + `.vscode/settings.json`: turn off `no-inline-style` / `element-permitted-content` and ignore Lighthouse report HTML. Widget CSS must stay inlined for WPBakery.
  - `tsconfig.json`: `baseUrl: "."` so `@/*` path mapping resolves in the IDE.

## 2026-08-19 — Cline

- Diagnosed WordPress build error "The file … could not be accessed" for `museum-tour-map/fundamentally-food-kitchen.webp`:
  - The github.io URL itself was fine (verified 200 WebP, 277 KB, committed + deployed). The failure was WordPress failing to server-side fetch it.
  - Root cause pattern: widget handoff could produce github.io URLs because `ASSET_MODE` defaulted to `"local"`. Fixed by defaulting `ASSET_MODE = "cdn"` in both `public/museum-walk-through.html` and `public/museum-tour-map.html` so production WordPress hotlinks the live CMA media library — github.io URLs can no longer leak into the WPBakery paste block. Updated the baked-in "Media URLs" handoff instructions to match.
  - Verified all 13 `cdn:` URLs against `childrensmuseumatlanta.org` — every one returns 200 (6 webp 2026 panos 259–391 KB, 6 jpg 2023 panos 375–603 KB, map png 415 KB). JPG EXIF confirms Insta360 X3 originals at 5952×2976 (2:1 equirectangular).
  - Client-facing correction: use `https://mattybotstew.github.io/Homepagev2/museum-tour-map/fundamentally-food-kitchen.webp` if github.io is needed; prefer the CMA media-library `cdn:` URLs in production.
- Documented client image specs in `.clinerules` ("Client Image Specs"): exhibit featured image 1920×1080 @2× retina (render max 928×380); walk-through panos 6000×3000 2:1 equirectangular (with the WP 2560px upload-cap caveat).
- **Launch hardening:** verified the CMA media library sends **no CORS headers** (`Access-Control-Allow-Origin` absent on webp/jpg/png), so a cross-origin Pannellum load from the github.io preview/embed would be blocked. Changed the widget default from `"cdn"` to `"auto"` — `cdn` on `childrensmuseumatlanta.org` (same-origin, the production inline-paste case) and `file://`; `local` on the GitHub Pages preview/embed and local dev (panos ship same-origin). The handoff is now zero-config and correct in every context: no github.io URLs on WordPress, no CORS failures on the preview.
- Fixed the 13 TypeScript errors that showed up in the VS Code Problems panel (~161 expanded entries — the panel expands each `TS2322` message chain). Builds were unaffected (Vite/esbuild doesn't type-check), but the IDE was noisy. Fixes: `: Variants` annotations for motion variant objects in `BottomCallToAction.tsx` + `ExploreExhibits.tsx`; `declare module "react-responsive-masonry"` added to `vite-env.d.ts`; `ContentBlock` string-guards in `SearchPage.tsx` and `ArticleContentWithSidebar.tsx`; `process.env.NODE_ENV` → `import.meta.env.DEV` in `main.tsx`; and `tsconfig.json` now excludes the dead `src/imports/PlanYourVisit.tsx` (missing module import). `npx -p typescript tsc --noEmit` now reports 0 errors.

## 2026-08-18 — Cline / Cursor

- Doc McStuffins bottom blocks redesigned into two stacked `.is-sponsor-panel` sections:
  - **"Exhibit Partners"** — Produced By (The Children's Museum of Indianapolis) + Presented By (Riley Hospital for Children at Indiana University Health) side by side, role eyebrow now rendered *after* the figure.
  - **"Sponsors"** — two `is-sponsor-logo--banner` tiles: City of Atlanta — Moving Atlanta Forward (Mayor's Office of Cultural Affairs) + Fulton County Arts & Culture (Fulton County Board of Commissioners).
- New assets `sponsor-atl-banner.png` / `sponsor-fulton-banner.png` (from live CMA site). Confirmed `sponsor-produced-by.png` (6-1.png) and `sponsor-presented-by.png` (5-1.png) already match the live site byte-for-byte.
- CSS (`index.css` prose section): `.is-sponsor-panel h2` margin → 20px; `.is-sponsor-panel + .is-sponsor-panel { margin-top: 24px }`; `.is-sponsor-role` split into `:first-child` (eyebrow) vs `:last-child:not(:first-child)` (navy label) variants; logo tile `min-height:120px / height:150px`; new `is-sponsor-logo--wide` (Wild Kratts Fulton) and `is-sponsor-logo--banner` modifiers + mobile overrides; `.is-sponsor-note` max-width 320px. Kept `.is-sponsor-item:only-child` (max-width 360px, centered).

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
