import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"
import { allEvents, eventsByCategory, eventFilters } from "../data/events"
import imgFaq from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp"

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Admission & Age Policy",
    a: "Our exhibits are developed with children 8 years and younger in mind. All children must be accompanied by a paying adult. Adults visiting without children are not admitted.",
  },
  {
    q: "Arrival Window",
    a: "We recommend arriving at or before your ticketed entry time. You have a 15-minute grace window for late arrivals. If you anticipate being significantly late, please contact our box office at 404-659-5437 so we can do our best to accommodate you.",
  },
  {
    q: "Re-Entry",
    a: "Most families play for about 2 hours. Your tickets include re-entry on the day of your visit, as capacity allows. Please hold on to your ticket or wristband to re-enter.",
  },
  {
    q: "Refund/Exchange Policy",
    a: "All ticket sales are final. Exchanges for a different date or time may be requested up to 24 hours before your scheduled visit by contacting our box office at 404-659-5437. We are unable to process same-day exchanges.",
  },
]

export default function CalendarPage() {
  const [activeFilter, setActiveFilter] = useState("Featured")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const events = activeFilter === "All" ? allEvents : (eventsByCategory[activeFilter] ?? [])

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
            <p className="cma-eyebrow text-cma-teal">children's museum of atlanta</p>
            <h1 className="text-cma-navy">
              Calendar &amp; Events
            </h1>
            <p className="text-cma-navy max-w-[560px] font-semibold text-[clamp(16px,2.1vw,24px)] leading-[1.3] tracking-[-0.5px]">
              Discover upcoming events, workshops, and activities at Children's Museum of Atlanta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#events-grid" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
                Event Calendar
              </a>
              <a href="#faqs" className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black">
                Questions? Go to FAQs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section id="events-grid" className="bg-white w-full py-[80px]">
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
                  No events scheduled for this category right now. Check back soon!
                </motion.p>
              ) : (
                events.map((event, index) => (
                  <motion.div
                    key={event.slug}
                    className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[32px]"
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
                      <div className="absolute bottom-[10px] left-[10px] bg-cma-teal-dark px-[18px] py-[12px] rounded-[8px]">
                        <p className="font-extrabold text-[14px] text-white leading-[1.5] whitespace-nowrap">
                          {event.badge}
                        </p>
                      </div>
                    </div>

                    <p className="font-extrabold text-[22px] md:text-[30px] text-cma-navy leading-[1.3] tracking-[-1px]">
                      {event.title}
                    </p>

                    <p className="text-cma-navy">{event.description}</p>

                    <a href={`#/events/${event.slug}`} className="cma-text-link mt-auto">
                      Learn More <FontAwesomeIcon icon={faArrowRight} className="text-[13px]" />
                    </a>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Calendar & Events FAQs */}
      <section id="faqs" className="bg-cma-cream w-full py-[80px] md:py-[120px]">
        <div className="cma-section-container">
          <div className="flex flex-col lg:flex-row gap-[64px] lg:gap-[80px]">

            {/* Left: FAQs */}
            <div className="flex-1 flex flex-col gap-[40px]">
              <motion.div
                className="flex flex-col gap-[16px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="cma-eyebrow text-cma-teal">Need Help?</p>
                <h2 className="text-cma-navy leading-none tracking-[-1px]">Calendar &amp; Events FAQs</h2>
              </motion.div>

              <div className="flex flex-col gap-[10px]">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i
                  return (
                    <motion.div
                      key={i}
                      className={`border-2 border-black/5 rounded-[24px] overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                    >
                      <button
                        className="w-full flex items-center justify-between px-[24px] py-[20px] md:py-[24px] text-left"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                      >
                        <p className={`${isOpen ? "font-black" : "font-semibold"} text-cma-navy text-[15px] leading-snug pr-4`}>
                          {faq.q}
                        </p>
                        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="shrink-0 text-cma-orange text-[12px]" />
                      </button>
                      {isOpen && (
                        <div className="px-[24px] pb-[24px]">
                          {typeof faq.a === "string" ? <p className="text-cma-navy">{faq.a}</p> : faq.a}
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Still have questions? */}
              <motion.div
                className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] md:p-[32px] flex flex-col gap-[16px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="cma-eyebrow text-cma-teal">Still have questions?</p>
                <p className="font-extrabold text-[20px] text-cma-navy leading-[1.2] tracking-[-0.5px]">
                  Our Reservations Team is here to help.
                </p>
                <p className="text-cma-navy">
                  Reach out to Meghan &amp; Terra on our Reservations Team — they're ready to answer your questions about tickets, group visits, accessibility, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-[8px]">
                  <a href="mailto:reservations@childrensmuseumatlanta.org" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
                    Contact Us
                  </a>
                  <a href="tel:4046595437" className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black">
                    404-659-5437
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Photo */}
            <motion.div
              className="lg:w-[400px] shrink-0"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={imgFaq}
                alt="Family enjoying an event at the Children's Museum of Atlanta"
                className="w-full h-[420px] lg:h-full object-cover rounded-[24px]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
