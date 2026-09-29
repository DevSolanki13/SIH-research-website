import React from "react";
import { FIELD_OBSERVATIONS } from "@/data/observations";
import { Package, FileText, Scale, TrendingUp, Layers, CheckCircle2 } from "lucide-react";

export function GroundInsightsGrid() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Package className="w-4 h-4 text-emerald-600" />;
      case 1:
        return <FileText className="w-4 h-4 text-amber-600" />;
      case 2:
        return <Layers className="w-4 h-4 text-blue-600" />;
      case 3:
        return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 4:
        return <CheckCircle2 className="w-4 h-4 text-slate-600" />;
      default:
        return <Scale className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section id="ground-insights" className="space-y-4">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          02 / PRIMARY FIELD OBSERVATIONS
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Qualitative Patterns Documented On-Site
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Six primary qualitative observations documented directly on-site in Vasai–Virar (29 Sep 2026) by Team Error 200.
        </p>
      </div>

      {/* 6 Elegant Cards in 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FIELD_OBSERVATIONS.map((obs, idx) => (
          <div
            key={obs.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  {getIcon(idx)}
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase tracking-wider">
                  🟢 Field Note 0{idx + 1}
                </span>
              </div>

              {obs.metric && (
                <div className="font-mono text-xl font-black text-emerald-700 mb-1">
                  {obs.metric}
                </div>
              )}

              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {obs.finding}
              </h4>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {obs.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="font-medium text-slate-600">{obs.category}</span>
              <span>Vasai–Virar, MH</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
