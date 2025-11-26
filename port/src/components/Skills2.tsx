import { useEffect, useRef, useState } from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiFlask,
  SiMongodb,
  SiTailwindcss,
  SiPython,
  SiExpo,
  SiPostgresql,
  SiWeb3Dotjs,
  SiSwagger,
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
      level: 65,
      icon: <FaReact className="text-black dark:text-white" />,
    },
    {
      name: "Flask",
      level: 85,
      icon: <SiFlask className="text-black dark:text-white" />,
    },
    {
      name: "MongoDB",
      level: 70,
      icon: <SiMongodb className="text-black dark:text-white" />,
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
      name: "PostgreSQL",
      level: 68,
      icon: <SiPostgresql className="text-black dark:text-white" />,
    },
    {
      name: "Swagger",
      level: 75,
      icon: <SiSwagger className="text-black dark:text-white" />,
    },

    {
      name: "GitHub",
      level: 80,
      icon: <FaGithub className="text-black dark:text-white" />,
    },
    {
      name: "Web3",
      level: 50,
      icon: <SiWeb3Dotjs className="text-black dark:text-white" />,
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
      className="py-20 pt-[30px] bg-white dark:bg-background dark:bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-text dark:text-white">
          Skills
        </h2>
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
