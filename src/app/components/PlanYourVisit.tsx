import imgBgCircle from "figma:asset/pyv-bg-circle.svg";
import imgIconClock from "figma:asset/pyv-icon-clock.svg";
import imgIconFood from "figma:asset/pyv-icon-food.svg";
import imgIconParkingBg from "figma:asset/pyv-icon-parking-bg.svg";
import imgIconParkingPin from "figma:asset/pyv-icon-parking-pin.svg";
import imgIconTicket from "figma:asset/pyv-icon-ticket.svg";
import imgWave from "figma:asset/pyv-wave.svg";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const TICKETS_URL = "https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf";
const BLACKBAUD_MEMBERSHIPS = "https://16707.blackbaudhosting.com/16707/CMA-Memberships";

function ParkingIcon() {
	return (
		<div className="relative shrink-0 w-16 h-16">
			<div className="absolute overflow-hidden inset-0">
				<div className="absolute top-[3.13%] right-[3.13%] bottom-[3.13%] left-[3.13%]">
					<img
						src={imgIconParkingBg}
						alt=""
						aria-hidden
						className="absolute inset-0 w-full h-full block"
					/>
				</div>
				<div className="absolute top-[21.88%] right-[29.69%] bottom-[23.44%] left-[29.69%]">
					<div className="absolute top-[-3.43%] right-[-4.62%] bottom-[-3.43%] left-[-4.62%]">
						<img
							src={imgIconParkingPin}
							alt=""
							aria-hidden
							className="block w-full h-full"
						/>
					</div>
				</div>
				<p className="absolute text-center text-white font-bold whitespace-nowrap top-[28.13%] right-[42.19%] bottom-[42.19%] left-[42.19%] text-[14px] leading-normal">
					P
				</p>
			</div>
		</div>
	);
}

const cards = [
	{
		icon: (
			<img
				src={imgIconTicket}
				alt=""
				aria-hidden
				className="w-[54px] h-[54px] block shrink-0"
			/>
		),
		title: "Plan Your Visit",
		description: "Advance tickets recommended. Preview pricing & book online.",
		linkLabel: "Buy Now",
		href: "#/plan-your-visit",
	},
	{
		icon: (
			<img
				src={imgIconClock}
				alt=""
				aria-hidden
				className="w-[54px] h-[54px] block shrink-0"
			/>
		),
		title: "Hours & What to Expect",
		description: "Mon, Tue, Thu, Fri: 10 am–3:30 pm\nSat & Sun: 9:30 am–4:30 pm\nClosed Wednesdays",
		linkLabel: "Plan Your Day",
		href: "#/plan-your-visit?tab=hours",
	},
	{
		icon: (
			<img
				src={imgIconFood}
				alt=""
				aria-hidden
				className="w-[54px] h-[54px] block shrink-0"
			/>
		),
		title: "Food & Amenities",
		description:
			"Snack and drinks on-site. Outside snacks welcome. Lockers & diaper stations available.",
		linkLabel: "See Amenities",
		href: "#/plan-your-visit?tab=amenities",
	},
	{
		icon: <ParkingIcon />,
		title: "Parking & Directions",
		description: "Pre-purchase parking nearby. Easy access via MARTA",
		linkLabel: "Get Directions",
		href: "#/plan-your-visit?tab=parking",
	},
];

export default function PlanYourVisit() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

	return (
		<section
			ref={sectionRef}
			aria-label="Plan Your Visit"
			className="relative w-full overflow-hidden py-[80px] md:py-[160px] bg-white"
		>
			{/* Decorative background circle — scroll-driven scale + rotate, desktop only */}
			<motion.div
				className="hidden md:flex absolute pointer-events-none left-[calc(50%+65.82px)] top-[-865px] -translate-x-1/2 w-[2138px] h-[2274px] items-center justify-center"
				aria-hidden
				style={{ scale, rotate }}
				initial={{ opacity: 0, scale: 0.6 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: "-200px" }}
				transition={{ duration: 1.2 }}
			>
				<div className="rotate-[-24.31deg] shrink-0">
					<img
						src={imgBgCircle}
						alt=""
						className="w-[1530px] h-[1804px] block"
					/>
				</div>
			</motion.div>

			{/* Content */}
			<div className="relative flex flex-col items-center gap-[64px] cma-section-container">
				{/* Eyebrow + Heading + Body + CTAs */}
				<motion.div
					className="flex flex-col items-center gap-8 text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="cma-eyebrow text-cma-navy opacity-80">
						Plan Your Visit
					</p>
					<h2 className="tracking-[-1px] text-cma-navy text-center">
						Planning Your Visit?
						<br />
						We&apos;ve Got You Covered
					</h2>
					<p className="text-cma-navy max-w-[720px]">
						Dive into immersive exhibits and hands-on fun designed for
						curiosity, creativity, and discovery. Whether you&apos;re building,
						experimenting, or imagining together, every visit offers something
						new&mdash; reserve tickets in advance and enjoy your day of play.
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						<a
							href={TICKETS_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							Buy Tickets
						</a>
						<a
							href={BLACKBAUD_MEMBERSHIPS}
							target="_blank"
							rel="noopener noreferrer"
							className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
						>
							Memberships
						</a>
					</div>
				</motion.div>

				{/* Cards grid */}
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
					{cards.map((card, i) => (
						<motion.div
							key={`item-${i}`}
							className="bg-white border border-[#e4e8ee] rounded-[18px] flex flex-col gap-[24px] pt-[29px] pb-[23px] px-[25px] min-h-[267px]"
							initial={{ opacity: 0, scale: 0.92 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								delay: i * 0.1,
								duration: 0.5,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}
						>
							{/* Icon + title row */}
							<div className="flex items-center gap-[16px]">
								{card.icon}
								<h3 className="text-cma-navy">{card.title}</h3>
							</div>
							{/* Description */}
							<p className="flex-1 text-cma-slate whitespace-pre-line">
								{card.description}
							</p>
							{/* Text link */}
							<a href={card.href} className="cma-text-link">
								{card.linkLabel}
								<FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
							</a>
						</motion.div>
					))}
				</div>

				{/* Keep scrolling pill */}
				<div className="inline-flex items-center gap-[10px] bg-white border border-[rgba(107,126,160,0.25)] rounded-[200px] px-[17px] py-[9px]">
					<p className="font-bold text-cma-navy">
						Keep scrolling to explore our exhibits
					</p>
					<div
						aria-hidden
						className="w-[20px] h-[20px] rounded-full bg-cma-orange-light flex items-center justify-center shrink-0"
					>
						<FontAwesomeIcon
							icon={faArrowDown}
							className="text-white text-[9px]"
						/>
					</div>
				</div>
			</div>

			{/* Teal wave strip at bottom */}
			<div
				aria-hidden
				className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
			>
				{Array.from({ length: 10 }).map((_, i) => (
					<img
						key={`item-${i}`}
						src={imgWave}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
