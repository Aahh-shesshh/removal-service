import { LucideChevronsRight, LucideArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

import { data } from "@/data/services";

import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type TProps = {
  except: number;
};

export default function RelatedServices({ except }: TProps) {
  const relatedServices = data.list?.filter((item) => item.id !== except);

  return (
    <div className="space-y-12 py-16 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Related Services
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full ml-4" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our other professional services to meet all your needs
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {relatedServices?.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="group relative h-full">
                    {/* Main Card */}
                    <div className="h-full border border-green-200/60 relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
                      {/* Background gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Service number badge */}
                      <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md text-sm font-bold">
                        {(i + 1).toString().padStart(2, "0")}
                      </div>

                      {/* Content */}
                      <div className="relative z-10 space-y-4 h-full flex flex-col">
                        {/* Icon placeholder - you can add actual icons here */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-green-600 line-clamp-2">
                          {item.title}
                        </h3>

                        {/* Overview - if available */}
                        {item.overview && (
                          <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 flex-grow">
                            {item.overview}
                          </p>
                        )}

                        {/* Bottom section */}
                        <div className="flex justify-between items-center pt-4 mt-auto border-t border-gray-100">
                          <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-xs font-medium text-green-600">
                              Available
                            </span>
                          </div>

                          <Button
                            asChild
                            variant="link"
                            className="group/btn p-0 h-auto"
                          >
                            <Link
                              href={`/service/${item.slug}`}
                              className="flex items-center space-x-1 text-green-600 transition-colors duration-300 hover:text-green-700"
                            >
                              <span className="font-medium text-sm">
                                View Details
                              </span>
                              <LucideChevronsRight
                                size={14}
                                className="transition-transform duration-300 group-hover/btn:translate-x-1"
                              />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-green-100/50 to-green-200/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="left-0 bg-white/90 border-green-200 hover:bg-green-50 hover:border-green-300 text-green-600 shadow-lg" />
            <CarouselNext className="right-0 bg-white/90 border-green-200 hover:bg-green-50 hover:border-green-300 text-green-600 shadow-lg" />
          </Carousel>
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
          >
            <Link href="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <LucideArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
