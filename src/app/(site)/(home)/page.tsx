import dynamic from 'next/dynamic';
import React from 'react';

import SelectServiceForm from '@/components/book-quote/select-service-form';
import HeroSection from '@/components/home/hero-section';
import OurProcessSection from '@/components/home/our-process-section';

const AboutUsSection = dynamic(
  () => import('@/components/home/about-us-section'),
  {
    ssr: false,
  },
);

const ServicesSection = dynamic(
  () => import('@/components/home/services-section'),
  {
    ssr: false,
  },
);

const WhyUsSection = dynamic(() => import('@/components/home/why-us-section'), {
  ssr: false,
});

const ReviewsSection = dynamic(
  () => import('@/components/home/reviews-section'),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <div className="layout size-full space-y-24 py-24">
      <HeroSection />
      <OurProcessSection />
      <div className="flex flex-col gap-y-4">
        <span className="mt-3 block border-b-2 sm:mt-0 sm:inline-flex">
          Select a service
        </span>
        <h2 className="text-2xl font-black">Services</h2>
        <SelectServiceForm className="justify-center px-32 " />
      </div>
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection />
      <AboutUsSection />
    </div>
  );
}
