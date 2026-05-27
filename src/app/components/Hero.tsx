import { motion } from "motion/react"
import imgHeroBg from "figma:asset/hero-bg.webp"
import imgWaveOrange from "figma:asset/hero-wave-orange.svg"
import imgWaveTeal from "figma:asset/hero-wave-teal.svg"
import imgClock from "figma:asset/hero-clock.svg"
import imgChevron from "figma:asset/hero-chevron.svg"

type Cta = { label: string; href: string; variant: "orange" | "teal-outline" }

type HeroProps = {
  bgImage?: string
  eyebrow?: string
  heading?: string
  subtitle?: string
  ctas?: Cta[]
  showHoursWidget?: boolean
}

export default function Hero({
  bgImage = imgHeroBg,
  eyebrow = "children's museum of atlanta",
  heading = "Where Families Come to Play",
  subtitle = "Welcome to a safe, joyful place where children and caregivers have fun, explore, connect and grow through play.",
  ctas = [
    { label: "Buy Tickets Now", href: "#tickets", variant: "orange" },
    { label: "Memberships", href: "#membership", variant: "teal-outline" },
  ],
  showHoursWidget = true,
}: HeroProps) {
  return (
    <>
    <section
      aria-label="Hero"
      className="relative w-full flex flex-col px-5 sm:px-10 md:px-[80px] min-h-[70svh] md:min-h-0"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black" aria-hidden>
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[75%_50%] md:object-center"
        />
        <div className="absolute inset-0 bg-cma-hero-overlay" />
      </div>

      {/* Spacer = combined height of fixed AlertBanner + Header at each breakpoint */}
      {/* AlertBanner: ~36px default → ~44px md | Header: ~56px default → ~82px xl */}
      <div className="shrink-0 h-[100px] sm:h-[108px] md:h-[120px] xl:h-[126px]" />

      <div className="relative flex-1 flex items-center py-[40px] md:py-[120px] lg:py-[200px]">
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col max-w-[640px]">

            <motion.div
              className="flex flex-col gap-4 md:gap-6 text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <p className="cma-eyebrow opacity-80">{eyebrow}</p>
              <h1 className="font-extrabold text-white">{heading}</h1>
            </motion.div>

            <div className="h-12 md:h-[40px] lg:h-[60px] xl:h-[80px] flex items-center justify-end shrink-0">
              <img src={imgWaveOrange} alt="" aria-hidden className="w-[249px] h-[15px] block cma-wave-float" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <p className="font-semibold text-[clamp(16px,2.1vw,30px)] text-cma-blue-light leading-[1.3] tracking-[-1px] [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]">
                {subtitle}
              </p>
            </motion.div>

            <div className="h-12 md:h-[40px] lg:h-[60px] xl:h-[80px] flex items-center justify-start shrink-0">
              <img src={imgWaveTeal} alt="" aria-hidden className="w-[257px] h-[16px] block cma-wave-float-reverse" />
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            >
              {ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "orange"
                      ? "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark"
                      : "cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)]"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {showHoursWidget && (
        <div
          className="hidden md:flex absolute right-5 bg-white items-center gap-4 rounded-2xl shadow-sm px-[12px] py-[8px] w-[397px]
                     md:top-[20px] lg:top-[136px] xl:top-[142px]"
        >
          <img src={imgClock} alt="" aria-hidden className="shrink-0 w-[37px] h-[37px]" />
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <p className="font-bold text-[15px] text-cma-navy leading-none">
              Opening Times Today
            </p>
            <p className="text-[12px] leading-[1.5] truncate font-medium text-cma-orange-dark">
              Members 9-10 AM | General 10 AM-3:30 PM
            </p>
          </div>
          <img src={imgChevron} alt="" aria-hidden className="shrink-0 w-5 h-5" />
        </div>
      )}
    </section>
    </>
  )
}
