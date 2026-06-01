import { motion } from "motion/react";

const options = [
	{
		title: "Sponsor an Event",
		description:
			"Put your brand at the heart of Atlanta's most memorable family moments. CMA hosts signature events throughout the year — from the Tournament for Play golf classic to Lil'palooza and the Imagination Ball. Event sponsorships offer high-visibility branding alongside genuine community impact.",
		cta: { label: "Explore Events", href: "#/events" },
	},
	{
		title: "Sponsor an Exhibit",
		description:
			"Exhibit sponsorships place your company's name at the center of hands-on, play-based learning experiences that reach over 180,000 visitors each year. From naming rights to custom activations, exhibit partnerships offer lasting brand presence in one of Atlanta's most visited family destinations.",
		cta: { label: "Contact Kate McNeely", href: "mailto:kmcneely@childrensmuseumatlanta.org" },
	},
	{
		title: "Corporate Membership & Bulk Tickets",
		description:
			"Give your team and their families the gift of play. CMA's Corporate Membership program offers structured annual packages — from 50 to 1,000 employee families — with tiered benefits including free admission and museum buy-out discounts.",
		cta: { label: "Learn About Corporate Memberships", href: "#/memberships" },
	},
	{
		title: "Rent Our Space",
		description:
			"Host your next corporate event in one of Atlanta's most unique and inspiring venues. CMA offers flexible event spaces for private receptions, team volunteer days, client entertaining, and full museum buy-outs — steps from major Atlanta attractions at 275 Centennial Olympic Park Dr NW.",
		cta: { label: "Inquire About Venue Rental", href: "mailto:kmcneely@childrensmuseumatlanta.org" },
	},
	{
		title: "Volunteer Your Team",
		description:
			"Bring your team together for a day of meaningful impact. CMA welcomes corporate volunteer groups to support our exhibits, programs, and community outreach initiatives — a powerful way to build team culture and fulfill CSR commitments.",
		cta: { label: "Schedule a Volunteer Day", href: "mailto:kmcneely@childrensmuseumatlanta.org" },
	},
	{
		title: "In-Kind Donations",
		description:
			"CMA welcomes in-kind donations of goods, services, and expertise that support our exhibits, programs, and daily operations. From supplies and technology to professional services, your company's resources can make a real difference for the children and families we serve.",
		cta: { label: "Submit an In-Kind Inquiry", href: "mailto:kmcneely@childrensmuseumatlanta.org" },
	},
];

const wishlist = [
	{ item: "Sensory Play Studio Renovation", amount: "$75,000–$100,000" },
	{ item: "Outdoor Discovery Garden", amount: "$150,000–$200,000" },
	{ item: "STEM Innovation Lab", amount: "$50,000–$80,000" },
	{ item: "Family Free Day Presenting Sponsor", amount: "$10,000–$15,000" },
	{ item: "Community Outreach Van", amount: "$45,000" },
	{ item: "Welcome Center Refresh", amount: "$25,000–$40,000" },
];

export default function CorporatePartnerOptions() {
	return (
		<section className="bg-white w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-20">
				{/* Partnership options */}
				<div className="flex flex-col gap-8">
					<motion.h2
						className="text-cma-navy"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						Partnership Options
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{options.map((option, i) => (
							<motion.div
								key={option.title}
								className="bg-cma-cream rounded-[24px] p-8 flex flex-col gap-4 border border-black/5"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.7,
									ease: [0.16, 1, 0.3, 1],
									delay: i * 0.06,
								}}
							>
								<h3 className="text-cma-navy">{option.title}</h3>
								<p className="text-cma-navy flex-1">{option.description}</p>
								<a href={option.cta.href} className="cma-text-link font-black text-[15px] mt-2">
									{option.cta.label} →
								</a>
							</motion.div>
						))}
					</div>
				</div>

				{/* Wishlist */}
				<motion.div
					className="flex flex-col gap-8 bg-cma-navy rounded-[24px] p-8 md:p-12"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<div className="flex flex-col gap-3">
						<p className="cma-eyebrow text-white/70">Investment Opportunities</p>
						<h2 className="text-white">Our Wishlist</h2>
						<p className="text-cma-blue-light text-[clamp(15px,1.25vw,18px)] leading-[1.65] max-w-[600px]">
							These priority projects are ready for a naming partner. Your investment shapes the CMA experience for the next generation of Atlanta's families.
						</p>
					</div>
					<div className="flex flex-col border-t border-white/20">
						{wishlist.map((item, i) => (
							<motion.div
								key={item.item}
								className="flex items-center justify-between gap-4 py-4 border-b border-white/20"
								initial={{ opacity: 0, x: -16 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
							>
								<p className="text-white font-semibold">{item.item}</p>
								<span className="text-cma-orange font-black text-[15px] shrink-0">{item.amount}</span>
							</motion.div>
						))}
					</div>
					<a
						href="mailto:kmcneely@childrensmuseumatlanta.org"
						className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start"
					>
						Contact Kate McNeely
					</a>
				</motion.div>
			</div>
		</section>
	);
}
