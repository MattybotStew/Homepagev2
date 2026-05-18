import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import imgBgCircle from "figma:asset/pyv-bg-circle.svg"
import imgIconTicket from "figma:asset/pyv-icon-ticket.svg"
import imgIconClock from "figma:asset/pyv-icon-clock.svg"
import imgIconParkingBg from "figma:asset/pyv-icon-parking-bg.svg"
import imgIconParkingPin from "figma:asset/pyv-icon-parking-pin.svg"
import imgIconFood from "figma:asset/pyv-icon-food.svg"
import imgArrow from "figma:asset/pyv-arrow.svg"
import imgWave from "figma:asset/pyv-wave.svg"

function ParkingIcon() {
  return (
    <div className="relative shrink-0" style={{ width: 64, height: 64 }}>
      <div className="absolute overflow-hidden" style={{ inset: 0 }}>
        <div className="absolute" style={{ top: "3.13%", right: "3.13%", bottom: "3.13%", left: "3.13%" }}>
          <img src={imgIconParkingBg} alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
        </div>
        <div className="absolute" style={{ top: "21.88%", right: "29.69%", bottom: "23.44%", left: "29.69%" }}>
          <div className="absolute" style={{ top: "-3.43%", right: "-4.62%", bottom: "-3.43%", left: "-4.62%" }}>
            <img src={imgIconParkingPin} alt="" aria-hidden style={{ display: "block", width: "100%", height: "100%" }} />
          </div>
        </div>
        <p
          className="absolute text-center text-white font-bold whitespace-nowrap"
          style={{ top: "28.13%", right: "42.19%", bottom: "42.19%", left: "42.19%", fontFamily: "Nunito, sans-serif", fontSize: 14, lineHeight: "normal" }}
        >
          P
        </p>
      </div>
    </div>
  )
}

const cards = [
  {
    icon: <img src={imgIconTicket} alt="" aria-hidden style={{ width: 64, height: 64, display: "block", flexShrink: 0 }} />,
    title: "Plan Your Visit",
    description: "Advance tickets recommended. Preview pricing & book online.",
    buttonLabel: "Buy Now",
    href: "#tickets",
  },
  {
    icon: <img src={imgIconClock} alt="" aria-hidden style={{ width: 64, height: 64, display: "block", flexShrink: 0 }} />,
    title: "Hours & What to Expect",
    description: "FRIDAY:\nOpen 10am–3:30pm",
    buttonLabel: "Plan Your Visit",
    href: "#hours",
  },
  {
    icon: <ParkingIcon />,
    title: "Parking & Directions",
    description: "Pre-purchase parking nearby. Easy access via MARTA",
    buttonLabel: "Get Directions",
    href: "#parking",
  },
  {
    icon: <img src={imgIconFood} alt="" aria-hidden style={{ width: 64, height: 64, display: "block", flexShrink: 0 }} />,
    title: "Food & Amenities",
    description: "Snack and drinks on-site. Outside snacks welcome. Lockers & diaper stations available.",
    buttonLabel: "See Amenities",
    href: "#amenities",
  },
]

export default function PlanYourVisit() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <section
      ref={sectionRef}
      aria-label="Plan Your Visit"
      className="relative w-full overflow-hidden py-[160px]"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Decorative background circle — scroll-driven scale + rotate */}
      <motion.div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          left: "calc(50% + 65.82px)",
          top: "-865px",
          translateX: "-50%",
          width: "2138px",
          height: "2274px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scale,
          rotate,
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.2 }}
      >
        <div style={{ transform: "rotate(-24.31deg)", flexShrink: 0 }}>
          <img
            src={imgBgCircle}
            alt=""
            style={{ width: "1530px", height: "1804px", display: "block" }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-[64px] max-w-[1280px] mx-auto px-5 sm:px-10 md:px-[80px]">

        {/* Heading */}
        <motion.h2
          className="text-center leading-none"
          style={{
            fontFamily: "Nunito, sans-serif",
            color: "#1d3e6b",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          Planning Your Visit?
          <br />
          We&apos;ve Got You Covered
        </motion.h2>

        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white border border-[#e4e8ee] rounded-[18px] flex flex-col gap-[24px] pt-[29px] pb-[23px] px-[25px] min-h-[280px]"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {card.icon}
              <div className="flex-1 flex flex-col gap-[24px]">
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    color: "#1d3e6b",
                    lineHeight: 1.1,
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#2c3a52",
                    lineHeight: 1.65,
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.description}
                </p>
              </div>
              <a
                href={card.href}
                className="inline-flex items-center justify-center rounded-[1000px] border-2 border-[#1d3e6b] bg-white text-[#1d3e6b] transition-colors duration-200 hover:bg-[#1d3e6b] hover:text-white shrink-0"
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 13,
                  paddingBottom: 13,
                }}
              >
                {card.buttonLabel}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Keep scrolling pill */}
        <div className="inline-flex items-center gap-[10px] bg-white border border-[rgba(107,126,160,0.25)] rounded-[200px] px-[17px] py-[9px]">
          <p
            className="uppercase"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 800,
              fontSize: 14,
              color: "#346094",
              lineHeight: 1.14,
            }}
          >
            keep scrolling to explore our exhibits
          </p>
          <div style={{ transform: "rotate(180deg)", flexShrink: 0 }}>
            <img src={imgArrow} alt="" aria-hidden style={{ width: 20, height: 20, display: "block" }} />
          </div>
        </div>

      </div>

      {/* Teal wave strip at bottom */}
      <div
        className="absolute bottom-0 left-0 flex overflow-hidden"
        style={{ height: 13, width: "100%" }}
        aria-hidden
      >
        {[0, 1, 2, 3].map(i => (
          <img key={i} src={imgWave} alt="" style={{ width: 422, height: 57, flexShrink: 0, display: "block" }} />
        ))}
      </div>
    </section>
  )
}
