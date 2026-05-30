import { motion } from "motion/react";
import aboutHeroBg from "../../assets/aboutH.webp";

const stats = [
	{
		value: "3.8 Million+",
		label: "Museum Visitors",
		sub: "Since we opened in 2003",
		orange: true,
	},
	{
		value: "20,000+",
		label: "Square Feet to Explore",
		sub: "Spread across our downtown Atlanta home",
		orange: false,
	},
	{
		value: "8,000+",
		label: "Kids Reached",
		sub: "Every year through our community outreach",
		orange: false,
	},
	{
		value: "34,000+",
		label: "Annual Free & Reduced Tickets",
		sub: "Making play accessible to every family",
		orange: true,
	},
];

export default function AboutHero() {
	return (
		<section
			aria-label="About Us Hero"
			className="relative w-full flex flex-col px-5 sm:px-10 md:px-[80px]"
		>
			{/* Background */}
			<div
				className="absolute inset-0 overflow-hidden pointer-events-none bg-black"
				aria-hidden
			>
				<img
					src={aboutHeroBg}
					alt=""
					className="absolute inset-0 w-full h-full object-cover object-[60%_50%] md:object-center"
				/>
				<div className="absolute inset-0 bg-cma-hero-overlay" />
			</div>

			{/* Spacer = AlertBanner + Header height at each breakpoint */}
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
							Creating Play
							<br />
							With Purpose
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
							Play isn't just fun—it's fundamental to childhood development.
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
								Buy Tickets
							</a>
							<a
								href="#careers"
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
							>
								Join The Team
							</a>
						</motion.div>
					</div>

					{/* Right: stat cards */}
					<div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-3">
						{stats.map((stat, i) => (
							<motion.div
								key={stat.label}
								className={`rounded-[16px] px-5 py-4 flex flex-col gap-1 ${
									stat.orange
										? "bg-cma-orange"
										: "bg-cma-navy border border-white/10"
								}`}
								initial={{ opacity: 0, x: 24 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.8,
									ease: [0.16, 1, 0.3, 1],
									delay: 0.3 + i * 0.1,
								}}
							>
								<p className="text-white font-black text-[clamp(22px,2.5vw,30px)] leading-none">
									{stat.value}
								</p>
								<p className="text-white font-bold text-[14px] leading-snug">
									{stat.label}
								</p>
								<p
									className={`text-[12px] leading-[1.4] ${stat.orange ? "text-white/80" : "text-cma-blue-light"}`}
								>
									{stat.sub}
								</p>
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
