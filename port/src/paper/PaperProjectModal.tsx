import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Github, Smartphone, X } from "lucide-react";
import type { Project } from "../components/ProjectModal";
import { Tape } from "./Tape";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-600" />
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function PaperProjectModal({ project, onClose }: ProjectModalProps) {
  const { caseStudy } = project;
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const pressStartedOnBackdrop = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const frame = requestAnimationFrame(() => setVisible(true));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable =
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  const primaryLinks = project.storeLinks
    ? project.storeLinks.map((store) => ({
        label: store.label,
        url: store.url,
        icon: Smartphone,
      }))
    : project.liveLink
      ? [{ label: "View project", url: project.liveLink, icon: ExternalLink }]
      : [];

  const showSource =
    project.githubLink.includes("github.com") &&
    project.githubLink !== project.liveLink;

  const hasFooter = primaryLinks.length > 0 || showSource;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center bg-stone-900/60 backdrop-blur-xs transition-opacity duration-200 motion-reduce:transition-none sm:items-center sm:p-6 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onMouseDown={(event) => {
        pressStartedOnBackdrop.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        if (
          pressStartedOnBackdrop.current &&
          event.target === event.currentTarget
        ) {
          onClose();
        }
        pressStartedOnBackdrop.current = false;
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl sm:rounded-2xl border border-stone-300/90 bg-[#fbfbfa] paper-desk-bg shadow-2xl transition duration-200 motion-reduce:transition-none sm:max-h-[88vh] sm:max-w-3xl ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {/* Top Tape Strip */}
        <Tape variant="yellow" angle={-1} width="w-36" position="top-center" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 bg-white/80 backdrop-blur-sm px-6 py-5">
          <div className="min-w-0">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              {project.category} ✦ Engineering Case Study
            </span>
            <h3
              id={titleId}
              className="mt-1 text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="-mr-2 -mt-1 rounded-full p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-8 overflow-y-auto px-6 py-6 text-stone-800">
          {/* Overview Callout Card */}
          <div className="p-5 rounded-xl bg-white border border-stone-200/90 paper-shadow-sm">
            <p className="text-sm sm:text-base leading-relaxed text-stone-700">
              {caseStudy.overview}
            </p>
          </div>

          <Section title="Why it exists">
            <p className="text-sm leading-relaxed text-stone-600 bg-white/50 p-4 rounded-xl border border-stone-200/70">
              {caseStudy.why}
            </p>
          </Section>

          <Section title={caseStudy.flowTitle}>
            <ol className="space-y-4">
              {caseStudy.flow.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-stone-200/80 paper-shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-800 font-mono">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-stone-600">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          {caseStudy.diagram && (
            <Section title="Architecture Blueprint">
              <pre
                tabIndex={0}
                aria-label="Architecture diagram"
                className="overflow-x-auto rounded-xl bg-stone-950 p-5 font-mono text-xs leading-relaxed text-emerald-300 border border-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:text-[13px] paper-shadow"
              >
                <code>{caseStudy.diagram}</code>
              </pre>
            </Section>
          )}

          <Section title="Engineering decisions">
            <dl className="divide-y divide-stone-200/90 rounded-xl bg-white p-5 border border-stone-200/90 paper-shadow-sm">
              {caseStudy.decisions.map((decision) => (
                <div key={decision.title} className="py-4 first:pt-0 last:pb-0">
                  <dt className="font-bold text-sm text-stone-900">
                    {decision.title}
                  </dt>
                  <dd className="mt-1 text-xs sm:text-sm leading-relaxed text-stone-600">
                    {decision.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>
        </div>

        {/* Modal Footer */}
        {hasFooter && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-stone-200 bg-white/90 px-6 py-4">
            {primaryLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <LinkIcon size={14} className="text-emerald-400" />
                  {link.label}
                  <ExternalLink size={13} />
                </a>
              );
            })}
            {showSource && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 text-xs font-semibold transition-colors"
              >
                <Github size={14} className="text-stone-700" />
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

