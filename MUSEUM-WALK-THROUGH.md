# Museum Walk-Through — developer walkthrough

What the CMA **Museum Walk-Through** widget is, how it should behave, and how assets resolve in each environment. For day-to-day WP paste steps, the HTML file also includes an in-browser guide after the `END` marker.

---

## What it is

A **self-contained HTML widget** — not part of the React/Vite app. Visitors move room-to-room through 12 museum spaces in a **360° viewer** (Pannellum). No build step required for WordPress deployment.

| Item | Location |
|---|---|
| Walk-through widget | `public/museum-walk-through.html` |
| Companion floor-plan map | `public/museum-tour-map.html` |
| Panorama + map assets | `public/museum-tour-map/` (12 panos + `Updated-Museum-Map.png`) |
| Live WP page (target) | `/plan-your-visit/tour-the-museum/museum-walk-through/` |
| GitHub Pages preview | https://mattybotstew.github.io/Homepagev2/museum-walk-through.html |
| Vite dev preview | http://localhost:5173/Homepagev2/museum-walk-through.html |

The WPBakery paste payload is everything between:

```html
<!-- START: CMA Museum Walk-Through -->
…
<!-- END: CMA Museum Walk-Through -->
```

Do **not** paste the integration-instructions panel below the `END` marker.

---

## Expected user experience

1. **On load** — the viewer opens on **Fundamentally Food Kitchen** (`FIRST_SCENE = "kitchen"`).
2. **Look around** — click and drag inside the viewer; scroll or pinch to zoom (Pannellum controls).
3. **Change rooms two ways:**
   - **Room chips** — a row of `<button>`s below the viewer; active room gets `aria-current="true"`.
   - **Orange hotspots** — clickable markers inside the 360° view; labels and `yaw`/`pitch` come from each room's `links` array in `ROOMS`.
4. **Accessibility** — a visually hidden `aria-live` region announces the current room name when the scene changes.
5. **Floor-plan alternative** — standalone preview links to `museum-tour-map.html` (pulse pins on a floor plan, modal 360° per pin). On WordPress, point that link at the live tour-map page instead of a relative `.html` file.

### The 12 rooms

| ID | Display title |
|---|---|
| `kitchen` | Fundamentally Food Kitchen |
| `food` | Fundamentally Food |
| `publix` | Fundamentally Food — Publix |
| `tools` | Tools For Solutions |
| `gateway` | Gateway to the World |
| `creativity` | Let Your Creativity Flow |
| `leaping` | Leaping into Learning |
| `science` | Step Up To Science |
| `janes` | Jane's Innovation Station |
| `store` | Museum Store |
| `snack` | Snack Shop |
| `security` | Security |

Hotspot yaw/pitch values are approximate navigation cues — they may need a human pass per scene after pano re-exports.

---

## Asset loading (`ASSET_MODE`)

Default: **`ASSET_MODE = "auto"`** (set near the top of the paste-block script).

| Mode | Behavior |
|---|---|
| `"auto"` | Picks media library vs bundled files based on host (see matrix below). **Use this for CMA WordPress.** |
| `"cdn"` | Always uses hardcoded `cdn:` URLs from the `ROOMS` array (production `childrensmuseumatlanta.org` paths). May fail CORS off-domain. |
| `"local"` | Always uses `museum-tour-map/<file>` next to the HTML. For static hosting with the asset folder uploaded alongside. |

Each room in `ROOMS` has two paths:

- **`file`** — local filename under `museum-tour-map/` (preview / GitHub Pages).
- **`cdn`** — production media-library URL; on WordPress, rewritten to same-origin (see below).

Local panos are **byte-identical** to the CMA `-scaled` CDN files. Jane's Innovation Station and Step Up To Science are **2560×1440 (16:9)** on both local and CDN; the other 10 panos are **2560×1280 (2:1)**.

---

## Where panorama URLs resolve

### Environment matrix (`ASSET_MODE = "auto"`)

| Environment | Uses media library? | Resolved pano URL |
|---|---|---|
| **Vite dev** (`localhost` / `127.0.0.1` / `[::1]`, ports 5173 / 4173) | No | `{page-origin}/museum-tour-map/{file}` |
| **Unzipped preview** (`file://`) | No | `{folder}/museum-tour-map/{file}` — URL resolves, but the WebGL viewer is **blocked** over `file://`. Use a local HTTP server (see [Local preview](#local-preview)). |
| **GitHub Pages** (`*.github.io`) | No | `https://mattybotstew.github.io/Homepagev2/museum-tour-map/{file}` |
| **WordPress / WP Engine / wpdev / production CMA** | Yes | `{location.origin}/wp-content/uploads/…` (path taken from each room's `cdn` value) |
| **Unknown non-preview host** | Yes (safe default) | Same-origin rewrite as WordPress |

### Same-origin rewrite (WordPress)

When media-library mode is active, `wpMediaUrl()` strips the domain from each `cdn:` URL and prepends `location.origin`:

```
https://childrensmuseumatlanta.org/wp-content/uploads/2026/05/20260430_173004_348-scaled.webp
→ https://<current-host>/wp-content/uploads/2026/05/20260430_173004_348-scaled.webp
```

WordPress detection: `#wpadminbar`, `/wp-content/` or `/wp-includes/` links, `api.w.org`, generator meta, body `wp-*` classes, or hostnames matching CMA / `*.wpengine.com` / `*.wpenginepowered.com` / `wpdev` / `staging` / `stg`.

### External dependencies (all environments)

- **Pannellum** — `cdn.jsdelivr.net` (CSS + JS; widget injects if WPBakery strips the `<script src>`)
- **Nunito** — Google Fonts

---

## WordPress deployment

1. In WP Admin: **Pages → Museum Walk Through** → **Edit with WPBakery**.
2. Add a **Raw HTML** element in the main content column (not Text or Custom HTML — those strip scripts on WP Engine).
3. Copy **START → END** from `public/museum-walk-through.html`.
4. Paste as-is. No extra wrapper.
5. **Update** the page.
6. **Purge WP Engine cache** (Caching → Purge all caches, or page-level purge).
7. Preview **logged out**. Room chips and orange markers should switch scenes with a fade.

On WordPress the widget automatically:

- Hides its own **"Museum Walk-Through"** heading (the theme page title is used).
- Drops standalone preview padding so the viewer fills the theme column.
- Adds class `cma-walk-wp` on the root section.

**Staging / wpdev:** panos must exist at the same `/wp-content/uploads/…` paths as production. Copy production uploads onto the environment if a pano 404s.

**URL edits:** only needed if uploads land at **different** paths than the `cdn:` values in `ROOMS` (~12 entries). Otherwise leave `ASSET_MODE = "auto"`.

---

## Zip handoff package

Package name: **`cma-museum-walk-through.zip`**

```
cma-museum-walk-through/
├── museum-walk-through.html   ← main widget + in-browser guides
├── museum-tour-map.html       ← companion floor-plan widget
├── README.txt                 ← short handoff summary
└── museum-tour-map/           ← 12 panos + Updated-Museum-Map.png
```

**Local preview from zip — requires a local server.** `file://` (double-click open) is **not supported**: browsers give each `file://` page a unique opaque origin and don't send CORS for local subresources, so Pannellum's WebGL texture upload is rejected and the viewer shows *"The file … could not be accessed."* Serve the folder over HTTP instead:

```sh
cd cma-museum-walk-through
python3 -m http.server 8000
# open http://localhost:8000/museum-walk-through.html  (and /museum-tour-map.html)
```

Any static server works (`npx serve`, `python -m http.server`, Vite preview). The widget detects `file://` and shows an in-browser notice with these commands instead of the cryptic Pannellum error.

**WordPress from zip:** open the HTML in a text editor, copy START → END, paste into Raw HTML — same as repo workflow.

---

## Common failures and fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| *"The file https://mattybotstew.github.io/…/fundamentally-food-kitchen.webp could not be accessed"* | WordPress **server-side** fetch of a GitHub Pages URL (Add from URL, iframe, or sideload) | Paste START → END only. Never iframe github.io or Add-from-URL github.io assets. |
| *"The file https://childrensmuseumatlanta.org/wp-content/uploads/… could not be accessed"* in **local preview** | Old logic tried CDN cross-origin; browser blocks CORS | Use latest widget (`file://` / localhost use bundled `museum-tour-map/`). Hard-refresh. |
| *"The file file:///…/museum-tour-map/fundamentally-food-kitchen.webp could not be accessed"* in an **unzipped local preview** | `file://` double-click open — browsers give the page a unique opaque origin with no CORS, so the WebGL pano upload is rejected | Not a path bug — run a local server: `cd cma-museum-walk-through && python3 -m http.server 8000`, open `http://localhost:8000/museum-walk-through.html`. |
| Viewer appears but room buttons do nothing | WPBakery stripped the inline `<script>` | Move script into a **Raw JS** element; keep Pannellum `<script src>` in Raw HTML (or let widget inject it). |
| *"360 viewer failed to load"* | Pannellum CDN blocked | Confirm `cdn.jsdelivr.net` is reachable; check browser console on the WP URL. |
| Blue/empty viewer, one pano 404 on **wpdev** | Staging missing that upload | Copy production media library files to wpdev at the same path. |
| Theme layout broken / page padding zeroed | Pasted outside Raw HTML or unscoped CSS leaked | Use Raw HTML; styles are scoped under `.cma-walk`. |
| Wrong aspect ratio on Jane's or Step Up To Science | Pano is 16:9 locally and on CDN | Needs 2:1 re-export from originals + WP re-upload (new `-scaled` URLs). |

---

## What dev should **not** do

- Do **not** iframe the GitHub Pages preview into WordPress.
- Do **not** use WordPress **Add from URL** with github.io or relative `museum-tour-map/…` paths.
- Do **not** paste the in-browser **integration instructions** panel (below `END`) into WPBakery.
- Do **not** use Text or Custom HTML blocks — use **Raw HTML** (and Raw JS only if scripts are stripped).
- Do **not** assume wpdev has panos unless production uploads were copied.
- Do **not** set `ASSET_MODE = "cdn"` on localhost expecting it to work — CMA media library sends no CORS headers for cross-origin use.

---

## Companion tour map widget

`public/museum-tour-map.html` — floor-plan image with animated pulse pins; clicking a pin opens a modal 360° view of that area.

- Same **START → END** paste pattern and **`ASSET_MODE`** logic as the walk-through.
- Floor-plan `<img>` defaults to production CDN URL in markup (WP server-side scans never see relative paths); JS swaps to local file on preview hosts.
- **12 hotspots** in the `HOTSPOTS` array (same panos as walk-through rooms, plus overlapping exhibit areas).
- Walk-through page links to the map in standalone preview; wire the WP link to `/plan-your-visit/tour-the-museum/` (or the live tour-map URL).

Embed previews (hide chrome): append `?embed=1` to either standalone HTML URL.

---

## Quick reference

| Question | Answer |
|---|---|
| What gets pasted into WP? | START → END block only |
| Default asset mode? | `"auto"` |
| Where do panos live on production WP? | Already in media library at paths in each room's `cdn:` field |
| Where do panos live for local preview? | `public/museum-tour-map/` |
| Who maintains room order / hotspots? | Edit `ROOMS` array in `museum-walk-through.html` |
| Related journal entries | `JOURNAL.md` — 2026-08-19 wpdev / CORS / WP Engine paste notes |
