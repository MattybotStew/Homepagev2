import { faBookOpen, faBus, faCalendarDays, faStar, faUnlockKeyhole, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import imgWaveBottom from "../../assets/impact-wave-bottom.svg";

const impactItems = [
	{
		color: "bg-cma-teal",
		icon: faBookOpen,
		title: "Early Learning",
		body: "Every day at the Museum, engaging, interactive, hands-on programs are designed and implemented to help build knowledge and socialization skills to help prepare for school.",
	},
	{
		color: "bg-cma-orange",
		icon: faBus,
		title: "Community Outreach",
		body: "Beyond the Museum walls, CMA brings a unique blend of performance-based and hands-on educational programming to underserved families living in the Atlanta area.",
	},
	{
		color: "bg-[#fbb040]",
		icon: faStar,
		title: "Traveling Exhibits",
		body: "Three to four times a year, the Museum's Morph Gallery transforms into a new, exciting space to keep young visitors coming back for more.",
	},
	{
		color: "bg-[#fbb040]",
		icon: faUsersLine,
		title: "Subsidized Field Trips",
		body: "Nearly 12,000 Title I students have visited the Museum for free or at a reduced cost through CMA's immersive field trip program and subsidized ticket initiatives in the past fiscal year alone.",
	},
	{
		color: "bg-cma-teal",
		icon: faCalendarDays,
		title: "Family Free Days",
		body: "Free admission days held throughout the year ensure every Atlanta family can walk through our doors, regardless of financial circumstance.",
	},
	{
		color: "bg-cma-orange",
		icon: faUnlockKeyhole,
		title: "Access It!",
		body: "Subsidized admission and partnerships with social service agencies ensure no child is ever turned away due to inability to pay.",
	},
];

export default function DonateImpact() {
	return (
		<section id="ways-to-give" className="bg-cma-navy w-full py-[80px] md:py-[120px] relative">
			<div className="cma-section-container flex flex-col gap-[56px]">
				{/* Header */}
				<motion.div
					className="flex flex-col gap-[16px] max-w-[720px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-white leading-none">
						There are many ways that your support can have a long-lasting, wide impact on the community.
					</h2>
					<p className="text-cma-blue-light text-[clamp(15px,1.25vw,18px)] leading-[1.7]">
						There are many ways that your support can have a long-lasting, wide impact on the community.
					</p>
				</motion.div>

				{/* Cards grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

				{/* CTAs */}
				<motion.div
					className="flex flex-col sm:flex-row gap-3"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				>
					<a
						href="#/donate"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
					>
						Donate Now
					</a>
					<a
						href="#ways-to-give"
						className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white font-black"
					>
						Ways to Give
					</a>
				</motion.div>
			</div>

			<div
				aria-hidden
				className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
			>
				{Array.from({ length: 10 }).map((_, i) => (
					<img
						key={`item-${i}`}
						src={imgWaveBottom}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
