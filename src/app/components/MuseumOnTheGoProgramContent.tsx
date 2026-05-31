import {
	faArrowRight,
	faBook,
	faBrush,
	faBus,
	faCalendar,
	faClock,
	faFlask,
	faGlobe,
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
import imgFloor from "../../assets/educators-img-0.webp";
import imgMezz from "../../assets/educators-img-1.webp";
import imgSpring from "../../assets/exhibits-spring-hero.webp";
import imgSummer from "../../assets/exhibits-summer-hero.jpg";

// ── Data ────────────────────────────────────────────────────────────────────

const sections = [
	{ id: "overview", label: "Overview" },
	{ id: "program-details", label: "Program Details" },
	{ id: "learning-zones", label: "Our Programs" },
	{ id: "educational-standards", label: "Educational Standards" },
	{ id: "featured-exhibits", label: "Featured Exhibits" },
	{ id: "faqs", label: "FAQs" },
	{ id: "request-visit", label: "Request Visit" },
];

const programIncludes = [
	"A portable, hands-on exhibit brought directly to your classroom.",
	"A facilitated 45–60 minute session led by a CMA educator.",
	"Activity kits and take-home materials to extend the learning.",
	"Curriculum-aligned content matched to your current unit of study.",
];

const programDetails = [
	{
		icon: faUsers,
		color: "bg-cma-teal-dark",
		label: "Age Range",
		description: "PreK through 3rd grade — sessions tailored by grade level.",
	},
	{
		icon: faClock,
		color: "bg-cma-orange",
		label: "Session Length",
		description: "45–60 minutes per session, scheduled at your convenience.",
	},
	{
		icon: faBus,
		color: "bg-cma-slate",
		label: "We Come to You",
		description:
			"Our educators travel directly to your school with all materials included.",
	},
	{
		icon: faFlask,
		color: "bg-[#3a9e6e]",
		label: "Learning Focus",
		description:
			"STEAM-aligned, inquiry-driven activities designed for classroom spaces.",
	},
];

const programTiers = [
	{
		label: "Crafted For Littles",
		ages: "Ages 2–4",
		price: "$250",
		subtitle: "$250 for up to 25 children.",
		programs: [
			{ title: "Bug Rescue", description: "Students enjoy a storytime featuring I Love Bugs by Philemon Sturges, learn about different types of bugs, and take part in an interactive activity to save bug friends from a tangled web while building language and fine motor skills. Ends with a simple take-home craft." },
			{ title: "Farmyard Friends", description: "Students experience a day in the life of a farmer as they collect eggs, go on a pig hunt, and create a fun take-home craft. Read-aloud of On the Farm by Brooke Vitale." },
			{ title: "Bounce and Boogie", description: "Interactive, upbeat program with move-along storytime using Stomp, Wiggle and Clap by Rachelle Burk. Students dance and move while learning about colors and numbers, then play a dancing game to grow spatial awareness and gross motor skills." },
		],
	},
	{
		label: "Made for Curious Minds",
		ages: "PreK–3rd Grade",
		price: "$275",
		subtitle: "$275 for up to 25 children.",
		programs: [
			{ title: "Busy Bees, Our Pollinating Friends", description: "Learn about bees and pollination. Includes a poetic story, followed by a pollinating activity where children make a bee and see how pollination works." },
			{ title: "Our Place in Space", description: "STEM journey through our solar system. Read Me and My Place in Space by Joan Sweeney, then create a mini galaxy jar to take home." },
			{ title: "Animals in My Backyard", description: "Story time featuring Over the Forest by Marianne Burke. Discusses ecosystems and Georgia geography. Students create a mask based on native animals." },
			{ title: "Gloopy Glop", description: "Students learn about chemical reactions while conducting a hands-on experiment resulting in Gloopy Glop." },
			{ title: "Homegrown Greens: the Life of a Plant", description: "Read Harlem Grown by Tony Hillery. Learn steps to turn a seed into food. Students grow their own wheatgrass heads." },
			{ title: "Emotion Commotion: What's a Monster to Do?", description: "SEL program using Color Monster by Anna Llenas. Brief yoga session, and students create their own artistic Color Monster." },
			{ title: "Potion Blast: A Rainbow Reaction", description: "Chemistry program. Read Ada Twist, Scientist by Andrea Beaty, then lead a safe scientific experiment." },
			{ title: "B is for Brave", description: "Students learn to identify and express emotions and what it means to be brave. Opens with Jabari Jumps by Gaia Cornwall." },
			{ title: "Jr. Engineering Challenge", description: "Inspired by Rosie Revere, Engineer by Andrea Beaty. Students create a simple gliding device." },
			{ title: "Awesome Architecture", description: "Read Iggy Peck, Architect by Andrea Beaty. Students build structures, combining math and engineering skills." },
			{ title: "Head in the Clouds", description: "Explore the water cycle and types of clouds using Little Raindrop by Melanie Joyce. Students watch a real cloud form and create a cloud in a cup." },
		],
	},
	{
		label: "Igniting Young Innovators",
		ages: "4th–5th Grade",
		price: "$300",
		subtitle: "$300 for up to 25 children.",
		programs: [
			{ title: "Hydrologic Disruption", description: "Students build a structure that can withstand the power of a hurricane. Discusses the hydrologic cycle and climate phenomena." },
			{ title: "Terrific Terrariums: A Sustainable World", description: "Advanced gardeners learn plant-ecosystem interactions: photosynthesis, water cycle. Students make their own terrariums." },
			{ title: "The Mechanics of Aerodynamics", description: "Learn about the four fundamental forces of flight. Build and test a gliding device through a series of challenges." },
			{ title: "A Quest through the Cosmos", description: "Journey through the stars — celestial bodies, stars, planet/moon orbits. Students make models of Earth's orbit." },
		],
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
		question: "How do I book a Museum On-the-Go visit?",
		answer:
			"Contact our education team at education@cmatlanta.org or call 404.527.3693. We'll work with you to schedule a session that fits your calendar and matches your current unit of study. Sessions book up quickly, so we recommend reaching out at least 3–4 weeks in advance.",
	},
	{
		question: "What grades are eligible?",
		answer:
			"Museum On-the-Go serves learners ages 2 through 5th grade across three program tiers: Crafted For Littles (ages 2–4), Made for Curious Minds (PreK–3rd grade), and Igniting Young Innovators (4th–5th grade). Each session is tailored by age and grade level.",
	},
	{
		question: "How much space is needed in the classroom?",
		answer:
			"Our educators are experienced in working within standard classroom spaces. A cleared area of approximately 10×10 feet is ideal, but we can adapt to most classroom configurations.",
	},
	{
		question: "How many students can participate per session?",
		answer:
			"Sessions accommodate up to one standard classroom (approximately 25–30 students). Multiple sessions can be booked on the same visit day to serve additional classrooms.",
	},
	{
		question: "Is there a cost for Museum On-the-Go?",
		answer:
			"Pricing is $250 (ages 2–4), $275 (PreK–3rd grade), or $300 (4th–5th grade) for up to 25 students. Groups of 26–35 add $12 per child. Pricing includes 20 miles round trip; $0.70/mile for additional miles. Financial assistance may be available for Title I schools — contact our education team to inquire.",
	},
	{
		question: "What topics are available?",
		answer:
			"We offer sessions in science & discovery, math & engineering, language arts, social studies, and arts & creativity. Each is aligned to Georgia Standards of Excellence. We can discuss which topics best complement your current curriculum.",
	},
	{
		question: "Can sessions be customized to match our curriculum?",
		answer:
			"Yes — when you book, our education team will ask about your current unit of study and grade level to select the activity kit that best aligns. While we can't create fully custom programs from scratch, our library of kits covers a broad range of topics.",
	},
	{
		question: "How far in advance should we book?",
		answer:
			"We recommend booking at least 3–4 weeks in advance. Popular dates fill quickly, especially in fall and spring. Contact us early to secure your preferred date.",
	},
];

const standards = [
	{
		icon: faFlask,
		color: "bg-cma-teal-dark",
		label: "Math & Science",
		description: "STEAM concepts brought directly into the classroom environment.",
	},
	{
		icon: faGlobe,
		color: "bg-cma-orange",
		label: "Social Studies",
		description: "Community, culture, and geography explored through portable exhibits.",
	},
	{
		icon: faBook,
		color: "bg-cma-slate",
		label: "Language Arts",
		description: "Literacy and communication skills woven into every session.",
	},
	{
		icon: faBrush,
		color: "bg-[#3a9e6e]",
		label: "Arts & STEAM",
		description: "Creative expression and engineering in portable kit formats.",
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

export default function MuseumOnTheGoProgramContent() {
	const [activeSection, setActiveSection] = useState("overview");
	const [openFaq, setOpenFaq] = useState<number | null>(null);
	const [openTier, setOpenTier] = useState<number | null>(null);

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
						<span className="text-cma-teal-dark">Museum On-the-Go</span>
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
								Stay in the know! Our educator newsletter keeps you updated on
								upcoming programs, events, and play-based learning opportunities
								for your classroom and community.
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
							<div id="overview" className="flex flex-col gap-[24px]">
								<h1 className="text-cma-navy !text-[clamp(28px,3.75vw,48px)] !leading-[1.05] !tracking-[-1px] !font-extrabold">
									Museum On-the-Go
								</h1>
								<h2 className="text-cma-navy !text-[20px] !font-bold !leading-[1.3]">
									We Bring the Museum to You
								</h2>
								<p className="text-cma-navy">
									Can't make it to the Museum? Our Museum On-the-Go educators
									travel directly to schools and community centers with portable,
									hands-on exhibits and activity kits designed to turn any space
									into an interactive learning environment.
								</p>
								<div className="bg-cma-teal-pale rounded-[16px] p-[24px] flex flex-col gap-[12px]">
									<p className="font-extrabold text-cma-navy">
										Your session includes:
									</p>
									<ul className="flex flex-col gap-[8px]">
										{programIncludes.map((item) => (
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
										Book a Session
									</button>
								</div>
							</div>

							{/* Book callout */}
							<div className="bg-cma-teal-pale rounded-[16px] p-[24px] flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[24px]">
								<div className="flex-1">
									<p className="font-extrabold text-cma-navy text-[16px] mb-[6px]">
										Ready to Book?
									</p>
									<p className="text-cma-navy/70 text-[14px]">
										Sessions available Monday–Friday. Contact us at least 3–4
										weeks in advance to secure your preferred date.
									</p>
								</div>
								<button
									onClick={() => scrollToSection("request-visit")}
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black shrink-0"
								>
									Request a Session
								</button>
							</div>

							<Divider />

							{/* ── Program Details ── */}
							<div id="program-details" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Program Details</h2>
								<p className="text-cma-navy">
									Museum On-the-Go sessions run 45–60 minutes and are available
									Monday through Friday during school hours. Our educators arrive
									with all materials needed — no preparation required on your end.
									Sessions are designed for one classroom at a time and can be
									repeated for multiple classrooms on the same visit day.
								</p>

								<div className="flex flex-col">
									{programDetails.map((item) => (
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
									<p className="cma-eyebrow text-cma-orange">
										Title I Schools
									</p>
									<p className="text-white">
										Scholarship and grant funding may be available for Title I
										schools. Contact our education team to learn more about
										financial assistance options.
									</p>
									<a
										href="mailto:education@cmatlanta.org"
										className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start"
									>
										Contact Education Team
									</a>
								</div>
							</div>

							<Divider />

							{/* ── Our Programs ── */}
							<div id="learning-zones" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Our Programs</h2>
								<p className="text-cma-navy">
									Choose a program tier that matches your students' age group. Each tier includes multiple programs — select the one that best fits your current unit of study.
								</p>
								<div className="flex flex-col">
									{programTiers.map((tier, i) => (
										<div key={tier.label} className="border-b border-black/10 last:border-0">
											<button
												onClick={() => setOpenTier(openTier === i ? null : i)}
												className="w-full flex items-center justify-between py-[18px] text-left gap-[16px]"
											>
												<div className="flex flex-col gap-[2px]">
													<span className="font-extrabold text-cma-navy">{tier.label}</span>
													<span className="text-[13px] text-cma-navy/50">{tier.ages} · {tier.subtitle}</span>
												</div>
												<FontAwesomeIcon
													icon={openTier === i ? faMinus : faPlus}
													className="text-cma-orange shrink-0 text-[12px]"
												/>
											</button>
											{openTier === i && (
												<div className="flex flex-col gap-[0px] pb-[18px]">
													{tier.programs.map((prog) => (
														<div key={prog.title} className="flex flex-col gap-[4px] py-[12px] border-t border-black/5">
															<p className="font-bold text-cma-navy text-[14px]">{prog.title}</p>
															<p className="text-cma-navy/65 text-[13px] leading-[1.5]">{prog.description}</p>
														</div>
													))}
												</div>
											)}
										</div>
									))}
								</div>
							</div>

							<Divider />

							{/* ── Educational Standards ── */}
							<div id="educational-standards" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Educational Standards</h2>
								<p className="text-cma-navy">
									All Museum On-the-Go sessions are aligned to Georgia Standards
									of Excellence and GELDS (Georgia Early Learning and Development
									Standards) for PreK learners.
								</p>
								<div className="flex flex-col">
									{standards.map((item) => (
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
							</div>

							<Divider />

							{/* ── Featured Exhibits ── */}
							<div id="featured-exhibits" className="flex flex-col gap-[32px]">
								<h2 className="text-cma-navy">This Year's Featured Exhibits</h2>
								<p className="text-cma-navy">
									Extend your Museum On-the-Go experience with a follow-up field
									trip to see our current traveling exhibits in person.
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
								<h2 className="text-cma-navy">Museum On-the-Go FAQs</h2>
								<p className="text-cma-navy">
									Have questions? Find answers to the most common questions about
									booking a Museum On-the-Go session.
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
										Our education team is happy to help you plan the perfect
										session for your students.
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

							{/* ── Request a Visit ── */}
							<div id="request-visit" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Request a Session</h2>
								<p className="text-cma-navy">
									Fill out the form below to request a Museum On-the-Go session
									at your school or community center.{" "}
									<em>
										*This form does not guarantee a booking — our education team
										will follow up to confirm availability and details.
									</em>
								</p>
								<div className="bg-cma-teal-pale rounded-[20px] p-[24px] md:p-[32px] flex flex-col gap-[20px]">
									<h3 className="text-cma-navy">Request a Visit Form</h3>
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
												<label className={labelClass}>School / Organization Name *</label>
												<input type="text" placeholder="School Name" className={inputClass} />
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Grade Level(s) *</label>
												<select className={inputClass}>
													<option value="">Select grade level</option>
													<option>PreK</option>
													<option>Kindergarten</option>
													<option>1st Grade</option>
													<option>2nd Grade</option>
													<option>3rd Grade</option>
													<option>Mixed Grades</option>
												</select>
											</div>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Number of Students *</label>
												<input type="number" min="1" max="30" placeholder="Max 30" className={inputClass} />
											</div>
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
											<label className={labelClass}>Preferred Topic / Subject Area</label>
											<select className={inputClass}>
												<option value="">Select a topic (optional)</option>
												<option>Science & Discovery</option>
												<option>Math & Engineering</option>
												<option>Language & Literacy</option>
												<option>Social Studies & Community</option>
												<option>Arts & Creativity</option>
												<option>No preference — let CMA choose</option>
											</select>
										</div>
										<div className="flex flex-col gap-[6px]">
											<label className={labelClass}>Additional Notes or Comments</label>
											<textarea
												rows={4}
												placeholder="Any additional information, special accommodations, or questions..."
												className={`${inputClass} resize-none`}
											/>
										</div>
										<div>
											<button
												type="submit"
												className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											>
												Submit
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
								<p className="font-extrabold text-cma-navy">Availability Calendar</p>
								<p className="text-cma-navy/60 text-[14px] max-w-[360px]">
									To check availability and reserve your date, contact our
									Education team at 404.527.3693 or education@cmatlanta.org.
								</p>
								<a
									href="mailto:education@cmatlanta.org"
									className="cma-btn bg-cma-teal-dark text-white hover:bg-cma-navy font-black"
								>
									Email the Education Team
								</a>
							</div>

							{/* ── Tour the Museum ── */}
							<Divider />
							<div className="flex flex-col gap-[24px]">
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[16px]">
									<h2 className="text-cma-navy">Bring Your Class In Person</h2>
									<a href="#/program/field-trips" className="cma-btn cma-btn-outline-teal font-black shrink-0">
										View Field Trips
									</a>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
									{[
										{
											image: imgFloor,
											title: "Museum Floor",
											description:
												"Explore six exhibits, the stage, and a sensory-friendly room. Students follow curiosity and joy from one hands-on experience to the next.",
										},
										{
											image: imgMezz,
											title: "Mezzanine",
											description:
												"Take the piano stairs to Step Up to Science and Jane's Innovation Station. Students explore STEM principles in a hands-on, collaborative environment.",
										},
									].map((floor) => (
										<div key={floor.title} className="border-2 border-black/5 rounded-[20px] overflow-hidden flex flex-col">
											<img src={floor.image} alt={floor.title} className="w-full h-[180px] object-cover" />
											<div className="p-[20px] flex flex-col gap-[10px]">
												<p className="font-extrabold text-cma-navy text-[18px]">{floor.title}</p>
												<p className="text-cma-navy/70 text-[14px]">{floor.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
