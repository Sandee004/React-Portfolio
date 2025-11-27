import { useState } from "react";
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
    color: "from-green-600 to-emerald-600",
    darkColor: "from-green-700 to-emerald-700",
    accentColor: "bg-green-500",
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
    // NEW GRADIENT: Deep Teal/Cyan (ocean vibes)
    // It pops against the green but keeps the text readable
    color: "from-teal-600 to-cyan-700",
    darkColor: "from-teal-700 to-cyan-800",
    accentColor: "bg-cyan-500",
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
    color: "from-green-600 to-emerald-600",
    darkColor: "from-green-700 to-emerald-700",
    accentColor: "bg-green-500",
  },
];

interface ExperienceCardProps {
  experience: (typeof experiences)[0];
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ExperienceCard({
  experience,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: ExperienceCardProps) {
  const Icon = experience.icon;

  return (
    <div
      className={`transform transition-all duration-300 h-full ${
        isHovered ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
          isHovered ? "shadow-2xl" : "shadow-lg"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-100`}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            experience.darkColor
          } transition-opacity duration-300 ${
            isHovered ? "opacity-20" : "opacity-0"
          }`}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at top right, rgba(255,255,255,0.4), transparent 50%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div
            className={`mb-6 inline-flex p-3 w-fit rounded-xl backdrop-blur-sm transition-all duration-300 ${
              isHovered ? "scale-110 bg-white/30" : "bg-white/20"
            }`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
            {experience.title}
          </h3>
          <p className="text-white/90 font-semibold mb-1">
            {experience.company}
          </p>
          <p className="text-white/70 text-sm mb-6">{experience.date}</p>

          <div className="h-1 w-8 bg-white/40 rounded-full mb-6" />

          <p className="text-white/95 text-sm leading-relaxed mb-6 flex-grow">
            {experience.impact}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {experience.tech.map((tech) => (
              <span
                key={tech}
                className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-all duration-200 border border-white/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </div>
  );
}

export function Experience() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 border-b-2 border-green-600/50 dark:bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Professional Journey
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>
        {/* ----------------------------- */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={index % 2 !== 0 ? "md:translate-y-8" : ""}
            >
              <ExperienceCard
                experience={exp}
                isHovered={hoveredId === exp.id}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
