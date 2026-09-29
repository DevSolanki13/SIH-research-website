import React from "react";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-500 text-xs py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand & Team */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              B
            </div>
            <div>
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <span>BHAAV</span>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded font-semibold">
                  SIH 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Team Error 200 · Vasai–Virar Field Research Portal
              </p>
            </div>
          </div>

          {/* Quick Section Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            <a href="#field-visit" className="hover:text-emerald-700 transition-colors">
              Field Visit
            </a>
            <a href="#local-research" className="hover:text-emerald-700 transition-colors">
              Desk Research
            </a>
            <a href="#research-to-design" className="hover:text-emerald-700 transition-colors">
              Research → Design
            </a>
            <a href="#demo-video" className="hover:text-emerald-700 transition-colors">
              Demo & Flow
            </a>
            <a href="#product-evidence" className="hover:text-emerald-700 transition-colors">
              Evidence
            </a>
            <a href="#product-status" className="hover:text-emerald-700 transition-colors">
              Status
            </a>
          </div>

          {/* Integrity Note */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Research Integrity Verified</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <div>© 2026 Team Error 200. Built for Smart India Hackathon.</div>
          <div>Vasai–Virar, Maharashtra · 29 September 2026</div>
        </div>
      </div>
    </footer>
  );
}
