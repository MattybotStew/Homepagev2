import { useState } from "react"
import { motion } from "motion/react"
import { ChevronDown } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import imgMap from "figma:asset/pyv-map.png"

const regularHours = [
  { day: "Monday", hours: "10:00 AM – 3:30 PM" },
  { day: "Tuesday", hours: "10:00 AM – 3:30 PM" },
  { day: "Wednesday", hours: "10:00 AM – 3:30 PM" },
  { day: "Thursday", hours: "10:00 AM – 3:30 PM" },
  { day: "Friday", hours: "10:00 AM – 3:30 PM" },
  { day: "Saturday", hours: "9:30 AM – 4:30 PM" },
  { day: "Sunday", hours: "9:30 AM – 4:30 PM" },
]

const holidayHours = [
  { day: "New Year's Day", hours: "10:00 AM – 3:30 PM" },
  { day: "Memorial Day", hours: "10:00 AM – 3:30 PM" },
  { day: "July 4th", hours: "10:00 AM – 3:30 PM" },
  { day: "Labor Day", hours: "10:00 AM – 3:30 PM" },
  { day: "Thanksgiving", hours: "Closed" },
  { day: "Christmas Eve", hours: "10:00 AM – 3:30 PM" },
  { day: "Christmas Day", hours: "Closed" },
]

function HoursTable({ rows }: { rows: { day: string; hours: string }[] }) {
  return (
    <div className="flex flex-col">
      {rows.map(({ day, hours }) => (
        <div key={day} className="flex flex-col">
          <div className="flex items-center justify-between py-4 text-[12px] font-medium leading-[1.5]">
            <span className="text-cma-navy">{day}</span>
            <span className={hours === "Closed" ? "text-cma-navy font-bold" : "text-[#6b7ea0]"}>{hours}</span>
          </div>
          <div className="h-px bg-cma-blue-light" />
        </div>
      ))}
    </div>
  )
}

const navItems = [
  "Hours & Address",
  "Location, Parking & Directions",
  "What to Bring",
  "Food & Amenities",
  "Safety & Cleanliness",
  "Accessibility",
]

const placeholderContent: Record<string, { title: string; body: string }> = {
  "Location, Parking & Directions": {
    title: "Getting Here",
    body: "We're located at 275 Centennial Olympic Park Dr NW, Atlanta, GA 30313. Convenient parking is available nearby. We're also accessible via MARTA — take the Blue/Green line to the Dome/GWCC/Philips Arena/CNN Center station.",
  },
  "What to Bring": {
    title: "What to Bring",
    body: "Wear comfortable, play-ready clothing and closed-toe shoes. Bring a stroller if needed — stroller parking is available inside. Pack your own snacks (outside food is welcome in designated areas). Members, don't forget your membership card!",
  },
  "Food & Amenities": {
    title: "Food & Amenities",
    body: "Snack Stop offers light bites and beverages for purchase. Outside snacks are welcome in designated eating areas. Lockers are available to store belongings. Family restrooms and diaper-changing stations are on every floor.",
  },
  "Safety & Cleanliness": {
    title: "Safety & Cleanliness",
    body: "Our staff is dedicated to maintaining a safe, clean environment. Exhibits are sanitized daily. We require a 1:5 adult-to-child ratio at all times. Adults without children are not permitted to enter.",
  },
  Accessibility: {
    title: "Accessibility",
    body: "The Children's Museum of Atlanta is fully ADA-accessible. Elevators, accessible restrooms, and sensory-friendly quiet rooms are available. Service animals are welcome. Contact us in advance for any special accommodations.",
  },
}

function TabContent({ item }: { item: string }) {
  if (item === "Hours & Address") {
    return (
      <div className="flex flex-col gap-12">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Hours columns */}
          <div className="flex flex-col sm:flex-row xl:flex-col gap-6 flex-1 min-w-0">
            <div className="flex-1 flex flex-col gap-4">
              <h4 className="text-cma-navy font-bold">Regular Hours</h4>
              <HoursTable rows={regularHours} />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <h4 className="text-cma-navy font-bold">Holiday Hours</h4>
              <HoursTable rows={holidayHours} />
            </div>
          </div>

          {/* Address sidebar */}
          <div className="w-full xl:w-[360px] shrink-0 flex flex-col gap-8">
            <h3 className="text-cma-navy">Address</h3>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-cma-teal-dark leading-[1.65] hover:underline">
              275 Centennial Olympic Park Dr NW<br />Atlanta, GA 30313
            </a>
            <a href="tel:4046595437" className="text-cma-teal-dark text-[20px] font-black leading-[1.1] hover:underline">
              404-659-5437
            </a>
            <div className="flex gap-4 items-center">
              {[
                { icon: faFacebook, href: "https://www.facebook.com/childrensmuseumofatlanta" },
                { icon: faInstagram, href: "https://www.instagram.com/childrensmuseumofatlanta/" },
                { icon: faTiktok, href: "https://www.tiktok.com/@childrensmuseumatlanta" },
              ].map(({ icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cma-social-btn-filled"
                >
                  <FontAwesomeIcon icon={icon} className="text-[18px] text-white" />
                </a>
              ))}
            </div>
            <div className="rounded-[24px] overflow-hidden h-[200px]">
              <img src={imgMap} alt="Map showing museum location" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#tickets" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
            Buy Tickets
          </a>
          <a href="#parking" className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black">
            Parking Guide
          </a>
        </div>

        {/* Quieter Experience callout */}
        <div className="bg-cma-teal-dark border-2 border-black/5 rounded-[24px] p-8 flex flex-col gap-6">
          <h2 className="text-white leading-none">Looking for a Quieter Experience?</h2>
          <p className="text-cma-blue-light">
            <span className="font-black text-white">Member-Only Hours: </span>
            Monday, Tuesday, Thursday, Friday, 9–10 a.m. Enjoy exclusive early access before general admission opens. It's quieter, less crowded, and perfect for young children.
          </p>
          <p className="text-cma-blue-light">
            <span className="font-black text-white">Avoid Field Trip Groups: </span>
            School groups visit Monday–Friday from 10 a.m. – 12:30 p.m. For a quieter experience, visit after 12:30 on weekdays.
          </p>
          <p className="text-cma-blue-light">
            <span className="font-black text-white">Pro-tip: </span>
            Escape weekday crowds during the school year and head to Building Blocks in the Art Studio from 10 a.m.–12 p.m. for fun facilitated activities for babies, toddlers, and pre-kindergarteners.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-cma-navy">{placeholderContent[item]?.title ?? item}</h3>
      <p className="text-cma-navy">{placeholderContent[item]?.body}</p>
    </div>
  )
}

export default function PlanTabs() {
  const [active, setActive] = useState(navItems[0])
  const [openItem, setOpenItem] = useState<string | null>(navItems[0])

  return (
    <section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
      <div className="cma-section-container flex flex-col gap-12 items-center">

        {/* Heading */}
        <motion.div
          className="flex flex-col gap-8 items-center text-center w-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-cma-navy">Before You Arrive</h2>
          <p className="text-cma-navy max-w-[560px]">
            Find everything you need to pick your perfect play day.
          </p>
          <div className="bg-white border border-[rgba(107,126,160,0.25)] rounded-[200px] px-[25px] py-[17px] text-cma-blue-mid text-center max-w-[720px]">
            <span className="font-black">Important: </span>
            We're closed Wednesdays in August–June, Thanksgiving and Christmas Day. Plan ahead and book tickets online to guarantee your spot!
          </div>
        </motion.div>

        {/* Mobile accordion (hidden at lg+) */}
        <motion.div
          className="flex flex-col gap-3 w-full lg:hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {navItems.map((item) => {
            const isOpen = openItem === item
            return (
              <div
                key={item}
                className="bg-white border-2 border-black/5 rounded-[24px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : item)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
                    isOpen ? "bg-cma-orange" : ""
                  }`}
                >
                  <span className={`font-bold text-[15px] ${isOpen ? "text-white" : "text-cma-navy"}`}>{item}</span>
                  <ChevronDown className={`size-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : "text-cma-navy"}`} />
                </button>
                {isOpen && (
                  <div className="p-6">
                    <TabContent item={item} />
                  </div>
                )}
              </div>
            )
          })}
        </motion.div>

        {/* Desktop sidebar + content (hidden below lg) */}
        <motion.div
          className="hidden lg:flex flex-row gap-8 items-start w-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {/* Left nav */}
          <div className="w-[220px] shrink-0">
            <div className="bg-white border border-[#e4e8ee] rounded-[16px] overflow-hidden">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`w-full flex items-center justify-between px-5 py-[18px] text-left border-b border-[#e4e8ee] last:border-b-0 transition-colors
                    ${active === item
                      ? "bg-cma-orange text-white font-bold"
                      : "bg-white text-cma-navy hover:bg-cma-blue-light"
                    }`}
                >
                  <span>{item}</span>
                  <span className={`text-[18px] leading-none ${active === item ? "text-white" : "text-cma-navy opacity-50"}`}>›</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content panel */}
          <div className="bg-white border-2 border-black/5 rounded-[24px] flex-1 min-w-0">
            <div className="p-8 md:p-12">
              <TabContent item={active} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
