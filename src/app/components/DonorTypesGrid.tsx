import { motion } from "motion/react";
import imgWaveBottom from "../../assets/impact-wave-top.svg";

const donorTypes = [
	{
		title: "Individual Donor",
		description:
			"Make a one-time gift or become a Sustaining Donor by starting your recurring gift. Your tax-deductible donation helps spark every child's imagination through the power of play.",
		cta: { label: "Donate Now", href: "#/donate" },
	},
	{
		title: "Corporate Partner",
		description:
			"When your company invests in CMA, you invest in Atlanta's children and their future. From exhibit sponsorships to volunteer days, there's a partnership that fits your goals.",
		cta: { label: "Learn More", href: "#/corporate-partners" },
	},
	{
		title: "Foundations",
		description:
			"Foundation support is key to the Museum's work in early childhood education and family engagement. Private, family, and community foundations help us positively impact under-resourced schools and communities.",
		cta: { label: "Learn More", href: "#/corporate-partners" },
	},
	{
		title: "Young Professionals",
		description:
			"Looking to make a difference in our community? Join our Young Professionals program to build connections, volunteer, and support events that drive CMA's mission forward.",
		cta: { label: "Join Today", href: "#/young-professionals" },
	},
];

export default function DonorTypesGrid() {
	return (
		<section className="bg-cma-teal-pale w-full py-[80px] md:py-[120px] relative overflow-hidden">
			<div className="cma-section-container flex flex-col gap-12 items-center">
				<motion.h2
					className="text-cma-navy text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					Play changes everything.
					<br />
					Here's how you fit in.
				</motion.h2>

				<div className="flex flex-col lg:flex-row gap-4 items-stretch w-full">
					{donorTypes.map((card, i) => (
						<motion.div
							key={card.title}
							className="bg-white border-2 border-black/5 rounded-[24px] flex-1 flex flex-col gap-8 p-6"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: i * 0.1,
							}}
						>
							<p className="text-cma-navy font-extrabold text-[30px] leading-none tracking-[-1px]">
								{card.title}
							</p>
							<p className="text-cma-navy flex-1">{card.description}</p>
							<div>
								<a
									href={card.cta.href}
									className="cma-btn bg-white border-2 border-cma-orange-dark text-cma-orange-dark hover:bg-cma-orange-dark hover:text-white font-black text-[15px]"
								>
									{card.cta.label}
								</a>
							</div>
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
						src={imgWaveBottom}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}