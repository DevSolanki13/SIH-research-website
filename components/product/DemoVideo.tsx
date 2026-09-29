"use client";

import React, { useState } from "react";
import { ProductFlow } from "./ProductFlow";
import { Play, Video } from "lucide-react";

interface DemoChapter {
  num: string;
  title: string;
}

const DEMO_CHAPTERS: DemoChapter[] = [
  { num: "01", title: "Create a lot" },
  { num: "02", title: "Capture evidence" },
  { num: "03", title: "Check weight" },
  { num: "04", title: "Lock the price" },
  { num: "05", title: "Sign transaction" },
  { num: "06", title: "Handover" },
  { num: "07", title: "Recycler arrival" },
];

export function DemoVideo() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="demo-video" className="py-14 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            04 / PRODUCT DEMO & FLOW
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            See Bhaav in action
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            End-to-end product flow from micro-collection to formal recycler delivery.
          </p>
        </div>

        {/* 16:9 Clean Empty Video Container */}
        <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-center p-6 mb-6 shadow-sm">
          <video
            className="hidden w-full h-full object-cover"
            controls
            preload="none"
          >
            <source src="/video/bhaav-demo.mp4" type="video/mp4" />
          </video>

          <div className="flex flex-col items-center max-w-md space-y-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-emerald-600">
              <Play className="w-7 h-7 fill-current translate-x-0.5" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full mb-1.5">
                <Video className="w-3 h-3" />
                DEMO VIDEO SLOT
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Demo Video Placeholder
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Place video at{" "}
                <code className="font-mono text-emerald-700 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  /public/video/bhaav-demo.mp4
                </code>
              </p>
            </div>
          </div>
        </div>

        {/* 7 Chapter Markers as Compact Pills */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {DEMO_CHAPTERS.map((chap, idx) => (
              <button
                key={chap.num}
                onClick={() => setActiveChapter(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                  activeChapter === idx
                    ? "bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span>{chap.num}</span>
                <span>{chap.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 8-Stage Flow */}
        <div className="max-w-5xl mx-auto">
          <ProductFlow />
        </div>
      </div>
    </section>
  );
}
