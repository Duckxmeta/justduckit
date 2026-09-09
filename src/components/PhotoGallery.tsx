"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Download, Maximize2, Sparkles, Camera } from "lucide-react";
import type { DDNYCPhoto } from "@/lib/ddnyc-photos";

interface PhotoGalleryProps {
  photos: DDNYCPhoto[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
  }, [selectedIndex, photos.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + photos.length) % photos.length
    );
  }, [selectedIndex, photos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  const currentPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      {/* Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            }}
          >
            <Image
              src={photo.src}
              alt={`DDNYC 2026 photo ${photo.title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Hover overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-primary bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-primary/20">
                  {photo.title}
                </span>
                <span className="p-1.5 rounded-full bg-primary text-black">
                  <Maximize2 className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && currentPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-0 inset-x-0 flex items-center justify-between p-4 sm:p-6 z-10 bg-gradient-to-b from-black/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-semibold">
                {selectedIndex + 1} / {photos.length}
              </span>
              <span className="text-sm font-semibold text-foreground hidden sm:inline-block">
                {currentPhoto.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={currentPhoto.src}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="p-2.5 rounded-full bg-white/10 text-foreground hover:bg-white/20 transition-colors"
                title="Download photo"
              >
                <Download className="h-5 w-5" />
              </a>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 text-foreground hover:bg-primary hover:text-black transition-colors"
                title="Close viewer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Image Container */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentPhoto.src}
              alt={`DDNYC 2026 photo ${currentPhoto.title}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Left / Right Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-foreground border border-white/10 hover:bg-primary hover:text-black transition-all z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-foreground border border-white/10 hover:bg-primary hover:text-black transition-all z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Bottom Bar Info */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-10 hidden sm:block"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs font-mono text-muted-foreground bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              Use &larr; and &rarr; arrow keys to navigate
            </p>
          </div>
        </div>
      )}
    </>
  );
}
