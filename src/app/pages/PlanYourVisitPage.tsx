import AlertBanner from "../components/AlertBanner"
import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import ScrollProgress from "../components/ScrollProgress"
import Hero from "../components/Hero"
import PYVCallout from "../components/PYVCallout"
import AdmissionPricing from "../components/AdmissionPricing"
import PlanTabs from "../components/PlanTabs"
import PlanYourVisitFAQs from "../components/PlanYourVisitFAQs"
import MembershipPricing from "../components/MembershipPricing"
import Footer from "../components/Footer"
import imgWaveWhite from "../../assets/wave-white.svg"
import imgWaveNavy from "figma:asset/impact-wave-top.svg"

function WaveStrip({ src, position }: { src: string; position: "top" | "bottom" }) {
  return (
    <div
      aria-hidden
      className={`absolute ${position}-0 left-0 flex overflow-hidden h-[13px] w-full`}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <img key={i} src={src} alt="" className="w-[422px] h-[57px] shrink-0 block" />
      ))}
    </div>
  )
}

export default function PlanYourVisitPage() {
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

      <Hero />

      <PYVCallout />

      {/* Admission Pricing */}
      <AdmissionPricing />

      {/* Before You Arrive tabs */}
      <PlanTabs />

      {/* FAQs */}
      <PlanYourVisitFAQs />

      {/* Wave + Membership Pricing */}
      <div className="relative">
        <WaveStrip src={imgWaveNavy} position="top" />
        <MembershipPricing />
        <WaveStrip src={imgWaveWhite} position="bottom" />
      </div>

      <Footer />
    </div>
  )
}
