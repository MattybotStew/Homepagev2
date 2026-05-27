import { useState } from "react"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import imgFloorPlan from "../../assets/exhibits-floor-plan.png"

const mainFloorExhibits = [
  {
    name: "Fundamentally Food",
    ages: "Ages 10 months – 8 years",
    desc: "Experience the farm-to-table journey — pick produce, climb on the John Deere tractor, milk Buttercup the cow, drive the delivery truck, shop in a mini Publix grocery store, and dine in a play café.",
  },
  {
    name: "Gateway to the World",
    ages: "Ages 10 months – 8 years",
    desc: "Climb through the layers of the Earth on a two-story globe, explore six continent tables, launch rockets toward the planets, and discover geology and geography through hands-on play.",
  },
  {
    name: "Leaping into Learning",
    ages: "Ages 0 – 5 years",
    desc: "A magical forest designed for the museum's youngest explorers — with a toddler house, bubble-and-light wall, magnetic fishing pond, treehouse, and puppet theatre.",
  },
  {
    name: "Let Your Creativity Flow",
    ages: "Ages 10 months – 8 years",
    desc: "Release your inner artist at the paint wall, build imaginative worlds at the virtual reality sand tables, and catch daily storytimes, dance parties, and science demos on the CMA stage.",
  },
  {
    name: "Tools For Solutions",
    ages: "Ages 10 months – 8 years",
    desc: "Build, engineer, and discover — from the interconnected ball machine using six simple machines to the construction house, Atlanta city blocks, and the Norilla earthquake design challenge.",
  },
]

type Floor = {
  id: string
  label: string
  content: React.ReactNode
  image: string | null
}

const floors: Floor[] = [
  {
    id: "main",
    label: "Main Floor",
    content: (
      <div className="flex flex-col gap-[16px]">
        <p className="text-cma-navy">
          Five permanent exhibits fill the main floor — plus the CMA stage, art studio, and a sensory-friendly room.
        </p>
        <ul className="flex flex-col gap-[14px]">
          {mainFloorExhibits.map((ex) => (
            <li key={ex.name} className="flex flex-col gap-[2px]">
              <p className="text-cma-navy">
                <strong>{ex.name}</strong>{" "}
                <span className="font-normal text-cma-navy/60 text-[13px]">{ex.ages}</span>
              </p>
              <p className="text-cma-navy">{ex.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    ),
    image: imgFloorPlan,
  },
  {
    id: "walkthrough",
    label: "Walk-Through",
    content: (
      <p className="text-cma-navy">
        Our walk-through exhibits connect spaces and offer discovery around every turn — a perfect way to slow down, look closer, and find the unexpected.
      </p>
    ),
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
                    {floor.content}
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
