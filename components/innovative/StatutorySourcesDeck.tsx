import React from "react";
import { RESEARCH_SOURCES } from "@/data/sources";
import { ExternalLink } from "lucide-react";

export function StatutorySourcesDeck() {
  return (
    <section id="sources" className="space-y-4">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          07 / STATUTORY SOURCES & AUDIT TRAIL
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Government Databases & Citations
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Official statutory registries, municipal studies, and academic literature supporting the Bhaav architecture.
        </p>
      </div>

      {/* Grid of Citations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {RESEARCH_SOURCES.map((src) => {
          const isReference = src.category === "REFERENCE";
          const isGov = src.category === "GOVERNMENT" || src.category === "REGULATORY";

          const badgeClass = isReference
            ? "bg-amber-50 text-amber-900 border-amber-200"
            : isGov
            ? "bg-blue-50 text-blue-900 border-blue-200"
            : "bg-slate-100 text-slate-700 border-slate-200";

          const getLinkText = (url?: string) => {
            if (!url) return "Published Study";
            if (url.endsWith(".pdf")) return "Direct PDF";
            if (url.includes("Registry") || url.includes("registry")) return "Official Registry";
            return "Official Portal";
          };

          return (
            <div
              key={src.id}
              className={`p-4 rounded-xl bg-white border transition-all flex flex-col justify-between ${
                isReference
                  ? "border-amber-300 bg-amber-50/20"
                  : "border-slate-200 hover:border-slate-300 shadow-2xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] uppercase font-bold text-emerald-800">
                    {src.organisation}
                  </span>
                  <span
                    className={`font-mono text-[9px] px-1.5 py-0.5 rounded font-bold uppercase border ${badgeClass}`}
                  >
                    {src.categoryLabel}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {src.title}
                </h4>

                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {src.supports}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">{src.date}</span>
                {src.url ? (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:underline"
                  >
                    <span>{getLinkText(src.url)}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-400">Published Academic Study</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
