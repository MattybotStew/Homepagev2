import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import GivingHero from "../components/GivingHero";
import Header from "../components/Header";
import LegacyMethods from "../components/LegacyMethods";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";
import Testimonials from "../components/Testimonials";

const testimonials = [
	{
		text: "Including CMA in our estate plan felt like the most meaningful thing we could do. The museum shaped our children — and now it will shape children we'll never meet.",
		name: "Robert & Susan M.",
		location: "Buckhead, Atlanta",
	},
	{
		text: "A stock gift was simpler than I expected, and the tax benefit was real. The team at CMA made the whole process effortless.",
		name: "David K.",
		location: "Legacy Donor",
	},
	{
		text: "I set up a named endowment in my mother's memory. Knowing it will support CMA's programs forever is incredibly meaningful to our family.",
		name: "Christine L.",
		location: "Decatur, GA",
	},
];

export default function LegacyPage() {
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
				eyebrow="legacy giving"
				heading={"Leave a Legacy That\nLasts Through Play"}
				subtitle="A planned gift to CMA is one of the most meaningful ways to ensure every child in Atlanta has a place to learn, grow, and discover — for generations to come."
				ctas={[
					{ label: "Talk to Us", href: "mailto:kmcneely@childrensmuseumatlanta.org", variant: "orange" },
					{ label: "Ways to Give", href: "#/support", variant: "outline" },
				]}
			/>
			<LegacyMethods />
			<Testimonials heading="Legacy Donors Speak" items={testimonials} showWave={false} />
			<PYVCallout
				eyebrow="Legacy Giving"
				heading="Your Legacy Starts Today"
				body="A gift in your will, a stock donation, or a named endowment — every planned gift ensures the power of play reaches Atlanta's children for generations to come."
				cta={{ label: "Contact Our Team", href: "mailto:kmcneely@childrensmuseumatlanta.org" }}
				bg="bg-cma-navy"
				showCountdown={false}
			/>
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
