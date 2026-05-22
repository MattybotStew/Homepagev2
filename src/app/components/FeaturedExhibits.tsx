import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import imgSlide1 from "figma:asset/exhibits-slide-1.png"
import imgSlide2 from "figma:asset/exhibits-slide-2.jpg"
import imgSlide3 from "figma:asset/exhibits-slide-3.jpg"
import imgEllipse from "figma:asset/exhibits-ellipse.svg"

const exhibits = [
  {
    badge: "New in 2026",
    title: "Imaginative Play",
    description: "Step into a world of make-believe and creative storytelling.",
    image: imgSlide1,
  },
  {
    badge: "Fan Favorite",
    title: "Science Discovery",
    description: "Hands-on experiments that spark curiosity in every child.",
    image: imgSlide2,
  },
  {
    badge: "Ages 2–8",
    title: "GlobalWorks",
    description: "Travel the world through hands-on cultural experiences.",
    image: imgSlide3,
  },
]

const n = exhibits.length

// Figma specs: side cards shift right/left ±680px, drop 183px below center,
// rotate ±0.49°, scale slightly (scaleX 0.977, scaleY 0.885), full opacity.
// Cards intentionally overflow the section edges — clipped by overflow:hidden.
const SLOTS = {
  left:   { x: -720, y: 183, rotate: -15, scale: 0.7, opacity: 1 },
  center: { x: 0,    y: 0,   rotate: 0,   scale: 1,   opacity: 1 },
  right:  { x: 720,  y: 183, rotate: 15,  scale: 0.7, opacity: 1 },
} as const

const TRANSITION = { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }
const INSTANT    = { duration: 0 }

export default function FeaturedExhibits() {
  const [activeIndex, setActiveIndex] = useState(0)
  // wrapIndex: the card that jumps from one side to the other (behind the carousel)
  // — it gets a zero-duration snap so it doesn't cross through the center
  const [wrapIndex, setWrapIndex] = useState<number | null>(null)

  const go = (dir: number) => {
    setWrapIndex(dir > 0 ? (activeIndex - 1 + n) % n : (activeIndex + 1) % n)
    setActiveIndex((prev) => (prev + dir + n) % n)
  }

  // Clear the wrap flag after one render cycle
  useEffect(() => {
    if (wrapIndex === null) return
    const t = setTimeout(() => setWrapIndex(null), 50)
    return () => clearTimeout(t)
  }, [wrapIndex])

  return (
    <section
      aria-label="Featured Exhibits"
      className="relative w-full overflow-hidden pt-[80px] md:pt-[120px] pb-0 bg-cma-teal-pale"
    >
      {/* Decorative ellipse — fixed 1876×1876 so it always renders as a circle */}
      <div
        className="absolute pointer-events-none left-1/2 top-[700px] -translate-x-1/2 w-[1876px] h-[1876px]"
        aria-hidden
      >
        <img src={imgEllipse} alt="" className="w-full h-full block" />
      </div>

      {/* Heading */}
      <div className="relative flex flex-col items-center gap-[24px] px-5 sm:px-10 md:px-[80px] text-center">
        <motion.h2
          className="text-cma-navy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          What's Inside?<br />Hours of Hands-On Fun
        </motion.h2>

        <motion.p
          className="font-medium text-[18px] text-cma-navy leading-[1.7]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Why is play essential for childhood development—and how does the<br className="hidden md:block" />
          Children's Museum of Atlanta help make it possible?
        </motion.p>

        <motion.a
          href="#exhibits"
          className="inline-flex items-center justify-center rounded-[1000px] font-bold text-[15px] whitespace-nowrap px-[24px] py-[13px] bg-[#f7941e] text-[#1d3e6b] transition-colors duration-200 hover:bg-[#c8701a]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          See All Exhibits
        </motion.a>
      </div>

      {/*
        Outer wrapper: position context for arrows — NO overflow:hidden so arrows
        stay visible on mobile even when side cards are fully off-screen.
        Inner div has overflow:hidden to clip the side cards only.
      */}
      <div className="relative mt-[20px] md:mt-[24px]">
        {/* Cards — overflow:hidden clips side cards at section edges */}
        <div
          className="relative overflow-hidden"
          className="h-[clamp(520px,calc(120px+min(652px,102vw)),800px)]"
        >
          {exhibits.map((exhibit, i) => {
            const diff = ((i - activeIndex) % n + n) % n
            const slot = (diff === 0 ? "center" : diff === 1 ? "right" : "left") as keyof typeof SLOTS
            const isCenter = slot === "center"

            return (
              <motion.div
                key={i}
                className={`absolute overflow-hidden rounded-[24px] w-[min(565px,88vw)] aspect-[565/652] left-1/2 top-[120px] ml-[calc(-1*min(282.5px,44vw))] ${isCenter ? "z-10 cursor-default" : "z-[1] cursor-pointer"}`}
                animate={SLOTS[slot]}
                transition={wrapIndex === i ? INSTANT : TRANSITION}
                onClick={!isCenter ? () => go(slot === "right" ? 1 : -1) : undefined}
                aria-label={!isCenter ? (slot === "right" ? "Next exhibit" : "Previous exhibit") : undefined}
              >
                {/* Photo */}
                <img
                  src={exhibit.image}
                  alt={isCenter ? exhibit.title : ""}
                  className="absolute inset-0 w-full h-full object-cover block"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-cma-card-overlay" />
                {/* Text — fades in/out with CSS so there's no abrupt pop */}
                <div
                  className={`absolute flex flex-col gap-[20px] bottom-[40px] left-[28px] right-[28px] transition-opacity duration-200 ${isCenter ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                >
                  <span className="self-start rounded-[8px] px-[18px] py-[10px] bg-cma-teal-pale font-extrabold text-[12px] text-cma-navy leading-[1.5]">
                    {exhibit.badge}
                  </span>
                  <p className="font-extrabold text-[clamp(24px,3vw,36px)] text-white leading-[1.1]">
                    {exhibit.title}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Arrows — absolute to outer wrapper (not clipped).
            Desktop: ±380px from center. Mobile: clamped 16px from each edge. */}
        <button
          onClick={() => go(-1)}
          className="absolute flex items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-80 w-[54px] h-[54px] bg-cma-navy left-[max(16px,calc(50%-407px))] top-[419px] z-20"
          aria-label="Previous exhibit"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          className="absolute flex items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-80 w-[54px] h-[54px] bg-cma-navy left-[min(calc(100%-70px),calc(50%+353px))] top-[419px] z-20"
          aria-label="Next exhibit"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dot indicators — centered below the carousel */}
      <div className="relative flex items-center justify-center gap-[8px] mt-6 z-20">
        {exhibits.map((_, j) => (
          <button
            key={j}
            onClick={() => go(j > activeIndex ? 1 : -1)}
            className={`rounded-full transition-all duration-300 h-[10px] ${j === activeIndex ? "w-[28px] bg-cma-navy" : "w-[10px] bg-cma-navy/30"}`}
            aria-label={`Go to exhibit ${j + 1}`}
          />
        ))}
      </div>

      {/* Bottom spacing so ellipse shows */}
      <div className="h-[80px]" />
    </section>
  )
}
