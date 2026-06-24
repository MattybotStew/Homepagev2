import {
	faCity,
	faDownload,
	faHandHoldingHeart,
	faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const LANA_EMAIL_HREF =
	"mailto:lzring@childrensmuseumatlanta.org?subject=Corporate%20Membership%20Inquiry";

const tiers = [
	{
		name: "Explorer",
		quantity: "50 Families",
		description:
			"Perfect for small teams looking to offer a meaningful family benefit. Includes 50 household memberships, giving employees and their families unlimited general admission for one year.",
		featured: false,
	},
	{
		name: "Inventor",
		quantity: "100 Families",
		description:
			"A popular choice for growing companies investing in their people. Includes 100 household memberships with full member benefits, including Members-Only Hours and discounts on guest tickets.",
		featured: false,
	},
	{
		name: "Achiever",
		quantity: "200 Families",
		description:
			"Ideal for mid-size organizations making a visible commitment to Atlanta families. Includes 200 household memberships plus recognition on CMA's Corporate Member list.",
		featured: false,
	},
	{
		name: "Patron",
		quantity: "500 Families",
		description:
			"For large organizations making a broad community impact. Includes 500 household memberships, corporate recognition, and priority access to Museum events and programming.",
		featured: false,
	},
	{
		name: "Champion",
		quantity: "1,000 Families",
		description:
			"Our premier level for companies making a community-wide impact. Includes 1,000 household memberships, top-tier corporate recognition, and a complimentary private event booking for your team.",
		featured: true,
	},
];

const benefits = [
	{
		icon: faHandHoldingHeart,
		title: "Support Working Families",
		body: "Corporate memberships give your employees' families year-round access to hands-on learning and play at no out-of-pocket cost.",
	},
	{
		icon: faPeopleGroup,
		title: "Strengthen Your Culture",
		body: "Offering a CMA membership signals that your company values family well-being — a benefit employees notice and remember.",
	},
	{
		icon: faCity,
		title: "Invest in Atlanta's Future",
		body: "Your membership dollars directly support early childhood education and community outreach programs across Metro Atlanta.",
	},
];

const steps = [
	{
		title: "1. Choose a Level",
		body: "Choose the membership level that fits your company's size and goals.",
	},
	{
		title: "2. Reach Out",
		body: "Submit an interest form or email our Membership Manager, Lana Zring, to get started.",
	},
	{
		title: "3. We Handle the Rest",
		body: "We'll handle the rest — memberships are distributed directly to your employees.",
	},
];


const inputClass =
	"px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy placeholder:text-cma-navy/30 outline-none focus:border-cma-teal-dark transition-colors w-full";
const labelClass = "text-cma-navy font-bold text-[13px]";

function scrollToForm() {
	document.getElementById("corporate-interest-form")?.scrollIntoView({ behavior: "smooth" });
}

export default function CorporateMembershipContent() {
	return (
		<>
			{/* Membership Levels */}
			<section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
				<div className="cma-section-container flex flex-col gap-[48px]">
					<motion.div
						className="flex flex-col items-center gap-4 text-center"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className="cma-eyebrow text-cma-teal">Corporate Membership Levels</p>
						<h2 className="text-cma-navy">Find the Right Membership for Your Company</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] items-stretch">
						{tiers.map((tier, i) => (
							<motion.div
								key={tier.name}
								className={`relative rounded-[24px] flex flex-col gap-[20px] p-[32px] md:p-[40px] ${
									tier.featured
										? "bg-cma-teal-dark text-white"
										: "bg-white border-2 border-black/5"
								}`}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
							>
								<div className="flex flex-col gap-[6px]">
									<p className={`cma-eyebrow ${tier.featured ? "text-white/70" : "text-cma-teal"}`}>
										{tier.quantity}
									</p>
									<h3 className={tier.featured ? "text-white" : "text-cma-navy"}>
										{tier.name}
									</h3>
								</div>
								<p className={`text-[14px] leading-[1.6] flex-1 ${tier.featured ? "text-white/80" : "text-cma-navy/70"}`}>
									{tier.description}
								</p>
								<div className="flex flex-wrap gap-3">
									<button
										type="button"
										onClick={scrollToForm}
										className={`cma-btn font-black ${
											tier.featured
												? "bg-cma-orange text-cma-navy hover:bg-cma-orange-dark"
												: "bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white"
										}`}
									>
										Submit Interest Form
									</button>
									{tier.featured && (
										<a
											href={LANA_EMAIL_HREF}
											className="cma-btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-cma-navy font-black"
										>
											Email Lana
										</a>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Why Companies Choose */}
			<section className="bg-white w-full py-[80px] md:py-[120px]">
				<div className="cma-section-container flex flex-col gap-[48px]">
					<motion.div
						className="flex flex-col items-center gap-[24px] text-center"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						<h2 className="text-cma-navy">Why Companies Choose a Corporate Membership</h2>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-text-link font-black flex items-center gap-[6px] whitespace-nowrap"
						>
							Download Benefits Overview
							<FontAwesomeIcon icon={faDownload} className="text-[13px]" />
						</a>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
						{benefits.map((benefit, i) => (
							<motion.div
								key={benefit.title}
								className="flex flex-col items-center gap-[16px] text-center bg-cma-cream rounded-[24px] p-[32px]"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
							>
								<div className="bg-cma-orange rounded-full size-[56px] flex items-center justify-center shrink-0">
									<FontAwesomeIcon icon={benefit.icon} className="text-white text-[22px]" />
								</div>
								<p className="font-extrabold text-[18px] text-cma-navy leading-[1.2]">
									{benefit.title}
								</p>
								<p className="text-cma-navy/70 text-[14px] leading-[1.6]">{benefit.body}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
				<div className="cma-section-container flex flex-col gap-[48px]">
					<motion.h2
						className="text-cma-navy text-center"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						How It Works
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
						{steps.map((step, i) => (
							<motion.div
								key={step.title}
								className="bg-white rounded-[24px] border-2 border-black/5 p-[32px] flex flex-col gap-[12px]"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
							>
								<p className="font-extrabold text-[18px] text-cma-orange leading-[1.2]">
									{step.title}
								</p>
								<p className="text-cma-navy">{step.body}</p>
							</motion.div>
						))}
					</div>

					<div className="flex flex-col sm:flex-row justify-center gap-3">
						<button
							type="button"
							onClick={scrollToForm}
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							Get Started
						</button>
						<a
							href={LANA_EMAIL_HREF}
							className="cma-btn cma-btn-outline-teal font-black"
						>
							Contact
						</a>
					</div>
				</div>
			</section>

			{/* Get in Touch / Interest Form */}
			<section
				id="corporate-interest-form"
				className="bg-cma-navy w-full py-[80px] md:py-[120px]"
			>
				<div className="cma-section-container flex flex-col lg:flex-row gap-[48px] lg:gap-[64px]">
					<motion.div
						className="flex flex-col gap-[20px] flex-1"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className="cma-eyebrow text-cma-teal">Get in Touch</p>
						<h2 className="text-white">Let's Find Your Fit</h2>
						<p className="text-cma-blue-light leading-[1.6]">
							Whether you're ready to sign up or just want to learn more, we'd love to connect. Reach out to our Membership Manager, Lana Zring, or submit an interest form and we'll be in touch within two business days.
						</p>
						<div className="flex flex-wrap gap-3 pt-[8px]">
							<a
								href={LANA_EMAIL_HREF}
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
							>
								Connect
							</a>
							<a
								href="tel:4046595437"
								className="cma-btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-cma-navy font-black"
							>
								Call
							</a>
						</div>
					</motion.div>

					<motion.div
						className="bg-white rounded-[24px] p-[24px] md:p-[32px] flex-1"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					>
						<form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-[16px]">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
								<div className="flex flex-col gap-[6px]">
									<label className={labelClass}>Name</label>
									<input type="text" placeholder="Your Name" className={inputClass} />
								</div>
								<div className="flex flex-col gap-[6px]">
									<label className={labelClass}>Company</label>
									<input type="text" placeholder="Company Name" className={inputClass} />
								</div>
							</div>
							<div className="flex flex-col gap-[6px]">
								<label className={labelClass}>Email</label>
								<input type="email" placeholder="you@company.com" className={inputClass} />
							</div>
							<div className="flex flex-col gap-[6px]">
								<label className={labelClass}>Membership Level</label>
								<select className={inputClass}>
									<option value="">Not sure yet</option>
									<option>Explorer — 50 Families</option>
									<option>Inventor — 100 Families</option>
									<option>Achiever — 200 Families</option>
									<option>Patron — 500 Families</option>
									<option>Champion — 1,000 Families</option>
								</select>
							</div>
							<div className="flex flex-col gap-[6px]">
								<label className={labelClass}>Message</label>
								<textarea
									rows={4}
									placeholder="Tell us about your team..."
									className={`${inputClass} resize-none`}
								/>
							</div>
							<button
								type="submit"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Submit Interest Form
							</button>
						</form>
					</motion.div>
				</div>
			</section>
		</>
	);
}
