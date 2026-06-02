import {
	faBook,
	faBriefcase,
	faBirthdayCake,
	faGraduationCap,
	faHandHoldingHeart,
	faMinus,
	faPlus,
	faTicket,
	faUsers,
	faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import imgCutCMA from "../../assets/cutCMA.png";

// ── Data ────────────────────────────────────────────────────────────────────

const sections = [
	{ id: "general-info", label: "General Info" },
	{ id: "department-contacts", label: "Department Contacts" },
	{ id: "hours-address", label: "Hours & Address" },
	{ id: "contact-form", label: "Contact Form" },
	{ id: "faqs", label: "FAQs" },
	{ id: "helpful-links", label: "Helpful Links" },
];

const departments = [
	{
		icon: faTicket,
		color: "bg-cma-teal-dark",
		name: "Tickets & Visits",
		phone: "(404) 527-3693",
		phoneTel: "4045273693",
		description: "Reservations, group sales, gift certificates, re-entry, and lost & found.",
		cta: "Buy Tickets",
		ctaHref: "#/book-your-visit",
	},
	{
		icon: faUsers,
		color: "bg-cma-orange",
		name: "Membership",
		phone: "(404) 527-3693",
		phoneTel: "4045273693",
		description: "Join, renew, manage your membership, gift memberships, and member benefits.",
		cta: "View Memberships",
		ctaHref: "#/memberships",
	},
	{
		icon: faHandHoldingHeart,
		color: "bg-cma-slate",
		name: "Donations & Giving",
		phone: "(404) 655-5178",
		phoneTel: "4046555178",
		description: "Individual giving, corporate sponsorships, planned gifts. Contact our Director of Strategic Advancement & Marketing.",
		cta: "Donate",
		ctaHref: "#/donate",
	},
	{
		icon: faGraduationCap,
		color: "bg-cma-teal",
		name: "Education & Field Trips",
		phone: "(404) 655-5437",
		phoneTel: "4046555437",
		description: "Field trips, Museum On-the-Go, Scout programs, and Educator Day.",
		cta: "For Educators",
		ctaHref: "#/educators",
	},
	{
		icon: faBirthdayCake,
		color: "bg-[#e05c9a]",
		name: "Birthday Parties & Private Events",
		phone: "(404) 527-3693",
		phoneTel: "4045273693",
		description: "Birthday party packages, private events, and group bookings for 10–30 people.",
		cta: "Book a Party",
		ctaHref: "#/book-your-visit",
	},
	{
		icon: faBriefcase,
		color: "bg-cma-navy",
		name: "Careers & Volunteering",
		phone: "Apply online only",
		phoneTel: null,
		description: "Career openings, volunteer opportunities, and internships.",
		cta: "Contact HR",
		ctaHref: "mailto:hr@childrensmuseumatlanta.org",
	},
];

const regularHours = [
	{ day: "Monday", hours: "10:00 AM – 3:30 PM" },
	{ day: "Tuesday", hours: "10:00 AM – 3:30 PM" },
	{ day: "Wednesday", hours: "Closed" },
	{ day: "Thursday", hours: "10:00 AM – 3:30 PM" },
	{ day: "Friday", hours: "10:00 AM – 3:30 PM" },
	{ day: "Saturday", hours: "9:30 AM – 4:30 PM" },
	{ day: "Sunday", hours: "9:30 AM – 4:30 PM" },
];

const holidayHours = [
	{ day: "New Year's Day", hours: "10:00 AM – 3:30 PM" },
	{ day: "Memorial Day", hours: "10:00 AM – 3:30 PM" },
	{ day: "July 4th", hours: "10:00 AM – 3:30 PM" },
	{ day: "Labor Day", hours: "10:00 AM – 3:30 PM" },
	{ day: "Thanksgiving", hours: "Closed" },
	{ day: "Christmas Eve", hours: "10:00 AM – 3:30 PM" },
	{ day: "Christmas Day", hours: "Closed" },
];

const faqs = [
	{
		question: "What does my admission ticket include?",
		answer:
			"General admission tickets include unlimited access to all permanent exhibit floors, the Super Spectacular Science Show on stage, and access to featured traveling exhibits (included in general admission). Tickets are valid for one-time entry on the date of purchase.",
	},
	{
		question: "How do I buy tickets?",
		answer:
			"Tickets can be purchased online at childrensmuseumatlanta.org or at the door on the day of your visit. Advance online purchase is recommended, especially on weekends and holidays.",
	},
	{
		question: "Do you offer group rates?",
		answer:
			"Yes — groups of 11 or more qualify for group pricing. Contact our Reservations team at reservations@childrensmuseumatlanta.org or (404) 527-3693 to book and receive group pricing details.",
	},
	{
		question: "Where do I park?",
		answer:
			"We recommend pre-purchasing parking at 236 Williams Street, one block away. Full-size buses can park at the Georgia World Congress Center Marshalling Yard (purchase online through GWCC). MARTA's Dome/GWCC/Philips Arena/CNN Center station is a short walk from the Museum.",
	},
	{
		question: "Can I rent the Museum for a private event?",
		answer:
			"Yes — we offer private event rentals for birthday parties and corporate events. Contact our Reservations team at reservations@childrensmuseumatlanta.org for availability and pricing.",
	},
];

const helpfulLinks = [
	{
		icon: faTicket,
		color: "bg-cma-teal-dark",
		label: "Plan Your Visit",
		description: "Hours, parking, what to bring, food & amenities.",
		cta: "Learn More",
		href: "#/plan-your-visit",
	},
	{
		icon: faTicket,
		color: "bg-cma-orange",
		label: "Buy Tickets",
		description: "Pricing, discounts, and group rates.",
		cta: "Buy Tickets",
		href: "#/book-your-visit",
	},
	{
		icon: faBook,
		color: "bg-cma-slate",
		label: "Exhibits",
		description: "Current & upcoming exhibits, daily programs.",
		cta: "Learn More",
		href: "#/exhibits",
	},
	{
		icon: faWheelchair,
		color: "bg-cma-teal",
		label: "Accessibility",
		description: "Sensory Friendly Playtime, wheelchair access, service animals.",
		cta: "Learn More",
		href: "#/plan-your-visit",
	},
	{
		icon: faUsers,
		color: "bg-[#e05c9a]",
		label: "Membership",
		description: "Join or renew, savings calculator.",
		cta: "Learn More",
		href: "#/memberships",
	},
	{
		icon: faBook,
		color: "bg-cma-navy",
		label: "Rules & Policies",
		description: "Museum policies, refunds, and terms & conditions.",
		cta: "Learn More",
		href: "#/plan-your-visit",
	},
];

// ── Helpers ──────────────────────────────────────────────────────────────────

const inputClass =
	"px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy placeholder:text-cma-navy/30 outline-none focus:border-cma-teal-dark transition-colors w-full";
const labelClass = "text-cma-navy font-bold text-[13px]";

function scrollToSection(id: string) {
	const el = document.getElementById(id);
	if (!el) return;
	const top = el.getBoundingClientRect().top + window.scrollY - 140;
	window.scrollTo({ top, behavior: "smooth" });
}

function Divider() {
	return <div className="bg-black/10 h-px w-full" />;
}

function HoursTable({ rows }: { rows: { day: string; hours: string }[] }) {
	return (
		<div className="flex flex-col">
			{rows.map(({ day, hours }) => (
				<div key={day} className="flex items-center justify-between py-[10px] border-b border-black/8 last:border-0 text-[13px]">
					<span className="font-medium text-cma-navy">{day}</span>
					<span className={hours === "Closed" ? "font-bold text-cma-navy" : "text-cma-navy/60"}>
						{hours}
					</span>
				</div>
			))}
		</div>
	);
}

// ── Component ────────────────────────────────────────────────────────────────

export default function ContactPage() {
	const [activeSection, setActiveSection] = useState("general-info");
	const [openFaq, setOpenFaq] = useState<number | null>(0);

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
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			{/* Banner */}
			<section className="relative overflow-hidden bg-cma-navy">
				<img src={imgCutCMA} alt="" aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom" />
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container py-[80px] md:py-[120px] relative flex flex-col items-center text-center">
					<p className="cma-eyebrow text-cma-teal mb-[16px]">Children's Museum of Atlanta</p>
					<h1 className="text-white mb-[16px]">Please Contact Us Today</h1>
					<p className="text-white/75 max-w-[560px]">
						Have a question or need help planning your visit? Our team is here for you.
					</p>
				</div>
			</section>

			{/* Sidebar content */}
			<section className="bg-cma-cream py-[60px] md:py-[80px]">
				<div className="cma-section-container">
					{/* Mobile pill nav */}
					<div className="lg:hidden mb-[24px]">
						<div className="cma-pill-scroll">
							{sections.map((s) => (
								<button
									key={s.id}
									onClick={() => scrollToSection(s.id)}
									className={`cma-nav-pill ${activeSection === s.id ? "cma-nav-pill-active" : "cma-nav-pill-inactive"}`}
								>
									{s.label}
								</button>
							))}
						</div>
					</div>

					<div className="flex gap-[40px] xl:gap-[56px] items-start">
						{/* Sticky sidebar */}
						<aside className="hidden lg:flex flex-col gap-[20px] w-[210px] shrink-0 sticky top-[140px] self-start">
							<div className="bg-white rounded-[20px] border border-[rgba(107,126,160,0.15)] p-[20px] flex flex-col gap-[4px]">
								<p className="cma-eyebrow text-cma-navy/40 text-[10px] mb-[12px]">Jump to</p>
								{sections.map((s) => (
									<button
										key={s.id}
										onClick={() => scrollToSection(s.id)}
										className={`flex items-center gap-[10px] py-[8px] px-[10px] rounded-[10px] text-[13px] font-bold leading-[1.3] transition-colors w-full text-left ${
											activeSection === s.id
												? "bg-cma-navy/5 text-cma-navy"
												: "text-cma-navy/45 hover:text-cma-navy hover:bg-cma-navy/5"
										}`}
									>
										<span className={`w-[6px] h-[6px] rounded-full shrink-0 transition-colors ${activeSection === s.id ? "bg-cma-orange" : "bg-cma-navy/20"}`} />
										{s.label}
									</button>
								))}
							</div>

							<div className="bg-cma-navy rounded-[20px] p-[20px] flex flex-col gap-[12px]">
								<p className="font-extrabold text-[14px] text-white leading-[1.3]">Call Us Directly</p>
								<a href="tel:4046595437" className="font-extrabold text-[20px] text-cma-orange leading-none hover:text-cma-orange-dark transition-colors">
									404.659.5437
								</a>
								<p className="text-white/60 text-[12px]">Mon–Fri 9 AM–5 PM</p>
							</div>
						</aside>

						{/* Main content */}
						<div className="flex-1 min-w-0">
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">

								{/* ── General Info ── */}
								<div id="general-info" className="flex flex-col gap-[16px]">
									<h2 className="text-cma-navy">Contact Us</h2>
									<p className="text-cma-navy">
										Have a question or need help planning your visit? Our team is here for you. Reach out by phone, use the form below, or find the right department.
									</p>
								</div>

								<Divider />

								{/* ── Department Contacts ── */}
								<div id="department-contacts" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Department Contacts</h2>
									<p className="text-cma-navy/70">Reach out directly to the team that can help you most.</p>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
										{departments.map((dept) => (
											<div key={dept.name} className="border border-black/8 rounded-[20px] p-[20px] flex flex-col gap-[12px]">
												<div className="flex items-start gap-[12px]">
													<div className={`${dept.color} size-[36px] rounded-full flex items-center justify-center shrink-0`}>
														<FontAwesomeIcon icon={dept.icon} className="text-white text-[14px]" />
													</div>
													<div className="flex flex-col gap-[2px] flex-1 min-w-0">
														<p className="font-extrabold text-cma-navy text-[15px] leading-[1.2]">{dept.name}</p>
														{dept.phoneTel ? (
															<a href={`tel:${dept.phoneTel}`} className="text-cma-teal-dark font-bold text-[14px] hover:underline">
																{dept.phone}
															</a>
														) : (
															<p className="text-cma-navy/50 text-[13px] italic">{dept.phone}</p>
														)}
													</div>
												</div>
												<p className="text-cma-navy/65 text-[13px] leading-[1.5]">{dept.description}</p>
												<a href={dept.ctaHref} className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start text-[13px] !py-[8px] !px-[16px]">
													{dept.cta}
												</a>
											</div>
										))}
									</div>
								</div>

								<Divider />

								{/* ── Hours & Address ── */}
								<div id="hours-address" className="flex flex-col gap-[24px]">
									<h2 className="text-cma-navy">Hours & Address</h2>

									<div className="flex flex-col xl:flex-row gap-[32px]">
										{/* Hours columns */}
										<div className="flex flex-col gap-[24px] flex-1 min-w-0">
											<div className="flex flex-col gap-[12px]">
												<h3 className="text-cma-navy !text-[16px] font-bold">Operating Hours</h3>
												<HoursTable rows={regularHours} />
											</div>
											<div className="flex flex-col gap-[12px]">
												<h3 className="text-cma-navy !text-[16px] font-bold">Holiday Hours</h3>
												<HoursTable rows={holidayHours} />
											</div>
										</div>

										{/* Address */}
										<div className="w-full xl:w-[300px] shrink-0 flex flex-col gap-[16px]">
											<div className="flex flex-col gap-[6px]">
												<h3 className="text-cma-navy !text-[16px] font-bold">Address</h3>
												<a
													href="https://maps.google.com/?q=275+Centennial+Olympic+Park+Dr+NW+Atlanta+GA+30313"
													target="_blank"
													rel="noopener noreferrer"
													className="text-cma-teal-dark leading-[1.65] hover:underline"
												>
													275 Centennial Olympic Park Dr NW<br />Atlanta, GA 30313
												</a>
												<a href="tel:4046595437" className="text-cma-teal-dark font-black text-[18px] leading-none hover:underline">
													404-659-5437
												</a>
											</div>
											<div className="flex gap-[12px]">
												{[
													{ icon: faFacebook, href: "https://www.facebook.com/childrensmuseumofatlanta", label: "Facebook" },
													{ icon: faInstagram, href: "https://www.instagram.com/childrensmuseumofatlanta/", label: "Instagram" },
													{ icon: faTiktok, href: "https://www.tiktok.com/@childrensmuseumatlanta", label: "TikTok" },
												].map(({ icon, href, label }) => (
													<a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="cma-social-btn-filled">
														<FontAwesomeIcon icon={icon} className="text-[16px] text-white" />
													</a>
												))}
											</div>
											<div className="rounded-[16px] overflow-hidden h-[160px]">
												<iframe
													title="Children's Museum of Atlanta map"
													src="https://maps.google.com/maps?q=275+Centennial+Olympic+Park+Dr+NW,+Atlanta,+GA+30313&output=embed"
													width="100%"
													height="100%"
													style={{ border: 0 }}
													allowFullScreen
													loading="lazy"
													referrerPolicy="no-referrer-when-downgrade"
												/>
											</div>
											<div className="flex gap-[10px] flex-wrap">
												<a href="#/book-your-visit" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
													Buy Tickets
												</a>
												<a href="#/plan-your-visit" className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black">
													Parking Guide
												</a>
											</div>
										</div>
									</div>
								</div>

								<Divider />

								{/* ── Contact Form ── */}
								<div id="contact-form" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Contact Form</h2>
									<p className="text-cma-navy">
										Fill out the form below and our team will get back to you within 1–2 business days. For urgent matters, please call{" "}
										<a href="tel:4046595437" className="cma-text-link">(404) 659-5437</a>.
									</p>
									<div className="bg-cma-teal-pale rounded-[20px] p-[24px] md:p-[32px]">
										<form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-[16px]">
											<h3 className="text-cma-navy !text-[18px]">Contact Us Form</h3>
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
												<div className="flex flex-col gap-[6px]">
													<label className={labelClass}>First Name *</label>
													<input type="text" placeholder="First Name" className={inputClass} />
												</div>
												<div className="flex flex-col gap-[6px]">
													<label className={labelClass}>Last Name *</label>
													<input type="text" placeholder="Last Name" className={inputClass} />
												</div>
											</div>
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
												<div className="flex flex-col gap-[6px]">
													<label className={labelClass}>Contact Phone Number *</label>
													<input type="tel" placeholder="(000) 000-0000" className={inputClass} />
												</div>
												<div className="flex flex-col gap-[6px]">
													<label className={labelClass}>Contact Email *</label>
													<input type="email" placeholder="you@email.com" className={inputClass} />
												</div>
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Department Topic *</label>
												<select className={inputClass}>
													<option value="">Select a topic</option>
													<option>General Question</option>
													<option>Tickets & Admissions</option>
													<option>Reservations & Group Visits</option>
													<option>Membership</option>
													<option>Education Programs</option>
													<option>Donations & Giving</option>
													<option>Corporate Partnerships</option>
													<option>Events & Rentals</option>
													<option>Birthday Parties</option>
													<option>Press & Media</option>
													<option>Careers & Volunteering</option>
													<option>Accessibility & Accommodations</option>
													<option>Other</option>
												</select>
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Message</label>
												<textarea rows={4} placeholder="Tell us how we can help..." className={`${inputClass} resize-none`} />
											</div>
											<div>
												<button type="submit" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
													Send Message
												</button>
											</div>
										</form>
									</div>
								</div>

								<Divider />

								{/* ── FAQs ── */}
								<div id="faqs" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">FAQs</h2>
									<div className="flex flex-col gap-[12px]">
										{faqs.map((faq, i) => {
											const isOpen = openFaq === i;
											return (
												<div
													key={faq.question}
													className={`rounded-[20px] border-2 border-black/5 overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
												>
													<button
														onClick={() => setOpenFaq(isOpen ? null : i)}
														className="w-full flex items-center justify-between px-[24px] py-[20px] text-left gap-[16px]"
													>
														<span className={`text-cma-navy text-[15px] leading-[1.3] ${isOpen ? "font-black" : "font-semibold"}`}>
															{faq.question}
														</span>
														<FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="text-cma-orange text-[12px] shrink-0" />
													</button>
													{isOpen && (
														<div className="px-[24px] pb-[20px]">
															<p className="text-cma-navy">{faq.answer}</p>
														</div>
													)}
												</div>
											);
										})}
									</div>
								</div>

								<Divider />

								{/* ── Helpful Links ── */}
								<div id="helpful-links" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Helpful Links</h2>
									<p className="text-cma-navy/70">Reach out directly to the team that can help you most.</p>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
										{helpfulLinks.map((link) => (
											<div key={link.label} className="border border-black/8 rounded-[20px] p-[20px] flex flex-col gap-[12px]">
												<div className="flex items-center gap-[10px]">
													<div className={`${link.color} size-[36px] rounded-full flex items-center justify-center shrink-0`}>
														<FontAwesomeIcon icon={link.icon} className="text-white text-[14px]" />
													</div>
													<p className="font-extrabold text-cma-navy text-[15px]">{link.label}</p>
												</div>
												<p className="text-cma-navy/60 text-[13px] leading-[1.5]">{link.description}</p>
												<a href={link.href} className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start text-[13px] !py-[8px] !px-[16px]">
													{link.cta}
												</a>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
