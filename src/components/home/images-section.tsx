"use client";
import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Images } from "lucide-react";
import { gallery_images } from "@/data/constants";
import Link from "next/link";

const VISIBLE_COUNT = 4;

const ImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = gallery_images.length;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSlides]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSlides]);

  const getVisibleImages = () => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
      const imageIndex = (currentIndex + i) % totalSlides;
      return { ...gallery_images[imageIndex], originalIndex: imageIndex };
    });
  };

  const visibleImages = getVisibleImages();

  // Dots: total possible "pages"
  const totalDots = Math.min(totalSlides, 8);

  return (
    <section className="pb-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-green-800 uppercase  mb-3">
            Our Portfolio
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Moves Done Right, <span className="text-green-700">Every Time</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            A glimpse into our work — careful packing, secure transport, and
            smooth setups across homes and offices.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Image Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 transition-opacity duration-500`}
          >
            {visibleImages.map((image, index) => (
              <div
                key={`${image.originalIndex}-${currentIndex}`}
                className="group aspect-square overflow-hidden rounded-xl shadow-sm ring-1 ring-green-200 hover:ring-green-300 transition-all duration-300"
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-600 p-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous images"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-600 p-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next images"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
              }}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex % totalDots
                  ? "bg-green-500 w-6 h-2"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center mt-10 gap-2">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <Images size={17} />
            <span>View Full Gallery</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <p className="text-xs text-gray-400">
            {gallery_images.length}+ photos from real moves
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
