import React from "react";

// Four-point sparkle doodle inspired by Image 2
export const Sparkle: React.FC<{
  size?: number;
  color?: string;
  className?: string;
  rotate?: number;
}> = ({ size = 24, color = "#f59e0b", className = "", rotate = 0 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`inline-block select-none pointer-events-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
      fill={color}
    />
  </svg>
);

// Collaborator cursor chip inspired by Image 1 (like "Iris", "Theo")
export const CursorChip: React.FC<{
  name: string;
  color?: "emerald" | "purple" | "blue" | "amber" | "rose";
  className?: string;
  rotate?: number;
  role?: string;
}> = ({
  name,
  color = "emerald",
  className = "",
  rotate = -2,
  role,
}) => {
  const colorMap = {
    emerald: {
      bg: "bg-emerald-600",
      cursor: "#059669",
      text: "text-white",
    },
    purple: {
      bg: "bg-purple-600",
      cursor: "#7c3aed",
      text: "text-white",
    },
    blue: {
      bg: "bg-blue-600",
      cursor: "#2563eb",
      text: "text-white",
    },
    amber: {
      bg: "bg-amber-500",
      cursor: "#d97706",
      text: "text-white",
    },
    rose: {
      bg: "bg-rose-500",
      cursor: "#e11d48",
      text: "text-white",
    },
  };

  const current = colorMap[color];

  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 select-none pointer-events-none transition-transform duration-300 ${className}`}
    >
      {/* SVG Mouse Pointer Cursor */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mr-1 drop-shadow-sm"
      >
        <path
          d="M0 0L6.5 15.5L9.5 9.5L15.5 6.5L0 0Z"
          fill={current.cursor}
          stroke="white"
          strokeWidth="1.2"
        />
      </svg>
      {/* Name Pill Tag */}
      <span
        className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide shadow-sm flex items-center gap-1 ${current.bg} ${current.text}`}
      >
        <span>{name}</span>
        {role && <span className="opacity-75 text-[10px] font-normal">✦ {role}</span>}
      </span>
    </div>
  );
};

// Hand-drawn curved arrow
export const HandDrawnArrow: React.FC<{
  className?: string;
  color?: string;
  flipX?: boolean;
}> = ({ className = "", color = "#1e293b", flipX = false }) => (
  <svg
    width="48"
    height="36"
    viewBox="0 0 48 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flipX ? "scaleX(-1)" : "none" }}
    className={`select-none pointer-events-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 5C12 3 32 6 41 26M41 26L34 22M41 26L43 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Paperclip SVG
export const PaperClip: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  rotate?: number;
}> = ({ className = "", size = 32, color = "#94a3b8", rotate = 15 }) => (
  <svg
    width={size}
    height={size * 1.5}
    viewBox="0 0 24 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none drop-shadow-sm ${className}`}
    aria-hidden="true"
  >
    <path
      d="M8 12V25C8 28.3137 10.6863 31 14 31C17.3137 31 20 28.3137 20 25V9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9V26C4 30.9706 8.02944 35 13 35C17.9706 35 22 30.9706 22 26V11"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

