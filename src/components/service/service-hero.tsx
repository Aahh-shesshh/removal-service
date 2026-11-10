import { LucideCheck, Star } from "lucide-react";
import Image from "next/image";

import PostCodeInput from "@/components/post-code-input";
import { GradientHeading } from "./gradient-heading";
import type { Service } from "@/types";
import { TRUST_BADGES } from "@/lib/trust-badge";

export function ServiceHero({ service }: { service: Service }) {
  const { page_data: page } = service;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-10 top-20 h-20 w-20 animate-pulse rounded-full bg-blue-100 opacity-40" />
        <div className="absolute bottom-32 right-16 h-16 w-16 animate-bounce rounded-full bg-green-100 opacity-30 [animation-delay:1s]" />
        <div className="absolute left-1/4 top-1/2 h-12 w-12 animate-pulse rounded-full bg-yellow-100 opacity-20 [animation-delay:2s]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col-reverse items-center justify-between gap-16 md:gap-8 lg:flex-row">
          <div className="w-full flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              <Star className="h-4 w-4 fill-current" />
              <span>Professional Service</span>
            </div>

            <div className="space-y-6">
              <GradientHeading
                as="h1"
                className="text-4xl leading-tight md:text-5xl lg:text-6xl"
              >
                {page?.hero_title ?? service.title}
              </GradientHeading>
              <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
                {page?.hero_subtitle}
              </p>
            </div>

            <PostCodeInput />

            <ul className="mx-auto max-w-2xl space-y-4 text-left lg:mx-0">
              {page?.list?.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <span className="mt-1 rounded-full bg-green-100 p-1">
                    <LucideCheck className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-lg font-medium text-gray-700">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-4">
              {TRUST_BADGES.map(({ icon: Icon, title, subtitle, color }) => (
                <li
                  key={title}
                  className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm"
                >
                  <Icon className={`h-5 w-5 ${color}`} />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {title}
                    </div>
                    <div className="text-xs text-gray-600">{subtitle}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 p-1">
                <div className="rounded-3xl bg-white p-2">
                  <Image
                    src={page?.image || "/removal-pics/onboarding.jpg"}
                    alt={service.title}
                    width={500}
                    height={500}
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="h-[400px] w-full rounded-2xl object-cover shadow-2xl md:h-[500px]"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                <div className="text-lg font-bold text-green-600">Expert</div>
                <div className="text-xs text-gray-600">Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
