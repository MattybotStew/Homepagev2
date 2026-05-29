import AlertBanner from "./components/AlertBanner";
import FeaturedExhibits from "./components/FeaturedExhibits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import InstagramSection from "./components/InstagramSection";
import Marquee from "./components/Marquee";
import MembershipPricing from "./components/MembershipPricing";
import MobileHeader from "./components/MobileHeader";
import PlanYourVisit from "./components/PlanYourVisit";
import PowerOfPlayMarquee from "./components/PowerOfPlayMarquee";
import ScrollProgress from "./components/ScrollProgress";
import SpecialExperiences from "./components/SpecialExperiences";
import Testimonials from "./components/Testimonials";

export default function App() {
	return (
		<main id="main-content" className="size-full relative">
			{/* Alert Banner — always visible */}
			<AlertBanner />

			{/* Mobile header */}
			<div className="lg:hidden">
				<MobileHeader />
			</div>

			{/* Desktop header */}
			<div className="hidden lg:block">
				<Header />
			</div>

			{/* Scroll Progress Bar - desktop only */}
			<div className="hidden lg:block">
				<ScrollProgress />
			</div>

			{/* Hero Section */}
			<Hero />

			{/* Scrolling Marquee */}
			<Marquee />

			{/* Plan Your Visit Section */}
			<PlanYourVisit />

			{/* Featured Exhibits Carousel */}
			<FeaturedExhibits />

			{/* Special Experiences / Events Section */}
			<SpecialExperiences />

			{/* Membership Pricing Section */}
			<MembershipPricing />

			{/* Testimonials Section */}
			<Testimonials />

			{/* Impact Section */}
			<ImpactSection />

			{/* Instagram Section */}
			<InstagramSection />

			{/* Power of Play scrolling text */}
			<PowerOfPlayMarquee />

			{/* Footer */}
			<Footer />
		</main>
	);
}
