import React from "react";
import { StatusBadge, BadgeVariant } from "./StatusBadge";

interface EvidenceCardProps {
  metric?: string;
  title: string;
  finding: string;
  description: string;
  badge?: BadgeVariant | string;
  category?: string;
  location?: string;
  date?: string;
  className?: string;
  footer?: React.ReactNode;
}

export function EvidenceCard({
  metric,
  title,
  finding,
  description,
  badge = "FIELD OBSERVATION",
  category,
  location,
  date,
  className = "",
  footer,
}: EvidenceCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 ${className}`}
    >
      <div>
        {/* Top bar with badge & category */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {badge && <StatusBadge status={badge} size="sm" />}
          {category && (
            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">
              {category}
            </span>
          )}
        </div>

        {/* Metric callout if present */}
        {metric && (
          <div className="mb-2">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
              {metric}
            </span>
          </div>
        )}

        {/* Title & Main Finding */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
          {finding}
        </h3>

        {/* Small subtitle if distinct from finding */}
        {title && title !== finding && (
          <p className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-500">
            {title}
          </p>
        )}

        {/* Detailed observation text */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer / Context metadata */}
      {(location || date || footer) && (
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
          {location && <span>{location}</span>}
          {date && <span>{date}</span>}
          {footer}
        </div>
      )}
    </div>
  );
}
