import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import MuseumStoreHero from "../components/MuseumStoreHero"
import MuseumStoreBrands from "../components/MuseumStoreBrands"
import MuseumStoreContent from "../components/MuseumStoreContent"
import MuseumStoreGifts from "../components/MuseumStoreGifts"
import Footer from "../components/Footer"

export default function MuseumStorePage() {
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

      <MuseumStoreHero />
      <MuseumStoreBrands />
      <MuseumStoreContent />
      <MuseumStoreGifts />
      <Footer />
    </div>
  )
}
