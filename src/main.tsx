import { createRoot } from "react-dom/client";
import { Component, type ReactNode } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import PlanYourVisitPage from "./app/pages/PlanYourVisitPage.tsx";
import MuseumStorePage from "./app/pages/MuseumStorePage.tsx";
import ExhibitsPage from "./app/pages/ExhibitsPage.tsx";
import ArticlePage from "./app/pages/ArticlePage.tsx";
import ExhibitPage from "./app/pages/ExhibitPage.tsx";
import EducatorsPage from "./app/pages/EducatorsPage.tsx";
import ProgramPage from "./app/pages/ProgramPage.tsx";
import AboutPage from "./app/pages/AboutPage.tsx";
import ImpactPage from "./app/pages/ImpactPage.tsx";
import CareersPage from "./app/pages/CareersPage.tsx";
import CalendarPage from "./app/pages/CalendarPage.tsx";
import EventPage from "./app/pages/EventPage.tsx";
import "./styles/index.css";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, fontFamily: "monospace", color: "red" }}>
          <strong>App crashed:</strong>
          <pre style={{ whiteSpace: "pre-wrap" }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <HashRouter>
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
      </Routes>
    </HashRouter>
  </ErrorBoundary>
);
