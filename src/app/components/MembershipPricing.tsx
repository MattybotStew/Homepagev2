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
    <div className="w-full py-[80px] md:py-[120px]" style={{ backgroundColor: "#fdf6ee" }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 md:px-[80px]">

        {/* Heading */}
        <motion.div
          className="flex flex-col gap-[32px] items-center mb-[48px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-center leading-none"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 70px)",
              color: "#1d3e6b",
              letterSpacing: "-1px",
            }}
          >
            Visit More, Pay Less
          </h2>
          <p
            className="text-center"
            style={{ fontFamily: "Nunito, sans-serif", fontWeight: 500, fontSize: 18, color: "#1d3e6b", lineHeight: 1.7 }}
          >
            One family membership pays for itself in just 2 visits
          </p>

          {/* Tab switcher */}
          <div
            className="flex gap-[10px] p-[8px] rounded-[200px] bg-white"
            style={{ border: "1px solid rgba(107,126,160,0.25)" }}
          >
            {/* Family Membership tab */}
            <button
              onClick={() => setTab("membership")}
              className="flex items-center gap-[6px] h-[42px] px-[24px] rounded-[1000px] transition-colors duration-200"
              style={{ backgroundColor: tab === "membership" ? "#1d3e6b" : "transparent" }}
            >
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: 14,
                  lineHeight: 1.14,
                  color: tab === "membership" ? "#ffffff" : "#1d3e6b",
                  whiteSpace: "nowrap",
                }}
              >
                Family Membership
              </span>
              <span
                className="flex items-center justify-center px-[8px] py-[4px] rounded-full"
                style={{
                  backgroundColor: tab === "membership" ? "white" : "rgba(247,148,30,0.1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 800,
                    fontSize: 10,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color: tab === "membership" ? "#1d3e6b" : "#b8620a",
                    whiteSpace: "nowrap",
                  }}
                >
                  Best Value
                </span>
              </span>
            </button>

            {/* Single Visit tab */}
            <button
              onClick={() => setTab("single")}
              className="flex items-center justify-center h-[42px] px-[24px] rounded-[1000px] transition-colors duration-200"
              style={{ backgroundColor: tab === "single" ? "#1d3e6b" : "transparent" }}
            >
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: 14,
                  lineHeight: 1.14,
                  color: tab === "single" ? "#ffffff" : "#1d3e6b",
                  whiteSpace: "nowrap",
                }}
              >
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
              className="w-full rounded-[24px] p-[40px] md:p-[64px] flex flex-col gap-[32px]"
              style={{ backgroundColor: "#007c87" }}
            >
              {/* Eyebrow */}
              <p
                className="text-center uppercase"
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 18, color: "rgba(255,255,255,0.8)", letterSpacing: "3.9px" }}
              >
                Family Membership • 12 Months
              </p>

              {/* Price + CTA row */}
              <div className="flex flex-wrap gap-[32px] items-center">
                <div className="flex items-end gap-[8px] flex-1 min-w-0">
                  <span
                    style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "clamp(56px, 7vw, 87px)", color: "#ffffff", letterSpacing: "-3px", lineHeight: 1 }}
                  >
                    $175
                  </span>
                  <span
                    style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: 24, color: "#d4e3f3", lineHeight: 1.4, paddingBottom: 6 }}
                  >
                    /year $14.58/mo
                  </span>
                </div>
                <a
                  href="#membership"
                  className="inline-flex items-center justify-center rounded-[1000px] shrink-0 transition-colors duration-200 hover:bg-[#c8701a]"
                  style={{ backgroundColor: "#f7941e", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 18, color: "#1d3e6b", paddingLeft: 24, paddingRight: 24, paddingTop: 13, paddingBottom: 13 }}
                >
                  Become a Member
                </a>
              </div>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.2)" }} />

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[32px]">
                {membershipBenefits.map((col, ci) => (
                  <div key={ci} className="flex flex-col">
                    {col.map((item, ii) => (
                      <div
                        key={ii}
                        className="flex items-center gap-[12px] py-[14px]"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                      >
                        <img src={imgCheck} alt="" aria-hidden style={{ width: 18, height: 18, flexShrink: 0, display: "block" }} />
                        <span
                          style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 15, color: "#ffffff" }}
                        >
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
              <p
                className="text-center uppercase"
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 18, color: "rgba(29,62,107,0.8)", letterSpacing: "3.9px" }}
              >
                Single Visit • One Visit
              </p>

              {/* Price + CTA row */}
              <div className="flex flex-wrap gap-[32px] items-center">
                <div className="flex items-end gap-[8px] flex-1 min-w-0">
                  <span
                    style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "clamp(56px, 7vw, 87px)", color: "#1d3e6b", letterSpacing: "-3px", lineHeight: 1 }}
                  >
                    $83.80
                  </span>
                  <span
                    style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: 24, color: "#1d3e6b", lineHeight: 1.4, paddingBottom: 6 }}
                  >
                    family of 4
                  </span>
                </div>
                <a
                  href="#tickets"
                  className="inline-flex items-center justify-center rounded-[1000px] shrink-0 transition-colors duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#1d3e6b", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 18, color: "#ffffff", paddingLeft: 24, paddingRight: 24, paddingTop: 13, paddingBottom: 13 }}
                >
                  Buy Tickets
                </a>
              </div>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: "rgba(0,0,0,0.15)" }} />

              {/* Per-ticket prices */}
              <div className="flex flex-wrap gap-[32px]">
                {[
                  { label: "Child / Senior", price: "$19.95" },
                  { label: "Adult", price: "$21.95" },
                  { label: "Family of Four", price: "$83.80" },
                ].map(({ label, price }) => (
                  <div key={label} className="flex flex-col gap-[16px]">
                    <p
                      className="uppercase"
                      style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 14, color: "rgba(29,62,107,0.8)", letterSpacing: "2px" }}
                    >
                      {label}
                    </p>
                    <p
                      style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 48px)", color: "#1d3e6b", letterSpacing: "-3px", lineHeight: 1 }}
                    >
                      {price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Upsell pill */}
              <div className="flex items-center gap-[10px] self-start rounded-[20px] px-[16px] py-[8px]" style={{ backgroundColor: "#cceff1" }}>
                <div style={{ transform: "rotate(90deg)", flexShrink: 0 }}>
                  <img src={imgArrow} alt="" aria-hidden style={{ width: 16, height: 6, display: "block" }} />
                </div>
                <p
                  className="uppercase"
                  style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: 14, color: "#346094", lineHeight: 1.14 }}
                >
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
