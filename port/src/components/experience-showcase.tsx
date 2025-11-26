"use client";

import { useState } from "react";
import ExperienceCard from "./experience-card";
import { Briefcase, Code2, Lock } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Contract Frontend Developer",
    company: "Ventify Technologies",
    date: "Jan 2025 – Jun 2025",
    impact:
      "Built a dynamic multi-faceted dashboard with 100% design fidelity using React. Integrated backend APIs for real-time data flow.",
    tech: ["React", "API Integration", "Agile"],
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    darkColor: "from-cyan-600 to-blue-600",
    accentColor: "bg-cyan-500",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Payverve",
    date: "Oct 2024 – Nov 2024",
    impact:
      "Maintained a 90% on-time completion rate for complex backend tasks. Built secure financial transaction systems and validation protocols.",
    tech: ["Backend Development", "Security", "Data Validation"],
    icon: Lock,
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-600 to-pink-600",
    accentColor: "bg-purple-500",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Zteller Technologies",
    date: "Sep 2024 – Oct 2024",
    impact:
      "Improved mobile user engagement by 35% via responsive design. Delivered pixel-perfect interfaces matching complex design specs.",
    tech: ["Responsive Design", "UI/UX Implementation"],
    icon: Briefcase,
    color: "from-cyan-500 to-blue-500",
    darkColor: "from-cyan-600 to-blue-600",
    accentColor: "bg-cyan-500",
  },
];

export default function ExperienceShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {experiences.map((exp, index) => {
        const Icon = exp.icon;
        return (
          <div
            key={exp.id}
            className={`transform transition-all duration-300 ${
              index % 2 !== 0 ? "md:translate-y-8" : ""
            } ${hoveredId === exp.id ? "scale-105" : "scale-100"}`}
            onMouseEnter={() => setHoveredId(exp.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <ExperienceCard
              experience={exp}
              Icon={Icon}
              isHovered={hoveredId === exp.id}
            />
          </div>
        );
      })}
    </div>
  );
}
