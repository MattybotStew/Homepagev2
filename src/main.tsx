import { Component, type ReactNode, Suspense, lazy, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

// Lazy load all page components
const App = lazy(() => import("./app/App.tsx"));
const AboutPage = lazy(() => import("./app/pages/AboutPage.tsx"));
const ArticlePage = lazy(() => import("./app/pages/ArticlePage.tsx"));
const ResourcePage = lazy(() => import("./app/pages/ResourcePage.tsx"));
const CalendarPage = lazy(() => import("./app/pages/CalendarPage.tsx"));
const CareersPage = lazy(() => import("./app/pages/CareersPage.tsx"));
const DonatePage = lazy(() => import("./app/pages/DonatePage.tsx"));
const EducatorsPage = lazy(() => import("./app/pages/EducatorsPage.tsx"));
const EventPage = lazy(() => import("./app/pages/EventPage.tsx"));
const ExhibitPage = lazy(() => import("./app/pages/ExhibitPage.tsx"));
const ExhibitsPage = lazy(() => import("./app/pages/ExhibitsPage.tsx"));
const ImpactPage = lazy(() => import("./app/pages/ImpactPage.tsx"));
const MuseumStorePage = lazy(() => import("./app/pages/MuseumStorePage.tsx"));
const NewsPage = lazy(() => import("./app/pages/NewsPage.tsx"));
const PlanYourVisitPage = lazy(() => import("./app/pages/PlanYourVisitPage.tsx"));
const PlayfulLearningPage = lazy(() => import("./app/pages/PlayfulLearningPage.tsx"));
const MembershipsPage = lazy(() => import("./app/pages/MembershipsPage.tsx"));
const MembershipInfoPage = lazy(() => import("./app/pages/MembershipInfoPage.tsx"));
const CorporateMembershipPage = lazy(() => import("./app/pages/CorporateMembershipPage.tsx"));
const ProgramPage = lazy(() => import("./app/pages/ProgramPage.tsx"));
const SupportPage = lazy(() => import("./app/pages/SupportPage.tsx"));
const CorporatePartnerPage = lazy(() => import("./app/pages/CorporatePartnerPage.tsx"));
const DonorRecognitionPage = lazy(() => import("./app/pages/DonorRecognitionPage.tsx"));
const GivingCirclePage = lazy(() => import("./app/pages/GivingCirclePage.tsx"));
const ContactPage = lazy(() => import("./app/pages/ContactPage.tsx"));
const NotFoundPage = lazy(() => import("./app/pages/NotFoundPage.tsx"));
const PrivacyPage = lazy(() => import("./app/pages/PrivacyPage.tsx"));
const TermsPage = lazy(() => import("./app/pages/TermsPage.tsx"));
const SearchPage = lazy(() => import("./app/pages/SearchPage.tsx"));
const StyleguidePage = lazy(() => import("./app/pages/StyleguidePage.tsx"));

// Preload helper - loads module in background without blocking
const preloadPage = (importFn: Promise<any>) => {
  importFn.catch(() => {});
};

// Preload critical pages (pages users are most likely to visit)
preloadPage(import("./app/pages/ExhibitsPage.tsx"));
preloadPage(import("./app/pages/PlanYourVisitPage.tsx"));
preloadPage(import("./app/pages/AboutPage.tsx"));
preloadPage(import("./app/pages/EducatorsPage.tsx"));

// Loading component
function PageLoader() {
  return (
    <div className="fixed inset-0 bg-cma-cream flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-cma-teal border-t-cma-orange rounded-full animate-spin" />
        <p className="text-cma-navy font-semibold">Loading...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
        <div className="min-h-screen bg-cma-cream flex items-center justify-center p-8">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center">
            <h2 className="text-cma-navy text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-cma-gray mb-6">
              We're sorry, but something went wrong. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === "development" && (
              <pre className="mt-4 text-xs text-left text-red-500 overflow-auto max-h-64">
                {String(this.state.error)}
              </pre>
            )}
          </div>
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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/plan-your-visit" element={<PlanYourVisitPage />} />
          <Route path="/museum-store" element={<MuseumStorePage />} />
          <Route path="/exhibits" element={<ExhibitsPage />} />
          <Route path="/news/:slug" element={<ArticlePage />} />
          <Route path="/exhibits/:slug" element={<ExhibitPage />} />
          <Route path="/educators" element={<EducatorsPage />} />
          <Route path="/program/:slug" element={<ProgramPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/impact" element={<ImpactPage />} />
          <Route path="/about/careers" element={<CareersPage />} />
          <Route path="/events" element={<CalendarPage />} />
          <Route path="/events/:slug" element={<EventPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/resources/playful-learning" element={<PlayfulLearningPage />} />
          <Route path="/resources/playful-learning/:slug" element={<ResourcePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/memberships" element={<MembershipsPage />} />
          <Route path="/memberships/information" element={<MembershipInfoPage />} />
          <Route path="/memberships/corporate" element={<CorporateMembershipPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/support/corporate-partners" element={<CorporatePartnerPage />} />
          <Route path="/support/donor-recognition" element={<DonorRecognitionPage />} />
          <Route path="/giving-circles/young-professionals" element={<Navigate to="/support" replace />} />
          <Route path="/giving-circles/dream-builders" element={<Navigate to="/support" replace />} />
          <Route path="/giving-circles/:slug" element={<GivingCirclePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/styleguide" element={<StyleguidePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  </ErrorBoundary>,
);