import { Navigate, useParams } from "react-router-dom";
import AlertBanner from "../components/AlertBanner";
import EventContent from "../components/EventContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import { allEvents } from "../data/events";

export default function EventPage() {
	const { slug } = useParams<{ slug: string }>();
	const event = allEvents.find((e) => e.slug === slug);

	if (!event) return <Navigate to="/events" replace />;

	const related = allEvents.filter((e) => e.slug !== slug).slice(0, 3);

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

			<EventContent event={event} related={related} />
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
