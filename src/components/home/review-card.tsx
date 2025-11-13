import { format } from "date-fns";
import {
  LucideMessageCircleHeart,
  LucideQuote,
  LucideStar,
} from "lucide-react";
import React from "react";

type TProps = {
  title: string;
  description: string;
  name: string;
  date: string;
};

export default function ReviewCard({
  date,
  description,
  name,
  title,
}: Partial<TProps>) {
  return (
    <div className="group relative inline-block w-full h-f break-inside-avoid overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50/30 p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 md:p-8">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote decoration */}
      <div className="absolute -right-4 -top-4 opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110">
        <LucideQuote size={60} className="text-green-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Star rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <LucideStar
              key={i}
              size={16}
              className="fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        {/* Review title */}
        <div className="space-y-3">
          <blockquote className="relative text-lg font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-green-600">
            <span className="absolute -left-2 -top-1 text-2xl text-green-500/30">
              "
            </span>
            {title}
            <span className="absolute -bottom-2 text-2xl text-green-500/30">
              "
            </span>
          </blockquote>

          {/* Review description */}
          {description && (
            <p className="leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              {description}
            </p>
          )}
        </div>

        {/* Author info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            {/* Avatar placeholder */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-500 text-white font-bold text-sm shadow-sm">
              {name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            {/* Author details */}
            <div className="space-y-1">
              <p className="font-semibold text-gray-800">{name}</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <LucideMessageCircleHeart size={12} className="text-green-500" />
                <span>
                  {format(new Date(date || Date.now()), "MMM dd, yyyy")}
                </span>
              </div>
            </div>
          </div>

          {/* Verified badge */}
          <div className="flex items-center space-x-1 rounded-full bg-green-50 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-700">Verified</span>
          </div>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-green-100/50 to-green-100/50 opacity-0 transition-all duration-500 group-hover:opacity-100" />
    </div>
  );
}
