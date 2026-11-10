import { LucideCircleDot } from "lucide-react";
import Image from "next/image";

import { GradientHeading } from "./gradient-heading";
import type { ServiceSection } from "@/types";

export function ServiceSections({ sections }: { sections?: ServiceSection[] }) {
  if (!sections?.length) return null;

  return (
    <div className="space-y-8">
      {sections.map((section, i) => (
        <section
          key={section.title ?? i}
          className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-lg lg:p-12"
        >
          {section.title && (
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 p-3">
                <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-600 to-green-600" />
              </div>
              <GradientHeading className="text-2xl lg:text-3xl">
                {section.title}
              </GradientHeading>
            </div>
          )}

          {section.image && (
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={section.image}
                alt={section.title || "Service image"}
                width={800}
                height={500}
                sizes="(min-width: 1280px) 896px, 100vw"
                className="h-64 w-full object-cover lg:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          {section.description && (
            <div className="flex gap-4">
              {section.is_list && (
                <span className="mt-2 flex-shrink-0 self-start rounded-full bg-blue-100 p-1">
                  <LucideCircleDot size={16} className="text-blue-600" />
                </span>
              )}
              <p className="text-lg leading-relaxed text-gray-700">
                {section.description}
              </p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
