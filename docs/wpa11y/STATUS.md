# CMA Staging — Accessibility Status

**Updated:** 2026-08-25 · **Target:** `https://childmusstg.wpenginepowered.com/`
**Method:** full-site axe (40 routes) + Lighthouse + WebAIM WAVE, cross-checked across three engines.

---

## ✅ What we've done

1. **Full-site ADA/accessibility audit** (axe-core + Playwright, WCAG 2.1 AA, 40 routes) against
   staging. Second opinion via Lighthouse (independent engine); a third check via WebAIM WAVE.
2. **Fixed all contrast violations** (axe/Lighthouse `color-contrast` **20 → 0**):
   - Diagnosed that the theme **hardcodes hex** instead of using `--cma-*` variables (so the
     token block alone had no effect).
   - Built + validated a paste-ready CSS override, applied to staging **Additional CSS**.
   - Added a **WAVE-parity** block for bright-teal `#00adb` / gray cases the other two engines miss.
3. **Verified the WAVE "contrast errors" on the homepage are false positives** by sampling the
   actual photo pixels behind the hero text (h1 11.86:1, eyebrow 9.51:1, subtitle 5.51:1) and
   confirming the nav link is white-on-navy (~10.6:1). Screenshots in `docs/wpa11y/`.
4. **Hardened the React source:** star ratings now use `role="img"` + `aria-label` in
   `Testimonials.tsx` and `AboutTestimonials.tsx` (build green; axe still **0/23 routes**).

### Result
- **axe full-site: 20 → 11 violations / 40 routes — 0 color-contrast.**
- **Lighthouse Accessibility: 89** (home) before the CSS override; contrast now clean.
- **Homepage WAVE: 0 errors, contrast 19 → 5 (all verified false positives), AIM 8.9/10.**

---

## 🔧 What's left (all structural/ARIA — markup, not CSS)

The 11 remaining axe violations cannot be fixed with CSS; they need WP dev edits. Full,
paste-ready steps: **`docs/wpa11y/WP-DEV-CHECKLIST.md`**.

| Item | Route(s) |
| --- | --- |
| Remove invalid `role="tablist"` on filter pills (×5) | events, news, resources, resources/playful-learning, home |
| Add `role="img"` to star ratings (×3) | educators, memberships, home |
| Add `title` to `#calendar-iframe` | programs/field-trips |
| Underline inline article links (×2) | fun-on-tap, imagination-ball |
| Gravity Forms submit button label | homepage form (§5) |

**Out of our reach / not in repo:** the accessibility toolbar launcher (partner's widget code).

---

## 📍 Where everything is

| File | What it is |
| --- | --- |
| `scripts/a11y-wp.mjs` | Full-site axe runner for any WP host (`--url`, `--max`, `--list`) |
| `docs/wpa11y/WP-DEV-CHECKLIST.md` | The dev's step-by-step fix list (the 11 + WAVE items) |
| `docs/wpa11y/second-opinion-2026-08-25.md` | Axe-vs-Lighthouse cross-check + before/after |
| `docs/wpa11y/staging-axe-*.log` | Full axe runs (before 20 / after override 11 / clean 11) |
| `docs/wpa11y/lighthouse-*.json` | Lighthouse reports (home, plan-your-visit, donate) |
| `docs/wpa11y/wp-hero-section.png` / `wp-hero-full.png` | Hero screenshots (visual reference) |
| `wordpress-a11y-overrides.css` | Paste-ready CSS: token block + hardcoded variant + WAVE-parity |
| `WORDPRESS-ACCESSIBILITY-HANDOFF.md` | Full handoff for the WP dev team (tokens, components, ARIA §5) |
| `JOURNAL.md` | Session log (top entries = this work) |

## Verify after dev applies fixes
```bash
node scripts/a11y-wp.mjs --url https://childmusstg.wpenginepowered.com/ --max 40
```
Target: **0 violations**. Then re-run WAVE/Lighthouse for the final sign-off.
