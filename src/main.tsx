import { createRoot } from "react-dom/client";
import { Component, type ReactNode } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import PlanYourVisitPage from "./app/pages/PlanYourVisitPage.tsx";
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
      </Routes>
    </HashRouter>
  </ErrorBoundary>
);
