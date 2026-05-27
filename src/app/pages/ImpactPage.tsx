import { useState } from "react"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faDownload, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"
import imgHero from "../../assets/impact-photo.webp"
import imgWaveBottom from "../../assets/impact-wave-bottom.svg"
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp"
import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp"
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp"

const stats = [
  {
    number: "180,000+",
    label: "Museum Visitors",
    detail: "Families experienced hands-on learning",
    color: "text-cma-teal",
  },
  {
    number: "12,000+",
    label: "Kids Reached",
    detail: "Through outreach & community programs",
    color: "text-cma-orange",
  },
  {
    number: "1,200",
    label: "Free Passes",
    detail: "Making the museum accessible to all",
    color: "text-cma-navy",
  },
  {
    number: "4,456",
    label: "CLCC Students",
    detail: "Connected learning in classrooms",
    color: "text-[#fbb040]",
  },
]

const programs = [
  {
    id: "step-up-to-science",
    label: "Step Up To Science",
    title: "Step Up To Science",
    body: "All field trips are geared towards providing an immersive, standards-based learning experience and cross-curriculum learning opportunities focusing on math, science, social studies, language arts, geography, and arts.",
    exhibits: [
      { image: imgA, title: "Step Up to Science", slug: "step-up-to-science" },
      { image: imgB, title: "Tools for Solutions", slug: "tools-for-solutions" },
    ],
  },
  {
    id: "cultural-programs",
    label: "Cultural Programs",
    title: "Cultural Programs",
    body: "Our Cultural Programs celebrate the rich diversity of Atlanta and beyond. Through hands-on activities, storytelling, and immersive experiences, we bring global traditions and perspectives to life for young learners.",
    exhibits: [
      { image: imgC, title: "Gateway to the World", slug: "gateway-to-the-world" },
      { image: imgA, title: "Fundamentally Food", slug: "fundamentally-food" },
    ],
  },
  {
    id: "connected-learning",
    label: "Connected Learning Connected Communities",
    title: "Connected Learning Connected Communities",
    body: "In-depth outreach across 17+ partner sites supporting literacy and nutrition in under-resourced neighborhoods. CLCC reaches 4,456 students annually with standards-aligned programs delivered directly in their communities.",
    exhibits: [
      { image: imgB, title: "Leaping into Learning", slug: "leaping-into-learning" },
      { image: imgC, title: "Let Your Creativity Flow", slug: "let-your-creativity-flow" },
    ],
  },
  {
    id: "family-free-day",
    label: "Family Free Day",
    title: "Family Free Day",
    body: "Four times a year, the Children's Museum opens its doors at no charge to all families. Family Free Days remove financial barriers and ensure that every child in Atlanta has access to the transformative power of play-based learning.",
    exhibits: [
      { image: imgA, title: "Obstacle Adventure", slug: "obstacle-adventure" },
      { image: imgB, title: "Outside the Box", slug: "outside-the-box" },
    ],
  },
  {
    id: "mobile-learning",
    label: "Mobile Learning Spaces",
    title: "Mobile Learning Spaces",
    body: "Weekly mobile preschool experiences in partnership with United Way, bringing play to children not yet in traditional preschool settings. Our mobile educators bring portable exhibits and hands-on activities to neighborhoods across metro Atlanta.",
    exhibits: [
      { image: imgC, title: "Our Place in Space", slug: "our-place-in-space" },
      { image: imgA, title: "Gateway to the World", slug: "gateway-to-the-world" },
    ],
  },
]

export default function ImpactPage() {
  const [activeProgram, setActiveProgram] = useState("step-up-to-science")
  const current = programs.find((p) => p.id === activeProgram)!

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
      <section className="bg-cma-navy w-full pt-[60px] pb-[100px] md:pt-[80px] md:pb-[140px] relative overflow-hidden">
        <div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
        <div className="cma-section-container">
          <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[64px] items-center">

            {/* Text */}
            <motion.div
              className="flex-1 flex flex-col gap-[24px] md:gap-[32px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="cma-eyebrow text-cma-teal">children's museum of atlanta</p>
              <h1 className="text-white">Impact &amp; Community</h1>
              <p className="text-cma-blue-light font-semibold text-[clamp(16px,1.67vw,24px)] leading-[1.4] max-w-[540px]">
                Changing the world by sparking every child's imagination, sense of discovery and learning through the power of play.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#stats" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
                  Our Impact
                </a>
                <a href="#annual-report" className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white font-black">
                  Annual Report
                </a>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="w-full lg:w-[480px] xl:w-[540px] shrink-0"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <img
                src={imgHero}
                alt="Children playing at the Children's Museum of Atlanta"
                className="w-full h-[300px] md:h-[400px] lg:h-[460px] object-cover rounded-[24px]"
              />
            </motion.div>

          </div>
        </div>

        {/* Wave bottom */}
        <div aria-hidden className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <img key={i} src={imgWaveBottom} alt="" className="w-[422px] h-[57px] shrink-0 block" />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="bg-white w-full py-[80px] md:py-[100px]">
        <div className="cma-section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[32px] gap-y-[48px]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.number}
                className="flex flex-col gap-[12px] text-center items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <p className={`${stat.color} font-black text-[clamp(36px,4vw,56px)] leading-none`}>
                  {stat.number}
                </p>
                <p className="font-extrabold text-[clamp(16px,1.67vw,24px)] text-cma-navy leading-[1.1]">
                  {stat.label}
                </p>
                <p className="text-cma-navy/70 text-[14px] leading-[1.5]">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
        <div className="cma-section-container">

          <motion.div
            className="flex flex-col gap-[16px] mb-[48px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="cma-eyebrow text-cma-teal">Community Outreach</p>
            <h2 className="text-cma-navy leading-none tracking-[-1px]">Our Programs</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-start">

            {/* Left: tab nav + give card */}
            <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 flex flex-col gap-[16px] lg:sticky lg:top-[120px]">
              {/* Tab nav */}
              <motion.div
                className="bg-white border-2 border-black/5 rounded-[16px] overflow-hidden"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {programs.map((program, i) => (
                  <button
                    key={program.id}
                    onClick={() => setActiveProgram(program.id)}
                    className={`w-full flex items-center justify-between px-[16px] py-[16px] text-left transition-colors ${i < programs.length - 1 ? "border-b border-cma-blue-light" : ""} ${activeProgram === program.id ? "bg-cma-orange" : "bg-white hover:bg-cma-blue-light/30"}`}
                  >
                    <span className={`font-semibold text-[15px] leading-[1.3] ${activeProgram === program.id ? "text-cma-navy font-extrabold" : "text-cma-navy"}`}>
                      {program.label}
                    </span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={`shrink-0 text-[11px] ml-2 ${activeProgram === program.id ? "text-cma-navy" : "text-cma-blue-mid"}`}
                    />
                  </button>
                ))}
              </motion.div>

              {/* More Ways To Give card */}
              <motion.div
                className="bg-white border-2 border-black/5 rounded-[20px] px-[24px] py-[24px] flex flex-col gap-[16px] items-center text-center"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <p className="font-extrabold text-[18px] text-cma-navy leading-[1.2]">More Ways To Give</p>
                <p className="text-cma-navy/70 text-[14px] leading-[1.5]">
                  Your support makes play possible for every child in Atlanta.
                </p>
                <a href="#donate" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black w-full justify-center">
                  Learn More
                </a>
              </motion.div>
            </div>

            {/* Right: content panel */}
            <motion.div
              key={activeProgram}
              className="flex-1 bg-white border-2 border-black/5 rounded-[24px] p-[24px] md:p-[48px] flex flex-col gap-[40px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Title + body */}
              <div className="flex flex-col gap-[24px]">
                <h2 className="text-cma-navy leading-none tracking-[-1px]">{current.title}</h2>
                <p className="text-cma-navy text-[clamp(15px,1.25vw,18px)] leading-[1.7]">{current.body}</p>
                <div>
                  <a href="/social-story.pdf" download className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black inline-flex">
                    Download Social Story <FontAwesomeIcon icon={faDownload} className="ml-[6px] text-[13px]" />
                  </a>
                </div>
              </div>

              {/* Featured Exhibits */}
              <div className="flex flex-col gap-[24px]">
                <p className="font-extrabold text-[clamp(22px,2.5vw,36px)] text-cma-navy leading-[1.1] tracking-[-0.5px]">
                  Featured Exhibits
                </p>
                <div className="flex flex-col gap-[16px]">
                  {current.exhibits.map((exhibit, i) => (
                    <motion.div
                      key={exhibit.slug}
                      className="bg-white border-2 border-black/5 rounded-[20px] p-[20px] flex gap-[20px] md:gap-[28px] items-center"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={exhibit.image}
                        alt={exhibit.title}
                        className="w-[100px] md:w-[140px] h-[80px] md:h-[100px] rounded-[12px] object-cover shrink-0"
                      />
                      <div className="flex flex-col gap-[10px] flex-1 min-w-0">
                        <p className="font-extrabold text-[18px] md:text-[22px] text-cma-navy leading-[1.2] tracking-[-0.5px]">
                          {exhibit.title}
                        </p>
                        <a href={`#/exhibits/${exhibit.slug}`} className="cma-text-link">
                          See Exhibit <FontAwesomeIcon icon={faArrowRight} className="text-[13px]" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
