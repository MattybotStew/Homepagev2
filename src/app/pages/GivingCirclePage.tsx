import { Navigate, useParams } from "react-router-dom";
import AlertBanner from "../components/AlertBanner";
import ArticleContentWithSidebar from "../components/ArticleContentWithSidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import TournamentForPlayContent from "../components/TournamentForPlayContent";
import { givingCircles } from "../data/givingCircles";

export default function GivingCirclePage() {
	const { slug } = useParams<{ slug: string }>();
	const circle = givingCircles.find((c) => c.slug === slug);

	if (!circle) return <Navigate to="/support" replace />;

	const related = givingCircles.filter((c) => c.slug !== slug).slice(0, 3);

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
			{slug === "tournament-for-play" ? (
				<TournamentForPlayContent related={related} />
			) : (
				<ArticleContentWithSidebar
					exhibit={circle}
					related={related}
					sections={circle.sections}
					breadcrumb={{ label: "Support", href: "#/support" }}
					relatedHrefBase="#/giving-circles"
					relatedHeading="Other Ways to Give"
					relatedCta="Learn More"
				/>
			)}
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
