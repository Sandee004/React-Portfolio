import React from "react";

export type TapeVariant = "yellow" | "mint" | "pink" | "clear" | "charcoal";

export interface TapeProps {
  variant?: TapeVariant;
  angle?: number;
  width?: string;
  position?: "top-center" | "top-left" | "top-right" | "top" | "custom";
  className?: string;
}

const variantStyles: Record<TapeVariant, string> = {
  yellow: "bg-amber-100/70 border-amber-300/40 text-amber-900/30",
  mint: "bg-emerald-100/70 border-emerald-300/40 text-emerald-900/30",
  pink: "bg-rose-100/70 border-rose-300/40 text-rose-900/30",
  clear: "bg-white/70 border-white/60 text-slate-400/30",
  charcoal: "bg-slate-700/60 border-slate-600/50 text-slate-900/40",
};

export const Tape: React.FC<TapeProps> = ({
  variant = "yellow",
  angle = -1.5,
  width = "w-28",
  position = "top-center",
  className = "",
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top-center":
        return "-top-3 left-1/2 -translate-x-1/2";
      case "top-left":
        return "-top-3 left-4";
      case "top-right":
        return "-top-3 right-4";
      case "top":
        return "-top-3 left-1/2 -translate-x-1/2";
      case "custom":
        return "";
      default:
        return "-top-3 left-1/2 -translate-x-1/2";
    }
  };

  return (
    <div
      aria-hidden="true"
      style={{
        transform: `${position === "top-center" || position === "top" ? "translateX(-50%) " : ""}rotate(${angle}deg)`,
      }}
      className={`absolute ${getPositionClasses()} ${width} h-6 ${variantStyles[variant]} backdrop-blur-[2px] shadow-sm z-20 pointer-events-none select-none rounded-[1px] ${className}`}
    >
      {/* Torn/serrated end cut on left */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] border-l-[2px] border-dotted border-black/15" />

      {/* Gloss reflection highlight */}
      <div className="absolute inset-x-1 top-[2px] h-[1px] bg-white/60 pointer-events-none" />

      {/* Subtle texture / fiber sheen */}
      <div className="w-full h-full opacity-30 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Torn/serrated end cut on right */}
      <div className="absolute right-0 top-0 bottom-0 w-[4px] border-r-[2px] border-dotted border-black/15" />
    </div>
  );
};

export default Tape;

