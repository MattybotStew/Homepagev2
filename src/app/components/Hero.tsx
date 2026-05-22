import { motion } from "motion/react"
import imgHeroBg from "figma:asset/hero-bg.png"
import imgWaveOrange from "figma:asset/hero-wave-orange.svg"
import imgWaveTeal from "figma:asset/hero-wave-teal.svg"
import imgClock from "figma:asset/hero-clock.svg"
import imgChevron from "figma:asset/hero-chevron.svg"

export default function Hero() {
  return (
    <>
    <section
      aria-label="Hero"
      className="relative w-full flex flex-col px-5 sm:px-10 md:px-[80px] min-h-[max(600px,100svh)] md:min-h-0"
    >
      {/* Background: full-cover image + left-to-right dark gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black" aria-hidden>
        <img
          src={imgHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center md:translate-y-[100px]"
        />
        <div className="absolute inset-0 bg-cma-hero-overlay" />
      </div>

      {/* Spacer = combined height of fixed AlertBanner + Header at each breakpoint */}
      {/* AlertBanner: ~36px default → ~44px md | Header: ~56px default → ~82px xl */}
      <div className="shrink-0 h-[92px] sm:h-[108px] md:h-[120px] xl:h-[126px]" />

      {/* Content — fills remaining height, vertically centered */}
      <div className="relative flex-1 flex items-center py-8 md:py-[160px]">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col max-w-[640px]">

            {/* Eyebrow + H1 */}
            <motion.div
              className="flex flex-col gap-3 md:gap-6 text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <p
                className="font-bold uppercase leading-none opacity-80 text-[clamp(11px,1.5vw,18px)] tracking-[clamp(1.5px,0.5vw,3.9px)]"
              >
                children's museum of atlanta
              </p>
              <h1 className="font-extrabold text-white">
                Where Families Come to Play
              </h1>
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
                  className="w-[249px] h-[15px] block cma-wave-float"
                />
              </div>

              <p className="font-semibold mt-3 text-[clamp(16px,2.2vw,24px)] text-cma-blue-light leading-[1.6]">
                Welcome to a safe, joyful place where children and caregivers explore, connect and grow through play.
              </p>

              <div className="flex justify-start w-full mt-5">
                <img
                  src={imgWaveTeal}
                  alt=""
                  aria-hidden
                  className="w-[257px] h-[16px] block cma-wave-float-reverse"
                />
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-8 md:mt-16"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            >
              {/* Orange Fill */}
              <a
                href="#tickets"
                className="inline-flex items-center justify-center rounded-[1000px] font-bold text-[15px] whitespace-nowrap px-[24px] py-[13px] bg-[#f7941e] text-[#1d3e6b] transition-colors duration-200 hover:bg-[#c8701a] w-full sm:w-auto"
              >
                Buy Tickets Now
              </a>
              {/* Teal Outline */}
              <a
                href="#membership"
                className="inline-flex items-center justify-center rounded-[1000px] font-bold text-[15px] whitespace-nowrap px-[24px] py-[13px] bg-white border-2 border-[#007c87] text-[#007c87] transition-all duration-200 hover:bg-[#007a85] hover:border-[#007a85] hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] w-full sm:w-auto"
              >
                Memberships
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Hours widget — desktop only; too wide to be useful on mobile */}
      <div
        className="hidden md:flex absolute right-5 bg-white items-center gap-4 rounded-2xl shadow-sm px-[12px] py-[8px] w-[397px]
                   md:top-[136px] xl:top-[142px]"
      >
        <img src={imgClock} alt="" aria-hidden className="shrink-0 w-[37px] h-[37px]" />
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <p className="font-bold text-[15px] text-[#1d3e6b] leading-none">
            Opening Times Today
          </p>
          <p className="text-[12px] leading-[1.5] truncate font-medium text-cma-orange-dark">
            Members 9-10 AM | General 10 AM-3:30 PM
          </p>
        </div>
        <img src={imgChevron} alt="" aria-hidden className="shrink-0 w-5 h-5" />
      </div>
    </section>
  )
}
