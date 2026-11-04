import { FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiFlask,
  SiTailwindcss,
  SiPython,
  SiExpo,
  SiFastapi,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiGrafana,
  SiPrometheus,
  SiSupabase,
  SiSqlalchemy,
} from "react-icons/si";
import { Tape } from "./Tape";
import { StickyNote } from "./StickyNote";

interface SkillItem {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  description: string;
  tapeVariant: "yellow" | "mint" | "pink" | "clear" | "charcoal";
  tapeAngle: number;
  rotation: number;
  isDark?: boolean;
  skills: SkillItem[];
}

export function PaperSkills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages & Core",
      description: "What I write most daily",
      tapeVariant: "yellow",
      tapeAngle: -2,
      rotation: -1,
      skills: [
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-amber-500" />,
        },
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
      ],
    },
    {
      category: "Frontend & Mobile",
      description: "Websites and cross-platform apps",
      tapeVariant: "mint",
      tapeAngle: 1.5,
      rotation: 1.2,
      skills: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-stone-900" />,
        },
        { name: "React Native", icon: <FaReact className="text-sky-600" /> },
        {
          name: "Expo",
          icon: <SiExpo className="text-stone-900" />,
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-teal-500" />,
        },
      ],
    },
    {
      category: "Backend & Data",
      description: "The APIs and databases behind them",
      tapeVariant: "pink",
      tapeAngle: -1,
      rotation: -0.8,
      skills: [
        { name: "FastAPI", icon: <SiFastapi className="text-emerald-600" /> },
        {
          name: "Flask",
          icon: <SiFlask className="text-stone-900" />,
        },
        {
          name: "SQLAlchemy",
          icon: <SiSqlalchemy className="text-red-600" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-600" /> },
      ],
    },
    {
      category: "Infrastructure & Monitoring",
      description: "Running in production and keeping watch",
      tapeVariant: "charcoal",
      tapeAngle: 2,
      rotation: 1,
      isDark: true,
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        {
          name: "Kafka",
          icon: <SiApachekafka className="text-white" />,
        },
        { name: "Grafana", icon: <SiGrafana className="text-orange-400" /> },
        {
          name: "Prometheus",
          icon: <SiPrometheus className="text-orange-400" />,
        },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-rose-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-b border-stone-200/90 relative"
    >
      <div className="container mx-auto px-4">
        {/* Section Header with Sticky Note Accent */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 max-w-5xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-800 text-xs font-semibold mb-3">
              <span>Toolbox</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              From low-level data structures to high-throughput containerized deployments.
            </p>
          </div>

          <div className="shrink-0">
            <StickyNote
              color="mint"
              rotation={2}
              tapeVariant="mint"
              tapeAngle={-1.5}
              tapeWidth="w-20"
              className="py-2.5 px-4 shadow-sm"
            >
              <span className="text-sm font-bold text-emerald-950">
                production ready ⚙️
              </span>
            </StickyNote>
          </div>
        </div>

        {/* 4 Index Cards on Desk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              style={{ transform: `rotate(${group.rotation}deg)` }}
              className={`relative p-7 rounded-2xl border paper-shadow hover-wobble desk-tilt transition-all duration-300 ${
                group.isDark
                  ? "bg-stone-900 text-white border-stone-800"
                  : "bg-white text-stone-900 border-stone-200/90"
              }`}
            >
              {/* Top Tape Strip */}
              <Tape
                variant={group.tapeVariant}
                angle={group.tapeAngle}
                width="w-28"
                position="top-center"
              />

              <div className="mb-5">
                <h3
                  className={`text-xl font-bold mb-1 tracking-tight ${
                    group.isDark ? "text-white" : "text-stone-900"
                  }`}
                >
                  {group.category}
                </h3>
                <p
                  className={`text-xs ${
                    group.isDark ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  {group.description}
                </p>
              </div>

              {/* Skill Stamp Badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-default shadow-2xs hover:scale-105 ${
                      group.isDark
                        ? "bg-stone-800/90 border border-stone-700/80 text-stone-200 hover:border-emerald-500/50"
                        : "bg-stone-50 border border-stone-200/90 text-stone-800 hover:border-emerald-500/50 hover:bg-white"
                    }`}
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PaperSkills;

