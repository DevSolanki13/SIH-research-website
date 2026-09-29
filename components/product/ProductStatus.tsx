import React from "react";
import { StatusBadge } from "../ui/StatusBadge";
import { Check, Clock, AlertTriangle } from "lucide-react";

export function ProductStatus() {
  return (
    <section id="product-status" className="py-14 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            06 / PRODUCT STATUS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Honest Implementation Status
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Transparent disclosure of features working in code vs items requiring real-phone field validation.
          </p>
        </div>

        {/* 3 Status Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* BUILT */}
          <div className="p-6 rounded-2xl bg-white border border-emerald-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <StatusBadge status="BUILT" />
                <span className="font-mono text-xs text-emerald-700 font-bold">
                  Working in Code
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">
                Core Transaction Flow
              </h3>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Rate Lock mutual digital confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dual weight check with tolerance alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>SHA-256 signed receipt with QR code</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Offline journal with auto-sync queue</span>
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

            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 font-semibold">
              Status: Automated Tests Passing
            </div>
          </div>

          {/* BUILDING */}
          <div className="p-6 rounded-2xl bg-white border border-amber-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <StatusBadge status="BUILDING" />
                <span className="font-mono text-xs text-amber-700 font-bold">
                  Finalising
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">
                Integrations & Analytics
              </h3>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Honest-Buyer Score calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Auto batch manifest & GST PDF export</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Weighbridge tare/gross reconciler</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-amber-700 font-semibold">
              Status: Active Engineering
            </div>
          </div>

          {/* TO VALIDATE */}
          <div className="p-6 rounded-2xl bg-white border border-orange-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <StatusBadge status="TO_VALIDATE" />
                <span className="font-mono text-xs text-orange-700 font-bold">
                  Field Testing
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">
                Real-World Validation
              </h3>

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

            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-orange-700 font-semibold">
              Status: Scheduled for Field Testing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
