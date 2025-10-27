import dynamic from "next/dynamic";
import React from "react";

import SelectServiceForm from "@/components/book-quote/select-service-form";
import HeroSection from "@/components/home/hero-section";
import OurProcessSection from "@/components/home/our-process-section";
import ImageSection from "@/components/home/images-section";
import WhatsAppBtn from "@/components/whatsapp-btn";

const AboutUsSection = dynamic(
  () => import("@/components/home/about-us-section"),
  {
    ssr: false,
  }
);

const ServicesSection = dynamic(
  () => import("@/components/home/services-section"),
  {
    ssr: false,
  }
);

const WhyUsSection = dynamic(() => import("@/components/home/why-us-section"), {
  ssr: false,
});

const ReviewsSection = dynamic(
  () => import("@/components/home/reviews-section"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="layout size-full space-y-24 overflow-x-hidden">
      <HeroSection />
      <OurProcessSection />
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8 shadow-lg md:p-12">
        {/* Background decorations */}
        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-100/20" />
        <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-green-100/20" />

        <div className="relative z-10 flex flex-col gap-y-6">
          {/* Enhanced header */}
          <div className="space-y-3">
            <span className="relative inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
              Select a service
            </span>
            <h2 className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Services
            </h2>
          </div>

          <SelectServiceForm />
        </div>
      </div>
      <ServicesSection />
      <WhyUsSection />
      <AboutUsSection />
      <ReviewsSection />
      <ImageSection />
      <WhatsAppBtn />
    </div>
  );
}
