import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Section4ResearchToDesign() {
  const mappings = [
    {
      obs: "No Formal Bill (Zero Paper Records)",
      solution: "Signed Digital Receipt",
      mechanism:
        "Every transaction generates an offline tamper-evident receipt with SHA-256 hash & dual signatures.",
      status: "BUILT",
    },
    {
      obs: "In-Person Price Bargaining",
      solution: "Cryptographic Rate Lock",
      mechanism:
        "Accepted price per kg is digitally locked on the device, preventing silent downstream cuts.",
      status: "BUILT",
    },
    {
      obs: "Platform Scale Disputes",
      solution: "Dual Weight Check",
      mechanism:
        "Collector estimate and buyer scale readout are verified with a 5% tolerance gate.",
      status: "BUILT",
    },
    {
      obs: "Small Micro-Collections (5–20 kg)",
      solution: "Bhaav Point Consolidation",
      mechanism:
        "Partner scrap shops pool small daily lots into 300–400 kg bulk shipments.",
      status: "BUILT",
    },
    {
      obs: "Tax & Compliance Paperwork Overhead",
      solution: "Pooling + Auto Batch Manifest",
      mechanism:
        "Consolidates dozens of micro-receipts into 1 single CPCB/GST-ready invoice.",
      status: "BUILDING",
    },
    {
      obs: "No Traceability to Recycling",
      solution: '"Reached" Recycler Status Line',
      mechanism:
        "Collector receives automated confirmation when material reaches the certified smelter.",
      status: "BUILT",
    },
  ];

  return (
    <section id="research-to-design" className="space-y-3">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
        <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
          04
        </span>
        <span>Research → Design Decisions: What We Saw vs What We Built</span>
      </h2>

      {/* 3-Actor Chain Banner */}
      <div className="rounded-xl border border-slate-300 bg-white p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[10px]">
            1
          </span>
          <span className="font-bold text-slate-900">COLLECTOR</span>
          <span className="text-slate-500">(Door-to-door scrap pickers)</span>
        </div>
        <ArrowRight className="hidden sm:block w-4 h-4 text-slate-400" />
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-[10px]">
            2
          </span>
          <span className="font-bold text-slate-900">BHAAV POINT</span>
          <span className="text-slate-500">(Scrap shops pool micro-lots)</span>
        </div>
        <ArrowRight className="hidden sm:block w-4 h-4 text-slate-400" />
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">
            3
          </span>
          <span className="font-bold text-slate-900">AUTHORISED RECYCLER</span>
          <span className="text-slate-500">(CPCB certified smelter)</span>
        </div>
      </div>

      {/* Mapping Table */}
      <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-xs">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100 text-[10px] font-mono uppercase text-slate-600">
              <th className="py-2.5 px-3.5 w-1/3 font-semibold">What We Observed</th>
              <th className="py-2.5 px-3.5 w-1/3 font-semibold">What We Built In Bhaav</th>
              <th className="py-2.5 px-3.5 w-1/3 font-semibold">Implementation Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mappings.map((m, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-2.5 px-3.5 font-medium text-slate-700 bg-slate-50/40">
                  {m.obs}
                </td>
                <td className="py-2.5 px-3.5 text-slate-900">
                  <div className="font-bold text-emerald-700">{m.solution}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{m.mechanism}</div>
                </td>
                <td className="py-2.5 px-3.5 font-mono">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                      m.status === "BUILT"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {m.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
