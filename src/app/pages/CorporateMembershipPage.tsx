import AlertBanner from "../components/AlertBanner";
import CorporateMembershipContent from "../components/CorporateMembershipContent";
import Footer from "../components/Footer";
import GivingHero from "../components/GivingHero";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

export default function CorporateMembershipPage() {
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
				eyebrow="children's museum of atlanta"
				heading="Corporate Membership"
				subtitle="A Meaningful Benefit for Your Team. A Powerful Investment in Atlanta's Families."
			/>
			<CorporateMembershipContent />
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
