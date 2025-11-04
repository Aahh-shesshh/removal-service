"use client";
import React, { useEffect, useRef } from "react";
import TitleContainer from "../title-container";
import { motion } from "framer-motion";
import {
  LucideStar,
  LucideQrCode,
  LucideSmartphone,
  LucideArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function ReviewsSection() {
  const reviewLink = "https://g.page/r/Cf9N7jdlGcScEBE/review";
  const qrCodeUrl = `/review.png`;
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load script once
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    const scriptId = "trustindex-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://cdn.trustindex.io/loader.js?f67ef9857139349b4486deb8a54";
      script.async = true;
      document.body.appendChild(script);
    }

    // Observer to remove widgets appearing outside testimonials section
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const element = node as Element;
            // Check if it's a TrustIndex widget added directly to body
            if (
              element.parentElement === document.body &&
              (element.classList.contains("ti-widget-container") ||
                element.className?.includes("trustindex") ||
                element.id?.includes("trustindex"))
            ) {
              element.remove();
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: false,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative pt-16 px-4" id="testimonials">
      {/* Background decorations */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="absolute -top-20 left-1/4 h-32 w-32 rounded-full bg-green-100/20 blur-3xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="absolute right-10 top-1/3 h-20 w-20 rounded-full bg-blue-100/20 blur-2xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        className="absolute -bottom-16 left-1/3 h-24 w-24 rounded-full bg-yellow-100/20 blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        {/* Main content area - Single row layout */}
        <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-start">
          {/* Left side - Header and Reviews */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", duration: 0.8 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <TitleContainer
                className="w-full"
                title="What Our Customers Say"
                description="Read authentic reviews from our valued customers on Google"
              />

              {/* Stats bar */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-3 rounded-full bg-green-50 px-4 py-2 shadow-sm">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <LucideStar
                        key={i}
                        className="h-3 w-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-green-700">
                    5.0 Rating
                  </span>
                </div>

                <div className="flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-2 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-semibold text-blue-700">
                    100+ Happy Customers
                  </span>
                </div>

                <div className="flex items-center space-x-2 rounded-full bg-yellow-50 px-4 py-2 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span className="text-sm font-semibold text-yellow-700">
                    Verified Google Reviews
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Google Reviews Widget */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className="trustindex-reviews-container"
                data-src="https://cdn.trustindex.io/loader.js?f67ef9857139349b4486deb8a54"
              />
            </motion.div>
          </div>

          {/* QR Code Section - Sticky sidebar aligned with title */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50, scale: 0.9 },
              show: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 0.8,
                  delay: 0.3,
                  bounce: 0.3,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Main QR Card */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-blue-50 p-6 shadow-xl">
                {/* Decorative elements */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-200/30 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-blue-200/30 blur-xl" />

                <div className="relative space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-600 p-2">
                      <LucideQrCode className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Share Your Experience
                      </h3>
                      <p className="text-sm text-gray-600">
                        Scan to leave a review
                      </p>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center py-4">
                    <div className="rounded-xl border-4 border-white bg-white p-4 shadow-2xl">
                      <Image
                        src={qrCodeUrl}
                        height={160}
                        width={160}
                        alt="Review QR Code"
                        className="h-40 w-40"
                      />
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="space-y-3 rounded-xl bg-white/80 p-4 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-green-100 p-1.5">
                        <LucideSmartphone className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Scan with your phone
                        </p>
                        <p className="text-xs text-gray-600">
                          Open camera and point at QR code
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-blue-100 p-1.5">
                        <LucideStar className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Rate your experience
                        </p>
                        <p className="text-xs text-gray-600">
                          Takes less than 2 minutes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button for mobile */}
                  <a
                    href={reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 lg:hidden"
                  >
                    Leave a Review
                    <LucideArrowRight className="h-4 w-4" />
                  </a>

                  {/* Desktop link */}
                  <a
                    href={reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center justify-center gap-2 text-sm font-medium text-green-600 transition-colors hover:text-green-700 lg:flex"
                  >
                    Or click here to review
                    <LucideArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom styling to match your design theme */}
      <style jsx global>{`
        /* Aggressive hiding of TrustIndex elements outside testimonials */
        body > .ti-widget-container,
        body > div[class*="trustindex"],
        body > div[id*="trustindex"],
        body > div[class*="ti-"],
        body > div[id*="ti-"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
        }

        /* Only show within testimonials section */
        #testimonials .ti-widget-container,
        #testimonials div[class*="trustindex"],
        #testimonials div[id*="trustindex"] {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          height: auto !important;
          overflow: visible !important;
        }

        .trustindex-reviews-container {
          width: 100%;
          min-height: 400px;
        }

        .ti-widget {
          width: 100%;
        }

        .ti-widget .ti-review-item {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
          transition: all 0.3s ease;
          margin-bottom: 1.5rem;
        }

        .ti-widget .ti-review-item:hover {
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
          transform: translateY(-2px);
        }

        .ti-widget .ti-stars {
          color: #facc15 !important;
        }

        .ti-widget .ti-star {
          color: #facc15 !important;
        }

        @media (max-width: 1024px) {
          .ti-widget {
            padding: 0;
          }

          .trustindex-reviews-container {
            min-height: 300px;
          }
        }

        @media (max-width: 640px) {
          .ti-widget .ti-review-item {
            padding: 1rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
