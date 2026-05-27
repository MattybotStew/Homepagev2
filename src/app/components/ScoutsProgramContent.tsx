import { useState, useEffect } from "react"
import { Facebook, Instagram } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRight,
  faClock,
  faTag,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { motion } from "motion/react"
import imgHero from "../../assets/educators-img-2.jpg"

// ── Data ────────────────────────────────────────────────────────────────────

const sections = [
  { id: "overview",         label: "Overview" },
  { id: "workshop-weekends", label: "Workshop Weekends" },
  { id: "on-demand",        label: "On-Demand Workshops" },
  { id: "workshop-details", label: "Workshop Details" },
  { id: "sleepover",        label: "Girl Scout Sleepover" },
  { id: "newsletter",       label: "Scout Newsletter" },
]

const workshopWeekends = [
  {
    date: "October 17–18",
    title: "Coding for Good",
    description: "Scouts will earn their Coding for Good STEM badge in this hands-on workshop. Learn coding basics and work together to overcome challenges by using this powerful tool.",
    href: "#",
  },
  {
    date: "November 14–15",
    title: "Craft and Tinker",
    description: "Scouts can work toward earning their Craft and Tinker badge and learn about the engineering process by inventing, designing, and building a prototype of a toy. Participants will use imaginative play and critical thinking to create a toy out of materials provided.",
    href: "#",
  },
  {
    date: "February 6–7",
    title: "What Robots Do",
    description: "Girl Scouts will learn all about what robots are and the different tasks robots can be designed to do. Participants will then use engineering concepts to work together to design a robot to help in the event of a natural disaster, and learn ways that robots help people in the real world.",
    href: "#",
  },
  {
    date: "March 13–14",
    title: "Automotive Design",
    description: "Scouts will learn the basics of car design, assess customer needs, and use the design thinking process to sketch and sculpt 3D models of their dream vehicles.",
    href: "#",
  },
]

const workshopDetails = [
  {
    icon: faTag,
    color: "bg-cma-teal-dark",
    label: "Pricing",
    description: "$250 per workshop — includes workshop experience, playtime, Museum fun patch, and completion certificate for up to 12 scouts and 3 adults. Contact Reservations for additional-person pricing.",
  },
  {
    icon: faClock,
    color: "bg-cma-orange",
    label: "Length of Program",
    description: "3-hour total experience: up to 1 hour of workshop programming followed by 2 hours of playtime on the Museum floor.",
  },
  {
    icon: faUsers,
    color: "bg-cma-slate",
    label: "Group Size",
    description: "Up to 12 scouts and 3 adults per workshop. Additional scouts and adults may be added for an additional cost per person.",
  },
  {
    icon: faStar,
    color: "bg-[#3a9e6e]",
    label: "Badges & Certificates",
    description: "Scouts receive a certificate of completion and a Museum Fun Patch. All official badges must be ordered through Girl Scouts of America.",
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 140
  window.scrollTo({ top, behavior: "smooth" })
}

const inputClass = "px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white text-cma-navy placeholder:text-cma-navy/30 outline-none focus:border-cma-teal-dark transition-colors w-full"
const labelClass = "text-cma-navy font-bold text-[13px]"

function Divider() {
  return <div className="bg-black/10 h-px w-full" />
}

// ── Component ────────────────────────────────────────────────────────────────

export default function ScoutsProgramContent() {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const observers = sections.map((section) => {
      const el = document.getElementById(section.id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(section.id) },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <section className="bg-cma-cream py-[60px] md:py-[80px]">
      <div className="shrink-0 h-[100px] sm:h-[108px] md:h-[120px] xl:h-[126px]" />

      <div className="cma-section-container">

        {/* Breadcrumb + Social */}
        <div className="flex items-center justify-between flex-wrap gap-[12px] mb-[24px]">
          <div className="flex items-center gap-[8px] flex-wrap text-[15px]">
            <a href="#/educators" className="text-cma-navy hover:underline">Educators</a>
            <span className="text-cma-navy text-[18px]">›</span>
            <span className="text-cma-teal-dark">Scout Workshops</span>
          </div>
          <div className="flex gap-[16px] items-center shrink-0">
            <a href="https://www.facebook.com/childrensmuseumofatlanta" target="_blank" rel="noopener noreferrer" className="cma-social-btn-filled shrink-0" aria-label="Share on Facebook">
              <Facebook className="size-5 text-white" />
            </a>
            <a href="https://www.instagram.com/childrensmuseumofatlanta/" target="_blank" rel="noopener noreferrer" className="cma-social-btn-filled shrink-0" aria-label="Share on Instagram">
              <Instagram className="size-5 text-white" />
            </a>
          </div>
        </div>

        {/* Mobile section nav */}
        <div className="lg:hidden flex gap-[8px] overflow-x-auto pb-[8px] mb-[24px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`shrink-0 px-[16px] py-[8px] rounded-full text-[13px] font-bold whitespace-nowrap transition-colors ${
                activeSection === section.id
                  ? "bg-cma-navy text-white"
                  : "bg-white text-cma-navy border border-[rgba(107,126,160,0.25)] hover:bg-cma-blue-light"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="flex gap-[40px] xl:gap-[56px] items-start">

          {/* ── Sticky sidebar ── */}
          <aside className="hidden lg:flex flex-col gap-[20px] w-[210px] shrink-0 sticky top-[140px] self-start">
            <div className="bg-white rounded-[20px] border border-[rgba(107,126,160,0.15)] p-[20px] flex flex-col gap-[4px]">
              <p className="cma-eyebrow text-cma-navy/40 text-[10px] mb-[12px]">Jump to</p>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-[10px] py-[8px] px-[10px] rounded-[10px] text-[13px] font-bold leading-[1.3] transition-colors w-full text-left ${
                    activeSection === section.id
                      ? "bg-cma-navy/5 text-cma-navy"
                      : "text-cma-navy/45 hover:text-cma-navy hover:bg-cma-navy/5"
                  }`}
                >
                  <span className={`w-[6px] h-[6px] rounded-full shrink-0 transition-colors ${activeSection === section.id ? "bg-cma-orange" : "bg-cma-navy/20"}`} />
                  {section.label}
                </button>
              ))}
            </div>

            <div className="bg-cma-navy rounded-[20px] p-[20px] flex flex-col gap-[12px]">
              <p className="font-extrabold text-[14px] text-white leading-[1.3]">Join our Scout Newsletter!</p>
              <p className="text-white/75 text-[13px] leading-[1.5]">Be the first to know about upcoming Scout programs, badge workshops, and museum events.</p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-[12px] py-[10px] rounded-[10px] bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-colors"
              />
              <button className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
                Stay In The Loop!
              </button>
            </div>
          </aside>

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">

              {/* ── Overview ── */}
              <div id="overview" className="flex flex-col gap-[24px]">
                <img src={imgHero} alt="Scout Workshops at Children's Museum of Atlanta" className="w-full h-[220px] sm:h-[300px] object-cover rounded-[20px]" />
                <h1 className="text-cma-navy !text-[clamp(28px,3.75vw,48px)] !leading-[1.05] !tracking-[-1px] !font-extrabold">
                  Scout Workshops
                </h1>
                <p className="text-cma-navy">
                  From badge-earning workshops to special events like our overnight adventures, our STEM based, hands-on programs are designed to engage scouts, spark curiosity, and make learning fun.
                </p>
                <p className="text-cma-navy">
                  Currently serving Girl Scouts, and soon welcoming Scouts of America, this is your one-stop spot to explore and plan your scout's next adventure.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-[12px]">
                  <button onClick={() => scrollToSection("workshop-weekends")} className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto">
                    See Workshop Dates
                  </button>
                  <button onClick={() => scrollToSection("on-demand")} className="cma-btn cma-btn-outline-teal font-black w-full sm:w-auto">
                    Request a Workshop
                  </button>
                </div>
              </div>

              <Divider />

              {/* ── Girl Scout Workshop Weekends ── */}
              <div id="workshop-weekends" className="flex flex-col gap-[24px]">
                <h2 className="text-cma-navy">Girl Scout Workshop Weekends</h2>
                <p className="text-cma-navy">
                  Bring your troop to the Museum for STEM-themed workshop weekends! Scouts can earn select Daisy and Brownie STEM badges, take home a special Museum patch, and receive a badge completion certificate. Workshops include a 45-minute–1 hour session with one of our trained educators and 2 hours of free play in the Museum for up to 12 scouts and 3 adults — a perfect mix of learning, play, and fun!
                </p>

                <div className="flex flex-col gap-[16px]">
                  {workshopWeekends.map((workshop, i) => (
                    <motion.div
                      key={workshop.title}
                      className="bg-cma-teal-pale rounded-[20px] p-[24px] flex flex-col gap-[16px]"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex flex-col gap-[8px]">
                        <span className="self-start bg-cma-orange text-white font-bold text-[12px] px-[12px] py-[5px] rounded-full">
                          {workshop.date}
                        </span>
                        <p className="font-extrabold text-cma-navy text-[20px] leading-[1.2]">{workshop.title}</p>
                      </div>
                      <p className="text-cma-navy/80">{workshop.description}</p>
                      <a href={workshop.href} className="cma-btn cma-btn-outline-teal font-black self-start">
                        Reserve Your Troop's Spot <FontAwesomeIcon icon={faArrowRight} className="ml-[6px] text-[12px]" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Divider />

              {/* ── On-Demand Workshops ── */}
              <div id="on-demand" className="flex flex-col gap-[24px]">
                <h2 className="text-cma-navy">Workshops On-Demand</h2>
                <p className="text-cma-navy">
                  Workshop weekends don't work for your troop? Never fear! Our Craft and Tinker and What Robots Do workshops are available on-demand on weekends. Request your workshop below.
                </p>

                <div className="bg-cma-teal-pale rounded-[20px] p-[24px] md:p-[32px] flex flex-col gap-[20px]">
                  <h3 className="text-cma-navy">Request a Workshop Form</h3>
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-[16px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                      <div className="flex flex-col gap-[6px]">
                        <label className={labelClass}>Contact First Name *</label>
                        <input type="text" placeholder="First Name" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label className={labelClass}>Contact Last Name *</label>
                        <input type="text" placeholder="Last Name" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                      <div className="flex flex-col gap-[6px]">
                        <label className={labelClass}>Contact Phone Number *</label>
                        <input type="tel" placeholder="(000) 000-0000" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label className={labelClass}>Contact Email *</label>
                        <input type="email" placeholder="email@example.com" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                      <div className="flex flex-col gap-[6px]">
                        <label className={labelClass}>Troop Level *</label>
                        <select className={inputClass}>
                          <option value="">Select troop level</option>
                          <option>Daisy (Grades K–1)</option>
                          <option>Brownie (Grades 2–3)</option>
                          <option>Junior (Grades 4–5)</option>
                          <option>Mixed</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label className={labelClass}>Number of Children *</label>
                        <input type="number" min="1" max="12" placeholder="Max 12 scouts" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                      <div className="flex flex-col gap-[6px]">
                        <label className={labelClass}>Date Request – First Choice *</label>
                        <input type="date" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label className={labelClass}>Date Request – Second Choice</label>
                        <input type="date" className={inputClass} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className={labelClass}>Preferred Workshop Time *</label>
                      <select className={inputClass}>
                        <option value="">Select preferred time</option>
                        <option>Morning Workshop — Entrance: 10:00 AM | Workshop Start: 12:00 PM</option>
                        <option>Afternoon Workshop — Entrance: 1:00 PM | Workshop Start: 3:00 PM</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className={labelClass}>Workshop of Interest *</label>
                      <select className={inputClass}>
                        <option value="">Select workshop</option>
                        <option>Craft and Tinker</option>
                        <option>What Robots Do</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className={labelClass}>Have you done a Girl Scout Workshop at the Museum before? If yes, when?</label>
                      <input type="text" placeholder="e.g. Spring 2024" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className={labelClass}>Additional Notes or Comments</label>
                      <textarea
                        rows={4}
                        placeholder="Any additional information, special accommodations, or questions..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <div>
                      <button type="submit" className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <Divider />

              {/* ── Workshop Details ── */}
              <div id="workshop-details" className="flex flex-col gap-[24px]">
                <h2 className="text-cma-navy">Workshop Details</h2>
                <div className="flex flex-col">
                  {workshopDetails.map((item) => (
                    <div key={item.label} className="flex gap-[16px] items-start py-[16px] border-b border-black/8 last:border-0">
                      <div className={`w-[40px] h-[40px] rounded-full shrink-0 flex items-center justify-center ${item.color}`}>
                        <FontAwesomeIcon icon={item.icon} className="text-white text-[14px]" />
                      </div>
                      <div className="flex flex-col gap-[4px] pt-[2px]">
                        <p className="font-extrabold text-cma-navy">{item.label}</p>
                        <p className="text-cma-navy/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Divider />

              {/* ── Girl Scout Sleepover ── */}
              <div id="sleepover" className="flex flex-col gap-[24px]">
                <h2 className="text-cma-navy">Girl Scout Sleepover</h2>
                <p className="text-cma-navy">
                  This overnight experience blends classic slumber party fun with hands-on STEAM learning. It offers young Girl Scouts an exciting and supportive introduction to an overnight adventure in the safe, indoor setting of Children's Museum of Atlanta.
                </p>
                <p className="text-cma-navy">
                  During this special overnight, scouts will enjoy exclusive after-hours access to the Museum, guided group activities, and engaging STEAM-based slumber party stations designed to spark curiosity and creativity.
                </p>
                <p className="text-cma-navy">
                  Time for group play and a guided wind-down will help scouts bond with their troop, practice independence, and build friendships in a fun, supportive overnight setting.
                </p>
                <div className="bg-cma-navy rounded-[20px] p-[24px] md:p-[32px] flex flex-col gap-[12px]">
                  <p className="cma-eyebrow text-cma-orange">Coming Soon</p>
                  <p className="text-white font-extrabold text-[20px] leading-[1.2]">Stay tuned for 2027 dates!</p>
                  <p className="text-white/70">Sign up for the Scout Newsletter to be the first to know when sleepover dates are announced.</p>
                  <button
                    onClick={() => scrollToSection("newsletter")}
                    className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black self-start mt-[4px]"
                  >
                    Join the Newsletter
                  </button>
                </div>
              </div>

              <Divider />

              {/* ── Scout Newsletter ── */}
              <div id="newsletter" className="flex flex-col gap-[24px]">
                <h2 className="text-cma-navy">Join our Scout Newsletter!</h2>
                <p className="text-cma-navy">
                  Subscribe to our newsletter to be the first to know about upcoming Scout programs, badge workshops, and museum events.
                </p>
                <div className="bg-cma-teal-pale rounded-[20px] p-[24px] flex flex-col sm:flex-row gap-[12px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`${inputClass} flex-1`}
                  />
                  <button className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black shrink-0">
                    Stay In The Loop!
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
