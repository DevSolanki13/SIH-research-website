import React from "react";

export type BadgeVariant =
  | "BUILT"
  | "BUILDING"
  | "TO_VALIDATE"
  | "FIELD OBSERVATION"
  | "PRIMARY"
  | "SECONDARY"
  | "REFERENCE"
  | "VERIFIED"
  | "ESTIMATED"
  | "DEMO"
  | "DEFAULT";

interface StatusBadgeProps {
  status: BadgeVariant | string;
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

export function StatusBadge({ status, label, className = "", size = "md" }: StatusBadgeProps) {
  const normalized = status.toUpperCase().replace(/\s+/g, "_");

  // Light theme styling
  let bg = "bg-slate-100";
  let text = "text-slate-700";
  let border = "border-slate-200";
  let dot = "bg-slate-500";
  let displayLabel = label || status;

  if (normalized === "BUILT" || normalized === "VERIFIED" || normalized === "PRIMARY") {
    bg = "bg-emerald-50";
    text = "text-emerald-700";
    border = "border-emerald-200";
    dot = "bg-emerald-500";
    if (!label) displayLabel = normalized === "BUILT" ? "BUILT" : status;
  } else if (
    normalized === "BUILDING" ||
    normalized === "FIELD_OBSERVATION" ||
    normalized === "ESTIMATED" ||
    normalized === "DEMO"
  ) {
    bg = "bg-amber-50";
    text = "text-amber-800";
    border = "border-amber-200";
    dot = "bg-amber-500";
  } else if (normalized === "TO_VALIDATE" || normalized === "REFERENCE") {
    bg = "bg-orange-50";
    text = "text-orange-800";
    border = "border-orange-200";
    dot = "bg-orange-500";
    if (!label && normalized === "TO_VALIDATE") displayLabel = "TO VALIDATE";
  } else if (normalized === "SECONDARY" || normalized.includes("MPCB") || normalized.includes("REGULATORY")) {
    bg = "bg-blue-50";
    text = "text-blue-700";
    border = "border-blue-200";
    dot = "bg-blue-500";
  }

  const sizeClasses =
    size === "sm"
      ? "text-[11px] px-2 py-0.5 tracking-wider"
      : "text-xs px-2.5 py-1 tracking-wider";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium uppercase rounded-full border ${bg} ${text} ${border} ${sizeClasses} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
      <span>{displayLabel}</span>
    </span>
  );
}
