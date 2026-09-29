import React from "react";
import { Check, Clock, AlertTriangle } from "lucide-react";

export function ProductStatusBoard() {
  return (
    <section id="status" className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          06 / TRANSPARENCY & STATUS
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Product Implementation Status
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Honest audit of what is working in code vs what requires on-ground verification.
        </p>
      </div>

      {/* Prominent Prototype Status Banner */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 flex items-center gap-2.5 shadow-2xs">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0 animate-pulse" />
        <span>
          <strong className="text-slate-900">Prototype Status:</strong> Implemented in code, with real-phone, recycler, and field validation still in progress.
        </span>
      </div>

      {/* 3 Columns Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* BUILT */}
        <div className="rounded-2xl border border-emerald-300 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase">
                BUILT (6)
              </span>
              <span className="font-mono text-[11px] text-emerald-700 font-bold">
                Working in Code
              </span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Core Architecture
            </h4>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Rate Lock mutual digital confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dual weight check with agreed record</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>SHA-256 signed receipt with QR code</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Offline-first journal with local queue</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Marathi, Hindi & English localization</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Two-Photo check & anti-duplicate alarm</span>
              </li>
            </ul>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-100 text-[10px] font-mono text-emerald-700 font-bold">
            Status: Unit & Automated Flow Tests Passing
          </div>
        </div>

        {/* BUILDING */}
        <div className="rounded-2xl border border-amber-300 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase">
                BUILDING (3)
              </span>
              <span className="font-mono text-[11px] text-amber-700 font-bold">
                Finalising
              </span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Ecosystem & Manifests
            </h4>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Honest-Buyer Score calibration</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Auto batch manifest & GST PDF exporter</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Weighbridge tare/gross reconciler</span>
              </li>
            </ul>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-100 text-[10px] font-mono text-amber-700 font-bold">
            Status: Active Engineering
          </div>
        </div>

        {/* TO VALIDATE */}
        <div className="rounded-2xl border border-orange-300 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-orange-800 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded uppercase">
                TO VALIDATE (3)
              </span>
              <span className="font-mono text-[11px] text-orange-700 font-bold">
                On-Ground Tests
              </span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Field Verification
            </h4>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>Budget Android phone sunlight testing</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>Recycler incentive bonus margin review</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>Informal picker vernacular read-through</span>
              </li>
            </ul>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-100 text-[10px] font-mono text-orange-700 font-bold">
            Status: Scheduled for Phase 2 Verification
          </div>
        </div>
      </div>
    </section>
  );
}
