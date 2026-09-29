"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, MapPin } from "lucide-react";
import { ImageLightbox, type LightboxImage } from "@/components/ui/ImageLightbox";
import { photos, visit } from "@/data/fieldVisit";

export function PhotoEvidence() {
  const [open, setOpen] = useState<LightboxImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((p, i) => (
          <figure key={p.src} className="flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
            <button
              type="button"
              onClick={() =>
                setOpen({
                  src: p.src,
                  title: `Figure ${i + 1}: ${p.tag}`,
                  caption: p.caption,
                  location: p.place,
                  date: `${visit.dateLabel}, ${p.time}`,
                  tag: p.tag,
                })
              }
              className="group relative block aspect-[3/4] w-full overflow-hidden bg-slate-100"
              aria-label={`Zoom figure ${i + 1}: ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(min-width: 1024px) 230px, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute left-2 top-2 rounded-md bg-slate-900/85 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                {p.tag}
              </span>
              <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-[10px] font-semibold text-slate-800 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <ZoomIn className="h-3 w-3" />
                Click to zoom
              </span>
            </button>
            <figcaption className="flex flex-1 flex-col gap-1.5 p-3 text-xs leading-snug text-slate-600">
              <span>
                <strong className="text-slate-900">Figure {i + 1}:</strong> {p.caption}
              </span>
              <span className="mt-auto inline-flex items-start gap-1 font-mono text-[10.5px] text-emerald-800">
                <MapPin className="mt-px h-3 w-3 shrink-0" />
                {p.place} · {p.time}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ImageLightbox image={open} onClose={() => setOpen(null)} />
    </>
  );
}
