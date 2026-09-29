import React from "react";
import { RESEARCH_TO_DESIGN_MAPPINGS } from "@/data/researchToDesign";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function DesignBridgeSection() {
  return (
    <section id="design-bridge" className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          03 / RESEARCH → DESIGN BRIDGE
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          How Field Realities Shaped Software Decisions
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Every product capability was engineered to eliminate a specific point of friction observed on the ground.
        </p>
      </div>

      {/* 3-Actor Flow Ribbon */}
      <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-xs">
            01
          </div>
          <div>
            <div className="font-bold text-slate-900">INFORMAL COLLECTOR</div>
            <div className="text-[11px] text-slate-500">Informal scrap pickers & handlers</div>
          </div>
        </div>

        <ArrowRight className="hidden md:block w-4 h-4 text-emerald-600 shrink-0" />

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-mono font-bold flex items-center justify-center text-xs">
            02
          </div>
          <div>
            <div className="font-bold text-slate-900">BHAAV POINT HUB</div>
            <div className="text-[11px] text-slate-500">Partner scrap godowns pool micro-lots</div>
          </div>
        </div>

        <ArrowRight className="hidden md:block w-4 h-4 text-emerald-600 shrink-0" />

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-mono font-bold flex items-center justify-center text-xs">
            03
          </div>
          <div>
            <div className="font-bold text-slate-900">AUTHORISED RECYCLER</div>
            <div className="text-[11px] text-slate-500">Authorised Recycler / Dismantler</div>
          </div>
        </div>
      </div>

      {/* 6 Problem-to-Solution Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {RESEARCH_TO_DESIGN_MAPPINGS.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              {/* Problem */}
              <div className="pb-3 border-b border-slate-100">
                <span className="font-mono text-[9px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase">
                  Ground Problem
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-2">
                  {item.observedPattern}
                </h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {item.groundReality}
                </p>
              </div>

              {/* Solution */}
              <div className="pt-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-mono text-[9px] font-bold text-emerald-800 uppercase">
                    Bhaav Solution
                  </span>
                </div>
                <h4 className="text-sm font-bold text-emerald-700">
                  {item.builtSolution}
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                  {item.productMechanism}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>{item.solutionTag}</span>
              <span className="font-bold text-emerald-700">{item.impactBadge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
