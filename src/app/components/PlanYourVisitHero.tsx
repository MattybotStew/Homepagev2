import {
	faClock,
	faCreditCard,
	faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import imgHeroBgDefault from "../../assets/PYVhero.webp";

const cards = [
	{
		icon: faClock,
		title: "When to Arrive:",
		body: "Plan for 2–4 hours of play time. Last entry: one hour before close.",
		bg: "bg-white",
	},
	{
		icon: faMobileScreen,
		title: "Mobile Tickets:",
		body: "Tickets sent via email. Show on phone or print at home.",
		bg: "bg-cma-teal-pale",
	},
	{
		icon: faCreditCard,
		title: "Payment Methods Accepted:",
		body: "Visa, MasterCard, American Express, Discover, Apple Pay, Google Pay, Museum gift certificates, and cash.",
		bg: "bg-white",
	},
];

export default function PlanYourVisitHero({ bgImage = imgHeroBgDefault }: { bgImage?: string }) {
	return (
		<section
			aria-label="Plan Your Visit Hero"
			className="relative w-full flex flex-col px-5 sm:px-10 md:px-[80px]"
		>
			{/* Background */}
			<div
				className="absolute inset-0 overflow-hidden pointer-events-none bg-black"
				aria-hidden
			>
				<img
					src={bgImage}
					alt=""
					className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
				/>
				<div className="absolute inset-0 bg-cma-hero-overlay" />
			</div>

			{/* Spacer */}
			<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

			{/* Content row */}
			<div className="relative flex-1 flex items-center py-[60px] md:py-[80px] lg:py-[100px]">
				<div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-[64px]">
					{/* Left: text */}
					<div className="flex flex-col gap-5 md:gap-6 text-white max-w-[560px]">
						<motion.p
							className="cma-eyebrow opacity-80"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1.0,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.1,
							}}
						>
							children's museum of atlanta
						</motion.p>

						<motion.h1
							className="font-extrabold text-white leading-[0.95]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1.0,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.2,
							}}
						>
							Plan Your Visit
						</motion.h1>

						<motion.p
							className="font-semibold text-[clamp(16px,2.1vw,24px)] text-cma-blue-light leading-[1.3] tracking-[-0.5px] max-w-[480px]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1.0,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.35,
							}}
						>
							Everything you need to know before you play — from tickets &amp;
							hours to parking &amp; what to bring.
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-3 pt-1"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1.0,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.5,
							}}
						>
							<a
								href="#/book-your-visit"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Buy Tickets Now
							</a>
							<a
								href="#/plan-your-visit"
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
							>
								Download Visitor Guide
							</a>
						</motion.div>
					</div>

					{/* Right: info cards */}
					<div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-3">
						{cards.map((card, i) => (
							<motion.div
								key={card.title}
								className={`rounded-[16px] px-5 py-4 flex items-start gap-4 ${card.bg}`}
								initial={{ opacity: 0, x: 24 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.8,
									ease: [0.16, 1, 0.3, 1],
									delay: 0.3 + i * 0.1,
								}}
							>
								<div className="w-[44px] h-[44px] rounded-full bg-cma-orange flex items-center justify-center shrink-0 mt-[2px]">
									<FontAwesomeIcon
										icon={card.icon}
										className="text-white text-[18px]"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="font-black text-cma-navy text-[15px] leading-snug">
										{card.title}
									</p>
									<p className="text-cma-navy text-[13px] leading-[1.5]">
										{card.body}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Bottom spacing */}
			<div className="shrink-0 h-[40px] md:h-[60px]" />
		</section>
	);
}
