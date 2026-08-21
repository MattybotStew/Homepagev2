import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";
import imgCutCMA from "../../assets/cutCMA.png";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

const stats = [
	{
		number: "180,000+",
		label: "Museum Visitors",
		detail: "Families experienced hands-on learning",
		color: "text-cma-teal-dark",
	},
	{
		number: "12,000+",
		label: "Kids Reached",
		detail: "Through outreach & community programs",
		color: "text-cma-orange-dark",
	},
	{
		number: "1,200",
		label: "Free Passes",
		detail: "Making the museum accessible to all",
		color: "text-cma-navy",
	},
	{
		number: "4,456",
		label: "CLCC Students",
		detail: "Connected learning in classrooms",
		color: "text-cma-orange-dark",
	},
];

const programs = [
	{
		id: "connected-learning",
		label: "Connected Learning Connected Communities",
		title: "Connected Learning Connected Communities",
		body: "Established in 2007, CLCC collaborates with key figures in children's lives — parents, educators, and neighborhood organizations — to advance literacy and nutrition support for children ages 0–8. The program operates in 17 partner schools, child development centers, and homeless shelters across seven of Atlanta's most under-resourced neighborhoods. Includes Spread the Word Workshops, which enhance language development by building on existing communication skills and encouraging household conversations to expand vocabulary.",
	},
	{
		id: "mobile-learning",
		label: "Mobile Learning Spaces",
		title: "Mobile Learning Spaces Powered by CMA",
		body: "In partnership with United Way of Greater Atlanta and supported by the Joseph B. Whitehead Foundation, Mobile Learning Spaces delivers weekly mobile preschool experiences in Clayton and Fulton Counties. The program targets children birth to age five at housing complexes and parks, emphasizing parental involvement as their child's first teacher.",
	},
	{
		id: "family-free-day",
		label: "Family Free Day",
		title: "Family Free Day",
		body: "The Museum offers complimentary admission quarterly through the generous support of sponsors including CareSource, Publix, and additional community partners. Family Free Days remove financial barriers and ensure that every child in Atlanta has access to the transformative power of play-based learning.",
	},
	{
		id: "access-it",
		label: "Access It!",
		title: "Access It!",
		body: "A subsidized admission program ensuring no child or family is turned away from the Museum due to an inability to pay. Access It! partners with organizations across Atlanta including Atlanta Urban Ministry, YMCA, Children's Healthcare of Atlanta, Easter Seals, Genesis Shelter, Quality Care for Children, Sheltering Arms, The Atlanta Children's Shelter, The Salvation Army, United Way of Metro Atlanta, and VSA Georgia.",
	},
];

export default function ImpactPage() {
	const [activeProgram, setActiveProgram] = useState("connected-learning");
	const current = programs.find((p) => p.id === activeProgram)!;

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
			<section
				aria-label="Impact & Community"
				className="relative w-full bg-cma-navy overflow-hidden flex flex-col items-center justify-center py-[80px] md:py-[120px]"
			>
				<img
					src={imgCutCMA}
					alt=""
					aria-hidden
					className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom"
				/>
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container relative z-[1]">
					<motion.div
						className="flex flex-col items-center gap-8 text-center max-w-[800px] mx-auto"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className="cma-eyebrow text-cma-teal-light">
							children's museum of atlanta
						</p>
						<h1 className="text-white">Impact &amp; Community</h1>
						<p className="text-cma-blue-light font-semibold text-[clamp(16px,1.67vw,24px)] leading-[1.4] max-w-[620px]">
							Changing the world by sparking every child's imagination, sense of
							discovery and learning through the power of play.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<a
								onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
								className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black"
							>
								Our Programs
							</a>
							<a
								href="https://16707.blackbaudhosting.com/16707/Annual-Fund"
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white font-black"
							>
								Donate Now
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Stats */}
			<section id="stats" className="bg-white w-full py-[80px] md:py-[100px]">
				<div className="cma-section-container">
					<motion.div
						className="flex flex-col items-center text-center gap-[20px] mb-[56px]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<h2 className="text-cma-navy">2025 Impact at a Glance</h2>
						<p className="text-cma-navy/80 max-w-[580px] leading-[1.6]">
							All gifts are tax-deductible to the fullest extent allowed by law.
							The Museum is a 501(c)(3) tax-exempt &amp; charitable
							organization. Our tax-exempt number is 58-1785484.
						</p>
					</motion.div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-x-[32px] gap-y-[48px]">
						{stats.map((stat, i) => (
							<motion.div
								key={stat.number}
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
								<p
									className={`${stat.color} font-black text-[clamp(36px,4vw,56px)] leading-none`}
								>
									{stat.number}
								</p>
								<p className="font-extrabold text-[clamp(15px,1.25vw,18px)] text-cma-navy leading-[1.1]">
									{stat.label}
								</p>
								<p className="font-bold text-cma-navy/80 text-[14px] leading-[1.5]">
									{stat.detail}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Programs */}
			<section
				id="programs"
				className="bg-cma-cream w-full py-[80px] md:py-[120px]"
			>
				<div className="cma-section-container">
					<motion.div
						className="flex flex-col items-center text-center gap-[16px] mb-[48px]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className="cma-eyebrow text-cma-teal-dark">Community Outreach</p>
						<h2 className="text-cma-navy leading-none tracking-[-1px]">
							Our Programs
						</h2>
					</motion.div>

					<div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-start">
						{/* Left: tab nav + give card */}
						<div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 flex flex-col gap-[16px] lg:sticky lg:top-[120px]">
							{/* Tab nav */}
							<motion.div
								className="bg-white border-2 border-black/5 rounded-[16px] overflow-hidden"
								initial={{ opacity: 0, x: -16 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
							>
								{programs.map((program, i) => (
									<button
										key={program.id}
										onClick={() => setActiveProgram(program.id)}
										className={`w-full flex items-center justify-between px-[16px] py-[16px] text-left transition-colors ${i < programs.length - 1 ? "border-b border-cma-blue-light" : ""} ${activeProgram === program.id ? "bg-cma-orange" : "bg-white hover:bg-cma-blue-light/30"}`}
									>
										<span
											className={`font-semibold text-[15px] leading-[1.3] ${activeProgram === program.id ? "text-cma-navy font-extrabold" : "text-cma-navy"}`}
										>
											{program.label}
										</span>
										<FontAwesomeIcon
											icon={faChevronRight}
											className={`shrink-0 text-[11px] ml-2 ${activeProgram === program.id ? "text-cma-navy" : "text-cma-blue-mid"}`}
										/>
									</button>
								))}
							</motion.div>

							{/* More Ways To Give card */}
							<motion.div
								className="bg-white border-2 border-black/5 rounded-[20px] px-[24px] py-[24px] flex flex-col gap-[16px] items-center text-center"
								initial={{ opacity: 0, x: -16 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.6,
									ease: [0.16, 1, 0.3, 1],
									delay: 0.1,
								}}
							>
								<p className="font-extrabold text-[18px] text-cma-navy leading-[1.2]">
									More Ways To Give
								</p>
								<p className="text-cma-navy/80 text-[14px] leading-[1.5]">
									Your support makes play possible for every child in Atlanta.
								</p>
								<a
									href="https://16707.blackbaudhosting.com/16707/Annual-Fund"
									className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black w-full justify-center"
								>
									Learn More
								</a>
							</motion.div>
						</div>

						{/* Right: content panel */}
						<motion.div
							key={activeProgram}
							className="flex-1 bg-white border-2 border-black/5 rounded-[24px] p-[24px] md:p-[48px] flex flex-col gap-[40px]"
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
						>
							{/* Title + body */}
							<div className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy leading-none tracking-[-1px]">
									{current.title}
								</h2>
								<p className="text-cma-navy text-[clamp(15px,1.25vw,18px)] leading-[1.7]">
									{current.body}
								</p>
								<div>
									<a
										href="https://16707.blackbaudhosting.com/16707/Annual-Fund"
										className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black inline-flex"
									>
										Support This Program
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
