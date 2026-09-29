"use client";

import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

export function FieldMap() {
  return (
    <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
      <iframe
        title="Vasai-Virar Field Research Study Area"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "340px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=Vasai-Virar,+Maharashtra,+India&t=&z=12&ie=UTF8&iwloc=&output=embed"
        className="w-full flex-1"
      />

      <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
        <span className="flex items-center gap-1.5 text-slate-700 font-medium">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          Vasai–Virar, Maharashtra
        </span>
        <a
          href="https://www.google.com/maps/search/Vasai-Virar,+Maharashtra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
        >
          <span>Open Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
