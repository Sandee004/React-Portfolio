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
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages & Core",
      description: "Primary languages used for fullstack execution",
      skills: [
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
      ],
    },
    {
      category: "Frontend & Mobile",
      description:
        "UI/UX, state management, and native cross-platform build systems",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        { name: "React Native", icon: <FaReact className="text-sky-500" /> },
        {
          name: "Expo",
          icon: <SiExpo className="text-black dark:text-white" />,
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-teal-400" />,
        },
      ],
    },
    {
      category: "Backend & Systems",
      description: "API architecture, microservices, and micro-frameworks",
      skills: [
        { name: "FastAPI", icon: <SiFastapi className="text-emerald-500" /> },
        {
          name: "Flask",
          icon: <SiFlask className="text-black dark:text-white" />,
        },
        {
          name: "REST APIs",
          icon: <span className="text-xs font-bold text-green-500">API</span>,
        },
      ],
    },
    {
      category: "Data, Infra & Observability",
      description:
        "Databases, containerization, messaging, and real-time monitoring",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-400" />,
        },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        {
          name: "Kafka",
          icon: <SiApachekafka className="text-black dark:text-white" />,
        },
        { name: "Grafana", icon: <SiGrafana className="text-orange-500" /> },
        {
          name: "Prometheus",
          icon: <SiPrometheus className="text-orange-600" />,
        },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 pt-[30px] md:pt-20 bg-gray-50 border-b-2 border-green-600/50 dark:bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Technical Arsenal
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {group.category}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-100 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium hover:border-green-500 dark:hover:border-green-500 transition-colors cursor-default"
                  >
                    <span className="text-base">{skill.icon}</span>
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
