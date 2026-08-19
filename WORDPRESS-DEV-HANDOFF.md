# CMA Museum 360° Widgets — WordPress Developer Handoff

**Package:** `cma-museum-walk-through.zip`  
**From:** CMA Homepage v2 dev team  
**Date:** August 2026

This zip contains two self-contained HTML widgets for WPBakery. They are **not** part of the React app — no build step, no npm on the server.

---

## What's in the zip

| File | Purpose |
|---|---|
| `museum-walk-through.html` | Room-to-room 360° tour (12 scenes, Pannellum viewer) |
| `museum-tour-map.html` | Floor-plan map with pulse pins → modal 360° per area |
| `museum-tour-map/` | 12 panorama files + floor plan PNG — **for local preview only** |
| `MUSEUM-WALK-THROUGH.md` | Full technical reference (asset matrix, troubleshooting) |
| `README.txt` | Quick local-preview commands |

**Target WordPress pages:**

| Widget | URL slug |
|---|---|
| Walk-through | `/plan-your-visit/tour-the-museum/museum-walk-through/` |
| Tour map | `/plan-your-visit/tour-the-museum/` (or equivalent tour-map page) |

---

## Deployment checklist (do this)

### Walk-through

1. WP Admin → **Pages → Museum Walk Through** → **Edit with WPBakery**
2. Add a **Raw HTML** element in the main content column
3. Open `museum-walk-through.html` in a text editor
4. Copy **everything** between these comments (inclusive of the markup/style/script between them):

   ```html
   <!-- START: CMA Museum Walk-Through -->
   …
   <!-- END: CMA Museum Walk-Through -->
   ```

5. Paste into Raw HTML **as-is** — no wrapper div, no edits
6. **Update** the page
7. **Purge WP Engine cache** (Caching → Purge all caches)
8. Preview **logged out** — room chips and orange hotspots should switch 360° scenes

### Tour map (companion widget)

Same steps using `museum-tour-map.html` and its **START → END** markers on the tour-map page.

---

## Panorama assets — you usually do NOT upload the zip folder

Leave **`ASSET_MODE = "auto"`** (default in both HTML files).

On WordPress / WP Engine / wpdev, the widget loads panos from **this site's media library**, same-origin:

```
https://<your-host>/wp-content/uploads/2026/05/20260430_173004_348-scaled.webp
```

The script rewrites each room's `cdn:` URL to `location.origin + /wp-content/uploads/…`. **Production already has these files uploaded.** You only edit `cdn:` values in the `ROOMS` array (~12 entries) if uploads land at different paths.

**Staging / wpdev:** copy production `/wp-content/uploads/` files to staging if a pano 404s. The zip's `museum-tour-map/` folder is for **local preview**, not for WordPress sideloading.

---

## Do NOT

| Don't | Why |
|---|---|
| Iframe GitHub Pages preview | WP tries to server-side fetch github.io assets and fails |
| Use **Add from URL** with github.io or relative paths | Same server-side fetch error |
| Paste the yellow **integration instructions** panel (below `END` in the HTML file) | Docs only — not part of the widget |
| Use Text or Custom HTML blocks | WP Engine strips `<script>` — use **Raw HTML** |
| Double-click the HTML for QA | Browsers block WebGL 360° over `file://` — use a local server (see below) |
| Upload the zip's `museum-tour-map/` via FTP unless you set `ASSET_MODE = "local"` | Default WP paste uses the media library |

---

## Local preview (for QA before paste)

Browsers **cannot** render the 360° viewer from `file://`. Serve the folder over HTTP:

```bash
cd cma-museum-walk-through
python3 -m http.server 8000
```

Open:

- http://localhost:8000/museum-walk-through.html
- http://localhost:8000/museum-tour-map.html

---

## Expected behavior after paste

**Walk-through**

- Opens on **Fundamentally Food Kitchen**
- Drag to look around; scroll/pinch to zoom
- Room buttons below the viewer switch scenes
- Orange hotspots inside the 360° view link to adjacent rooms
- Widget heading is hidden on WP (theme page title is used)

**Tour map**

- Floor plan with animated pulse pins
- Click a pin → modal 360° viewer for that area

**External CDNs required (already allowed on CMA site):**

- `cdn.jsdelivr.net` — Pannellum
- `fonts.googleapis.com` — Nunito

---

## Troubleshooting

| Problem | Fix |
|---|---|
| *"The file https://mattybotstew.github.io/… could not be accessed"* | Stop using github.io URLs — paste START→END from the HTML file only |
| Viewer shows but buttons do nothing | WPBakery stripped `<script>` — move inline script to a **Raw JS** element |
| *"360 viewer failed to load"* | Check `cdn.jsdelivr.net` isn't blocked; see browser console |
| One pano missing on wpdev | Copy that file from production media library to staging at the same path |
| Jane's Innovation Station or Step Up To Science look stretched | Those two panos are 16:9 (off-spec) — client re-export pending; not a WP config issue |

If scripts are stripped, keep the Pannellum `<script src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js">` tag in Raw HTML — the widget can inject it if missing.

---

## Quick reference

| Question | Answer |
|---|---|
| What gets pasted? | START → END block only (both widgets) |
| Change asset mode? | Only if needed — default `"auto"` is correct for CMA WP |
| Edit room order / hotspots? | `ROOMS` array in walk-through script; `HOTSPOTS` in tour-map script |
| Full technical docs | `MUSEUM-WALK-THROUGH.md` in this zip |
| GitHub preview (reference only) | https://mattybotstew.github.io/Homepagev2/museum-walk-through.html |

---

**Questions?** Contact the CMA Homepage dev team. Reference repo: `Homepagev2` on GitHub (`public/museum-walk-through.html`, `public/museum-tour-map.html`).
