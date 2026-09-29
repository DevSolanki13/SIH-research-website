import React from "react";
import { ArrowDown, Play, MapPin, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";

export function HeroDossier() {
  return (
    <div className="pt-24 pb-8 sm:pt-28 sm:pb-10 border-b border-slate-200">
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            SMART INDIA HACKATHON 2026 · TEAM ERROR 200
          </span>
          <span className="font-mono text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
            Primary Field Research & Working Product Evidence
          </span>
        </div>

        {/* Big Impact Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            BHAAV
          </h1>
          <p className="text-lg sm:text-2xl font-bold text-slate-700 leading-snug">
            How e-waste moves in{" "}
            <span className="text-emerald-700 underline decoration-emerald-500/40 underline-offset-6">
              Vasai–Virar
            </span>{" "}
            — and the offline receipt architecture built from ground reality.
          </p>
        </div>

        {/* Concise Description */}
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Every scrap sale gets a fair, signed receipt. Bhaav replaces unrecorded verbal deals with cryptographic rate locks, dual platform scale checks, and CPCB-ready manifests on low-cost smartphones.
        </p>

        {/* 3 Quick Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <a
            href="#field-intel"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs"
          >
            <span>Explore Field Intel</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#design-bridge"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <span>What We Built</span>
          </a>

          <a
            href="#demo-flow"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors shadow-xs"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Watch Demo</span>
          </a>
        </div>

        {/* Metadata Strip */}
        <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            Vasai–Virar, Maharashtra
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            29 Sep 2026 Primary Research
          </span>
          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Offline-First Transaction Flow
          </span>
        </div>
      </div>
    </div>
  );
}
