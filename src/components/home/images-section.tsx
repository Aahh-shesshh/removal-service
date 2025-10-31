"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gallery_images } from "@/data/constants";

const ImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gallery_images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gallery_images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Create array of 4 images to show, handling circular display
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 4; i++) {
      const imageIndex = (currentIndex + i) % gallery_images.length;
      visibleImages.push({
        ...gallery_images[imageIndex],
        originalIndex: imageIndex,
      });
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our professional team in action, handling your belongings with
            care and expertise
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative overflow-hidden">
          {/* Image Grid Display */}
          <div className="relative">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(0px)`, // Keep at 0 since we're managing visible images
              }}
            >
              {visibleImages.map((image, index) => (
                <div
                  key={`${image.originalIndex}-${currentIndex}-${index}`}
                  className="aspect-square overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(0px)`,
                    opacity: 1,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
