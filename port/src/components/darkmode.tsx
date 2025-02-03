import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full text-text hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
