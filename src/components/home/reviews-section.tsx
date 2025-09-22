import React from "react";
import { data } from "@/data/home/section-3";
import { cn } from "@/lib/utils";
import TitleContainer from "../title-container";
import ReviewCard from "./review-card";

export default function ReviewsSection() {
  return (
    <div className="relative space-y-16 lg:pb-20 pb-10" id="testimonials">
      {/* Background decorations */}
      <div className="absolute -top-20 left-1/4 h-32 w-32 rounded-full bg-green-100/20" />
      <div className="absolute right-10 top-1/3 h-20 w-20 rounded-full bg-blue-100/20" />
      <div className="absolute -bottom-16 left-1/3 h-24 w-24 rounded-full bg-yellow-100/20" />

      {/* Enhanced title container */}
      <div className="relative z-10">
        <TitleContainer
          className="w-full md:w-3/5"
          title={data.title}
          description={data.description}
        />

        {/* Stats bar */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center space-x-3 rounded-full bg-green-50 px-4 py-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-green-700">
              5.0 Rating
            </span>
          </div>

          <div className="flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm font-semibold text-blue-700">
              {data.reviews.length}+ Happy Customers
            </span>
          </div>

          <div className="flex items-center space-x-2 rounded-full bg-gray-50 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-gray-500" />
            <span className="text-sm font-semibold text-gray-700">
              Verified Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div
        className={cn(
          "relative z-10 gap-6 space-y-6 columns-1 sm:columns-2 lg:gap-8 lg:space-y-8",
          data.reviews.length < 5 && "md:columns-2",
          data.reviews.length < 3 && "md:columns-1",
          data.reviews.length >= 5 && "md:columns-3"
        )}
      >
        {data.reviews.map((review, i) => (
          <ReviewCard
            key={i}
            date={review.date}
            description={review.description}
            name={review.name}
            title={review.title}
          />
        ))}
      </div>
    </div>
  );
}
