import {

	faArrowRight,

	faCalendarDays,

	faClock,

	faMinus,

	faPlus,

} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatePresence, motion } from "motion/react";

import { type ReactNode, useState } from "react";

import imgFaq from "../../assets/FRONT.png";

import AlertBanner from "../components/AlertBanner";

import Footer from "../components/Footer";

import GridEmptyState from "../components/GridEmptyState";

import Header from "../components/Header";

import MobileHeader from "../components/MobileHeader";

import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";

import ScrollProgress from "../components/ScrollProgress";

import { allEvents, eventFilters, eventsByCategory } from "../data/events";



function SectionBullet({ children }: { children: ReactNode }) {

	return (

		<li className="flex items-start gap-[10px]">

			<span className="w-[6px] h-[6px] rounded-full bg-cma-teal-dark mt-[8px] shrink-0" />

			<span className="text-cma-navy">{children}</span>

		</li>

	);

}



const faqs: { q: string; a: ReactNode }[] = [

	{

		q: "Do I Need To Buy Tickets in Advance?",

		a: "Tickets may be purchased upon arrival. Advance online reservations are strongly encouraged during weekends, holidays, and school breaks, as entry times may sell out.",

	},

	{

		q: "When Are Member-Only Hours?",

		a: "The first hour of play (9:00–10:00 am) is reserved exclusively for Members on Monday, Tuesday, Thursday, and Friday during the school year. There are no Member-Only Hours during school breaks and holidays.",

	},

	{

		q: "When Is Sensory Friendly Playtime?",

		a: (

			<>

				<p className="text-cma-navy">

					We offer Sensory Friendly Playtime on select Sunday mornings from

					9:00–11:00 am.

				</p>

				<p className="text-cma-navy">

					<strong>2026 Dates:</strong> October 4 | November 1 | December 6

					<br />

					<strong>2027 Dates:</strong> January 3 | March 7 | April 4, 11, 18,

					25 | June 6

				</p>

				<p className="text-cma-navy">

					Sensory Friendly Playtime includes a sensory-modified setting,

					limited admission, and sound adjustments. A social story is

					available to help families prepare for their visit. Sensory Packs

					(headphones, sunglasses, and sensory toys) are available upon

					request at the Welcome Center. Our quiet room is always available

					in the Leaping Into Learning exhibit, to the left of the pond.

				</p>

				<p className="text-cma-navy">

					Admission is $17.95 plus tax per person for non-members; free for

					members.

				</p>

			</>

		),

	},

	{

		q: "When Is Preschool Playtime?",

		a: "Preschool Playtime will return in September!",

	},

	{

		q: "Are Events and Daily Programs Included in Admission?",

		a: (

			<>

				<p className="text-cma-navy">

					Yes! Your admission ticket includes:

				</p>

				<ul className="flex flex-col gap-[6px]">

					<SectionBullet>All-day access to 7 hands-on exhibits</SectionBullet>

					<SectionBullet>

						Daily programs and activities, including storytimes, art

						projects, and science demonstrations

					</SectionBullet>

					<SectionBullet>Same-day re-entry (capacity permitting)</SectionBullet>

					<SectionBullet>Stroller parking and family restrooms</SectionBullet>

					<SectionBullet>Sensory-friendly quiet room</SectionBullet>

					<SectionBullet>Snack Stop seating areas</SectionBullet>

				</ul>

				<p className="text-cma-navy mt-[12px]">Admission does not include:</p>

				<ul className="flex flex-col gap-[6px]">

					<SectionBullet>

						Private party rooms or birthday party packages

					</SectionBullet>

					<SectionBullet>Museum Store purchases</SectionBullet>

					<SectionBullet>Food and beverages</SectionBullet>

					<SectionBullet>

						Member-exclusive events and activities

					</SectionBullet>

					<SectionBullet>

						Special events such as TinyCON, Trick-or-Treat, Bubble Bash, and

						Lil'Palooza

					</SectionBullet>

				</ul>

			</>

		),

	},

	{

		q: "How Do I Reserve Tickets for a Special Event?",

		a: "Every special event has its own page on the calendar with a link to purchase tickets. Use the special event filter to find the event page more easily.",

	},

	{

		q: "Do Members Get Discounts on Events?",

		a: "Yes! Members have access to discounted tickets for special events. Log into your Membership account to access the discount.",

	},

	{

		q: "Are There Age Limits for Daily Programs or Special Events?",

		a: "Daily programs and special events are fun for the whole family and are especially designed for children ages 2–8. Preschool Playtime is designed for ages 2–4.",

	},

	{

		q: "Can I Leave and Re-Enter the Museum?",

		a: "Yes! Your ticket is valid for the entire day. Before exiting, stop by Security for a hand stamp — re-entry requires a proper stamp. If the Museum reaches capacity, returning guests may be asked to wait until space becomes available.",

	},

];



export default function CalendarPage() {

	const [activeFilter, setActiveFilter] = useState("All");

	const [openFaq, setOpenFaq] = useState<number | null>(null);



	const events =

		activeFilter === "All" ? allEvents : (eventsByCategory[activeFilter] ?? []);



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



			{/* Hero */}

			<section className="bg-white w-full pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px]">

				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

				<div className="cma-section-container">

					<motion.div

						className="flex flex-col items-center gap-[24px] text-center"

						initial={{ opacity: 0, y: 24 }}

						animate={{ opacity: 1, y: 0 }}

						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}

					>

						<p className="cma-eyebrow text-cma-teal-dark">

							children's museum of atlanta

						</p>

						<h1 className="text-cma-navy">Calendar &amp; Events</h1>

						<p className="text-cma-navy max-w-[560px] font-semibold text-[clamp(16px,2.1vw,24px)] leading-[1.3] tracking-[-0.5px]">

							Discover upcoming events, workshops, and activities at Children's

							Museum of Atlanta.

						</p>

						<div className="flex flex-col sm:flex-row gap-3">

							<a

								onClick={() => document.getElementById("events-grid")?.scrollIntoView({ behavior: "smooth" })}

								className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black"

							>

								Event Calendar

							</a>

							<button

								onClick={() => document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" })}

								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"

							>

								Questions? Go to FAQs

							</button>

						</div>

					</motion.div>

				</div>

			</section>



			{/* Events Grid */}

			<section id="events-grid" className="bg-white w-full pt-[32px] pb-[80px]">

				<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-[80px] flex flex-col gap-[48px]">

					{/* Filter pills */}

					<motion.div

						className="w-full"

						initial={{ opacity: 0, y: 16 }}

						whileInView={{ opacity: 1, y: 0 }}

						viewport={{ once: true }}

						transition={{ duration: 0.6 }}

					>

						<div className="cma-pill-scroll">

							{eventFilters.map((filter) => (

								<button

									key={filter}

									onClick={() => setActiveFilter(filter)}

									className={`cma-nav-pill ${filter === activeFilter ? "cma-nav-pill-active" : "cma-nav-pill-inactive"}`}

								>

									{filter}

								</button>

							))}

						</div>

					</motion.div>



					{/* Cards */}

					<AnimatePresence mode="wait">

						<motion.div

							key={activeFilter}

							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full"

							initial={{ opacity: 0 }}

							animate={{ opacity: 1 }}

							exit={{ opacity: 0 }}

							transition={{ duration: 0.2 }}

						>

							{events.length === 0 ? (

								<GridEmptyState

									eyebrow="Coming Soon"

									heading="Nothing on the calendar yet"

									body="No events scheduled for this category right now. Check back soon — we add new programs and special events throughout the year."

									icon={faCalendarDays}

								>

									{activeFilter !== "All" && (

										<button

											type="button"

											onClick={() => setActiveFilter("All")}

											className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black"

										>

											View All Events

										</button>

									)}

								</GridEmptyState>

							) : (

								events.map((event, index) => (

									<motion.a

										key={event.slug}

										href={`#/events/${event.slug}`}

										className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[32px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"

										initial={{ opacity: 0, y: 20 }}

										animate={{ opacity: 1, y: 0 }}

										transition={{ delay: index * 0.08, duration: 0.5 }}

									>

										<div className="cma-card-img">

											<img

												src={event.image}

												alt={event.title}

												className="absolute inset-0 w-full h-full object-cover"

											/>

										</div>



										<div className="flex flex-col gap-[8px]">

											<p className="text-cma-teal-dark font-bold text-[12px]">{event.categories[0]}</p>

											<p className="font-extrabold text-[22px] md:text-[30px] text-cma-navy leading-[1.3] tracking-[-1px]">

												{event.title}

											</p>

											<p className="text-cma-navy/80 font-semibold text-[13px]">{event.badge}</p>

											{event.eventHours && (
												<p className="text-[13px] font-bold text-cma-orange-dark flex items-center gap-[6px]">
													<FontAwesomeIcon icon={faClock} className="text-[11px]" />
													{event.eventHours}
												</p>
											)}

											{event.separateTicket && (
												<span className="w-fit text-[11px] font-bold text-cma-orange-dark bg-cma-orange/10 px-[10px] py-[4px] rounded-full">
													Separate Ticket Required
												</span>
											)}

										</div>



										<p className="text-cma-navy">{event.description}</p>



										<span className="cma-text-link mt-auto">

											Learn More{" "}

											<FontAwesomeIcon

												icon={faArrowRight}

												className="text-[13px]"

											/>

										</span>

									</motion.a>

								))

							)}

						</motion.div>

					</AnimatePresence>

				</div>

			</section>



			{/* Calendar & Events FAQs */}

			<section id="faqs" className="bg-white w-full py-[80px] md:py-[120px]">

				<div className="cma-section-container flex flex-col gap-12 items-center">

					<motion.h2

						className="text-cma-navy text-center"

						initial={{ opacity: 0, y: 24 }}

						whileInView={{ opacity: 1, y: 0 }}

						viewport={{ once: true, margin: "-80px" }}

						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}

					>

						Calendar &amp; Events FAQs

					</motion.h2>



					<div className="flex flex-col lg:flex-row gap-8 w-full">

						{/* Accordion */}

						<motion.div

							className="flex-1 min-w-0 flex flex-col gap-[10px]"

							initial={{ opacity: 0, y: 24 }}

							whileInView={{ opacity: 1, y: 0 }}

							viewport={{ once: true, margin: "-60px" }}

							transition={{

								duration: 1.0,

								ease: [0.16, 1, 0.3, 1],

								delay: 0.1,

							}}

						>

							{faqs.map((faq, i) => {

								const isOpen = openFaq === i;

								return (

									<div

										key={i}

										className={`border-2 border-black/5 rounded-[24px] overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}

									>

										<button

											className="w-full flex items-center justify-between px-6 py-8 text-left gap-4"

											onClick={() => setOpenFaq(isOpen ? null : i)}

											aria-expanded={isOpen}

										>

											<h3

												className={`${isOpen ? "font-black" : "font-semibold"} text-cma-navy`}

											>

												{faq.q}

											</h3>

											<FontAwesomeIcon

												icon={isOpen ? faMinus : faPlus}

												className="shrink-0 text-cma-orange text-[12px]"

											/>

										</button>

										{isOpen && (

											<div className="px-6 pb-8 flex flex-col gap-2">

												{typeof faq.a === "string" ? (

													<p className="text-cma-navy">{faq.a}</p>

												) : (

													faq.a

												)}

											</div>

										)}

									</div>

								);

							})}

						</motion.div>



						{/* Sidebar card */}

						<div className="w-full lg:w-[380px] shrink-0">

							<motion.div

								className="bg-white border-2 border-black/5 rounded-[24px] overflow-hidden lg:sticky lg:top-[140px]"

								initial={{ opacity: 0, y: 24 }}

								whileInView={{ opacity: 1, y: 0 }}

								viewport={{ once: true, margin: "-60px" }}

								transition={{

									duration: 1.0,

									ease: [0.16, 1, 0.3, 1],

									delay: 0.2,

								}}

							>

								<div className="h-[266px] overflow-hidden rounded-t-[20px]">

									<img

										src={imgFaq}

										alt=""

										className="w-full h-full object-cover"

									/>

								</div>

								<div className="p-6 flex flex-col gap-6">

									<h3 className="text-cma-navy">Still have questions?</h3>

									<p className="text-cma-navy">

										Reach out to our Reservations Team — they're ready to help

										with tickets, group visits, accessibility, and more.

									</p>

									<a

										href="mailto:reservations@childrensmuseumatlanta.org"

										className="cma-text-link"

									>

										Contact Us{" "}

										<FontAwesomeIcon

											icon={faArrowRight}

											className="text-[11px]"

										/>

									</a>

								</div>

							</motion.div>

						</div>

					</div>

				</div>

			</section>



			<PowerOfPlayMarquee />

			<Footer />

		</div>

	);

}

