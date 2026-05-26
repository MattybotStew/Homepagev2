import { useEffect, useState } from "react"
import { motion } from "motion/react"

const TARGET_DATE = new Date("2026-08-16T17:30:00")

function getTimeLeft() {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownTile({ value, label, delay }: { value: number; label: string; delay: number }) {
  return (
    <motion.div
      className="bg-cma-navy flex-1 rounded-[16px] flex flex-col items-center justify-center gap-2 py-5"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      <span className="font-extrabold text-[clamp(22px,2.5vw,30px)] text-white leading-none tracking-[-1px]">
        {String(value).padStart(2, "0")}
      </span>
      <p className="text-white/80">{label}</p>
    </motion.div>
  )
}

export default function PYVCallout() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-white pt-[48px]">
      <div className="cma-section-container">
        <div className="bg-cma-teal-dark rounded-[24px] border-2 border-black/5 flex flex-col sm:flex-row items-center gap-8 p-8 relative overflow-hidden">
          {/* Decorative rings */}
          <div
            aria-hidden
            className="absolute right-[320px] top-[-115px] w-[511px] h-[581px] pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, transparent 38%, rgba(255,255,255,0.35) 39%, rgba(255,255,255,0.35) 44%, transparent 45%), radial-gradient(circle, transparent 55%, rgba(255,255,255,0.2) 56%, rgba(255,255,255,0.2) 62%, transparent 63%)",
            }}
          />

          {/* Text content */}
          <motion.div
            className="flex-1 flex flex-col gap-8 relative z-[1]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="cma-eyebrow text-cma-blue-light">AUG 16 @ 5:30–7:30 PM</p>
            <h2 className="text-white leading-none tracking-[-1px]">
              TinyCON® Returns This August!
            </h2>
            <p className="text-cma-blue-light">
              Join us for our annual celebration of all things tiny! Interactive exhibits, special guests,
              and hands-on activities for the whole family.
            </p>
            <a
              href="#tickets"
              className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light self-start"
            >
              Explore Memberships
            </a>
          </motion.div>

          {/* Countdown */}
          <div className="shrink-0 flex gap-2 w-full sm:w-[402px] relative z-[1]">
            <CountdownTile value={timeLeft.days} label="Days" delay={0.15} />
            <CountdownTile value={timeLeft.hours} label="Hours" delay={0.22} />
            <CountdownTile value={timeLeft.minutes} label="Minutes" delay={0.29} />
            <CountdownTile value={timeLeft.seconds} label="Seconds" delay={0.36} />
          </div>
        </div>
      </div>
    </div>
  )
}
