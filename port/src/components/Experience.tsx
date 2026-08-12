import { useState, useRef } from "react";
import { Code2, ChevronLeft, ChevronRight, Globe, Server } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Core Infrastructure & Microservices",
    date: "May 2026 – Present",
    badge: "Current Role",
    highlights: [
      "Provisioned microservices using Docker to spin up repeatable environments, cutting manual setup effort by ~70%.",
      "Integrated observability tools (Grafana, Prometheus, Redis, Kafka) for real-time monitoring and sub-12ms event streaming.",
      "Deployed Open5GS virtual 5G core network with simulated devices to conduct realistic network behavior testing.",
    ],
    tech: [
      "Docker",
      "Grafana",
      "Prometheus",
      "Kafka",
      "Redis",
      "Open5GS",
      "Python",
    ],
    icon: Server,
    accentBorder: "group-hover:border-emerald-500/50",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    id: 2,
    title: "Freelance Software Engineer",
    company: "Fullstack & Mobile Systems",
    date: "Nov 2025 – Present",
    badge: "Production / Scale",
    highlights: [
      "Architected and deployed 'Pick' (React Native / Expo), a ride/delivery platform engineered to scale to 50,000+ users.",
      "Integrated Paystack payment infrastructure with idempotency protection, handling millions in volume with zero payout failures.",
      "Spearheaded the frontend architecture for 'Kloza', an e-commerce platform serving 1,000+ active users across 4+ countries.",
    ],
    tech: [
      "React Native",
      "Expo",
      "FastAPI",
      "Paystack",
      "Next.js",
      "PostgreSQL",
    ],
    icon: Globe,
    accentBorder: "group-hover:border-green-500/50",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    id: 3,
    title: "Contract Fullstack Developer",
    company: "Roots N Squares",
    date: "Jun 2025 – Aug 2025",
    badge: "Client Contract",
    highlights: [
      "Delivered sprint milestones on a distributed agile team under shifting product requirements.",
      "Built a multi-view admin dashboard in React, translating design specs into responsive components wired to live REST APIs.",
    ],
    tech: ["React", "REST APIs", "TailwindCSS", "Agile Workflow"],
    icon: Code2,
    accentBorder: "group-hover:border-emerald-500/50",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
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
      className="h-full group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Glassmorphism Outer Container */}
      <div
        className={`relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between
          bg-white/70 dark:bg-gray-800/40 
          backdrop-blur-md 
          border border-gray-200/80 dark:border-gray-700/50 
          ${experience.accentBorder}
          ${isHovered ? "shadow-xl shadow-green-950/5 dark:shadow-green-500/5 -translate-y-1" : "shadow-sm"}
        `}
      >
        {/* Subtle Emerald Radial Glow on Hover */}
        <div
          className={`absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Content Section */}
        <div className="relative z-10 flex flex-col">
          {/* Header Row: Icon & Status Badge */}
          <div className="flex items-center justify-between mb-5">
            <div
              className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700/60 text-emerald-600 dark:text-emerald-400 transition-colors ${
                isHovered ? "border-emerald-500/40" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${experience.badgeColor}`}
            >
              {experience.badge}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
            {experience.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 font-medium text-sm mb-1">
            {experience.company}
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mb-5 font-mono">
            {experience.date}
          </p>

          <div className="h-px w-full bg-gray-200/80 dark:bg-gray-700/50 mb-5" />

          {/* Bullet Highlights */}
          <ul className="space-y-2.5 mb-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {experience.highlights.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-500 dark:text-emerald-400 font-bold mt-0.5">
                  ›
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Badges Footer */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200/60 dark:border-gray-700/40">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700/50 hover:border-emerald-500/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
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
      className="py-20 bg-gray-50/50 dark:bg-gray-900 border-b border-gray-200/80 dark:border-gray-800 shadow-sm"
    >
      <div className="container mx-auto px-4 relative group">
        <div className="mb-14 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Professional Journey
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-xl bg-white dark:bg-gray-800/80 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700/80"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-xl bg-white dark:bg-gray-800/80 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700/80"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row md:overflow-x-auto gap-6 pb-6 md:snap-x md:snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] md:snap-center"
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
