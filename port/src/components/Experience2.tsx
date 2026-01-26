import { useState, useRef } from "react";
import {
  Briefcase,
  Code2,
  Lock,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Freelance Developer",
    company: "Self-Employed",
    date: "Oct 2025 – Present",
    impact:
      "Architecting scalable full-stack solutions for diverse clients. Currently building a payment-splitting platform and a custom CMS, transitioning from Flask to FastAPI for improved performance.",
    tech: ["FastAPI", "React", "System Design", "API Integration"],
    icon: Globe,
    color: "from-blue-600 to-cyan-600",
    darkColor: "from-blue-700 to-cyan-700",
    accentColor: "bg-blue-500",
  },
  {
    id: 2,
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
    id: 3,
    title: "Backend Developer",
    company: "Payverve",
    date: "Oct 2024 – Nov 2024",
    impact:
      "Maintained a 90% on-time completion rate for complex backend tasks. Built secure financial transaction systems and validation protocols.",
    tech: ["Backend Development", "Security", "Data Validation"],
    icon: Lock,
    color: "from-teal-600 to-cyan-700",
    darkColor: "from-teal-700 to-cyan-800",
    accentColor: "bg-cyan-500",
  },
  {
    id: 4,
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
        isHovered ? "scale-[1.02]" : "scale-100"
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 350;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 border-b-2 border-green-600/50 dark:bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto px-4 relative group">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Professional Journey
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
          </div>

          {/* Navigation Buttons - Hidden on Mobile, Flex on Desktop */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-white" />
            </button>
          </div>
        </div>

        {/* Layout Logic:
           - Mobile: 'flex-col' (Stacks vertically)
           - Desktop: 'md:flex-row' (Horizontal) + 'md:overflow-x-auto' (Scrolls)
        */}
        <div
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row md:overflow-x-auto gap-6 md:gap-8 pb-12 md:snap-x md:snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`
                flex-shrink-0 
                w-full md:w-[calc(33.333%-1.5rem)] 
                md:snap-center 
                ${index % 2 !== 0 ? "md:translate-y-8" : ""}
              `}
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
