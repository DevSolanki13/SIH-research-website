import React from "react";
import { RESEARCH_TO_DESIGN_MAPPINGS } from "@/data/researchToDesign";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";

export function ResearchToDesign() {
  return (
    <section id="research-to-design" className="py-14 md:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            03 / RESEARCH → DESIGN
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            What we saw → What we built
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            How qualitative field observations directly shaped Bhaav&apos;s product features.
          </p>
        </div>

        {/* 3-Actor Chain in Clean Horizontal Banner */}
        <div className="mb-8 p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <div>
              <span className="font-bold text-slate-900 block">COLLECTOR</span>
              <span className="text-slate-500 text-[11px]">Door-to-door scrap pickers</span>
            </div>
          </div>

          <ArrowRight className="hidden md:block w-4 h-4 text-slate-400" />
          <ArrowDown className="md:hidden w-4 h-4 text-slate-400" />

          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">
              2
            </span>
            <div>
              <span className="font-bold text-slate-900 block">BHAAV POINT</span>
              <span className="text-slate-500 text-[11px]">Partner shops pool micro-lots</span>
            </div>
          </div>

          <ArrowRight className="hidden md:block w-4 h-4 text-slate-400" />
          <ArrowDown className="md:hidden w-4 h-4 text-slate-400" />

          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
              3
            </span>
            <div>
              <span className="font-bold text-slate-900 block">AUTHORISED RECYCLER</span>
              <span className="text-slate-500 text-[11px]">CPCB/MPCB compliant smelter</span>
            </div>
          </div>
        </div>

        {/* 6 Paired Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESEARCH_TO_DESIGN_MAPPINGS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Observation */}
                <div className="mb-3">
                  <span className="font-mono text-[10px] uppercase font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Observation
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1.5">
                    {item.observedPattern}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {item.groundReality}
                  </p>
                </div>

                {/* Arrow Divider */}
                <div className="flex items-center gap-2 my-2 text-emerald-600">
                  <div className="h-px bg-slate-100 flex-1" />
                  <span className="text-xs font-bold font-mono">Transforms to ↓</span>
                  <div className="h-px bg-slate-100 flex-1" />
                </div>

                {/* Built Solution */}
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-800">
                      Built in Bhaav
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-emerald-700">
                    {item.builtSolution}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {item.productMechanism}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                {item.impactBadge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
