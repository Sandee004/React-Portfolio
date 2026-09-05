import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
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
      className="py-20 bg-gray-50/50 dark:bg-gray-900 border-t border-gray-200/80 dark:border-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something High-Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Available for full-time roles, contract engineering, and
            backend/mobile architecture.
          </p>
        </div>

        {/* Protected Contact Action Card */}
        <div className="max-w-md mx-auto mb-14 p-3 rounded-2xl bg-white/70 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/50 shadow-sm flex items-center justify-between gap-3">
          <button
            onClick={handleDirectEmail}
            className="flex items-center gap-3 px-3 py-2 text-gray-800 dark:text-gray-200 text-sm font-medium hover:text-emerald-500 transition-colors group text-left"
          >
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <Mail className="w-4 h-4 shrink-0" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                Direct Channel
              </p>
              <p className="font-semibold text-sm">Send an Email</p>
            </div>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 dark:bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all shrink-0"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy Email
              </>
            )}
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-gray-200/80 dark:border-gray-800">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-gray-800/30 border border-gray-200/80 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-emerald-500 hover:border-emerald-500/50 transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 dark:text-gray-600 text-xs mt-12 font-mono">
          © {new Date().getFullYear()} Sandra Oyarekhua. Built for performance.
        </p>
      </div>
    </footer>
  );
}
