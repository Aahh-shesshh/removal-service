"use client";
import { googleReviews } from "@/data/home/google-reviews";
import { AnimatePresence, motion } from "framer-motion";
import {
  LucideArrowRight,
  LucideChevronLeft,
  LucideChevronRight,
  LucideQrCode,
  LucideSmartphone,
  LucideStar,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import TitleContainer from "../title-container";
import { GoogleLogo } from "../ui/googleLogo";
import { StarRating } from "../ui/star-rating";
import { ReviewCard, type ReviewItem } from "./review-card";

// ─── Trustindex-style Google Reviews Widget ───────────────────────────────────

function TrustindexWidget({ reviews }: { reviews: ReviewItem[] }) {
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const [page, setPage] = useState(0);

  const currentReviews = reviews.slice(
    page * perPage,
    page * perPage + perPage,
  );

  return (
    <div className="space-y-4">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
        {/* Google branding + rating */}
        <div className="flex items-center gap-3">
          <GoogleLogo size={24} />
          <div>
            <p className="text-xs font-medium text-gray-500">Google Reviews</p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-semibold text-gray-900">5.0</span>
              <StarRating count={5} size={15} />
            </div>
            <p className="text-xs text-gray-400">50+ reviews</p>
          </div>
          <div className="h-10 w-px bg-gray-100" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
            ✓ Verified Reviews
          </span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            ★ Top Rated Business
          </span>
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <AnimatePresence mode="wait">
          {currentReviews.map((review, i) => (
            <motion.div
              key={`${page}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
            >
              <ReviewCard
                review={review}
                index={i}
                pageStart={page * perPage}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:bg-gray-50"
          aria-label="Previous"
        >
          <LucideChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === page
                  ? "w-6 bg-blue-500"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setPage((p) => (p + 1) % totalPages)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:bg-gray-50"
          aria-label="Next"
        >
          <LucideChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ReviewsSection() {
  const reviewLink = "https://g.page/r/Cf9N7jdlGcScEBE/review";
  const qrCodeUrl = `/review.png`;
  const reviews: ReviewItem[] = googleReviews.reviews;

  return (
    <div className="relative pt-5 px-4" id="testimonials">
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

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-start">
          {/* Left side */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header */}
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
            </motion.div>

            {/* Trustindex Widget */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <TrustindexWidget reviews={reviews} />
            </motion.div>
          </div>

          {/* QR Code sidebar */}
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
              <div className="relative overflow-hidden rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 md:p-6 shadow-xl">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-200/30 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-blue-200/30 blur-xl" />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-600 p-2">
                      <LucideQrCode className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900">
                        Share Your Experience
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Scan to leave a review
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center py-3 md:py-4">
                    <div className="rounded-xl border-4 border-white bg-white p-3 md:p-4 shadow-2xl">
                      <Image
                        src={qrCodeUrl}
                        height={160}
                        width={160}
                        alt="Review QR Code"
                        className="h-32 w-32 md:h-40 md:w-40"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 rounded-xl bg-white/80 p-3 md:p-4 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-green-100 p-1.5">
                        <LucideSmartphone className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs md:text-sm font-medium text-gray-900">
                          Scan with your phone
                        </p>
                        <p className="text-xs text-gray-600">
                          Open camera and point at QR code
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-blue-100 p-1.5">
                        <LucideStar className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs md:text-sm font-medium text-gray-900">
                          Rate your experience
                        </p>
                        <p className="text-xs text-gray-600">
                          Takes less than 2 minutes
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 lg:hidden"
                  >
                    Leave a Review
                    <LucideArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>

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
    </div>
  );
}
