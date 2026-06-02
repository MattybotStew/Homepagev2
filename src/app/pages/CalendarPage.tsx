import {
	faArrowRight,
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useState } from "react";
import imgFaq from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import { allEvents, eventFilters, eventsByCategory } from "../data/events";

const faqs: { q: string; a: ReactNode }[] = [
	{
		q: "Admission & Age Policy",
		a: "Guests ages 1–100 years old will pay for admission. Babies 11 months and younger and members receive free general admission. Advance online ticket purchase is highly encouraged. Walk-up availability is limited. Members are encouraged to reserve tickets for peak times. The Museum does not allow adults to enter alone without a child and requires at least 1 adult (18+) for every 5 children. Call (404) 527-3693 for more information.",
	},
	{
		q: "Arrival Window",
		a: "Select an hour block for your arrival window when purchasing tickets online. If you arrive earlier or later than your arrival window and the Museum is at capacity, you may be asked to wait.",
	},
	{
		q: "Re-Entry",
		a: "Tickets are good for all day after your entry time. Leave and re-enter if capacity permits — get your hand stamped at Security before exiting. Re-entry may not be permitted without the proper stamp.",
	},
	{
		q: "Refund/Exchange Policy",
		a: "Tickets may not be refunded. To reschedule, contact Reservations at (404) 527-3693 or reservations@childrensmuseumatlanta.org.",
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
						<p className="cma-eyebrow text-cma-teal">
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
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
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
								<motion.p
									className="text-cma-navy col-span-full text-center py-[40px]"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
								>
									No events scheduled for this category right now. Check back
									soon!
								</motion.p>
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
											<p className="text-cma-navy/60 font-semibold text-[13px]">{event.badge}</p>
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

					<div className="flex flex-col lg:flex-row gap-8 items-start w-full">
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
						<motion.div
							className="w-full lg:w-[380px] shrink-0 bg-white border-2 border-black/5 rounded-[24px] overflow-hidden"
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
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
