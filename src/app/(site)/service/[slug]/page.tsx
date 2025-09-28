import {
  LucideCheck,
  LucideCircleDot,
  Star,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import Breadcrumb from "@/components/breadcrumb";
import ContactForm from "@/components/contact-us/contact-form";
import PostCodeInput from "@/components/post-code-input";
import ReceiveQuotesForYourMove from "@/components/service/receive-quotes-for-your-move";
import RelatedServices from "@/components/service/related-services";
import {
  COMPANY_NAME,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  SITE_URL,
} from "@/data/constants";
import { data } from "@/data/services";
import { generateKeywords } from "@/lib/utils";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Keep your existing generateMetadata function as is
export async function generateMetadata(
  { params: { slug } }: P,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = data.list?.find((item) => item.slug === slug);

  const {
    abstract,
    description,
    openGraph,
    title,
    twitter,
    other,
    "apple-touch-icon-precomposed": a,
    "apple-touch-fullscreen": b,
    viewport: c,
    themeColor,
    colorScheme,
    ...rest
  } = await parent;

  return {
    ...rest,
    appleWebApp: undefined,
    other: other || {},
    alternates: {
      canonical: `${SITE_URL}/service/${slug}`,
    },
    title: service?.title || title,
    publisher: "Aarambha IT Research Center",
    keywords: generateKeywords(service?.overview || service?.description || ""),
    abstract: service?.overview || abstract,
    authors: [
      {
        name: "Aakash Acharya",
        url: "https://aakashacharya.com.np/",
      },
    ],
    category: "Service",
    classification: "Removal Service",
    creator: "Aakash Acharya",
    generator: "Next.js",
    robots: "index, follow",
    verification: {
      google: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    description: service?.overview || service?.description || description,
    twitter: {
      card: "summary_large_image",
      title: `${service?.title} - ${COMPANY_NAME}`,
      description:
        service?.overview || service?.description || description || "",
      images: service?.images || twitter?.images,
    },
    openGraph: {
      title: `${service?.title} - ${COMPANY_NAME}`,
      description:
        service?.overview || service?.description || description || "",
      images: service?.images || openGraph?.images,
      type: "article",
      url: `${SITE_URL}/service/${slug}`,
    },
    applicationName: COMPANY_NAME,
  };
}

export default function Service({ params: { slug } }: P) {
  const service = data.list?.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <div className="bg-gray-50/50">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-10">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
          <div
            className="absolute bottom-32 right-16 w-16 h-16 bg-green-100 rounded-full opacity-30 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-100 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse items-center justify-between gap-16 md:gap-8 lg:flex-row">
            <div className="w-full flex-1 space-y-8 text-center lg:text-left">
              {/* Service Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Professional Service</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {service.page_data?.hero_title}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {service.page_data?.hero_subtitle}
                </p>
              </div>

              <PostCodeInput />

              {/* Enhanced Feature List */}
              <ul className="space-y-4 text-left max-w-2xl mx-auto lg:mx-0">
                {service.page_data?.list?.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white transition-colors shadow-sm"
                  >
                    <div className="p-1 bg-green-100 rounded-full mt-1">
                      <LucideCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      Insured
                    </div>
                    <div className="text-xs text-gray-600">$2M Coverage</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      24/7
                    </div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                  <Star className="w-5 h-5 text-yellow-600 fill-current" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      5-Star
                    </div>
                    <div className="text-xs text-gray-600">Rated</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                  <Award className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      Licensed
                    </div>
                    <div className="text-xs text-gray-600">Professional</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="w-full lg:w-2/5">
              <div className="relative">
                <div className="relative p-1 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-3xl">
                  <div className="bg-white p-2 rounded-3xl">
                    <Image
                      src={
                        service.page_data?.image ||
                        "/removal-pics/onboarding.jpg"
                      }
                      alt={service.title}
                      width={500}
                      height={500}
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                  <div className="text-lg font-bold text-green-600">Expert</div>
                  <div className="text-xs text-gray-600">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumb />

      {/* Enhanced Main Content */}
      <div className="container mx-auto px-6 relative space-y-16 pb-16">
        <div className="flex flex-col gap-12 xl:flex-row">
          <div className="space-y-12 py-12 xl:max-w-4xl">
            {/* Service Title Section */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                {service.title}
              </h1>

              {/* Enhanced Quote Section */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 p-6 lg:p-8 border border-green-500 mb-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-green-200 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-green-600 mb-4">
                    <FaQuoteLeft />
                  </div>
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium italic">
                    {service.overview}
                  </blockquote>
                  <div className="text-4xl flex items-end justify-end text-end text-green-600 mb-4">
                    <FaQuoteRight />
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Enhanced Sections */}
            <div className="space-y-8">
              {service.page_data?.sections?.map((section, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
                >
                  <div className="space-y-6">
                    {section.title && (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-green-600 rounded"></div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                          {section.title}
                        </h2>
                      </div>
                    )}

                    {section.image && (
                      <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
                        <Image
                          src={section.image}
                          alt={section.title || "Service image"}
                          width={800}
                          height={500}
                          className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    )}

                    {section.description && (
                      <div className="flex gap-4">
                        {section.is_list && (
                          <div className="flex-shrink-0 mt-2">
                            <div className="p-1 bg-blue-100 rounded-full">
                              <LucideCircleDot
                                size={16}
                                className="text-blue-600"
                              />
                            </div>
                          </div>
                        )}
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form stays as is */}
          <ContactForm selected_service={service.id} />
        </div>

        {/* These components stay as is - you'll update them separately */}
        <ReceiveQuotesForYourMove />
        <RelatedServices except={service.id} />
      </div>
    </div>
  );
}
