"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Tag } from "lucide-react";

export interface LightboxImage {
  src: string;
  title: string;
  caption: string;
  location?: string;
  date?: string;
  tag?: string;
}

interface ImageLightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (image) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#121815] text-[#F1F3EF] border border-[#27302A] hover:bg-[#1A221E] hover:border-[#79D47C]/40 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-2xl bg-[#121815] border border-[#27302A] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-[#0B0F0D]">
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Details panel */}
            <div className="p-5 sm:p-6 bg-[#121815] border-t border-[#27302A]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  {image.tag && (
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-[#79D47C] bg-[#79D47C]/10 border border-[#79D47C]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <Tag className="w-3 h-3" />
                      {image.tag}
                    </span>
                  )}
                  <h4 className="text-lg font-bold text-[#F1F3EF]">{image.title}</h4>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#9AA39D]">
                  {image.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#79D47C]" />
                      {image.location}
                    </span>
                  )}
                  {image.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E2B45B]" />
                      {image.date}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-[#9AA39D] leading-relaxed">
                {image.caption}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
