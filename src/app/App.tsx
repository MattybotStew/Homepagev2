import imgHero1 from "../assets/hero-homepage.webp";
import imgHero2 from "../assets/byv-hero.webp";
import imgHero3 from "../assets/hero-wildkratts.webp";
import imgHero4 from "../assets/exhibit-creativity.webp";
import { useEffect, useState } from "react";
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

const heroImages = [imgHero1, imgHero2, imgHero3, imgHero4];

export default function App() {
	const [heroIndex, setHeroIndex] = useState(() =>
		Math.floor(Math.random() * heroImages.length)
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setHeroIndex((prev) => (prev + 1) % heroImages.length);
		}, 7000);
		return () => clearInterval(timer);
	}, []);

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
			<Hero bgImage={heroImages[heroIndex]} />

			{/* Scrolling Marquee */}
			<Marquee />

			{/* Plan Your Visit Section */}
			<PlanYourVisit />

			{/* Featured Exhibits Carousel */}
			<FeaturedExhibits />

			{/* Special Experiences / Events Section */}
			<SpecialExperiences
				ctaButton={{ label: "See All Events", href: "#/events" }}
			/>

			{/* Membership Pricing Section */}
			<MembershipPricing />

			{/* Testimonials Section */}
			<Testimonials />

			{/* Impact Section */}
			<ImpactSection bottomWave="white" />

			{/* Instagram Section */}
			<InstagramSection />

			{/* Power of Play scrolling text */}
			<PowerOfPlayMarquee />

			{/* Footer */}
			<Footer />
		</main>
	);
}
