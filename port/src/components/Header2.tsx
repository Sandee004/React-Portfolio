import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DarkModeToggle } from "./darkmode";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <header className="fixed top-0 left-0 right-0 dark:border-green-500 dark:border-b-2 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#about"
          className="text-3xl font-bold text-primary dark:text-white font-Italianno"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll("about");
          }}
        >
          Sandee
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-text dark:text-gray-300 hover:text-primary dark:hover:text-green-300 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.toLowerCase());
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <DarkModeToggle />
        </div>

        <div className="flex md:hidden">
          <div className="md:hidden">
            <DarkModeToggle />
          </div>
          <button
            className="md:hidden p-2 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 animate-slide-down">
          <nav className="py-4 flex flex-col items-center space-y-4">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                //className="text-text  transition duration-300"
                className="block w-full dark:text-gray-300 dark:hover:text-green-300 text-left py-2 px-4 text-text hover:text-primary transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.toLowerCase());
                }}
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
