import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";

const ADULT_PRICE = 21.95;
const CHILD_PRICE = 19.95;

const PLANS = [
	{ name: "Two of Us", price: 125 },
	{ name: "Family Membership", price: 175 },
	{ name: "Family Plus", price: 250 },
];

const PLAN_DETAILS: Record<
	string,
	{ description: string; benefits: string[] }
> = {
	"Two of Us": {
		description: "Covers any two members of the household.",
		benefits: [
			"Unlimited visits for a full year",
			"50% off guest tickets",
			"Gift shop, birthday party & special event discounts",
			"Helps bring the power of play to ALL of Atlanta's children",
		],
	},
	"Family Membership": {
		description:
			"Covers two adults and up to four children in the household.",
		benefits: [
			"Unlimited visits for a full year",
			"50% off guest tickets",
			"Gift shop, birthday party & special event discounts",
			"Helps bring the power of play to ALL of Atlanta's children",
		],
	},
	"Family Plus": {
		description: "For larger families — up to six household members.",
		benefits: [
			"Unlimited visits for a full year",
			"50% off guest tickets",
			"Gift shop, birthday party & special event discounts",
			"Helps bring the power of play to ALL of Atlanta's children",
		],
	},
};

function planFits(name: string, adults: number, children: number) {
	if (name === "Two of Us") return adults + children <= 2;
	if (name === "Family Membership") return adults <= 2 && children <= 4;
	return true;
}

function getRecommended(adults: number, children: number) {
	if (adults + children <= 2) return "Two of Us";
	if (adults <= 2 && children <= 4) return "Family Membership";
	return "Family Plus";
}

function fmt(n: number) {
	return `$${n.toFixed(2)}`;
}

function Stepper({
	label,
	sublabel,
	value,
	min,
	max,
	onChange,
}: {
	label: string;
	sublabel: string;
	value: number;
	min: number;
	max: number;
	onChange: (n: number) => void;
}) {
	return (
		<div className="grid grid-cols-[1fr_auto] gap-x-[16px] items-center min-h-[44px]">
			<div className="flex flex-col gap-[2px] min-w-0">
				<span className="font-semibold text-[17px] text-cma-navy leading-none">
					{label}
				</span>
				<span className="text-[12px] font-medium text-cma-blue-mid opacity-70">
					{sublabel}
				</span>
			</div>
			<div className="flex items-center gap-[10px]">
				<button
					type="button"
					onClick={() => onChange(Math.max(min, value - 1))}
					disabled={value <= min}
					aria-label={`Decrease ${label}`}
					className="bg-cma-teal hover:bg-cma-teal-dark disabled:opacity-40 transition-colors size-[36px] rounded-full flex items-center justify-center shrink-0 drop-shadow-[0px_1px_0px_rgba(26,58,107,0.08)]"
				>
					<FontAwesomeIcon icon={faMinus} className="text-white text-[12px]" />
				</button>
				<div className="bg-white border border-cma-teal-pale rounded-[10px] shadow-[0px_1px_0px_0px_rgba(26,58,107,0.04)] w-[72px] h-[40px] flex items-center justify-center">
					<span className="font-bold text-[18px] text-cma-navy">{value}</span>
				</div>
				<button
					type="button"
					onClick={() => onChange(Math.min(max, value + 1))}
					disabled={value >= max}
					aria-label={`Increase ${label}`}
					className="bg-cma-teal hover:bg-cma-teal-dark disabled:opacity-40 transition-colors size-[36px] rounded-full flex items-center justify-center shrink-0 drop-shadow-[0px_1px_0px_rgba(26,58,107,0.08)]"
				>
					<FontAwesomeIcon icon={faPlus} className="text-white text-[12px]" />
				</button>
			</div>
		</div>
	);
}

export default function MembershipSavingsCalculator({
	becomeMemberHref = "#/memberships",
}: {
	becomeMemberHref?: string;
}) {
	const [adults, setAdults] = useState(2);
	const [children, setChildren] = useState(2);
	const [visits, setVisits] = useState(4);

	const regularAdmission = (adults * ADULT_PRICE + children * CHILD_PRICE) * visits;
	const recommendedName = getRecommended(adults, children);
	const recommendedPlan = PLANS.find((p) => p.name === recommendedName)!;
	const savings = regularAdmission - recommendedPlan.price;
	const details = PLAN_DETAILS[recommendedName];

	return (
		<section className="bg-white w-full py-[80px] md:py-[100px]">
			<div className="cma-section-container flex flex-col gap-[48px]">
				{/* Heading */}
				<motion.div
					className="flex flex-col items-center gap-[12px] text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy">Find Out How Much You'll Save</h2>
					<p className="text-cma-navy/60 font-medium max-w-[500px]">
						Adjust the options below to see your personalized annual savings.
					</p>
				</motion.div>

				{/* Calculator widget */}
				<motion.div
					className="bg-cma-teal-pale rounded-[28px] p-[28px] md:p-[44px] flex flex-col gap-[32px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
				>
					{/* Top: inputs + result */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[36px]">
						{/* LEFT: steppers */}
						<div className="flex flex-col gap-[20px]">
							<p className="font-bold text-[13px] uppercase tracking-[2px] text-cma-navy/70">
								Your Visit
							</p>

							<div className="flex flex-col gap-[16px]">
								<Stepper
									label="No. of Adults"
									sublabel="Ages 13+"
									value={adults}
									min={1}
									max={8}
									onChange={setAdults}
								/>
								<div className="h-px bg-cma-navy/10" />
								<Stepper
									label="No. of Children"
									sublabel="Ages 1–12 (under 1 free)"
									value={children}
									min={0}
									max={8}
									onChange={setChildren}
								/>
								<div className="h-px bg-cma-navy/10" />
								<Stepper
									label="No. of Visits"
									sublabel="Per year"
									value={visits}
									min={1}
									max={20}
									onChange={setVisits}
								/>
							</div>

							{/* Regular admission total */}
							<div className="bg-white rounded-[16px] px-[22px] py-[18px] flex items-center justify-between gap-[16px]">
								<span className="font-medium text-[15px] text-cma-blue-mid">
									Regular admission, per year
								</span>
								<span className="font-semibold text-[22px] text-cma-navy whitespace-nowrap">
									{fmt(regularAdmission)}
								</span>
							</div>
						</div>

						{/* RIGHT: recommendation card */}
						<div className="bg-white rounded-[20px] p-[28px] md:p-[30px] flex flex-col gap-[20px] relative">
							{/* Recommended badge */}
							<div className="self-start flex items-center gap-[8px] bg-[#fff1de] px-[12px] py-[6px] rounded-full">
								<span className="w-[7px] h-[7px] rounded-full bg-cma-orange shrink-0" />
								<span className="text-[#c77423] font-medium text-[12px] whitespace-nowrap">
									Recommended for you
								</span>
							</div>

							{/* Plan name + description */}
							<div className="flex flex-col gap-[6px]">
								<h3 className="text-cma-navy text-[28px] font-bold leading-none tracking-[-0.3px]">
									{recommendedName}
								</h3>
								<p className="text-cma-blue-mid text-[15px] font-medium leading-[1.5]">
									{details.description}
								</p>
							</div>

							{/* Price */}
							<div className="flex items-end gap-[8px]">
								<span className="font-bold text-[44px] text-cma-navy leading-none tracking-[-2px]">
									{fmt(recommendedPlan.price).split(".")[0]}
								</span>
								<span className="font-semibold text-[15px] text-cma-blue-mid pb-[4px]">
									/ year
								</span>
							</div>

							{/* Savings box */}
							<div className="bg-[#e7f7f0] rounded-[14px] px-[18px] py-[14px] flex items-center gap-[14px]">
								<div className="bg-cma-teal-dark size-[40px] rounded-full flex items-center justify-center shrink-0">
									<FontAwesomeIcon
										icon={faCheck}
										className="text-white text-[14px]"
									/>
								</div>
								<div className="flex flex-col gap-[2px]">
									<p className="font-bold text-[16px] text-cma-navy leading-none">
										{savings > 0 ? `You save ${fmt(savings)} per year` : "Great value at any visit count"}
									</p>
									<p className="text-[13px] font-medium text-cma-blue-mid leading-[1.4]">
										vs. paying regular admission for {visits} visit{visits !== 1 ? "s" : ""}
									</p>
								</div>
							</div>

							{/* Benefits list */}
							<div className="flex flex-col gap-[8px]">
								{details.benefits.map((benefit) => (
									<div key={benefit} className="flex items-center gap-[10px]">
										<div className="bg-cma-teal size-[16px] rounded-[4px] flex items-center justify-center shrink-0">
											<FontAwesomeIcon
												icon={faCheck}
												className="text-white text-[9px]"
											/>
										</div>
										<span className="text-[14px] font-medium text-cma-blue-mid leading-[1.5]">
											{benefit}
										</span>
									</div>
								))}
							</div>

							{/* CTAs */}
							<div className="flex flex-wrap items-center gap-[12px]">
								<a
									href={becomeMemberHref}
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
								>
									Become a Member
								</a>
								<a
									href="#/memberships/information"
									className="text-[14px] font-semibold text-cma-blue-mid underline hover:text-cma-teal-dark transition-colors"
								>
									Find out About Our Discounts
								</a>
							</div>
						</div>
					</div>

					{/* Bottom: all tiers strip */}
					<div className="border-t-2 border-dashed border-cma-navy/15 pt-[24px] flex flex-col gap-[16px]">
						<p className="font-bold text-[13px] uppercase tracking-[2px] text-cma-navy/70">
							All Membership Tiers
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px]">
							{PLANS.map((plan) => {
								const fits = planFits(plan.name, adults, children);
								const isRecommended = plan.name === recommendedName;
								return (
									<div
										key={plan.name}
										className={`bg-white rounded-[14px] px-[18px] py-[14px] flex flex-col gap-[6px] border-2 transition-colors ${isRecommended ? "border-cma-orange" : "border-transparent"}`}
									>
										<span className="font-semibold text-[17px] text-cma-navy leading-none">
											{plan.name}
										</span>
										<div className="flex flex-wrap items-center justify-between gap-[4px]">
											<div className="flex items-baseline gap-[3px]">
												<span className="font-bold text-[20px] text-cma-navy">
													${plan.price}
												</span>
												<span className="font-semibold text-[13px] text-cma-blue-mid">
													/yr
												</span>
											</div>
											<span
												className={`text-[14px] font-medium whitespace-nowrap ${fits ? "text-cma-teal-dark" : "text-cma-orange-dark"}`}
											>
												{fits ? "✓ Fits your party" : "✗ Party too large"}
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
