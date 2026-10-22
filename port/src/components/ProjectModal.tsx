import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Github, Smartphone, X } from "lucide-react";

export interface CaseStudy {
  overview: string;
  why: string;
  flowTitle: string;
  flow: { title: string; detail: string }[];
  diagram?: string;
  decisions: { title: string; detail: string }[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  githubLink: string;
  liveLink?: string;
  storeLinks?: { label: string; url: string }[];
  caseStudy: CaseStudy;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const linkClass =
  "inline-flex items-center gap-1.5 rounded text-sm font-semibold text-gray-900 transition-colors hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-white dark:hover:text-emerald-400";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h4 className="mb-3 text-base font-semibold text-gray-900 dark:text-white">
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { caseStudy } = project;
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const pressStartedOnBackdrop = useRef(false);
  const [visible, setVisible] = useState(false);

  // Keep the latest onClose without re-running the setup effect below.
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

      // Keep keyboard focus inside the dialog.
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

  // Only show a separate source link when it is a real repo and not a duplicate.
  const showSource =
    project.githubLink.includes("github.com") &&
    project.githubLink !== project.liveLink;

  const hasFooter = primaryLinks.length > 0 || showSource;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center bg-gray-950/60 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none sm:items-center sm:p-6 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      // Close on click, not on mouse-down: closing earlier lets the same click
      // land on the card underneath and reopen the modal. The press must also
      // start on the backdrop, so drag-selecting text inside the panel and
      // releasing outside does not close it.
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
        className={`flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl border border-gray-200/80 bg-white shadow-2xl transition duration-200 motion-reduce:transition-none sm:max-h-[88vh] sm:max-w-3xl sm:rounded-2xl dark:border-gray-700/60 dark:bg-gray-900 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-gray-200/80 px-6 py-5 dark:border-gray-700/60">
          <div className="min-w-0">
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {project.category}
            </span>
            <h3
              id={titleId}
              className="mt-1 text-2xl font-bold text-gray-900 dark:text-white"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="-mr-2 -mt-1 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-8 overflow-y-auto px-6 py-6">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
            {caseStudy.overview}
          </p>

          <Section title="Why it exists">
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {caseStudy.why}
            </p>
          </Section>

          <Section title={caseStudy.flowTitle}>
            <ol className="space-y-5">
              {caseStudy.flow.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          {caseStudy.diagram && (
            <Section title="Architecture">
              <pre
                tabIndex={0}
                aria-label="Architecture diagram"
                className="overflow-x-auto rounded-xl bg-gray-950 p-4 font-mono text-xs leading-relaxed text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:text-[13px]"
              >
                <code>{caseStudy.diagram}</code>
              </pre>
            </Section>
          )}

          <Section title="Engineering decisions">
            <dl className="divide-y divide-gray-200/80 dark:divide-gray-700/50">
              {caseStudy.decisions.map((decision) => (
                <div key={decision.title} className="py-4 first:pt-0 last:pb-0">
                  <dt className="font-semibold text-gray-900 dark:text-white">
                    {decision.title}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {decision.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>
        </div>

        {/* Footer */}
        {hasFooter && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-200/80 px-6 py-4 dark:border-gray-700/60">
            {primaryLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <LinkIcon size={14} className="text-emerald-500" />
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
                className={linkClass}
              >
                <Github size={14} className="text-emerald-500" />
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
