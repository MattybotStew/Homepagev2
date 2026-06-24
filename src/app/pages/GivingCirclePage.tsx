import { Navigate, useParams } from "react-router-dom";
import AlertBanner from "../components/AlertBanner";
import ArticleContentWithSidebar from "../components/ArticleContentWithSidebar";
import Footer from "../components/Footer";
import FundraisingEventContent from "../components/FundraisingEventContent";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import { givingCircles } from "../data/givingCircles";

export default function GivingCirclePage() {
	const { slug } = useParams<{ slug: string }>();
	const circle = givingCircles.find((c) => c.slug === slug);

	if (!circle || circle.draft) return <Navigate to="/support" replace />;

	const related = givingCircles.filter((c) => c.slug !== slug && !c.draft).slice(0, 3);

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
			{circle.fundraisingEvent ? (
				<FundraisingEventContent circle={circle} related={related} />
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
