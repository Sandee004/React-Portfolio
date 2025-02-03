import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DarkModeToggle } from "./darkmode";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#about" className="text-3xl font-bold text-primary">
          Sandee
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-text hover:text-primary transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Overlay) */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-50 animate-slide-down">
          <nav className="py-4">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block w-full text-left py-2 px-4 text-text hover:text-primary transition duration-300"
                onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
