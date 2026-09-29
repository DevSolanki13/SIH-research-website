"use client";

import React, { useState } from "react";
import { Play, Video, CheckCircle2 } from "lucide-react";

export function ProductDemoSection() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { num: "01", name: "Create Lot", desc: "Category selection" },
    { num: "02", name: "Photo & Scale", desc: "Anti-duplicate check" },
    { num: "03", name: "Weight Check", desc: "Platform verification" },
    { num: "04", name: "Rate Lock", desc: "Digital price freeze" },
    { num: "05", name: "Sign Receipt", desc: "Dual touch signatures" },
    { num: "06", name: "Handover", desc: "Aggregation pooling" },
    { num: "07", name: "Recycler Arrival", desc: "Arrival confirmed" },
  ];

  const pipeline = [
    { num: "01", name: "Create Lot", desc: "Grade selection" },
    { num: "02", name: "Photo + Scale", desc: "Dual capture" },
    { num: "03", name: "Buyer Check", desc: "Bhaav Point" },
    { num: "04", name: "Rate Lock", desc: "Price locked" },
    { num: "05", name: "Sign Receipt", desc: "Dual signatures" },
    { num: "06", name: "Handover", desc: "Lot pooled" },
    { num: "07", name: "Consolidate", desc: "Batch manifest" },
    { num: "08", name: "Reached ✓", desc: "Recycler confirmed" },
  ];

  return (
    <section id="demo-flow" className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          04 / PRODUCT DEMO & FLOW
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Bhaav Transaction Demo & 8-Stage Pipeline
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          The end-to-end transaction journey from initial scrap intake to authorised recycler arrival confirmation.
        </p>
      </div>

      {/* Main Demo Container Card */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
        {/* 16:9 Clean Video Slot */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border-2 border-dashed border-slate-300 bg-slate-50/80 flex flex-col items-center justify-center text-center p-6">
          <video
            className="hidden w-full h-full object-cover"
            controls
            preload="none"
          >
            <source src="/video/bhaav-demo.mp4" type="video/mp4" />
          </video>

          <div className="flex flex-col items-center max-w-sm space-y-3">
            <div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-emerald-700 hover:scale-105 transition-transform">
              <Play className="w-7 h-7 fill-current translate-x-0.5" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
                Demo Video Slot
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Container ready for demo recording. Drop video file at{" "}
                <code className="text-emerald-700 font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  /public/video/bhaav-demo.mp4
                </code>
              </p>
            </div>
          </div>
        </div>

        {/* 7 Interactive Chapter Buttons */}
        <div>
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
            Transaction Chapters (Click to Jump)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {chapters.map((chap, idx) => (
              <button
                key={chap.num}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  activeChapter === idx
                    ? "bg-emerald-50 border-emerald-400 shadow-xs"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] font-bold text-slate-400">
                  <span>{chap.num}</span>
                  {activeChapter === idx && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  )}
                </div>
                <div
                  className={`text-xs font-bold mt-0.5 truncate ${
                    activeChapter === idx ? "text-emerald-800" : "text-slate-800"
                  }`}
                >
                  {chap.name}
                </div>
                <div className="text-[10px] text-slate-500 truncate">{chap.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 8-Stage Pipeline */}
        <div className="pt-4 border-t border-slate-100">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
            8-Stage End-to-End Pipeline
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {pipeline.map((step) => (
              <div
                key={step.num}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center"
              >
                <div className="font-mono text-[9px] font-bold text-emerald-700">
                  {step.num}
                </div>
                <div className="text-xs font-bold text-slate-800 truncate mt-0.5">
                  {step.name}
                </div>
                <div className="text-[10px] text-slate-500 truncate">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
