import { motion } from "motion/react";

const stats = [
	{ value: "3.8 Million+", label: "Museum Visitors since we opened in 2003" },
	{ value: "20,000+", label: "Square Feet to Explore" },
	{
		value: "8,000+",
		label:
			"Kids Reached every year through our outreach efforts in the community",
	},
	{ value: "34,000+", label: "Annual Free and Reduced Tickets" },
];

export default function AboutStats() {
	return (
		<section className="bg-cma-navy w-full py-[60px] md:py-[80px]">
			<div className="cma-section-container">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
					{stats.map((stat, i) => (
						<motion.div
							key={stat.value}
							className="flex flex-col gap-2"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.8,
								ease: [0.16, 1, 0.3, 1],
								delay: i * 0.1,
							}}
						>
							<p className="text-cma-orange font-black text-[clamp(24px,3.5vw,42px)] leading-none">
								{stat.value}
							</p>
							<p className="text-cma-blue-light text-[13px] leading-[1.5]">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
