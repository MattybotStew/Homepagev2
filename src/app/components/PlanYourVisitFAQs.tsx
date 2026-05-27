import { useState } from "react"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import imgFaqPhoto from "figma:asset/pyv-faq-photo.png"

const faqs = [
  {
    question: "Membership Reciprocity",
    answer: (
      <>
        <p className="text-cma-navy">
          If you are a member at another children's museum with Association of Children's Museums (ACM) reciprocal benefits, welcome to Atlanta! You are eligible to receive 50% off general admission for up to six people. A cardholding member must be present. To receive this discount, use promo code <strong>ACMTIX</strong> at checkout. A valid reciprocal membership card and picture ID will be required upon arrival.
        </p>
        <a
          href="https://findachildrensmuseum.org/reciprocal-network/"
          target="_blank"
          rel="noopener noreferrer"
          className="cma-text-link mt-2"
        >
          Click here for more information
        </a>
      </>
    ),
  },
  {
    question: "Recommended Ages",
    answer: (
      <p className="text-cma-navy">
        Our exhibits are developed with children 8 years and younger in mind.
      </p>
    ),
  },
  {
    question: "Duration of Visit",
    answer: (
      <p className="text-cma-navy">
        Most families play for about 2 hours. Your tickets include re-entry on the day of your visit, as capacity allows.
      </p>
    ),
  },
  {
    question: "Code of Conduct",
    answer: (
      <>
        <p className="text-cma-navy"><strong>We Exercise Kindness:</strong> Please use positive, encouraging behavior while inside the Museum. Avoid profane and explicit language, harassment, and aggressive behavior.</p>
        <p className="text-cma-navy"><strong>We Engage in Respectful Behavior:</strong> Please share and take turns. Treat the exhibits well so other guests can enjoy them. We Assume Good Intentions: Children may unintentionally touch or bump into each other while playing. Please be patient and understanding.</p>
        <p className="text-cma-navy"><strong>Stay Together, Play Together:</strong> Adults must stay with their children at all times. Use Walking Feet: No running, please.</p>
        <p className="text-cma-navy"><strong>Make Memories, Don't Miss Them:</strong> You are your child's first teacher and playmate. We encourage a screen-free experience, unless capturing precious memories.</p>
      </>
    ),
  },
  {
    question: "What to Wear",
    answer: (
      <>
        <p className="text-cma-navy">We recommend wearing comfortable "play clothes" and rubber-soled sneakers or shoes since children will be very active. Open-toe sandals, flip-flops, and high heels are strongly discouraged. Shoes must be worn at all times.</p>
        <p className="text-cma-navy">Consider bringing a change of clothes. While we provide aprons and ponchos, children will have the opportunity to play with paint and other messy materials and might get wet playing in our Leaping into Learning fishing area.</p>
        <p className="text-cma-navy">Coat racks are available in the Museum.</p>
      </>
    ),
  },
]

export default function PlanYourVisitFAQs() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="bg-white w-full py-[80px] md:py-[120px]">
      <div className="cma-section-container flex flex-col gap-12 items-center">

        <motion.h2
          className="text-cma-navy text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          Plan Your Visit FAQs
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
          {/* Accordion */}
          <motion.div
            className="flex-1 min-w-0 flex flex-col gap-[10px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={faq.question}
                  className={`border-2 border-black/5 rounded-[24px] overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-8 text-left gap-4"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <h3 className={`${isOpen ? "font-black" : "font-semibold"} text-cma-navy`}>
                      {faq.question}
                    </h3>
                    <FontAwesomeIcon
                      icon={isOpen ? faMinus : faPlus}
                      className="shrink-0 text-cma-orange text-[12px]"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-8 flex flex-col gap-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </motion.div>

          {/* Sidebar card */}
          <motion.div
            className="w-full lg:w-[380px] shrink-0 bg-white border-2 border-black/5 rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="h-[266px] overflow-hidden rounded-t-[20px]">
              <img src={imgFaqPhoto} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-6">
              <h3 className="text-cma-navy">Still have questions?</h3>
              <p className="text-cma-navy">
                Got questions? We've got answers! Find everything you need to know about visiting our museum.
              </p>
              <a href="#contact" className="cma-text-link">
                Contact Us <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
