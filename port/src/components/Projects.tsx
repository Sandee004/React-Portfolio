import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "DCraftHouse",
      description: (
        <>
          <span className="text-green-500 font-semibold">DCraftHouse</span> is a
          modern eCommerce app built for effortless shopping. Users can browse
          products freely without signing up, view rich product details, and
          only sign in when they're ready to buy. It features a smart cart
          system, profile dashboard with order history, and secure payment
          integration via Paystack — making first-time purchases fast and
          smooth. Clean design, seamless UX, and built with real-world users in
          mind.
        </>
      ),
      image: "/dcrafthouse.jpg",
      liveLink: "https://github.com/Sandee004/DCraft-UserView",
      githubLink: "https://github.com/Sandee004/DCraft-UserView",
    },
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
      image: "/kidsflix.jpg",
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
      image: "/agrofind.jpg",
      liveLink: "https://agrofind.onrender.com/",
      githubLink: "https://github.com/Sandee004/AgroFind",
    },
    {
      title: "Altfeed",
      description: (
        <>
          <span className="font-semibold">Altfeed</span> is a web app built for
          the FMN Prize For Innovation hackathon. The web app is created to help
          farmers discover non-conventional animal feeds. It offers sustainable
          and cost-effective alternatives to traditional feeds, empowering
          farmers to optimize nutrition while reducing costs.
        </>
      ),
      image: "/altfeed.jpg",
      liveLink: "https://altfeed.onrender.com",
      githubLink: "https://github.com/Sandee004/Altfeed",
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
      image: "/voterz.jpg",
      liveLink: "https://votingapp-frontend.onrender.com/",
      githubLink: "https://github.com/Sandee004/Voting-App",
    },
    {
      title: "Iyare Motors Web App",
      description: (
        <>
          A web app built with{" "}
          <span className="text-green-500">React, Flask and SqlAlchemy</span>{" "}
          for Iyare Motors to handle online ticket purchases and reservations.
          This helps the company to manage their bookings and customers more
          efficiently.
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
          <span className="font-semibold">Robotaxi</span> is a website built to
          introduce people to a newly lauched coin - Robotaxi. It contains its
          Contract Address, approximated value in circulation, steps to getting
          and trading it as well as link to the etherscan, dexscreener and
          uniswap of the coin.
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
          This is the backend of a hackathon project.{" "}
          <span className="font-semibold text-green-500">CreatorMail</span> is a software that
          handles the creation of crypto addresses using the user's email. It
          also handles and supports the tranfetr of coins from one wallet to
          another using a person's username. Wallets creator on other platforms
          can also be imported and used seamlessly on Creatormail.
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
