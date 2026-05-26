import React from 'react';

import ContactForm from '@/components/contact-us/contact-form';
import ContactInfoSection from '@/components/contact-us/contact-info-section';

import type { Metadata, ResolvingMetadata } from 'next';
import {
  COMPANY_NAME,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  NEXT_PUBLIC_SITE_URL,
  SITE_URL,
} from '@/data/constants';
import { generateKeywords } from '@/lib/utils';

export async function generateMetadata(
  _: P,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { abstract, description, openGraph, twitter } = await parent;

  const contactDescription =
    `Contact ${COMPANY_NAME} for professional removalist and cleaning services in Hobart, Tasmania. ` +
    `Get a free quote, reach our support team, or find our location. We're here to help with your move.`;

  return {
    appleWebApp: undefined,
    alternates: {
      canonical: `${SITE_URL}/contact`,  // ✅ contact-specific canonical
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
      default: `Contact Us | ${COMPANY_NAME}`,  // ✅ updated for contact
      template: `%s | ${COMPANY_NAME}`,
    },
    publisher: "Aarambha IT Research Center",
    keywords: generateKeywords(contactDescription),  // ✅ contact-specific keywords
    abstract: contactDescription || abstract,
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
    description: contactDescription || description,  // ✅ contact-specific description
    twitter: {
      card: "summary_large_image",
      title: `Contact Us | ${COMPANY_NAME}`,  // ✅ updated
      description: contactDescription || description || "",
      images: twitter?.images,
    },
    openGraph: {
      title: `Contact Us | ${COMPANY_NAME}`,  // ✅ updated
      description: contactDescription || description || "",
      images: openGraph?.images,
      url: `${SITE_URL}/contact`,  // ✅ og:url for contact page
      type: "website",  // ✅ "website" fits better than "article" for contact
    },
    applicationName: COMPANY_NAME,
    metadataBase: new URL(NEXT_PUBLIC_SITE_URL!),
  };
}

export default function ContactUs() {
  return (
    <div>
      <div className="layout flex flex-col items-stretch gap-6 py-24 md:flex-row lg:gap-12">
        <div className="w-full space-y-6">
          <ContactInfoSection />
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
