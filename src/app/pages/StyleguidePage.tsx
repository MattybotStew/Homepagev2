import { faArrowRight, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import ScrollProgress from "../components/ScrollProgress";

// ── Helpers ──────────────────────────────────────────────────────────────────

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
	return (
		<section id={id} className="flex flex-col gap-[32px] py-[64px] border-b border-black/8">
			<h2 className="text-cma-navy">{title}</h2>
			{children}
		</section>
	);
}

function Token({ label, value, className }: { label: string; value: string; className?: string }) {
	return (
		<div className="flex flex-col gap-[8px]">
			<div className={`h-[56px] rounded-[12px] border border-black/8 ${className}`} />
			<p className="font-extrabold text-[13px] text-cma-navy leading-[1.3]">{label}</p>
			<p className="text-[12px] text-cma-navy/50 font-mono">{value}</p>
		</div>
	);
}

function Spec({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex items-baseline gap-[8px]">
			<span className="text-[12px] text-cma-navy/40 font-bold uppercase tracking-[1px] w-[80px] shrink-0">{label}</span>
			<span className="text-[13px] text-cma-navy font-mono">{value}</span>
		</div>
	);
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="bg-white rounded-[20px] border border-black/8 p-[24px] flex flex-col gap-[20px]">
			<p className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-cma-navy/40">{title}</p>
			{children}
		</div>
	);
}

const navSections = [
	{ id: "colors", label: "Colors" },
	{ id: "typography", label: "Typography" },
	{ id: "buttons", label: "Buttons" },
	{ id: "links", label: "Links" },
	{ id: "shadows", label: "Shadows" },
	{ id: "pills", label: "Pills & Filters" },
	{ id: "forms", label: "Forms" },
	{ id: "social", label: "Social Buttons" },
	{ id: "animations", label: "Animations" },
	{ id: "layout", label: "Layout" },
	{ id: "patterns", label: "Patterns" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function StyleguidePage() {
	const [openFaq, setOpenFaq] = useState<number | null>(0);

	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			{/* Page header */}
			<div className="bg-cma-navy">
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container py-[64px]">
					<p className="cma-eyebrow text-cma-teal mb-[16px]">Internal Reference</p>
					<h1 className="text-white mb-[12px]">Design System</h1>
					<p className="text-white/70 max-w-[560px]">
						Complete reference for colors, typography, buttons, links, shadows, and component patterns used across the CMA website.
					</p>
				</div>
			</div>

			<div className="bg-cma-cream">
				<div className="cma-section-container">
					<div className="flex gap-[48px] xl:gap-[64px] items-start py-[64px]">

						{/* Sticky sidebar nav */}
						<aside className="hidden lg:flex flex-col gap-[4px] w-[180px] shrink-0 sticky top-[100px] self-start">
							<p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-cma-navy/40 mb-[8px]">Jump to</p>
							{navSections.map((s) => (
								<a
									key={s.id}
									href={`#${s.id}`}
									className="text-[13px] font-bold text-cma-navy/50 hover:text-cma-navy py-[6px] px-[10px] rounded-[8px] hover:bg-white transition-colors"
								>
									{s.label}
								</a>
							))}
						</aside>

						{/* Main content */}
						<div className="flex-1 min-w-0">

							{/* ── Colors ─────────────────────────────────────────────────────── */}
							<Section id="colors" title="Brand Colors">
								<Card title="Primary palette">
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[16px]">
										<Token label="cma-navy" value="#1d3e6b" className="bg-cma-navy" />
										<Token label="cma-navy-dark" value="#152d4d" className="bg-[#152d4d]" />
										<Token label="cma-orange" value="#f7941e" className="bg-cma-orange" />
										<Token label="cma-orange-dark" value="#b8620a" className="bg-cma-orange-dark" />
										<Token label="cma-orange-light" value="#fbb040" className="bg-[#fbb040]" />
										<Token label="cma-teal" value="#00ADBB" className="bg-cma-teal" />
										<Token label="cma-teal-dark" value="#007c87" className="bg-cma-teal-dark" />
										<Token label="cma-teal-light" value="#4AD1DC" className="bg-cma-teal-light" />
										<Token label="cma-teal-pale" value="#cceff1" className="bg-cma-teal-pale" />
										<Token label="cma-blue-mid" value="#346094" className="bg-cma-blue-mid" />
										<Token label="cma-blue-light" value="#d4e3f3" className="bg-cma-blue-light" />
										<Token label="cma-slate" value="#2c3a52" className="bg-cma-slate" />
										<Token label="cma-cream" value="#fdf6ee" className="bg-cma-cream" />
										<Token label="cma-gray" value="#78787a" className="bg-cma-gray" />
									</div>
								</Card>
								<Card title="Usage">
									<div className="flex flex-col gap-[10px] text-[14px] text-cma-navy">
										<p><span className="font-mono font-bold">text-cma-navy</span> · <span className="font-mono font-bold">bg-cma-navy</span> — all headings, body text, nav</p>
										<p><span className="font-mono font-bold">bg-cma-orange</span> · primary CTA buttons, accents, badges</p>
										<p><span className="font-mono font-bold">text-cma-teal-dark</span> · all text links, teal outline buttons</p>
										<p><span className="font-mono font-bold">bg-cma-cream</span> · alternating section backgrounds</p>
										<p><span className="font-mono font-bold">bg-cma-teal-pale</span> · open FAQ state, form field backgrounds</p>
									</div>
								</Card>
							</Section>

							{/* ── Typography ─────────────────────────────────────────────────── */}
							<Section id="typography" title="Typography">
								<Card title="Font family">
									<p className="text-cma-navy">All text uses <span className="font-mono font-bold">Nunito</span> (Google Fonts). Loaded via <span className="font-mono">src/styles/fonts.css</span>. Never declare a different font-family in components.</p>
								</Card>

								<Card title="Type scale — global element styles (theme.css)">
									<div className="flex flex-col gap-[32px]">
										<div className="flex flex-col gap-[8px] border-b border-black/8 pb-[32px]">
											<h1 className="text-cma-navy">Display / H1</h1>
											<div className="flex flex-col gap-[4px]">
												<Spec label="Element" value="h1" />
												<Spec label="Token" value="--cma-text-display" />
												<Spec label="Size" value="clamp(34px, 5.9vw, 75px)" />
												<Spec label="Weight" value="900 (black)" />
												<Spec label="Line-height" value="0.95" />
												<Spec label="Tracking" value="-1px" />
											</div>
										</div>

										<div className="flex flex-col gap-[8px] border-b border-black/8 pb-[32px]">
											<h2 className="text-cma-navy">Heading / H2</h2>
											<div className="flex flex-col gap-[4px]">
												<Spec label="Element" value="h2" />
												<Spec label="Token" value="--cma-text-h2" />
												<Spec label="Size" value="clamp(28px, 3.75vw, 48px)" />
												<Spec label="Weight" value="800 (extrabold)" />
												<Spec label="Line-height" value="1.1" />
												<Spec label="Tracking" value="-0.02em" />
											</div>
										</div>

										<div className="flex flex-col gap-[8px] border-b border-black/8 pb-[32px]">
											<h3 className="text-cma-navy">Subheading / H3</h3>
											<div className="flex flex-col gap-[4px]">
												<Spec label="Element" value="h3" />
												<Spec label="Token" value="--cma-text-h3" />
												<Spec label="Size" value="20px" />
												<Spec label="Weight" value="900 (black)" />
												<Spec label="Line-height" value="1.1" />
											</div>
										</div>

										<div className="flex flex-col gap-[8px] border-b border-black/8 pb-[32px]">
											<p className="text-cma-navy">Body paragraph — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											<div className="flex flex-col gap-[4px]">
												<Spec label="Element" value="p" />
												<Spec label="Token" value="--cma-text-body" />
												<Spec label="Size" value="15px" />
												<Spec label="Weight" value="500 (medium)" />
												<Spec label="Line-height" value="1.65" />
											</div>
										</div>

										<div className="flex flex-col gap-[8px] border-b border-black/8 pb-[32px]">
											<p className="cma-eyebrow text-cma-teal">Eyebrow Label</p>
											<div className="flex flex-col gap-[4px]">
												<Spec label="Class" value=".cma-eyebrow" />
												<Spec label="Size" value="15px" />
												<Spec label="Weight" value="700 (bold)" />
												<Spec label="Line-height" value="1.0" />
												<Spec label="Tracking" value="3.9px" />
												<Spec label="Transform" value="uppercase" />
												<Spec label="Colors" value="text-cma-teal · text-cma-orange · text-cma-teal-dark" />
											</div>
										</div>

										<div className="flex flex-col gap-[8px] border-b border-black/8 pb-[32px]">
											<p className="text-cma-navy text-[clamp(16px,1.56vw,20px)] font-semibold leading-[1.4]">Body Large — hero subtitles and section leads</p>
											<div className="flex flex-col gap-[4px]">
												<Spec label="Token" value="--cma-text-body-lg" />
												<Spec label="Size" value="clamp(16px, 1.56vw, 20px)" />
												<Spec label="Weight" value="typically 500–600" />
											</div>
										</div>

										<div className="flex flex-col gap-[8px]">
											<p className="text-[12px] text-cma-navy">Label / XS — 12px, used in badges, tags, alert bar</p>
											<div className="flex flex-col gap-[4px]">
												<Spec label="Token" value="--cma-text-label" />
												<Spec label="Size" value="12px" />
											</div>
										</div>
									</div>
								</Card>

								<Card title="Global button text">
									<div className="flex flex-col gap-[8px]">
										<p className="text-cma-navy">The global <span className="font-mono font-bold">button</span> element has: 15px · weight 900 · line-height 1 · text-box-trim applied. On <span className="font-mono font-bold">&lt;a&gt;</span> CTAs (which don't inherit button styles), always add <span className="font-mono font-bold">font-black text-[15px]</span> explicitly.</p>
									</div>
								</Card>

								<Card title="Responsive font formula">
									<p className="text-cma-navy font-mono text-[13px]">vw% = target_px / 1440 × 100</p>
									<p className="text-cma-navy/60 text-[13px]">E.g. a 24px target at 1440px = 1.67vw → <span className="font-mono">clamp(16px, 1.67vw, 24px)</span></p>
								</Card>
							</Section>

							{/* ── Buttons ────────────────────────────────────────────────────── */}
							<Section id="buttons" title="Buttons">
								<Card title=".cma-btn base — structural only, always pair with color utilities">
									<div className="flex flex-col gap-[6px] text-[13px] text-cma-navy font-mono">
										<p>display: inline-flex · border-radius: 1000px · padding: 13px 24px</p>
										<p>font: Nunito 900 15px/1 · width: 100% mobile → auto ≥640px</p>
										<p>transition: background-color · border-color · color (0.2s ease)</p>
									</div>
								</Card>

								<Card title="Primary — orange">
									<div className="flex flex-wrap gap-[12px] items-center">
										<a href="#" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">Buy Tickets</a>
										<span className="text-cma-navy/40 text-[13px]">→ hover</span>
										<div className="cma-btn bg-cma-orange-dark text-cma-navy font-black pointer-events-none">Hover State</div>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Default" value="bg-cma-orange text-cma-navy" />
										<Spec label="Hover" value="hover:bg-cma-orange-dark" />
										<Spec label="<a> only" value="+ font-black (no global btn style on <a>)" />
									</div>
								</Card>

								<Card title="Secondary — teal outline (site standard)">
									<div className="flex flex-wrap gap-[12px] items-center">
										<a href="#" className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black">Learn More</a>
										<span className="text-cma-navy/40 text-[13px]">→ hover</span>
										<div className="cma-btn bg-cma-teal-dark border-2 border-cma-teal-dark text-white font-black pointer-events-none drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)]">Hover State</div>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Default" value="bg-white border-2 border-cma-teal-dark text-cma-teal-dark" />
										<Spec label="Hover" value="hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white" />
										<Spec label="Hover +" value="hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)]" />
										<Spec label="Class" value=".cma-btn-outline-teal also available" />
									</div>
								</Card>

								<Card title="Navy — used in dark contexts">
									<div className="flex flex-wrap gap-[12px] items-center">
										<a href="#" className="cma-btn bg-cma-navy text-white hover:bg-cma-slate font-black">Membership Info</a>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Default" value="bg-cma-navy text-white" />
										<Spec label="Hover" value="hover:bg-cma-slate" />
									</div>
								</Card>

								<Card title="White outline — used on dark/navy backgrounds">
									<div className="bg-cma-navy rounded-[16px] p-[24px] flex flex-wrap gap-[12px] items-center">
										<a href="#" className="cma-btn bg-white border-2 border-white text-cma-navy hover:bg-cma-blue-light font-black">Plan Your Visit</a>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Default" value="bg-white border-2 border-white text-cma-navy" />
										<Spec label="Hover" value="hover:bg-cma-blue-light" />
									</div>
								</Card>

								<Card title="Small buttons — override padding only">
									<div className="flex flex-wrap gap-[12px] items-center">
										<a href="#" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black !py-[8px] !px-[16px] text-[13px]">Small CTA</a>
										<a href="#" className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white font-black !py-[8px] !px-[16px] text-[13px]">Small Outline</a>
									</div>
									<Spec label="Override" value="!py-[8px] !px-[16px] text-[13px]" />
								</Card>
							</Section>

							{/* ── Links ──────────────────────────────────────────────────────── */}
							<Section id="links" title="Links">
								<Card title=".cma-text-link — standalone action links (outside paragraph copy)">
									<div className="flex flex-col gap-[12px]">
										<a href="#" className="cma-text-link self-start">Get Directions <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" /></a>
										<a href="#" className="cma-text-link self-start">Buy Now</a>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Default" value="color: #007c87 (teal-dark) · no underline" />
										<Spec label="Hover" value="color: #005a63 · underline appears" />
										<Spec label="Focus" value="2px outline ring + underline (keyboard nav)" />
										<Spec label="Font" value="Nunito 800 15px/1.7" />
										<Spec label="Use" value="card CTAs, section links — NOT inside paragraph text" />
									</div>
								</Card>

								<Card title="Inline links — embedded in paragraph copy">
									<p className="text-cma-navy">
										Check our{" "}
										<a href="#" className="text-cma-teal-dark font-bold underline underline-offset-2 hover:text-[#005a63]">Events Calendar</a>
										{" "}or call us at{" "}
										<a href="tel:4046595437" className="text-cma-teal-dark font-bold underline underline-offset-2 hover:text-[#005a63]">404.659.5437</a>
										{" "}for more info.
									</p>
									<Spec label="Rule" value="underline always visible (WCAG 1.4.1 — color alone insufficient in copy)" />
									<Spec label="Style" value="text-cma-teal-dark font-bold underline underline-offset-2 hover:text-[#005a63]" />
								</Card>

								<Card title=".cma-footer-link">
									<a href="#" className="cma-footer-link self-start">About Us</a>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Default" value="color: #5a6c8a · weight 400 · 15px" />
										<Spec label="Hover" value="color: cma-teal" />
									</div>
								</Card>
							</Section>

							{/* ── Shadows ────────────────────────────────────────────────────── */}
							<Section id="shadows" title="Shadows">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
									{[
										{ cls: "shadow-cma-warm", label: "shadow-cma-warm", desc: "Cards with orange accent (e.g. MuseumHoursWidget)", value: "0px 4px 20px 0px rgba(247,148,30,0.15)" },
										{ cls: "shadow-cma-panel", label: "shadow-cma-panel", desc: "Expanded overlay panels, search bar", value: "0px 10px 40px 0px rgba(0,0,0,0.15)" },
										{ cls: "shadow-cma-btn", label: "shadow-cma-btn", desc: "Button drop shadow", value: "0px 1px 2px 0px rgba(16,24,40,0.05)" },
										{ cls: "shadow-cma-card", label: "shadow-cma-card", desc: "General content cards", value: "0 2px 8px rgba(0,0,0,0.08)" },
									].map(({ cls, label, desc, value }) => (
										<div key={cls} className={`bg-white rounded-[16px] p-[24px] flex flex-col gap-[8px] ${cls}`}>
											<p className="font-extrabold text-cma-navy text-[14px] font-mono">.{label}</p>
											<p className="text-cma-navy/60 text-[13px]">{desc}</p>
											<p className="text-cma-navy/40 text-[11px] font-mono">{value}</p>
										</div>
									))}
								</div>
							</Section>

							{/* ── Pills & Filters ────────────────────────────────────────────── */}
							<Section id="pills" title="Pills & Filters">
								<Card title="Filter pills — .cma-filter-bar / .cma-filter-pill">
									<div className="cma-filter-bar">
										<button className="cma-filter-pill cma-filter-pill-active">All</button>
										<button className="cma-filter-pill cma-filter-pill-inactive">Exhibits</button>
										<button className="cma-filter-pill cma-filter-pill-inactive">Events</button>
										<button className="cma-filter-pill cma-filter-pill-inactive">Programs</button>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Active" value=".cma-filter-pill-active → bg-cma-navy text-white weight-800" />
										<Spec label="Inactive" value=".cma-filter-pill-inactive → bg-white text-cma-navy weight-500" />
										<Spec label="Hover" value="bg-cma-teal-pale" />
										<Spec label="Size" value="10px mobile → 11px sm → 12px lg" />
									</div>
								</Card>

								<Card title="Nav pills — .cma-nav-pill (sidebar + mobile section nav)">
									<div className="cma-pill-scroll">
										<button className="cma-nav-pill cma-nav-pill-active">General Info</button>
										<button className="cma-nav-pill cma-nav-pill-inactive">Hours</button>
										<button className="cma-nav-pill cma-nav-pill-inactive">Contact Form</button>
										<button className="cma-nav-pill cma-nav-pill-inactive">FAQs</button>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Active" value=".cma-nav-pill-active → bg-cma-navy text-white" />
										<Spec label="Inactive" value=".cma-nav-pill-inactive → bg-white border rgba(107,126,160,0.25)" />
										<Spec label="Hover" value="bg-cma-teal-pale" />
										<Spec label="Font" value="Nunito 700 13px · shrink-0" />
									</div>
								</Card>

								<Card title="Badge pills — inline, used on cards and search results">
									<div className="flex flex-wrap gap-[8px]">
										<span className="bg-cma-teal-dark text-white text-[11px] font-extrabold uppercase tracking-[1px] px-[10px] py-[4px] rounded-full">Exhibit</span>
										<span className="bg-cma-orange text-cma-navy text-[11px] font-extrabold uppercase tracking-[1px] px-[10px] py-[4px] rounded-full">Event</span>
										<span className="bg-cma-navy text-white text-[11px] font-extrabold uppercase tracking-[1px] px-[10px] py-[4px] rounded-full">Program</span>
										<span className="bg-cma-orange text-cma-navy text-[10px] font-extrabold uppercase tracking-[0.5px] px-[10px] py-[4px] rounded-full">Best Value</span>
									</div>
									<Spec label="Pattern" value="{color} text-[11px] font-extrabold uppercase tracking-[1px] px-[10px] py-[4px] rounded-full" />
								</Card>
							</Section>

							{/* ── Forms ──────────────────────────────────────────────────────── */}
							<Section id="forms" title="Forms">
								<Card title="Standard input / select / textarea">
									<div className="flex flex-col gap-[16px] max-w-[480px]">
										<div className="flex flex-col gap-[6px]">
											<label className="text-cma-navy font-bold text-[13px]">Email Address *</label>
											<input type="email" placeholder="you@email.com" className="px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy placeholder:text-cma-navy/30 outline-none focus:border-cma-teal-dark transition-colors w-full" />
										</div>
										<div className="flex flex-col gap-[6px]">
											<label className="text-cma-navy font-bold text-[13px]">Topic *</label>
											<select className="px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy outline-none focus:border-cma-teal-dark transition-colors w-full">
												<option value="">Select a topic</option>
												<option>General Question</option>
											</select>
										</div>
										<div className="flex flex-col gap-[6px]">
											<label className="text-cma-navy font-bold text-[13px]">Message</label>
											<textarea rows={3} placeholder="Tell us how we can help…" className="px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy placeholder:text-cma-navy/30 outline-none focus:border-cma-teal-dark transition-colors w-full resize-none" />
										</div>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Input class" value="px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy" />
										<Spec label="Placeholder" value="placeholder:text-cma-navy/30" />
										<Spec label="Focus" value="focus:border-cma-teal-dark transition-colors outline-none" />
										<Spec label="Label class" value="text-cma-navy font-bold text-[13px]" />
									</div>
								</Card>
							</Section>

							{/* ── Social Buttons ─────────────────────────────────────────────── */}
							<Section id="social" title="Social Buttons">
								<Card title=".cma-social-btn-filled (used in Contact, footer, address sections)">
									<div className="flex gap-[12px]">
										<a href="#" className="cma-social-btn-filled" aria-label="Facebook">
											<FontAwesomeIcon icon={faFacebook} className="text-[16px] text-white" />
										</a>
										<a href="#" className="cma-social-btn-filled" aria-label="Instagram">
											<FontAwesomeIcon icon={faInstagram} className="text-[16px] text-white" />
										</a>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Default" value="48×48px · rounded-full · bg-cma-teal" />
										<Spec label="Hover" value="bg-cma-teal-dark" />
									</div>
								</Card>
								<Card title=".cma-social-btn (outlined, used in footer)">
									<div className="flex gap-[12px]">
										<a href="#" className="cma-social-btn" aria-label="Facebook">
											<FontAwesomeIcon icon={faFacebook} className="text-[16px] text-cma-teal" />
										</a>
										<a href="#" className="cma-social-btn" aria-label="Instagram">
											<FontAwesomeIcon icon={faInstagram} className="text-[16px] text-cma-teal" />
										</a>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Default" value="48×48px · rounded-full · border-2 border-cma-teal" />
										<Spec label="Hover" value="bg-cma-teal" />
									</div>
								</Card>
							</Section>

							{/* ── Animations ─────────────────────────────────────────────────── */}
							<Section id="animations" title="Animations">
								<Card title="Scroll-triggered entry (motion/react) — standard pattern">
									<div className="bg-cma-navy/5 rounded-[12px] p-[16px]">
										<pre className="text-[12px] text-cma-navy font-mono overflow-x-auto whitespace-pre">{`<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
  {/* content */}
</motion.div>`}</pre>
									</div>
									<p className="text-cma-navy/60 text-[13px]">Use <span className="font-mono">delay: i * 0.08</span> for staggered lists. Heading animations use <span className="font-mono">duration: 1.0</span>.</p>
								</Card>

								<Card title="CSS animation utilities">
									<div className="flex flex-col gap-[12px]">
										<div className="flex items-center gap-[16px]">
											<div className="w-[48px] h-[8px] bg-cma-teal rounded-full cma-wave-float" />
											<p className="text-cma-navy text-[13px] font-mono">.cma-wave-float — 3s ease-in-out infinite (±12px X)</p>
										</div>
										<div className="flex items-center gap-[16px]">
											<div className="w-[48px] h-[8px] bg-cma-orange rounded-full cma-wave-float-reverse" />
											<p className="text-cma-navy text-[13px] font-mono">.cma-wave-float-reverse — 3.8s, 0.6s delay</p>
										</div>
										<p className="text-cma-navy text-[13px] font-mono">.cma-slide-down — slide-in-from-top 0.3s (MuseumHoursWidget)</p>
									</div>
								</Card>
							</Section>

							{/* ── Layout ─────────────────────────────────────────────────────── */}
							<Section id="layout" title="Layout">
								<Card title=".cma-section-container — max-width + responsive padding">
									<div className="flex flex-col gap-[4px]">
										<Spec label="Max-width" value="1280px · margin: auto" />
										<Spec label="Mobile" value="px-[20px]" />
										<Spec label="≥640px" value="px-[40px]" />
										<Spec label="≥768px" value="px-[80px]" />
									</div>
								</Card>

								<Card title="Page shell — every page uses this exact wrapper">
									<div className="bg-cma-navy/5 rounded-[12px] p-[16px]">
										<pre className="text-[12px] text-cma-navy font-mono overflow-x-auto whitespace-pre">{`<div className="size-full relative">
  <AlertBanner />
  <div className="lg:hidden"><MobileHeader /></div>
  <div className="hidden lg:block"><Header /></div>
  <div className="hidden lg:block"><ScrollProgress /></div>
  {/* page sections */}
  <PowerOfPlayMarquee />
  <Footer />
</div>`}</pre>
									</div>
								</Card>

								<Card title="Section background rhythm">
									<div className="flex flex-col gap-[8px] text-[14px] text-cma-navy">
										<p><span className="font-mono font-bold">bg-cma-cream</span> — default alternating section background</p>
										<p><span className="font-mono font-bold">bg-white</span> — alternating section background</p>
										<p><span className="font-mono font-bold">bg-cma-navy</span> — hero / dark feature sections</p>
										<p><span className="font-mono font-bold">bg-cma-teal-dark</span> — membership card, dark CTA strips</p>
									</div>
								</Card>

								<Card title="PlanYourVisitHero — configurable props">
									<div className="bg-cma-navy/5 rounded-[12px] p-[16px]">
										<pre className="text-[12px] text-cma-navy font-mono overflow-x-auto whitespace-pre">{`<PlanYourVisitHero
  bgImage={imgBYVHero}
  heading="Book Your Visit"
  subtitle="Reserve your tickets online…"
  primaryCta={{ label: "Buy Tickets Now", href: "https://…" }}
  secondaryCta={{ label: "Plan Your Visit", href: "#/plan-your-visit" }}
/>`}</pre>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="bgImage" value="optional — falls back to PYV hero default" />
										<Spec label="heading" value="optional — defaults to 'Plan Your Visit'" />
										<Spec label="subtitle" value="optional — defaults to PYV subtitle" />
										<Spec label="primaryCta" value="{ label, href } — orange button" />
										<Spec label="secondaryCta" value="{ label, href } — teal outline button" />
									</div>
								</Card>

								<Card title="AdmissionPricing — showCtas prop">
									<p className="text-cma-navy text-[13px]">
										Pass <span className="font-mono font-bold">showCtas={"{false}"}</span> to hide the CTA button row (used on BookYourVisitPage where CTAs live in BuyOnlineBenefits instead).
									</p>
									<Spec label="Default" value="showCtas={true}" />
								</Card>

								<Card title="Section vertical padding (site standard)">
									<div className="flex flex-col gap-[4px]">
										<Spec label="Standard" value="py-[80px] md:py-[120px]" />
										<Spec label="Hero banner" value="py-[80px] md:py-[120px] (same)" />
										<Spec label="Tight" value="py-[60px] md:py-[80px]" />
									</div>
								</Card>

								<Card title="Breakpoints (Tailwind defaults)">
									<div className="flex flex-col gap-[4px]">
										<Spec label="sm" value="≥640px" />
										<Spec label="md" value="≥768px" />
										<Spec label="lg" value="≥1024px (desktop nav switches)" />
										<Spec label="xl" value="≥1280px" />
									</div>
								</Card>
							</Section>

							{/* ── Patterns ───────────────────────────────────────────────────── */}
							<Section id="patterns" title="Component Patterns">
								<Card title="Standalone FAQ accordion (PlanYourVisitFAQs pattern)">
									<div className="flex flex-col gap-[12px]">
										{[
											{ q: "Do you offer group rates?", a: "Yes — groups of 11 or more qualify for group pricing. Contact our Reservations team at reservations@childrensmuseumatlanta.org or 404.527.3693." },
											{ q: "Where do I park?", a: "We recommend pre-purchasing parking at 236 Williams Street, one block away." },
										].map((faq, i) => {
											const isOpen = openFaq === i;
											return (
												<div key={faq.q} className={`rounded-[20px] border-2 border-black/5 overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}>
													<button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between px-[24px] py-[20px] text-left gap-[16px]">
														<span className={`text-cma-navy text-[15px] leading-[1.3] ${isOpen ? "font-black" : "font-semibold"}`}>{faq.q}</span>
														<FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="text-cma-orange text-[12px] shrink-0" />
													</button>
													{isOpen && <div className="px-[24px] pb-[20px]"><p className="text-cma-navy">{faq.a}</p></div>}
												</div>
											);
										})}
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Item" value="rounded-[20px] border-2 border-black/5 overflow-hidden" />
										<Spec label="Open bg" value="bg-cma-teal-pale" />
										<Spec label="Open label" value="font-black" />
										<Spec label="Closed label" value="font-semibold" />
										<Spec label="Icon" value="faPlus/faMinus · text-cma-orange text-[12px]" />
									</div>
								</Card>

								<Card title="Star rating (AboutTestimonials)">
									<div className="flex gap-[4px]">
										{Array.from({ length: 5 }).map((_, i) => (
											<FontAwesomeIcon key={i} icon={faStar} className="text-cma-orange text-[14px]" />
										))}
									</div>
									<Spec label="Icon" value="faStar · text-cma-orange" />
								</Card>

								<Card title="Divider">
									<div className="bg-black/10 h-px w-full" />
									<Spec label="Class" value="bg-black/10 h-px w-full" />
									<Spec label="Use" value="Between sections inside white content cards" />
								</Card>

								<Card title="Icon circles (impact blocks, contact cards)">
									<div className="flex gap-[12px]">
										<div className="bg-cma-teal rounded-full size-[48px] flex items-center justify-center">
											<FontAwesomeIcon icon={faStar} className="text-white text-[18px]" />
										</div>
										<div className="bg-cma-orange rounded-full size-[48px] flex items-center justify-center">
											<FontAwesomeIcon icon={faStar} className="text-white text-[18px]" />
										</div>
										<div className="bg-cma-navy rounded-full size-[36px] flex items-center justify-center">
											<FontAwesomeIcon icon={faStar} className="text-white text-[14px]" />
										</div>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Large" value="{color} rounded-full size-[48px] flex items-center justify-center" />
										<Spec label="Small" value="{color} rounded-full size-[36px]" />
										<Spec label="Icon" value="text-white text-[18px] (large) · text-[14px] (small)" />
									</div>
								</Card>

								<Card title=".cma-eyebrow + overflow-hidden rule">
									<p className="text-cma-navy text-[13px]">
										Any section that contains a <span className="font-mono font-bold">.cma-eyebrow</span> must have <span className="font-mono font-bold">overflow-hidden</span> on the section wrapper. The 3.9px letter-spacing overflows at narrow viewports.
									</p>
									<div className="bg-cma-navy/5 rounded-[12px] p-[12px]">
										<pre className="text-[12px] text-cma-navy font-mono">{`<section className="overflow-hidden …">
  <p className="cma-eyebrow text-cma-teal">OUR EXHIBITS</p>
  <h2>…</h2>
</section>`}</pre>
									</div>
								</Card>

								<Card title="Card image container (.cma-card-img)">
									<div className="flex flex-col gap-[4px]">
										<Spec label="Class" value=".cma-card-img" />
										<Spec label="Aspect" value="16:9 (always landscape)" />
										<Spec label="Radius" value="rounded-[24px] overflow-hidden" />
										<Spec label="Use" value="Events, exhibits, article card thumbnails" />
									</div>
								</Card>

								<Card title="Info callout banner (e.g. ACM Reciprocity on BookYourVisitPage)">
									<div className="bg-white rounded-[20px] border border-[rgba(107,126,160,0.15)] px-[32px] py-[24px] flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
										<div className="flex-1 flex flex-col gap-[6px]">
											<p className="font-extrabold text-cma-navy text-[15px]">Callout Title</p>
											<p className="text-cma-navy/70 text-[14px] leading-[1.5]">
												Supplementary information or eligibility note. Use <strong className="text-cma-navy">promo codes</strong> or key terms in bold.
											</p>
										</div>
										<a href="#" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black shrink-0">
											CTA Button
										</a>
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Wrapper" value="bg-cma-cream py-[48px] (tight padding, not full section)" />
										<Spec label="Card" value="bg-white rounded-[20px] border border-[rgba(107,126,160,0.15)] px-[32px] py-[24px]" />
										<Spec label="Layout" value="flex-col sm:flex-row items-start sm:items-center gap-[16px]" />
										<Spec label="Title" value="font-extrabold text-cma-navy text-[15px]" />
										<Spec label="Body" value="text-cma-navy/70 text-[14px] leading-[1.5]" />
										<Spec label="CTA" value="shrink-0 so it never wraps with the text block" />
									</div>
								</Card>

								<Card title="Icon feature list (e.g. BuyOnlineBenefits on BookYourVisitPage)">
									<div className="flex flex-col gap-[24px]">
										{[
											{ iconBg: "bg-cma-teal", title: "Guaranteed Entry", body: "Advance online ticket purchase is highly encouraged. Walk-up availability is limited." },
											{ iconBg: "bg-cma-orange", title: "Choose Your Arrival Window", body: "Select the hour block in which you want to arrive." },
											{ iconBg: "bg-[#fbb040]", title: "Mobile Tickets", body: "Tickets are sent via email — just show on your phone or print at home." },
										].map((item) => (
											<div key={item.title} className="flex gap-[16px] items-start">
												<div className={`${item.iconBg} rounded-full size-[48px] flex items-center justify-center shrink-0`}>
													<FontAwesomeIcon icon={faStar} className="text-white text-[18px]" />
												</div>
												<div className="flex flex-col gap-[8px]">
													<p className="font-extrabold text-[18px] leading-[1.2] text-cma-navy">{item.title}</p>
													<p className="text-cma-navy/70 leading-[1.65]">{item.body}</p>
												</div>
											</div>
										))}
									</div>
									<div className="flex flex-col gap-[4px]">
										<Spec label="Row" value="flex gap-[16px] items-start" />
										<Spec label="Icon" value="rounded-full size-[48px] flex items-center justify-center shrink-0" />
										<Spec label="Title" value="font-extrabold text-[18px] leading-[1.2]" />
										<Spec label="Body" value="standard p (15px 500 1.65)" />
										<Spec label="Stagger" value="motion delay: i * 0.08 · initial={{ x: -16 }}" />
										<Spec label="On dark bg" value="title → text-white · body → text-cma-blue-light" />
									</div>
								</Card>
							</Section>

						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
