import { motion } from "motion/react";
import imgCorporate from "../../assets/donate-donor-corporate.webp";
import imgFoundations from "../../assets/donate-donor-foundations.webp";
import imgIndividual from "../../assets/donate-donor-individual.webp";
import imgYoungPro from "../../assets/donate-donor-young-professionals.webp";
import imgWaveBottom from "../../assets/impact-wave-top.svg";

const donorTypes = [
	{
		image: imgIndividual,
		title: "Individual Donor",
		description:
			"Give directly to the programs, exhibits, and community outreach that spark curiosity in Atlanta's youngest learners.",
		cta: { label: "Learn More", href: "#/donate" },
	},
	{
		image: imgCorporate,
		title: "Corporate Partner",
		description:
			"Align your brand with meaningful impact by sponsoring programs, exhibits, or events at CMA — and reach thousands of Atlanta families.",
		cta: { label: "Learn More", href: "#/donate" },
	},
	{
		image: imgFoundations,
		title: "Foundations",
		description:
			"Support CMA's mission through a grant that funds access initiatives, educational programming, and community outreach across the city.",
		cta: { label: "Learn More", href: "#/donate" },
	},
	{
		image: imgYoungPro,
		title: "Young Professionals / Dream Builders",
		description:
			"Join a community of next-generation philanthropists committed to making play possible for every child in Atlanta.",
		cta: { label: "Learn More", href: "#/donate" },
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
							<div className="h-[193px] rounded-[24px] overflow-hidden shrink-0">
								<img
									src={card.image}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
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
