import { motion } from "motion/react";

const tiers = [
	{
		name: "Visionary",
		threshold: "$50,000 and Up",
		donors: [
			"Anonymous",
			"Around The Table Foundation",
			"Atlanta Braves Foundation",
			"Stephanie V. Blank and Charles Hodges",
			"CareSource",
			"Chick-fil-A",
			"Children's Healthcare of Atlanta",
			"City of Atlanta Mayor's Office of Cultural Affairs",
			"Fulton County Arts and Culture",
			"Georgia Natural Gas",
			"Georgia Power",
			"Georgia-Pacific Foundation",
			"Cathy and Phillip Hodges",
			"Home-Grown Industries of GA, Inc.",
			"Invesco Foundation, Inc.",
			"Invest Atlanta",
			"John H. and Wilhelmina D. Harland Charitable Foundation, Inc.",
			"Kaiser Permanente",
			"LexisNexis Risk Solutions",
			"Lilly Endowment Inc.",
			"Wonya Lucas",
			"Molly Blank Fund of the Arthur M. Blank Family Foundation",
			"Novelis",
			"PNC Bank",
		],
	},
	{
		name: "Creator",
		threshold: "$25,000 and Up",
		donors: [],
	},
	{
		name: "Champion",
		threshold: "$10,000 and Up",
		donors: [],
	},
	{
		name: "Adventurer",
		threshold: "$5,000 and Up",
		donors: [],
	},
	{
		name: "Innovator",
		threshold: "$1,000 and Up",
		donors: [],
	},
];

export default function DonorRecognitionTiers() {
	return (
		<section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-12">
				<motion.div
					className="flex flex-col gap-4 max-w-[720px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy">Recognized Supporters</h2>
					<p className="text-cma-navy text-[clamp(16px,1.5vw,20px)] leading-[1.65] font-medium">
						Your generosity helps us bring the power of play to over 180,000
						children and families each year. Whether you give once or make an
						ongoing commitment, every gift makes a meaningful difference in the
						lives of Atlanta's children.
					</p>
				</motion.div>

				<div className="flex flex-col gap-6">
					{tiers.map((tier, i) => (
						<motion.div
							key={tier.name}
							className="bg-white rounded-[24px] p-8 md:p-10 flex flex-col gap-6 border border-black/5"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
						>
							<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
								<h3 className="text-cma-navy">{tier.name}</h3>
								<span className="bg-cma-orange/10 text-cma-orange-dark text-[12px] font-extrabold uppercase tracking-[1px] px-3 py-1 rounded-full self-start sm:self-auto">
									{tier.threshold}
								</span>
							</div>

							{tier.donors.length > 0 ? (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
									{tier.donors.map((donor) => (
										<p key={donor} className="text-cma-navy font-medium text-[14px] border-b border-[rgba(107,126,160,0.15)] py-2">
											{donor}
										</p>
									))}
								</div>
							) : (
								<p className="text-cma-navy/50 text-[14px] italic">
									Contact our development team to learn about recognition opportunities at this level.
								</p>
							)}

							<a
								href="#/donate"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start"
							>
								Become a {tier.name}
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
