import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, ResolvingMetadata, Viewport } from "next";
import {
  Bungee_Shade as Font2,
  Hanken_Grotesk as Font,
} from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import BookQuoteContextProvider from "@/context/book-quote";
import { data } from "@/data/about-us";
import {
  COMPANY_NAME,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  NEXT_PUBLIC_GTAG_ID,
  NEXT_PUBLIC_MAPS_API_KEY,
  NEXT_PUBLIC_SITE_URL,
  SITE_URL,
} from "@/data/constants";
import { cn, generateKeywords } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import TopSlider from "@/components/layout/top-slider";

const font = Font({
  subsets: ["latin"],
  variable: "--font-custom",
  display: "swap",
});

const font2 = Font2({
  subsets: ["latin"],
  variable: "--font-custom-secondary",
  display: "swap",
  weight: ["400"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 2,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#FFFFFF",
};

export async function generateMetadata(
  _: P,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { abstract, description, openGraph, twitter } = await parent;

  return {
    appleWebApp: undefined,
    alternates: {
      canonical: SITE_URL,
    },
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/logo/logo-png.png",
      },
    ],
    // UPDATED: More SEO-friendly title
    title: {
      default: `${COMPANY_NAME} | Professional Removalists & Movers in Hobart, Tasmania`,
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
    description: data?.description || description,
    twitter: {
      card: "summary_large_image",
      title: COMPANY_NAME,
      description: data.description || description || "",
      images: twitter?.images,
    },
    openGraph: {
      title: COMPANY_NAME,
      description: data?.description || description || "",
      images: openGraph?.images,
      type: "article",
    },
    applicationName: COMPANY_NAME,
    metadataBase: new URL(NEXT_PUBLIC_SITE_URL!),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NNRDB9XD');`,
          }}
        />
      </head>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${NEXT_PUBLIC_MAPS_API_KEY}&libraries=places`}
        async
        defer
      />
     
      <body className={cn(font.variable, font2.variable, "relative")}>
        <noscript>
          <iframe
            title="Google Tag Manager"
            id="gtm-noscript"
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNRDB9XD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div id="fb-root" />
        <Script
          async
          defer
          crossOrigin="use-credentials"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
          nonce="a4aZUlBd"
        />
        <Suspense>
          <BookQuoteContextProvider>
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  zIndex: 9999,
                },
              }}
            />
            <TopSlider />
            <Navbar />
            {children}
          </BookQuoteContextProvider>
        </Suspense>
      </body>
      {NEXT_PUBLIC_GTAG_ID && <GoogleAnalytics gaId={NEXT_PUBLIC_GTAG_ID} />}
    </html>
  );
}
