import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "KidsFlix",
      description: (
        <>
          A web app built with{" "}
          <span className="text-green-500">
            React, Flask, SqlAlchemy and IMDB API
          </span>{" "}
          for recommending movies specifically safe for kids. An alternative to
          Netflix but for kids. Users can browse movies and are only prompted to
          sign up when they wish to add movies to favorites to revisit later.
        </>
      ),
      image: "/src/assets/kidsflix.jpg",
      liveLink: "https://kidsflix-frontend.onrender.com/",
      githubLink: "https://github.com/Sandee004/KidsFlix-Frontend",
    },
    {
      title: "AgroFind",
      description: (
        <>
          <span className="font-semibold">AgroFind</span> is an AI-powered
          chatbot designed to help identify plants and detect visible diseases
          or pest infestations. Built with{" "}
          <span className="text-green-500">Gemini AI</span>, it processes
          user-uploaded images (JPG, JPEG, PNG) and provides insights based on
          noticeable plant features.
        </>
      ),
      image: "/src/assets/agrofind.jpg",
      liveLink: "https://agrofind.onrender.com/",
      githubLink: "https://github.com/Sandee004/AgroFind",
    },
    {
      title: "Voterz",
      description: (
        <>
          <span className="font-semibold">Voterz</span> is an online voting
          platform for organizing intra-business elections, such as school or
          company elections. It streamlines the voting process and automates
          result curation, making elections more efficient and secure.
        </>
      ),
      image: "/src/assets/voterz.jpg",
      liveLink: "https://votingapp-frontend.onrender.com/",
      githubLink: "https://github.com/Sandee004/Voting-App",
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover bg-gray-200 dark:bg-gray-700"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-green-600 dark:bg-green-500 bg-opacity-90 flex flex-col items-center justify-center transition-opacity duration-300 gap-2">
                    {/* GitHub Link */}
                    <a
                      href={project.githubLink}
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
                  href={project.liveLink}
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
