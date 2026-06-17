import {
	faArrowRight,
	faBook,
	faBrush,
	faBuilding,
	faCalendar,
	faClock,
	faDownload,
	faFlask,
	faGlobe,
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
import imgFloor from "../../assets/educators-img-0.webp";
import imgMezz from "../../assets/educators-img-1.webp";
import imgSpring from "../../assets/exhibits-spring-hero.webp";
import imgSummer from "../../assets/exhibits-summer-hero.jpg";

// ── Data ────────────────────────────────────────────────────────────────────

const sections = [
	{ id: "overview", label: "Overview" },
	{ id: "field-trip-details", label: "Field Trip Details" },
	{ id: "learning-zones", label: "Learning Zones" },
	{ id: "educational-standards", label: "Educational Standards" },
	{ id: "field-trip-plus", label: "Field Trip +" },
	{ id: "featured-exhibits", label: "Featured Exhibits" },
	{ id: "faqs", label: "Field Trip FAQs" },
	{ id: "request-visit", label: "Request Visit" },
];

const tripIncludes = [
	"A welcome and brief orientation by a Museum Educator.",
	"Opportunity to explore the Museum's Learning Zones.",
	"Experiencing our Super Spectacular Science Show on stage.",
	"Chaperone responsibilities document and field trip flow guide.",
];

const learningZones = [
	{
		title: "Gateway to the World",
		description:
			"Travel the world and explore six continents and climb among the planets.",
	},
	{
		title: "Fundamentally Food",
		description:
			"Follow the food we eat from farm to table! Milk Buttercup, the Museum's cow, and pick vegetables from a garden. Ship the harvest to the local store and purchase it from the shelves of the grocery. Create a nutritious meal at the Museum's pretend diner.",
	},
	{
		title: "Let Your Creativity Flow",
		description:
			"Explore the science of color at the Museum's paint wall and build topographical landscapes at the augmented reality sand table.",
	},
	{
		title: "Tools for Solutions",
		description:
			"Learn about the six simple machines with the Museum's giant ball machine. Explore electricity and connect pipes at the construction house. Design and test a structure against earthquakes.",
	},
	{
		title: "Step Up to Science",
		description:
			"Learn about the science of light and sound in Catch a Wave. Designed to enhance children's STEAM understanding, Step Up to Science also offers opportunities to explore engineering in Jane's Innovation Station.",
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
		question: "Booking & Deposits",
		answer:
			"Space is limited and dates go quickly, so reserve early! A 50% non-refundable credit card or check deposit is required within two weeks of booking. Have at least three possible dates selected for your visit as well as the number of students and adults (one adult for every five students is required). Final payment for all in-person programs is due on the day of the visit. Call Reservations at 404.527.3693, email reservations@childrensmuseumatlanta.org, or fill out our online request form.",
	},
	{
		question: "Cancellations",
		answer:
			"Call as soon as possible to change a reservation. Reservations are held with a 50% non-refundable deposit. Organizations must cancel within six (6) weeks of the scheduled program to apply the deposit to a different date within the same school year. Rescheduling a program is based on availability. Cancellations made less than six (6) weeks prior to visit will result in forfeiture of 50% deposit.",
	},
	{
		question: "Chaperones",
		answer:
			"The Museum defines a chaperone as any adult (including teachers), 18 years and older attending the field trip. One chaperone is required for every five students. Required chaperones are free at the 1:5 student to chaperone ratio. Chaperones must remain with their students at all times. Group will not be admitted until all required chaperones have arrived. Chaperones beyond the 1:5 ratio must be reserved and paid through the school for an admission fee of $19.95 plus tax per person. For security purposes, adults with tickets purchased separately via website will not be admitted.",
	},
	{
		question: "Capacity",
		answer:
			"The Museum has a maximum field trip capacity of 250 people (this includes students, teachers and all adults). One adult (teachers & caregivers) is required for every 5 students. We require 10 students minimum to qualify for field trip pricing.",
	},
	{
		question: "Lunch",
		answer:
			"There are two rooms available for field trip groups to eat lunch at a rate of $50 per room. Each room has a limited capacity of 36 people (30 students and 6 required chaperones per room). Field trips may book up to 4 lunch sessions per visit (120 total students). Centennial Olympic Park, across the street from the Museum, is a popular picnic lunch destination.",
	},
	{
		question: "Payment",
		answer:
			"School checks made out to Children's Museum of Atlanta, cash, or credit cards (Visa, MasterCard, Discover and American Express), or Bill.com. Please include mailing address for checks. School check or school credit card must be used for tax exempt status.",
	},
	{
		question: "Parking",
		answer:
			"Full-size buses can park at the Georgia World Congress Center Marshalling Yard for a fee. Parking must be purchased online directly through GWCC. Parking is not provided by Children's Museum of Atlanta. Please ask for parking suggestions when booking your field trip. We recommend pre-purchasing parking at 236 Williams Street, located one block away.",
	},
	{
		question: "Sensory Packs",
		answer:
			"The Museum has a limited quantity of sensory packs to borrow during your visit. Sensory packs include headphones, sunglasses, and various fidget toys. Please let Reservations know if you need to reserve any sensory packs for your group.",
	},
	{
		question: "Target Ages",
		answer:
			"Our target ages for field trips are preschool to third grade. Looking for programming for fourth and fifth grade? Check out our Museum On-the-Go programs!",
	},
	{
		question: "Tax Exempt",
		answer:
			"Provide the Museum's Reservations Department with your Tax Exemption Certificate prior to your deposit payment. Refunds cannot be issued for tax that has been paid. Please ensure all forms have been received and your order is accurate prior to arrival.",
	},
];

const tripDetails = [
	{
		icon: faUsers,
		color: "bg-cma-teal-dark",
		label: "Age Range",
		description:
			"PreK through 5th grade — structured by grade level for a tailored experience.",
	},
	{
		icon: faClock,
		color: "bg-cma-orange",
		label: "Visit Time",
		description: "Check-in at 9:30 am. Field trip time is 10:00 am – 12:00 pm.",
	},
	{
		icon: faBuilding,
		color: "bg-cma-slate",
		label: "Group Size",
		description:
			"Minimum 10 students, maximum 250 people including chaperones.",
	},
	{
		icon: faGraduationCap,
		color: "bg-[#3a9e6e]",
		label: "Learning Focus",
		description:
			"Play-based, inquiry-driven exploration aligned to Georgia Standards of Excellence.",
	},
];

const standards = [
	{
		icon: faFlask,
		color: "bg-cma-teal-dark",
		label: "Math & Science",
		description:
			"Hands-on STEAM concepts embedded throughout all exhibit zones.",
	},
	{
		icon: faGlobe,
		color: "bg-cma-orange",
		label: "Social Studies",
		description:
			"Community, culture, and geography explored in Gateway to the World.",
	},
	{
		icon: faBook,
		color: "bg-cma-slate",
		label: "Language Arts",
		description:
			"Literacy and communication skills woven into every facilitated activity.",
	},
	{
		icon: faBrush,
		color: "bg-[#3a9e6e]",
		label: "Arts & STEAM",
		description:
			"Creative expression and engineering in Let Your Creativity Flow and Tools for Solutions.",
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

export default function FieldTripsProgramContent() {
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
						<span className="text-cma-teal-dark">Field Trips</span>
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
									Field Trips
								</h1>
								<h2 className="text-cma-navy !text-[20px] !font-bold !leading-[1.3]">
									Field Trips Information
								</h2>
								<p className="text-cma-navy">
									Self-guided field trips offer an opportunity for your group to
									explore the Museum at their own pace through chaperone-led
									play.
								</p>
								<div className="bg-cma-teal-pale rounded-[16px] p-[24px] flex flex-col gap-[12px]">
									<p className="font-extrabold text-cma-navy">
										Your field trip includes:
									</p>
									<ul className="flex flex-col gap-[8px]">
										{tripIncludes.map((item) => (
											<SectionBullet key={item}>{item}</SectionBullet>
										))}
									</ul>
								</div>
								<p className="text-cma-navy/60 text-[13px] italic">
									*Due to space and time constraints, field trips do not
									participate in the Art Studio and Science Bar.
								</p>
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
										Availability
									</button>
								</div>
							</div>

							{/* Request Visit callout */}
							<div className="bg-cma-teal-pale rounded-[16px] p-[24px] flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[24px]">
								<div className="flex-1">
									<p className="font-extrabold text-cma-navy text-[16px] mb-[6px]">
										Ready to Book?
									</p>
									<p className="text-cma-navy/70 text-[14px]">
										Field trips are self-guided with a 9:30 am arrival time and
										a field trip time of 10 am – 12 pm. A deposit is required to
										confirm your reservation.
									</p>
								</div>
								<button
									onClick={() => scrollToSection("request-visit")}
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black shrink-0"
								>
									Request Visit
								</button>
							</div>

							<Divider />

							{/* ── Field Trip Details ── */}
							<div id="field-trip-details" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Field Trip Details</h2>
								<p className="text-cma-navy">
									Field trips are scheduled for 10 am – 12 pm on Tuesdays,
									Thursdays, Fridays, and select Mondays and Wednesdays.
									Check-in is at 9:30 am. Maximum field trip capacity is 250
									people (this includes students, teachers and adult
									chaperones). The Museum requires one (1) adult for every five
									(5) children.
								</p>
								<p className="text-cma-navy">
									Adult chaperones <strong>must</strong> be paid through the
									school. Adults arriving without a school-purchased ticket will
									be turned away.
								</p>

								<div className="flex flex-col">
									{tripDetails.map((item) => (
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

								<div className="bg-cma-teal-pale rounded-[16px] p-[24px] flex flex-col gap-[12px]">
									<p className="font-extrabold text-cma-navy">
										Lunch Information
									</p>
									<p className="text-cma-navy">
										The Museum has limited lunch space available on a first
										come, first serve basis. Two rooms are available for school
										groups with a maximum of 36 total people per room (30
										students and 6 adults). Both rooms may be booked and must be
										reserved at time of booking. Each room may be booked twice
										maximum per visit (120 student capacity). Alternatively,
										school groups are welcome to walk across the street to
										Centennial Olympic Park for a picnic lunch.
									</p>
									<p className="text-cma-navy/60 text-[13px]">
										Questions about lunch? Contact our Reservations team at
										reservations@childrensmuseumatlanta.org.
									</p>
								</div>
							</div>

							<Divider />

							{/* ── Learning Zones ── */}
							<div id="learning-zones" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Learning Zones</h2>
								<p className="text-cma-navy font-semibold">
									Permanent Exhibits — Explore our 6 year-round permanent
									exhibits!
								</p>
								<div className="flex flex-col gap-[0px]">
									{learningZones.map((zone) => (
										<div
											key={zone.title}
											className="flex flex-col gap-[6px] py-[16px] border-b border-black/8 last:border-0"
										>
											<p className="font-extrabold text-cma-navy">
												{zone.title}
											</p>
											<p className="text-cma-navy/70">{zone.description}</p>
										</div>
									))}
								</div>

								<div className="bg-cma-teal-pale rounded-[16px] p-[20px] flex flex-col gap-[8px]">
									<p className="text-cma-navy text-[13px] font-bold uppercase tracking-wide">
										Additional learning zone for kindergarten and younger
									</p>
									<p className="font-extrabold text-cma-navy mt-[4px]">
										Leaping into Learning
									</p>
									<p className="text-cma-navy/70">
										Catch a colorful fish at our pond, go under our waterfall
										without getting wet. Climb into our tree house and see
										animals from the forest.
									</p>
								</div>
							</div>

							<Divider />

							{/* ── Educational Standards ── */}
							<div
								id="educational-standards"
								className="flex flex-col gap-[24px]"
							>
								<h2 className="text-cma-navy">Educational Standards</h2>
								<p className="text-cma-navy">
									Explore our grade-by-grade standards alignment and discover
									how our field trips support GELDS and Georgia Standards of
									Excellence.
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
								<div>
									<a
										href="#"
										className="cma-btn cma-btn-outline-teal font-black"
									>
										Download Standards Alignment{" "}
										<FontAwesomeIcon
											icon={faDownload}
											className="ml-[6px] text-[13px]"
										/>
									</a>
								</div>
							</div>

							<Divider />

							{/* ── Field Trip + ── */}
							<div id="field-trip-plus" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Field Trip +</h2>
								<div className="bg-cma-navy rounded-[16px] p-[24px] flex flex-col gap-[12px]">
									<p className="cma-eyebrow text-cma-orange">
										Enhanced Experience
									</p>
									<p className="text-white">
										Field Trip+: an enhanced field trip experience featuring
										guided STEAM activities and exclusive access to the Museum
										on select Wednesdays.
									</p>
									<button
										onClick={() => scrollToSection("request-visit")}
										className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start"
									>
										Learn More & Book
									</button>
								</div>
							</div>

							<Divider />

							{/* ── Featured Exhibits ── */}
							<div id="featured-exhibits" className="flex flex-col gap-[32px]">
								<h2 className="text-cma-navy">This Year's Featured Exhibits</h2>
								<div className="flex flex-col gap-[16px]">
									{featuredExhibits.map((exhibit, i) => (
										<motion.div
											key={exhibit.title}
											className="border-2 border-black/5 rounded-[20px] p-[20px] flex flex-col sm:flex-row gap-[20px] sm:items-start"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.5,
												delay: i * 0.08,
												ease: [0.16, 1, 0.3, 1],
											}}
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
													<FontAwesomeIcon
														icon={faArrowRight}
														className="text-[12px]"
													/>
												</a>
											</div>
										</motion.div>
									))}
								</div>
							</div>

							<Divider />

							{/* ── Availability Calendar ── */}
							<div
								id="availability-calendar"
								className="flex flex-col gap-[24px]"
							>
								<h2 className="text-cma-navy">
									Field Trip Availability Calendar
								</h2>
								<p className="text-cma-navy">
									Explore our availability calendar and request your field trip
									today! Our hands-on, play-based field trips are designed to
									engage students, bring your curriculum to life, and make
									learning fun.
								</p>
								<div className="bg-cma-teal-pale rounded-[16px] p-[24px] md:p-[48px] flex flex-col items-center justify-center gap-[16px] text-center">
									<div className="w-[56px] h-[56px] bg-cma-teal-pale rounded-full flex items-center justify-center">
										<FontAwesomeIcon
											icon={faCalendar}
											className="text-cma-teal-dark text-[22px]"
										/>
									</div>
									<p className="font-extrabold text-cma-navy">
										Availability Calendar
									</p>
									<p className="text-cma-navy/60 text-[14px] max-w-[360px]">
										To check availability and reserve your date, contact our
										Reservations team at 404.527.3693 or
										reservations@childrensmuseumatlanta.org.
									</p>
									<button
										onClick={() => scrollToSection("request-visit")}
										className="cma-btn bg-cma-teal-dark text-white hover:bg-cma-navy font-black"
									>
										Request a Date
									</button>
								</div>
							</div>

							<Divider />

							{/* ── Take a Look Inside ── */}
							<div className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Take a Look Inside</h2>
								<p className="text-cma-navy">
									Explore 20,000 square feet of playful exhibits where children
									create, explore, and discover new adventures around every
									corner.
								</p>
								<div>
									<a
										href="#"
										className="cma-btn bg-cma-navy text-white hover:bg-cma-navy-dark font-black"
									>
										Download Social Story{" "}
										<FontAwesomeIcon
											icon={faDownload}
											className="ml-[6px] text-[13px]"
										/>
									</a>
								</div>
							</div>

							<Divider />

							{/* ── Tour the Museum ── */}
							<div className="flex flex-col gap-[24px]">
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[16px]">
									<h2 className="text-cma-navy">Tour the Museum</h2>
									<a
										href="#"
										className="cma-btn cma-btn-outline-teal font-black shrink-0"
									>
										Walk Through Tour
									</a>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
									{[
										{
											image: imgFloor,
											title: "Museum Floor",
											description:
												"Explore six exhibits, the stage, and a sensory-friendly room. In this open, free-flowing space, students explore at their own pace, following curiosity and joy from one hands-on experience to the next, with something new to discover around every corner.",
										},
										{
											image: imgMezz,
											title: "Mezzanine",
											description:
												"Take the piano stairs or elevator to the Mezzanine and play in Step Up to Science and Jane's Innovation Station. Students get hands on with STEM principles while they explore and experiment with the forces and phenomena that make our world wonderful.",
										},
									].map((floor) => (
										<div
											key={floor.title}
											className="border-2 border-black/5 rounded-[20px] overflow-hidden flex flex-col"
										>
											<img
												src={floor.image}
												alt={floor.title}
												className="w-full h-[180px] object-cover"
											/>
											<div className="p-[20px] flex flex-col gap-[10px]">
												<p className="font-extrabold text-cma-navy text-[18px]">
													{floor.title}
												</p>
												<p className="text-cma-navy/70 text-[14px]">
													{floor.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<Divider />

							{/* ── Field Trip FAQs ── */}
							<div id="faqs" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Field Trip FAQs</h2>
								<p className="text-cma-navy">
									Got questions? We've got answers! Find everything you need to
									know about visiting our museum.
								</p>
								<div className="flex flex-col">
									{faqItems.map((faq, i) => (
										<div
											key={`item-${i}`}
											className="border-b border-black/10 last:border-0"
										>
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
										Our team will answer all your questions. We ensure a quick
										response.
									</p>
									<p className="text-cma-blue-light font-bold mt-[8px]">
										Reservations Team
									</p>
								</div>
								<a
									href="tel:4045273693"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black shrink-0"
								>
									<FontAwesomeIcon
										icon={faPhone}
										className="mr-[8px] text-[13px]"
									/>
									Contact Us
								</a>
							</div>

							<Divider />

							{/* ── Request a Visit ── */}
							<div id="request-visit" className="flex flex-col gap-[24px]">
								<h2 className="text-cma-navy">Request a Visit</h2>
								<p className="text-cma-navy">
									Field trips are all self-guided visits with a 9:30 am arrival
									time and a field trip time of 10 am – 12 pm.{" "}
									<em>
										*Please note that our online booking form does not guarantee
										a reservation — our team will reach out to you to verify
										your request. A deposit is required in order to confirm your
										reservation.
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
												<label className={labelClass}>
													Contact First Name *
												</label>
												<input
													type="text"
													placeholder="First Name"
													className={inputClass}
												/>
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>
													Contact Last Name *
												</label>
												<input
													type="text"
													placeholder="Last Name"
													className={inputClass}
												/>
											</div>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>
													Contact Phone Number *
												</label>
												<input
													type="tel"
													placeholder="(000) 000-0000"
													className={inputClass}
												/>
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>Contact Email *</label>
												<input
													type="email"
													placeholder="email@school.edu"
													className={inputClass}
												/>
											</div>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>
													School / Organization Name *
												</label>
												<input
													type="text"
													placeholder="School Name"
													className={inputClass}
												/>
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
												<label className={labelClass}>
													Number of Students *
												</label>
												<input
													type="number"
													min="10"
													max="250"
													placeholder="Min. 10"
													className={inputClass}
												/>
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>
													Date Request – First Choice *
												</label>
												<input
													type="date"
													className={inputClass}
													placeholder="MM/DD/YYYY"
												/>
											</div>
											<div className="flex flex-col gap-[6px]">
												<label className={labelClass}>
													Date Request – Second Choice
												</label>
												<input
													type="date"
													className={inputClass}
													placeholder="MM/DD/YYYY"
												/>
											</div>
										</div>
										<div className="flex flex-col gap-[6px]">
											<label className={labelClass}>
												Additional Notes or Comments
											</label>
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
