import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Triple A Catering",
      description: (
        <>
          I took a local Nigerian catering business from offline to Rank #1 on
          Google. I focused heavily on{" "}
          <span className="text-green-600 font-semibold">Local SEO</span> and
          great visuals to make sure when people in the area search for food,
          this is the first thing they see.
        </>
      ),
      image: "/triple-a.jpg",
      liveLink: "https://triple-a-catering.vercel.app/",
      githubLink: "https://github.com/Sandee004/Triple-A",
    },
    {
      title: "DCraftHouse",
      description: (
        <>
          A shopping app built for people who hate forced sign-ups. I made it so
          you can browse, add to cart, and checkout as a guest. It only asks for
          details when you're actually paying via{" "}
          <span className="text-green-600 font-semibold">Paystack</span>. Simple
          and fast.
        </>
      ),
      image: "/dcrafthouse.jpg",
      liveLink: "https://github.com/Sandee004/DCraft-UserView",
      githubLink: "https://github.com/Sandee004/DCraft-UserView",
    },
    {
      title: "NYSC Watch",
      description: (
        <>
          I got tired of refreshing crashing registration portals, so I built a
          bot to do it for me. It monitors the site using{" "}
          <span className="text-green-600 font-semibold">cron jobs</span> and
          opens it automatically the second it comes back online. It helps you
          beat the rush.
        </>
      ),
      image: "/watching.jpg",
      liveLink: "https://github.com/Sandee004/SiteWatch",
      githubLink: "https://github.com/Sandee004/SiteWatch",
    },
    {
      title: "KidsFlix",
      description: (
        <>
          A movie site designed specifically for kids. It uses the{" "}
          <span className="text-green-600 font-semibold">IMDB API</span> to
          filter content, so parents can feel safe knowing their children won't
          stumble upon anything inappropriate.
        </>
      ),
      image: "/kidsflix.jpg",
      liveLink: "https://kidsflix-frontend.onrender.com/",
      githubLink: "https://github.com/Sandee004/KidsFlix-Frontend",
    },
    {
      title: "AgroFind",
      description: (
        <>
          An app that helps farmers identify plant diseases just by taking a
          picture. It uses{" "}
          <span className="text-green-600 font-semibold">Gemini AI</span> to
          analyze the photo and tell the farmer exactly what is wrong and how to
          fix it.
        </>
      ),
      image: "/agrofind.jpg",
      liveLink: "https://agrofind.onrender.com/",
      githubLink: "https://github.com/Sandee004/AgroFind",
    },
    {
      title: "SyncNote",
      description: (
        <>
          My take on a modern note-taking app. I wanted to learn how to make
          things <i>really</i> fast, so I connected a React frontend to a{" "}
          <span className="text-green-600 font-semibold">FastAPI</span> backend.
          It syncs instantly and handles data efficiently.
        </>
      ),
      image: "/notes.jpg",
      liveLink: "https://syncnotes.onrender.com",
      githubLink: "https://github.com/Sandee004/Syncnotes",
    },

    {
      title: "Iyare Motors",
      description: (
        <>
          I built this to move a transport company from pen-and-paper to
          digital. It allows them to handle ticket bookings and reservations
          online, reducing mistakes and making their operations smoother.
        </>
      ),
      image: "/ticket.jpg",
      liveLink: "https://iyare.onrender.com",
      githubLink: "https://github.com/Sandee004/Iyare/",
    },
    {
      title: "Robotaxi",
      description: (
        <>
          A landing page for a new crypto project. It shows live stats, the
          contract address, and links directly to exchanges like Uniswap so
          users can start trading the{" "}
          <span className="text-green-600 font-semibold">Robotaxi token</span>{" "}
          easily.
        </>
      ),
      image: "/robotaxi.jpg",
      liveLink: "https://www.robotaxioneth.xyz/",
      githubLink: "https://github.com/Sandee004/RoboTaxi",
    },
    {
      title: "CreatorMail",
      description: (
        <>
          Sending crypto to long wallet addresses is scary and prone to errors.
          This tool lets you send coins using just an email address instead. It
          handles the complex{" "}
          <span className="text-green-600 font-semibold">Web3</span> logic in
          the background.
        </>
      ),
      image: "/creatormail.jpg",
      liveLink: "https://creatormail-0nnc.onrender.com",
      githubLink: "https://github.com/Sandee004/CreatorMail",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 mt-8 bg-background dark:bg-gray-900 shadow-sm"
    >
      <div className="container mx-auto px-4">
        {/* --- HEADER --- */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-48 shrink-0">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 bg-gray-100"
                />

                {/* Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-green-900/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:text-green-700 transition-colors mt-auto"
                >
                  View Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
