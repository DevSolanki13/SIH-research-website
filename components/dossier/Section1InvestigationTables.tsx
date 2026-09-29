import React from "react";

export function Section1InvestigationTables() {
  const investigationDetails = [
    { field: "Visit Date", details: "29 September 2026" },
    {
      field: "Investigation Focus",
      details: "E-Waste Informal Integration & EPR Traceability",
    },
    {
      field: "Location Coordinates",
      details: "Vasai–Virar, Maharashtra",
    },
    {
      field: "Target Supply Tier",
      details: "Small Aggregator & Informal Scrap Godown",
    },
    {
      field: "Transaction Method",
      details: "In-Person Bargaining & Direct Settlement",
    },
    {
      field: "Compliance Status",
      details: "0% Formal Bills / Unrecorded Paper Diaries",
    },
  ];

  const merchantProfile = [
    { property: "Entity Category", details: "Informal Scrap Aggregation Godown" },
    {
      property: "Primary Materials",
      details: "PCBs, Copper Wiring, Appliances, Ferrous Scrap",
    },
    {
      property: "Observed Batch Volume",
      details: "300–400 kg accumulated lots before sale",
    },
    {
      property: "Supplier Network",
      details: "Door-to-door scrap pickers & repair shops",
    },
    {
      property: "Holding Period",
      details: "Accumulates 2–3 weeks before bulk transit",
    },
    {
      property: "Platform Readiness",
      details: "Confirmed High Willingness to Adopt Offline App",
    },
  ];

  return (
    <section id="field-spec" className="space-y-3">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
        <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
          01
        </span>
        <span>Field Investigation Specifications & Merchant Profile</span>
      </h2>

      {/* Two Side-by-Side Clean Data Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Table 1: Investigation Details */}
        <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-xs">
          <div className="bg-[#1E293B] text-white px-4 py-2.5 flex items-center justify-between font-mono text-xs font-bold tracking-wider uppercase">
            <span>Investigation Details</span>
            <span className="text-[10px] text-slate-300 font-normal">Primary Field Data</span>
          </div>

          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-mono uppercase text-slate-500">
                <th className="py-2 px-3 w-2/5 font-semibold">Field</th>
                <th className="py-2 px-3 w-3/5 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {investigationDetails.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2 px-3 font-semibold text-slate-700 bg-slate-50/30">
                    {row.field}
                  </td>
                  <td className="py-2 px-3 text-slate-800">
                    {row.field === "Compliance Status" ? (
                      <span className="text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        {row.details}
                      </span>
                    ) : (
                      row.details
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2: Facility & Merchant Profile */}
        <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-xs">
          <div className="bg-[#047857] text-white px-4 py-2.5 flex items-center justify-between font-mono text-xs font-bold tracking-wider uppercase">
            <span>Facility & Merchant Profile</span>
            <span className="text-[10px] text-emerald-100 font-normal">Ground Reality</span>
          </div>

          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-mono uppercase text-slate-500">
                <th className="py-2 px-3 w-2/5 font-semibold">Property</th>
                <th className="py-2 px-3 w-3/5 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {merchantProfile.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2 px-3 font-semibold text-slate-700 bg-slate-50/30">
                    {row.property}
                  </td>
                  <td className="py-2 px-3 text-slate-800">
                    {row.property === "Platform Readiness" ? (
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {row.details}
                      </span>
                    ) : (
                      row.details
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
