import { motion } from "motion/react";
import imgCutCMA from "../../assets/cutCMA.png";
import imgVolunteer from "../../assets/educators-contact.webp";
import imgJoin from "../../assets/educators-img-0.webp";
import imgWaveBottom from "../../assets/impact-wave-bottom.svg";
import imgWaveTop from "../../assets/impact-wave-top.svg";
import imgWaveWhite from "../../assets/wave-white.svg";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

const careerBenefits = [
	{
		color: "bg-cma-teal",
		title: "Free Museum Admission",
		body: "Enjoy complimentary admission for you and your family — a perk that lets you experience the museum's magic beyond your shift.",
	},
	{
		color: "bg-cma-orange",
		title: "Professional Growth",
		body: "Develop your career through hands-on training, mentorship, and opportunities across education, nonprofit management, and guest experience.",
	},
	{
		color: "bg-[#fbb040]",
		title: "Mission-Driven Work",
		body: "Make a real difference every day by sparking curiosity and play-based learning for thousands of children and families across Atlanta.",
	},
];

const volunteerBenefits = [
	{
		color: "bg-cma-teal",
		title: "Make a Difference",
		body: "Contribute your time and talent to a nonprofit that reaches thousands of children and families in Atlanta every single year.",
	},
	{
		color: "bg-cma-orange",
		title: "Build Experience",
		body: "Gain valuable hands-on experience in education, event support, guest services, and nonprofit operations — great for any resume.",
	},
	{
		color: "bg-[#fbb040]",
		title: "Community Connection",
		body: "Join a community of passionate volunteers who share a commitment to play-based learning and child development in Atlanta.",
	},
];

function BenefitItem({
	color,
	title,
	body,
	light = false,
}: {
	color: string;
	title: string;
	body: string;
	light?: boolean;
}) {
	return (
		<div className="flex gap-[16px] items-start">
			<div
				className={`${color} rounded-[14px] size-[48px] flex items-center justify-center shrink-0`}
			>
				<div className="bg-white/50 rounded-[6px] size-[24px]" />
			</div>
			<div className="flex flex-col gap-[8px] flex-1 min-w-0">
				<p
					className={`font-extrabold text-[18px] leading-[1.2] ${light ? "text-white" : "text-cma-navy"}`}
				>
					{title}
				</p>
				<p
					className={`leading-[1.65] ${light ? "text-cma-blue-light" : "text-cma-navy"}`}
				>
					{body}
				</p>
			</div>
		</div>
	);
}

export default function CareersPage() {
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
				<img src={imgCutCMA} alt="" aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom" />
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
						<h1 className="text-white">Careers &amp; Volunteer</h1>
						<p className="text-cma-blue-light font-semibold text-[clamp(16px,1.67vw,24px)] leading-[1.4] max-w-[600px]">
							Join a team dedicated to sparking imagination and inspiring
							discovery through the power of play.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<a
								onClick={() => document.getElementById("careers")?.scrollIntoView({ behavior: "smooth" })}
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								View Open Positions
							</a>
							<a
								onClick={() => document.getElementById("volunteer")?.scrollIntoView({ behavior: "smooth" })}
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white font-black"
							>
								Volunteer
							</a>
						</div>
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
							src={imgWaveWhite}
							alt=""
							className="w-[422px] h-[57px] shrink-0 block"
						/>
					))}
				</div>
			</section>

			{/* Join the Team */}
			<section id="careers" className="bg-white w-full py-[80px] md:py-[120px]">
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
								src={imgJoin}
								alt="Children's Museum of Atlanta staff"
								className="w-full h-[340px] md:h-[460px] object-cover rounded-[24px]"
							/>
						</motion.div>

						{/* Text */}
						<motion.div
							className="flex-1 flex flex-col gap-[32px]"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{
								duration: 0.8,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.1,
							}}
						>
							<h2 className="text-cma-navy leading-none tracking-[-1px]">
								Join The Team
							</h2>
							<p className="text-cma-navy text-[clamp(15px,1.25vw,18px)] leading-[1.7]">
								We seek talented individuals with a passion for providing
								outstanding service to our guests to help us fulfill our mission
								of sparking imagination and inspiring discovery and learning for
								all children through the power of play.
							</p>
							<p className="text-cma-navy/70 leading-[1.7]">
								Children's Museum of Atlanta is committed to equal employment
								opportunity and will not discriminate against employees or
								applicants on any legally recognized basis including veteran
								status, race, color, religion, sex, national origin, age,
								disability, or marital status.
							</p>

							<div className="flex flex-col gap-[24px]">
								{careerBenefits.map((benefit, i) => (
									<motion.div
										key={benefit.title}
										initial={{ opacity: 0, x: 16 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, margin: "-40px" }}
										transition={{
											delay: i * 0.08,
											duration: 0.5,
											ease: [0.16, 1, 0.3, 1],
										}}
									>
										<BenefitItem {...benefit} />
									</motion.div>
								))}
							</div>

							<div className="flex flex-col sm:flex-row gap-3">
								<a
									href="mailto:hr@childrensmuseumatlanta.org"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
								>
									Contact HR
								</a>
								<a
									href="#/giving-circles/young-professionals"
									className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
								>
									Young Professionals
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Volunteer at CMA */}
			<section
				id="volunteer"
				className="bg-cma-navy w-full py-[80px] md:py-[120px] relative"
			>
				{/* Wave top */}
				<div
					aria-hidden
					className="absolute top-0 left-0 flex overflow-hidden h-[13px] w-full"
				>
					{Array.from({ length: 10 }).map((_, i) => (
						<img
							key={i}
							src={imgWaveTop}
							alt=""
							className="w-[422px] h-[57px] shrink-0 block"
						/>
					))}
				</div>

				<div className="cma-section-container">
					<div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[64px] items-center">
						{/* Text */}
						<motion.div
							className="flex-1 flex flex-col gap-[32px]"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						>
							<h2 className="text-white leading-none tracking-[-1px]">
								Volunteer at CMA
							</h2>
							<p className="text-cma-blue-light text-[clamp(15px,1.25vw,18px)] leading-[1.7]">
								We seek talented individuals with a passion for providing
								outstanding service to our guests to help us fulfill our mission
								of sparking imagination and inspiring discovery and learning for
								all children through the power of play.
							</p>
							<p className="text-cma-blue-light/70 leading-[1.7]">
								Volunteers play a vital role in the day-to-day operation of the
								Museum. Whether you're greeting families at the entrance or
								supporting a special event, your time directly impacts the
								experience of every child who walks through our doors.
							</p>

							<div className="flex flex-col gap-[24px]">
								{volunteerBenefits.map((benefit, i) => (
									<motion.div
										key={benefit.title}
										initial={{ opacity: 0, x: -16 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true, margin: "-40px" }}
										transition={{
											delay: i * 0.08,
											duration: 0.5,
											ease: [0.16, 1, 0.3, 1],
										}}
									>
										<BenefitItem {...benefit} light />
									</motion.div>
								))}
							</div>

							<div className="flex flex-col sm:flex-row gap-3">
								<a
									href="mailto:volunteer@childrensmuseumatlanta.org"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
								>
									Contact Volunteer Team
								</a>
								<a
									href="#/giving-circles/young-professionals"
									className="cma-btn bg-white border-2 border-white text-cma-navy hover:bg-cma-blue-light font-black"
								>
									Young Professionals
								</a>
							</div>
						</motion.div>

						{/* Photo */}
						<motion.div
							className="w-full lg:w-[480px] xl:w-[520px] shrink-0"
							initial={{ opacity: 0, x: 24 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{
								duration: 0.8,
								ease: [0.16, 1, 0.3, 1],
								delay: 0.1,
							}}
						>
							<img
								src={imgVolunteer}
								alt="Volunteer at Children's Museum of Atlanta"
								className="w-full h-[340px] md:h-[460px] object-cover rounded-[24px]"
							/>
						</motion.div>
					</div>
				</div>

				{/* Wave bottom to white */}
				<div
					aria-hidden
					className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
				>
					{Array.from({ length: 10 }).map((_, i) => (
						<img
							key={i}
							src={imgWaveWhite}
							alt=""
							className="w-[422px] h-[57px] shrink-0 block"
						/>
					))}
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
