import React from "react";
import { RESEARCH_SOURCES } from "@/data/sources";
import { ExternalLink } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";

export function Sources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
      {RESEARCH_SOURCES.map((src) => {
        const isReference = src.category === "REFERENCE";

        return (
          <div
            key={src.id}
            className={`p-4 rounded-xl bg-white border transition-all flex flex-col justify-between ${
              isReference ? "border-orange-300 bg-orange-50/20" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] uppercase font-bold text-emerald-700">
                  {src.organisation}
                </span>
                <StatusBadge status={isReference ? "REFERENCE" : "VERIFIED"} size="sm" />
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
                  className="inline-flex items-center gap-1 text-emerald-700 font-semibold hover:underline"
                >
                  <span>Source Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-slate-400">Academic Study</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
