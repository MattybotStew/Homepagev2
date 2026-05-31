import {
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import imgCutCMA from "../../assets/cutCMA.png";

const sections = [
	{ id: "overview", label: "Overview" },
	{ id: "levels-benefits", label: "Membership Levels & Benefits" },
	{ id: "current-members", label: "Current Members" },
	{ id: "join-renew", label: "Member Join/Renew" },
	{ id: "faqs", label: "Member FAQs" },
];

const tiers = [
	{ name: "Explorer", price: "$500" },
	{ name: "Familiar", price: "$1,000" },
	{ name: "Insider", price: "$2,500" },
	{ name: "Patron", price: "$5,000" },
	{ name: "Champion", price: "$10,000" },
];

const tableRows = {
	employee: [
		{
			label: "Free family admission to the museum",
			values: ["✓", "✓", "✓", "✓", "✓"],
		},
		{
			label: "Member-exclusive hours (Mon–Thu 9–10 AM)",
			values: ["✓", "✓", "✓", "✓", "✓"],
		},
		{
			label: "Guest ticket discount",
			values: ["10%", "15%", "20%", "25%", "30%"],
		},
		{
			label: "10% off Birthday parties",
			values: ["—", "✓", "✓", "✓", "✓"],
		},
	],
	company: [
		{
			label: "Recognition on website",
			values: ["—", "✓", "✓", "✓", "✓"],
		},
		{
			label: "Museum buy-out discount",
			values: ["—", "10%", "15%", "20%", "25%"],
		},
		{
			label: "After-hours event discount",
			values: ["—", "—", "10%", "15%", "20%"],
		},
		{
			label: "Complimentary employee admissions",
			values: ["10", "25", "50", "100", "200"],
		},
		{
			label: "Museum Store discount",
			values: ["10%", "10%", "10%", "10%", "10%"],
		},
		{
			label: "Member portal access",
			values: ["✓", "✓", "✓", "✓", "✓"],
		},
		{
			label: "Volunteer opportunities",
			values: ["—", "—", "✓", "✓", "✓"],
		},
	],
};

const membershipBenefits = [
	"Unlimited FREE general admission for one adult during regular operating hours",
	"Members-only hours: Monday–Thursday 9–10 AM for Members",
	"50% off general admission for up to four accompanying guests on every visit (admission must be purchased at member discount price)",
	"Reciprocity to select Association of Children's Museums (ACM) member institutions",
	"10% off Museum Store purchases",
	"10% off Birthday party packages",
	"10% off select museum programming",
	"ASTC Reciprocity — Receive 50% off (up to 50 tickets) at 300+ participating science and technology centers around the United States, Canada, and Australia",
];

const generalInfo = [
	"Members are encouraged to purchase their general admission tickets in advance online, especially during peak hours and weekends.",
	"When you purchase tickets at the Museum, your email address will be added to our e-newsletter list to automatically receive new programs and visiting notes.",
	"The number of all Members' general admission tickets must always reflect your level of membership. Admission is based on capacity.",
	"You can upgrade your membership level at any time throughout the year. Upgrade fees will apply, but not staff refunds for previously purchased tickets.",
];

const discounts = [
	{
		label: "Military",
		body: "Active-duty military families receive $2 off admission when purchasing a Museum membership. Some restrictions may apply. Please contact the Membership Department for details.",
	},
	{
		label: "Education",
		body: "Teachers and school administrators receive $2 off when purchasing a Museum membership. Proof of educator status required at time of purchase.",
	},
	{
		label: "Veterans",
		body: "Veterans receive discounted admission rates throughout the year. Present your Veterans ID at the admissions desk to access this benefit.",
	},
];

const faqItems = [
	{
		question: "How do we distribute admissions to employees?",
		answer:
			"Once your Corporate Membership is activated, you'll receive access to our Member Portal where you can distribute digital admission passes to employees. Each employee can use their pass for personal visits within the membership year.",
	},
	{
		question:
			"Can employees use their benefits on the same day the membership is activated?",
		answer:
			"Yes! Benefits are active as soon as your membership is processed. You'll receive a confirmation email with login instructions for the Member Portal, and employees can begin using their passes immediately.",
	},
	{
		question: "Can we upgrade our membership level during the year?",
		answer:
			"Yes, you can upgrade your Corporate Membership level at any time during the year. You will only pay the prorated difference between your current and new membership level. Please contact Laura Ding to initiate an upgrade.",
	},
	{
		question: "How does the Museum buy-out discount work?",
		answer:
			"Corporate Members at the Familiar level and above receive a discount when booking a private Museum buy-out event. The discount percentage increases with membership level. Please contact our Events team to check availability and pricing.",
	},
	{
		question: "What reciprocation benefits does our company receive?",
		answer:
			"Corporate Members receive recognition on the CMA website and in select Museum materials based on their tier level. Higher-tier members receive additional visibility including on-site signage, social media mentions, and inclusion in annual reports.",
	},
	{
		question: "Who do we contact if we have questions about our membership?",
		answer:
			"Please reach out to our Membership Manager, Laura Ding, at lding@childrensmuseumatlanta.org or call (404) 527-3693. Our Membership team is available Monday–Friday, 9 AM–5 PM.",
	},
];

function scrollToSection(id: string) {
	const el = document.getElementById(id);
	if (!el) return;
	const top = el.getBoundingClientRect().top + window.scrollY - 140;
	window.scrollTo({ top, behavior: "smooth" });
}

function Divider() {
	return <div className="bg-black/10 h-px w-full" />;
}

function CheckCell({ value }: { value: string }) {
	const isCheck = value === "✓";
	const isDash = value === "—";
	return (
		<td className="text-center py-[12px] px-[8px] border-b border-black/5 last:border-0">
			<span
				className={`text-[13px] font-semibold ${
					isCheck
						? "text-cma-teal-dark"
						: isDash
							? "text-cma-navy/25"
							: "text-cma-navy"
				}`}
			>
				{value}
			</span>
		</td>
	);
}

export default function MembershipInfoPageContent() {
	const [activeSection, setActiveSection] = useState("overview");
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	useEffect(() => {
		const observers = sections.map((section) => {
			const el = document.getElementById(section.id);
			if (!el) return null;
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveSection(section.id);
				},
				{ rootMargin: "-20% 0px -60% 0px", threshold: 0 },
			);
			observer.observe(el);
			return observer;
		});
		return () => observers.forEach((obs) => obs?.disconnect());
	}, []);

	return (
		<>
			{/* Page banner */}
			<section className="relative overflow-hidden bg-cma-navy">
				<img src={imgCutCMA} alt="" aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom" />
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container py-[80px] md:py-[120px] relative flex flex-col items-center text-center">
					<p className="cma-eyebrow text-cma-teal mb-[16px]">
						Children's Museum of Atlanta
					</p>
					<h1 className="text-white mb-[16px]">Memberships Information</h1>
					<p className="text-white/75 max-w-[580px]">
						Changing the world by sparking every child's imagination, sense of
						discovery and learning through the power of play.
					</p>
				</div>
			</section>

			{/* Sidebar content */}
			<section className="bg-cma-cream py-[60px] md:py-[80px]">
				<div className="cma-section-container">
					{/* Mobile pill nav */}
					<div className="lg:hidden mb-[24px]">
						<div className="cma-pill-scroll">
							{sections.map((section) => (
								<button
									key={section.id}
									onClick={() => scrollToSection(section.id)}
									className={`cma-nav-pill ${activeSection === section.id ? "cma-nav-pill-active" : "cma-nav-pill-inactive"}`}
								>
									{section.label}
								</button>
							))}
						</div>
					</div>

					<div className="flex gap-[40px] xl:gap-[56px] items-start">
						{/* Sticky sidebar */}
						<aside className="hidden lg:flex flex-col gap-[20px] w-[210px] shrink-0 sticky top-[140px] self-start">
							<div className="bg-white rounded-[20px] border border-[rgba(107,126,160,0.15)] p-[20px] flex flex-col gap-[4px]">
								<p className="cma-eyebrow text-cma-navy/40 text-[10px] mb-[12px]">
									Jump to
								</p>
								{sections.map((section) => (
									<button
										key={section.id}
										onClick={() => scrollToSection(section.id)}
										className={`flex items-center gap-[10px] py-[8px] px-[10px] rounded-[10px] text-[13px] font-bold leading-[1.3] transition-colors w-full text-left ${
											activeSection === section.id
												? "bg-cma-navy/5 text-cma-navy"
												: "text-cma-navy/45 hover:text-cma-navy hover:bg-cma-navy/5"
										}`}
									>
										<span
											className={`w-[6px] h-[6px] rounded-full shrink-0 transition-colors ${activeSection === section.id ? "bg-cma-orange" : "bg-cma-navy/20"}`}
										/>
										{section.label}
									</button>
								))}
							</div>

							<div className="bg-cma-navy rounded-[20px] p-[20px] flex flex-col gap-[12px]">
								<p className="font-extrabold text-[14px] text-white leading-[1.3]">
									Become a Member
								</p>
								<p className="text-white/75 text-[13px] leading-[1.5]">
									Join Atlanta's favorite children's museum and enjoy unlimited
									visits, exclusive perks, and more.
								</p>
								<a
									href="#/memberships"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
								>
									View Plans
								</a>
							</div>
						</aside>

						{/* Main content */}
						<div className="flex-1 min-w-0">
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">

								{/* ── Overview ── */}
								<div id="overview" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Corporate Memberships</h2>

									{/* Partnership levels table */}
									<div className="flex flex-col gap-[12px]">
										<h3 className="text-cma-navy">Corporate Partnership Levels</h3>
										<div className="overflow-x-auto -mx-[24px] md:-mx-[48px] px-[24px] md:px-[48px]">
											<table className="w-full min-w-[560px] text-[13px]">
												<thead>
													<tr>
														<th className="text-left py-[10px] pr-[12px] text-cma-navy/50 font-semibold text-[11px] uppercase tracking-[1px] w-[180px]" />
														{tiers.map((tier) => (
															<th
																key={tier.name}
																className="text-center py-[10px] px-[8px] pb-[14px] border-b-2 border-cma-teal-pale"
															>
																<div className="flex flex-col gap-[2px]">
																	<span className="font-extrabold text-[13px] text-cma-navy">
																		{tier.name}
																	</span>
																	<span className="font-medium text-[11px] text-cma-blue-mid">
																		{tier.price}
																	</span>
																</div>
															</th>
														))}
													</tr>
												</thead>
												<tbody>
													<tr>
														<td
															colSpan={6}
															className="pt-[16px] pb-[8px] text-[11px] font-extrabold uppercase tracking-[1.5px] text-cma-navy/50"
														>
															Employee benefits
														</td>
													</tr>
													{tableRows.employee.map((row) => (
														<tr key={row.label} className="group">
															<td className="py-[12px] pr-[12px] text-[13px] font-medium text-cma-navy border-b border-black/5">
																{row.label}
															</td>
															{row.values.map((v, i) => (
																<CheckCell key={i} value={v} />
															))}
														</tr>
													))}
													<tr>
														<td
															colSpan={6}
															className="pt-[20px] pb-[8px] text-[11px] font-extrabold uppercase tracking-[1.5px] text-cma-navy/50"
														>
															Company benefits
														</td>
													</tr>
													{tableRows.company.map((row) => (
														<tr key={row.label}>
															<td className="py-[12px] pr-[12px] text-[13px] font-medium text-cma-navy border-b border-black/5">
																{row.label}
															</td>
															{row.values.map((v, i) => (
																<CheckCell key={i} value={v} />
															))}
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>

									{/* Sign Up */}
									<div className="flex flex-col gap-[12px]">
										<h3 className="text-cma-navy">Sign Up</h3>
										<p className="text-cma-navy">
											We are so excited to welcome you as a Corporate Member! You
											can sign up with us by emailing our Membership Manager,
											Laura Ding, or booking in-person with the initial package
											you'd like to sign up with.
										</p>
										<div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
											<a
												href="mailto:lding@childrensmuseumatlanta.org"
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full sm:w-auto"
											>
												Contact Laura Ding
											</a>
											<a
												href="mailto:membership@childrensmuseumatlanta.org"
												className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto"
											>
												Submit Interest Form
											</a>
										</div>
									</div>
								</div>

								<Divider />

								{/* ── Membership Levels & Benefits ── */}
								<div id="levels-benefits" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Membership Levels & Benefits</h2>

									{/* Membership Benefits */}
									<div className="flex flex-col gap-[12px]">
										<h3 className="text-cma-navy">Membership Benefits</h3>
										<p className="text-cma-navy font-semibold">
											All our memberships include:
										</p>
										<div className="flex flex-col">
											{membershipBenefits.map((benefit) => (
												<div
													key={benefit}
													className="flex items-start gap-[10px] py-[10px] border-b border-black/8 last:border-0"
												>
													<span className="w-[6px] h-[6px] rounded-full bg-cma-teal-dark mt-[8px] shrink-0" />
													<span className="text-cma-navy">{benefit}</span>
												</div>
											))}
										</div>
									</div>

									{/* General Information */}
									<div className="flex flex-col gap-[12px]">
										<h3 className="text-cma-navy">General Information</h3>
										<div className="flex flex-col">
											{generalInfo.map((item) => (
												<div
													key={item}
													className="flex items-start gap-[10px] py-[10px] border-b border-black/8 last:border-0"
												>
													<span className="w-[6px] h-[6px] rounded-full bg-cma-orange mt-[8px] shrink-0" />
													<span className="text-cma-navy">{item}</span>
												</div>
											))}
										</div>
									</div>

									{/* Year-Round Discounts */}
									<div className="flex flex-col gap-[12px]">
										<h3 className="text-cma-navy">Year-Round Discounts</h3>
										<div className="flex flex-col gap-[0px]">
											{discounts.map((d) => (
												<div
													key={d.label}
													className="flex flex-col gap-[4px] py-[14px] border-b border-black/8 last:border-0"
												>
													<p className="font-extrabold text-cma-navy">{d.label}</p>
													<p className="text-cma-navy/70">{d.body}</p>
												</div>
											))}
										</div>
									</div>
								</div>

								<Divider />

								{/* ── Current Members ── */}
								<div id="current-members" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Current Members</h2>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">Accessing Your Benefits</h3>
										<p className="text-cma-navy">
											To get started, visit the Member Portal and create an
											account using the email address associated with your
											membership. You may also access your benefits by coming in
											person — just present your member ID or the email on file
											at the admissions desk.
										</p>
									</div>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">
											Questions or Need Support?
										</h3>
										<p className="text-cma-navy">
											Our Membership team is here to help. Contact Membership
											Manager Laura Ding directly for any account questions,
											changes to your membership, or assistance distributing
											benefits to your team.
										</p>
										<div>
											<a
												href="mailto:lding@childrensmuseumatlanta.org"
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											>
												Contact Our Members Team
											</a>
										</div>
									</div>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">Gift a Membership</h3>
										<p className="text-cma-navy">
											A Children's Museum of Atlanta membership is a thoughtful
											and meaningful gift that encompasses a love for learning,
											quality family time, and fosters a sense of wonder and
											exploration in a child's life. Give the gift of unlimited
											play to someone you love.
										</p>
										<p className="text-cma-navy">
											Questions? Please contact the Membership Department at{" "}
											<a
												href="mailto:membership@childrensmuseumatlanta.org"
												className="cma-text-link"
											>
												membership@childrensmuseumatlanta.org
											</a>{" "}
											to get started.
										</p>
										<div>
											<a
												href="https://www.childrensmuseumatlanta.org/memberships/"
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											>
												Gift a Membership
											</a>
										</div>
									</div>
								</div>

								<Divider />

								{/* ── Member Join/Renew ── */}
								<div id="join-renew" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Member Join/Renew</h2>
									<p className="text-cma-navy">
										Ready to become a member or renew for another year? Joining
										the Children's Museum of Atlanta Corporate Membership Program
										is simple. Choose the membership level that fits your
										organization — Explorer, Familiar, Insider, Patron, or
										Champion — and reach out to our Membership Manager to get
										started.
									</p>
									<p className="text-cma-navy">
										To find out more or submit your Annual Membership Form,
										contact Laura Ding at{" "}
										<a
											href="mailto:lding@childrensmuseumatlanta.org"
											className="cma-text-link"
										>
											lding@childrensmuseumatlanta.org
										</a>
										.
									</p>
									<div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
										<a
											href="#/memberships"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full sm:w-auto"
										>
											Find a Plan
										</a>
										<a
											href="mailto:membership@childrensmuseumatlanta.org"
											className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto"
										>
											Submit Annual Form
										</a>
									</div>
								</div>

								<Divider />

								{/* ── Member FAQs ── */}
								<div id="faqs" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Member FAQs</h2>
									<div className="flex flex-col">
										{faqItems.map((faq, i) => (
											<div
												key={i}
												className="border-b border-black/10 last:border-0"
											>
												<button
													onClick={() => setOpenFaq(openFaq === i ? null : i)}
													className="w-full flex items-center justify-between py-[18px] text-left gap-[16px]"
												>
													<span
														className={`text-cma-navy ${openFaq === i ? "font-extrabold" : "font-semibold"}`}
													>
														{faq.question}
													</span>
													<FontAwesomeIcon
														icon={openFaq === i ? faMinus : faPlus}
														className="text-cma-orange shrink-0 text-[12px]"
													/>
												</button>
												{openFaq === i && (
													<p className="text-cma-navy pb-[18px]">
														{faq.answer}
													</p>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
