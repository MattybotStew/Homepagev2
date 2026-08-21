import { faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const plans = [
	{
		name: "Two of Us",
		price: 125,
		description: "Covers any two members of the household.",
		highlight: false,
		cta: "Get Started",
	},
	{
		name: "Family Membership",
		price: 175,
		description: "Two adults and up to four children in the household.",
		highlight: true,
		cta: "Best Value — Join Now",
	},
	{
		name: "Family Plus",
		price: 250,
		description: "For larger families — up to six household members.",
		highlight: false,
		cta: "Get Started",
	},
];

const benefits = [
	"Unlimited visits for a full year",
	"50% off guest tickets",
	"Gift shop, birthday party & special event discounts",
	"Helps bring play to ALL of Atlanta's children",
];

export default function MembershipPlans({
	becomeMemberHref = "https://16707.blackbaudhosting.com/16707/CMA-Memberships",
}: {
	becomeMemberHref?: string;
}) {
	return (
		<section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-[48px]">
				<motion.div
					className="flex flex-col items-center gap-4 text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="cma-eyebrow text-cma-teal-dark">choose your plan</p>
					<h2 className="text-cma-navy">Membership Plans</h2>
					<p className="text-cma-navy max-w-[520px]">
						Every plan includes the same great benefits — unlimited visits, exclusive discounts, and the joy of knowing you're supporting play for every child in Atlanta.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] items-stretch">
					{plans.map((plan, i) => (
						<motion.div
							key={plan.name}
							className={`relative rounded-[24px] flex flex-col gap-[32px] p-[32px] md:p-[40px] ${
								plan.highlight
									? "bg-cma-teal-dark text-white"
									: "bg-white border-2 border-black/5"
							}`}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
						>
							{plan.highlight && (
								<div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-cma-orange text-cma-navy-dark text-[12px] font-black px-[16px] py-[6px] rounded-full whitespace-nowrap">
									Most Popular
								</div>
							)}

							<div className="flex flex-col gap-[8px]">
								<p className={`cma-eyebrow ${plan.highlight ? "text-white" : "text-cma-teal-dark"}`}>
									{plan.name}
								</p>
								<div className="flex items-end gap-[6px]">
									<span className={`font-extrabold text-[clamp(48px,6vw,72px)] leading-none tracking-[-3px] ${plan.highlight ? "text-white" : "text-cma-navy"}`}>
										${plan.price}
									</span>
									<span className={`font-semibold text-[16px] pb-[8px] ${plan.highlight ? "text-white" : "text-cma-navy/80"}`}>
										/year
									</span>
								</div>
								<p className={`text-[14px] leading-[1.5] ${plan.highlight ? "text-white" : "text-cma-navy/80"}`}>
									{plan.description}
								</p>
							</div>

							<div className={`flex flex-col flex-1 border-t ${plan.highlight ? "border-white/20" : "border-[rgba(107,126,160,0.2)]"}`}>
								{benefits.map((benefit) => (
									<div key={benefit} className={`flex items-center gap-[12px] py-[12px] border-b ${plan.highlight ? "border-white/20" : "border-[rgba(107,126,160,0.2)]"}`}>
										{plan.highlight ? (
											<div className="rounded-full size-[20px] bg-white/20 flex items-center justify-center shrink-0">
												<FontAwesomeIcon icon={faCheck} className="text-white text-[10px]" />
											</div>
										) : (
											<FontAwesomeIcon icon={faCircleCheck} className="text-cma-teal text-[20px] shrink-0" />
										)}
										<span className={`text-[14px] font-medium leading-[1.5] ${plan.highlight ? "text-white" : "text-cma-navy"}`}>
											{benefit}
										</span>
									</div>
								))}
							</div>

							<a
								href={becomeMemberHref}
								className={`cma-btn text-center font-black ${
									plan.highlight
										? "bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark"
										: "bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white"
								}`}
							>
								{plan.cta}
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
