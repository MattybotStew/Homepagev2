import React from "react"
import { motion } from "motion/react"
import imgHeroBg from "figma:asset/hero-bg.png"
import imgWaveOrange from "figma:asset/hero-wave-orange.svg"
import imgWaveTeal from "figma:asset/hero-wave-teal.svg"
import imgClock from "figma:asset/hero-clock.svg"
import imgChevron from "figma:asset/hero-chevron.svg"

export default function Hero() {
  return (
    <>
    <style>{`
      @keyframes waveFloat {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(-12px); }
      }
      @keyframes waveFloatReverse {
        0%, 100% { transform: translateX(0px); }
        50% { transform: translateX(12px); }
      }
    `}</style>
    <section
      aria-label="Hero"
      className="relative w-full flex flex-col px-5 sm:px-10 md:px-[80px]"
      style={{ minHeight: "600px" }}
    >
      {/* Background: full-cover image + left-to-right dark gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black" aria-hidden>
        <img
          src={imgHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full md:translate-y-[100px]"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8) 17%, rgba(102,102,102,0) 60%)",
          }}
        />
      </div>

      {/* Spacer = combined height of fixed AlertBanner + Header at each breakpoint */}
      {/* AlertBanner: ~36px default → ~44px md | Header: ~56px default → ~82px xl */}
      <div className="shrink-0 h-[92px] sm:h-[108px] md:h-[120px] xl:h-[126px]" />

      {/* Content — fills remaining height, vertically centered */}
      <div className="relative flex-1 flex items-center py-10 md:py-[160px]">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col" style={{ maxWidth: "640px" }}>

            {/* Eyebrow + H1 */}
            <motion.div
              className="flex flex-col gap-6 text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <p
                className="font-bold text-[18px] uppercase leading-none opacity-80"
                style={{ fontFamily: "Nunito, sans-serif", letterSpacing: "3.9px" }}
              >
                children's museum of atlanta
              </p>
              <p
                className="font-extrabold text-white leading-none"
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "clamp(42px, 6.8vw, 87px)",
                  letterSpacing: "-1px",
                }}
              >
                Where Families Come to Play
              </p>
            </motion.div>

            {/* Orange squiggle + Subtitle + Teal squiggle */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <div className="flex justify-end w-full mt-5">
                <img
                  src={imgWaveOrange}
                  alt=""
                  aria-hidden
                  style={{
                    width: "249px", height: "15px", display: "block",
                    animation: "waveFloat 3s ease-in-out infinite",
                  }}
                />
              </div>

              <p
                className="font-semibold mt-3"
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "24px",
                  color: "#d4e3f3",
                  lineHeight: 1.6,
                }}
              >
                Welcome to a safe, joyful place where children and caregivers explore, connect and grow through play.
              </p>

              <div className="flex justify-start w-full mt-5">
                <img
                  src={imgWaveTeal}
                  alt=""
                  aria-hidden
                  style={{
                    width: "257px", height: "16px", display: "block",
                    animation: "waveFloatReverse 3.8s ease-in-out infinite 0.6s",
                  }}
                />
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 items-center mt-16"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            >
              {/* Orange Fill */}
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-[1000px] font-bold text-[15px] whitespace-nowrap px-[24px] py-[13px] bg-[#f7941e] text-[#1d3e6b] transition-colors duration-200 hover:bg-[#c8701a]"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Buy Tickets Now
              </a>
              {/* Teal Outline */}
              <a
                href="#membership"
                className="inline-flex items-center justify-center rounded-[1000px] font-bold text-[15px] whitespace-nowrap px-[24px] py-[13px] bg-white border-2 border-[#007c87] text-[#007c87] transition-all duration-200 hover:bg-[#007a85] hover:border-[#007a85] hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)]"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Memberships
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Hours widget — sits just below the sticky header in the top-right corner */}
      <div
        className="absolute right-5 bg-white flex items-center gap-4 rounded-2xl shadow-sm
                   top-[108px] sm:top-[124px] md:top-[136px] xl:top-[142px]"
        style={{ padding: "8px 12px", width: "397px", maxWidth: "calc(100vw - 40px)" }}
      >
        <img src={imgClock} alt="" aria-hidden className="shrink-0 w-[37px] h-[37px]" />
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <p
            className="font-bold text-[15px] text-[#1d3e6b] leading-none"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Opening Times Today
          </p>
          <p
            className="text-[12px] leading-[1.5] truncate"
            style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, color: "#b8620a" }}
          >
            Members 9-10 AM | General 10 AM-3:30 PM
          </p>
        </div>
        <img src={imgChevron} alt="" aria-hidden className="shrink-0 w-5 h-5" />
      </div>
    </section>
    </>
  )
}
