import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import imgCutCMA from "../../assets/cutCMA.png";

const annualReports = [
	{
		label: "FY24 Annual Report",
		href: "https://childrensmuseumatlanta.org/wp-content/uploads/2025/03/FY24-Annual-Report.pdf",
	},
	{
		label: "FY23 Annual Report",
		href: "https://childrensmuseumatlanta.org/wp-content/uploads/2024/08/8-7-DIGITAL-FINAL-FY23-Annual-Report-8.5-x-11-in.pdf",
	},
	{
		label: "FY22 Annual Report",
		href: "https://childrensmuseumatlanta.org/wp-content/uploads/2023/12/Annual-Report-FY22-online.pdf",
	},
];

const sections = [
	{ id: "overview", label: "Overview" },
	{ id: "why-partner", label: "Why Partner With CMA?" },
	{ id: "sponsor-event", label: "Sponsor an Event" },
	{ id: "sponsor-exhibit", label: "Sponsor an Exhibit" },
	{ id: "corporate-membership", label: "Corporate Membership & Bulk Tickets" },
	{ id: "rent-our-space", label: "Rent Our Space" },
	{ id: "volunteer-your-team", label: "Volunteer Your Team" },
	{ id: "in-kind-donations", label: "In-Kind Donations" },
	{ id: "annual-report", label: "Annual Report" },
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

export default function CorporatePartnerPageContent() {
	const [activeSection, setActiveSection] = useState("overview");

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
			<section className="relative w-full bg-cma-navy overflow-hidden flex flex-col items-center justify-center py-[80px] md:py-[120px]">
				<img src={imgCutCMA} alt="" aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom" />
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container relative z-[1] flex flex-col items-center gap-8 text-center max-w-[800px] mx-auto">
					<p className="cma-eyebrow text-cma-teal">Children's Museum of Atlanta</p>
					<h1 className="text-white">Partner With Us at CMA</h1>
					<p className="text-cma-blue-light font-semibold text-[clamp(16px,1.67vw,24px)] leading-[1.4] max-w-[620px]">
						When your company invests in CMA, you invest in Atlanta's children
						and their future. From exhibit sponsorships to volunteer days,
						there's a partnership that fits your goals.
					</p>
					<p className="text-white/50 text-[12px] leading-[1.6] max-w-[560px]">
						All gifts are tax-deductible to the fullest extent allowed by law. The Museum is a 501(c)(3) tax-exempt organization. Our tax-ID number is 58-1785484.
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
									Ready to Partner?
								</p>
								<p className="text-white/75 text-[13px] leading-[1.5]">
									Let's find the right fit for your company. Reach out to our
									partnerships team to get started.
								</p>
								<a
									href="mailto:ebrooks@childrensmuseumatlanta.org"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
								>
									Contact Erin Brooks
								</a>
							</div>
						</aside>

						{/* Main content */}
						<div className="flex-1 min-w-0">
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">

								{/* Overview */}
								<div id="overview" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Corporate Partnership</h2>
									<p className="text-cma-navy">
										Corporate leadership is a vital part of supporting the Museum's mission to change the world by sparking every child's sense of learning through the power of play. Exhibit and program sponsorships, support of community outreach initiatives, and corporate volunteerism are all ways corporations can contribute to the Museum and invest in both Georgia's children and the economic vibrancy of Atlanta's downtown district.
									</p>
									<p className="text-cma-navy">
										We offer year-round opportunities for Corporate or Foundation contributions to match any marketing or company philanthropy budget. For more information, please contact the Advancement Team at{" "}
										<a href="tel:4044209195" className="cma-text-link">(404) 420-9195</a>.
									</p>
									<div className="bg-cma-teal-pale rounded-[16px] p-[20px] flex flex-col sm:flex-row sm:items-center gap-[16px] sm:justify-between">
										<div className="flex flex-col gap-[2px]">
											<p className="font-extrabold text-cma-navy text-[15px] leading-[1.3]">
												Erin Brooks
											</p>
											<p className="text-cma-navy/70 text-[13px] leading-[1.4]">
												Director of Strategic Advancement
											</p>
										</div>
										<a
											href="mailto:ebrooks@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start sm:self-auto"
										>
											Contact Erin Brooks
										</a>
									</div>
								</div>

								<Divider />

								{/* Why Partner */}
								<div id="why-partner" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Why Partner With CMA?</h2>
									<p className="text-cma-navy">
										Corporate leadership is vital to CMA's mission. Your
										partnership doesn't just put your brand in front of thousands
										of Atlanta families — it shapes the early-learning
										experiences of the children who will become tomorrow's
										workforce, neighbors, and leaders. CMA is the only
										organization in Atlanta doing this work. Your investment here
										goes further than anywhere else.
									</p>

									<div>
										<a
											href="mailto:ebrooks@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full sm:w-auto"
										>
											Contact Erin Brooks
										</a>
									</div>
								</div>

								<Divider />

								{/* Sponsor an Event */}
								<div id="sponsor-event" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Sponsor an Event</h2>
									<p className="text-cma-navy">
										Put your brand at the heart of Atlanta's most memorable
										family moments. CMA hosts signature events throughout the
										year — from the Tournament for Play golf classic to
										Lit'alonica and the Imagination Ball. Event sponsorships
										offer high-visibility branding opportunities alongside genuine
										community impact, putting your company's name in front of
										thousands of Atlanta families.
									</p>
									<div>
										<a
											href="mailto:ebrooks@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Contact Erin Brooks
										</a>
									</div>
								</div>

								<Divider />

								{/* Sponsor an Exhibit */}
								<div id="sponsor-exhibit" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Sponsor an Exhibit</h2>
									<p className="text-cma-navy">
										A gift to Children's Museum of Atlanta is an investment in
										our children's future. Exhibit sponsorships place your
										company's name at the center of hands-on, play-based learning
										experiences that reach over 180,000 visitors each year. From
										naming rights to custom activations, exhibit partnerships
										offer lasting brand presence in one of Atlanta's most visited
										family destinations.
									</p>
									<div>
										<a
											href="mailto:ebrooks@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Contact Erin Brooks
										</a>
									</div>
								</div>

								<Divider />

								{/* Corporate Membership & Bulk Tickets */}
								<div
									id="corporate-membership"
									className="flex flex-col gap-[20px]"
								>
									<h2 className="text-cma-navy">
										Corporate Membership & Bulk Tickets
									</h2>
									<p className="text-cma-navy">
										Give your team and their families the gift of play. CMA's
										Corporate Membership program offers structured annual packages
										— from 50 to 1,000 employee families — with tiered benefits
										including free admission, museum buy-out discounts, and more. Bulk ticket options are also
										available for companies looking for one-time access.
									</p>
									<div>
										<a
											href="#/memberships"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Learn About Corporate Memberships
										</a>
									</div>
								</div>

								<Divider />

								{/* Rent Our Space */}
								<div id="rent-our-space" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Rent Our Space</h2>
									<p className="text-cma-navy">
										Host your next corporate event in one of Atlanta's most
										unique and inspiring venues. CMA's downtown location offers
										flexible event spaces for private receptions, team volunteer
										days, client entertaining, and full museum buy-outs. Located
										at 275 Centennial Olympic Park Dr NW — steps from major
										Atlanta attractions and easily accessible from across the
										metro area.
									</p>
									<div>
										<a
											href="mailto:rjackson@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Contact Rebecca Jackson
										</a>
									</div>
								</div>

								<Divider />

								{/* Volunteer Your Team */}
								<div
									id="volunteer-your-team"
									className="flex flex-col gap-[20px]"
								>
									<h2 className="text-cma-navy">Volunteer Your Team</h2>
									<p className="text-cma-navy">
										Bring your team together for a day of meaningful impact. CMA
										welcomes corporate volunteer groups to support our exhibits,
										programs, and community outreach initiatives. Volunteer days
										are a powerful way to build team culture, fulfill CSR
										commitments, and invest directly in Atlanta's children and
										families.
									</p>
									<div>
										<a
											href="mailto:ebrooks@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Contact Erin Brooks
										</a>
									</div>
								</div>

								<Divider />

								{/* In-Kind Donations */}
								<div id="in-kind-donations" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">In-Kind Donations</h2>
									<p className="text-cma-navy">
										Not every contribution is financial. CMA welcomes in-kind
										donations of goods, services, and expertise that support our
										exhibits, programs, and daily operations. From supplies and
										technology to professional services, your company's resources
										can make a real difference for the children and families we
										serve.
									</p>
									<div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
										<a
											href="mailto:ebrooks@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full sm:w-auto"
										>
											Submit an In-Kind Donation Inquiry
										</a>
										<a
											href="mailto:ebrooks@childrensmuseumatlanta.org"
											className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto"
										>
											Contact Erin Brooks
										</a>
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
										of donors, members, and partners like you. Click a button
										below to explore our recent Annual Reports and see firsthand
										how your investment in play is transforming lives.
									</p>
									<div className="flex flex-wrap gap-[16px]">
										{annualReports.map((report) => (
											<a
												key={report.label}
												href={report.href}
												target="_blank"
												rel="noopener noreferrer"
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											>
												{report.label}{" "}
												<FontAwesomeIcon
													icon={faDownload}
													className="ml-[6px] text-[13px]"
												/>
											</a>
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
