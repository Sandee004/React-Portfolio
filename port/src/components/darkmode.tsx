import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check localStorage or fallback to system OS preference on initial render
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        return saved === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    // Sync class list with state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 flex items-center focus:outline-none border border-gray-200/80 dark:border-gray-700/60 shadow-inner ${
        darkMode ? "bg-gray-800" : "bg-gray-200/80"
      }`}
      aria-label="Toggle dark mode"
      role="switch"
      aria-checked={darkMode}
    >
      {/* Background Static Icons */}
      <div className="w-full flex justify-between items-center px-1 text-xs">
        <Sun className="w-3.5 h-3.5 text-amber-500" />
        <Moon className="w-3.5 h-3.5 text-emerald-400" />
      </div>

      {/* Sliding Thumb Container */}
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 flex items-center justify-center border border-gray-200/50 dark:border-gray-700/80 ${
          darkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <Moon className="w-3.5 h-3.5 text-emerald-400 transition-opacity" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-500 transition-opacity" />
        )}
      </div>
    </button>
  );
}
