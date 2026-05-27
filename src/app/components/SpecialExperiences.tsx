import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import squiggleSvg from "../../imports/sqig2.svg";
import imgWaveNavy from "figma:asset/impact-wave-top.svg";
import { type EventItem, eventsByCategory, eventFilters } from "../data/events";

export type { EventItem };

type Props = {
  heading?: string
  ctaButton?: { label: string; href: string }
  filterEvents?: Record<string, EventItem[]>
  showWave?: boolean
}

export default function SpecialExperiences({
  heading = "Don't Miss The Fun.",
  ctaButton,
  filterEvents = eventsByCategory,
  showWave = false,
}: Props) {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const events = filterEvents[activeFilter] ?? filterEvents.Featured ?? [];

  return (
    <section className="bg-cma-cream relative w-full py-[80px] lg:pt-[100px] lg:pb-[80px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          className="absolute right-0 top-[80px] md:top-[100px] lg:top-[120px] w-[260px] md:w-[420px] lg:w-[560px] hidden md:block"
          initial={{ x: 160, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={squiggleSvg} alt="" className="w-full h-auto object-contain" />
        </motion.div>
      </div>

      <div className="relative z-[1] max-w-[1280px] mx-auto px-5 md:px-8 lg:px-[80px] flex flex-col items-center gap-[48px]">
        <motion.div
          className="flex flex-col items-center gap-[24px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="cma-eyebrow text-cma-teal">Events</p>
          <h2 className="text-cma-navy text-center">{heading}</h2>
          {ctaButton && (
            <a href={ctaButton.href} className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
              {ctaButton.label}
            </a>
          )}
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div className="cma-pill-scroll">
            {eventFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cma-nav-pill ${
                  filter === activeFilter ? "cma-nav-pill-active" : "cma-nav-pill-inactive"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {events.map((event, index) => (
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
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {showWave && (
        <div aria-hidden className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <img key={i} src={imgWaveNavy} alt="" className="w-[422px] h-[57px] shrink-0 block" />
          ))}
        </div>
      )}
    </section>
  );
}
