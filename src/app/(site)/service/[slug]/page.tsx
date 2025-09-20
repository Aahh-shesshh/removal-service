import { LucideCheck, LucideCircleDot } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import ContactForm from '@/components/contact-us/contact-form';
import PostCodeInput from '@/components/post-code-input';
import ReceiveQuotesForYourMove from '@/components/service/receive-quotes-for-your-move';
import RelatedServices from '@/components/service/related-services';
import {
  COMPANY_NAME,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  SITE_URL,
} from '@/data/constants';
import { data } from '@/data/services';
import { generateKeywords } from '@/lib/utils';

export async function generateMetadata(
  { params: { slug } }: P,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const service = data.list?.find((item) => item.slug === slug);

  const {
    abstract,
    description,
    openGraph,
    title,
    twitter,
    other,
    // eslint-disable-next-line unused-imports/no-unused-vars
    'apple-touch-icon-precomposed': a,
    // eslint-disable-next-line unused-imports/no-unused-vars
    'apple-touch-fullscreen': b,
    // eslint-disable-next-line unused-imports/no-unused-vars
    viewport: c,
    // eslint-disable-next-line unused-imports/no-unused-vars
    themeColor,
    // eslint-disable-next-line unused-imports/no-unused-vars
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
    publisher: 'Aarambha IT Research Center',
    keywords: generateKeywords(service?.overview || service?.description || ''),
    abstract: service?.overview || abstract,
    authors: [
      {
        name: 'Aakash Acharya',
        url: 'https://aakashacharya.com.np/',
      },
    ],
    category: 'Service',
    classification: 'Removal Service',
    creator: 'Aakash Acharya',
    generator: 'Next.js',
    robots: 'index, follow',
    verification: {
      google: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    description: service?.overview || service?.description || description,
    twitter: {
      card: 'summary_large_image',
      title: `${service?.title} - ${COMPANY_NAME}`,
      description:
        service?.overview || service?.description || description || '',
      images: service?.images || twitter?.images,
    },
    openGraph: {
      title: `${service?.title} - ${COMPANY_NAME}`,
      description:
        service?.overview || service?.description || description || '',
      images: service?.images || openGraph?.images,
      type: 'article',
      url: `${SITE_URL}/service/${slug}`,
    },
    applicationName: COMPANY_NAME,
  };
}

export default function Service({ params: { slug } }: P) {
  const service = data.list?.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <div>
      <div className="bg-yellow-400/10 py-16">
        <div className="layout flex flex-col-reverse items-center justify-between gap-16 md:gap-4 lg:flex-row">
          <div className="w-full flex-1 space-y-8 md:p-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight">
                {service.page_data?.hero_title}
              </h1>
              <p className="text-lg text-gray-700">
                {service.page_data?.hero_subtitle}
              </p>
            </div>
            <PostCodeInput />
            <ul className="space-y-2 text-lg text-gray-700">
              {service.page_data?.list?.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <LucideCheck className="text-blue-600" />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-2/5">
            <Image
              src={service.page_data?.image || '/images/service-hero.svg'}
              alt="logo"
              width={500}
              height={500}
              className="h-[350px] w-full object-cover md:h-[500px]"
            />
          </div>
        </div>
      </div>
      <Breadcrumb />
      <div className="layout relative space-y-16 pb-16">
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="space-y-6 py-12 xl:max-w-3xl">
            <h1 className="text-4xl font-black">{service.title}</h1>
            <div className="rounded-md bg-yellow-500/10 p-5 md:p-10">
              <q className="text-lg text-gray-700">{service.overview}</q>
            </div>
            <p className="text-lg text-gray-700">{service.description}</p>

            <div className="space-y-8 py-8">
              {service.page_data?.sections?.map((section, i) => (
                <div key={i} className="space-y-6">
                  {section.title && (
                    <h2 className="text-2xl font-black">{section.title}</h2>
                  )}
                  {section.description && (
                    <div className="flex gap-4">
                      {section.is_list && (
                        <div>
                          <LucideCircleDot size={16} className="mt-1.5" />
                        </div>
                      )}
                      <p className="text-lg text-gray-700">
                        {section.description}
                      </p>
                    </div>
                  )}
                  {section.image && (
                    <Image
                      src={section.image}
                      alt="logo"
                      width={500}
                      height={500}
                      className="h-[500px] w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <ContactForm selected_service={service.id} />
        </div>
        <ReceiveQuotesForYourMove />

        <RelatedServices except={service.id} />
      </div>
    </div>
  );
}
