import React from "react";
import {
  CheckCircle,
  Users,
  Shield,
  Star,
  TrendingUp,
  Heart,
  MapPin,
} from "lucide-react";
import { data } from "@/data/about-us";
import { BUSINESS } from "@/data/business-info";
import Facebook from "@/components/facebook";
import Instagram from "@/components/instagram";
import ReceiveQuotesForYourMove from "@/components/service/receive-quotes-for-your-move";
import type { Metadata, ResolvingMetadata } from "next";
import {
  COMPANY_NAME,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  NEXT_PUBLIC_SITE_URL,
  SITE_URL,
} from "@/data/constants";
import { generateKeywords } from "@/lib/utils";

export async function generateMetadata(
  _: P,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { abstract, description, openGraph, twitter } = await parent;
  const pageTitle = `About Us | ${COMPANY_NAME}`;
  const pageDescription = data?.description || description || "";

  return {
    appleWebApp: undefined,
    alternates: {
      canonical: `${SITE_URL}/about-us`, // was pointing at the homepage
    },
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/logo/logo-png.png",
      },
    ],
    title: {
      default: pageTitle,
      template: `%s | ${COMPANY_NAME}`,
    },
    publisher: "Aarambha IT Research Center",
    keywords: generateKeywords(data?.description || ""),
    abstract: data.description || abstract,
    authors: [
      {
        name: "Ashish Khatri",
        url: "https://ashishkhatri.vercel.app/",
      },
    ],
    category: "Service",
    classification: "Removal Service",
    creator: "Ashish Khatri",
    generator: "Next.js",
    robots: "index, follow",
    verification: {
      google: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    description: pageDescription,
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: twitter?.images,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: openGraph?.images,
      type: "article",
    },
    applicationName: COMPANY_NAME,
    metadataBase: new URL(NEXT_PUBLIC_SITE_URL!),
  };
}

const stats = [
  {
    icon: Star,
    value: `${BUSINESS.google.rating}★`,
    label: "Google Rating",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Users,
    value: BUSINESS.google.reviewCount,
    label: "Local Google Reviews",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    value: "100%",
    label: BUSINESS.guarantee.name,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: MapPin,
    value: BUSINESS.location.suburb,
    label: "Locally Owned & Operated",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
          <div
            className="absolute bottom-32 right-16 w-16 h-16 bg-green-100 rounded-full opacity-30 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span>{BUSINESS.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                About Multi Removal
              </span>
              <br />
              <span className="text-gray-900">& Cleaning Experts</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="mb-4 inline-flex items-center justify-center">
                  <div
                    className={`p-4 rounded-2xl transition-colors ${stat.bg}`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-24">
        <div className="gap-12 lg:flex">
          <div className="w-full max-w-4xl space-y-12 py-12">
            {data.paragraphs?.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
              >
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        {item.title}
                      </h2>
                    </div>

                    {/* Uses the item's own image now; add `image` to a data
                        entry (a photo of your real crew/truck) to show it. */}
                    {item.image && (
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    )}

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  {item.list && (
                    <div className="grid gap-6 md:grid-cols-2">
                      {item.list.map((listItem, j) => (
                        <div
                          key={j}
                          className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-green-100 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            {listItem.title && (
                              <h3 className="text-xl font-bold text-gray-900">
                                {listItem.title}
                              </h3>
                            )}
                            <p className="text-gray-700 leading-relaxed">
                              {listItem.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Location Section */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our service area
                  </h2>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Based in {BUSINESS.location.suburb}, we proudly operate in{" "}
                  {BUSINESS.location.city} and across {BUSINESS.location.state},
                  delivering reliable and professional removal services right to
                  your door.
                </p>

                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-5 py-3">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-semibold text-gray-900">
                    {BUSINESS.location.cityState}
                  </span>
                  <span className="text-sm text-green-700 bg-green-100 px-3 py-0.5 rounded-full">
                    Full service available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full flex-1 space-y-8 py-14">
            <Instagram />
            <Facebook />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <ReceiveQuotesForYourMove />
        </div>
      </div>
    </div>
  );
}
