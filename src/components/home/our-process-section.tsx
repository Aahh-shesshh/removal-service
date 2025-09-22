import React from "react";
import { data } from "@/data/home/section-2";
import TitleContainer from "../title-container";

export default function OurProcessSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 shadow-lg md:p-16">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-100/50" />
      <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-green-100/50" />

      <div className="relative flex flex-col items-stretch justify-between gap-12 md:flex-row">
        <TitleContainer
          subtitle={data.subtitle}
          title={data.title}
          description={data.description}
          className="md:w-2/5"
        />

        <div className="md:w-1/2">
          <div className="relative">
            <ul className="space-y-6">
              {data.list.map((item, i) => (
                <li key={i} className="group relative flex gap-6 md:gap-8">
                  {/* Step number with enhanced styling */}
                  <div className="relative z-10 flex aspect-square size-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-700 font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <span className="text-lg">{i + 1}</span>
                  </div>

                  {/* Connecting line with improved styling */}
                  {i + 1 !== data.list.length && (
                    <div className="absolute left-6 top-12 h-full w-[3px] bg-gradient-to-b from-green-600 to-green-300 opacity-30" />
                  )}

                  {/* Content with enhanced styling */}
                  <div className="flex-1 space-y-3 rounded-lg bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-white/80 group-hover:shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Success indicator */}
            <div className="mt-8 flex items-center justify-center gap-3 rounded-full bg-green-50 px-6 py-3 shadow-sm">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-green-700">
                Simple & Stress-Free Process
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
