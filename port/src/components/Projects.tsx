import { useState } from "react";
import { ExternalLink, Github, Info, Smartphone } from "lucide-react";
import ProjectModal, { type Project } from "./ProjectModal";
import type { MouseEvent as ReactMouseEvent } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleCardClick = (
    event: ReactMouseEvent<HTMLDivElement>,
    project: Project,
  ) => {
    if ((event.target as HTMLElement).closest("a, button")) return;
    if (window.getSelection()?.toString()) return;
    setActiveProject(project);
  };

  const projects: Project[] = [
    {
      title: "Pick",
      category: "Delivery Platform",
      description:
        "A delivery app live on the Play Store and App Store. Customers see the price upfront, track their rider on a map, and pay by card, transfer or cash. Rider payouts are automated, with a safeguard against paying twice.",
      tech: ["React Native (Expo)", "Supabase", "Paystack", "PostgreSQL"],
      image: "/pick.jpeg",
      githubLink: "https://pick.ng/",
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
      caseStudy: {
        overview:
          "Pick is a delivery app for Nigeria, live on the Play Store and the App Store. A customer requests a delivery, sees the price up front, pays by card, bank transfer or cash, and follows the rider on a live map. Riders are identity-checked before they can take jobs. I built it from scratch.",
        why: "Sending a package across town usually meant haggling over price, repeated phone calls, and handing goods to someone you could not vouch for. Pick puts the price, the rider and the progress in front of everyone involved.",
        flowTitle: "What happens when someone sends a package",
        flow: [
          {
            title: "Request and price",
            detail:
              "The customer enters pickup and drop-off and sees the full price before confirming anything.",
          },
          {
            title: "Pay",
            detail:
              "Card and bank transfer payments run through Paystack. Cash on delivery skips online payment and settles with the rider.",
          },
          {
            title: "Match and track",
            detail:
              "A verified rider accepts the job. The customer follows the rider live on a map and can share a tracking link with the recipient.",
          },
          {
            title: "Prove delivery",
            detail:
              "The rider completes the drop with photo proof, and the recipient confirms with a delivery PIN.",
          },
          {
            title: "Pay out the rider",
            detail:
              "Rider payouts are automated and confirmed through Paystack webhooks.",
          },
        ],
        decisions: [
          {
            title: "One guard against paying twice",
            detail:
              "Webhooks and retries can deliver the same event more than once. Before a transfer is attempted, the payout is marked as processing, so a repeated event finds it already taken and stops. A rider is paid once per job.",
          },
          {
            title: "One handler for both payment events",
            detail:
              "Incoming charges and outgoing transfers arrive as different Paystack events. A single webhook handler processes both, so money in and money out are reconciled in one place.",
          },
          {
            title: "Recovering interrupted payments",
            detail:
              "If the app is closed or killed in the middle of a bank transfer, the pending transaction is saved on the device. On the next launch a recovery prompt lets the customer pick up where they left off instead of starting over.",
          },
          {
            title: "Working within the provider’s network rules",
            detail:
              "Some Paystack calls are only accepted from a whitelisted IP address. A small proxy on a fixed-IP host forwards those requests. I also moved the project from Flutterwave to Paystack along the way.",
          },
          {
            title: "One entry point for sign-up",
            detail:
              "Sign-up and OTP verification run through a single Supabase Edge Function, so account creation has one place to validate input instead of several. Riders then go through identity checks before they can accept jobs.",
          },
          {
            title: "An admin panel to run the operation",
            detail:
              "A React and TypeScript panel on Supabase lets the team manage accounts. Creating a rider account validates the input, checks for duplicates and writes the related records in three transactional steps.",
          },
        ],
      },
    },
    {
      title: "EventDek",
      category: "Event Discovery Webapp",
      description:
        "Find events across Nigerian cities by swiping through them like cards. Save one and its pass, QR code included, stays on your phone and works even with no signal at the venue. New events are collected automatically every six hours.",
      tech: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Framer Motion",
        "Playwright",
        "Grafana",
        "Prometheus",
      ],
      image: "/ticket.png",
      liveLink: "https://eventdek.onrender.com/",
      githubLink: "https://github.com/Sandee004/Eventdek",
      caseStudy: {
        overview:
          "EventDek helps people find events in Nigerian cities by swiping through them like a deck of cards. Swipe right and the event becomes a pass in your wallet, with its QR code, venue and calendar file saved on your phone. One tap then takes you to the organizer’s own page to register.",
        why: "Events in Lagos, Abuja and other states are scattered across Lu.ma, Tix.africa, Eventbrite and social media threads. EventDek pulls them into one feed you can browse state by state.",
        flowTitle: "What happens when you swipe right",
        flow: [
          {
            title: "The swipe is recorded",
            detail:
              "The app sends the swipe to the API and the card flies off screen straight away. The endpoint is built to answer in under 15 milliseconds.",
          },
          {
            title: "The event is frozen into a pass",
            detail:
              "The API saves the swipe and copies the event’s details into a snapshot attached to your pass.",
          },
          {
            title: "The pass is cached on your device",
            detail:
              "The QR code, venue details and calendar file are stored locally, so they still work with no signal inside an event hall.",
          },
          {
            title: "You register with the organizer",
            detail:
              "The app opens the official registration page on Eventbrite, Lu.ma or Tix. Payment and checkout stay with them.",
          },
        ],
        diagram: [
          "  React PWA (Vite + Workbox)",
          "  cached passes, offline QR codes, local .ics files",
          "              │",
          "              │  REST + JWT",
          "              ▼",
          "  FastAPI (async SQLAlchemy)",
          "    ├─ GET  /events/deck     exclusion query over the shared pool",
          "    ├─ POST /events/swipe    swipe row + immutable snapshot",
          "    └─ APScheduler, every 6h  Playwright + BeautifulSoup ingest",
          "              │",
          "              ▼",
          "  PostgreSQL on Supabase",
          "    └─ pg_cron, 03:00 UTC    purge expired listings",
        ].join("\n"),
        decisions: [
          {
            title: "One shared pool, a personal deck for everyone",
            detail:
              "Events are stored once per state. Each person’s deck is built on request by excluding the events they have already swiped on, so there is no stored deck per user. A composite unique index stops rapid double taps from creating duplicate swipe rows.",
          },
          {
            title: "Passes that cannot break",
            detail:
              "Saving an event copies its display details into the user’s own record. If an organizer edits or deletes the listing, or the nightly cleanup removes it, the pass in the wallet is untouched.",
          },
          {
            title: "Discovery without scraping checkout",
            detail:
              "Checkout pages sit behind bot protection such as Cloudflare Turnstile and captchas. Rather than fight that with browser bots, EventDek sends people to the official page and keeps its own job to discovery.",
          },
          {
            title: "Offline first by design",
            detail:
              "The wallet reads from device storage first and revalidates in the background when online. Offline, it shows a notice with the last sync time. QR codes render in the browser and calendar files are generated locally, so nothing needs the network.",
          },
          {
            title: "Housekeeping that runs itself",
            detail:
              "A scheduled job inside the database purges expired listings at 03:00 UTC every night, without touching saved passes. A background worker ingests new listings every six hours, maps venues to states and skips duplicates.",
          },
          {
            title: "One container, no CORS",
            detail:
              "The React app and the API ship as a single service on Render. FastAPI serves the API and the built frontend, so the browser never makes a cross-origin request.",
          },
        ],
      },
    },
    {
      title: "DCraftHouse",
      category: "Online shop",
      description:
        "An online shop with a website, a mobile app and an admin panel for managing products. Shoppers can browse and fill a cart without an account, and only sign in at checkout.",
      tech: ["FastAPI", "React Native", "Cloudinary", "Paystack"],
      image: "/dcrafthouse.jpg",
      liveLink: "https://github.com/Sandee004/DCraft-UserView",
      githubLink: "https://github.com/Sandee004/DCraft-UserView",
      caseStudy: {
        overview:
          "DCraftHouse is a shopping app where people can browse the whole catalogue before they ever create an account. Sign-in only appears when they are ready to buy. It comes with a web storefront, a companion mobile app and an admin panel for managing the shop.",
        why: "The goal was minimal signup friction: keep the account step for the moment someone is ready to buy, not the moment they arrive.",
        flowTitle: "From browsing to a paid order",
        flow: [
          {
            title: "Browse freely",
            detail:
              "Product images, descriptions and prices are open to everyone, with no account needed.",
          },
          {
            title: "Build a cart",
            detail:
              "Add items, change quantities or remove them. The cart responds instantly.",
          },
          {
            title: "Check availability",
            detail:
              "Checkout only goes ahead if each product is still available.",
          },
          {
            title: "Sign in at the last step",
            detail:
              "New and returning customers sign up or sign in only once they choose to check out.",
          },
          {
            title: "Pay with Paystack",
            detail:
              "Payment runs through Paystack, so card details never touch the app’s own servers.",
          },
          {
            title: "Come back to it",
            detail:
              "A profile screen keeps personal details and order history in one place.",
          },
        ],
        decisions: [
          {
            title: "The account wall sits at the end",
            detail:
              "Nothing before checkout requires an account. Guests can look around, fill a cart and only meet sign-in at the moment it is actually needed.",
          },
          {
            title: "Availability is verified at checkout",
            detail:
              "A product can sell out while someone is still browsing. Checking at checkout means a customer does not pay for something that is gone.",
          },
          {
            title: "Optimistic cart updates",
            detail:
              "The cart updates on screen immediately and reconciles with the server afterwards, so adding and removing items never feels like waiting.",
          },
          {
            title: "Payments handled by Paystack",
            detail:
              "Using a hosted payment gateway keeps sensitive card handling out of the app and gives customers a payment flow they already recognise.",
          },
          {
            title: "A separate admin panel",
            detail:
              "The shop owner manages the catalogue from an admin panel, with product images handled through Cloudinary.",
          },
        ],
      },
    },
    {
      title: "Ignite",
      category: "Developer tool",
      description:
        "Sets up a new computer for coding with one click. Pick your tools and watch them install live on Mac, Windows or Linux, instead of spending hours downloading each one by hand.",
      tech: ["Python", "CLI Tooling", "Redis", "Shell Scripting"],
      image: "/ignite.jpg",
      liveLink: "https://github.com/Sandee004/Ignite",
      githubLink: "https://github.com/Sandee004/Ignite",
      caseStudy: {
        overview:
          "Ignite sets up a new development machine. You pick your tools, press one button and watch each install happen live, instead of visiting twenty websites. It detects the operating system and uses Homebrew on macOS, Winget on Windows or APT on Linux.",
        why: "I built it after getting a new MacBook and losing hours to downloads, drag-and-drop installers and Homebrew errors I did not yet understand. The tools I had seen were terminal-only scripts, so I wanted something friendly for beginners that also showed exactly what was happening.",
        flowTitle: "From click to installed",
        flow: [
          {
            title: "Choose apps",
            detail: "Pick from the grid or type any app name, such as Blender.",
          },
          {
            title: "Send the list",
            detail:
              "The frontend posts the selection to the /install endpoint.",
          },
          {
            title: "Create a job",
            detail:
              "The backend creates a job ID and saves its initial state in Redis.",
          },
          {
            title: "Install in the background",
            detail:
              "A background thread detects the OS and runs the right commands, such as brew install or winget install.",
          },
          {
            title: "Report progress",
            detail: "The frontend polls the /progress endpoint every second.",
          },
          {
            title: "Show the result",
            detail:
              "Each app’s icon turns green when it succeeds, or red with the reason when it fails.",
          },
        ],
        diagram: [
          "  React dashboard ── POST /install ──► FastAPI ── job state ──► Redis",
          "        ▲                                │                       ▲",
          "        │                                ▼                       │",
          "        └──── poll /progress ──── background thread ────────────┘",
          "                                         │",
          "                              brew  |  winget  |  apt",
        ].join("\n"),
        decisions: [
          {
            title: "Job state lives in Redis",
            detail:
              "Progress is stored in Redis rather than in the web process, so the API stays stateless and any request can read the latest status.",
          },
          {
            title: "Threads keep the interface responsive",
            detail:
              "Installs run in background threads, so the API can keep answering progress requests while packages download.",
          },
          {
            title: "Smart app resolution",
            detail:
              "The same app has different package names on different systems. Ignite resolves Chrome to google-chrome or google-chrome-stable depending on the OS, and accepts any app your package manager supports.",
          },
          {
            title: "Self-healing installs",
            detail:
              "If an app is a phantom install, with broken links left behind, Ignite detects it and tries a forced repair.",
          },
        ],
      },
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="group flex cursor-pointer flex-col justify-between
                  bg-white/70 dark:bg-gray-800/40 
                  backdrop-blur-md 
                  border border-gray-200/80 dark:border-gray-700/50 
                  rounded-2xl overflow-hidden 
                  transition-all duration-300 
                  hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 hover:-translate-y-1"
                onClick={(event) => handleCardClick(event, project)}
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
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        aria-label={`Read the case study for ${project.title}`}
                        title="Case study"
                        className="-mr-2 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-emerald-500/10 hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-500 dark:hover:text-emerald-400"
                      >
                        <Info className="w-4 h-4" />
                      </button>
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

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
