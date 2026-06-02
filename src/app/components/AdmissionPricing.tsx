import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import imgWaveBottom from "../../assets/impact-wave-bottom.svg";
import imgWaveNavy from "../../assets/impact-wave-top.svg";

const dailyItems = [
	"Under 1: FREE",
	"Children (1–18): $19.95",
	"Adults: $21.95",
	"Seniors (65+): $19.95",
	"Members: FREE",
];

const memberItems = [
	"Unlimited visits",
	"50% off guest tickets",
	"Gift shop, party, and special event discounts",
	"Helps bring the power of play to ALL of Atlanta's children",
];

const groupItems = [
	"Group visits: For 11–30 people visiting together",
	"Group visits: $2 off ticket price",
	"Group visits: Call 404-527-3693 to book",
	"Field Trips: Starting at $11.95/student",
	"Field Trips: Monday–Friday, 10am – 12pm",
];

const includesItems = [
	"All-day access to 7 immersive, hands-on exhibits",
	"Daily activities (storytimes, art projects, science demonstrations)",
	"Re-entry on the same day",
	"Stroller parking and family restrooms",
	"Access to quiet room",
	"Access to Snack Stop",
];

const notIncludedItems = [
	"Party rooms (separate booking required)",
	"Museum store purchases",
	"Snacks and beverages",
	"Member-exclusive activities",
];

const agePolicyItems = [
	"The Children's Museum of Atlanta is designed to be enjoyed by families with young children. Exhibits and activities are planned to be appropriate for children 8 and younger.",
	"Adults are not allowed to enter the Museum without a child. Children must be supervised by an adult (18 years or older) at all times.",
	"We require a 1:5 adult to child ratio for all guests visiting the Museum.",
];

function CheckList({
	items,
	white = false,
}: {
	items: string[];
	white?: boolean;
}) {
	return (
		<div
			className={`flex flex-col border-t ${white ? "border-white/20" : "border-[rgba(107,126,160,0.2)]"}`}
		>
			{items.map((item) => (
				<div
					key={item}
					className={`flex gap-3 items-center py-3 border-b ${white ? "border-white/20" : "border-[rgba(107,126,160,0.2)]"}`}
				>
					<FontAwesomeIcon
						icon={faCircleCheck}
						className={`shrink-0 text-[18px] ${white ? "text-white" : "text-cma-teal"}`}
					/>
					<p className={white ? "text-white" : "text-cma-navy"}>{item}</p>
				</div>
			))}
		</div>
	);
}

function InfoRow({ label }: { label: string }) {
	return (
		<div className="flex flex-col">
			<div className="py-4">
				<p className="text-cma-navy">{label}</p>
			</div>
			<div className="h-px bg-[rgba(107,126,160,0.2)]" />
		</div>
	);
}

const pricingCards = [
	{
		bg: "bg-cma-cream",
		eyebrow: "Daily Admission",
		price: "$19.95",
		pricePrefix: "",
		priceSuffix: "per person",
		items: dailyItems,
		white: false,
		cta: {
			label: "Buy Tickets",
			href: "#/book-your-visit",
			style:
				"cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black",
		},
		badge: null,
	},
	{
		bg: "bg-cma-teal-dark",
		eyebrow: "Save Money with Memberships!",
		price: "$125",
		pricePrefix: "Starting at ",
		priceSuffix: "/ year",
		items: memberItems,
		white: true,
		cta: {
			label: "View Plans",
			href: "#/memberships/information",
			style: "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black",
		},
		badge: "Best Value",
	},
	{
		bg: "bg-cma-cream",
		eyebrow: "Groups & Field Trips",
		price: "$11.95",
		pricePrefix: "",
		priceSuffix: "per student",
		items: groupItems,
		white: false,
		cta: {
			label: "Request a Field Trip",
			href: "#/program/field-trips",
			style:
				"cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black",
		},
		badge: null,
	},
];

export default function AdmissionPricing({
	navyBottomWave = false,
	showBottomWave = true,
	heading = "Admission Pricing",
	subtitle = "Whether you're visiting with your family or a larger group, here's some helpful information about admission prices",
	primaryCta = { label: "Ready to Visit?", href: "#tickets" },
	secondaryCta = { label: "Location, Parking & Directions", href: "#directions" },
}: {
	navyBottomWave?: boolean;
	showBottomWave?: boolean;
	heading?: string;
	subtitle?: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
}) {
	return (
		<section className="bg-white w-full py-[80px] md:py-[120px] relative overflow-hidden">
			<div className="cma-section-container flex flex-col gap-12 items-center">
				{/* Heading */}
				<motion.div
					className="flex flex-col gap-8 items-center text-center w-full"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy">{heading}</h2>
					<p className="text-cma-navy text-[clamp(15px,1.25vw,18px)] leading-[1.7] max-w-[720px]">
						{subtitle}
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						<a
							href={primaryCta.href}
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							{primaryCta.label}
						</a>
						<a
							href={secondaryCta.href}
							className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
						>
							{secondaryCta.label}
						</a>
					</div>
				</motion.div>

				{/* Pricing cards */}
				<div className="flex flex-col lg:flex-row gap-4 items-stretch w-full">
					{pricingCards.map((card, i) => (
						<motion.div
							key={card.eyebrow}
							className={`${card.bg} border-2 border-black/5 rounded-[24px] flex-1 flex flex-col gap-8 p-6`}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: i * 0.1,
							}}
						>
							{card.badge ? (
								<div className="flex flex-col gap-2 items-center">
									<span className="bg-cma-cream text-cma-orange-dark text-[10px] font-extrabold uppercase leading-none px-2 py-1 rounded-full tracking-wide">
										{card.badge}
									</span>
									<p
										className={`cma-eyebrow text-center ${card.white ? "text-white" : "text-cma-navy"}`}
									>
										{card.eyebrow}
									</p>
								</div>
							) : (
								<p
									className={`cma-eyebrow text-center ${card.white ? "text-white" : "text-cma-navy"}`}
								>
									{card.eyebrow}
								</p>
							)}
							<div className="flex gap-2 items-end min-w-0 flex-wrap">
								{card.pricePrefix && (
									<span className={`text-[13px] font-semibold pb-1 shrink-0 ${card.white ? "text-white/70" : "text-cma-navy/60"}`}>
										{card.pricePrefix}
									</span>
								)}
								<span
									className={`font-extrabold leading-none tracking-[-1px] shrink-0 ${card.white ? "text-white font-black text-[clamp(48px,5.5vw,72px)]" : "text-cma-orange text-[clamp(36px,3.5vw,48px)]"}`}
								>
									{card.price}
								</span>
								<span
									className={`text-[14px] font-semibold whitespace-nowrap shrink-0 pb-1 ${card.white ? "text-cma-blue-light" : "text-cma-navy/70"}`}
								>
									{card.priceSuffix}
								</span>
							</div>
							<CheckList items={card.items} white={card.white} />
							<div className="mt-auto">
								<a href={card.cta.href} className={card.cta.style}>
									{card.cta.label}
								</a>
							</div>
						</motion.div>
					))}
				</div>

{/* Bottom CTA */}
				<motion.a
					onClick={() => document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" })}
					className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				>
					See FAQs for any Questions
				</motion.a>
			</div>

			{showBottomWave && (
				<div
					aria-hidden
					className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
				>
					{Array.from({ length: 10 }).map((_, i) => (
						<img
							key={`item-${i}`}
							src={navyBottomWave ? imgWaveNavy : imgWaveBottom}
							alt=""
							className="w-[422px] h-[57px] shrink-0 block"
						/>
					))}
				</div>
			)}
		</section>
	);
}
