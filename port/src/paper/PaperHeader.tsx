import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Laptop, Sparkles } from "lucide-react";

interface PaperHeaderProps {
  onSwitchToClassic: () => void;
}

export function PaperHeader({ onSwitchToClassic }: PaperHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f5]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Pill: Portfolio ✦ 2026 / Sandee.dev (Image 1 style) */}
        <div className="flex items-center gap-3">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("about");
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 shadow-xs hover:border-emerald-600/40 transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold tracking-tight text-stone-800">
              Portfolio <span className="text-stone-400 font-normal">✦</span> 2026
            </span>
          </a>

          {/* Quick badge */}
          <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-[11px] font-hand text-amber-900 font-bold -rotate-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            desk view
          </span>
        </div>

        {/* Center Pill Navigation (Image 1 style) */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/90 p-1.5 rounded-full border border-stone-200/90 shadow-xs backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.id);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-stone-900 text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Switch to Sleek / Classic View button */}
          <button
            onClick={onSwitchToClassic}
            title="Switch to Sleek Dark/Light Mode"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-stone-700 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
          >
            <Laptop className="w-3.5 h-3.5 text-stone-600" />
            <span>Classic View</span>
          </button>

          {/* Contact / Hire Me Pill Button (Image 1 & 2 style) */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("contact");
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-900 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onSwitchToClassic}
            aria-label="Switch to classic view"
            className="px-2.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium flex items-center gap-1"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span className="text-[11px]">Classic</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-white border border-stone-200 text-stone-800 shadow-2xs"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Styled like a taped index card) */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-4 right-4 bg-white/95 backdrop-blur-xl border border-stone-200 rounded-2xl shadow-xl p-4 transition-all z-50">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-100">
            <span className="text-xs font-hand text-stone-500 font-bold">
              Navigation notes ✦
            </span>
            <span className="text-[10px] font-mono text-stone-400">Desk View</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(item.id);
                  }}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-stone-900 text-white font-semibold"
                      : "text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onSwitchToClassic();
              }}
              className="flex-1 py-2 text-center text-xs font-semibold rounded-xl bg-stone-100 text-stone-700 border border-stone-200"
            >
              Switch to Classic View 💻
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("contact");
              }}
              className="flex-1 py-2 text-center text-xs font-semibold rounded-xl bg-stone-900 text-white"
            >
              Let's talk ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default PaperHeader;

