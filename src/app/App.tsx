import imgHero1 from "../assets/hero-homepage.webp";
import imgHero2 from "../assets/byv-hero.webp";
import imgHero3 from "../assets/hero-wildkratts.webp";
import imgHero4 from "../assets/exhibit-creativity.webp";
import { useEffect, useState } from "react";
import AlertBanner from "./components/AlertBanner";
import FeaturedExhibits from "./components/FeaturedExhibits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroWidget from "../widgets/HeroWidget/HeroWidget";
import { WidgetEditor } from "../widgets/WidgetEditor";
import { widgetConfig } from "../widgets/HeroWidget/HeroWidget";
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

// Load saved content from localStorage
const loadSavedContent = () => {
  const saved = localStorage.getItem('heroContent');
  if (saved) {
    return JSON.parse(saved);
  }
  return {
    eyebrow: "children's museum of atlanta",
    heading: "Where Families Come to Play",
    subtitle: "Welcome to a safe, joyful place where children and caregivers have fun, explore, connect and grow through play.",
    showHoursWidget: true,
    showWaves: true, // Set to false since wave SVGs are missing
    ctas: [
      { label: "Buy Tickets Now", href: "#/book-your-visit", variant: "orange" },
      { label: "Memberships", href: "#/memberships/information", variant: "teal-outline" },
    ]
  };
};

export default function App() {
  const [heroIndex, setHeroIndex] = useState(() =>
    Math.floor(Math.random() * heroImages.length)
  );
  
  const [heroContent, setHeroContent] = useState(loadSavedContent);
  const [showEditor, setShowEditor] = useState(false);

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

      {/* Hero Section - Now using HeroWidget with editable content */}
      <HeroWidget 
        bgImage={heroImages[heroIndex]}
        {...heroContent}
      />

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
      <ImpactSection bottomWave="white" />

      {/* Instagram Section */}
      <InstagramSection />

      {/* Power of Play scrolling text */}
      <PowerOfPlayMarquee />

      {/* Footer */}
      <Footer />

      {/* Widget Editor - only show in development mode */}
      {process.env.NODE_ENV === 'development' && (
        <>
          <button
            onClick={() => setShowEditor(!showEditor)}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1001,
              padding: '12px 24px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              fontFamily: 'system-ui, sans-serif'
            }}
          >
            {showEditor ? '✏️ Close Editor' : '✏️ Edit Hero Content'}
          </button>
          
          {showEditor && (
            <WidgetEditor
              initialProps={heroContent}
              config={widgetConfig}
              onSave={(newProps) => {
                setHeroContent(newProps);
                setShowEditor(false);
                localStorage.setItem('heroContent', JSON.stringify(newProps));
                console.log('Hero content updated and saved to localStorage!');
              }}
              onClose={() => setShowEditor(false)}
            />
          )}
        </>
      )}
    </main>
  );
}