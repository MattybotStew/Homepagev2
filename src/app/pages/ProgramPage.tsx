import { useParams, Navigate } from "react-router-dom"
import { programs } from "../data/programs"
import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import EducatorsSubNav from "../components/EducatorsSubNav"
import ArticleContentWithSidebar from "../components/ArticleContentWithSidebar"
import FieldTripsProgramContent from "../components/FieldTripsProgramContent"
import ScoutsProgramContent from "../components/ScoutsProgramContent"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"

export default function ProgramPage() {
  const { slug } = useParams<{ slug: string }>()
  const program = programs.find(p => p.slug === slug)

  if (!program) return <Navigate to="/educators" replace />

  const related = programs.filter(p => p.slug !== slug).slice(0, 3)

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
      <div className="lg:hidden">
        <EducatorsSubNav />
      </div>

      {slug === "field-trips" ? (
        <FieldTripsProgramContent />
      ) : slug === "scout-workshops" ? (
        <ScoutsProgramContent />
      ) : (
        <ArticleContentWithSidebar
          exhibit={program}
          related={related}
          sections={program.sections}
          breadcrumb={{ label: "Educators", href: "#/educators" }}
          relatedHrefBase="#/program"
        />
      )}

      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
