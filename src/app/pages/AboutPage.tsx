import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import AboutHero from "../components/AboutHero"
import AboutPartners from "../components/AboutPartners"
import AboutContent from "../components/AboutContent"
import AboutPhilosophy from "../components/AboutPhilosophy"
import Testimonials from "../components/Testimonials"
import ImpactSection from "../components/ImpactSection"
import AboutHistory from "../components/AboutHistory"
import AboutPeople from "../components/AboutPeople"
import AboutJoinTeam from "../components/AboutJoinTeam"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"

export default function AboutPage() {
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

      <AboutHero />
      <AboutPartners />
      <AboutContent />
      <AboutPhilosophy />
      <Testimonials />
      <ImpactSection bottomWave="white" />
      <AboutHistory />
      <AboutPeople />
      <AboutJoinTeam />
      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
