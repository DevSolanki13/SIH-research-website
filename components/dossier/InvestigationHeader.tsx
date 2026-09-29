import React from "react";
import { ShieldCheck, MapPin, Calendar, FileText } from "lucide-react";

export function InvestigationHeader() {
  return (
    <header className="border-b border-slate-300 bg-white/95 backdrop-blur-sm sticky top-0 z-40 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left: Document Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
            B
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                BHAAV — E-Waste Research & Product Evidence
              </span>
              <span className="font-mono text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded font-semibold">
                SIH 2026
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              Vasai–Virar Field Study · Team Error 200 · 29 Sep 2026
            </div>
          </div>
        </div>

        {/* Right: Quick Jump Nav */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-600 overflow-x-auto pb-1 sm:pb-0">
          <a href="#field-spec" className="hover:text-emerald-700 hover:underline">
            1. Profile
          </a>
          <span>·</span>
          <a href="#photo-doc" className="hover:text-emerald-700 hover:underline">
            2. Evidence
          </a>
          <span>·</span>
          <a href="#ground-findings" className="hover:text-emerald-700 hover:underline">
            3. Findings
          </a>
          <span>·</span>
          <a href="#research-to-design" className="hover:text-emerald-700 hover:underline">
            4. Design
          </a>
          <span>·</span>
          <a href="#demo-video" className="hover:text-emerald-700 hover:underline font-semibold text-emerald-700">
            5. Demo
          </a>
          <span>·</span>
          <a href="#status" className="hover:text-emerald-700 hover:underline">
            6. Status
          </a>
        </nav>
      </div>
    </header>
  );
}
