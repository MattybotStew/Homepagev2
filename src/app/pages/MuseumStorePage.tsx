import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import MuseumStoreBrands from "../components/MuseumStoreBrands";
import MuseumStoreContent from "../components/MuseumStoreContent";
import MuseumStoreGifts from "../components/MuseumStoreGifts";
import MuseumStoreHero from "../components/MuseumStoreHero";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

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
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
