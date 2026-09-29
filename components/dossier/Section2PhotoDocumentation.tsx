import React from "react";
import Image from "next/image";
import { Users, Smartphone, MapPin } from "lucide-react";

export function Section2PhotoDocumentation() {
  const cards = [
    {
      id: "photo-1",
      number: 1,
      tag: "FIELD INTERVIEW",
      icon: <Users className="w-3.5 h-3.5" />,
      tagColor: "bg-emerald-50 text-emerald-900 border-emerald-300",
      title: "Field Interview — Vishwakarma Estate",
      caption:
        "Primary on-site qualitative interview with informal scrap merchant documenting daily aggregation, storage, and transaction practices.",
      location: "Vasai West, Maharashtra",
      time: "06:31 PM",
      date: "29-09-2026",
      imageSrc: "/images/field/field-interview-1.jpg",
    },
    {
      id: "photo-2",
      number: 2,
      tag: "USING BHAAV",
      icon: <Smartphone className="w-3.5 h-3.5 text-indigo-600" />,
      tagColor: "bg-indigo-50 text-indigo-900 border-indigo-300",
      title: "Using Bhaav — Merchant Trial",
      caption:
        "Informal scrap merchant reviewing Bhaav mobile interface and material rate estimation workflow on smartphone during field testing.",
      location: "Vasai West, Maharashtra",
      time: "06:34 PM",
      date: "29-09-2026",
      imageSrc: "/images/field/using-bhaav-1.jpg",
    },
    {
      id: "photo-3",
      number: 3,
      tag: "FIELD INTERVIEW",
      icon: <Users className="w-3.5 h-3.5" />,
      tagColor: "bg-emerald-50 text-emerald-900 border-emerald-300",
      title: "Field Interview — Navghar Manikpur",
      caption:
        "Research team investigating informal scrap collection chains, weighing procedures, and dynamic price negotiation dynamics.",
      location: "Vasai West, Maharashtra",
      time: "06:11 PM",
      date: "29-09-2026",
      imageSrc: "/images/field/field-interview-2.jpg",
    },
    {
      id: "photo-4",
      number: 4,
      tag: "USING BHAAV",
      icon: <Smartphone className="w-3.5 h-3.5 text-indigo-600" />,
      tagColor: "bg-indigo-50 text-indigo-900 border-indigo-300",
      title: "Using Bhaav — Aggregator Testing",
      caption:
        "Local scrap aggregator testing numeric lot entry, material weight recording, and offline receipt generation on mobile device.",
      location: "Vasai West, Maharashtra",
      time: "06:14 PM",
      date: "29-09-2026",
      imageSrc: "/images/field/using-bhaav-2.jpg",
    },
  ];

  return (
    <section id="photo-doc" className="space-y-4">
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
          <span className="font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-xs">
            02
          </span>
          <span>Field Visit Photographic Evidence & Mobile App Testing</span>
        </h2>
        <span className="font-mono text-xs text-slate-500">
          29 Sep 2026 · Vasai–Virar, Maharashtra
        </span>
      </div>

      {/* 4 Photo Cards in ONE ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs flex flex-col justify-between"
          >
            {/* Top Bar with Badge */}
            <div className="p-2 px-3 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
              <span
                className={`inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${card.tagColor}`}
              >
                {card.icon}
                {card.tag}
              </span>
              <span className="font-mono text-[10px] text-slate-500 font-semibold">
                Photo {card.number} · {card.time}
              </span>
            </div>

            {/* Real Photo Frame */}
            <div className="relative aspect-[3/4] bg-slate-950 overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-[9.5px] font-mono text-white/90">
                <span className="flex items-center gap-1 truncate font-medium">
                  <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Vasai West, MH</span>
                </span>
                <span className="bg-emerald-600/90 text-white font-bold px-1.5 py-0.2 rounded text-[8.5px]">
                  GPS CAMERA
                </span>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="p-3 text-xs text-slate-600 leading-relaxed bg-white flex-1 flex flex-col justify-between space-y-2">
              <div>
                <div className="font-bold text-xs text-slate-900 mb-1">
                  {card.title}
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-3 leading-relaxed">
                  {card.caption}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>{card.location}</span>
                <span>{card.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
