import { FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiFlask, SiMongodb } from "react-icons/si";

export function Skills() {
  const skills = [
    { name: "JavaScript", level: 75, icon: <FaJs /> },
    { name: "TypeScript", level: 70, icon: <SiTypescript /> },
    { name: "React", level: 85, icon: <FaReact /> },
    { name: "Flask", level: 88, icon: <SiFlask /> },
    { name: "MongoDB", level: 70, icon: <SiMongodb /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 pt-[30px] bg-white dark:bg-background dark:bg-gray-900"
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
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
