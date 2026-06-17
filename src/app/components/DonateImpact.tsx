import { faBookOpen, faBus, faStar, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import imgWaveTop from "../../assets/impact-wave-top.svg";
import imgWaveWhite from "../../assets/wave-white.svg";

const impactItems = [
	{
		color: "bg-cma-teal",
		icon: faBookOpen,
		title: "Early Learning Initiatives",
		body: "Engaging, interactive, hands-on programs are designed to build knowledge and socialization skills geared towards school readiness.",
	},
	{
		color: "bg-cma-orange",
		icon: faBus,
		title: "Community Outreach",
		body: "Beyond the Museum walls, CMA brings a unique blend of performance-based and hands-on educational programs to deserving families and children living throughout Atlanta.",
	},
	{
		color: "bg-[#fbb040]",
		icon: faStar,
		title: "Traveling Exhibits",
		body: "Throughout the year, the Museum's Morph Gallery transforms into new and exciting spaces opening a world of possibilities to young guests.",
	},
	{
		color: "bg-cma-navy border border-white/20",
		icon: faUsersLine,
		title: "Subsidized Field Trips",
		body: "Nearly 2,000 students who attend Title 1 schools benefit from the Museum's immersive Field Trip programs through our subsidized ticket initiatives.",
	},
];

export default function DonateImpact() {
	return (
		<section id="ways-to-give" className="bg-cma-navy w-full py-[80px] md:py-[120px] relative">
			<div aria-hidden className="absolute top-0 left-0 flex overflow-hidden h-[13px] w-full">
				{Array.from({ length: 10 }).map((_, i) => (
					<img key={`item-${i}`} src={imgWaveTop} alt="" className="w-[422px] h-[57px] shrink-0 block" />
				))}
			</div>
			<div className="cma-section-container flex flex-col gap-[56px]">
				{/* Header */}
				<motion.div
					className="flex flex-col gap-[16px] items-center text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-white leading-none">
						Your gift helps us continue our mission to inspire learning and a sense of discovery through the power of play.
					</h2>
					<p className="text-cma-blue-light text-[clamp(15px,1.25vw,18px)] leading-[1.7]">
						There are many ways that your support can have a long-lasting, wide impact on the community.
					</p>
					<div className="flex justify-center">
						<a
							href="https://16707.blackbaudhosting.com/16707/Annual-Fund"
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							Donate Now
						</a>
					</div>
				</motion.div>

				{/* Cards grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{impactItems.map((item, i) => (
						<motion.div
							key={item.title}
							className="bg-white/5 border border-white/10 rounded-[20px] p-[28px] flex flex-col gap-[16px]"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: i * 0.08,
							}}
						>
							<div
								className={`${item.color} rounded-full size-[48px] flex items-center justify-center shrink-0`}
							>
								<FontAwesomeIcon icon={item.icon} className="text-white text-[18px]" />
							</div>
							<p className="font-extrabold text-[18px] text-white leading-[1.2]">
								{item.title}
							</p>
							<p className="text-cma-blue-light leading-[1.65]">{item.body}</p>
						</motion.div>
					))}
				</div>

			</div>

			<div
				aria-hidden
				className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
			>
				{Array.from({ length: 10 }).map((_, i) => (
					<img
						key={`item-${i}`}
						src={imgWaveWhite}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
