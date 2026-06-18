import {
	faArrowRight,
	faBook,
	faBrush,
	faCalendar,
	faCertificate,
	faClock,
	faFlask,
	faGraduationCap,
	faMinus,
	faPhone,
	faPlus,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp";
import imgSpring from "../../assets/exhibits-spring-hero.webp";
import imgSummer from "../../assets/exhibits-summer-hero.jpg";
import imgPD from "../../assets/educator-professional.png";

// ── Data ────────────────────────────────────────────────────────────────────

const sections = [
	{ id: "overview", label: "Overview" },
	{ id: "pd-details", label: "PD Details" },
	{ id: "learning-outcomes", label: "Learning Outcomes" },
	{ id: "featured-exhibits", label: "Featured Exhibits" },
	{ id: "faqs", label: "FAQs" },
	{ id: "request-visit", label: "Register" },
];

const pdIncludes = [
	"A facilitated, exhibit-based PD session inside the Museum.",
	"Hands-on exploration of play-based and inquiry-driven strategies.",
	"Take-away resources and classroom implementation guides.",
	"Eligibility for Georgia educator certification renewal hours (PLUs).",
];

const pdDetails = [
	{
		icon: faUsers,
		color: "bg-cma-teal-dark",
		label: "Group Size",
		description: "10–40 educators per session.",
	},
	{
		icon: faClock,
		color: "bg-cma-orange",
		label: "Format",
		description: "Half-day (3 hours) or full-day (6 hours) options available.",
	},
	{
		icon: faGraduationCap,
		color: "bg-cma-slate",
		label: "PLU Credit",
		description:
			"Sessions eligible for Georgia educator certification renewal hours.",
	},
	{
		icon: faCertificate,
		color: "bg-[#3a9e6e]",
		label: "Certificate",
		description:
			"All participants receive a certificate of completion for their records.",
	},
];

const learningOutcomes = [
	{
		title: "Play-Based Learning Strategies",
		description:
			"Explore and practice facilitation techniques that embed play-based, inquiry-driven learning into any classroom subject.",
	},
	{
		title: "STEM Integration",
		description:
			"Discover how to use everyday materials and museum-style provocations to deepen STEM understanding across grade levels.",
	},
	{
		title: "Social-Emotional Learning Through Play",
		description:
			"Learn how unstructured and guided play builds SEL competencies including self-regulation, collaboration, and empathy.",
	},
	{
		title: "Differentiation for Early Childhood",
		description:
			"Gain strategies for meeting diverse learning needs in Pre-K–3rd grade classrooms through flexible, open-ended activities.",
	},
	{
		title: "Observation & Documentation",
		description:
			"Practice observation techniques to assess and document children's learning during play-based exploration.",
	},
];

const featuredExhibits = [
	{
		image: imgSummer,
		eyebrow: "Summer 2026",
		title: "Wild Kratts®: Ocean Adventure",
		description:
			"Immerse young explorers in whole body explorations of ocean habitats and the fascinating creatures within them.",
		href: "#/exhibits/wild-kratts-ocean-adventure",
	},
	{
		image: imgA,
		eyebrow: "Fall 2026",
		title: "Doc McStuffins: The Exhibit",
		description: "Help Doc and her friends in the new McStuffins Toy Hospital!",
		href: "#",
	},
	{
		image: imgSpring,
		eyebrow: "Spring 2027",
		title: "Amazing Castle",
		description:
			"Explore a magical place and time! Find your role in the castle community and wake a sleeping dragon.",
		href: "#",
	},
];

const faqItems = [
	{
		question: "How do I register for a PD session?",
		answer: (
			<>
				Fill out the registration form below or contact our education team at{" "}
				<a href="mailto:education@childrensmuseumatlanta.org" className="underline hover:text-cma-teal-dark transition-colors">
					education@childrensmuseumatlanta.org
				</a>{" "}
				or 404.527.3693. Sessions require a minimum of 10 participants to be confirmed and should be booked at least 4–6 weeks in advance.
			</>
		),
	},
	{
		question: "What PLU credit will we receive?",
		answer:
			"Half-day sessions (3 hours) qualify for 0.3 PLUs; full-day sessions (6 hours) qualify for 0.6 PLUs. All participants receive a certificate of completion. We recommend checking with your district HR department to confirm PLU eligibility in your specific context.",
	},
	{
		question: "Is this PD available for school or district groups?",
		answer:
			"Yes. We welcome individual school teams, full faculty groups, and district-organized cohorts. For groups larger than 40 participants, multiple sessions can be scheduled across the same day.",
	},
	{
		question: "What topics are available?",
		answer:
			"Our core topics include play-based learning strategies, STEM integration, social-emotional learning through play, differentiation for early childhood, and observation & documentation. Custom topic combinations can be discussed during the booking process.",
	},
	{
		question: "Does the PD take place inside the Museum?",
		answer:
			"Yes — sessions take place inside CMA's exhibits, using the Museum's spaces as living laboratories. Participants experience the strategies firsthand as learners before discussing classroom implementation. This embodied approach is central to our PD design.",
	},
	{
		question: "Is there a cost?",
		answer:
			"Pricing varies by format and group size. Grant and Title I funding may be available to offset costs. Contact our education team for a pricing quote and to discuss financial assistance options.",
	},
	{
		question: "What should participants bring?",
		answer:
			"Comfortable clothing and shoes suitable for walking and hands-on activity. All materials, implementation guides, and lunch (for full-day sessions) are provided by CMA.",
	},
	{
		question: "Can we do a Museum On-the-Go session and PD on the same day?",
		answer:
			"Yes — we can combine a morning PD workshop with afternoon Museum On-the-Go classroom visits on the same day for a full-immersion professional learning experience. Contact us to plan a custom schedule.",
	},
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
	const el = document.getElementById(id);
	if (!el) return;
	const top = el.getBoundingClientRect().top + window.scrollY - 140;
	window.scrollTo({ top, behavior: "smooth" });
}

const inputClass =
	"px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy placeholder:text-cma-navy/30 outline-none focus:border-cma-teal-dark transition-colors w-full";
const labelClass = "text-cma-navy font-bold text-[13px]";

function Divider() {
	return <div className="bg-black/10 h-px w-full" />;
}

function SectionBullet({ children }: { children: string }) {
	return (
		<li className="flex items-start gap-[10px]">
			<span className="w-[6px] h-[6px] rounded-full bg-cma-teal-dark mt-[8px] shrink-0" />
			<span className="text-cma-navy">{children}</span>
		</li>
	);
}

// ── Component ────────────────────────────────────────────────────────────────

export default function EducatorPDProgramContent() {
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
		<section className="bg-cma-cream py-[60px] md:py-[80px]">
			<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

			<div className="cma-section-container">
				{/* Breadcrumb + Social */}
				<div className="flex items-center justify-between flex-wrap gap-[12px] mb-[24px]">
					<div className="flex items-center gap-[8px] flex-wrap text-[15px]">
						<a href="#/educators" className="text-cma-navy hover:underline">
							Educators
						</a>
						<span className="text-cma-navy text-[18px]">›</span>
						<span className="text-cma-teal-dark">Educator Professional Development</span>
					</div>
					<div className="flex gap-[16px] items-center shrink-0">
						<a
							href="https://www.facebook.com/childrensmuseumofatlanta"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-social-btn-filled shrink-0"
							aria-label="Share on Facebook"
						>
							<Facebook className="size-5 text-white" />
						</a>
						<a
							href="https://www.instagram.com/childrensmuseumofatlanta/"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-social-btn-filled shrink-0"
							aria-label="Share on Instagram"
						>
							<Instagram className="size-5 text-white" />
						</a>
					</div>
				</div>

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
					{/* ── Sticky sidebar ── */}
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
								Subscribe to Our Educator Newsletter!
							</p>
							<p className="text-white/75 text-[13px] leading-[1.5]">
								Stay updated on upcoming PD sessions, new programs, and
								play-based learning resources for educators.
							</p>
							<input
								type="email"
								placeholder="Your email address"
								className="w-full px-[12px] py-[10px] rounded-[10px] bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-colors"
							/>
							<button
								type="button"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Stay In The Loop!
							</button>
						</div>
					</aside>

					{/* ── Main content ── */}
					<div className="flex-1 min-w-0">
						<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">
							{/* ── Overview ── */}
							<div className="relative">
								<img
									src={imgPD}
									alt="Educator Professional Development"
									className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover rounded-[24px]"
								/>
							</div>

							<div id="overview" className="flex flex-col gap-[24px]">
								<h1 className="text-cma-navy !text-[clamp(28px,3.75vw,48px)] !leading-[1.05] !tracking-[-1px] !font-extrabold">
									Educator Professional Development
								</h1>
								<h2 className="text-cma-navy !text-[20px] !font-bold !leading-[1.3]">
									The Museum as Your Classroom
								</h2>
								<p className="text-cma-navy">
									Invest in your teaching practice with professional development
									workshops designed by and for educators. Our PD sessions take
									place inside CMA's exhibits — using the Museum as a living
									laboratory to model play-based, inquiry-driven learning
									strategies you can take back to your classroom immediately.
								</p>
								<p className="text-cma-navy">
									Available in half-day and full-day formats for groups of 10–40
									educators, our workshops are aligned to Georgia educator
									certification renewal requirements and designed for Pre-K–5
									teachers across all subject areas.
								</p>
								<div className="bg-cma-teal-pale rounded-[16px] p-[24px] flex flex-col gap-[12px]">
									<p className="font-extrabold text-cma-navy">
										Your PD session includes:
									</p>
									<ul className="flex flex-col gap-[8px]">
										{pdIncludes.map((item) => (
											<SectionBullet key={item}>{item}</SectionBullet>
										))}
									</ul>
								</div>
								<div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
									<button
										onClick={() => scrollToSection("faqs")}
										className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto"
									>
										Need More Info? See FAQs
									</button>
									<button
										onClick={() => scrollToSection("request-visit")}
										className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto"
									>
										Register Your Group
									</button>
								</div>
							</div>

							{/* Register callout */}
							<div className="bg-cma-teal-pale rounded-[16px] p-[24px] flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[24px]">
								<div className="flex-1">
									<p className="font-extrabold text-cma-navy text-[16px] mb-[6px]">
										Ready to Register?
									</p>
									<p className="text-cma-navy/70 text-[14px]">
										Groups of 10–40 educators. Half-day or full-day formats.
										Book at least 4–6 weeks in advance to secure your date.
									</p>
								</div>
								<button
									onClick={() => scrollToSection("request-visit")}
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black shrink-0"
								>
									Register Now
								</button>
							</div>

							<Divider />

							{/* ── PD Details ── */}
							<div id="pd-details" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">PD Details</h2>
								<p className="text-cma-navy">
									Sessions take place inside Children's Museum of Atlanta's
									exhibit spaces during closed-Museum hours, ensuring an
									immersive, distraction-free learning environment for your team.
									All materials, resources, and (for full-day sessions) lunch are
									provided.
								</p>

								<div className="flex flex-col">
									{pdDetails.map((item) => (
										<div
											key={item.label}
											className="flex gap-[16px] items-start py-[16px] border-b border-black/8 last:border-0"
										>
											<div
												className={`w-[40px] h-[40px] rounded-full shrink-0 flex items-center justify-center ${item.color}`}
											>
												<FontAwesomeIcon
													icon={item.icon}
													className="text-white text-[14px]"
												/>
											</div>
											<div className="flex flex-col gap-[4px] pt-[2px]">
												<p className="font-extrabold text-cma-navy">
													{item.label}
												</p>
												<p className="text-cma-navy/70">{item.description}</p>
											</div>
										</div>
									))}
								</div>

								<div className="bg-cma-navy rounded-[16px] p-[24px] flex flex-col gap-[12px]">
									<p className="cma-eyebrow text-cma-orange">Custom Sessions</p>
									<p className="text-white">
										Looking for a PD experience tailored to your school's
										specific goals or initiatives? We offer custom-designed
										sessions for districts and school leadership teams. Contact
										our education team to discuss your needs.
									</p>
									<a
										href="mailto:education@childrensmuseumatlanta.org"
										className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start"
									>
										Inquire About Custom PD
									</a>
								</div>
							</div>

							<Divider />

							{/* ── Learning Outcomes ── */}
							<div id="learning-outcomes" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Learning Outcomes</h2>
								<p className="text-cma-navy">
									Participants leave with practical, immediately applicable
									strategies for their classrooms. All outcomes are aligned to
									Georgia educator competencies and early childhood best practices.
								</p>
								<div className="flex flex-col gap-[0px]">
									{learningOutcomes.map((outcome) => (
										<div
											key={outcome.title}
											className="flex flex-col gap-[6px] py-[16px] border-b border-black/8 last:border-0"
										>
											<p className="font-extrabold text-cma-navy">
												{outcome.title}
											</p>
											<p className="text-cma-navy/70">{outcome.description}</p>
										</div>
									))}
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
									{[
										{ icon: faFlask, color: "bg-cma-teal-dark", label: "STEM Integration", description: "Hands-on STEAM concepts across exhibit zones." },
										{ icon: faBook, color: "bg-cma-orange", label: "Literacy Through Play", description: "Story-based and language-rich facilitation strategies." },
										{ icon: faBrush, color: "bg-cma-slate", label: "Creative Exploration", description: "Arts integration and open-ended creative thinking." },
										{ icon: faUsers, color: "bg-[#3a9e6e]", label: "Collaborative Learning", description: "Team-based, social learning environments." },
									].map((item) => (
										<div key={item.label} className="flex gap-[12px] items-start p-[16px] border border-black/8 rounded-[14px]">
											<div className={`w-[36px] h-[36px] rounded-full shrink-0 flex items-center justify-center ${item.color}`}>
												<FontAwesomeIcon icon={item.icon} className="text-white text-[13px]" />
											</div>
											<div className="flex flex-col gap-[4px]">
												<p className="font-extrabold text-cma-navy text-[14px]">{item.label}</p>
												<p className="text-cma-navy/70 text-[13px]">{item.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<Divider />

							{/* ── Featured Exhibits ── */}
							<div id="featured-exhibits" className="flex flex-col gap-[32px]">
								<h2 className="text-cma-navy">Current Traveling Exhibits</h2>
								<p className="text-cma-navy">
									PD sessions are designed around our current exhibit offerings.
									Explore what's on display when your group visits.
								</p>
								<div className="flex flex-col gap-[16px]">
									{featuredExhibits.map((exhibit, i) => (
										<motion.div
											key={exhibit.title}
											className="border-2 border-black/5 rounded-[20px] p-[20px] flex flex-col sm:flex-row gap-[20px] sm:items-start"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
										>
											<img
												src={exhibit.image}
												alt={exhibit.title}
												className="w-full sm:w-[160px] h-[160px] rounded-[14px] object-cover shrink-0"
											/>
											<div className="flex flex-col gap-[10px] flex-1 min-w-0">
												<p className="cma-eyebrow text-cma-teal-dark text-[11px]">
													{exhibit.eyebrow}
												</p>
												<p className="text-cma-navy font-extrabold text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.5px]">
													{exhibit.title}
												</p>
												<p className="text-cma-navy">{exhibit.description}</p>
												<a href={exhibit.href} className="cma-text-link">
													Learn More{" "}
													<FontAwesomeIcon icon={faArrowRight} className="text-[12px]" />
												</a>
											</div>
										</motion.div>
									))}
								</div>
							</div>

							<Divider />

							{/* ── FAQs ── */}
							<div id="faqs" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Educator PD FAQs</h2>
								<p className="text-cma-navy">
									Have questions about our professional development offerings?
									Find answers below.
								</p>
								<div className="flex flex-col">
									{faqItems.map((faq, i) => (
										<div key={`item-${i}`} className="border-b border-black/10 last:border-0">
											<button
												onClick={() => setOpenFaq(openFaq === i ? null : i)}
												className="w-full flex items-center justify-between py-[18px] text-left gap-[16px]"
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
												<p className="text-cma-navy pb-[18px]">{faq.answer}</p>
											)}
										</div>
									))}
								</div>
							</div>

							<Divider />

							{/* ── Still Have Questions? ── */}
							<div className="bg-cma-navy rounded-[20px] p-[24px] md:p-[32px] flex flex-col sm:flex-row sm:items-center gap-[24px]">
								<div className="flex-1">
									<h2 className="text-white !text-[clamp(20px,2vw,28px)] mb-[8px]">
										Still have questions?
									</h2>
									<p className="text-white/75">
										Our education team is ready to help you plan the ideal PD
										experience for your school or district.
									</p>
									<p className="text-cma-blue-light font-bold mt-[8px]">
										Education Team
									</p>
								</div>
								<a
									href="tel:4045273693"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black shrink-0"
								>
									<FontAwesomeIcon icon={faPhone} className="mr-[8px] text-[13px]" />
									Contact Us
								</a>
							</div>

							<Divider />

							{/* ── Register ── */}
							<div id="request-visit" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Register Your Group</h2>
								<p className="text-cma-navy">
									Fill out the form below to register your group for an Educator
									PD session.{" "}
									<em>
										*This form does not guarantee a booking — our education team
										will follow up to confirm availability, format, and details.
									</em>
								</p>
								<div className="bg-cma-teal-pale rounded-[20px] p-[24px] md:p-[32px] flex flex-col gap-[20px]">
									<h3 className="text-cma-navy">PD Registration Form</h3>
									<form
										onSubmit={(e) => e.preventDefault()}
										className="flex flex-col gap-[16px]"
									>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Contact First Name *</label>
												<input type="text" placeholder="First Name" className={inputClass} />
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Contact Last Name *</label>
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
												<input type="email" placeholder="email@school.edu" className={inputClass} />
											</div>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>School / District Name *</label>
												<input type="text" placeholder="School or District Name" className={inputClass} />
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Number of Participants *</label>
												<input type="number" min="10" max="40" placeholder="10–40 educators" className={inputClass} />
											</div>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Preferred Format *</label>
												<select className={inputClass}>
													<option value="">Select format</option>
													<option>Half-day (3 hours)</option>
													<option>Full-day (6 hours)</option>
													<option>No preference</option>
												</select>
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Topic of Interest</label>
												<select className={inputClass}>
													<option value="">Select a topic (optional)</option>
													<option>Play-Based Learning Strategies</option>
													<option>STEM Integration</option>
													<option>Social-Emotional Learning Through Play</option>
													<option>Differentiation for Early Childhood</option>
													<option>Observation & Documentation</option>
													<option>No preference — let CMA choose</option>
												</select>
											</div>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Date Request – First Choice *</label>
												<input type="date" className={inputClass} />
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Date Request – Second Choice</label>
												<input type="date" className={inputClass} />
											</div>
										</div>
										<div className="flex flex-col gap-[6px]">
											<label className={labelClass}>Additional Notes or Goals</label>
											<textarea
												rows={4}
												placeholder="Tell us about your school's current focus areas, any specific learning goals, or special considerations..."
												className={`${inputClass} resize-none`}
											/>
										</div>
										<div>
											<button
												type="submit"
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											>
												Submit Registration
											</button>
										</div>
									</form>
								</div>
							</div>

							{/* ── Availability Calendar ── */}
							<div className="bg-cma-teal-pale rounded-[16px] p-[24px] md:p-[48px] flex flex-col items-center justify-center gap-[16px] text-center">
								<div className="w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center">
									<FontAwesomeIcon icon={faCalendar} className="text-cma-teal-dark text-[22px]" />
								</div>
								<p className="font-extrabold text-cma-navy">Check Availability</p>
								<p className="text-cma-navy/60 text-[14px] max-w-[360px]">
									To check available PD dates and reserve your group's session,
									contact our Education team at 404.527.3693 or{" "}
									<a href="mailto:education@childrensmuseumatlanta.org" className="underline hover:text-cma-navy transition-colors">
										education@childrensmuseumatlanta.org
									</a>
									.
								</p>
								<a
									href="mailto:education@childrensmuseumatlanta.org"
									className="cma-btn bg-cma-teal-dark text-white hover:bg-cma-navy font-black"
								>
									Email the Education Team
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
