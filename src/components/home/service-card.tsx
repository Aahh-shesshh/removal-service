import { LucideChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import type { IconType } from "react-icons/lib";

type TProps = {
  icon: IconType;
  title: string;
  overview?: string;
  number: number;
  slug: string;
};

export default function ServiceCard({
  overview,
  title,
  icon: Icon, // Rename to Icon with capital letter for JSX usage
  number,
  slug,
}: TProps) {
  return (
    <div className="group border h-full border-green-400 relative inline-block w-full break-inside-avoid overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50/50 p-6 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 md:p-8">
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Service number badge */}
      <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
        <span className="font-bold">{number.toString().padStart(2, "0")}</span>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Icon container */}
        <div className="group flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 p-4 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
          <Icon className="w-10 h-10 text-green-600 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-green-600 md:text-2xl">
          {title}
        </h3>

        {/* Overview */}
        {overview && (
          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 md:text-base">
            {overview}
          </p>
        )}

        {/* Learn more button */}
        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-600">
              Available
            </span>
          </div>

          <Button asChild variant="link" className="group/btn p-0 h-auto">
            <Link
              href={`/service/${slug}`}
              className="flex items-center space-x-2 bg-green-500 text-white p-2  transition-colors duration-300 "
            >
              <span className="sr-only">
                Learn more about {title} by clicking
              </span>
              <span className="font-medium">Learn more</span>
              <LucideChevronsRight
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-8 -right-8 h-16 w-16 rounded-full bg-gradient-to-br from-blue-100/50 to-green-100/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
