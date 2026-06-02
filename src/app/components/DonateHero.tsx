import { motion } from "motion/react";
import donateHeroBg from "../../assets/hero-donate.webp";

const stats = [
	{
		value: "180,000+ Museum Visitors",
		orange: true,
	},
	{
		value: "12,000+ Outreach Children",
		orange: false,
	},
	{
		value: "1,200 Free Passes Granted",
		orange: true,
	},
	{
		value: "4,456 CLCC Students",
		orange: false,
	},
];

export default function DonateHero() {
	return (
		<section
			aria-label="Donate Hero"
			className="relative w-full flex flex-col px-5 sm:px-10 md:px-[80px]"
		>
			{/* Background */}
			<div
				className="absolute inset-0 overflow-hidden pointer-events-none bg-black"
				aria-hidden
			>
				<img
					src={donateHeroBg}
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
							Make Play
							<br />
							Possible
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
							Donate today to change lives through the power of play!
						</motion.p>

						<motion.p
							className="text-white/80 text-[14px] leading-[1.65] max-w-[480px]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1.0,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.45,
							}}
						>
							We are so grateful for our donors who help us provide the opportunity for Atlanta's families to explore and grow through hands-on play. As a nonprofit, admissions and membership sales cover approximately half of what it takes to bring the power of play to over 180,000 children and caregivers each year. Your support is vital! Thank you for helping us achieve our mission as we envision a bright future for all children — we couldn't do it without you.
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
								href="#/about/impact"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Our Impact
							</a>
							<a
								onClick={() => document.getElementById("ways-to-give")?.scrollIntoView({ behavior: "smooth" })}
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
							>
								Other ways to give
							</a>
						</motion.div>
					</div>

					{/* Right: stat cards */}
					<div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-3">
						{stats.map((stat, i) => (
							<motion.div
								key={stat.value}
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
							</motion.div>
						))}
					</div>
				</div>
			</div>

			<p className="relative text-white/50 text-[12px] text-center leading-[1.6] max-w-[560px] mx-auto px-5">
				All gifts are tax-deductible to the fullest extent allowed by law. The Museum is a 501(c)(3) tax-exempt organization. Our tax-ID number is 58-1785484.
			</p>
			{/* Bottom spacing */}
			<div className="shrink-0 h-[40px] md:h-[60px]" />
		</section>
	);
}
