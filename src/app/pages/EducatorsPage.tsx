import imgEducatorsHero from "../../assets/educators-hero.webp";
import AlertBanner from "../components/AlertBanner";
import EducatorsImpact from "../components/EducatorsImpact";
import EducatorsPrograms from "../components/EducatorsPrograms";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import Testimonials from "../components/Testimonials";

const educatorTestimonials = [
	{
		text: "My students really enjoyed the Museum On-the-Go experience, especially creating the galaxy jars. The hands-on activity kept them engaged and excited.",
		name: "Yolandria",
		location: "2nd Grade Teacher",
	},
	{
		text: "Well organized and enough exhibits to accommodate multiple field trip groups. Thank you!",
		name: "Kendria",
		location: "Kindergarten Teacher",
	},
	{
		text: "Check-in was seamless and the children and chaperones felt welcome! The science show and exhibits were engaging!",
		name: "Brandi",
		location: "2nd & 3rd Grade Teacher",
	},
	{
		text: "I would absolutely recommend this event to other scout troops. It has definitely been a top Girl Scout experience.",
		name: "Brianna",
		location: "Troop 25057 Parent",
	},
];

export default function EducatorsPage() {
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
				bgImage={imgEducatorsHero}
				eyebrow="Children's Museum of Atlanta"
				heading="Education Programs"
				subtitle="The Museum has plenty to offer, whether you're visiting for a fun field trip, a Scout workshop, or bringing the Museum right into your classroom!"
				ctas={[]}
				showHoursWidget={false}
			/>
			<EducatorsPrograms />
			<EducatorsImpact />
			<Testimonials
				heading="What the Community is Saying"
				items={educatorTestimonials}
				showWave={false}
			/>
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
