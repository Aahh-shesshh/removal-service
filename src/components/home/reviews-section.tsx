"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  LucideArrowRight,
  LucideQrCode,
  LucideSmartphone,
  LucideStar,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import TitleContainer from "../title-container";
import { data } from "@/data/home/section-3";
import ReviewCard from "./review-card";

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewLink = "https://g.page/r/Cf9N7jdlGcScEBE/review";
  const qrCodeUrl = `/review.png`;

  const reviews = data.reviews;
  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCurrentReviews = () => {
    const start = currentIndex * reviewsPerPage;
    return reviews.slice(start, start + reviewsPerPage);
  };

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
        {/* Main content area */}
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
              <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
                <div className="flex items-center space-x-2 md:space-x-3 rounded-full bg-green-50 px-3 md:px-4 py-2 shadow-sm">
                  <div className="flex space-x-0.5 md:space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <LucideStar
                        key={i}
                        className="h-2.5 w-2.5 md:h-3 md:w-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-green-700">
                    5.0 Rating
                  </span>
                </div>

                <div className="flex items-center space-x-2 rounded-full bg-blue-50 px-3 md:px-4 py-2 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-xs md:text-sm font-semibold text-blue-700">
                    100+ Happy Customers
                  </span>
                </div>

                <div className="flex items-center space-x-2 rounded-full bg-yellow-50 px-3 md:px-4 py-2 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span className="text-xs md:text-sm font-semibold text-yellow-700">
                    Verified Reviews
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Reviews Carousel */}
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
              className="relative"
            >
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 ">
                  <AnimatePresence mode="wait">
                    {getCurrentReviews().map((review, i) => (
                      <motion.div
                        key={`${currentIndex}-${i}`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.1,
                        }}
                      >
                        <ReviewCard
                          date={review.date}
                          description={review.description}
                          name={review.name}
                          title={review.title}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-6 flex items-center justify-center gap-4">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="group flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all shadow-md hover:shadow-lg"
                  aria-label="Previous reviews"
                >
                  <LucideChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-green-600 group-hover:text-green-700" />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentIndex
                          ? "w-8 bg-green-600"
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="group flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all shadow-md hover:shadow-lg"
                  aria-label="Next reviews"
                >
                  <LucideChevronRight className="h-5 w-5 md:h-6 md:w-6 text-green-600 group-hover:text-green-700" />
                </button>
              </div>

              {/* Review Counter */}
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">
                  Showing {currentIndex * reviewsPerPage + 1}-
                  {Math.min(
                    (currentIndex + 1) * reviewsPerPage,
                    reviews.length
                  )}{" "}
                  of {reviews.length} reviews
                </span>
              </div>
            </motion.div>
          </div>

          {/* QR Code Section - Sticky sidebar */}
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
              <div className="relative overflow-hidden rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 md:p-6 shadow-xl">
                {/* Decorative elements */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-200/30 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-blue-200/30 blur-xl" />

                <div className="relative space-y-4">
                  {/* Header */}
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

                  {/* QR Code */}
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

                  {/* Instructions */}
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

                  {/* CTA Button for mobile */}
                  <a
                    href={reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 lg:hidden"
                  >
                    Leave a Review
                    <LucideArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
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
    </div>
  );
}
