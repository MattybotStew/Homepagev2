import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import Hero from "../components/Hero"
import EducatorsPrograms from "../components/EducatorsPrograms"
import EducatorsImpact from "../components/EducatorsImpact"
import PYVCallout from "../components/PYVCallout"
import SpecialExperiences, { type EventItem } from "../components/SpecialExperiences"
import Testimonials from "../components/Testimonials"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"
import imgEducatorsHero from "../../assets/educators-hero.webp"
import imgResource0 from "../../assets/educators-img-0.webp"
import imgResource1 from "../../assets/educators-img-1.webp"
import imgResource2 from "../../assets/educators-img-2.webp"
import imgResource3 from "../../assets/educators-img-3.webp"

const educatorTestimonials = [
  {
    text: "Taking our class to CMA for a field trip was the highlight of the school year. Every student was engaged from the moment they walked in — the exhibits connect beautifully to our standards.",
    name: "Sarah Mitchell",
    location: "2nd Grade Teacher, Atlanta Public Schools",
  },
  {
    text: "Museum On-the-Go brought the museum right to our school. Students who had never visited a museum were completely captivated. The educators made every activity feel magical.",
    name: "James Lawson",
    location: "3rd Grade Teacher, Fulton County Schools",
  },
  {
    text: "The Scout Workshop was perfectly organized. My troop earned their badges while having so much fun — they're already asking when we can go back!",
    name: "Rebecca Kim",
    location: "Cub Scout Pack Leader",
  },
  {
    text: "The Educator PD workshop gave me concrete strategies I could bring back to my classroom immediately. CMA genuinely invests in teachers as much as they do in children.",
    name: "Marcus Thompson",
    location: "Kindergarten Teacher, Fulton County Schools",
  },
]

const educatorCategories: Record<string, EventItem[]> = {
  Featured: [
    {
      image: imgResource0,
      badge: "Grades K–2",
      title: "Messy Thursdays",
      description:
        "Get ready to get messy! This weekly sensory play session features paint, slime, water tables, and creative chaos — perfect for early childhood exploration.",
    },
    {
      image: imgResource1,
      badge: "Grades 3–5",
      title: "Snow Days",
      description:
        "Experience winter science indoors! Students build with fake snow, explore ice and temperature concepts, and create winter crafts aligned to earth science standards.",
    },
    {
      image: imgResource2,
      badge: "Grades 3–5",
      title: "STEM Saturdays: Rocket Science",
      description:
        "Launch into learning! Students design, build, and test rockets while exploring the physics of flight and space — aligned to Next Generation Science Standards.",
    },
  ],
  "This Week": [
    {
      image: imgResource0,
      badge: "All Ages",
      title: "Messy Thursdays",
      description:
        "Get ready to get messy! This weekly sensory play session features paint, slime, water tables, and creative chaos — perfect for early childhood exploration.",
    },
    {
      image: imgResource3,
      badge: "Grades K–2",
      title: "Story Time Adventures",
      description:
        "Interactive storytelling with puppets, costumes, and dramatic play. Each session brings a different children's book to life with hands-on activities.",
    },
    {
      image: imgResource1,
      badge: "Grades PreK–K",
      title: "Music & Movement",
      description:
        "Dance, sing, and explore instruments in this high-energy session designed to develop rhythm, coordination, and early literacy through movement.",
    },
  ],
  "Members-Only": [
    {
      image: imgResource2,
      badge: "All Grades",
      title: "Early Access: Member Mornings",
      description:
        "Exclusive early museum access for member educators — quieter, more relaxed environment ideal for students with sensory sensitivities or special needs.",
    },
    {
      image: imgResource0,
      badge: "Grades 3–5",
      title: "Educator Night: Curriculum Deep Dive",
      description:
        "An after-hours professional development session for member educators. Explore exhibits with a curriculum alignment lens and leave with ready-to-use lesson plans.",
    },
    {
      image: imgResource3,
      badge: "All Grades",
      title: "Member Educator Appreciation Workshop",
      description:
        "A special event featuring exclusive PD workshops, networking with fellow educators, and sneak peeks at upcoming exhibits and programs.",
    },
  ],
  "Free Events": [
    {
      image: imgResource0,
      badge: "Grades K–2",
      title: "Messy Thursdays",
      description:
        "Get ready to get messy! This weekly sensory play session features paint, slime, water tables, and creative chaos — perfect for early childhood exploration.",
    },
    {
      image: imgResource1,
      badge: "All Ages",
      title: "Family Free Day",
      description:
        "Free admission four times per year so every family — and every student — can experience the Museum. Field trips welcome on these days.",
    },
    {
      image: imgResource2,
      badge: "All Grades",
      title: "Community Day Celebration",
      description:
        "Free for all! Special performances, community art projects, and family activities celebrating Atlanta's schools and neighborhoods.",
    },
  ],
  Workshops: [
    {
      image: imgResource2,
      badge: "Grades 3–5",
      title: "STEM Saturdays: Rocket Science",
      description:
        "Students design, build, and test rockets while exploring the physics of flight — aligned to Next Generation Science Standards.",
    },
    {
      image: imgResource0,
      badge: "Grades K–2",
      title: "Little Engineers: Bridge Building",
      description:
        "Young learners explore engineering principles by designing and constructing bridges. A perfect field trip add-on for standards-aligned STEM learning.",
    },
    {
      image: imgResource3,
      badge: "Grades 3–5",
      title: "Art Studio: Clay Creations",
      description:
        "Hands-on clay workshop that builds fine motor skills and creative expression. Students take home a finished piece.",
    },
  ],
  Seasonal: [
    {
      image: imgResource1,
      badge: "Grades 3–5",
      title: "Snow Days",
      description:
        "Winter science indoors! Students explore ice, temperature, and seasonal change through hands-on experiments and crafts.",
    },
    {
      image: imgResource3,
      badge: "Grades K–2",
      title: "Valentine's Craft Corner",
      description:
        "Create handmade valentines, friendship bracelets, and heart-themed art. Great for social-emotional learning and fine motor development.",
    },
    {
      image: imgResource0,
      badge: "All Grades",
      title: "Spring Science Festival",
      description:
        "Celebrate the season with garden planting, butterfly life cycle activities, and outdoor-themed STEM experiments.",
    },
  ],
  "Special Events": [
    {
      image: imgResource0,
      badge: "All Grades",
      title: "Educator Professional Development Day",
      description:
        "A full-day PD event for classroom teachers. Leave with strategies, resources, and a renewed sense of excitement for play-based learning.",
    },
    {
      image: imgResource2,
      badge: "Grades 3–5",
      title: "Science Fair Spectacular",
      description:
        "Young scientists showcase their experiments! Interactive demonstrations, hands-on activities, and recognition for creative thinking.",
    },
    {
      image: imgResource1,
      badge: "All Grades",
      title: "Spring Preview for Educators",
      description:
        "Get a first look at new spring exhibits before they open to the public. Special walkthrough designed for curriculum alignment planning.",
    },
  ],
}

const educatorResources: Record<string, EventItem[]> = {
  All: Object.values(educatorCategories)
    .flat()
    .filter((item, i, arr) => arr.findIndex((e) => e.title === item.title) === i),
  ...educatorCategories,
}

export default function EducatorsPage() {
  return (
    <div className="size-full relative">
      <AlertBanner />
      <div className="lg:hidden"><MobileHeader /></div>
      <div className="hidden lg:block"><Header /></div>
      <div className="hidden lg:block"><ScrollProgress /></div>
      <Hero
        bgImage={imgEducatorsHero}
        eyebrow="Children's Museum of Atlanta"
        heading="Education Programs"
        subtitle="The Museum has plenty to offer, whether you're visiting for a fun field trip, a Scout workshop, or bringing the Museum right into your classroom!"
        ctas={[
          { label: "Education at the Museum", href: "#programs", variant: "orange" },
          { label: "Connect with Our Team", href: "#contact", variant: "teal-outline" },
        ]}
        showHoursWidget={false}
      />
      <EducatorsPrograms />
      <EducatorsImpact />
      <SpecialExperiences
        heading="Your Resource Hub for Creative Learning"
        ctaButton={{ label: "Education Resources", href: "#resources" }}
        filterEvents={educatorResources}
        wave="white"
      />
      <Testimonials heading="What Teachers Are Saying" items={educatorTestimonials} showWave={false} />
      <PYVCallout
        eyebrow="Education at CMA"
        heading="Education at the Museum"
        body="CMA offers programs for every type of learner — from field trips and scout workshops to in-school outreach and professional development for educators. Explore everything we have to offer."
        cta={{ label: "Education Resources", href: "#programs" }}
        bg="bg-cma-navy"
        showCountdown={false}
      />
      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
