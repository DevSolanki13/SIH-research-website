import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

export function ProductFlow() {
  const steps = [
    { num: "01", name: "Create Lot" },
    { num: "02", name: "Photo & Scale" },
    { num: "03", name: "Buyer Check" },
    { num: "04", name: "Rate Lock" },
    { num: "05", name: "Sign Receipt" },
    { num: "06", name: "Handover" },
    { num: "07", name: "Consolidate" },
    { num: "08", name: "Reached ✓" },
  ];

  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
      <div className="flex items-center justify-between mb-3 text-xs font-mono">
        <span className="font-bold text-slate-800 uppercase tracking-wider">
          The 8-Stage Pipeline
        </span>
        <span className="text-emerald-700 font-semibold">100% Offline Compatible</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;

          return (
            <div
              key={step.num}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs"
            >
              <div className="font-mono text-[10px] font-bold text-emerald-700">
                {step.num}
              </div>
              <div className="text-xs font-bold text-slate-800 mt-0.5 truncate">
                {step.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
