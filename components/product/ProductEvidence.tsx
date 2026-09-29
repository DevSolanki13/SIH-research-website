"use client";

import React, { useState } from "react";
import { FileCheck, Smartphone, Monitor, WifiOff, QrCode, CheckCircle2 } from "lucide-react";

type EvidenceKey = "receipt" | "collector" | "recycler" | "offline";

export function ProductEvidence() {
  const [selectedTab, setSelectedTab] = useState<EvidenceKey>("receipt");

  const items = [
    {
      key: "receipt" as const,
      icon: <FileCheck className="w-4 h-4" />,
      title: "Signed Digital Receipt",
      desc: "Tamper-evident receipt with dual signatures, weight lock, and SHA-256 hash.",
    },
    {
      key: "collector" as const,
      icon: <Smartphone className="w-4 h-4" />,
      title: "Collector Mobile UI",
      desc: "High-contrast UI in Marathi, Hindi, and English built for entry-level phones.",
    },
    {
      key: "recycler" as const,
      icon: <Monitor className="w-4 h-4" />,
      title: "Recycler Inbound Console",
      desc: "Weighbridge consignment reconciliation and CPCB manifest generation.",
    },
    {
      key: "offline" as const,
      icon: <WifiOff className="w-4 h-4" />,
      title: "Offline Sync Engine",
      desc: "Seals transactions locally in sheds without cellular network.",
    },
  ];

  return (
    <section id="product-evidence" className="py-14 md:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            05 / PRODUCT EVIDENCE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Real Transaction Proof
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Working digital receipts, low-cost phone interfaces, and offline protocols.
          </p>
        </div>

        {/* 2-Column Clean Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Selector list */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {items.map((item) => {
              const isSelected = selectedTab === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => setSelectedTab(item.key)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-emerald-500 shadow-sm"
                      : "bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`p-1.5 rounded-lg ${
                        isSelected ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed ml-8">
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Preview Card */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            {selectedTab === "receipt" && (
              <div className="space-y-4 font-mono text-xs animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="font-bold text-slate-900">BHAAV RECEIPT #BHV-VV-90412</div>
                  <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
                    LOCKED & SIGNED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase">Collector</span>
                    <span className="text-slate-900 font-medium">Santosh M. (#8102)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase">Buyer (Point)</span>
                    <span className="text-slate-900 font-medium">Waliv Scrap Point</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase">Weight Confirmed</span>
                    <span className="text-emerald-700 font-bold">36.0 kg (Scale Readout)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase">Agreed Rate</span>
                    <span className="text-slate-900 font-medium">₹430.00 / kg</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between font-bold text-slate-900">
                  <span>Total Payout:</span>
                  <span className="text-emerald-700">₹15,480.00</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] border-t border-slate-100">
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-emerald-700 font-semibold">
                    Seller: Santosh M. ✓
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-emerald-700 font-semibold">
                    Buyer: Waliv Point ✓
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <div className="flex items-center gap-1">
                    <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                    <span>SHA: 9a2b...4f71</span>
                  </div>
                  <span className="text-emerald-700 font-semibold">Reached Recycler ✓</span>
                </div>
              </div>
            )}

            {selectedTab === "collector" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-900 text-sm">Collector Mobile App</span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
                    मराठी Active
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-slate-500 uppercase">
                    आजचा सरासरी दर (Realized Sale Benchmark)
                  </div>
                  <div className="text-2xl font-black text-emerald-700">
                    ₹425 - ₹440 / kg
                  </div>
                  <div className="text-xs text-slate-500">
                    Calculated from 28 verified signed receipts in the Vasai belt.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  <div className="p-3 rounded-xl bg-emerald-600 text-white text-center font-bold">
                    + New Sale (नवीन व्यवहार)
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700 text-center">
                    My Receipts (माझे पावत्या)
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "recycler" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-900 text-sm">Recycler Gateway Console</span>
                  <span className="text-xs font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold">
                    CPCB EPR
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Batch #VV-BATCH-004</span>
                    <span className="text-emerald-700">384.2 kg NET</span>
                  </div>
                  <div className="text-slate-500">
                    14 aggregated micro-seller lots · Weighbridge Delta: +0.4% (PASS)
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between font-mono">
                  <span>Manifest Generated: #EPR-MH-9941</span>
                  <span className="font-bold">EPR Logged ✓</span>
                </div>
              </div>
            )}

            {selectedTab === "offline" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-900 text-sm">Offline Transaction Resilience</span>
                  <span className="text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-semibold">
                    Zero Signal
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-sm font-bold text-slate-900">
                    3 Sales Sealed in Local Queue
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cryptographic signatures and hashes are created directly on the phone. Synchronizes automatically when the device reconnects to network.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Peer-to-peer verification active via QR codes</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
