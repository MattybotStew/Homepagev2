import { Navigate, useParams } from "react-router-dom";
import AlertBanner from "../components/AlertBanner";
import ArticleContentWithSidebar from "../components/ArticleContentWithSidebar";
import EducatorPDProgramContent from "../components/EducatorPDProgramContent";
import FieldTripsProgramContent from "../components/FieldTripsProgramContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import MuseumOnTheGoProgramContent from "../components/MuseumOnTheGoProgramContent";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScoutsProgramContent from "../components/ScoutsProgramContent";
import ScrollProgress from "../components/ScrollProgress";
import { programs } from "../data/programs";

export default function ProgramPage() {
	const { slug } = useParams<{ slug: string }>();
	const program = programs.find((p) => p.slug === slug);

	if (!program) return <Navigate to="/educators" replace />;

	const related = programs.filter((p) => p.slug !== slug).slice(0, 3);

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
			{slug === "field-trips" ? (
				<FieldTripsProgramContent />
			) : slug === "scout-workshops" ? (
				<ScoutsProgramContent />
			) : slug === "museum-on-the-go" ? (
				<MuseumOnTheGoProgramContent />
			) : slug === "educator-professional-development" ? (
				<EducatorPDProgramContent />
			) : (
				<ArticleContentWithSidebar
					exhibit={program}
					related={related}
					sections={program.sections}
					breadcrumb={{ label: "Educators", href: "#/educators" }}
					relatedHrefBase="#/program"
				/>
			)}

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
