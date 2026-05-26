import { useParams, Navigate } from "react-router-dom"
import { exhibits } from "../data/exhibits"
import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import ArticleContent from "../components/ArticleContent"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"

export default function ExhibitPage() {
  const { slug } = useParams<{ slug: string }>()
  const exhibit = exhibits.find(e => e.slug === slug)

  if (!exhibit) return <Navigate to="/exhibits" replace />

  const related = exhibits.filter(e => e.slug !== slug).slice(0, 3)

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

      <ArticleContent exhibit={exhibit} related={related} />
      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
