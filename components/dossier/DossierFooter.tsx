import React from "react";
import { ShieldCheck } from "lucide-react";

export function DossierFooter() {
  return (
    <footer className="border-t border-slate-300 bg-white py-6 text-xs text-slate-500 font-mono mt-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span className="font-bold text-slate-800">
            Team Error 200 · Smart India Hackathon 2026
          </span>
        </div>
        <div>
          Primary Field Research: Vasai–Virar, Maharashtra · 29 Sep 2026
        </div>
      </div>
    </footer>
  );
}
