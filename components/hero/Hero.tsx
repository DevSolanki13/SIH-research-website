"use client";

import React from "react";
import { ArrowDown, Play, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span>SIH 2026 · Field Research & Product Evidence</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
          BHAAV
        </h1>

        {/* Concise punchy description */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-snug">
          How e-waste moves in{" "}
          <span className="text-emerald-700 font-bold underline decoration-emerald-500/40 underline-offset-6">
            Vasai–Virar
          </span>{" "}
          — and what we built from ground reality.
        </p>

        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          Every scrap sale gets a fair, signed receipt. Built for entry-level phones, offline use, and multilingual support (मराठी, हिंदी, English).
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button
            href="#field-visit"
            variant="primary"
            size="md"
            icon={<ArrowDown className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore Field Visit
          </Button>

          <Button
            href="#demo-video"
            variant="secondary"
            size="md"
            icon={<Play className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />}
            iconPosition="left"
          >
            Watch Demo
          </Button>
        </div>

        {/* Compact Key Stats / Badges */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Vasai–Virar, Maharashtra</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Field Visit: 29 Sep 2026</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Works 100% Offline</span>
          </div>
        </div>
      </div>
    </section>
  );
}
