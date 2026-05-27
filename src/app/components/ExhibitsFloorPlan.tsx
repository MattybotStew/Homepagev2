import { useState } from "react"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import imgFloorPlan from "../../assets/exhibits-floor-plan.png"

const floors = [
  {
    id: "main",
    label: "Main Floor",
    description: "Explore six exhibits, the stage, art studio, and a sensory-friendly room. In this open, free-flowing space, families explore at their own pace, following curiosity and joy from one hands-on experience to the next, with something new to discover around every corner.",
    image: imgFloorPlan,
  },
  {
    id: "mezzanine",
    label: "Mezzanine",
    description: "The mezzanine level offers bird's-eye views of the main floor and additional programming space for special events and workshops.",
    image: null,
  },
  {
    id: "walkthrough",
    label: "Walk-Through",
    description: "Our walk-through exhibits connect spaces and offer discovery around every turn — a perfect way to slow down, look closer, and find the unexpected.",
    image: null,
  },
]

export default function ExhibitsFloorPlan() {
  const [openId, setOpenId] = useState("main")

  return (
    <section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
      <div className="cma-section-container flex flex-col gap-[48px]">

        <motion.div
          className="flex flex-col gap-[16px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-cma-navy leading-none tracking-[-1px]">Take a Look Inside</h2>
          <p className="text-cma-navy">
            Check out the Museum's current and upcoming featured exhibits!{" "}
            <a href="#exhibits" className="cma-text-link">Click below for more info.</a>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-[10px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {floors.map((floor) => {
            const isOpen = openId === floor.id
            return (
              <div
                key={floor.id}
                className={`border-2 border-black/5 rounded-[24px] overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
              >
                <button
                  className="w-full flex items-center justify-between px-[24px] py-[20px] md:py-[32px]"
                  onClick={() => setOpenId(isOpen ? "" : floor.id)}
                >
                  <h3 className={`${isOpen ? "font-black" : "font-semibold"} text-cma-navy`}>{floor.label}</h3>
                  <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="shrink-0 text-cma-orange text-[12px]" />
                </button>

                {isOpen && (
                  <div className="px-[24px] pb-[32px] flex flex-col gap-[24px]">
                    <p className="text-cma-navy">{floor.description}</p>
                    {floor.image && (
                      <div className="bg-white rounded-[20px] p-[24px] overflow-hidden">
                        <img src={floor.image} alt={`${floor.label} floor plan`} className="w-full h-auto rounded-[12px]" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
