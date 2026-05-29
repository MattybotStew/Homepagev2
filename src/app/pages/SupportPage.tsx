import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import GivingHero from "../components/GivingHero";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";
import SupportWaysToGive from "../components/SupportWaysToGive";
import Testimonials from "../components/Testimonials";

const testimonials = [
	{
		text: "Donating to CMA felt like the most direct way to invest in Atlanta's kids. Knowing that children who couldn't otherwise afford a museum visit get to experience this place — that means everything to me.",
		name: "Angela R.",
		location: "Midtown, Atlanta",
	},
	{
		text: "We've been members for years, but donating on top of that felt like the natural next step. CMA does real, meaningful work in this community.",
		name: "Marcus & Tonya W.",
		location: "Decatur, GA",
	},
	{
		text: "My company started a corporate giving partnership with CMA last year. The impact reports they share are genuinely impressive — you can see exactly where your dollars go.",
		name: "Priya N.",
		location: "Corporate Donor",
	},
	{
		text: "I wanted my kids to see us giving back to the place that's given them so much. CMA made it easy and meaningful.",
		name: "James F.",
		location: "Sandy Springs, GA",
	},
];

export default function SupportPage() {
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
			<GivingHero
				eyebrow="support cma"
				heading={"Make Play\nPossible"}
				subtitle="Your support changes lives through the power of play."
				body="As a nonprofit, CMA relies on community support to bridge the gap between admissions revenue and the true cost of our mission. Every dollar you give helps Atlanta's children explore, create, and grow."
				stats={[
					{ value: "180,000+ Museum Visitors", orange: true },
					{ value: "12,000+ Outreach Children", orange: false },
					{ value: "1,200 Free Passes Granted", orange: true },
					{ value: "4,456 CLCC Students", orange: false },
				]}
				ctas={[
					{ label: "Donate Now", href: "#/donate", variant: "orange" },
					{ label: "Ways to Give", href: "#ways-to-give", variant: "outline" },
				]}
			/>
			<SupportWaysToGive />
			<Testimonials heading="Why Donors Give" items={testimonials} showWave={false} />
			<PYVCallout
				eyebrow="Support CMA"
				heading="Every Gift Makes a Difference"
				body="Whether you give $25 or $25,000, your support directly funds the programs, access initiatives, and community partnerships that make CMA one of Atlanta's most beloved institutions."
				cta={{ label: "Donate Now", href: "#/donate" }}
				bg="bg-cma-navy"
				showCountdown={false}
			/>
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
