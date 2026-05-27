import { motion } from "motion/react"
import imgHistory from "../../assets/history.webp"

const milestones = [
  {
    year: "1988",
    iconBg: "bg-cma-teal",
    yearColor: "text-cma-orange",
    body: "Children's Museum of Atlanta is founded, with a passionate group of community leaders committed to bringing play-based learning to the children of Atlanta.",
  },
  {
    year: "2003",
    iconBg: "bg-cma-orange",
    yearColor: "text-cma-teal-dark",
    body: "After a major community fundraising campaign, the museum opens its permanent home at 275 Centennial Olympic Park Drive — right in the heart of downtown Atlanta.",
  },
  {
    year: "3.8M+",
    iconBg: "bg-cma-orange",
    yearColor: "text-cma-navy",
    body: "Total visitors have passed through our doors since opening — families, school groups, and community members creating a lifetime of play-based memories.",
  },
  {
    year: "Today",
    iconBg: "bg-cma-teal",
    yearColor: "text-cma-orange",
    body: "We continue to grow as Atlanta's premier destination for hands-on learning, issuing 34,000+ free and reduced tickets annually and reaching 8,000+ kids through community outreach.",
  },
]

export default function AboutHistory() {
  return (
    <section className="bg-white w-full py-[80px] md:py-[120px]" id="history">
      <div className="cma-section-container flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-start">

        {/* Left: heading, intro, timeline */}
        <div className="flex-1 flex flex-col gap-8">
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-cma-navy">Our History</h2>
            <p className="text-cma-navy max-w-[520px]">
              Founded in 1988, Children's Museum of Atlanta opened its permanent home in Centennial Olympic Park in 2003. Since then, it has become Atlanta's premier destination for hands-on, exploratory learning for young children — a recognized authority on informal learning and a signature element of Atlanta's cultural landscape.
            </p>
          </motion.div>

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                {/* Icon + year label row */}
                <div className="flex items-center gap-4">
                  <div className={`w-[32px] h-[32px] rounded-[8px] shrink-0 ${m.iconBg}`} />
                  <p className={`font-black text-[clamp(28px,3.75vw,48px)] leading-none ${m.yearColor}`}>{m.year}</p>
                </div>
                {/* Body text — indented to align with year */}
                <div className="pl-[48px]">
                  <p className="text-cma-navy">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <motion.div
          className="w-full lg:w-[480px] shrink-0 lg:sticky lg:top-[140px] self-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="rounded-[24px] overflow-hidden h-[360px] lg:h-[560px]">
            <img src={imgHistory} alt="Children's Museum of Atlanta building exterior" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
