import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import imgArrow from "figma:asset/pricing-arrow.svg"
import imgCheck from "figma:asset/pricing-check.svg"
import imgWaveWhite from "figma:asset/wave-white.svg"

const membershipBenefits = [
  ["Unlimited visits for 2 adults + kids", "50% off guest tickets", "Priority registration for camps"],
  ["Members-only hours 9–10am", "Free admission to 200+ partner museums", "Member-only event invites"],
]

export default function MembershipPricing() {
  const [tab, setTab] = useState<"membership" | "single">("membership")

  return (
    <div className="w-full py-[80px] md:py-[120px] bg-cma-cream relative overflow-hidden">
      <div className="cma-section-container">

        {/* Heading */}
        <motion.div
          className="flex flex-col gap-6 md:gap-[32px] items-center mb-8 md:mb-[48px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-center leading-none text-cma-navy">
            Visit More, Pay Less
          </h2>
          <p className="text-center font-medium text-[18px] text-cma-navy leading-[1.7]">
            One family membership pays for itself in just 2 visits
          </p>

          {/* Tab switcher */}
          <div
            className="flex flex-wrap justify-center gap-[8px] p-[8px] rounded-2xl sm:rounded-[200px] bg-white border border-[rgba(107,126,160,0.25)] w-full sm:w-auto"
          >
            {/* Family Membership tab */}
            <button
              onClick={() => setTab("membership")}
              className={`flex items-center gap-[6px] min-h-[44px] px-[24px] rounded-[1000px] transition-colors duration-200 ${tab === "membership" ? "bg-cma-navy" : "bg-transparent"}`}
            >
              <span className={`font-extrabold text-[14px] leading-[1.14] whitespace-nowrap ${tab === "membership" ? "text-white" : "text-cma-navy"}`}>
                Family Membership
              </span>
              <span className={`flex items-center justify-center px-[8px] py-[4px] rounded-full ${tab === "membership" ? "bg-white" : "bg-[rgba(247,148,30,0.1)]"}`}>
                <span className={`font-extrabold text-[10px] tracking-[0.5px] uppercase whitespace-nowrap ${tab === "membership" ? "text-cma-navy" : "text-cma-orange-dark"}`}>
                  Best Value
                </span>
              </span>
            </button>

            {/* Single Visit tab */}
            <button
              onClick={() => setTab("single")}
              className={`flex items-center justify-center min-h-[44px] px-[24px] rounded-[1000px] transition-colors duration-200 ${tab === "single" ? "bg-cma-navy" : "bg-transparent"}`}
            >
              <span className={`font-extrabold text-[14px] leading-[1.14] whitespace-nowrap ${tab === "single" ? "text-white" : "text-cma-navy"}`}>
                Single Visit
              </span>
            </button>
          </div>
        </motion.div>

        {/* Card */}
        <AnimatePresence mode="wait">
          {tab === "membership" ? (
            <motion.div
              key="membership"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-[24px] p-[40px] md:p-[64px] flex flex-col gap-[32px] bg-cma-teal-dark"
            >
              {/* Eyebrow */}
              <p className="cma-eyebrow text-center text-white/80">
                Family Membership • 12 Months
              </p>

              {/* Price + CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[20px]">
                <div className="flex items-end gap-[8px] min-w-0">
                  <span className="font-extrabold text-[clamp(56px,7vw,87px)] text-white tracking-[-3px] leading-none">
                    $175
                  </span>
                  <span className="font-semibold text-[24px] text-cma-blue-light leading-[1.4] pb-[6px]">
                    /year $14.58/mo
                  </span>
                </div>
                <a
                  href="#membership"
                  className="cma-btn shrink-0 bg-cma-orange text-cma-navy hover:bg-cma-orange-dark text-[18px]"
                >
                  Become a Member
                </a>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/20" />

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[32px]">
                {membershipBenefits.map((col, ci) => (
                  <div key={ci} className="flex flex-col">
                    {col.map((item, ii) => (
                      <div
                        key={ii}
                        className="flex items-center gap-[12px] py-[14px] border-b border-white/20"
                      >
                        <img src={imgCheck} alt="" aria-hidden className="w-[18px] h-[18px] shrink-0 block" />
                        <span className="font-bold text-[15px] text-white">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="single"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-[24px] p-[40px] md:p-[64px] flex flex-col gap-[32px] bg-white"
            >
              {/* Eyebrow */}
              <p className="cma-eyebrow text-center text-cma-navy/80">
                Single Visit • One Visit
              </p>

              {/* Price + CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[20px]">
                <div className="flex items-end gap-[8px] min-w-0">
                  <span className="font-extrabold text-[clamp(56px,7vw,87px)] text-cma-navy tracking-[-3px] leading-none">
                    $83.80
                  </span>
                  <span className="font-semibold text-[24px] text-cma-navy leading-[1.4] pb-[6px]">
                    family of 4
                  </span>
                </div>
                <a
                  href="#tickets"
                  className="cma-btn shrink-0 bg-cma-navy text-white hover:opacity-90 text-[18px]"
                >
                  Buy Tickets
                </a>
              </div>

              {/* Divider */}
              <div className="h-px bg-black/15" />

              {/* Per-ticket prices */}
              <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-x-[16px] gap-y-6 sm:gap-y-[32px]">
                {[
                  { label: "Child / Senior", price: "$19.95" },
                  { label: "Adult", price: "$21.95" },
                  { label: "Family of Four", price: "$83.80" },
                ].map(({ label, price }) => (
                  <div key={label} className="flex flex-col gap-[8px] sm:gap-[16px]">
                    <p className="uppercase font-bold text-[clamp(10px,1.5vw,14px)] text-cma-navy/80 tracking-[2px]">
                      {label}
                    </p>
                    <p className="font-extrabold text-[clamp(22px,4vw,48px)] text-cma-navy tracking-[-2px] leading-none">
                      {price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Upsell pill */}
              <div className="flex items-start sm:items-center gap-[10px] self-start rounded-[20px] px-[16px] py-[8px] bg-cma-teal-pale">
                <div className="rotate-90 shrink-0 mt-[3px] sm:mt-0">
                  <img src={imgArrow} alt="" aria-hidden className="w-[16px] h-[6px] block" />
                </div>
                <p className="uppercase font-extrabold text-[12px] sm:text-[14px] text-cma-blue-mid leading-[1.4]">
                  Coming back? A membership covers your next visit free.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      <div aria-hidden className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <img key={i} src={imgWaveWhite} alt="" className="w-[422px] h-[57px] shrink-0 block" />
        ))}
      </div>
    </div>
  )
}
