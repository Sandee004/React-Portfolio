import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { Tape } from "./Tape";
import { StickyNote } from "./StickyNote";

export function PaperContact() {
  const [copied, setCopied] = useState(false);

  // Email parts separated to prevent plain-text scraping
  const user = "oyarekhuas";
  const domain = "gmail.com";

  const getEmail = () => `${user}@${domain}`;

  const handleDirectEmail = () => {
    window.location.href = `mailto:${getEmail()}`;
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(getEmail());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Sandee004",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/oyarekhua-sandra",
      icon: Linkedin,
    },
    {
      name: "Twitter / X",
      href: "https://x.com/sandee__tee",
      icon: Twitter,
    },
  ];

  return (
    <footer
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Floating Note Accent */}
        <div className="mb-6 inline-block">
          <StickyNote
            color="lavender"
            rotation={-2}
            tapeVariant="clear"
            tapeAngle={1}
            tapeWidth="w-20"
            className="py-2 px-4 shadow-xs"
          >
            <span className="text-sm font-bold text-purple-950">
              let's create something memorable ✦
            </span>
          </StickyNote>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight mb-4">
            Let's Build Something Cool
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Available for full-time roles, contract engineering, and backend /
            mobile architecture.
          </p>
        </div>

        {/* Stationery Envelope / Contact Action Card */}
        <div className="relative max-w-md mx-auto mb-14 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 paper-shadow-lg transition-transform duration-300 hover:scale-[1.01]">
          {/* Top Washi Tape */}
          <Tape variant="yellow" angle={-1} width="w-28" position="top-center" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleDirectEmail}
              className="w-full sm:w-auto flex items-center gap-3 px-3 py-2 text-stone-800 text-sm font-medium hover:text-emerald-700 transition-colors group text-left"
            >
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <p className="text-[11px] text-stone-500 font-mono">
                  Direct Inbox
                </p>
                <p className="font-bold text-sm text-stone-900">Send an Email</p>
              </div>
            </button>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all shrink-0"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Email
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social Links Row as Desk Stamp Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-8 border-t border-stone-200/80">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-semibold shadow-2xs hover:shadow-xs hover:border-emerald-600/40 hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-stone-800" />
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 text-stone-400" />
              </a>
            );
          })}
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 text-xs font-mono text-stone-500 flex items-center justify-center gap-1.5">
          <span>© {new Date().getFullYear()} Sandra Oyarekhua. Handcrafted with</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          <span>on paper.</span>
        </div>
      </div>
    </footer>
  );
}

export default PaperContact;

