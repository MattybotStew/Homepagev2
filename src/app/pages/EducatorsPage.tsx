import imgEducatorsHero from "../../assets/educators-hero.webp";
import AlertBanner from "../components/AlertBanner";
import EducatorsImpact from "../components/EducatorsImpact";
import EducatorsPrograms from "../components/EducatorsPrograms";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
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
				ctas={[
					{
						label: "Education at the Museum",
						href: "#programs",
						variant: "orange",
					},
					{
						label: "Connect with Our Team",
						href: "#contact",
						variant: "teal-outline",
					},
				]}
				showHoursWidget={false}
			/>
			<EducatorsPrograms />
			<EducatorsImpact />
			<Testimonials
				heading="What Teachers Are Saying"
				items={educatorTestimonials}
				showWave={false}
			/>
			<PYVCallout
				eyebrow="Education at CMA"
				heading="Education at the Museum"
				body="CMA offers programs for every type of learner — from field trips and scout workshops to in-school outreach and professional development for educators. Explore everything we have to offer."
				cta={{ label: "Education Resources", href: "#programs" }}
				bg="bg-cma-navy"
				showCountdown={false}
				showTopWave={true}
			/>
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
