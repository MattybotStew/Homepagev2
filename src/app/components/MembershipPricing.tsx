import { motion } from "motion/react";
import imgCheck from "../../assets/pricing-check.svg";
import imgWaveWhite from "../../assets/wave-white.svg";

const plans = [
	{
		name: "Two of Us",
		price: "$125",
		period: "yearly",
		featured: false,
		benefits: [
			"Under 5: FREE",
			"Adults $21.95 • Seniors (65+): $14.95",
			"10% off guest tickets",
			"Advance tickets recommended. Walk-in subject to availability.",
		],
		cta: "Become a Member",
		ctaHref: "https://www.childrensmuseumatlanta.org/memberships/",
	},
	{
		name: "Family Membership",
		price: "$175",
		period: "yearly",
		featured: true,
		badge: "Most Popular",
		benefits: [
			"Unlimited visits",
			"Members only access 9–10 a.m. weekdays",
			"10% off guest tickets",
			"Membership pays for itself in just 2 visits",
		],
		note: "A family of 4 visiting 3 times pays $83.80. A yearly membership is $175.",
		cta: "Become a Member",
		ctaHref: "https://www.childrensmuseumatlanta.org/memberships/",
	},
	{
		name: "Family Plus",
		price: "$250",
		period: "yearly",
		featured: false,
		benefits: [
			"Group visits for 10–30 people, $3 off ticket",
			"Monday–Friday, 10 a.m.–12 p.m. Call 404-527-3693",
			"Museum On-the-Go: We bring activities to YOUR location",
		],
		cta: "Become a Member",
		ctaHref: "https://www.childrensmuseumatlanta.org/memberships/",
	},
];

export default function MembershipPricing() {
	return (
		<div
			id="membership"
			className="w-full py-[80px] md:py-[120px] bg-cma-cream relative overflow-hidden"
		>
			<div className="cma-section-container">
				{/* Heading */}
				<motion.div
					className="flex flex-col gap-[16px] items-center text-center mb-[48px] md:mb-[64px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy">Choose Your Membership Plan</h2>
					<p className="text-cma-navy/70 text-[18px] font-medium max-w-[560px] leading-[1.5]">
						The right plan for every family — all include unlimited visits and
						exclusive member perks
					</p>
					<a
						href="#/memberships/information"
						className="cma-btn bg-cma-navy text-white hover:bg-cma-slate font-black"
					>
						Membership Information
					</a>
				</motion.div>

				{/* Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[12px] items-stretch md:items-end">
					{plans.map((plan, i) => (
						<motion.div
							key={plan.name}
							className={`flex flex-col gap-[24px] rounded-[24px] p-[28px] md:p-[32px] border-2 ${
								plan.featured
									? "bg-cma-teal-dark border-cma-teal-dark md:-mt-[20px] md:pb-[52px]"
									: "bg-white border-black/5"
							}`}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: i * 0.08,
							}}
						>
							{/* Badge */}
							{plan.badge && (
								<span className="self-start bg-cma-orange text-cma-navy text-[11px] font-extrabold uppercase tracking-[1px] px-[10px] py-[4px] rounded-full">
									{plan.badge}
								</span>
							)}

							{/* Plan name + price */}
							<div className="flex flex-col gap-[8px]">
								<p
									className={`font-extrabold text-[13px] uppercase tracking-[1.5px] ${plan.featured ? "text-white/70" : "text-cma-navy/50"}`}
								>
									{plan.name}
								</p>
								<div className="flex items-end gap-[6px]">
									<span
										className={`font-extrabold text-[clamp(48px,6vw,72px)] leading-none tracking-[-3px] ${plan.featured ? "text-white" : "text-cma-navy"}`}
									>
										{plan.price}
									</span>
									<span
										className={`font-semibold text-[16px] leading-[1.4] pb-[6px] ${plan.featured ? "text-white/60" : "text-cma-navy/50"}`}
									>
										/{plan.period}
									</span>
								</div>
							</div>

							<div className={`h-px ${plan.featured ? "bg-white/20" : "bg-black/8"}`} />

							{/* Benefits */}
							<div className="flex flex-col gap-[0px] flex-1">
								{plan.benefits.map((benefit) => (
									<div
										key={benefit}
										className={`flex items-start gap-[10px] py-[10px] border-b last:border-0 ${plan.featured ? "border-white/15" : "border-black/8"}`}
									>
										<img
											src={imgCheck}
											alt=""
											aria-hidden
											className={`w-[16px] h-[16px] shrink-0 mt-[2px] block ${plan.featured ? "" : "opacity-70"}`}
										/>
										<span
											className={`text-[14px] font-medium leading-[1.5] ${plan.featured ? "text-white" : "text-cma-navy"}`}
										>
											{benefit}
										</span>
									</div>
								))}
							</div>

							{/* Note */}
							{plan.note && (
								<p className="text-white/60 text-[12px] leading-[1.5]">
									{plan.note}
								</p>
							)}

							{/* CTA */}
							<a
								href={plan.ctaHref}
								className={
									plan.featured
										? "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										: "cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
								}
							>
								{plan.cta}
							</a>
						</motion.div>
					))}
				</div>
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
		</div>
	);
}
