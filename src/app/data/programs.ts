import img0 from "../../assets/educators-img-0.webp"
import img1 from "../../assets/educators-img-1.webp"
import img2 from "../../assets/educators-img-2.webp"
import img3 from "../../assets/educators-img-3.webp"
import type { SidebarSection } from "../components/ArticleContentWithSidebar"

export type Program = {
  slug: string
  title: string
  badge: string
  badgeColor: "teal-dark" | "navy"
  eyebrow: string
  heroImage: string
  cardImage: string
  paragraphs: string[]
  sections: SidebarSection[]
}

export const programs: Program[] = [
  {
    slug: "field-trips",
    title: "Field Trips",
    badge: "Educators",
    badgeColor: "teal-dark",
    eyebrow: "Grades PreK–5 | 2-hour experiences",
    heroImage: img0,
    cardImage: img0,
    sections: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Trip Details" },
      { id: "standards", label: "Learning Standards" },
      { id: "related", label: "Related Programs" },
    ],
    paragraphs: [
      "Bring your class to the Children's Museum of Atlanta for a hands-on learning adventure unlike anything in the classroom. Our field trips align with Georgia Standards of Excellence and spark curiosity through play-based exploration across 20,000 square feet of immersive exhibits.",
      "Each field trip is guided by our education team and tailored by grade level — from PreK through 5th grade. Students rotate through exhibit zones, participate in a facilitated learning activity, and have free exploration time. Groups of 11–30 students are welcome Monday through Friday from 10am–12pm.",
    ],
  },
  {
    slug: "museum-on-the-go",
    title: "Museum On-the-Go",
    badge: "Educators",
    badgeColor: "teal-dark",
    eyebrow: "Grades PreK–3 | 45–60 minute sessions",
    heroImage: img1,
    cardImage: img1,
    sections: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Program Details" },
      { id: "standards", label: "Learning Standards" },
      { id: "related", label: "Related Programs" },
    ],
    paragraphs: [
      "Can't make it to the Museum? We bring the fun to you. Our Museum On-the-Go educators travel directly to schools with portable, hands-on exhibits and activity kits designed to turn any classroom into an interactive learning space.",
      "Sessions are available for PreK through 3rd grade and run 45–60 minutes. Each visit includes a facilitated activity aligned to your current unit of study, plus take-home materials to extend the learning. Book a visit by contacting our education team at education@cmatlanta.org.",
    ],
  },
  {
    slug: "scout-workshops",
    title: "Scout Workshops",
    badge: "Educators",
    badgeColor: "navy",
    eyebrow: "Ages 6–17 | 90-minute workshops",
    heroImage: img2,
    cardImage: img2,
    sections: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Workshop Details" },
      { id: "badges", label: "Badge Alignment" },
      { id: "related", label: "Related Programs" },
    ],
    paragraphs: [
      "Help your scouts earn badges through engaging, museum-based workshops aligned with Cub Scout, Boy Scout, and Girl Scout requirements. Our 90-minute sessions combine hands-on activities with Museum exhibit exploration to bring badge requirements to life.",
      "We offer workshops covering STEM, nature, arts & crafts, and community service themes — all facilitated by CMA education staff. Troops of up to 30 scouts are welcome on select weekday and weekend dates. Contact us to check availability and reserve your troop's session.",
    ],
  },
  {
    slug: "educator-professional-development",
    title: "Educator Professional Development",
    badge: "Educators",
    badgeColor: "navy",
    eyebrow: "All grade levels | Half-day & full-day formats",
    heroImage: img3,
    cardImage: img3,
    sections: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "PD Details" },
      { id: "standards", label: "Learning Outcomes" },
      { id: "related", label: "Related Programs" },
    ],
    paragraphs: [
      "Invest in your teaching practice with professional development workshops designed by and for educators. Our PD sessions take place inside the Museum, using exhibits as living laboratories to model play-based, inquiry-driven learning strategies you can take back to your classroom.",
      "Available in half-day and full-day formats for groups of 10–40 educators, our PD workshops are aligned to Georgia educator certification renewal hours. Topics include STEM integration, social-emotional learning through play, and differentiation strategies for early childhood classrooms.",
    ],
  },
]
