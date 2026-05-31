import { useEffect, useState } from "react";
import imgHero from "../../assets/donate-donor-corporate.webp";

const sections = [
	{ id: "overview", label: "Overview" },
	{ id: "why-partner", label: "Why Partner With CMA?" },
	{ id: "sponsor-event", label: "Sponsor an Event" },
	{ id: "sponsor-exhibit", label: "Sponsor an Exhibit" },
	{ id: "matching-gifts", label: "Matching Gifts" },
	{ id: "corporate-membership", label: "Corporate Membership & Bulk Tickets" },
	{ id: "rent-our-space", label: "Rent Our Space" },
	{ id: "volunteer-your-team", label: "Volunteer Your Team" },
	{ id: "in-kind-donations", label: "In-Kind Donations" },
	{ id: "annual-report", label: "Annual Report" },
];

const wishlistItems = [
	{ label: "Sensory Play Studio Renovation", range: "$75,000–$100,000" },
	{ label: "Outdoor Discovery Garden", range: "$150,000–$250,000" },
	{ label: "STEM Innovation Lab", range: "$50,000–$80,000" },
	{ label: "Family Free Day Presenting Sponsor", range: "$10,000–$15,000" },
	{ label: "Community Outreach Van", range: "$45,000" },
	{ label: "Welcome Center Refresh", range: "$25,000–$40,000" },
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
			<section className="relative overflow-hidden bg-cma-navy">
				<div className="absolute inset-0 overflow-hidden pointer-events-none bg-black" aria-hidden>
					<img src={imgHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
					<div className="absolute inset-0 bg-cma-hero-overlay" />
				</div>
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container py-[48px] md:py-[64px]">
					<p className="cma-eyebrow text-cma-orange mb-[16px]">
						Children's Museum of Atlanta
					</p>
					<h1 className="text-white mb-[16px]">Partner With Us at CMA</h1>
					<p className="text-white/75 max-w-[580px]">
						When your company invests in CMA, you invest in Atlanta's children
						and their future. From exhibit sponsorships to volunteer days,
						there's a partnership that fits your goals.
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
									href="mailto:kmcneely@childrensmuseumatlanta.org"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
								>
									Contact Kate McNeely
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
										Corporate leadership is vital to CMA's mission. Your
										partnership doesn't just put your brand in front of thousands
										of Atlanta families — it shapes the early-learning
										experiences of the children who will become tomorrow's
										workforce, neighbors, and leaders. CMA is the only
										organization in Atlanta doing this work. Your investment here
										goes further than anywhere else.
									</p>
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

									<div className="flex flex-col gap-[16px]">
										<h3 className="text-cma-navy">
											Our Wishlist: Make Your Mark on CMA
										</h3>
										<p className="text-cma-navy">
											Every item on this list represents a real opportunity to
											shape the future of play-based learning in Atlanta. Choose
											what resonates with your company's mission and let's build
											it together.
										</p>
										<div className="flex flex-col">
											{wishlistItems.map((item) => (
												<div
													key={item.label}
													className="flex items-center justify-between py-[14px] border-b border-black/8 last:border-0 gap-[16px]"
												>
													<div className="flex items-center gap-[10px]">
														<span className="w-[6px] h-[6px] rounded-full bg-cma-orange shrink-0" />
														<span className="font-bold text-cma-navy">
															{item.label}
														</span>
													</div>
													<span className="text-cma-navy/60 text-[14px] shrink-0">
														{item.range}
													</span>
												</div>
											))}
										</div>
									</div>

									<div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
										<a
											href="#/support/corporate-partners"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full sm:w-auto"
										>
											Explore Partnership Options
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
											href="mailto:kmcneely@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Contact Kate McNeely
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
											href="mailto:kmcneely@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
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
											href="mailto:kmcneely@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Contact Kate McNeely
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
										including free admission, member-exclusive hours, museum
										buy-out discounts, and more. Bulk ticket options are also
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
											href="mailto:kmcneely@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Contact Kate McNeely
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
											href="mailto:kmcneely@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Contact Kate McNeely
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
									<div>
										<a
											href="mailto:kmcneely@childrensmuseumatlanta.org"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Submit an In-Kind Donation Inquiry
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
										of donors, members, and partners like you. Click the button
										below to explore our 2025 Annual Report and see firsthand how
										your investment in play is transforming lives.
									</p>
									<div>
										<a
											href="#"
											className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										>
											Download Annual Report
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
