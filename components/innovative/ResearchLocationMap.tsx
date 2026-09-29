"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MapPin, ExternalLink, Calendar, ShieldCheck, Compass, Navigation } from "lucide-react";
import type { MapLocationNode } from "./LeafletMapInner";

// Dynamically import Leaflet map with SSR disabled to prevent window/document undefined during Next.js SSR
const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full min-h-[440px] bg-slate-100 flex flex-col items-center justify-center text-slate-500 font-mono text-xs p-6 space-y-2"
      style={{ height: "480px", minHeight: "440px" }}
    >
      <Compass className="w-8 h-8 text-emerald-600 animate-spin" />
      <span>Loading OpenStreetMap Tile Layer...</span>
    </div>
  ),
});

export function ResearchLocationMap() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("bhaav-visit");

  const nodes: MapLocationNode[] = [
    {
      id: "bhaav-visit",
      name: "Bhaav Field Visit — Vasai–Virar",
      simpleName: "Bhaav Field Visit",
      type: "primary",
      subtitle: "Vasai–Virar, Maharashtra",
      date: "29 September 2026",
      category: "🟢 Primary Field Research",
      description:
        "Primary on-site field investigation conducted directly by Team Error 200. Observed bulk quantities of approximately 300–400 kg, material separation before sale, price negotiation, and transactions without formal bills.",
      sourceNote: "Observed directly by Team Error 200 on 29 Sep 2026. No synthetic GPS precision claimed.",
      lat: 19.3919,
      lng: 72.8397,
      googleMapsUrl: "https://www.google.com/maps/search/Vasai-Virar,+Maharashtra",
    },
    {
      id: "waliv",
      name: "Waliv",
      simpleName: "Waliv",
      type: "secondary",
      subtitle: "MPCB public-record location",
      category: "🔵 Secondary Desk Research",
      description:
        "E-waste recyclers and dismantlers listed in the MPCB Circular Economy Directory 2025.",
      sourceNote: "MPCB Circular Economy Directory 2025 · Public Registry Data",
      lat: 19.414,
      lng: 72.855,
      googleMapsUrl: "https://www.google.com/maps/search/Waliv,+Vasai+East,+Maharashtra",
    },
    {
      id: "pelhar",
      name: "Pelhar",
      simpleName: "Pelhar",
      type: "secondary",
      subtitle: "MPCB public-record location",
      category: "🔵 Secondary Desk Research",
      description:
        "Scrap aggregation facilities recorded in official MPCB outward consignment compliance registries.",
      sourceNote: "MPCB E-Waste Outward Registry · Public Records",
      lat: 19.432,
      lng: 72.878,
      googleMapsUrl: "https://www.google.com/maps/search/Pelhar,+Vasai,+Maharashtra",
    },
    {
      id: "vasai-east",
      name: "Vasai East",
      simpleName: "Vasai East",
      type: "secondary",
      subtitle: "MPCB public-record location",
      category: "🔵 Secondary Desk Research",
      description:
        "Transit and scrap consolidation area connecting Palghar district to Mumbai regional routes.",
      sourceNote: "MMR Regional Transport Network Baseline",
      lat: 19.38,
      lng: 72.845,
      googleMapsUrl: "https://www.google.com/maps/search/Vasai+East,+Maharashtra",
    },
    {
      id: "nalasopara",
      name: "Nalasopara",
      simpleName: "Nalasopara",
      type: "secondary",
      subtitle: "MPCB public-record location",
      category: "🔵 Secondary Desk Research",
      description:
        "Local collection network and repair shop aggregations identified in municipal waste studies.",
      sourceNote: "VVCMC Environmental Status Report (ESR) 2022–23",
      lat: 19.418,
      lng: 72.82,
      googleMapsUrl: "https://www.google.com/maps/search/Nalasopara,+Maharashtra",
    },
    {
      id: "gokhiware",
      name: "Gokhiware",
      simpleName: "Gokhiware",
      type: "secondary",
      subtitle: "MPCB public-record location",
      category: "🔵 Secondary Desk Research",
      description:
        "Material segregation and metal casting facilities identified in regional industrial records.",
      sourceNote: "Maharashtra Industrial Development Corporation (MIDC) Baseline",
      lat: 19.398,
      lng: 72.868,
      googleMapsUrl: "https://www.google.com/maps/search/Gokhiware,+Vasai,+Maharashtra",
    },
  ];

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm space-y-0">
      {/* Top Header */}
      <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              VASAI–VIRAR
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600" />
              Bhaav Field Visit & Local E-Waste Ecosystem
            </h3>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Interactive OpenStreetMap tile layer with verified field and secondary research nodes.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            🟢 Primary Field Research
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            🔵 Secondary Desk Research
          </span>
        </div>
      </div>

      {/* Main Map Body: OpenStreetMap Tile Layer + Live Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 bg-slate-50/50">
        {/* Left Column: Real OpenStreetMap Tiles via React Leaflet (8 Cols) */}
        <div
          className="lg:col-span-8 relative h-[440px] sm:h-[480px] min-h-[440px] bg-slate-100 border-r border-slate-200 overflow-hidden"
          style={{ height: "480px", minHeight: "440px" }}
        >
          <LeafletMapInner
            nodes={nodes}
            selectedNodeId={selectedNodeId}
            onSelectNode={setSelectedNodeId}
          />

          {/* Orientation Floating Badge */}
          <div className="absolute top-3 left-12 z-20 pointer-events-none bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-300 shadow-xs text-[11px] font-mono text-slate-700 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>OpenStreetMap Geography · Vasai–Virar (19.39° N, 72.84° E)</span>
          </div>
        </div>

        {/* Right Column: Live Inspector Card (4 Cols) */}
        <div
          className="lg:col-span-4 p-5 sm:p-6 bg-white flex flex-col justify-between space-y-4"
          style={{ minHeight: "440px" }}
        >
          <div className="space-y-3">
            {/* Category Pill */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span
                className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${
                  selectedNode.type === "primary"
                    ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                    : "bg-blue-50 text-blue-900 border-blue-200"
                }`}
              >
                {selectedNode.category}
              </span>
              {selectedNode.date && (
                <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-600" />
                  {selectedNode.date}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <div>
              <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                {selectedNode.name}
              </h4>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                {selectedNode.subtitle}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedNode.description}
            </p>

            {/* Integrity / Source Callout */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-[10px] font-mono uppercase font-bold text-slate-500">
                Documentation Source
              </div>
              <div className="text-xs font-mono text-slate-800 leading-snug">
                {selectedNode.sourceNote}
              </div>
            </div>
          </div>

          {/* Action: Open in Real Google Maps */}
          <div className="pt-3 border-t border-slate-100">
            <a
              href={selectedNode.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs ${
                selectedNode.type === "primary"
                  ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                  : "bg-slate-900 hover:bg-slate-800 text-white"
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open {selectedNode.simpleName} in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Tier: Local E-Waste Ecosystem Directory (Secondary Desk Research Cards) */}
      <div className="p-5 sm:p-6 bg-slate-50/70 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Local E-Waste Ecosystem (MPCB Public Records)</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Secondary Desk Research · Official Facility Registries
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {nodes
            .filter((n) => n.type === "secondary")
            .map((item) => {
              const isSelected = selectedNodeId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedNodeId(item.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between text-left ${
                    isSelected
                      ? "bg-white border-blue-500 shadow-xs ring-1 ring-blue-300"
                      : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[9px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded uppercase">
                        MPCB Listed
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </div>
                    <div className="font-bold text-xs text-slate-900 truncate">
                      {item.simpleName}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {item.subtitle}
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={item.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2.5 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-emerald-700 hover:underline font-semibold"
                  >
                    <span>View Map ↗</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
