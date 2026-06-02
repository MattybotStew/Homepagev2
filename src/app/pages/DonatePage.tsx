import AlertBanner from "../components/AlertBanner";
import DonateDonors from "../components/DonateDonors";
import DonateHero from "../components/DonateHero";
import DonateImpact from "../components/DonateImpact";
import DonateOnline from "../components/DonateOnline";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";


export default function DonatePage() {
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
			<DonateHero />
			<DonateDonors />
			<DonateOnline />
			<DonateImpact />
<PYVCallout
				eyebrow="Support CMA"
				heading="Every Gift Makes a Difference"
				body="Whether you give $25 or $25,000, your support directly funds the programs, access initiatives, and community partnerships that make CMA one of Atlanta's most beloved institutions."
				cta={{ label: "Donate Now", href: "https://16707.blackbaudhosting.com/16707/Annual-Fund" }}
				bg="bg-cma-navy"
				showCountdown={false}
				showRightCta={false}
			/>
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
