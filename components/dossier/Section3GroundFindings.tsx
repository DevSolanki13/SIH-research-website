import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function Section3GroundFindings() {
  const keyInsights = [
    {
      bold: "300–400 kg Bulk Lots:",
      text: "Informal scrap handlers accumulate bulk quantity (approx. 300–400 kg) before arranging onward sale.",
    },
    {
      bold: "0% Formal Receipts:",
      text: "Transactions are executed through verbal negotiation or paper notebooks. Neither the picker nor the intermediate merchant holds a verifiable bill.",
    },
    {
      bold: "Material Separation Before Sale:",
      text: "Materials are separated before selling to maintain grade-specific value prior to bulk price negotiation.",
    },
    {
      bold: "Real-Time Weighing Friction:",
      text: "Weighing discrepancies between seller estimates and buyer platform scales represent the primary point of friction and distrust.",
    },
    {
      bold: "Market Payout Disconnect:",
      text: "Informal sellers have zero visibility into daily Mumbai wholesale scrap benchmarks, leaving them vulnerable to arbitrary price cuts.",
    },
    {
      bold: "High Digital Readiness:",
      text: "Merchants and collectors widely operate low-cost Android phones and expressed strong readiness to adopt a simple offline receipt tool.",
    },
  ];

  return (
    <section id="ground-findings" className="space-y-3">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
        <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
          03
        </span>
        <span>Ground Visit Findings & Market Insights</span>
      </h2>

      {/* Main Report Card */}
      <div className="rounded-xl border border-slate-300 bg-white p-5 sm:p-6 shadow-xs space-y-4">
        {/* Editorial Lead Paragraph */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          During our field visit on <strong>29/09/2026 in Vasai–Virar, Maharashtra</strong>, we investigated ground realities regarding the integration of informal scrap collectors into the formal Extended Producer Responsibility (EPR) e-waste recycling ecosystem. A workable solution must focus on high adoption through a zero-barrier, low-latency, offline-first mobile system with verifiable transaction receipts.
        </p>

        {/* 6 Key Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
          {keyInsights.map((insight, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block sm:inline mr-1">
                  {insight.bold}
                </strong>
                <span>{insight.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
