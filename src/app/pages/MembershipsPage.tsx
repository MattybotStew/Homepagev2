import imgMembershipsHero from "../../assets/hero-memberships.webp";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AdmissionPricing from "../components/AdmissionPricing";
import MembershipPlanTable from "../components/MembershipPlanTable";
import MembershipSavingsCalculator from "../components/MembershipSavingsCalculator";
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
				bgImage={imgMembershipsHero}
				eyebrow="memberships"
				heading="Unlimited Play. Endless Memories."
				subtitle="Give your family year-round access to Atlanta's favorite children's museum — plus exclusive perks, early hours, and endless fun."
				ctas={[
					{ label: "Become a Member Today", href: "https://www.childrensmuseumatlanta.org/memberships/", variant: "orange" },
					{ label: "Membership Information", href: "#membership", variant: "teal-outline" },
				]}
				showHoursWidget={false}
			/>

			<MembershipSavingsCalculator />
			<AdmissionPricing
				heading="Membership Plans & Pricing"
				subtitle="One family membership pays for itself in just 2 visits — and comes with exclusive perks and savings on every return visit."
				primaryCta={{ label: "Become a Member", href: "https://www.childrensmuseumatlanta.org/memberships/" }}
				secondaryCta={{ label: "Compare Plan Features", href: "#plan-table" }}
			/>
			<MembershipPlanTable />

			<Testimonials heading="What Families Are Saying" showWave={false} />

			<PYVCallout
				eyebrow="memberships"
				heading="Membership Information"
				body="Your generosity helps us bring the power of play to over 180,000 children and families each year. Whether you give once or make an ongoing commitment, every gift makes a meaningful difference in the lives of Atlanta's children."
				cta={{ label: "Membership Information", href: "https://www.childrensmuseumatlanta.org/memberships/" }}
				bg="bg-cma-teal-dark"
				showCountdown={false}
			/>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
