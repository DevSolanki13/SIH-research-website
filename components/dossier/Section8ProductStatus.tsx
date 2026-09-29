import React from "react";
import { Check, Clock, AlertTriangle } from "lucide-react";

export function Section8ProductStatus() {
  return (
    <section id="status" className="space-y-3">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
        <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
          08
        </span>
        <span>Product Implementation Status & Honest Audit</span>
      </h2>

      {/* 3 Status Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* BUILT */}
        <div className="rounded-xl border border-emerald-300 bg-white p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase">
                BUILT
              </span>
              <span className="text-[11px] font-mono text-emerald-700 font-bold">
                In Codebase
              </span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Core Architecture
            </h4>

            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Rate Lock mutual confirmation</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dual weight check with tolerance</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>SHA-256 signed digital receipt</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Offline journal & queue sync</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Marathi, Hindi & English UI</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Two-Photo check & hash alarm</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] font-mono text-emerald-700 font-bold">
            Status: Automated Tests Passing
          </div>
        </div>

        {/* BUILDING */}
        <div className="rounded-xl border border-amber-300 bg-white p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase">
                BUILDING
              </span>
              <span className="text-[11px] font-mono text-amber-700 font-bold">
                Finalising
              </span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Integrations & Manifests
            </h4>

            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Honest-Buyer Score calibration</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Auto batch manifest & GST PDF</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Weighbridge tare/gross matcher</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] font-mono text-amber-700 font-bold">
            Status: Active Logic Engineering
          </div>
        </div>

        {/* TO VALIDATE */}
        <div className="rounded-xl border border-orange-300 bg-white p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-orange-800 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded uppercase">
                TO VALIDATE
              </span>
              <span className="text-[11px] font-mono text-orange-700 font-bold">
                Field Checks
              </span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-2">
              On-Ground Testing
            </h4>

            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>Budget phone sunlight readability</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>Recycler bonus incentive margins</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>Informal picker vernacular read-through</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] font-mono text-orange-700 font-bold">
            Status: Scheduled for Phase 2 Verification
          </div>
        </div>
      </div>
    </section>
  );
}
