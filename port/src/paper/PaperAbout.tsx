import { ArrowUpRight, FileText, Server, Smartphone, Terminal, ShieldCheck, Activity } from "lucide-react";
import { Tape } from "./Tape";
import { StickyNote } from "./StickyNote";
import { Sparkle, CursorChip } from "./Doodles";

export function PaperAbout() {
  const highlightBadges = [
    { label: "Backend & Systems", icon: Server },
    { label: "Mobile Platforms", icon: Smartphone },
    { label: "Developer Tooling", icon: Terminal },
  ];

  return (
    <section
      id="about"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-stone-200/90 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Collaborator Cursor Chip - Floating top left (Image 1 style) */}
        <div className="hidden lg:block absolute top-28 left-12 z-20">
          <CursorChip name="Sandee" color="emerald" role="engineer" rotate={-4} />
        </div>

        {/* Collaborator Cursor Chip - Floating top right (Image 1 style) */}
        <div className="hidden lg:block absolute top-32 right-16 z-20">
          <CursorChip name="Visitor" color="purple" role="browsing" rotate={3} />
        </div>

        {/* --- Top Hero Header (Centered Image 1 style) --- */}
        <div className="max-w-4xl mx-auto text-center relative mb-14 md:mb-20">
          {/* Floating Sticky Note 1 - Top Right (Image 1 "less, but better" style) */}
          <div className="hidden md:block absolute -top-8 -right-8 lg:-right-16 z-20">
            <StickyNote
              color="pink"
              rotation={2.5}
              tapeVariant="pink"
              tapeAngle={-1.5}
              tapeWidth="w-20"
              className="text-center shadow-md py-3 px-4"
            >
              <span className="text-base text-rose-900 font-bold block">
                less code, more impact ✦
              </span>
            </StickyNote>
          </div>

          {/* Floating Sticky Note 2 - Mid Left (Image 1 "strategy before pretty" style) */}
          <div className="hidden md:block absolute top-28 -left-8 lg:-left-20 z-20">
            <StickyNote
              color="yellow"
              rotation={-3}
              tapeVariant="yellow"
              tapeAngle={2}
              tapeWidth="w-20"
              className="text-center shadow-md py-3 px-4"
            >
              <span className="text-base text-amber-950 font-bold block">
                database to deployment 🚀
              </span>
            </StickyNote>
          </div>

          {/* Floating Profile Badge Pill (Image 1 style) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs mb-6 hover:shadow-md transition-all">
            <img
              src="/me3.png"
              alt="Sandra Oyarekhua"
              className="w-6 h-6 rounded-full object-cover border border-emerald-500/40"
            />
            <span className="text-xs font-semibold text-stone-800">
              Sandra Oyarekhua <span className="text-stone-400">✦</span> Fullstack & Mobile Engineer
            </span>
          </div>

          {/* Main Headline (Clean bold sans + handwritten marker accent in deep blue) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.08] mb-6">
            From abstract ideas,{" "}
            <span className="font-hand text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-600 block sm:inline-block sm:ml-2 -rotate-1 relative">
              to tangible solutions.
              {/* Subtle hand-drawn marker curve under the word */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-blue-300/80 -z-10"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C50 3 150 2 198 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Bio Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            I like building software that holds up once real people start
            depending on it. Database to deployment, nothing handed off halfway.
            Websites first, then mobile apps, now infrastructure and cloud.
          </p>

          {/* Quick Action Buttons & Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-stone-900 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://drive.google.com/file/d/1MA_GK7ZR6Jlk1761X8Fx-Z7F-gTWbW3S/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white border border-stone-200 text-stone-800 text-xs sm:text-sm font-semibold hover:bg-stone-50 hover:border-stone-300 transition-all shadow-xs flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>

          {/* Highlight Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {highlightBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100/90 border border-stone-200/80 text-stone-700 text-xs font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Two-Column Layout: Photo Snapshot & Desk Status Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Tilted Photo with Polaroid Border & Sparkles (Image 2 style) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Sparkle Doodles floating around the photo */}
              <div className="absolute -top-6 -left-6 z-30">
                <Sparkle size={28} color="#eab308" rotate={12} />
              </div>
              <div className="absolute -top-3 right-6 z-30">
                <Sparkle size={20} color="#ec4899" rotate={-20} />
              </div>
              <div className="absolute bottom-10 -left-6 z-30">
                <Sparkle size={22} color="#10b981" rotate={15} />
              </div>
              <div className="absolute -bottom-4 right-10 z-30">
                <Sparkle size={26} color="#3b82f6" rotate={-10} />
              </div>

              {/* Taped Photo Card */}
              <div
                style={{ transform: "rotate(-1.8deg)" }}
                className="relative bg-white p-3 pb-5 rounded-xl border border-stone-200/90 paper-shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-[1.01] desk-tilt"
              >
                {/* Washi Tape at Top Left */}
                <Tape
                  variant="mint"
                  width="w-24"
                  angle={-5}
                  position="top-left"
                />

                {/* Washi Tape at Top Right */}
                <Tape
                  variant="yellow"
                  width="w-24"
                  angle={4}
                  position="top-right"
                />

                {/* Photo Image Frame */}
                <div className="relative aspect-4/5 w-full rounded-lg overflow-hidden bg-stone-100 border border-stone-200/80">
                  <img
                    src="/me3.png"
                    alt="Sandra Oyarekhua - Fullstack & Mobile Engineer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Status Indicator inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-stone-900/80 backdrop-blur-md text-white flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold text-emerald-400 font-mono">
                        Available for contract roles
                      </p>
                      <p className="text-[11px] text-stone-300">
                        Lagos, Nigeria (Remote / Global)
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>

                {/* Handwritten Caption at Polaroid Bottom */}
                <div className="mt-3 px-1 flex items-center justify-between text-stone-700">
                  <span className="font-hand text-xl font-bold text-stone-800">
                    Sandra Oyarekhua
                  </span>
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                    Fullstack & Mobile
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Desk Index Cards (Image 1 style with one dark card for contrast) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Desk Card 1: Core Systems (White card with yellow tape) */}
            <div
              style={{ transform: "rotate(1deg)" }}
              className="relative p-6 rounded-2xl bg-white border border-stone-200/90 paper-shadow hover-wobble desk-tilt flex flex-col justify-between"
            >
              <Tape variant="yellow" width="w-24" angle={-1.5} position="top-center" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Production Focus
                  </span>
                  <Activity className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  High-Concurrency APIs
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Engineering backend services with FastAPI, PostgreSQL, and Redis
                  tested for high throughput, idempotency, and sub-15ms response times.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] font-mono text-stone-500">
                <span className="px-2 py-0.5 rounded-md bg-stone-100">FastAPI</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100">Redis</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100">PostgreSQL</span>
              </div>
            </div>

            {/* Desk Card 2: DARK CONTRAST CARD (Image 1 style) */}
            <div
              style={{ transform: "rotate(-1.2deg)" }}
              className="relative p-6 rounded-2xl bg-stone-900 text-white border border-stone-800 paper-shadow-lifted hover-wobble desk-tilt flex flex-col justify-between"
            >
              <Tape variant="charcoal" width="w-24" angle={2} position="top-center" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current Project
                  </span>
                  <Server className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  5G Core & Observability
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  Open5GS virtual network deployment with simulated devices,
                  Grafana, Prometheus, and sub-12ms event streaming via Kafka.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800 flex items-center gap-2 text-[11px] font-mono text-stone-400">
                <span className="px-2 py-0.5 rounded-md bg-stone-800 text-emerald-300">Open5GS</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-800 text-stone-300">Kafka</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-800 text-stone-300">Grafana</span>
              </div>
            </div>

            {/* Desk Card 3: Mobile Apps (White card with mint tape) */}
            <div
              style={{ transform: "rotate(-0.8deg)" }}
              className="relative p-6 rounded-2xl bg-white border border-stone-200/90 paper-shadow hover-wobble desk-tilt flex flex-col justify-between"
            >
              <Tape variant="mint" width="w-24" angle={-1} position="top-center" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Mobile & Native
                  </span>
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  React Native at Scale
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Shipped cross-platform mobile apps for iOS and Android on the
                  stores, engineered to scale with live map tracking.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] font-mono text-stone-500">
                <span className="px-2 py-0.5 rounded-md bg-stone-100">React Native</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100">Expo</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100">Paystack</span>
              </div>
            </div>

            {/* Desk Card 4: Payments & Reliability (White card with clear tape) */}
            <div
              style={{ transform: "rotate(1.2deg)" }}
              className="relative p-6 rounded-2xl bg-white border border-stone-200/90 paper-shadow hover-wobble desk-tilt flex flex-col justify-between"
            >
              <Tape variant="pink" width="w-24" angle={1.5} position="top-center" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                    Zero-Failure Design
                  </span>
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Idempotent Architecture
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Multi-currency payment pipelines handling money in volume
                  with duplicate protection, failure recovery, and audited ledgering.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] font-mono text-stone-500">
                <span className="px-2 py-0.5 rounded-md bg-stone-100">Idempotency</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100">Webhooks</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100">Ledger</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaperAbout;
