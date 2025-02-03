import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://github.com/johndoe/ecommerce-platform",
    },
    {
      title: "Task Management App",
      description: "A React Native mobile app for managing tasks and projects.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://github.com/johndoe/task-management-app",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard using OpenWeatherMap API and Vue.js.",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://github.com/johndoe/weather-dashboard",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 mt-8 bg-background dark:bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-text dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <div
                  //src={project.image || "/placeholder.svg"}
                  //alt={project.title}
                  className="w-full h-48 object-cover bg-gray-200 dark:bg-gray-700"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-green-600 dark:bg-green-500 bg-opacity-90 flex items-center justify-center transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="text-white text-lg font-semibold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">
                  {project.title}
                </h3>
                <p className="text-text-light dark:text-gray-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-green-600 dark:text-green-400 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
