import AdmissionPricing from "../components/AdmissionPricing";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MembershipPricing from "../components/MembershipPricing";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";
import Testimonials from "../components/Testimonials";

export default function MembershipsPage() {
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

			<Hero
				eyebrow="memberships"
				heading="Play More, Pay Less"
				subtitle="One family membership pays for itself in just 2 visits — plus unlimited access to exhibits, members-only hours, and more for a full year."
				ctas={[
					{ label: "Become a Member", href: "#membership", variant: "orange" },
					{ label: "Buy Tickets", href: "#tickets", variant: "teal-outline" },
				]}
				showHoursWidget={false}
			/>

			<MembershipPricing />
			<AdmissionPricing />
			<Testimonials />
			<PYVCallout />
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
