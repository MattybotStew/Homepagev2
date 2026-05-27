import { useParams, Navigate } from "react-router-dom"
import { allEvents } from "../data/events"
import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import EventContent from "../components/EventContent"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"

export default function EventPage() {
  const { slug } = useParams<{ slug: string }>()
  const event = allEvents.find((e) => e.slug === slug)

  if (!event) return <Navigate to="/events" replace />

  const related = allEvents.filter((e) => e.slug !== slug).slice(0, 3)

  return (
    <div className="size-full relative">
      <AlertBanner />

      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="hidden lg:block">
        <ScrollProgress />
      </div>

      <EventContent event={event} related={related} />
      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
