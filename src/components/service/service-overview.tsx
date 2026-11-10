import { Quote } from "lucide-react";

import { GradientHeading } from "./gradient-heading";
import type { Service } from "@/types";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg lg:p-12">
      {/* The hero already has the h1, so this is an h2 */}
      <GradientHeading className="mb-6 text-3xl lg:text-4xl">
        {service.title}
      </GradientHeading>

      {service.overview && (
        <div className="relative mb-8 overflow-hidden rounded-2xl border border-green-500 bg-gradient-to-br from-blue-100 to-green-100 p-6 lg:p-8">
          <div
            aria-hidden
            className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-gradient-to-br from-blue-200 to-green-200 opacity-30"
          />
          <div className="relative z-10">
            <Quote aria-hidden className="mb-4 h-8 w-8 text-green-600" />
            <p className="text-lg font-medium italic leading-relaxed text-gray-700 lg:text-xl">
              {service.overview}
            </p>
          </div>
        </div>
      )}

      <p className="text-lg leading-relaxed text-gray-700">
        {service.description}
      </p>
    </section>
  );
}
