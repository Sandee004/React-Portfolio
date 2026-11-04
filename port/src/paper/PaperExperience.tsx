import { Server, Globe, Code2 } from "lucide-react";
import { Tape, type TapeVariant } from "./Tape";
import { StickyNote } from "./StickyNote";

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
    isDark: true,
    rotation: -1,
    tapeVariant: "charcoal" as TapeVariant,
    tapeAngle: 2,
    badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
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
    isDark: false,
    rotation: 1.2,
    tapeVariant: "mint" as TapeVariant,
    tapeAngle: -1.5,
    badgeColor: "bg-emerald-100 text-emerald-800 border border-emerald-300",
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
    isDark: false,
    rotation: -1.2,
    tapeVariant: "yellow" as TapeVariant,
    tapeAngle: 1,
    badgeColor: "bg-amber-100 text-amber-900 border border-amber-300",
  },
];

export function PaperExperience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-stone-200/90 relative"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 max-w-5xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300/60 text-amber-900 text-xs font-semibold mb-3">
              <span>Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
              Professional Journey
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Shipped products, infrastructure, and distributed systems.
            </p>
          </div>

          <div className="shrink-0">
            <StickyNote
              color="yellow"
              rotation={-2}
              tapeVariant="yellow"
              tapeAngle={1.5}
              tapeWidth="w-20"
              className="py-2.5 px-4 shadow-sm"
            >
              <span className="text-sm font-bold text-amber-950">
                100% uptime focus 📈
              </span>
            </StickyNote>
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                style={{ transform: `rotate(${exp.rotation}deg)` }}
                className={`relative p-7 rounded-2xl border paper-shadow hover-wobble desk-tilt flex flex-col justify-between transition-all duration-300 ${
                  exp.isDark
                    ? "bg-stone-900 text-white border-stone-800 paper-shadow-lifted"
                    : "bg-white text-stone-900 border-stone-200/90"
                }`}
              >
                {/* Washi Tape */}
                <Tape
                  variant={exp.tapeVariant}
                  angle={exp.tapeAngle}
                  width="w-28"
                  position="top-center"
                />

                <div>
                  {/* Top Row: Icon & Status Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`p-2.5 rounded-xl ${
                        exp.isDark
                          ? "bg-stone-800 text-emerald-400 border border-stone-700"
                          : "bg-stone-100 text-stone-800 border border-stone-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${exp.badgeColor}`}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3
                    className={`text-xl font-bold mb-1 tracking-tight leading-snug ${
                      exp.isDark ? "text-white" : "text-stone-900"
                    }`}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-1 ${
                      exp.isDark ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    {exp.company}
                  </p>
                  <p
                    className={`text-xs font-mono mb-5 ${
                      exp.isDark ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    {exp.date}
                  </p>

                  <div
                    className={`h-px w-full mb-5 ${
                      exp.isDark ? "bg-stone-800" : "bg-stone-100"
                    }`}
                  />

                  {/* Bullet Highlights */}
                  <ul
                    className={`space-y-2.5 mb-6 text-xs sm:text-[13px] leading-relaxed ${
                      exp.isDark ? "text-stone-300" : "text-stone-600"
                    }`}
                  >
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold mt-0.5">
                          ›
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges Footer */}
                <div
                  className={`flex flex-wrap gap-1.5 pt-4 border-t ${
                    exp.isDark ? "border-stone-800" : "border-stone-100"
                  }`}
                >
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 text-[11px] font-mono rounded-md ${
                        exp.isDark
                          ? "bg-stone-800 text-stone-300 border border-stone-700"
                          : "bg-stone-100 text-stone-700 border border-stone-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PaperExperience;

