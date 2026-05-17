import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
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

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.88,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.88,
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  }),
}

export default function FeaturedExhibits() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir: number) => {
    setDirection(dir)
    setActiveIndex((prev) => (prev + dir + n) % n)
  }

  const prevIndex = (activeIndex - 1 + n) % n
  const nextIndex = (activeIndex + 1) % n
  const active = exhibits[activeIndex]
  const prev = exhibits[prevIndex]
  const next = exhibits[nextIndex]

  return (
    <section
      aria-label="Featured Exhibits"
      className="relative w-full overflow-hidden pt-[80px] md:pt-[120px] pb-0"
      style={{ backgroundColor: "#cceff1" }}
    >
      {/* Decorative ellipse */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          left: "50%",
          top: 480,
          transform: "translateX(-50%)",
          width: 1876,
          height: 1876,
        }}
      >
        <img src={imgEllipse} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* Heading */}
      <div className="relative flex flex-col items-center gap-[24px] px-5 sm:px-10 md:px-[80px] text-center">
        <motion.h2
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 70px)",
            color: "#1d3e6b",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          What's Inside?<br />Hours of Hands-On Fun
        </motion.h2>

        <motion.p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 500,
            fontSize: 18,
            color: "#1d3e6b",
            lineHeight: 1.7,
          }}
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
          className="inline-flex items-center justify-center rounded-[1000px] transition-colors duration-200 hover:bg-[#c8701a]"
          style={{
            backgroundColor: "#f7941e",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: "#1d3e6b",
            paddingLeft: 34,
            paddingRight: 34,
            paddingTop: 22,
            paddingBottom: 22,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          See All Exhibits
        </motion.a>
      </div>

      {/* Carousel — overflow hidden clips the side cards at the edges */}
      <div className="relative overflow-hidden mt-[60px] md:mt-[80px]" style={{ minHeight: 520 }}>

        {/* Side card — prev (left), centered on the left edge */}
        <div
          className="hidden md:flex absolute cursor-pointer select-none items-center justify-center"
          style={{
            left: 0,
            top: "50%",
            transform: "translate(-50%, -58%) rotate(-28deg)",
            zIndex: 0,
            width: 280,
            height: 380,
          }}
          onClick={() => go(-1)}
          aria-label="Previous exhibit"
        >
          <div className="relative overflow-hidden rounded-[16px]" style={{ width: "100%", height: "100%", opacity: 0.85 }}>
            <img
              src={prev.image}
              alt=""
              aria-hidden
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)" }}
            />
          </div>
        </div>

        {/* Center card */}
        <div className="relative z-10 mx-auto" style={{ width: "min(520px, 86vw)" }}>
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="overflow-hidden rounded-[24px]"
              style={{ width: "100%", aspectRatio: "4/5", position: "relative" }}
            >
              {/* Photo */}
              <img
                src={active.image}
                alt={active.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
                }}
              />
              {/* Text content */}
              <div
                className="absolute flex flex-col gap-[20px]"
                style={{ bottom: 40, left: 28, right: 28 }}
              >
                <span
                  className="self-start rounded-[8px] px-[18px] py-[10px]"
                  style={{
                    backgroundColor: "#cceff1",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 800,
                    fontSize: 12,
                    color: "#1d3e6b",
                    lineHeight: 1.5,
                  }}
                >
                  {active.badge}
                </span>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(24px, 3vw, 36px)",
                    color: "#ffffff",
                    lineHeight: 1.1,
                  }}
                >
                  {active.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={() => go(-1)}
              className="flex items-center justify-center rounded-full border-2 border-[#1d3e6b] bg-white transition-colors duration-200 hover:bg-[#1d3e6b] hover:text-white group"
              style={{ width: 52, height: 52 }}
              aria-label="Previous exhibit"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1d3e6b] group-hover:text-white transition-colors" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-[8px]">
              {exhibits.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i) }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? 28 : 10,
                    height: 10,
                    backgroundColor: i === activeIndex ? "#1d3e6b" : "rgba(29,62,107,0.3)",
                  }}
                  aria-label={`Go to exhibit ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="flex items-center justify-center rounded-full border-2 border-[#1d3e6b] bg-white transition-colors duration-200 hover:bg-[#1d3e6b] group"
              style={{ width: 52, height: 52 }}
              aria-label="Next exhibit"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1d3e6b] group-hover:text-white transition-colors" />
              </svg>
            </button>
          </div>
        </div>

        {/* Side card — next (right), centered on the right edge */}
        <div
          className="hidden md:flex absolute cursor-pointer select-none items-center justify-center"
          style={{
            right: 0,
            top: "50%",
            transform: "translate(50%, -58%) rotate(28deg)",
            zIndex: 0,
            width: 280,
            height: 380,
          }}
          onClick={() => go(1)}
          aria-label="Next exhibit"
        >
          <div className="relative overflow-hidden rounded-[16px]" style={{ width: "100%", height: "100%", opacity: 0.85 }}>
            <img
              src={next.image}
              alt=""
              aria-hidden
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)" }}
            />
          </div>
        </div>

      </div>

      {/* Bottom spacing so ellipse shows */}
      <div style={{ height: 80 }} />
    </section>
  )
}
