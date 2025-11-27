import { useEffect, useRef, useState } from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiFlask,
  SiTailwindcss,
  SiPython,
  SiExpo,
  SiPostgresql,
  SiFastapi,
} from "react-icons/si";

export function Skills() {
  const skills = [
    {
      name: "React",
      level: 85,
      icon: <FaReact className="text-black dark:text-white" />,
    },
    {
      name: "TypeScript",
      level: 70,
      icon: <SiTypescript className="text-black dark:text-white" />,
    },
    {
      name: "TailwindCSS",
      level: 85,
      icon: <SiTailwindcss className="text-black dark:text-white" />,
    },
    {
      name: "React Native",
      level: 72,
      icon: <FaReact className="text-black dark:text-white" />,
    },
    {
      name: "Flask",
      level: 85,
      icon: <SiFlask className="text-black dark:text-white" />,
    },
    {
      name: "MongoDB/PostgreSQL",
      level: 70,
      icon: <SiPostgresql className="text-black dark:text-white" />,
    },
    {
      name: "Python",
      level: 72,
      icon: <SiPython className="text-black dark:text-white" />,
    },
    {
      name: "Expo",
      level: 68,
      icon: <SiExpo className="text-black dark:text-white" />,
    },
    {
      name: "FastAPI",
      level: 75,
      icon: <SiFastapi className="text-black dark:text-white" />,
    },

    {
      name: "GitHub",
      level: 80,
      icon: <FaGithub className="text-black dark:text-white" />,
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 pt-[30px] md:pt-20 bg-gray-50 border-b-2 border-green-600/50 dark:bg-background dark:bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            My Technical Arsenal
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-text-light dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
                <span className="text-black dark:text-white font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
