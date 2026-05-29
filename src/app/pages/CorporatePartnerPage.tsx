import AlertBanner from "../components/AlertBanner";
import CorporatePartnerOptions from "../components/CorporatePartnerOptions";
import Footer from "../components/Footer";
import GivingHero from "../components/GivingHero";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";
import Testimonials from "../components/Testimonials";

const testimonials = [
	{
		text: "Our corporate partnership with CMA has been one of the most authentic CSR investments we've made. Our employees love it and the impact is undeniable.",
		name: "Michelle T.",
		location: "Corporate Partner",
	},
	{
		text: "Sponsoring an exhibit gave our brand visibility we couldn't buy anywhere else — and it genuinely supports Atlanta's families. A perfect alignment.",
		name: "David R.",
		location: "Exhibit Sponsor",
	},
	{
		text: "The volunteer day we organized through CMA was the highlight of our team calendar. Our people came back energized and proud.",
		name: "Sarah K.",
		location: "Corporate Volunteer Partner",
	},
];

export default function CorporatePartnerPage() {
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
				eyebrow="corporate partnerships"
				heading={"Partner With\nUs at CMA"}
				subtitle="When your company invests in CMA, you invest in Atlanta's children and their future."
				body="From exhibit sponsorships to volunteer days, there's a partnership that fits your goals — and makes a real difference for the 180,000+ families we serve each year."
				stats={[
					{ value: "180,000+ Annual Visitors", orange: true },
					{ value: "6 Signature Events/Year", orange: false },
					{ value: "20,000 sq ft of Exhibit Space", orange: true },
					{ value: "Downtown Atlanta Location", orange: false },
				]}
				ctas={[
					{ label: "Explore Partnerships", href: "#partnership-options", variant: "orange" },
					{ label: "Download Annual Report", href: "#/about/impact", variant: "outline" },
				]}
			/>
			<CorporatePartnerOptions />
			<Testimonials heading="What Partners Say" items={testimonials} showWave={false} />
			<PYVCallout
				eyebrow="Corporate Partnerships"
				heading="Let's Build Something Together"
				body="Ready to explore a partnership that aligns with your brand and your community values? Our team would love to connect and find the right fit for your company."
				cta={{ label: "Contact Kate McNeely", href: "mailto:kmcneely@childrensmuseumatlanta.org" }}
				bg="bg-cma-navy"
				showCountdown={false}
			/>
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
