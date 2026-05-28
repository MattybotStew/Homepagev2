import AlertBanner from "../components/AlertBanner";
import ExhibitsFloorPlan from "../components/ExhibitsFloorPlan";
import ExhibitsHero from "../components/ExhibitsHero";
import ExhibitsPermanent from "../components/ExhibitsPermanent";
import ExhibitsPopUp from "../components/ExhibitsPopUp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

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
	);
}
