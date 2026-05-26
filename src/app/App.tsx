import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import AlertBanner from "./components/AlertBanner";
import ScrollProgress from "./components/ScrollProgress";
import Marquee from "./components/Marquee";
import PlanYourVisit from "./components/PlanYourVisit";
import FeaturedExhibits from "./components/FeaturedExhibits";
import SpecialExperiences from "./components/SpecialExperiences";
import Testimonials from "./components/Testimonials";
import ImpactSection from "./components/ImpactSection";
import MembershipPricing from "./components/MembershipPricing";
import InstagramSection from "./components/InstagramSection";
import PowerOfPlayMarquee from "./components/PowerOfPlayMarquee";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="size-full relative">
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
    </div>
  );
}