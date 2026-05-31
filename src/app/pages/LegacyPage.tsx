import { motion } from "motion/react";
import imgCutCMA from "../../assets/cutCMA.png";
import imgHero from "../../assets/donate-donor-foundations.webp";
import imgPhoto from "../../assets/educators-img-0.webp";
import imgWaveBottom from "../../assets/impact-wave-bottom.svg";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

const givingMethods = [
	{
		color: "bg-cma-teal",
		title: "Estate & Will Planning",
		body: "Include CMA as a beneficiary in your will or trust. A bequest of any size helps secure our mission for future generations. Your attorney can help you add CMA to an existing plan.",
	},
	{
		color: "bg-cma-orange",
		title: "Stock Donations",
		body: "CMA makes stock donations simple — complete in 10 minutes or less. Donating appreciated securities may offer significant tax advantages over a cash gift.",
	},
	{
		color: "bg-[#fbb040]",
		title: "Endowments",
		body: "An endowed gift creates a permanent, named fund at CMA. The principal is invested and the earnings support CMA's programs in perpetuity — a true lasting legacy.",
	},
	{
		color: "bg-cma-teal-dark",
		title: "Retirement Assets / IRA",
		body: "Name CMA as a full or partial beneficiary of your IRA or retirement plan. This is often one of the most tax-efficient ways to make a planned gift.",
	},
];

function GivingMethodItem({ color, title, body }: { color: string; title: string; body: string }) {
	return (
		<div className="flex gap-[16px] items-start">
			<div className={`${color} rounded-[14px] size-[48px] flex items-center justify-center shrink-0`}>
				<div className="bg-white/50 rounded-[6px] size-[24px]" />
			</div>
			<div className="flex flex-col gap-[8px] flex-1 min-w-0">
				<p className="font-extrabold text-[18px] leading-[1.2] text-cma-navy">
					{title}
				</p>
				<p className="leading-[1.65] text-cma-navy">{body}</p>
			</div>
		</div>
	);
}

export default function LegacyPage() {
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

			{/* Hero */}
			<section className="bg-cma-navy w-full py-[80px] md:py-[120px] relative overflow-hidden">
				<div className="absolute inset-0 overflow-hidden pointer-events-none bg-black" aria-hidden>
					<img src={imgHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
					<div className="absolute inset-0 bg-cma-hero-overlay" />
				</div>
				<img src={imgCutCMA} alt="" aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-10 pointer-events-none select-none object-contain object-bottom" />
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container">
					<motion.div
						className="flex flex-col items-center gap-[24px] md:gap-[32px] text-center"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className="cma-eyebrow text-cma-teal">
							children's museum of atlanta
						</p>
						<h1 className="text-white">
							Leave a Legacy That Lasts Through Play
						</h1>
						<p className="text-cma-blue-light font-semibold text-[clamp(16px,1.67vw,24px)] leading-[1.4] max-w-[600px]">
							A planned gift to CMA is one of the most meaningful ways to ensure
							every child in Atlanta has a place to learn, grow, and discover —
							for generations to come.
						</p>
						<a
							href="mailto:kmcneely@childrensmuseumatlanta.org"
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							Talk to Us About Legacy Giving
						</a>
					</motion.div>
				</div>

				{/* Wave to white */}
				<div
					aria-hidden
					className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
				>
					{Array.from({ length: 10 }).map((_, i) => (
						<img
							key={i}
							src={imgWaveBottom}
							alt=""
							className="w-[422px] h-[57px] shrink-0 block"
						/>
					))}
				</div>
			</section>

			{/* Why legacy giving matters */}
			<section className="bg-white w-full py-[80px] md:py-[120px]">
				<div className="cma-section-container">
					<div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[64px] items-center">
						{/* Photo */}
						<motion.div
							className="w-full lg:w-[480px] xl:w-[520px] shrink-0"
							initial={{ opacity: 0, x: -24 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						>
							<img
								src={imgPhoto}
								alt="Children's Museum of Atlanta exhibits"
								className="w-full h-[340px] md:h-[460px] object-cover rounded-[24px]"
							/>
						</motion.div>

						{/* Text */}
						<motion.div
							className="flex-1 flex flex-col gap-[32px]"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
						>
							<h2 className="text-cma-navy leading-none tracking-[-1px]">
								Why legacy giving matters
							</h2>
							<p className="text-cma-navy text-[clamp(15px,1.25vw,18px)] leading-[1.7]">
								Planned gifts of all sizes form the foundation of CMA's long-term
								stability. When you include CMA in your estate plan, you're not
								just making a donation — you're ensuring that the power of play
								reaches children in Atlanta long after you're gone. Your legacy
								becomes part of every child who walks through our doors.
							</p>

							<div className="flex flex-col gap-[24px]">
								{givingMethods.map((method, i) => (
									<motion.div
										key={method.title}
										initial={{ opacity: 0, x: 16 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, margin: "-40px" }}
										transition={{
											delay: i * 0.08,
											duration: 0.5,
											ease: [0.16, 1, 0.3, 1],
										}}
									>
										<GivingMethodItem {...method} />
									</motion.div>
								))}
							</div>

							<div className="flex flex-col gap-[16px]">
								<div className="self-start">
									<span className="inline-flex items-center gap-[6px] bg-cma-teal-pale text-cma-teal-dark font-bold text-[12px] px-[12px] py-[6px] rounded-full border border-cma-teal/30">
										<span className="w-[8px] h-[8px] rounded-full bg-cma-teal-dark shrink-0" />
										GuideStar Platinum Transparency
									</span>
								</div>
								<div>
									<a
										href="mailto:kmcneely@childrensmuseumatlanta.org"
										className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
									>
										Contact Kate McNeely
									</a>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
