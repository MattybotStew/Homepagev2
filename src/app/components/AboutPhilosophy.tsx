import { motion } from "motion/react"
import imgPlay from "../../assets/educators-img-2.webp"

const items = [
  {
    iconBg: "bg-cma-teal",
    title: "Explore",
    body: "Our exhibits invite children to investigate the world around them at their own pace, building curiosity and a love of discovery that lasts a lifetime.",
  },
  {
    iconBg: "bg-cma-orange",
    title: "Experiment",
    body: "From science to art to storytelling, every experience at CMA is hands-on. Children learn by doing, testing ideas, and seeing what happens.",
  },
  {
    iconBg: "bg-cma-orange",
    title: "Imagine",
    body: "Play is where creativity is born. Our spaces are designed to spark imaginative thinking and give children the freedom to create without limits.",
  },
]

export default function AboutPhilosophy() {
  return (
    <section className="bg-white w-full py-[80px] md:py-[120px]">
      <div className="cma-section-container flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center">

        {/* Left: text */}
        <div className="w-full lg:flex-1 flex flex-col gap-8">
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-cma-navy">Play Philosophy</h2>
            <p className="text-cma-navy">
              CMA is more than a museum — we're a nonprofit dedicated to bringing play and learning to every child in Atlanta, including those who might not otherwise have access.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-5"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <div className={`w-[40px] h-[40px] rounded-[10px] shrink-0 mt-[2px] ${item.iconBg}`} />
                <div className="flex flex-col gap-1">
                  <p className="text-cma-teal-dark font-bold text-[15px] leading-snug">{item.title}</p>
                  <p className="text-cma-navy">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <motion.div
          className="w-full lg:w-[480px] shrink-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="rounded-[24px] overflow-hidden h-[320px] lg:h-[480px]">
            <img src={imgPlay} alt="Child playing at the museum" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
