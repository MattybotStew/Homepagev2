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
        Our exhibits are designed for children ages 0–8. Older siblings and adults are welcome to accompany younger children and help facilitate play.
      </p>
    ),
  },
  {
    question: "Duration of Visit",
    answer: (
      <p className="text-cma-navy">
        Most families spend 2–3 hours exploring. Your ticket includes all-day access and re-entry on the same day, so you're welcome to take a lunch break and come back.
      </p>
    ),
  },
  {
    question: "Code of Conduct",
    answer: (
      <p className="text-cma-navy">
        We ask all guests to be respectful of other visitors and staff. Children must be supervised at all times. Disruptive behavior may result in removal from the museum without a refund.
      </p>
    ),
  },
  {
    question: "What to Wear",
    answer: (
      <p className="text-cma-navy">
        Wear comfortable clothes that can get a little messy — we have water and art exhibits! Closed-toe shoes are recommended for climbing structures.
      </p>
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
