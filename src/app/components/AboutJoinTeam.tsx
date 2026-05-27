import { motion } from "motion/react"
import imgTeam from "../../assets/educators-img-4.webp"

const benefits = [
  {
    iconBg: "bg-cma-teal",
    title: "Meaningful Work",
    body: "Every day at Children's Museum of Atlanta is an opportunity to make a real difference in the lives of children and families. You'll be part of a mission-driven team that believes in the transformative power of play.",
  },
  {
    iconBg: "bg-cma-orange",
    title: "Competitive Benefits",
    body: "We offer a comprehensive benefits package including health, dental, and vision coverage, paid time off, and free museum membership for you and your family.",
  },
  {
    iconBg: "bg-cma-orange",
    title: "Growth & Learning",
    body: "We invest in our people. From professional development opportunities to cross-department collaboration, there's always room to grow your skills and advance your career.",
  },
]

export default function AboutJoinTeam() {
  return (
    <section className="bg-white w-full py-[80px] md:py-[120px]" id="careers">
      <div className="cma-section-container flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-start">

        {/* Left: photo */}
        <motion.div
          className="w-full lg:w-[480px] shrink-0 lg:sticky lg:top-[140px] self-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-[24px] overflow-hidden h-[320px] lg:h-[480px]">
            <img src={imgTeam} alt="Children's Museum of Atlanta team members" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right: content */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-cma-navy">Join The Team</h2>
            <p className="text-cma-navy">
              We seek talented individuals with a passion for providing outstanding service to our guests to help us to fulfill our mission of sparking imagination and inspiring discovery and learning for all children through the power of play.
            </p>
            <p className="text-cma-navy">
              The Museum is committed to equal employment opportunity. Children's Museum of Atlanta will not discriminate against employees or applicants for employment on any legally recognized basis including, but not limited to: veteran status, uniform service member status, race, color, religion, sex, national origin, sexual orientation, gender identity, age, genetic information, physical or mental disability or marital status.
            </p>
          </motion.div>

          {/* Benefit items */}
          <div className="flex flex-col gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="flex gap-5"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <div className={`w-[40px] h-[40px] rounded-[10px] shrink-0 mt-[2px] ${b.iconBg}`} />
                <div className="flex flex-col gap-1">
                  <p className="text-cma-navy font-black text-[15px] leading-snug">{b.title}</p>
                  <p className="text-cma-navy">{b.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 pt-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <a
              href="mailto:hr@childrensmuseumatlanta.org"
              className="cma-btn bg-cma-orange text-white hover:bg-cma-orange-dark font-black"
            >
              Contact HR
            </a>
            <a
              href="#volunteer"
              className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
            >
              Volunteer
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
