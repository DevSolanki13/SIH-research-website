"use client";

import React, { useState } from "react";
import { LocalResearch } from "./LocalResearch";
import { Sources } from "./Sources";
import { BookOpen, FileCheck } from "lucide-react";

export function ResearchTabs() {
  const [activeTab, setActiveTab] = useState<"desk" | "sources">("desk");

  return (
    <section id="local-research" className="py-14 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Tabs in One Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              02 / LOCAL DESK RESEARCH & SOURCES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Wider Ecosystem & Policy Framework
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Sourced data from MPCB directory, VVCMC municipal reports, and statutory guidelines.
            </p>
          </div>

          {/* Clean Segmented Tab Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start">
            <button
              onClick={() => setActiveTab("desk")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "desk"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Desk Findings</span>
            </button>

            <button
              onClick={() => setActiveTab("sources")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "sources"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sources & Citations (7)</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panes */}
        {activeTab === "desk" ? <LocalResearch /> : <Sources />}
      </div>
    </section>
  );
}
