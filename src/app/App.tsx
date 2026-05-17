import Header from "./components/Header";
import Hero from "./components/Hero";
import AlertBanner from "./components/AlertBanner";
import ScrollProgress from "./components/ScrollProgress";
import Marquee from "./components/Marquee";
import PlanYourVisit from "./components/PlanYourVisit";
import FeaturedExhibits from "./components/FeaturedExhibits";
import Testimonials from "./components/Testimonials";
import ImpactSection from "./components/ImpactSection";
import MembershipPricing from "./components/MembershipPricing";
import InstagramSection from "./components/InstagramSection";
import PowerOfPlayMarquee from "./components/PowerOfPlayMarquee";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="size-full relative" style={{ position: 'relative' }}>
      {/* Alert Banner */}
      <AlertBanner />
      
      {/* Unified responsive header */}
      <Header />
      
      {/* Scroll Progress Bar - Sticky below header */}
      <ScrollProgress />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Scrolling Marquee */}
      <Marquee />
      
      {/* Plan Your Visit Section */}
      <PlanYourVisit />

      {/* Featured Exhibits Carousel */}
      <FeaturedExhibits />

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Impact Section */}
      <ImpactSection />

      {/* Membership Pricing Section */}
      <MembershipPricing />
      
      {/* Instagram Section */}
      <InstagramSection />
      
      {/* Power of Play scrolling text */}
      <PowerOfPlayMarquee />

      {/* Footer */}
      <Footer />
    </div>
  );
}