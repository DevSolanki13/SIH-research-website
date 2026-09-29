import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FieldObservations } from "./FieldObservations";
import { FieldGallery } from "./FieldGallery";
import { FieldMap } from "./FieldMap";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function FieldVisit() {
  return (
    <section id="field-visit" className="py-14 md:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              01 / FIELD VISIT
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What we observed on the ground
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Primary field research in Vasai–Virar, Maharashtra · 29 September 2026.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-slate-600 bg-white p-2.5 px-4 rounded-xl border border-slate-200 shadow-sm self-start">
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Primary Field Research
            </span>
          </div>
        </div>

        {/* 6 Field Observations Grid */}
        <div className="mb-10">
          <FieldObservations />
        </div>

        {/* Photos & Map: Side-by-Side 2-Column Grid */}
        <div>
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500">
            <span className="font-semibold text-slate-700 uppercase">Field Photo Slots & Regional Map</span>
            <span>Vasai–Virar, Maharashtra</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6 cols: Clean photo placeholders */}
            <div className="lg:col-span-6">
              <FieldGallery />
            </div>

            {/* Right 6 cols: Clean light Google Map */}
            <div className="lg:col-span-6">
              <FieldMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
