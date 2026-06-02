import {
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import imgCutCMA from "../../assets/cutCMA.png";

const BLACKBAUD_MEMBERSHIPS = "https://16707.blackbaudhosting.com/16707/CMA-Memberships";

const sections = [
	{ id: "levels-benefits", label: "Membership Benefits" },
	{ id: "current-members", label: "Current Members" },
	{ id: "join-renew", label: "Join / Renew" },
	{ id: "faqs", label: "Member FAQs" },
];

const membershipBenefits = [
	"Unlimited FREE general admission for one year during regular operating hours",
	"50% off general admission for up to two accompanying guests on every visit",
	"10% off general admission for additional accompanying guests",
	"Discounts on ticketed events",
	"10% off Museum Store purchases",
	"$100 off birthday party packages",
	"Member-only exhibit preview invitations",
	"ACM Reciprocity — 50% off up to six (6) tickets at 200+ participating children's museums",
	"ASTC Reciprocity — 50% off at 300+ participating science and technology centers across the US, Canada, and Australia",
];

const generalInfo = [
	"Members are encouraged to purchase their general admission tickets in advance online, especially during peak hours and weekends.",
	"When you purchase tickets at the Museum, your email address will be added to our e-newsletter list to automatically receive new programs and visiting notes.",
	"Membership does not guarantee Museum admission. Admission is based on capacity.",
	"You can upgrade your membership level at any time throughout the year. Upgrade fees will apply.",
];

const discounts = [
	{
		label: "Military",
		body: "Active-duty military families receive $10 off a Museum membership. Military ID required. Must be purchased in person. Some restrictions may apply — contact the Membership Department for details.",
	},
	{
		label: "Educator",
		body: "Teachers and school administrators receive $10 off a Museum membership. A valid educator ID or Georgia Declaration of Intent is required at time of purchase. Must be purchased in person.",
	},
	{
		label: "Veterans",
		body: "Veterans receive discounted admission rates throughout the year. Present your Veterans ID at the admissions desk to access this benefit.",
	},
];

const faqItems = [
	{
		question: "How do I access my membership benefits?",
		answer:
			"Visit the Member Portal and log in using the email address associated with your membership. You can also access your benefits in person — simply show your member ID or the email on file at the admissions desk when you arrive.",
	},
	{
		question: "Can I bring guests to the Museum?",
		answer:
			"Yes! Members receive 50% off general admission for up to two accompanying guests on every visit. Additional guests beyond two receive 10% off. Guest tickets must be purchased at the member discount price at the time of your visit.",
	},
	{
		question: "How do I renew my membership?",
		answer:
			"You can renew online through our membership portal, or renew in person at the Museum. We recommend renewing before your expiration date to avoid any lapse in benefits. You'll receive a renewal reminder by email.",
	},
	{
		question: "Can I upgrade my membership level?",
		answer:
			"Yes, you can upgrade your membership at any time during the year. You will only pay the difference between your current and new membership level. Contact our Membership team to initiate an upgrade.",
	},
	{
		question: "Are memberships refundable or transferable?",
		answer:
			"Memberships are non-refundable and non-transferable. If you have questions about your membership, please contact our Membership team at membership@childrensmuseumatlanta.org.",
	},
	{
		question: "What if I forget my membership card?",
		answer:
			"No problem — just provide the email address associated with your membership at the admissions desk and our team can look up your account.",
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

export default function MembershipInfoPageContent() {
	const [activeSection, setActiveSection] = useState("levels-benefits");
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
					<h1 className="text-white mb-[16px]">Membership Information</h1>
					<p className="text-white/75 max-w-[580px]">
						Everything you need to know about your CMA membership — benefits, discounts, and how to make the most of every visit.
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
									Join Atlanta's favorite children's museum and enjoy unlimited visits, exclusive perks, and more.
								</p>
								<a
									href={BLACKBAUD_MEMBERSHIPS}
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
								>
									Join Today
								</a>
							</div>
						</aside>

						{/* Main content */}
						<div className="flex-1 min-w-0">
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">

								{/* ── Membership Benefits ── */}
								<div id="levels-benefits" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Membership Levels & Benefits</h2>

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
											Visit the Member Portal and log in using the email address associated with your membership. You can also access your benefits in person — simply show your member ID or the email on file at the admissions desk when you arrive.
										</p>
									</div>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">Questions or Need Support?</h3>
										<p className="text-cma-navy">
											Our Membership team is here to help with any account questions, changes, or renewal assistance. Reach out anytime.
										</p>
										<div>
											<a
												href="mailto:membership@childrensmuseumatlanta.org"
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											>
												Contact Membership Team
											</a>
										</div>
									</div>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">Gift a Membership</h3>
										<p className="text-cma-navy">
											A Children's Museum of Atlanta membership is a thoughtful and meaningful gift that encompasses a love for learning, quality family time, and fosters a sense of wonder and exploration in a child's life. Give the gift of unlimited play to someone you love.
										</p>
										<p className="text-cma-navy">
											Questions? Contact our Membership Department at{" "}
											<a
												href="mailto:membership@childrensmuseumatlanta.org"
												className="cma-text-link"
											>
												membership@childrensmuseumatlanta.org
											</a>
											{" "}to get started.
										</p>
										<div>
											<a
												href={BLACKBAUD_MEMBERSHIPS}
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											>
												Gift a Membership
											</a>
										</div>
									</div>
								</div>

								<Divider />

								{/* ── Join / Renew ── */}
								<div id="join-renew" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Join / Renew</h2>
									<p className="text-cma-navy">
										Ready to become a member or renew for another year? Choose the plan that fits your family — starting at just $125/year — and join online in minutes.
									</p>
									<p className="text-cma-navy">
										Have questions? Contact our Membership team at{" "}
										<a
											href="mailto:membership@childrensmuseumatlanta.org"
											className="cma-text-link"
										>
											membership@childrensmuseumatlanta.org
										</a>
										{" "}or call (404) 527-3693.
									</p>
									<div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
										<a
											href={BLACKBAUD_MEMBERSHIPS}
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full sm:w-auto"
										>
											Join or Renew Online
										</a>
										<a
											href="#/memberships"
											className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto"
										>
											Compare Plans
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
