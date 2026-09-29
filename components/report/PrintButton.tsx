"use client";

import React from "react";
import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-800 px-3 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-emerald-900 active:scale-[0.98] print:hidden"
    >
      <Printer className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Save as PDF</span>
      <span className="sm:hidden">PDF</span>
    </button>
  );
}
