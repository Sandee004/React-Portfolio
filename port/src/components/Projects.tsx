import { useState } from "react";
import {
  ExternalLink,
  Github,
  Terminal,
  ShieldAlert,
  Cpu,
  ShoppingBag,
  Radio,
  Sparkles,
  Smartphone,
} from "lucide-react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Pick",
      category: "Ride-hailing & Delivery Platform",
      description:
        "End-to-end ride and delivery ecosystem built for high concurrency. Features Paystack payout pipelines with idempotency protection, fare calculations, and multi-mode mobile tracking.",
      tech: ["React Native (Expo)", "Supabase", "Paystack", "PostgreSQL"],
      image: "/pick.jpeg",
      githubLink: "https://pick.ng/",
      icon: Radio,
      storeLinks: [
        {
          label: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.picklimited.app",
        },
        {
          label: "App Store",
          url: "https://apps.apple.com/app/pick-request-a-delivery/id6803471737",
        },
      ],
    },
    {
      title: "DCraftHouse",
      category: "E-Commerce & Mobile Admin",
      description:
        "Full digital footprint comprising a guest checkout web storefront, FastAPI admin panel with Cloudinary asset pipeline, companion mobile app, and instant optimistic cart updates.",
      tech: ["FastAPI", "React Native", "Cloudinary", "Paystack"],
      image: "/dcrafthouse.jpg",
      liveLink: "https://github.com/Sandee004/DCraft-UserView",
      githubLink: "https://github.com/Sandee004/DCraft-UserView",
      icon: ShoppingBag,
    },
    {
      title: "SiteWatch",
      category: "System Monitoring & Resilience",
      description:
        "Automated availability monitor tracking 50+ URLs concurrently. Features intelligent polling, auto-browser access triggers on recovery, and sub-second SQLite history queries.",
      tech: ["React", "Flask", "SQLite", "TailwindCSS"],
      image: "/watching.jpg",
      liveLink: "https://github.com/Sandee004/SiteWatch",
      githubLink: "https://github.com/Sandee004/SiteWatch",
      icon: Cpu,
    },
    {
      title: "Scholarship Aide",
      category: "AI & Context Isolation",
      description:
        "AI-assisted application assistant featuring per-section document reference isolation, zero cross-thread context contamination, and multi-model failover switching via Censori.",
      tech: ["Next.js", "Python", "Censori AI", "TailwindCSS"],
      image: "/notes.jpg",
      liveLink: "https://github.com/Sandee004",
      githubLink: "https://github.com/Sandee004",
      icon: Sparkles,
    },
    {
      title: "Kill-Switch",
      category: "Infrastructure & Resilience Testing",
      description:
        "Configurable fault-injection proxy layered between frontend and backend systems. Intercepts and simulates partial outages (~60% request failures) to validate offline-handling resilience.",
      tech: ["Python", "Networking", "Proxy Protocols"],
      image: "/kill-switch.jpg",
      liveLink: "https://github.com/Sandee004/Kill-Switch",
      githubLink: "https://github.com/Sandee004/Kill-Switch",
      icon: ShieldAlert,
    },

    {
      title: "Ignite",
      category: "Developer Tooling & Automation",
      description:
        "Cross-platform CLI automation tool detecting OS environments to install development stacks programmatically, slashing workstation onboarding time from 4 hours to under 10 minutes.",
      tech: ["Python", "CLI Tooling", "Redis", "Shell Scripting"],
      image: "/ignite.jpg",
      liveLink: "https://github.com/Sandee004/Ignite",
      githubLink: "https://github.com/Sandee004/Ignite",
      icon: Terminal,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50/50 dark:bg-gray-900 border-b border-gray-200/80 dark:border-gray-800 shadow-sm"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between
                  bg-white/70 dark:bg-gray-800/40 
                  backdrop-blur-md 
                  border border-gray-200/80 dark:border-gray-700/50 
                  rounded-2xl overflow-hidden 
                  transition-all duration-300 
                  hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 hover:-translate-y-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div>
                  {/* Image Preview with Glass Overlay */}
                  <div className="relative overflow-hidden h-44 shrink-0 bg-gray-100 dark:bg-gray-900">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div
                      className={`absolute inset-0 bg-gray-950/70 backdrop-blur-xs flex items-center justify-center gap-3 transition-opacity duration-300 ${
                        hoveredIndex === index
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-900/80 border border-white/20 text-white rounded-lg text-xs font-semibold hover:border-emerald-500 transition-colors backdrop-blur-md"
                      >
                        <Github size={15} />
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {project.category}
                      </span>
                      <Icon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Badges & Action */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-5 border-t border-gray-200/60 dark:border-gray-700/40 pt-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Action Links */}
                  <div className="flex items-center gap-4">
                    {project.storeLinks ? (
                      project.storeLinks.map((store, sIdx) => (
                        <a
                          key={sIdx}
                          href={store.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                        >
                          <Smartphone size={13} className="text-emerald-500" />
                          {store.label}
                          <ExternalLink size={13} />
                        </a>
                      ))
                    ) : project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                      >
                        View Project <ExternalLink size={14} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
