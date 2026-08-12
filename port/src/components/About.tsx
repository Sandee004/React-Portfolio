import {
  FileText,
  ArrowUpRight,
  Terminal,
  Server,
  Smartphone,
} from "lucide-react";

export function About() {
  const highlightBadges = [
    { label: "Backend & Systems", icon: Server },
    { label: "Mobile Platforms", icon: Smartphone },
    { label: "Developer Tooling", icon: Terminal },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-0 border-b border-gray-200/80 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 lg:min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* --- Text Content (Left) --- */}
          <div className="w-full md:w-1/2">
            {/* Status Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for High-Impact Roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight">
              Sandra Oyarekhua
            </h1>

            <h2 className="text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 mb-6 font-semibold">
              Fullstack & Mobile Engineer
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
              I architect products from database design to production deployment
              and real-time observability. Experienced in orchestrating
              microservices, engineering high-concurrency APIs, and delivering
              cross-platform mobile apps with React Native, Next.js, FastAPI,
              Docker, and PostgreSQL.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
              Whether provisioning virtual network infrastructures, implementing
              idempotency-protected payment streams, or optimizing offline-first
              performance, I focus on building resilient systems that hold up
              reliably in production.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {highlightBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-gray-800/40 border border-gray-200/80 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1MA_GK7ZR6Jlk1761X8Fx-Z7F-gTWbW3S/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gray-900 dark:bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* --- Image Section (Right) --- */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Subtle Ambient Backdrop Glow (Replaces float animation) */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur-xl opacity-30 dark:opacity-20 group-hover:opacity-60 transition duration-700" />

              {/* Image Glassmorphism Frame */}
              <div className="relative w-72 h-88 sm:w-80 sm:h-96 md:w-[380px] md:h-[480px] rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700/60 bg-gray-900 shadow-2xl">
                <img
                  src="/me3.png"
                  alt="Sandra Oyarekhua - Fullstack & Mobile Engineer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Glass Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Bottom Corner Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-gray-950/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-emerald-400">
                      Engineering Focus
                    </p>
                    <p className="text-xs text-gray-300">
                      Distributed Systems & Mobile
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
