"use client";

import React, { useState } from "react";
import { FileCheck, Smartphone, Monitor, WifiOff, QrCode } from "lucide-react";

export function Section7ProductEvidence() {
  const [activeTab, setActiveTab] = useState<"receipt" | "collector" | "recycler" | "offline">("receipt");

  return (
    <section id="evidence" className="space-y-3">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
        <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
          07
        </span>
        <span>Live Product Evidence & Tamper-Proof Protocols</span>
      </h2>

      {/* Main Evidence Card */}
      <div className="rounded-xl border border-slate-300 bg-white p-4 sm:p-5 shadow-xs space-y-4">
        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab("receipt")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
              activeTab === "receipt"
                ? "bg-slate-900 text-white font-bold"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Signed Receipt</span>
          </button>

          <button
            onClick={() => setActiveTab("collector")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
              activeTab === "collector"
                ? "bg-slate-900 text-white font-bold"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Collector App UI</span>
          </button>

          <button
            onClick={() => setActiveTab("recycler")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
              activeTab === "recycler"
                ? "bg-slate-900 text-white font-bold"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Recycler Console</span>
          </button>

          <button
            onClick={() => setActiveTab("offline")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
              activeTab === "offline"
                ? "bg-slate-900 text-white font-bold"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <WifiOff className="w-3.5 h-3.5" />
            <span>Offline Sync Engine</span>
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === "receipt" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-2 text-xs">
              <h4 className="text-sm font-bold text-slate-900">
                Cryptographic Signed Transaction Slip
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Produced locally on a basic smartphone without internet connectivity. Merges dual digital signatures, platform scale readings, rate locks, and lot photo hashes into an immutable SHA-256 receipt.
              </p>
              <div className="pt-2 font-mono text-[11px] text-emerald-700 space-y-1">
                <div>✓ Zero thermal paper printer needed</div>
                <div>✓ Optical verification via offline QR code</div>
                <div>✓ Directly compliant with CPCB EPR manifest criteria</div>
              </div>
            </div>

            {/* Receipt Artifact */}
            <div className="md:col-span-6 rounded-xl bg-slate-50 border border-slate-300 p-4 font-mono text-xs space-y-3">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="font-bold text-slate-900">BHAAV RECEIPT #BHV-VV-90412</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">
                  SEALED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Collector</span>
                  <span className="text-slate-900 font-bold">Santosh M. (ID #409)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Buyer (Point)</span>
                  <span className="text-slate-900 font-bold">Waliv Scrap Point</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Weight Confirmed</span>
                  <span className="text-slate-900 font-bold">36.0 kg (Scale Readout)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Locked Rate</span>
                  <span className="text-emerald-700 font-bold">₹430.00 / kg</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-white border border-slate-200 flex justify-between font-bold text-slate-900">
                <span>Total Settlement:</span>
                <span className="text-emerald-700">₹15,480.00</span>
              </div>

              <div className="flex justify-between items-center pt-1 border-t border-slate-200 text-[10px] text-slate-500">
                <span className="flex items-center gap-1 font-mono">
                  <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                  SHA: 9a2b...4f71
                </span>
                <span className="text-emerald-700 font-semibold">Status: Reached Smelter ✓</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "collector" && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-900">Collector App Mobile Interface</span>
              <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                मराठी / हिंदी / English
              </span>
            </div>
            <p className="text-slate-600">
              Engineered with high-contrast buttons, zero background animation bloat, and instantaneous localized price benchmark feeds calculated from actual concluded sales.
            </p>
            <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center font-mono">
              <div>
                <div className="text-[10px] text-slate-400 uppercase">Realized Market Benchmark</div>
                <div className="text-lg font-bold text-emerald-700">₹425 - ₹440 / kg</div>
              </div>
              <span className="text-[11px] text-slate-500">28 signed Vasai sales</span>
            </div>
          </div>
        )}

        {activeTab === "recycler" && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-900">Recycler ERP Console & Manifest Gate</span>
              <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                CPCB Compliant
              </span>
            </div>
            <p className="text-slate-600 font-sans">
              Consolidates multiple child receipts into single 300–400 kg batch manifests. Automatically validates weighbridge readings against aggregated collector receipt totals.
            </p>
            <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
              <span>Batch #VV-BATCH-004 (384.2 kg NET)</span>
              <span className="text-emerald-700 font-bold">Weighbridge Delta +0.4% (PASS)</span>
            </div>
          </div>
        )}

        {activeTab === "offline" && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex justify-between items-center font-mono">
              <span className="font-bold text-slate-900">Zero-Connectivity Offline Engine</span>
              <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Works Offline
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              In scrap sheds with zero cellular coverage, receipts are sealed locally with timestamps and digital hashes. All transactions sync reliably to the cloud database the moment connection is re-established.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
