import {
	faEnvelope,
	faLocationDot,
	faMinus,
	faPhone,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

// ── Data ────────────────────────────────────────────────────────────────────

const generalInfo = [
	{
		icon: faLocationDot,
		color: "bg-cma-teal-dark",
		label: "Address",
		lines: ["275 Centennial Olympic Park Dr NW", "Atlanta, GA 30313"],
		href: "https://maps.google.com/?q=275+Centennial+Olympic+Park+Dr+NW+Atlanta+GA+30313",
		linkLabel: "Get Directions",
	},
	{
		icon: faPhone,
		color: "bg-cma-orange",
		label: "Phone",
		lines: ["404.659.5437"],
		href: "tel:4046595437",
		linkLabel: "Call Us",
	},
	{
		icon: faEnvelope,
		color: "bg-cma-slate",
		label: "General Email",
		lines: ["info@cmatlanta.org"],
		href: "mailto:info@cmatlanta.org",
		linkLabel: "Send Email",
	},
];

const departments = [
	{
		name: "Reservations",
		description: "Field trips, group visits, scout workshops, birthday parties.",
		phone: "404.527.3693",
		email: "reservations@childrensmuseumatlanta.org",
	},
	{
		name: "Education",
		description: "Museum On-the-Go, educator PD, classroom resources.",
		phone: "404.659.5437",
		email: "education@cmatlanta.org",
	},
	{
		name: "Development & Giving",
		description: "Donations, corporate partnerships, legacy giving, giving circles.",
		phone: "404.659.5437",
		email: "kmcneely@childrensmuseumatlanta.org",
	},
	{
		name: "Membership",
		description: "Join, renew, or manage your CMA membership.",
		phone: "404.659.5437",
		email: "membership@childrensmuseumatlanta.org",
	},
	{
		name: "Marketing & Media",
		description: "Press inquiries, media requests, partnership opportunities.",
		phone: "404.659.5437",
		email: "marketing@childrensmuseumatlanta.org",
	},
	{
		name: "Human Resources",
		description: "Career openings, volunteer opportunities, internships.",
		phone: "404.659.5437",
		email: "hr@childrensmuseumatlanta.org",
	},
];

const hours = [
	{ day: "Monday – Friday", time: "10:00 AM – 5:00 PM" },
	{ day: "Saturday", time: "10:00 AM – 5:00 PM" },
	{ day: "Sunday", time: "12:00 PM – 5:00 PM" },
];

const faqs = [
	{
		question: "How do I buy tickets?",
		answer:
			"Tickets can be purchased online at childrensmuseumatlanta.org or at the door on the day of your visit. Advance online purchase is recommended, especially on weekends and holidays.",
	},
	{
		question: "Do you offer group rates?",
		answer:
			"Yes — groups of 11 or more qualify for group pricing. Contact our Reservations team at reservations@childrensmuseumatlanta.org or 404.527.3693 to book and receive group pricing details.",
	},
	{
		question: "Where do I park?",
		answer:
			"We recommend pre-purchasing parking at 236 Williams Street, located one block away. Full-size buses can park at the Georgia World Congress Center Marshalling Yard (purchase online through GWCC). MARTA's Dome/GWCC/Philips Arena/CNN Center station is a short walk from the Museum.",
	},
	{
		question: "Is the Museum accessible?",
		answer:
			"Yes — CMA is fully ADA accessible. We have elevator access, accessible restrooms, stroller parking, and sensory packs available on request. Contact us in advance if you have specific accommodation needs.",
	},
	{
		question: "Can I rent the Museum for a private event?",
		answer:
			"Yes — we offer private event rentals for birthday parties and corporate events. Contact our Reservations team at reservations@childrensmuseumatlanta.org for availability and pricing.",
	},
	{
		question: "How do I inquire about volunteering?",
		answer:
			"We welcome volunteers! Visit our Careers page or email hr@childrensmuseumatlanta.org to learn about current volunteer opportunities and how to apply.",
	},
];

const helpfulLinks = [
	{ label: "Buy Tickets", href: "https://www.childrensmuseumatlanta.org/buy-tickets/" },
	{ label: "Become a Member", href: "#/memberships" },
	{ label: "Plan Your Visit", href: "#/plan-your-visit" },
	{ label: "School Field Trips", href: "#/program/field-trips" },
	{ label: "Donate to CMA", href: "#/donate" },
	{ label: "Current Exhibits", href: "#/exhibits" },
	{ label: "Events Calendar", href: "#/events" },
	{ label: "About CMA", href: "#/about" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

const inputClass =
	"px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy placeholder:text-cma-navy/30 outline-none focus:border-cma-teal-dark transition-colors w-full";
const labelClass = "text-cma-navy font-bold text-[13px]";

function Divider() {
	return <div className="bg-black/10 h-px w-full" />;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function ContactPage() {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden">
				<MobileHeader />
			</div>
			<div className="hidden lg:block">
				<Header />
			</div>
			<div className="hidden lg:block">
				<ScrollProgress />
			</div>

			{/* ── Hero ── */}
			<section className="bg-cma-navy pt-[160px] pb-[80px] overflow-hidden">
				<div className="cma-section-container text-center flex flex-col items-center gap-[16px]">
					<p className="cma-eyebrow text-cma-orange">get in touch</p>
					<h1 className="text-white max-w-[640px]">Contact Us</h1>
					<p className="text-white/70 max-w-[520px]">
						Have a question, need to book a visit, or want to get involved?
						We're here to help — reach out any time.
					</p>
				</div>
			</section>

			{/* ── General Info ── */}
			<section id="general-info" className="bg-cma-cream py-[64px]">
				<div className="cma-section-container flex flex-col gap-[40px]">
					<div className="flex flex-col gap-[8px]">
						<p className="cma-eyebrow text-cma-teal-dark">Find Us</p>
						<h2 className="text-cma-navy">General Information</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
						{generalInfo.map((item) => (
							<div
								key={item.label}
								className="bg-white rounded-[20px] border border-black/5 p-[28px] flex flex-col gap-[16px]"
							>
								<div
									className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${item.color}`}
								>
									<FontAwesomeIcon icon={item.icon} className="text-white text-[18px]" />
								</div>
								<div className="flex flex-col gap-[4px]">
									<p className="font-extrabold text-cma-navy text-[16px]">
										{item.label}
									</p>
									{item.lines.map((line) => (
										<p key={line} className="text-cma-navy/70">
											{line}
										</p>
									))}
								</div>
								<a href={item.href} className="cma-text-link font-bold text-[14px]">
									{item.linkLabel}
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Hours & Address ── */}
			<section id="hours" className="bg-white py-[64px]">
				<div className="cma-section-container flex flex-col lg:flex-row gap-[48px]">
					<div className="flex-1 flex flex-col gap-[32px]">
						<div className="flex flex-col gap-[8px]">
							<p className="cma-eyebrow text-cma-teal-dark">When We're Open</p>
							<h2 className="text-cma-navy">Hours & Location</h2>
						</div>
						<div className="flex flex-col gap-[0px]">
							{hours.map((h) => (
								<div
									key={h.day}
									className="flex items-center justify-between py-[16px] border-b border-black/8 last:border-0"
								>
									<p className="font-bold text-cma-navy">{h.day}</p>
									<p className="text-cma-navy/70">{h.time}</p>
								</div>
							))}
						</div>
						<div className="bg-cma-teal-pale rounded-[16px] p-[20px] flex flex-col gap-[8px]">
							<p className="font-extrabold text-cma-navy">Holiday Hours</p>
							<p className="text-cma-navy/70 text-[14px]">
								Hours may vary on holidays and special event days. Check our{" "}
								<a href="#/events" className="cma-text-link">
									Events Calendar
								</a>{" "}
								or call us at 404.659.5437 for the most up-to-date hours.
							</p>
						</div>
					</div>

					<div className="flex-1 flex flex-col gap-[20px]">
						<div className="bg-cma-navy rounded-[20px] p-[28px] flex flex-col gap-[16px] h-full min-h-[280px] justify-between">
							<div className="flex flex-col gap-[8px]">
								<p className="cma-eyebrow text-cma-orange">Getting Here</p>
								<p className="font-extrabold text-white text-[20px] leading-[1.3]">
									275 Centennial Olympic Park Dr NW
								</p>
								<p className="text-white/70">Atlanta, GA 30313</p>
							</div>
							<div className="flex flex-col gap-[10px]">
								<p className="text-white/70 text-[14px]">
									Located in downtown Atlanta, steps from Centennial Olympic
									Park. Easily accessible via MARTA (Dome/GWCC/Philips
									Arena/CNN Center station).
								</p>
								<a
									href="https://maps.google.com/?q=275+Centennial+Olympic+Park+Dr+NW+Atlanta+GA+30313"
									target="_blank"
									rel="noopener noreferrer"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start"
								>
									Get Directions
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Department Contacts ── */}
			<section id="departments" className="bg-cma-cream py-[64px]">
				<div className="cma-section-container flex flex-col gap-[40px]">
					<div className="flex flex-col gap-[8px]">
						<p className="cma-eyebrow text-cma-teal-dark">Who to Reach</p>
						<h2 className="text-cma-navy">Department Contacts</h2>
						<p className="text-cma-navy max-w-[560px]">
							For the fastest response, contact the department that best matches
							your question.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
						{departments.map((dept) => (
							<div
								key={dept.name}
								className="bg-white rounded-[20px] border border-black/5 p-[24px] flex flex-col gap-[12px]"
							>
								<p className="font-extrabold text-cma-navy text-[16px]">
									{dept.name}
								</p>
								<p className="text-cma-navy/60 text-[13px] leading-[1.5]">
									{dept.description}
								</p>
								<Divider />
								<div className="flex flex-col gap-[6px]">
									<a
										href={`tel:${dept.phone.replace(/\D/g, "")}`}
										className="cma-text-link text-[13px] font-bold"
									>
										<FontAwesomeIcon icon={faPhone} className="mr-[6px] text-[11px]" />
										{dept.phone}
									</a>
									<a
										href={`mailto:${dept.email}`}
										className="cma-text-link text-[13px] font-bold break-all"
									>
										<FontAwesomeIcon icon={faEnvelope} className="mr-[6px] text-[11px]" />
										{dept.email}
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Contact Form ── */}
			<section id="contact-form" className="bg-white py-[64px]">
				<div className="cma-section-container">
					<div className="max-w-[720px] mx-auto flex flex-col gap-[40px]">
						<div className="flex flex-col gap-[8px]">
							<p className="cma-eyebrow text-cma-teal-dark">Send a Message</p>
							<h2 className="text-cma-navy">Contact Form</h2>
							<p className="text-cma-navy">
								Not sure who to contact? Fill out the form below and we'll route
								your message to the right team. Expect a response within 1–2
								business days.
							</p>
						</div>
						<div className="bg-cma-teal-pale rounded-[24px] p-[28px] md:p-[40px]">
							<form
								onSubmit={(e) => e.preventDefault()}
								className="flex flex-col gap-[16px]"
							>
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
										<label className={labelClass}>Email Address *</label>
										<input type="email" placeholder="you@email.com" className={inputClass} />
									</div>
									<div className="flex flex-col gap-[6px]">
										<label className={labelClass}>Phone Number</label>
										<input type="tel" placeholder="(000) 000-0000" className={inputClass} />
									</div>
								</div>
								<div className="flex flex-col gap-[6px]">
									<label className={labelClass}>Topic / Department *</label>
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
										<option>Press & Media</option>
										<option>Careers & Volunteering</option>
										<option>Accessibility & Accommodations</option>
										<option>Other</option>
									</select>
								</div>
								<div className="flex flex-col gap-[6px]">
									<label className={labelClass}>Message *</label>
									<textarea
										rows={5}
										placeholder="Tell us how we can help..."
										className={`${inputClass} resize-none`}
									/>
								</div>
								<div>
									<button
										type="submit"
										className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* ── FAQs ── */}
			<section id="faqs" className="bg-cma-cream py-[64px]">
				<div className="cma-section-container flex flex-col gap-[40px]">
					<div className="flex flex-col gap-[8px]">
						<p className="cma-eyebrow text-cma-teal-dark">Common Questions</p>
						<h2 className="text-cma-navy">FAQs</h2>
					</div>
					<div className="max-w-[800px]">
						<div className="bg-white rounded-[20px] border border-black/5 px-[28px] flex flex-col">
							{faqs.map((faq, i) => (
								<div key={`faq-${i}`} className="border-b border-black/8 last:border-0">
									<button
										onClick={() => setOpenFaq(openFaq === i ? null : i)}
										className="w-full flex items-center justify-between py-[20px] text-left gap-[16px]"
									>
										<span className="font-extrabold text-cma-navy">
											{faq.question}
										</span>
										<FontAwesomeIcon
											icon={openFaq === i ? faMinus : faPlus}
											className="text-cma-orange shrink-0 text-[12px]"
										/>
									</button>
									{openFaq === i && (
										<p className="text-cma-navy pb-[20px]">{faq.answer}</p>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── Helpful Links ── */}
			<section id="helpful-links" className="bg-white py-[64px]">
				<div className="cma-section-container flex flex-col gap-[40px]">
					<div className="flex flex-col gap-[8px]">
						<p className="cma-eyebrow text-cma-teal-dark">Quick Access</p>
						<h2 className="text-cma-navy">Helpful Links</h2>
					</div>
					<div className="flex flex-wrap gap-[12px]">
						{helpfulLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="cma-btn cma-btn-outline-teal font-black"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
