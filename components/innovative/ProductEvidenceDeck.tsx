"use client";

import React, { useState } from "react";
import { FileCheck, Smartphone, Monitor, WifiOff, QrCode, CheckCircle2 } from "lucide-react";

export function ProductEvidenceDeck() {
  const [activeTab, setActiveTab] = useState<"receipt" | "collector" | "recycler" | "offline">("receipt");

  const tabs = [
    {
      id: "receipt" as const,
      label: "Signed Digital Receipt",
      desc: "SHA-256 sealed transaction proof",
      icon: <FileCheck className="w-4 h-4" />,
    },
    {
      id: "collector" as const,
      label: "Collector Mobile UI",
      desc: "Offline vernacular app (मराठी/हिंदी)",
      icon: <Smartphone className="w-4 h-4" />,
    },
    {
      id: "recycler" as const,
      label: "Recycler Inbound Console",
      desc: "Weighbridge reconciliation & CPCB EPR",
      icon: <Monitor className="w-4 h-4" />,
    },
    {
      id: "offline" as const,
      label: "Offline Sync Engine",
      desc: "Local queue without internet signal",
      icon: <WifiOff className="w-4 h-4" />,
    },
  ];

  return (
    <section id="evidence" className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          05 / PRODUCT EVIDENCE DECK
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Verifiable Transaction Records & Interfaces
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Inspection of actual data structures, receipt hashes, and device views.
        </p>
      </div>

      {/* Prominent Demo Data Disclaimer Banner */}
      <div className="rounded-xl bg-amber-50/90 border border-amber-300 p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-amber-950 shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="font-bold bg-amber-200 text-amber-950 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0">
            DEMO DATA
          </span>
          <span className="font-medium">
            Illustrative product interface for jury evaluation. All transaction IDs, names, and rates shown below are synthetic demo records.
          </span>
        </div>
        <span className="text-[10px] text-amber-800 font-semibold shrink-0">
          Prototype Implementation
        </span>
      </div>

      {/* Main 2-Column Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: 4 Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white border-emerald-500 shadow-sm"
                    : "bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <div
                    className={`p-2 rounded-xl ${
                      isSelected
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {tab.label}
                    </div>
                    <div className="text-[11px] text-slate-500">{tab.desc}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Artifact View */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
          {activeTab === "receipt" && (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="font-bold text-slate-900 text-sm">
                  BHAAV TRANSACTION RECEIPT (SAMPLE)
                </div>
                <span className="text-[10px] bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-bold">
                  DEMO RECORD · SYNTHETIC ID
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Receipt ID</span>
                  <span className="text-slate-900 font-bold">DEMO-BHV-001</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Date & Timestamp</span>
                  <span className="text-slate-900 font-bold">29-Sep-2026 15:42 (Demo)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Collector (Seller)</span>
                  <span className="text-slate-900 font-bold">Demo Collector</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Buyer (Bhaav Pt)</span>
                  <span className="text-slate-900 font-bold">Demo Bhaav Point</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>PCB Grade-A (Sample Lot)</span>
                  <span className="text-emerald-700">₹15,480.00</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Agreed Weight: 36.0 kg</span>
                  <span>Rate Locked: ₹430.00 / kg</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 text-[10px]">
                <div className="p-2 rounded bg-slate-50 border border-slate-200 text-emerald-800 font-semibold">
                  Seller Signature: Demo Collector ✓
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200 text-emerald-800 font-semibold">
                  Buyer Signature: Demo Bhaav Point ✓
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <span className="flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                  SHA-256: 9a2b...4f71 (Demo Hash)
                </span>
                <span className="text-emerald-700 font-semibold">Status: Reached Line ✓</span>
              </div>
            </div>
          )}

          {activeTab === "collector" && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <span className="font-bold text-slate-900 text-sm">Collector Mobile App (Android Low-End)</span>
                <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                  मराठी · हिंदी · EN
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                  आजचा सरासरी दर (Realized Sale Benchmark — Demo)
                </div>
                <div className="text-2xl font-black text-emerald-700 font-mono">
                  ₹425 - ₹440 / kg
                </div>
                <p className="text-xs text-slate-500">
                  Illustrative benchmark rate based on sample trade cluster data (Demo calculation; not live trading data).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <div className="p-3 rounded-xl bg-emerald-700 text-white text-center font-bold shadow-xs">
                  + New Sale (नवीन व्यवहार)
                </div>
                <div className="p-3 rounded-xl bg-slate-100 text-slate-700 text-center border border-slate-200">
                  My Receipts (माझे पावत्या)
                </div>
              </div>
            </div>
          )}

          {activeTab === "recycler" && (
            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <span className="font-bold text-slate-900 text-sm font-sans">Recycler ERP Gateway Console (Demo)</span>
                <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-bold">
                  Sample CPCB/EPR Format
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex justify-between text-slate-900 font-bold">
                  <span>Batch Consignment #BATCH-DEMO-001</span>
                  <span className="text-emerald-700">384.2 kg NET (Simulated)</span>
                </div>
                <div className="text-slate-500 text-[11px]">
                  Origin: Demo Bhaav Point · Simulated Inbound Intake Record
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs flex items-center justify-between">
                <span>Sample CPCB/EPR Manifest Format: #EPR-SAMPLE-FORMAT</span>
                <span className="font-bold text-emerald-800">SAMPLE EPR RECORD — DEMO DATA FORMAT</span>
              </div>
            </div>
          )}

          {activeTab === "offline" && (
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <span className="font-bold text-slate-900 text-sm">Offline-First Transaction Queue</span>
                <span className="font-mono text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-bold">
                  Works Without Internet
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed">
                In metal sheds or low-connectivity godowns without cellular reception, Bhaav signs and locks transactions into device storage. The moment connectivity re-establishes, batches synchronize automatically to the server ledger.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs flex items-center justify-between">
                <span>3 Transactions Sealed in Local Queue (Demo Queue)</span>
                <span className="text-emerald-700 font-bold">Queue Ready ✓</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
