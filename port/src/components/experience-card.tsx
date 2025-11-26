import { type LucideIcon } from "lucide-react";

interface ExperienceCardProps {
  experience: {
    id: number;
    title: string;
    company: string;
    date: string;
    impact: string;
    tech: string[];
    color: string;
    darkColor: string;
    accentColor: string;
  };
  Icon: LucideIcon;
  isHovered: boolean;
}

function ExperienceCard({ experience, Icon, isHovered }: ExperienceCardProps) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
        isHovered ? "shadow-2xl" : "shadow-lg"
      }`}
      style={{
        background: isHovered
          ? `linear-gradient(135deg, var(--tw-gradient-stops))`
          : `linear-gradient(135deg, var(--tw-gradient-stops))`,
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-100`}
      />

      {/* Gradient overlay on hover */}
      {isHovered && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${experience.darkColor} opacity-20 transition-opacity duration-300`}
        />
      )}

      {/* Gradient background overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at top right, rgba(255,255,255,0.4), transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`mb-6 inline-flex p-3 rounded-xl backdrop-blur-sm transition-all duration-300 ${
            isHovered ? "scale-110 bg-white/30" : "bg-white/20"
          }`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Title and Company */}
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
          {experience.title}
        </h3>
        <p className="text-white/90 font-semibold mb-1">{experience.company}</p>
        <p className="text-white/70 text-sm mb-6">{experience.date}</p>

        {/* Divider */}
        <div className="h-1 w-8 bg-white/40 rounded-full mb-6" />

        {/* Impact */}
        <p className="text-white/95 text-sm leading-relaxed mb-6">
          {experience.impact}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-all duration-200 border border-white/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
}

export default ExperienceCard;
export { ExperienceCard };
