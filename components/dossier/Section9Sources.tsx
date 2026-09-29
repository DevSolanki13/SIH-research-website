import React from "react";
import { RESEARCH_SOURCES } from "@/data/sources";
import { ExternalLink } from "lucide-react";

export function Section9Sources() {
  return (
    <section id="sources" className="space-y-3">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
        <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
          09
        </span>
        <span>Statutory Sources & Reference Studies</span>
      </h2>

      {/* Sources Table */}
      <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-xs">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100 text-[10px] font-mono uppercase text-slate-600">
              <th className="py-2.5 px-3.5 w-1/4 font-semibold">Organisation / Body</th>
              <th className="py-2.5 px-3.5 w-2/5 font-semibold">Report Title</th>
              <th className="py-2.5 px-3.5 w-1/4 font-semibold">Category</th>
              <th className="py-2.5 px-3.5 w-auto font-semibold">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {RESEARCH_SOURCES.map((src) => {
              const isRef = src.category === "REFERENCE";

              return (
                <tr key={src.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-3.5 font-bold text-slate-800 bg-slate-50/30">
                    {src.organisation}
                  </td>
                  <td className="py-2.5 px-3.5 text-slate-700">
                    <div>{src.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {src.supports}
                    </div>
                  </td>
                  <td className="py-2.5 px-3.5 font-mono text-[10px]">
                    <span
                      className={`px-1.5 py-0.5 rounded font-bold ${
                        isRef
                          ? "bg-orange-50 text-orange-800 border border-orange-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {src.categoryLabel}
                    </span>
                  </td>
                  <td className="py-2.5 px-3.5 font-mono">
                    {src.url ? (
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-slate-400">Published</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
