import React from "react";
import { Tape, type TapeVariant } from "./Tape";

export type NoteColor = "yellow" | "pink" | "mint" | "blue" | "lavender";

export interface StickyNoteProps {
  color?: NoteColor;
  rotation?: number;
  tape?: boolean;
  tapeVariant?: TapeVariant;
  tapeAngle?: number;
  tapeWidth?: string;
  tapePosition?: "top-center" | "top-left" | "top-right";
  children: React.ReactNode;
  className?: string;
  pin?: boolean;
}

const colorStyles: Record<NoteColor, { bg: string; border: string; text: string; ink: string }> = {
  yellow: {
    bg: "bg-[#fef9c3]",
    border: "border-[#fef08a]",
    text: "text-amber-950",
    ink: "text-[#713f12]",
  },
  pink: {
    bg: "bg-[#fce7f3]",
    border: "border-[#fbcfe8]",
    text: "text-rose-950",
    ink: "text-[#831843]",
  },
  mint: {
    bg: "bg-[#dcfce7]",
    border: "border-[#bbf7d0]",
    text: "text-emerald-950",
    ink: "text-[#14532d]",
  },
  blue: {
    bg: "bg-[#e0f2fe]",
    border: "border-[#bae6fd]",
    text: "text-sky-950",
    ink: "text-[#0c4a6e]",
  },
  lavender: {
    bg: "bg-[#ede9fe]",
    border: "border-[#ddd6fe]",
    text: "text-purple-950",
    ink: "text-[#4c1d95]",
  },
};

export const StickyNote: React.FC<StickyNoteProps> = ({
  color = "yellow",
  rotation = -1.5,
  tape = true,
  tapeVariant,
  tapeAngle,
  tapeWidth = "w-24",
  tapePosition = "top-center",
  children,
  className = "",
}) => {
  const current = colorStyles[color];
  const autoTapeVariant: TapeVariant = tapeVariant || (color === "yellow" ? "yellow" : color === "mint" ? "mint" : color === "pink" ? "pink" : "clear");
  const autoTapeAngle = tapeAngle ?? (rotation * 0.8 + 1);

  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      className={`relative inline-block p-4 sm:p-5 rounded-sm border ${current.bg} ${current.border} ${current.text} paper-shadow hover-wobble transition-all duration-300 desk-tilt select-none ${className}`}
    >
      {tape && (
        <Tape
          variant={autoTapeVariant}
          angle={autoTapeAngle}
          width={tapeWidth}
          position={tapePosition}
        />
      )}

      {/* Subtle corner fold / curl effect on bottom right */}
      <div className="absolute right-0 bottom-0 w-3 h-3 bg-gradient-to-tl from-black/10 via-transparent to-transparent pointer-events-none rounded-br-sm" />

      {/* Note Content */}
      <div className="relative z-10 font-hand text-lg sm:text-xl leading-snug">
        {children}
      </div>
    </div>
  );
};

export default StickyNote;

