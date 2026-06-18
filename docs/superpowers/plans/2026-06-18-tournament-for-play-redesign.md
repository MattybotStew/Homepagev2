# Tournament For Play Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the plain-text Tournament For Play page with a visual page (stats, schedule timeline, sponsor tier cards, photo strip) without touching the shared template used by the other three giving circles.

**Architecture:** `GivingCirclePage.tsx` special-cases the `tournament-for-play` slug and renders a new, fully self-contained `TournamentForPlayContent.tsx` component instead of `ArticleContentWithSidebar`. The `givingCircles.ts` data entry for `tournament-for-play` is untouched (other circles still link to it via their related-cards list); all new copy/structured data lives directly in the new component, matching how `CorporatePartnerPageContent.tsx` is built.

**Tech Stack:** React + TypeScript + Vite, Tailwind v4 (arbitrary values + `--cma-*` tokens), `motion/react` for scroll-triggered animation, Font Awesome (`@fortawesome/react-fontawesome`) + `lucide-react` icons. No unit test framework exists in this repo, and `typescript` is not a project dependency — there is no `tsc` binary available, so no type-checking step exists in this toolchain. Verification is `npm run build` (a Vite/esbuild production build — catches syntax errors, unresolved imports, and JSX errors, though not type errors) plus visual confirmation in the browser via the `webapp-testing` skill, per this project's established convention.

## Global Constraints

- Design tokens: use `text-cma-navy`, `bg-cma-orange`, etc. — never hardcode hex values that match a token (`cma-navy #1d3e6b`, `cma-orange #f7941e`, `cma-orange-dark #b8620a`, `cma-teal #00ADBB`, `cma-teal-dark #007c87`, `cma-teal-light #4AD1DC`, `cma-blue-light #d4e3f3`, `cma-cream #fdf6ee`).
- CTA `<a>` buttons: `px-[24px] py-[13px]`, `rounded-[1000px]`, `font-black text-[15px]` (use the existing `cma-btn` utility class, which already encodes this — do not hand-roll new padding values).
- Global `button`/`h1`/`h2`/`h3`/`p` element styles apply automatically — do not redeclare font-weight/size inline on these elements unless overriding for a one-off (e.g. white text on navy hero).
- Hero sections with a `cma-eyebrow` must have `overflow-hidden` on the section wrapper (letter-spacing overflow at narrow viewports).
- All styles go global first; only use inline Tailwind arbitrary values for genuinely one-off cases. Reuse `cma-section-container`, `cma-btn`, `cma-text-link`, `cma-social-btn-filled`, `shadow-cma-*` utilities — do not duplicate their underlying values inline.
- No comments explaining *what* code does — only non-obvious *why* comments (none are needed in this plan's code).
- No real event photos or sponsor logo files exist yet. Use the existing `educators-img-0.webp` through `educators-img-3.webp` assets as clearly-placeholder imagery, and plain gray tiles for sponsor "logos" — both swappable later without restructuring.
- Keep the existing URL: `#/giving-circles/tournament-for-play`. Do not change routing in `main.tsx` or the nav link in `Header.tsx`.
- Do not modify `ArticleContentWithSidebar.tsx`, `givingCircles.ts`'s schema, or how Imagination Ball / Young Professionals / Dream Builders render.

---

### Task 1: Scaffold `TournamentForPlayContent` and wire up routing

**Files:**
- Create: `src/app/components/TournamentForPlayContent.tsx`
- Modify: `src/app/pages/GivingCirclePage.tsx`

**Interfaces:**
- Produces: `export default function TournamentForPlayContent({ related }: { related: Program[] })` — a self-contained set of `<section>` elements (no wrapping `<div>`, no page shell — the page shell stays in `GivingCirclePage.tsx`). `Program` is imported from `../data/programs`.
- Consumes (in `GivingCirclePage.tsx`): the existing `related` array already computed in that file (`Program[]`), passed straight through.

- [ ] **Step 1: Create the component file with data constants, hero, and breadcrumb**

Create `src/app/components/TournamentForPlayContent.tsx`:

```tsx
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import imgPhoto0 from "../../assets/educators-img-0.webp";
import imgPhoto1 from "../../assets/educators-img-1.webp";
import imgPhoto2 from "../../assets/educators-img-2.webp";
import imgPhoto3 from "../../assets/educators-img-3.webp";
import type { Program } from "../data/programs";

type Props = {
	related: Program[];
};

const stats = [
	{ value: "14th", label: "Annual Tournament" },
	{ value: "$430K+", label: "Raised in 2026" },
	{ value: "30", label: "Foursomes" },
	{ value: "Aug 17, 2026", label: "Peachtree Golf Club" },
];

const schedule = [
	{ time: "8:30 am", activity: "Registration & Breakfast" },
	{ time: "9:00 am", activity: "Practice Range & Putting Green Open" },
	{ time: "9:45 am", activity: "Welcome Remarks & Player Instruction" },
	{ time: "10:00 am", activity: "Shotgun Start" },
	{ time: "3:30 pm", activity: "Awards Ceremony & Reception" },
];

const sponsorTiers = [
	{ name: "Presenting", featured: true, sponsors: ["PNC Bank"] },
	{ name: "Albatross", featured: false, sponsors: ["Mellow Mushroom"] },
	{ name: "Golf Cart", featured: false, sponsors: ["Osprey"] },
	{
		name: "Early Birdie",
		featured: false,
		sponsors: [
			"Anonymous",
			"Christopher Childs",
			"Coca-Cola Company",
			"Georgia Power",
			"Hawkins Parnell Young & Young LLP",
			"JVP Management",
			"KSM",
			"Lazlo 326 Corp",
			"Andy Sanford/Ameriprise",
			"Southern Company",
			"Stanton Barton/McBrayer/Mozley Finlayson Loggins",
			"Tokio Marine HCC",
		],
	},
];

const photos = [imgPhoto0, imgPhoto1, imgPhoto2, imgPhoto3];

const WAITLIST_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Tournament%20For%20Play%20Waitlist";
const SPONSOR_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Tournament%20For%20Play%20Sponsorship";

export default function TournamentForPlayContent({ related }: Props) {
	return (
		<>
			{/* Hero */}
			<section className="relative w-full bg-cma-navy overflow-hidden flex flex-col items-center justify-center py-[80px] md:py-[120px]">
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container relative z-[1] flex flex-col items-center gap-8 text-center max-w-[800px] mx-auto">
					<p className="cma-eyebrow text-cma-teal">Annual Golf Fundraiser</p>
					<h1 className="text-white">Tournament For Play</h1>
					<p className="text-cma-blue-light font-semibold text-[clamp(16px,1.67vw,24px)] leading-[1.4] max-w-[620px]">
						The 14th Annual Tournament for Play tees off at Peachtree Golf
						Club on August 17, 2026. Foursomes are sold out — join the
						waitlist or ask about non-player sponsorship.
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						<a
							href={WAITLIST_HREF}
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							Join Waitlist
						</a>
						<a
							href={SPONSOR_HREF}
							className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
						>
							Sponsorship Inquiry
						</a>
					</div>
				</div>
			</section>

			{/* Breadcrumb + social */}
			<section className="bg-cma-cream pt-[40px]">
				<div className="cma-section-container">
					<div className="flex items-center justify-between flex-wrap gap-[12px]">
						<div className="flex items-center gap-[8px] flex-wrap text-[15px]">
							<a href="#/donate" className="text-cma-navy hover:underline">
								Donate
							</a>
							<span className="text-cma-navy text-[18px]">›</span>
							<span className="text-cma-teal-dark">Tournament For Play</span>
						</div>
						<div className="flex gap-[16px] items-center shrink-0">
							<a
								href="https://www.facebook.com/childrensmuseumofatlanta"
								target="_blank"
								rel="noopener noreferrer"
								className="cma-social-btn-filled shrink-0"
								aria-label="Share on Facebook"
							>
								<Facebook className="size-5 text-white" />
							</a>
							<a
								href="https://www.instagram.com/childrensmuseumofatlanta/"
								target="_blank"
								rel="noopener noreferrer"
								className="cma-social-btn-filled shrink-0"
								aria-label="Share on Instagram"
							>
								<Instagram className="size-5 text-white" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
```

Note: `faArrowRight` and `FontAwesomeIcon` are unused until Task 6 (related cards) — that's fine, they're declared here so later tasks only need to add JSX, not imports. `noUnusedLocals` is `false` in `tsconfig.json`, so this will not fail the type check.

- [ ] **Step 2: Wire the slug branch into `GivingCirclePage.tsx`**

Modify `src/app/pages/GivingCirclePage.tsx` — add the import and branch the render:

```tsx
import { Navigate, useParams } from "react-router-dom";
import AlertBanner from "../components/AlertBanner";
import ArticleContentWithSidebar from "../components/ArticleContentWithSidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import TournamentForPlayContent from "../components/TournamentForPlayContent";
import { givingCircles } from "../data/givingCircles";

export default function GivingCirclePage() {
	const { slug } = useParams<{ slug: string }>();
	const circle = givingCircles.find((c) => c.slug === slug);

	if (!circle) return <Navigate to="/support" replace />;

	const related = givingCircles.filter((c) => c.slug !== slug).slice(0, 3);

	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden">
				<MobileHeader />
			</div>
			<div className="hidden lg:block">
				<Header />
			</div>
			<div className="hidden lg:block">
				<ScrollProgress />
			</div>
			{slug === "tournament-for-play" ? (
				<TournamentForPlayContent related={related} />
			) : (
				<ArticleContentWithSidebar
					exhibit={circle}
					related={related}
					sections={circle.sections}
					breadcrumb={{ label: "Support", href: "#/support" }}
					relatedHrefBase="#/giving-circles"
					relatedHeading="Other Ways to Give"
					relatedCta="Learn More"
				/>
			)}
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
```

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: build completes with no errors, exit code 0.

- [ ] **Step 4: Visually verify**

Run `npm run dev` in the background. Use the `webapp-testing` skill to open `http://localhost:5173/#/giving-circles/tournament-for-play` and confirm:
- The navy hero renders with "Tournament For Play" heading, the subtitle, and both CTA buttons.
- The breadcrumb row reads "Donate › Tournament For Play" and the "Donate" link points at `#/donate`.
- Navigate to `http://localhost:5173/#/giving-circles/imagination-ball` and confirm it still renders the old `ArticleContentWithSidebar` layout (sidebar + paragraphs), unaffected.

Stop the dev server after confirming.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/TournamentForPlayContent.tsx src/app/pages/GivingCirclePage.tsx
git commit -m "Scaffold visual Tournament For Play page with hero and breadcrumb"
```

---

### Task 2: Add the stats strip

**Files:**
- Modify: `src/app/components/TournamentForPlayContent.tsx`

**Interfaces:**
- Consumes: the `stats` constant defined in Task 1 (`{ value: string; label: string }[]`).
- Produces: no new exports — purely additive JSX between the breadcrumb section and the closing `</>` from Task 1.

- [ ] **Step 1: Insert the stats section**

In `src/app/components/TournamentForPlayContent.tsx`, insert this new `<section>` immediately after the breadcrumb `</section>` from Task 1 (right before the closing `</>`):

```tsx
			{/* Stats */}
			<section className="bg-cma-cream w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-x-[32px] gap-y-[48px]">
						{stats.map((stat, i) => (
							<motion.div
								key={stat.label}
								className="flex flex-col gap-[10px] text-center items-center"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.7,
									ease: [0.16, 1, 0.3, 1],
									delay: i * 0.1,
								}}
							>
								<p className="text-cma-orange font-black text-[clamp(28px,3vw,40px)] leading-none">
									{stat.value}
								</p>
								<p className="font-extrabold text-[15px] text-cma-navy leading-[1.2]">
									{stat.label}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: build completes with no errors, exit code 0.

- [ ] **Step 3: Visually verify**

Run `npm run dev` in the background. Use the `webapp-testing` skill to open `http://localhost:5173/#/giving-circles/tournament-for-play` and confirm a 4-tile stats row renders below the breadcrumb showing "14th", "$430K+", "30", and "Aug 17, 2026", each with a label underneath, fading/sliding in on scroll. Stop the dev server after confirming.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/TournamentForPlayContent.tsx
git commit -m "Add stats strip to Tournament For Play page"
```

---

### Task 3: Add the visual schedule timeline

**Files:**
- Modify: `src/app/components/TournamentForPlayContent.tsx`

**Interfaces:**
- Consumes: the `schedule` constant defined in Task 1 (`{ time: string; activity: string }[]`).
- Produces: no new exports — purely additive JSX after the stats section.

- [ ] **Step 1: Insert the schedule section**

Insert this new `<section>` immediately after the stats `</section>` from Task 2:

```tsx
			{/* Schedule */}
			<section className="bg-cma-cream w-full pb-[60px] md:pb-[80px]">
				<div className="cma-section-container">
					<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px]">
						<h2 className="text-cma-navy">Schedule</h2>
						<div className="flex flex-col border-t border-black/10">
							{schedule.map((row, i) => (
								<motion.div
									key={row.time}
									className="flex items-center gap-[24px] py-[16px] border-b border-black/10"
									initial={{ opacity: 0, x: -16 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-40px" }}
									transition={{
										duration: 0.5,
										ease: [0.16, 1, 0.3, 1],
										delay: i * 0.06,
									}}
								>
									<span className="text-cma-orange font-black text-[15px] w-[90px] shrink-0">
										{row.time}
									</span>
									<span className="text-cma-navy font-semibold">
										{row.activity}
									</span>
								</motion.div>
							))}
						</div>
						<p className="text-cma-navy">
							Player bundles include a Par 3 Poker game card and 2
							mulligans — the best poker hand wins $500.
						</p>
					</div>
				</div>
			</section>
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: build completes with no errors, exit code 0.

- [ ] **Step 3: Visually verify**

Run `npm run dev` in the background. Use the `webapp-testing` skill to open `http://localhost:5173/#/giving-circles/tournament-for-play` and confirm a white card titled "Schedule" renders below the stats, listing all 5 rows in order (8:30 am through 3:30 pm) with the time in bold orange, plus the Par 3 Poker sentence below the list. Stop the dev server after confirming.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/TournamentForPlayContent.tsx
git commit -m "Add visual schedule timeline to Tournament For Play page"
```

---

### Task 4: Add the sponsor tiers grid

**Files:**
- Modify: `src/app/components/TournamentForPlayContent.tsx`

**Interfaces:**
- Consumes: the `sponsorTiers` constant defined in Task 1 (`{ name: string; featured: boolean; sponsors: string[] }[]`).
- Produces: no new exports — purely additive JSX after the schedule section.

- [ ] **Step 1: Insert the sponsor tiers section**

Insert this new `<section>` immediately after the schedule `</section>` from Task 3:

```tsx
			{/* Sponsor tiers */}
			<section className="bg-white w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-8">
					<h2 className="text-cma-navy">Sponsors</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{sponsorTiers.map((tier, i) => (
							<motion.div
								key={tier.name}
								className={`bg-cma-cream rounded-[24px] p-8 flex flex-col gap-4 border border-black/5 ${
									tier.featured ? "md:col-span-2" : ""
								}`}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.7,
									ease: [0.16, 1, 0.3, 1],
									delay: i * 0.06,
								}}
							>
								<h3 className="text-cma-navy">{tier.name}</h3>
								<div className="flex flex-wrap gap-3">
									{tier.sponsors.map((sponsor) => (
										<div
											key={sponsor}
											className="flex flex-col items-center gap-2 w-[120px]"
										>
											<div
												className="w-full h-[64px] rounded-[12px] bg-black/10 flex items-center justify-center"
												aria-hidden
											>
												<span className="text-cma-navy/30 text-[11px] font-bold">
													LOGO
												</span>
											</div>
											<p className="text-cma-navy text-[12px] font-semibold text-center leading-[1.3]">
												{sponsor}
											</p>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: build completes with no errors, exit code 0.

- [ ] **Step 3: Visually verify**

Run `npm run dev` in the background. Use the `webapp-testing` skill to open `http://localhost:5173/#/giving-circles/tournament-for-play` and confirm a "Sponsors" heading renders below the schedule, with a full-width "Presenting" card (PNC Bank, one gray logo tile) followed by "Albatross" (Mellow Mushroom), "Golf Cart" (Osprey), and "Early Birdie" (12 names) cards in a 2-column grid, each sponsor shown as a gray placeholder tile with its name underneath. Stop the dev server after confirming.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/TournamentForPlayContent.tsx
git commit -m "Add sponsor tiers grid to Tournament For Play page"
```

---

### Task 5: Add the photo strip

**Files:**
- Modify: `src/app/components/TournamentForPlayContent.tsx`

**Interfaces:**
- Consumes: the `photos` constant defined in Task 1 (`string[]`, image URLs from `educators-img-0.webp` through `educators-img-3.webp`).
- Produces: no new exports — purely additive JSX after the sponsor tiers section.

- [ ] **Step 1: Insert the photo strip section**

Insert this new `<section>` immediately after the sponsor tiers `</section>` from Task 4:

```tsx
			{/* Photo strip */}
			<section className="bg-cma-cream w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-8">
					<h2 className="text-cma-navy">From Past Tournaments</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{photos.map((photo, i) => (
							<img
								key={i}
								src={photo}
								alt=""
								className="w-full h-[160px] md:h-[200px] object-cover rounded-[16px]"
							/>
						))}
					</div>
				</div>
			</section>
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: build completes with no errors, exit code 0.

- [ ] **Step 3: Visually verify**

Run `npm run dev` in the background. Use the `webapp-testing` skill to open `http://localhost:5173/#/giving-circles/tournament-for-play` and confirm a "From Past Tournaments" heading renders below the sponsors grid, with 4 rounded image tiles in a row (2 columns on mobile, 4 on desktop). Stop the dev server after confirming.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/TournamentForPlayContent.tsx
git commit -m "Add photo strip to Tournament For Play page"
```

---

### Task 6: Add closing CTA banner, related circles, and run full regression

**Files:**
- Modify: `src/app/components/TournamentForPlayContent.tsx`

**Interfaces:**
- Consumes: `related: Program[]` (the prop from Task 1), `WAITLIST_HREF`/`SPONSOR_HREF` constants (Task 1), `faArrowRight`/`FontAwesomeIcon` (imported but unused since Task 1).
- Produces: the complete, final `TournamentForPlayContent` component — no further tasks depend on this file.

- [ ] **Step 1: Insert the closing CTA and related-circles sections**

Insert these two new `<section>` elements immediately after the photo strip `</section>` from Task 5, right before the closing `</>`:

```tsx
			{/* Closing CTA */}
			<section className="bg-white w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container">
					<div className="bg-cma-navy rounded-[24px] p-8 md:p-12 flex flex-col items-center text-center gap-6">
						<h2 className="text-white">
							Interested in Sponsoring or Joining the Waitlist?
						</h2>
						<p className="text-cma-blue-light max-w-[560px]">
							Tournament foursomes are sold out for 2026, but waitlist spots
							and non-player sponsorships are still open.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<a
								href={WAITLIST_HREF}
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Join Waitlist
							</a>
							<a
								href={SPONSOR_HREF}
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white font-black"
							>
								Sponsorship Inquiry
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Related */}
			<section className="bg-cma-cream w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-[48px]">
					<h2 className="text-cma-navy">Other Ways to Give</h2>
					<div className="flex flex-col gap-[16px]">
						{related.map((rel, i) => (
							<motion.div
								key={rel.slug}
								className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col md:flex-row gap-[32px] md:items-center"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: i * 0.1,
									ease: [0.16, 1, 0.3, 1],
								}}
							>
								<img
									src={rel.cardImage}
									alt={rel.title}
									className="w-full md:w-[266px] md:h-[220px] h-[180px] rounded-[24px] object-cover shrink-0"
								/>
								<div className="flex flex-col gap-[20px] md:gap-[32px] flex-1 min-w-0 md:justify-center">
									<div className="flex flex-col gap-[8px] md:gap-[24px]">
										{rel.eyebrow && (
											<p className="text-cma-teal-dark">{rel.eyebrow}</p>
										)}
										<h3 className="text-cma-navy">{rel.title}</h3>
									</div>
									<p className="text-cma-navy line-clamp-3">
										{typeof rel.paragraphs[0] === "string"
											? rel.paragraphs[0]
											: ""}
									</p>
									<a
										href={`#/giving-circles/${rel.slug}`}
										className="cma-text-link"
									>
										Learn More{" "}
										<FontAwesomeIcon
											icon={faArrowRight}
											className="text-[13px]"
										/>
									</a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
```

- [ ] **Step 2: Full production build**

Run: `npm run build`
Expected: build completes with no errors (exit code 0).

- [ ] **Step 3: Visually verify the complete page**

Run `npm run dev` in the background. Use the `webapp-testing` skill to open `http://localhost:5173/#/giving-circles/tournament-for-play` and confirm, top to bottom: hero → breadcrumb → stats → schedule → sponsor tiers → photo strip → closing CTA → "Other Ways to Give" related cards (Imagination Ball, Young Professionals, Dream Builders, each linking to its own `#/giving-circles/:slug` page). Click through to each related card and confirm it still renders the original `ArticleContentWithSidebar` layout. Also re-check `#/giving-circles/young-professionals` and `#/giving-circles/dream-builders` directly to confirm they're unaffected. Stop the dev server after confirming.

- [ ] **Step 4: Commit**

```bash
git add src/app/components/TournamentForPlayContent.tsx
git commit -m "Add closing CTA and related circles to complete Tournament For Play redesign"
```
