import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "DCraftHouse",
      description:
        "A modern eCommerce app for crafters. Smart cart system, profile dashboard with order history, and secure payment integration.",
      tech: ["React", "Flask", "PostgreSQL", "Stripe"],
      gradient: "from-orange-500 to-red-500",
      icon: "🛍️",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "KidsFlix",
      description:
        "A kid-safe streaming web app with parental controls. ReactJS, Flask, SQLAlchemy, IMDB API integration for movie recommendations.",
      tech: ["React", "Flask", "SQLAlchemy", "IMDB API"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🎬",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "AgroFind",
      description:
        "AI-powered chatbot for plant diseases detection. Processes uploaded images and provides insights on plant health.",
      tech: ["React", "AI/ML", "Image Processing"],
      gradient: "from-green-500 to-cyan-500",
      icon: "🌱",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "NYSC Watch",
      description:
        "A resilience tool designed to track unstable websites. It automates the 'waiting game' by monitoring specific endpoints and launching the site upon recovery.",
      tech: ["Flask", "Automation", "Cron"],
      gradient: "from-red-600 to-rose-600", // Urgency/Alert color
      icon: "⚡",
      liveLink: "https://creatormail-0nnc.onrender.com",
      githubLink: "https://github.com/Sandee004/SiteWatch",
    },
    {
      title: "Triple A Catering",
      description:
        "From offline to Rank #1. A Local SEO prioritization project that channeled traffic directly to the business by dominating local search results.",
      tech: ["SEO", "Web Architecture", "Analytics"],
      gradient: "from-yellow-500 to-amber-600", // Gold/Food color
      icon: "🍽️",
      liveLink: "https://creatormail-0nnc.onrender.com",
      githubLink: "https://github.com/Sandee004/SiteWatch",
    },
    {
      title: "SyncNote",
      description:
        "A high-performance app exploring modern web architecture. Combines the raw speed of FastAPI with a reactive frontend and custom process orchestration.",
      tech: ["FastAPI", "React", "AI (Coming Soon)"], // Added the note here
      gradient: "from-blue-600 to-indigo-600", // Tech/Speed color
      icon: "📝",
      liveLink: "https://creatormail-0nnc.onrender.com",
      githubLink: "https://github.com/Sandee004/SiteWatch",
    },
  ];

  return (
    <section
      id="projects"
      className="px-4 py-20 md:py-32 md:px-8 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative h-full">
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              />

              {/* Card Content */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl p-2 bg-slate-800 rounded-lg border border-slate-700/50">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        t === "AI (Coming Soon)"
                          ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                          : "bg-slate-700/50 text-cyan-300 border-slate-600"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white font-medium hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
