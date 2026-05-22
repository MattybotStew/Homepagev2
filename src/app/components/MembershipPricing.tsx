import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import imgArrow from "figma:asset/pricing-arrow.svg"
import imgCheck from "figma:asset/pricing-check.svg"

const membershipBenefits = [
  ["Unlimited visits for 2 adults + kids", "50% off guest tickets", "Priority registration for camps"],
  ["Members-only hours 9–10am", "Free admission to 200+ partner museums", "Member-only event invites"],
]

export default function MembershipPricing() {
  const [tab, setTab] = useState<"membership" | "single">("membership")

  return (
    <div className="w-full py-[80px] md:py-[120px] bg-cma-cream">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 md:px-[80px]">

        {/* Heading */}
        <motion.div
          className="flex flex-col gap-[32px] items-center mb-[48px]"
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
            className="flex gap-[10px] p-[8px] rounded-[200px] bg-white border border-[rgba(107,126,160,0.25)]"
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
              <p className="text-center uppercase font-bold text-[18px] text-white/80 tracking-[3.9px]">
                Family Membership • 12 Months
              </p>

              {/* Price + CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] sm:gap-[32px]">
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
                  className="inline-flex items-center justify-center rounded-[1000px] shrink-0 self-start sm:self-auto transition-colors duration-200 hover:bg-[#c8701a] bg-cma-orange font-bold text-[18px] text-cma-navy px-[24px] py-[13px]"
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
              <p className="text-center uppercase font-bold text-[18px] text-cma-navy/80 tracking-[3.9px]">
                Single Visit • One Visit
              </p>

              {/* Price + CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] sm:gap-[32px]">
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
                  className="inline-flex items-center justify-center rounded-[1000px] shrink-0 self-start sm:self-auto transition-colors duration-200 hover:opacity-90 bg-cma-navy font-bold text-[18px] text-white px-[24px] py-[13px]"
                >
                  Buy Tickets
                </a>
              </div>

              {/* Divider */}
              <div className="h-px bg-black/15" />

              {/* Per-ticket prices */}
              <div className="grid grid-cols-3 gap-x-[16px] gap-y-[32px]">
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
              <div className="flex items-center gap-[10px] self-start rounded-[20px] px-[16px] py-[8px] bg-cma-teal-pale">
                <div className="rotate-90 shrink-0">
                  <img src={imgArrow} alt="" aria-hidden className="w-[16px] h-[6px] block" />
                </div>
                <p className="uppercase font-extrabold text-[14px] text-cma-blue-mid leading-[1.14]">
                  Coming back? A membership covers your next visit free.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
