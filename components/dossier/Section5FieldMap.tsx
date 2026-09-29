import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

export function Section5FieldMap() {
  return (
    <section className="space-y-3">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
        <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
          05
        </span>
        <span>Geographic Study Area: Vasai–Virar, Maharashtra</span>
      </h2>

      {/* Clean Google Map Card */}
      <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-xs">
        <div className="relative h-[320px] w-full">
          <iframe
            title="Vasai-Virar Study Zone Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Vasai-Virar,+Maharashtra,+India&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
          />
        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-700 font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            Waliv, Pelhar Road & Vasai East Aggregation Hubs (Palghar District, Maharashtra)
          </span>
          <a
            href="https://www.google.com/maps/search/Vasai-Virar,+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-700 font-semibold hover:underline"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
