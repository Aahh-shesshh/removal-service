import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import {
  COMPANY_NAME,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  NEXT_PUBLIC_SITE_URL,
  SITE_URL,
} from "@/data/constants";
import Breadcrumb from "@/components/breadcrumb";
import ContactForm from "@/components/contact-us/contact-form";
import ReceiveQuotesForYourMove from "@/components/service/receive-quotes-for-your-move";
import RelatedServices from "@/components/service/related-services";
import { ServiceHero } from "@/components/service/service-hero";
import { ServiceOverview } from "@/components/service/service-overview";
import { ServiceSections } from "@/components/service/service-sections";
import { data } from "@/data/services";
import { generateKeywords } from "@/lib/utils";

type P = { params: Promise<{ slug: string }> };
const getService = (slug: string) => data.list?.find((s) => s.slug === slug);

export async function generateMetadata(
  { params }: P,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const { abstract, description, openGraph, twitter } = await parent;

  const service = data.list?.find((item) => item.slug === slug);

  const serviceTitle = service?.title ?? "Our Services";
  const serviceDesc =
    service?.overview ?? service?.description ?? description ?? "";

  return {
    appleWebApp: undefined,
    alternates: {
      canonical: `${SITE_URL}/service/${slug}`,
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
      default: `${serviceTitle} | ${COMPANY_NAME}`,
      template: `%s | ${COMPANY_NAME}`,
    },
    publisher: "Aarambha IT Research Center",
    keywords: generateKeywords(serviceDesc),
    abstract: service?.overview ?? abstract,
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
    description: serviceDesc,
    twitter: {
      card: "summary_large_image",
      title: `${serviceTitle} | ${COMPANY_NAME}`,
      description: serviceDesc,
      images: service?.images ?? twitter?.images,
    },
    openGraph: {
      title: `${serviceTitle} | ${COMPANY_NAME}`,
      description: serviceDesc,
      images: service?.images ?? openGraph?.images,
      url: `${SITE_URL}/service/${slug}`,
      type: "website",
    },
    applicationName: COMPANY_NAME,
    metadataBase: new URL(NEXT_PUBLIC_SITE_URL!),
  };
}

export default async function Service({ params }: P) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.overview ?? service.description,
    url: `${SITE_URL}/service/${slug}`,
    provider: { "@type": "MovingCompany", name: COMPANY_NAME, url: SITE_URL },
  };

  return (
    <div className="bg-gray-50/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ServiceHero service={service} />
      <Breadcrumb />
      <div className="container mx-auto px-6 space-y-16 pb-16">
        <div className="flex flex-col gap-12 xl:flex-row">
          <div className="space-y-12 py-12 xl:max-w-4xl">
            <ServiceOverview service={service} />
            <ServiceSections sections={service.page_data?.sections} />
          </div>
          <ContactForm />
        </div>
        <ReceiveQuotesForYourMove />
        <RelatedServices except={service.id} />
      </div>
    </div>
  );
}
