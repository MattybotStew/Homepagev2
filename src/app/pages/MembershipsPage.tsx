import imgMembershipsHero from "../../assets/memhero.png";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MembershipPlans from "../components/MembershipPlans";
import MembershipSavingsCalculator from "../components/MembershipSavingsCalculator";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";
import Testimonials from "../components/Testimonials";

const BLACKBAUD_MEMBERSHIPS = "https://16707.blackbaudhosting.com/16707/CMA-Memberships";

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
				subtitle="Give your family year-round access to Atlanta's favorite children's museum — plus exclusive perks, discounts, and endless fun."
				ctas={[
					{ label: "Become a Member Today", href: BLACKBAUD_MEMBERSHIPS, variant: "orange" },
					{ label: "Membership Information", href: "#/memberships/information", variant: "teal-outline" },
				]}
				showHoursWidget={false}
			/>

			<MembershipSavingsCalculator becomeMemberHref={BLACKBAUD_MEMBERSHIPS} />
			<MembershipPlans becomeMemberHref={BLACKBAUD_MEMBERSHIPS} />

			<Testimonials heading="What Families Are Saying" showWave={false} />

			<PYVCallout
				eyebrow="memberships"
				heading="Membership Information"
				body="Get unlimited access to Atlanta's favorite children's museum for a full year — starting at just $125. Members enjoy 50% off guest tickets, gift shop discounts, and the satisfaction of helping bring play to every child in Atlanta."
				cta={{ label: "Membership Information", href: "#/memberships/information" }}
				bg="bg-cma-teal-dark"
				showCountdown={false}
				showRightCta={false}
			/>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
