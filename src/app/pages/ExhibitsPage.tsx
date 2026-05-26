import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import ExhibitsHero from "../components/ExhibitsHero"
import ExhibitsPopUp from "../components/ExhibitsPopUp"
import ExhibitsPermanent from "../components/ExhibitsPermanent"
import ExhibitsFloorPlan from "../components/ExhibitsFloorPlan"
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee"
import Footer from "../components/Footer"

export default function ExhibitsPage() {
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

      <ExhibitsHero />
      <ExhibitsPopUp />
      <ExhibitsPermanent />
      <ExhibitsFloorPlan />
      <PowerOfPlayMarquee />
      <Footer />
    </div>
  )
}
