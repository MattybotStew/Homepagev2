import { Component, type ReactNode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return null;
}

import App from "./app/App.tsx";
import AboutPage from "./app/pages/AboutPage.tsx";
import ArticlePage from "./app/pages/ArticlePage.tsx";
import BookYourVisitPage from "./app/pages/BookYourVisitPage.tsx";
import CalendarPage from "./app/pages/CalendarPage.tsx";
import CareersPage from "./app/pages/CareersPage.tsx";
import DonatePage from "./app/pages/DonatePage.tsx";
import EducatorsPage from "./app/pages/EducatorsPage.tsx";
import EventPage from "./app/pages/EventPage.tsx";
import ExhibitPage from "./app/pages/ExhibitPage.tsx";
import ExhibitsPage from "./app/pages/ExhibitsPage.tsx";
import ImpactPage from "./app/pages/ImpactPage.tsx";
import MuseumStorePage from "./app/pages/MuseumStorePage.tsx";
import NewsPage from "./app/pages/NewsPage.tsx";
import PlanYourVisitPage from "./app/pages/PlanYourVisitPage.tsx";
import PlayfulLearningPage from "./app/pages/PlayfulLearningPage.tsx";
import ProgramPage from "./app/pages/ProgramPage.tsx";
import "./styles/index.css";

class ErrorBoundary extends Component<
	{ children: ReactNode },
	{ error: Error | null }
> {
	state = { error: null };
	static getDerivedStateFromError(error: Error) {
		return { error };
	}
	render() {
		if (this.state.error) {
			return (
				<div style={{ padding: 32, fontFamily: "monospace", color: "red" }}>
					<strong>App crashed:</strong>
					<pre style={{ whiteSpace: "pre-wrap" }}>
						{String(this.state.error)}
					</pre>
				</div>
			);
		}
		return this.props.children;
	}
}

createRoot(document.getElementById("root")!).render(
	<ErrorBoundary>
		<HashRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/plan-your-visit" element={<PlanYourVisitPage />} />
				<Route path="/museum-store" element={<MuseumStorePage />} />
				<Route path="/exhibits" element={<ExhibitsPage />} />
				<Route path="/article" element={<ArticlePage />} />
				<Route path="/exhibits/:slug" element={<ExhibitPage />} />
				<Route path="/educators" element={<EducatorsPage />} />
				<Route path="/program/:slug" element={<ProgramPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/about/impact" element={<ImpactPage />} />
				<Route path="/about/careers" element={<CareersPage />} />
				<Route path="/events" element={<CalendarPage />} />
				<Route path="/events/:slug" element={<EventPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route
					path="/resources/playful-learning"
					element={<PlayfulLearningPage />}
				/>
				<Route path="/book-your-visit" element={<BookYourVisitPage />} />
				<Route path="/donate" element={<DonatePage />} />
			</Routes>
		</HashRouter>
	</ErrorBoundary>,
);
