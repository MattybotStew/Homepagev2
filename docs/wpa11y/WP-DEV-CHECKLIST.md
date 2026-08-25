# WP Dev Checklist — clear the last 11 accessibility violations

**Site:** `https://childmusstg.wpenginepowered.com/` (staging) · **Status:** 20 → 11 after the
CSS contrast override. These 11 are **structural/ARIA only** — they cannot be fixed with CSS.
All four are markup (WPBakery / theme template) changes. Verify with axe or Lighthouse after
each. Fixes come from `WORDPRESS-ACCESSIBILITY-HANDOFF.md` §5.

---

## ☐ 1. Tablists — remove the invalid `role="tablist"`  (clears 5)
**Finding:** `aria-required-children` on `.cma-pill-scroll[role="tablist"]`
**Where:** events, news, resources, resources/playful-learning, home (featured-exhibits filter pills)

A `tablist` role must have `tab`/`tabpanel` children + arrow-key handling. These are
click-to-filter **buttons**, not tabs. **Remove the `role="tablist"`** so they become a plain
group of buttons (matches the React source, which uses bare `<button>`s).

```html
<!-- BEFORE -->
<div class="cma-pill-scroll" role="tablist">
  <button class="cma-nav-pill">All</button>
  <button class="cma-nav-pill">Exhibits</button>
</div>

<!-- AFTER -->
<div class="cma-pill-scroll" aria-label="Filters">
  <button class="cma-nav-pill">All</button>
  <button class="cma-nav-pill">Exhibits</button>
</div>
```
> Optional `aria-label="Filters"` on the container is fine once `tablist` is gone.
> Only use a real tab pattern if the design truly needs tabs — that means adding
> `role="tablist"`/`role="tab"`/`role="tabpanel"` + `aria-selected` + arrow-key nav (more work).

---

## ☐ 2. Star rating — add `role="img"` to the labelled div  (clears 3)
**Finding:** `aria-prohibited-attr` on `.cma-testimonial-card__stars[aria-label="5 out of 5 stars"]`
**Where:** educators, memberships, home (testimonial cards)

A bare `<div>` can't carry `aria-label` without a role. Add `role="img"`:

```html
<!-- BEFORE -->
<div class="cma-testimonial-card__stars" aria-label="5 out of 5 stars">…5 stars…</div>

<!-- AFTER -->
<div class="cma-testimonial-card__stars" role="img" aria-label="Rated 5 out of 5 stars">…5 stars…</div>
```
> Copy from the React fix: `<div role="img" aria-label="Rated 5 out of 5 stars">`.

---

## ☐ 3. Calendar iframe — add a `title`  (clears 1)
**Finding:** `frame-title` on `#calendar-iframe`
**Where:** `/programs/field-trips/`

```html
<!-- BEFORE -->
<iframe id="calendar-iframe" src="https://…" …></iframe>

<!-- AFTER -->
<iframe id="calendar-iframe" title="Field trip calendar" src="https://…" …></iframe>
```

---

## ☐ 4. Inline links in article body — add underline + focus cue  (clears 2)
**Finding:** `link-in-text-block` on `.cma-article__body > p > a`
**Where:** `/events/fun-on-tap/`, `/events/imagination-ball/` (and any rich-text body)

Links inside prose must be distinguishable without color alone:

```css
.cma-article__body a {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.cma-article__body a:hover,
.cma-article__body a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```
> React equivalent already exists as `.cma-prose a { text-decoration: underline }`.

---

## ☐ 5. Gravity Forms submit button — missing accessible name  (clears 1)
**Finding:** WAVE "Missing form label" on `#gform_submit_button_2` (`<input type="submit">` with no `value`/label)
**Where:** homepage newsletter/contact form (Gravity Forms)

A submit `<input>` needs text content. Give it a value or `aria-label`:
```html
<input type="submit" id="gform_submit_button_2" value="Submit" class="…" />
```
or
```html
<input type="submit" id="gform_submit_button_2" aria-label="Submit" … />
```

## ☐ 6. WAVE-only contrast (bright teal #00adb / gray) — add to the override
WAVE found 6 real contrast failures **axe & Lighthouse missed**. Four are covered by the
**WAVE-PARITY** block in `wordpress-a11y-overrides.css` (teal button, mobile-menu teal text,
gray address, pricing badge). Two need a dev to locate the exact element:

- **`nav.desktop-nav` "Plan Your Visit" link** — earlier flagged white-on-teal (2.73). **Verified false positive:** the link itself is white on a transparent bg (navy bar) and **passes** (~10.6:1); the teal `#00adb` came from a dropdown ancestor, not the rendered background. No action needed.
- **`.cma-hero` text over the hero photo** — THREE elements (h1 "Where Families Come to Play",
  `.cma-eyebrow`, `.cma-hero__subtitle`). **Verified PASS by pixel sampling:** the photo behind
  them is dark (h1 bg rgb(53,56,54) → 11.86:1; eyebrow → 9.51:1; subtitle → 5.51:1). WAVE's
  ~1:1 flags are false positives (it compares against the white wrapper, not the photo). No
  action needed. Screenshot reference: `docs/wpa11y/wp-hero-section.png`.

> ⚠️ These two are why a 3rd engine matters: axe/Lighthouse gave 0 contrast because they skip
> nav state + text-over-image. WAVE caught them.

---

## Verify
1. **Purge WP Engine cache** after each change.
2. Re-run the scan (this repo):
   ```bash
   node scripts/a11y-wp.mjs --url https://childmusstg.wpenginepowered.com/ --max 40
   ```
   Target: **0 violations**.
3. Quick visual check: tab pills still filter; stars still show; calendar still embeds; links read clearly.

## Out of scope (already done / not CSS)
- ✅ Contrast (`color-contrast`) — fixed by the hardcoded override (20 → 11).
- ❗ Accessibility toolbar launcher — partner's widget code, not in repo (handoff §8).
