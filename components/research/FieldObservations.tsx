import React from "react";
import { FIELD_OBSERVATIONS } from "@/data/observations";
import { StatusBadge } from "../ui/StatusBadge";

export function FieldObservations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {FIELD_OBSERVATIONS.map((obs) => (
        <div
          key={obs.id}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <StatusBadge status="FIELD OBSERVATION" size="sm" />
              <span className="font-mono text-[10px] text-slate-400 uppercase">
                {obs.category}
              </span>
            </div>

            {obs.metric && (
              <div className="font-mono text-2xl font-black text-emerald-700 mb-1">
                {obs.metric}
              </div>
            )}

            <h4 className="text-sm font-bold text-slate-900 leading-snug">
              {obs.finding}
            </h4>

            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {obs.description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>{obs.location}</span>
            <span>{obs.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
