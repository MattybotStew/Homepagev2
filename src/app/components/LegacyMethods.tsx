import { motion } from "motion/react";

const methods = [
	{
		title: "Estate & Will Planning",
		description:
			"Include CMA as a beneficiary in your will or trust. A bequest of any size helps secure our mission for future generations. Your attorney can help you add CMA to an existing plan.",
	},
	{
		title: "Stock Donations",
		description:
			"CMA makes stock donations simple — complete in 10 minutes or less. Donating appreciated securities may offer significant tax advantages over a cash gift.",
	},
	{
		title: "Endowments",
		description:
			"An endowed gift creates a permanent, named fund at CMA. The principal is invested and the earnings support CMA's programs in perpetuity — a true lasting legacy.",
	},
	{
		title: "Retirement Assets / IRA",
		description:
			"Name CMA as a full or partial beneficiary of your IRA or retirement plan. This is often one of the most tax-efficient ways to make a planned gift.",
	},
];

export default function LegacyMethods() {
	return (
		<section className="bg-white w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-16">
				<motion.div
					className="flex flex-col gap-6 max-w-[720px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy">Why legacy giving matters</h2>
					<p className="text-cma-navy text-[clamp(16px,1.5vw,20px)] leading-[1.65] font-medium">
						Planned gifts of all sizes form the foundation of CMA's long-term
						stability. When you include CMA in your estate plan, you're not just
						making a donation — you're ensuring that the power of play reaches
						children in Atlanta long after you're gone. Your legacy becomes part
						of every child who walks through our doors.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{methods.map((method, i) => (
						<motion.div
							key={method.title}
							className="bg-cma-cream rounded-[24px] p-8 flex flex-col gap-4 border border-black/5"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: i * 0.08,
							}}
						>
							<h3 className="text-cma-navy">{method.title}</h3>
							<p className="text-cma-navy">{method.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				>
					<a
						href="mailto:kmcneely@childrensmuseumatlanta.org"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
					>
						Talk to Us About Legacy Giving
					</a>
				</motion.div>
			</div>
		</section>
	);
}
