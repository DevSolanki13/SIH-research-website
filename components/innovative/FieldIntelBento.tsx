"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  MapPin,
  Calendar,
  CheckCircle2,
  Package,
  FileText,
  ExternalLink,
  ShieldCheck,
  Layers,
  TrendingUp,
  Smartphone,
  ZoomIn,
} from "lucide-react";
import { ResearchLocationMap } from "./ResearchLocationMap";
import { ImageLightbox, type LightboxImage } from "@/components/ui/ImageLightbox";

export function FieldIntelBento() {
  const [activePhoto, setActivePhoto] = useState<LightboxImage | null>(null);

  const quantitativeSignals = [
    {
      metric: "300–400 kg",
      label: "Bulk Accumulation",
      desc: "Informal scrap handlers accumulate bulk quantity (approx. 300–400 kg) before arranging onward sale.",
      icon: <Package className="w-4 h-4 text-emerald-600" />,
    },
    {
      metric: "No Formal Bill",
      label: "Zero Paper Records",
      desc: "Sales concluded verbally or in private diary notes; neither party holds a formal, verifiable receipt.",
      icon: <FileText className="w-4 h-4 text-amber-600" />,
    },
    {
      metric: "Material Separation",
      label: "Separation Before Sale",
      desc: "Materials are separated before selling to maintain grade-specific value prior to negotiation.",
      icon: <Layers className="w-4 h-4 text-blue-600" />,
    },
    {
      metric: "Market Linked",
      label: "Dynamic Negotiation",
      desc: "Transaction prices are negotiated in person and strongly influenced by regional scrap marketplace rates.",
      icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
    },
  ];

  const profileAttributes = [
    { key: "Target Facility", val: "Informal Scrap Aggregation Godown (Observed)" },
    { key: "Observed Batch", val: "Approximately 300–400 kg bulk accumulation lot" },
    { key: "Materials Handled", val: "General E-Waste, Appliances & Metals" },
    { key: "Documentation", val: "No formal bill or receipt observed on-site" },
    { key: "Transaction Dynamic", val: "In-person dynamic price negotiation" },
    { key: "Sales Channel", val: "Direct contacts & local intermediaries" },
  ];

  // 4 Authentic Field Photos: 1 & 3 = Field Interview, 2 & 4 = Using Bhaav
  const fieldPhotos = [
    {
      id: "photo-interview-1",
      number: 1,
      type: "interview",
      tag: "FIELD INTERVIEW",
      tagClass: "bg-emerald-50 text-emerald-900 border-emerald-300",
      title: "Field Interview — Vishwakarma Estate",
      subtitle: "Scrap Merchant Qualitative Interview",
      caption:
        "Primary on-site qualitative field interview with informal scrap merchant documenting daily aggregation, storage, and transaction practices.",
      location: "Vasai West, Maharashtra",
      gpsLocation: "Vishwakarma Estate, Vasai West (Lat 19.3883° N, Long 72.8250° E)",
      timeStr: "06:31 PM",
      date: "29-Sep-2026",
      imageSrc: "/images/field/field-interview-1.jpg",
    },
    {
      id: "photo-using-bhaav-1",
      number: 2,
      type: "using-bhaav",
      tag: "USING BHAAV",
      tagClass: "bg-indigo-50 text-indigo-900 border-indigo-300",
      title: "Using Bhaav — Merchant Trial",
      subtitle: "Mobile Interface & Flow Walkthrough",
      caption:
        "Informal scrap merchant reviewing Bhaav mobile interface and material rate estimation workflow on smartphone during field testing.",
      location: "Vasai West, Maharashtra",
      gpsLocation: "Om Nagar / Vishwakarma Estate, Vasai West (Lat 19.3883° N, Long 72.8251° E)",
      timeStr: "06:34 PM",
      date: "29-Sep-2026",
      imageSrc: "/images/field/using-bhaav-1.jpg",
    },
    {
      id: "photo-interview-2",
      number: 3,
      type: "interview",
      tag: "FIELD INTERVIEW",
      tagClass: "bg-emerald-50 text-emerald-900 border-emerald-300",
      title: "Field Interview — Navghar Manikpur",
      subtitle: "Collection & Weighing Workflow Audit",
      caption:
        "Research team investigating informal scrap collection chains, weighing procedures, and dynamic price negotiation dynamics.",
      location: "Navghar Manikpur, Vasai West",
      gpsLocation: "Navghar Manikpur, Vasai West (Lat 19.3820° N, Long 72.8263° E)",
      timeStr: "06:11 PM",
      date: "29-Sep-2026",
      imageSrc: "/images/field/field-interview-2.jpg",
    },
    {
      id: "photo-using-bhaav-2",
      number: 4,
      type: "using-bhaav",
      tag: "USING BHAAV",
      tagClass: "bg-indigo-50 text-indigo-900 border-indigo-300",
      title: "Using Bhaav — Aggregator Testing",
      subtitle: "On-Site Data Entry & Receipt Test",
      caption:
        "Local scrap aggregator testing numeric lot entry, material weight recording, and offline receipt generation on mobile device.",
      location: "Navghar Manikpur, Vasai West",
      gpsLocation: "Navghar Manikpur, Vasai West (Lat 19.3820° N, Long 72.8262° E)",
      timeStr: "06:14 PM",
      date: "29-Sep-2026",
      imageSrc: "/images/field/using-bhaav-2.jpg",
    },
  ];

  return (
    <section id="field-intel" className="space-y-6">
      {/* Research Integrity 3-Tier Taxonomy Strip */}
      <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-2xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>RESEARCH INTEGRITY TAXONOMY</span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">Strict Source Separation</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1 shrink-0" />
            <div>
              <span className="font-bold block text-emerald-900">🟢 OUR FIELD VISIT</span>
              <span className="text-[11px] text-emerald-800">
                Observed directly by Team Error 200 in Vasai–Virar (29 Sep 2026)
              </span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-950 flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 mt-1 shrink-0" />
            <div>
              <span className="font-bold block text-blue-900">🔵 LOCAL DESK RESEARCH</span>
              <span className="text-[11px] text-blue-800">
                Government & published sources (MPCB records & VVCMC ESR ~60 T/mo)
              </span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-600 mt-1 shrink-0" />
            <div>
              <span className="font-bold block text-amber-900">🟡 REFERENCE STUDY</span>
              <span className="text-[11px] text-amber-800">
                External comparative literature (clearly distinguished)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            01 / FIELD INVESTIGATION DOSSIER
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ground Realities & Aggregator Profile
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Primary field research conducted on 29 September 2026 in Vasai–Virar, Maharashtra.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-600 bg-white p-2 px-3.5 rounded-xl border border-slate-200 shadow-2xs self-start">
          <Calendar className="w-3.5 h-3.5 text-amber-600" />
          <span>29 Sep 2026 · Vasai–Virar, Maharashtra</span>
        </div>
      </div>

      {/* Bento Grid Top Tier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: 7 Columns Executive Briefing & 4 Metric Blocks */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-5">
          <div>
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Investigation Summary (Primary Field Notes)
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              During our on-site investigation in <strong>Vasai–Virar</strong>, we observed informal e-waste aggregation practices, in-person price negotiations, material segregation, and the total absence of formal transaction receipts. Transactions rely entirely on verbal agreements or private notebook jottings.
            </p>
          </div>

          {/* 4 Quantitative Signals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
            {quantitativeSignals.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-extrabold text-slate-900">
                    {item.metric}
                  </span>
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-slate-800">
                  {item.label}
                </div>
                <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 5 Columns Structured Merchant Dossier */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Facility & Node Profile
              </span>
              <span className="font-mono text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                AUDITED NODE
              </span>
            </div>

            <div className="space-y-2">
              {profileAttributes.map((attr, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between text-xs py-1.5 border-b border-slate-100 last:border-0"
                >
                  <span className="font-mono text-slate-500 shrink-0">{attr.key}:</span>
                  <span className="font-medium text-slate-800 text-right ml-2">{attr.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Team Error 200 · Ground Verified</span>
              </span>
              <span className="text-slate-400 text-[10px]">Vasai–Virar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Tier 2: Field Visit Photo Documentation — ALL 4 PHOTOS IN ONE SINGLE LINE */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Field Visit Photographic Evidence & App Testing
              </h3>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Primary photographic evidence captured on 29 September 2026 in Vasai–Virar with embedded GPS Map Camera timestamps.
            </p>
          </div>
        </div>

        {/* 4 Authentic Photos In ONE LINE (grid-cols-4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fieldPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() =>
                setActivePhoto({
                  src: photo.imageSrc,
                  title: photo.title,
                  caption: photo.caption,
                  location: photo.gpsLocation,
                  date: `${photo.date} · ${photo.timeStr}`,
                  tag: photo.tag,
                })
              }
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Header Bar */}
              <div className="p-2.5 px-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${photo.tagClass}`}
                >
                  {photo.type === "interview" ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  ) : (
                    <Smartphone className="w-2.5 h-2.5 text-indigo-600" />
                  )}
                  {photo.tag}
                </span>
                <span className="font-mono text-[10px] text-slate-500 font-semibold">
                  Photo {photo.number} · {photo.timeStr}
                </span>
              </div>

              {/* Photo Display Frame with Hover Zoom & GPS Watermark overlay */}
              <div className="relative aspect-[3/4] bg-slate-950 overflow-hidden">
                <Image
                  src={photo.imageSrc}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={photo.number <= 2}
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/95 text-slate-900 font-mono text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-emerald-600" />
                    <span>View GPS Photo</span>
                  </span>
                </div>

                {/* GPS Micro-Watermark Strip at Bottom of Image */}
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-[9.5px] font-mono text-white/90 pointer-events-none">
                  <span className="flex items-center gap-1 truncate font-medium">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Vasai West, MH</span>
                  </span>
                  <span className="bg-emerald-600/90 text-white font-bold px-1.5 py-0.2 rounded text-[8.5px]">
                    GPS CAMERA
                  </span>
                </div>
              </div>

              {/* Card Caption & Location Footer */}
              <div className="p-3.5 bg-white flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="font-bold text-xs text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {photo.title}
                  </div>
                  <p className="mt-1 text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-slate-600 font-medium">
                    <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </span>
                  <span>{photo.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full GPS Photo View */}
      <ImageLightbox image={activePhoto} onClose={() => setActivePhoto(null)} />

      {/* Full-Width Tier 3: Custom Clickable Research Map & Ecosystem Directory */}
      <ResearchLocationMap />
    </section>
  );
}
