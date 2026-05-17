import React from "react"
import { motion } from "motion/react"
import imgPhoto from "figma:asset/impact-photo.png"
import imgSquiggle from "figma:asset/impact-squiggle.svg"
import imgWaveTop from "figma:asset/impact-wave-top.svg"
import imgWaveBottom from "figma:asset/impact-wave-bottom.svg"

export default function ImpactSection() {
  return (
    <section
      aria-label="Making an Impact Together"
      className="relative w-full overflow-hidden py-[80px] md:py-[120px]"
      style={{ backgroundColor: "#1d3e6b" }}
    >
      {/* Top teal wave */}
      <div className="absolute top-0 left-0 flex overflow-hidden" style={{ height: 13, width: "100%" }} aria-hidden>
        {[0, 1, 2, 3].map(i => (
          <img key={i} src={imgWaveTop} alt="" style={{ width: 422, height: 57, flexShrink: 0, display: "block" }} />
        ))}
      </div>

      {/* Decorative squiggle */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{ left: "22%", top: "52%", width: "82%", height: 452 }}
      >
        <img src={imgSquiggle} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* Content */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-10 md:px-[80px]">
        <div className="flex flex-col lg:flex-row gap-[48px] items-center">

          {/* Left: text */}
          <div className="flex-1 flex flex-col gap-[40px]">
            <motion.h2
              className="leading-none"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 4.5vw, 56px)",
                color: "#ffffff",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              Making an Impact Together
            </motion.h2>

            <motion.div
              className="flex flex-col gap-[24px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 500,
                  fontSize: 18,
                  color: "#d4e3f3",
                  lineHeight: 1.7,
                }}
              >
                As a nonprofit, we make joy accessible to every child. Your support helps us serve 100,000+ families and keep admission affordable.
              </p>
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#ffffff",
                  lineHeight: 1.1,
                }}
              >
                2024 Impact: 1,200 free passes | 15,000 field trips
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-[16px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <a
                href="#donate"
                className="inline-flex items-center justify-center rounded-[1000px] border-2 border-[#007c87] bg-white text-[#007c87] transition-colors duration-200 hover:bg-[#007c87] hover:text-white"
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 18, paddingLeft: 34, paddingRight: 34, paddingTop: 22, paddingBottom: 22 }}
              >
                Donate
              </a>
              <a
                href="#membership"
                className="inline-flex items-center justify-center rounded-[1000px] border-2 border-white bg-white text-[#1d3e6b] transition-colors duration-200 hover:bg-transparent hover:text-white"
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 18, paddingLeft: 34, paddingRight: 34, paddingTop: 22, paddingBottom: 22 }}
              >
                Memberships
              </a>
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-[1000px] bg-[#f7941e] text-[#1d3e6b] transition-colors duration-200 hover:bg-[#c8701a]"
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 18, paddingLeft: 34, paddingRight: 34, paddingTop: 22, paddingBottom: 22 }}
              >
                Buy Tickets
              </a>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <img
              src={imgPhoto}
              alt="Child playing at the Children's Museum of Atlanta"
              className="w-full object-cover rounded-[30px]"
              style={{ height: "clamp(300px, 40vw, 470px)" }}
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom cream wave */}
      <div className="absolute bottom-0 left-0 flex overflow-hidden" style={{ height: 13, width: "100%" }} aria-hidden>
        {[0, 1, 2, 3].map(i => (
          <img key={i} src={imgWaveBottom} alt="" style={{ width: 422, height: 57, flexShrink: 0, display: "block" }} />
        ))}
      </div>
    </section>
  )
}
