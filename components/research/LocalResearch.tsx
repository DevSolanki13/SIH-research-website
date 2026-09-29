import React from "react";
import { LOCAL_RESEARCH_CARDS } from "@/data/research";
import { StatusBadge } from "../ui/StatusBadge";
import { ExternalLink, FileText } from "lucide-react";

export function LocalResearch() {
  const cards = LOCAL_RESEARCH_CARDS.slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                CARD {card.cardCode}
              </span>
              <StatusBadge status={card.badge} size="sm" />
            </div>

            {card.metric && (
              <div className="font-mono text-2xl font-black text-blue-700 mb-1">
                {card.metric}
              </div>
            )}

            <h4 className="text-sm font-bold text-slate-900 leading-snug">
              {card.title}
            </h4>

            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              {card.summary}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="truncate max-w-[220px]">{card.sourceLabel}</span>
            {card.sourceUrl ? (
              <a
                href={card.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 hover:underline font-semibold"
              >
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span>{card.date}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
