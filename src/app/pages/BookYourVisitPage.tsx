import AdmissionPricing from "../components/AdmissionPricing";
import AlertBanner from "../components/AlertBanner";
import EducatorsImpact from "../components/EducatorsImpact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import MuseumStoreGifts from "../components/MuseumStoreGifts";
import PlanYourVisitFAQs from "../components/PlanYourVisitFAQs";
import imgBYVHero from "../../assets/byv-hero.webp";
import PlanYourVisitHero from "../components/PlanYourVisitHero";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import Testimonials from "../components/Testimonials";

export default function BookYourVisitPage() {
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

			<PlanYourVisitHero bgImage={imgBYVHero} />

			{/* Admission Pricing */}
			<AdmissionPricing navyBottomWave />

			{/* Making an Impact Together */}
			<EducatorsImpact />

			{/* Testimonials */}
			<Testimonials showWave={false} />

			{/* FAQs */}
			<PlanYourVisitFAQs showWave={false} />

			<MuseumStoreGifts showNavyCard />

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
