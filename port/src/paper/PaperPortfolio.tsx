import { PaperHeader } from "./PaperHeader";
import { PaperAbout } from "./PaperAbout";
import { PaperSkills } from "./PaperSkills";
import { PaperExperience } from "./PaperExperience";
import { PaperProjects } from "./PaperProjects";
import { PaperContact } from "./PaperContact";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import "./paper.css";

interface PaperPortfolioProps {
  onSwitchToClassic: () => void;
}

export function PaperPortfolio({ onSwitchToClassic }: PaperPortfolioProps) {
  return (
    <div className="min-h-screen flex flex-col paper-desk-bg text-stone-900 selection:bg-amber-200 selection:text-amber-950 font-desk overflow-x-hidden">
      {/* Top Header */}
      <PaperHeader onSwitchToClassic={onSwitchToClassic} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <PaperAbout />
        <PaperSkills />
        <PaperExperience />
        <PaperProjects />
        <PaperContact />
      </main>

      {/* Floating Bottom Dock (Inspired by Image 1's colorful bottom app dock) */}
      <aside
        aria-label="Quick links"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full border border-stone-200/90 paper-shadow-lg flex items-center gap-2 select-none"
      >
        <a
          href="https://github.com/Sandee004"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:scale-110 hover:bg-emerald-600 transition-all shadow-xs"
        >
          <Github className="w-4 h-4" />
        </a>

        <a
          href="https://www.linkedin.com/in/oyarekhua-sandra"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 transition-all shadow-xs"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <a
          href="https://x.com/sandee__tee"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter / X"
          className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-all shadow-xs"
        >
          <Twitter className="w-4 h-4" />
        </a>

        <a
          href="mailto:oyarekhuas@gmail.com"
          title="Email"
          className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:scale-110 transition-all shadow-xs"
        >
          <Mail className="w-4 h-4" />
        </a>

        {/* <div className="h-4 w-px bg-stone-200 mx-1" />

        {/* Quick View Switcher button in dock /}
         <button
          onClick={onSwitchToClassic}
          title="Switch to Classic View"
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-all hover:scale-105"
        >
          <Laptop className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Classic View</span>
        </button> */}
      </aside>
    </div>
  );
}

export default PaperPortfolio;

