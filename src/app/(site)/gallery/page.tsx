"use client";
import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { gallery_images } from "@/data/constants";



const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % gallery_images.length);
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + gallery_images.length) % gallery_images.length,
    );
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, goNext, goPrev]);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const markLoaded = (i: number) =>
    setLoaded((prev) => ({ ...prev, [i]: true }));

  return (
    <>
      <main className="min-h-screen ">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-green-700 font-medium">
              GALLERY
            </span>
            {/* <h1
              className="text-3xl md:text-6xl font-bold leading-none"
              style={{
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.02em",
              }}
            >
              Gallery
            </h1> */}
            <p className="text-gray-00 text-base mt-2 max-w-md">
              Every move, captured. Browse through our real jobs — packing,
              loading, and settling into new spaces.
            </p>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-green-500/40 via-white/10 to-transparent" />
        </div>

        {/* Masonry Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="masonry-grid">
            {gallery_images.map((image, index) => (
              <div
                key={index}
                className="group relative mb-3 cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-[#1a1a1a]"
                style={{
                  animationDelay: `${(index % 12) * 40}ms`,
                }}
                onClick={() => openModal(index)}
              >
                {/* Skeleton shimmer while loading */}
                {!loaded[index] && (
                  <div
                    className="w-full bg-[#222] animate-pulse"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                )}

                <img
                  src={image.src}
                  alt={image.alt}
                  onLoad={() => markLoaded(index)}
                  className={`w-full h-auto block transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-90 ${
                    loaded[index] ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2.5">
                      <ZoomIn size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Index badge */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] text-white/60 bg-black/50 px-1.5 py-0.5 rounded font-mono">
                    {index + 1}/{gallery_images.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full p-2 transition-all duration-200"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono tabular-nums">
            {selectedIndex + 1} / {gallery_images.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full p-3 transition-all duration-200 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[88vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={selectedIndex}
              src={gallery_images?.[selectedIndex]?.src}
              alt={gallery_images[selectedIndex]?.alt}
              className="max-w-[90vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
              style={{
                animation: "modalFadeIn 0.25s ease-out",
              }}
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full p-3 transition-all duration-200 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-[80vw] overflow-x-auto pb-1 px-2 scrollbar-none">
            {gallery_images.map((img, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(i);
                }}
                className={`flex-shrink-0 w-10 h-10 rounded overflow-hidden border-2 transition-all duration-200 ${
                  i === selectedIndex
                    ? "border-amber-400 scale-110"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
