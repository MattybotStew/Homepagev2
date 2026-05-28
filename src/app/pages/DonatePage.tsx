import imgHero from "../../assets/educators-hero.webp";
import imgA from "../../assets/educators-img-0.webp";
import imgB from "../../assets/educators-img-1.webp";
import imgC from "../../assets/educators-img-2.webp";
import imgD from "../../assets/educators-img-3.webp";
import AlertBanner from "../components/AlertBanner";
import DonorTypesGrid from "../components/DonorTypesGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";
import SpecialExperiences, {
	type EventItem,
} from "../components/SpecialExperiences";
import Testimonials from "../components/Testimonials";

const donorTestimonials = [
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

const wayToGive: Record<string, EventItem[]> = {
	All: [
		{
			image: imgA,
			badge: "One-Time or Monthly",
			title: "General Fund",
			description:
				"Your unrestricted gift goes where it's needed most — from exhibit maintenance and daily programming to staff training and community outreach.",
		},
		{
			image: imgB,
			badge: "Access & Equity",
			title: "Access It! Fund",
			description:
				"Help ensure every child in Atlanta can experience the Museum, regardless of financial circumstance. Gifts support subsidized admission and free family days.",
		},
		{
			image: imgC,
			badge: "Community Impact",
			title: "Connected Learning",
			description:
				"Fund our outreach programs that bring museum experiences to schools and community centers in under-resourced neighborhoods across the city.",
		},
		{
			image: imgD,
			badge: "Corporate Giving",
			title: "Corporate Partnerships",
			description:
				"Partner with CMA to sponsor programs, exhibits, or events. Corporate gifts amplify your brand while creating real impact for Atlanta families.",
		},
		{
			image: imgA,
			badge: "Long-Term Impact",
			title: "Planned Giving",
			description:
				"Leave a legacy by including CMA in your estate plans. Our development team can help you structure a gift that reflects your values and goals.",
		},
		{
			image: imgB,
			badge: "Tribute & Honor",
			title: "Tribute Gifts",
			description:
				"Honor a loved one or celebrate a milestone with a donation to CMA. We'll send a personalized acknowledgment to the person or family you designate.",
		},
	],
	"One-Time": [
		{
			image: imgA,
			badge: "One-Time or Monthly",
			title: "General Fund",
			description:
				"Your unrestricted gift goes where it's needed most — from exhibit maintenance and daily programming to staff training and community outreach.",
		},
	],
	"Community Impact": [
		{
			image: imgB,
			badge: "Access & Equity",
			title: "Access It! Fund",
			description:
				"Help ensure every child in Atlanta can experience the Museum, regardless of financial circumstance.",
		},
		{
			image: imgC,
			badge: "Community Impact",
			title: "Connected Learning",
			description:
				"Fund our outreach programs that bring museum experiences to schools and community centers in under-resourced neighborhoods.",
		},
	],
	Corporate: [
		{
			image: imgD,
			badge: "Corporate Giving",
			title: "Corporate Partnerships",
			description:
				"Partner with CMA to sponsor programs, exhibits, or events. Corporate gifts amplify your brand while creating real impact for Atlanta families.",
		},
	],
	"Planned Giving": [
		{
			image: imgA,
			badge: "Long-Term Impact",
			title: "Planned Giving",
			description: "Leave a legacy by including CMA in your estate plans.",
		},
		{
			image: imgB,
			badge: "Tribute & Honor",
			title: "Tribute Gifts",
			description:
				"Honor a loved one or celebrate a milestone with a donation to CMA.",
		},
	],
};

export default function DonatePage() {
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
				bgImage={imgHero}
				eyebrow="Children's Museum of Atlanta"
				heading="Make Play Possible"
				subtitle="CMA is a nonprofit dedicated to sparking curiosity in every child. Your gift helps us reach over 100,000 young minds each year through hands-on programs and community outreach."
				ctas={[
					{ label: "Donate Now", href: "#/donate", variant: "orange" },
					{
						label: "Ways to Give",
						href: "#ways-to-give",
						variant: "teal-outline",
					},
				]}
				showHoursWidget={false}
			/>
			<DonorTypesGrid />
			<SpecialExperiences
				heading="Ways to Give"
				ctaButton={{ label: "Donate Now", href: "#/donate" }}
				filterEvents={wayToGive}
				wave="white"
			/>
			<Testimonials
				heading="Why Donors Give"
				items={donorTestimonials}
				showWave={false}
			/>
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
