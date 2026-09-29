"use client";

import React from "react";
import { Camera, MapPin, Calendar } from "lucide-react";
import { FIELD_PHOTOS } from "@/data/observations";

export function FieldGallery() {
  const photos = FIELD_PHOTOS.slice(0, 2);

  return (
    <div className="flex flex-col gap-4 h-full">
      {photos.map((photo, idx) => (
        <div
          key={photo.id}
          className="flex-1 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/70 p-5 flex flex-col justify-between hover:border-emerald-400 hover:bg-slate-50 transition-all min-h-[160px]"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                {photo.tag} · SLOT {idx + 1}
              </span>
              <Camera className="w-4 h-4 text-slate-400" />
            </div>

            <h4 className="text-sm font-bold text-slate-900 leading-snug">
              {photo.title}
            </h4>

            <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {photo.caption}
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-600" />
              {photo.location}
            </span>
            <span>{photo.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
