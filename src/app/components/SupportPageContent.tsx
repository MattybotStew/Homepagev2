import { faDownload, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import imgCutCMA from "../../assets/cutCMA.png";

const sections = [
	{ id: "overview", label: "Overview" },
	{ id: "individual-giving", label: "Individual Giving" },
	{ id: "corporate-foundation", label: "Corporate & Foundation Giving" },
	{ id: "matching-gifts", label: "Matching Gifts" },
	{ id: "planned-giving", label: "Planned Giving, bonds, & securities" },
	{ id: "donate-stock", label: "Donate Stock" },
	{ id: "daf", label: "Add us to your DAF" },
	{ id: "documents", label: "Documents" },
	{ id: "annual-report", label: "Annual Report" },
];

const documents = [
	{
		label: "IRS Letter",
		years: [
			{ year: "2025", href: "#" },
			{ year: "2024", href: "#" },
			{ year: "2023", href: "#" },
		],
	},
	{
		label: "EIN Number",
		years: [
			{ year: "2025", href: "#" },
			{ year: "2024", href: "#" },
			{ year: "2023", href: "#" },
		],
	},
	{
		label: "Annual Report",
		years: [
			{ year: "2025", href: "#" },
			{ year: "2024", href: "#" },
			{ year: "2023", href: "#" },
		],
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

export default function SupportPageContent() {
	const [activeSection, setActiveSection] = useState("overview");
	const [openDoc, setOpenDoc] = useState<number | null>(null);

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
					<h1 className="text-white mb-[16px]">Other Ways to Support</h1>
					<p className="text-white/75 max-w-[580px]">
						Changing the world by sparking every child's imagination, sense of
						discovery and learning through the power of play.
					</p>
				</div>
			</section>

			{/* Sidebar content */}
			<section className="bg-cma-cream py-[60px] md:py-[80px]">
				<div className="cma-section-container">
					{/* Mobile section nav */}
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

					{/* Two-column layout */}
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
									Make a Difference Today
								</p>
								<p className="text-white/75 text-[13px] leading-[1.5]">
									Your gift, no matter the size, helps bring the power of play
									to children and families across Atlanta.
								</p>
								<a
									href="#/donate"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
								>
									Donate Now
								</a>
							</div>
						</aside>

						{/* Main content */}
						<div className="flex-1 min-w-0">
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">

								{/* Overview */}
								<div id="overview" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Support Overview</h2>
									<p className="text-cma-navy">
										We are so grateful for our donors who help us provide the
										opportunity for Atlanta's families to explore and grow through
										hands-on play. As a nonprofit, admissions and membership
										sales cover approximately half of what it takes to bring the
										power of play to over 180,000 children and caregivers each
										year. Your support is vital! Thank you for helping us achieve
										our mission as we envision a bright future for all children —{" "}
										<strong>we couldn't do it without you.</strong>
									</p>
								</div>

								<Divider />

								{/* Individual Giving */}
								<div id="individual-giving" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Individual Giving</h2>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">Giving for Impact</h3>
										<p className="text-cma-navy">
											To make a gift over $5,000 or designate your donation to
											support a specific CMA program, please reach out to Kate
											McNeely, Director of Strategic Advancement and Marketing at{" "}
											<a
												href="mailto:kmcneely@childrensmuseumatlanta.org"
												className="cma-text-link"
											>
												kmcneely@childrensmuseumatlanta.org
											</a>
											.
										</p>
									</div>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">
											Invest in the Power of Play with Your Tax-Deductible Gift.
										</h3>
										<p className="text-cma-navy">
											Make a one time gift today — or become a Sustaining Donor
											by starting your recurring gift. Together, we can spark
											every child's imagination, sense of discovery, and learning
											through the power of play. Please note that the giving
											levels listed above are calculated for annual fund giving
											over the course of the Museum's fiscal year, and do not
											include gifts at special events. Contact Peyton Gordan,
											Strategic Advancement Manager, at{" "}
											<a
												href="mailto:pgordan@childrensmuseumatlanta.org"
												className="cma-text-link"
											>
												pgordan@childrensmuseumatlanta.org
											</a>{" "}
											to learn more, or to find out how to donate via stock gifts
											or donor-advised funds.
										</p>
									</div>

									<div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
										<a
											href="#/donate"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full sm:w-auto"
										>
											Donate Now
										</a>
										<a
											href="mailto:kmcneely@childrensmuseumatlanta.org"
											className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto"
										>
											Contact Kate McNeely
										</a>
									</div>
								</div>

								<Divider />

								{/* Corporate & Foundation Giving */}
								<div
									id="corporate-foundation"
									className="flex flex-col gap-[24px]"
								>
									<h2 className="text-cma-navy">
										Corporate & Foundation Giving
									</h2>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">Corporate Giving</h3>
										<p className="text-cma-navy">
											Corporate leadership is a vital part of supporting the
											Museum's mission. To change the world by sparking every
											child's sense of learning through the power of play,
											Exhibit and program sponsorships, support of community
											outreach initiatives, and corporate volunteerism are all
											ways corporations can contribute to the Museum and invest in
											both Georgia's children and the economic vibrancy of
											Atlanta's downtown district.
										</p>
									</div>

									<div className="flex flex-col gap-[10px]">
										<h3 className="text-cma-navy">Foundation Giving</h3>
										<p className="text-cma-navy">
											Foundation giving is key to the Museum's work in early
											childhood education and family engagement both inside our
											walls and out in the community. Private, family, and
											community foundation support is necessary to implement and
											continue a wide variety of Museum initiatives, including
											those that positively impact under-resourced schools and
											communities in Metro Atlanta.
										</p>
									</div>

									<p className="text-cma-navy font-semibold">
										We offer year-round opportunities for Corporate or Foundation
										contributions to match any marketing or company philanthropy
										budget. For more information, please contact the Advancement
										Team at{" "}
										<a href="tel:4044209185" className="cma-text-link">
											(404) 420-9185
										</a>
										.
									</p>

									<div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
										<a
											href="#/support/corporate-partners"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full sm:w-auto"
										>
											Corporate Memberships
										</a>
										<a
											href="mailto:kmcneely@childrensmuseumatlanta.org"
											className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto"
										>
											Contact Kate McNeely
										</a>
									</div>
								</div>

								<Divider />

								{/* Matching Gifts */}
								<div id="matching-gifts" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Matching Gifts</h2>
									<p className="text-cma-navy">
										Let your company double your impact! Please inquire with your
										Human Resources department to explore how you can increase
										your contribution.
									</p>
									<p className="text-cma-navy">
										If an employee makes a donation to a non-profit organization,
										companies with a matching gift program will make a matching
										gift to the same nonprofit organization based on the
										employee's donation. Companies often donate dollar-for-dollar,
										but some companies triple or quadruple the gift amount.
									</p>
									<div>
										<a
											href="#"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Download Matching Gifts{" "}
											<FontAwesomeIcon
												icon={faDownload}
												className="ml-[6px] text-[13px]"
											/>
										</a>
									</div>
								</div>

								<Divider />

								{/* Planned Giving */}
								<div id="planned-giving" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">
										Planned Giving, bonds, & securities
									</h2>
									<p className="text-cma-navy">
										Your generous support today helps ensure that future
										generations will benefit from play-based, educational,
										learning at the Museum. Planned gifts of all sizes support
										Children's Museum of Atlanta's long-term fiscal stability. We
										are pleased to assist you in a wire transfer when donating
										securities. Click below to reach out to Laura Hilaei,
										Assistant Director of Advancement & Special Events.
									</p>
									<div>
										<a
											href="mailto:lhilaei@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Reach out to Laura Hilaei
										</a>
									</div>
								</div>

								<Divider />

								{/* Donate Stock */}
								<div id="donate-stock" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Donate Stock</h2>
									<p className="text-cma-navy">
										We are honored to accept your gift of stock! Click the button
										below to download the information you need to get started.
									</p>
									<div>
										<a
											href="#"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Download Stock Transfer Letter{" "}
											<FontAwesomeIcon
												icon={faDownload}
												className="ml-[6px] text-[13px]"
											/>
										</a>
									</div>
								</div>

								<Divider />

								{/* DAF */}
								<div id="daf" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Add us to your DAF</h2>
									<p className="text-cma-navy">
										Do you have a donor-advised fund? It's one of the simplest
										and most tax-smart ways to support Children's Museum of
										Atlanta. A donor-advised fund (DAF) allows you to make a
										charitable contribution, receive an immediate tax benefit, and
										then recommend grants to nonprofits like us over time —
										making your philanthropic dollars go further.
									</p>
									<p className="text-cma-navy">
										Recommending a grant to Children's Museum of Atlanta from
										your DAF is easy! Simply search for your fund using the tool
										below and follow the steps to direct your gift to us. Your
										generous support is central to ensuring the power of play to
										over 180,000 children and families each year. Don't see your
										fund listed? Let us know and we'll help you find a way to
										give.
									</p>
									<div>
										<a
											href="#"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Give Now From Your Donor-Advised Fund
										</a>
									</div>
								</div>

								<Divider />

								{/* Documents */}
								<div id="documents" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Documents</h2>
									<p className="text-cma-navy">
										Thank you to the generous individuals, corporations,
										foundations, and government agencies for annually renewing our
										hands-on exhibits, educational programming, and community
										outreach efforts. Want to support the power of play? Donate
										today!
									</p>
									<div className="flex flex-col gap-[12px]">
										{documents.map((doc, i) => {
											const isOpen = openDoc === i;
											return (
												<div
													key={doc.label}
													className={`rounded-[20px] border-2 border-black/5 overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
												>
													<button
														onClick={() => setOpenDoc(isOpen ? null : i)}
														className="w-full flex items-center justify-between px-[24px] py-[20px] text-left"
													>
														<span
															className={`text-cma-navy text-[16px] leading-[1.3] ${isOpen ? "font-black" : "font-semibold"}`}
														>
															{doc.label}
														</span>
														<FontAwesomeIcon
															icon={isOpen ? faMinus : faPlus}
															className="text-cma-orange text-[12px] shrink-0 ml-[16px]"
														/>
													</button>
													{isOpen && (
														<div className="px-[24px] pb-[20px] flex flex-col gap-[8px]">
															{doc.years.map((entry) => (
																<a
																	key={entry.year}
																	href={entry.href}
																	className="flex items-center justify-between py-[10px] border-b border-black/10 last:border-0 group"
																>
																	<span className="font-semibold text-cma-navy group-hover:text-cma-teal-dark transition-colors">
																		{entry.year}
																	</span>
																	<FontAwesomeIcon
																		icon={faDownload}
																		className="text-cma-navy/40 text-[13px] group-hover:text-cma-teal-dark transition-colors"
																	/>
																</a>
															))}
														</div>
													)}
												</div>
											);
										})}
									</div>
								</div>

								<Divider />

								{/* Annual Report */}
								<div id="annual-report" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Annual Report</h2>
									<p className="text-cma-navy">
										Every year, Children's Museum of Atlanta is proud to share
										the story of our impact with the community that makes it all
										possible. Our Annual Report highlights the children and
										families we've served, the programs we've delivered, and the
										milestones we've achieved — all thanks to the generous support
										of donors, members, and partners like you. Click the button
										below to explore our 2025 Annual Report and see firsthand how
										your investment in play is transforming lives.
									</p>
									<div>
										<a
											href="#"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Download Annual Report{" "}
											<FontAwesomeIcon
												icon={faDownload}
												className="ml-[6px] text-[13px]"
											/>
										</a>
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
