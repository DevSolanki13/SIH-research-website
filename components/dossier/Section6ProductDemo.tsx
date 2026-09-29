"use client";

import React, { useState } from "react";
import { Play, Video, CheckCircle2 } from "lucide-react";

export function Section6ProductDemo() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { num: "01", name: "Create Lot" },
    { num: "02", name: "Photo & Scale" },
    { num: "03", name: "Weight Check" },
    { num: "04", name: "Rate Lock" },
    { num: "05", name: "Sign Receipt" },
    { num: "06", name: "Handover" },
    { num: "07", name: "Recycler ✓" },
  ];

  const pipeline = [
    { num: "01", name: "Create Lot", desc: "Select scrap grade" },
    { num: "02", name: "Photo + Scale", desc: "Dual photo capture" },
    { num: "03", name: "Buyer Check", desc: "Select Bhaav Point" },
    { num: "04", name: "Rate Lock", desc: "Price digitally locked" },
    { num: "05", name: "Sign Receipt", desc: "Dual screen signatures" },
    { num: "06", name: "Handover", desc: "Lot pooled at depot" },
    { num: "07", name: "Consolidate", desc: "Auto batch invoice" },
    { num: "08", name: "Reached ✓", desc: "Smelter arrival status" },
  ];

  return (
    <section id="demo-video" className="space-y-3">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
        <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
          06
        </span>
        <span>Product Demo Video & 8-Stage Flow Pipeline</span>
      </h2>

      {/* Video Container Card */}
      <div className="rounded-xl border border-slate-300 bg-white p-4 sm:p-5 shadow-xs space-y-4">
        {/* 16:9 Clean Empty Video Placeholder */}
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-center p-6">
          <video
            className="hidden w-full h-full object-cover"
            controls
            preload="none"
          >
            <source src="/video/bhaav-demo.mp4" type="video/mp4" />
          </video>

          <div className="flex flex-col items-center max-w-sm space-y-2">
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-emerald-600">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </div>

            <div className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
              Demo Video Slot
            </div>

            <p className="text-xs text-slate-500">
              Video player container reserved. Drop your MP4 recording into{" "}
              <code className="text-emerald-700 font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">
                /public/video/bhaav-demo.mp4
              </code>
            </p>
          </div>
        </div>

        {/* 7 Chapter Markers as Compact Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          {chapters.map((chap, idx) => (
            <button
              key={chap.num}
              onClick={() => setActiveChapter(idx)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded border text-[11px] font-mono transition-all cursor-pointer ${
                activeChapter === idx
                  ? "bg-emerald-600 text-white border-emerald-600 font-bold"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span>{chap.num}.</span>
              <span>{chap.name}</span>
            </button>
          ))}
        </div>

        {/* 8-Stage Pipeline Row */}
        <div className="pt-3 border-t border-slate-200">
          <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-2">
            The 8-Stage End-to-End Pipeline
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5">
            {pipeline.map((step) => (
              <div
                key={step.num}
                className="p-2 rounded bg-slate-50 border border-slate-200 text-center"
              >
                <div className="font-mono text-[9px] font-bold text-emerald-700">
                  {step.num}
                </div>
                <div className="text-[11px] font-bold text-slate-800 truncate">
                  {step.name}
                </div>
                <div className="text-[9px] text-slate-500 truncate">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
