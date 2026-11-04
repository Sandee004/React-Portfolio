import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { PaperPortfolio } from "./paper/PaperPortfolio";
import { Laptop } from "lucide-react";

export type PortfolioView = "classic" | "paper";

export default function Home() {
  const [view, setView] = useState<PortfolioView>(() => {
    if (typeof window !== "undefined") {
      // 1. Check URL parameters
      const params = new URLSearchParams(window.location.search);
      const urlView = params.get("view");
      if (urlView === "paper" || urlView === "classic") {
        return urlView;
      }

      // 2. Check path or hash
      if (
        window.location.pathname.includes("/paper") ||
        window.location.hash.includes("paper")
      ) {
        return "paper";
      }

      // 3. Check localStorage
      const saved = localStorage.getItem("portfolio_view");
      if (saved === "paper" || saved === "classic") {
        return saved;
      }
    }
    return "classic";
  });

  // Keep dark mode state in sync with view
  useEffect(() => {
    if (view === "paper") {
      // Paper view is designed as a warm tactile desk (light mode)
      document.documentElement.classList.remove("dark");
    } else {
      // In classic view, restore dark mode setting if saved
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode === "true") {
        document.documentElement.classList.add("dark");
      }
    }
  }, [view]);

  const switchToPaper = () => {
    setView("paper");
    localStorage.setItem("portfolio_view", "paper");
    const url = new URL(window.location.href);
    url.searchParams.set("view", "paper");
    window.history.pushState({}, "", url.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const switchToClassic = () => {
    setView("classic");
    localStorage.setItem("portfolio_view", "classic");
    const url = new URL(window.location.href);
    url.searchParams.delete("view");
    window.history.pushState({}, "", url.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render Paper Desk View
  if (view === "paper") {
    return (
      <div className="relative">
        <PaperPortfolio onSwitchToClassic={switchToClassic} />

        {/* Ambient Floating Toggle Pill in Bottom Right */}
        <aside
          aria-label="View switcher"
          className="fixed bottom-6 right-6 z-50 hidden sm:block"
        >
          <button
            onClick={switchToClassic}
            title="Switch to Sleek View"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold shadow-xl border border-stone-700/60 hover:scale-105 transition-all"
          >
            <Laptop className="w-3.5 h-3.5 text-emerald-400" />
            <span>Switch to Classic View</span>
          </button>
        </aside>
      </div>
    );
  }

  // Render Classic Portfolio View
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900 relative">
      <Header onSwitchToPaper={switchToPaper} />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Ambient Floating Toggle Pill for Classic View */}
      <aside
        aria-label="View switcher"
        className="fixed bottom-6 right-6 z-50 hidden sm:block"
      >
        <button
          onClick={switchToPaper}
          title="Try Paper Desk View"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-stone-900 text-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-700/60 text-xs font-semibold shadow-xl hover:scale-105 transition-all group"
        >
          <span className="text-base group-hover:rotate-12 transition-transform">
            📎
          </span>
          <span>Try Desk Paper View</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
        </button>
      </aside>
    </div>
  );
}
