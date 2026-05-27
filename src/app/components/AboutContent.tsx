import { motion } from "motion/react"
import imgPlay from "../../assets/educators-img-1.jpg"

export default function AboutContent() {
  return (
    <section className="bg-white w-full py-[80px] md:py-[120px]">
      <div className="cma-section-container">
        <motion.div
          className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full lg:flex-1 rounded-[24px] overflow-hidden h-[280px] sm:h-[360px] lg:h-[480px] shrink-0">
            <img src={imgPlay} alt="Children exploring museum exhibits" className="w-full h-full object-cover" />
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-6">
            <h2 className="text-cma-navy">The Power of Play</h2>
            <p className="text-cma-navy">
              Why is play essential for childhood development—and how does the Children's Museum of Atlanta help make it possible?
            </p>
            <p className="text-cma-navy font-black text-[clamp(16px,1.8vw,20px)] leading-[1.5]">
              "Play is not just fun—it's how children learn, grow, and discover who they are. Every moment at our museum is designed to spark curiosity, build confidence, and create lasting memories."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
