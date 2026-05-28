import { Navigate, useParams } from "react-router-dom";
import AlertBanner from "../components/AlertBanner";
import ArticleContent from "../components/ArticleContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import { exhibits } from "../data/exhibits";

export default function ExhibitPage() {
	const { slug } = useParams<{ slug: string }>();
	const exhibit = exhibits.find((e) => e.slug === slug);

	if (!exhibit) return <Navigate to="/exhibits" replace />;

	const related = exhibits.filter((e) => e.slug !== slug).slice(0, 3);

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

			<ArticleContent exhibit={exhibit} related={related} />
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
