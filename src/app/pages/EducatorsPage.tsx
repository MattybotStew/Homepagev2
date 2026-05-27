import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import Hero from "../components/Hero"
import EducatorsPrograms from "../components/EducatorsPrograms"
import EducatorsImpact from "../components/EducatorsImpact"
import Testimonials from "../components/Testimonials"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"
import imgEducatorsHero from "../../assets/educators-hero.jpg"

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
      <Testimonials heading="What Teachers Are Saying" items={educatorTestimonials} showWave={false} />
      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
