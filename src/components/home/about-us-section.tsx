import {
  LucideChevronsRight,
  LucideUsers,
  LucideAward,
  LucideMapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { data } from "@/data/home/section-5";
import TitleContainer from "../title-container";
import { Button } from "../ui/button";

export default function AboutUsSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-100/30" />
      <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-green-100/30" />

      <div className="relative z-10 flex flex-col items-stretch gap-8 lg:flex-row lg:gap-16">
        {/* Content Side */}
        <div className="w-full space-y-8 lg:w-3/5">
          <TitleContainer
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
          />

          {/* Team highlights */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              Meet Our Expert Team
            </h3>

            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="group rounded-xl bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <LucideUsers size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Expert Team</p>
                    <p className="font-bold text-gray-800">15+ Professionals</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <LucideAward size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-bold text-gray-800">5+ Years</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <LucideMapPin size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Coverage</p>
                    <p className="font-bold text-gray-800">Australia Wide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team description */}
            <div className="space-y-4 rounded-xl bg-white/40 p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-gray-800">
                Why Choose Our Team?
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>Fully trained and insured professionals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span>Background-checked and reliable staff</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span>Dedicated customer service support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span>Latest equipment and eco-friendly methods</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action button */}
          <div className="flex justify-start">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group hover:bg-green-50"
            >
              <Link
                href={data.link.url}
                className="flex items-center space-x-3"
              >
                <span className="sr-only">Learn more about us by clicking</span>
                <span>{data.link.label}</span>
                <LucideChevronsRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={16}
                />
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-[45%]">
          <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
            {/* Image container with modern styling */}
            <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 shadow-xl">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/removal-pics/members.jpg"
                  alt="Our Professional Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Team badge */}
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-gray-800">
                    Team Available
                  </span>
                </div>
              </div>

              {/* Rating badge */}
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-bold text-gray-800">5.0</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-3 w-3 rounded-full bg-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
