import { motion } from "motion/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

const accordionItems = [
	{
		id: "matching-gifts",
		title: "Matching Gifts",
		content:
			"Many employers match charitable donations made by their employees. Check with your HR department to see if your company offers a matching gift program — it's one of the easiest ways to double your impact at no extra cost to you.",
	},
	{
		id: "planned-giving",
		title: "Planned Giving, Bonds & Securities",
		content:
			"Include CMA in your estate plan or make a gift of appreciated stock or securities. Planned gifts ensure CMA's mission continues for generations to come. Contact our development team for information on donor-advised funds, IRA charitable rollovers, and bequests.",
	},
	{
		id: "donate-stock",
		title: "Donate Stock",
		content:
			"Donating appreciated stock directly to CMA may allow you to avoid capital gains taxes while receiving a charitable deduction for the full fair market value. Contact pcorder@childrensmuseumatlanta.org to initiate a stock transfer.",
	},
	{
		id: "daf",
		title: "Donor-Advised Funds",
		content:
			"Recommend a grant to the Children's Museum of Atlanta through your donor-advised fund. Our legal name is Children's Museum of Atlanta, Inc. and our EIN is 58-1929382. Contact our Advancement team for any additional information your fund may require.",
	},
];

export default function SupportWaysToGive() {
	return (
		<section className="bg-white w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-16">
				{/* Opening statement */}
				<motion.div
					className="max-w-[760px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="text-cma-navy text-[clamp(16px,1.5vw,20px)] leading-[1.65] font-medium">
						We are so grateful for our donors who help us provide the opportunity
						for Atlanta's families to explore and grow through hands-on play. As
						a nonprofit, admissions and membership sales cover approximately half
						of what it takes to bring the power of play to over 180,000 children
						and caregivers each year. Your support is vital —{" "}
						<strong>we couldn't do it without you.</strong>
					</p>
				</motion.div>

				<div className="flex flex-col gap-12">
					{/* Individual Giving */}
					<motion.div
						className="flex flex-col gap-6 pb-12 border-b border-[rgba(107,126,160,0.2)]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<h2 className="text-cma-navy">Individual Giving</h2>

						<div className="flex flex-col gap-8 max-w-[720px]">
							<div className="flex flex-col gap-3">
								<h3 className="text-cma-navy">Giving for Impact</h3>
								<p className="text-cma-navy">
									Tomorrow's global citizens and workforce are being shaped by
									the Museum's mission today. Your tax-deductible gift helps
									make up the gap between admissions revenue and what it truly
									costs to deliver our programs. To make a gift over $5,000 or
									designate your donation to a specific CMA program, please
									reach out to Kate McNeely, Director of Strategic Advancement,
									at{" "}
									<a
										href="mailto:kmcneely@childrensmuseumatlanta.org"
										className="cma-text-link"
									>
										kmcneely@childrensmuseumatlanta.org
									</a>
									.
								</p>
							</div>

							<div className="flex flex-col gap-3">
								<h3 className="text-cma-navy">
									Invest in the Power of Play with Your Tax-Deductible Gift
								</h3>
								<p className="text-cma-navy">
									Make a one-time gift today — or become a Sustaining Donor by
									starting a recurring gift. Together, we can spark every
									child's imagination and sense of discovery through the power
									of play. For stock gifts or donor-advised funds, contact
									Peyton Corder at{" "}
									<a
										href="mailto:pcorder@childrensmuseumatlanta.org"
										className="cma-text-link"
									>
										pcorder@childrensmuseumatlanta.org
									</a>
									.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 pt-2">
							<a
								href="https://16707.blackbaudhosting.com/16707/Annual-Fund"
								className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black"
							>
								Donate Now
							</a>
							<a
								href="mailto:kmcneely@childrensmuseumatlanta.org"
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
							>
								Contact Kate McNeely
							</a>
						</div>
					</motion.div>

					{/* Corporate & Foundation Giving */}
					<motion.div
						className="flex flex-col gap-6 pb-12 border-b border-[rgba(107,126,160,0.2)]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					>
						<h2 className="text-cma-navy">Corporate &amp; Foundation Giving</h2>

						<div className="flex flex-col gap-8 max-w-[720px]">
							<div className="flex flex-col gap-3">
								<h3 className="text-cma-navy">Corporate Giving</h3>
								<p className="text-cma-navy">
									Corporate leadership is vital to our mission. Exhibit and
									program sponsorship, community outreach support, and corporate
									volunteerism are all ways companies can invest in Georgia's
									children and the economic vibrancy of Atlanta's downtown
									district.
								</p>
							</div>

							<div className="flex flex-col gap-3">
								<h3 className="text-cma-navy">Foundation Giving</h3>
								<p className="text-cma-navy">
									Foundation giving is key to CMA's work in early childhood
									education and family engagement — both inside our walls and
									throughout the community. Private, family, and community
									foundation support funds initiatives that positively impact
									under-resourced schools and communities in Metro Atlanta.
								</p>
							</div>

							<p className="text-cma-navy font-semibold">
								We offer year-round opportunities for corporate or foundation
								contributions to match any marketing or philanthropy budget. For
								more information, contact our Advancement Team at{" "}
								<a href="tel:4044209195" className="cma-text-link">
									(404) 420-9195
								</a>
								.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 pt-2">
							<a
								href="#/support/corporate-partners"
								className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black"
							>
								Corporate Partnerships
							</a>
							<a
								href="mailto:kmcneely@childrensmuseumatlanta.org"
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
							>
								Contact Kate McNeely
							</a>
						</div>
					</motion.div>

					{/* Additional giving options accordion */}
					<motion.div
						className="flex flex-col gap-4 max-w-[720px]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
					>
						<h2 className="text-cma-navy">Other Ways to Give</h2>
						<Accordion type="multiple" className="border-t border-[rgba(107,126,160,0.2)]">
							{accordionItems.map((item) => (
								<AccordionItem key={item.id} value={item.id} className="border-[rgba(107,126,160,0.2)]">
									<AccordionTrigger className="text-cma-navy font-bold text-[15px] hover:no-underline hover:text-cma-teal-dark">
										{item.title}
									</AccordionTrigger>
									<AccordionContent className="text-cma-navy">
										{item.content}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
