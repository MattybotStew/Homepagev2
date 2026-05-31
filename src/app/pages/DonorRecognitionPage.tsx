import imgDonorHero from "../../assets/donate-donor-individual.webp";
import AlertBanner from "../components/AlertBanner";
import DonateDonors from "../components/DonateDonors";
import DonorRecognitionTiers from "../components/DonorRecognitionTiers";
import Footer from "../components/Footer";
import GivingHero from "../components/GivingHero";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";

export default function DonorRecognitionPage() {
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
			<GivingHero
				bgImage={imgDonorHero}
				eyebrow="our supporters"
				heading={"Thank You\nfor Believing"}
				subtitle="CMA's mission is made possible by the generosity of donors, foundations, and corporate partners who believe every child deserves the power of play."
				stats={[
					{ value: "180,000+ Children Served", orange: true },
					{ value: "1,200+ Free Passes Granted", orange: false },
					{ value: "$2M+ Raised Annually", orange: true },
					{ value: "Hundreds of Generous Donors", orange: false },
				]}
				ctas={[
					{ label: "Donate Now", href: "#/donate", variant: "orange" },
					{ label: "Support CMA", href: "#/support", variant: "outline" },
				]}
			/>
			<DonorRecognitionTiers />
			<DonateDonors />
			<PYVCallout
				eyebrow="Donor Recognition"
				heading="Join Our Community of Supporters"
				body="Every gift — at any level — is recognized and celebrated. Join the hundreds of donors who make CMA's mission possible for Atlanta's children and families."
				cta={{ label: "Make a Gift", href: "#/donate" }}
				bg="bg-cma-navy"
				showCountdown={false}
			/>
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
