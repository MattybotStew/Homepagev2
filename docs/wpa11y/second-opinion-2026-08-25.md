# CMA Staging — Accessibility Second-Opinion Cross-Check

**Date:** 2026-08-25
**Target:** `https://childmusstg.wpenginepowered.com/` (WP Engine staging)
**Primary scan:** axe-core via `scripts/a11y-wp.mjs` (Playwright + axe, WCAG 2.1 AA, 40 routes)
**Second opinion:** Google Lighthouse 13 (independent engine/wrapper), accessibility category, desktop preset

These two tools use **different** rule engines and code paths. Where they agree on the
same element, the finding is confirmed real (not a script artifact or a one-tool quirk).

---

## Summary

| Scan | Scope | Result |
| --- | --- | --- |
| axe (primary) — before override | 40 routes | **20 violations** (`staging-axe-2026-08-25.log`) |
| **axe — after override applied** | 40 routes | **11 violations** (`staging-axe-AFTER-override-2026-08-25.log`) |
| Lighthouse | Home | 89/100 — fails `aria-prohibited-attr`, `aria-required-children`, `color-contrast` |
| Lighthouse | /plan-your-visit/ | 97/100 — fails `color-contrast` |
| Lighthouse | /donate/ | 96/100 — fails `color-contrast` |

> **Update (after client pasted the hardcoded override):** all 9 `color-contrast`
> violations are gone. The remaining **11** are structural/ARIA and cannot be fixed by
> CSS — they are the handoff §5 markup items.

### Remaining after override (11, all structural/ARIA)
- `aria-required-children` — `.cma-pill-scroll[role="tablist"]` ×5 (events, news, resources, resources/playful-learning, home)
- `aria-prohibited-attr` — star `aria-label` on a bare `<div>` ×3 (educators, memberships, home)
- `frame-title` — `#calendar-iframe` ×1 (programs/field-trips)
- `link-in-text-block` — `.cma-article__body > p > a` ×2 (fun-on-tap, imagination-ball)

> Fixes for all four are in `WORDPRESS-ACCESSIBILITY-HANDOFF.md` §5.

---

## Confirmed by BOTH engines (highest confidence)

### 1. `color-contrast` — orange/teal CTA & stat text
Both tools flag the exact same nodes:

| Element | axe | Lighthouse |
| --- | --- | --- |
| `.cma-plan-tabs__nav-item > span` (active tab) | `/plan-your-visit`, `/about/impact` (2.28) | `/plan-your-visit` |
| `.cma-page-hero-stat > p` (white on orange stats) | `/about`, `/donate` (2.28) | `/donate` |
| `.cma-logo-marquee__item > p` (white on teal/orange tiles) | home/museum-store/donate/donor-recognition (2.28–2.72) | `/donate` |

These are all the "white text on brand color" cases the handoff token changes were written
for (`orange-dark #9c4f04`, `teal-dark #00707a`) — **confirms the overrides are the right fix**.

### 2. `aria-required-children` — `.cma-pill-scroll[role="tablist"]` missing required children
axe: home (×2), /events, /news, /resources, /resources/playful-learning.
Lighthouse: Home. **Both agree.**

### 3. `aria-prohibited-attr` — `aria-label` on `.cma-testimonial-card__stars`
axe: home, /educators, /memberships (×4 nodes each). Lighthouse: Home. **Both agree.**

---

## Flagged by axe only (not in the 3 Lighthouse routes scanned)

These live on routes Lighthouse wasn't run against, so absence from Lighthouse is expected —
not a disagreement:

| axe finding | Route(s) |
| --- | --- |
| `frame-title` — `#calendar-iframe` has no accessible name | /programs/field-trips |
| `link-in-text-block` — inline `.cma-article__body > p > a` | /events/fun-on-tap, /events/imagination-ball |
| Additional `color-contrast`: `.cma-tax-note` (3.98), `.cma-pricing__eyebrow` (4.32), `.cma-fundraising__stat--orange` (2.28) | /support, home, /giving-circles/imagination-ball |

---

## How to reproduce

```bash
# axe (primary, 40 routes)
node scripts/a11y-wp.mjs --max 40

# Lighthouse (independent engine)
export CHROME_PATH="/Users/…/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
npx -y lighthouse 'https://childmusstg.wpenginepowered.com/' --only-categories=accessibility --preset=desktop --output=json
```

> Lighthouse needs `CHROME_PATH` (or `--chrome-path`) pointed at a Chrome binary; see the
> second bullet above. A `--chrome-path` flag alone was ignored by chrome-launcher — use the
> `CHROME_PATH` env var.

---

## Raw artifacts (this folder)

- `staging-axe-2026-08-25.log` — full axe output, 40 routes
- `lighthouse-home-2026-08-25.json` — Lighthouse Home, 89/100
- `lighthouse-plan-your-visit-2026-08-25.json` — Lighthouse /plan-your-visit/, 97/100
- `lighthouse-donate-2026-08-25.json` — Lighthouse /donate/, 96/100

---

## Recommendation

The **independent second opinion confirms** the original axe findings — the highest-impact
path forward is applying `wordpress-a11y-overrides.css` (token darkenings for the contrast
cases) plus the structural fixes for the tablist and star `aria-label`. Full details:
`WORDPRESS-ACCESSIBILITY-HANDOFF.md` and `wordpress-a11y-overrides.css` at repo root.
