import imgWaveNavy from "../../assets/impact-wave-top.svg";
import imgWaveWhite from "../../assets/wave-white.svg";
import AdmissionPricing from "../components/AdmissionPricing";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MembershipPricing from "../components/MembershipPricing";
import MobileHeader from "../components/MobileHeader";
import PlanTabs from "../components/PlanTabs";
import PlanYourVisitFAQs from "../components/PlanYourVisitFAQs";
import PlanYourVisitHero from "../components/PlanYourVisitHero";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";

function WaveStrip({
	src,
	position,
}: {
	src: string;
	position: "top" | "bottom";
}) {
	return (
		<div
			aria-hidden
			className={`absolute ${position}-0 left-0 flex overflow-hidden h-[13px] w-full`}
		>
			{Array.from({ length: 10 }).map((_, i) => (
				<img
					key={i}
					src={src}
					alt=""
					className="w-[422px] h-[57px] shrink-0 block"
				/>
			))}
		</div>
	);
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

			<PlanYourVisitHero />

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

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
