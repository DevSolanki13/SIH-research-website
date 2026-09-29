import React from "react";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  badge?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  badge,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-8 md:mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}
    >
      <div
        className={`flex items-center gap-3 mb-3 ${isCenter ? "justify-center" : "justify-start"}`}
      >
        <span className="font-mono text-xs uppercase tracking-wider text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          {tag}
        </span>
        {badge}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
