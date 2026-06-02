import AboutContent from "../components/AboutContent";
import AboutHero from "../components/AboutHero";
import AboutHistory from "../components/AboutHistory";
import AboutJoinTeam from "../components/AboutJoinTeam";
import AboutPartners from "../components/AboutPartners";
import AboutPeople from "../components/AboutPeople";
import AboutPhilosophy from "../components/AboutPhilosophy";
import AboutImpact from "../components/AboutImpact";
import AboutTestimonials from "../components/AboutTestimonials";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

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
			<AboutTestimonials />
			<AboutImpact />
			<AboutHistory />
			<AboutPeople />
			<AboutJoinTeam />
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
