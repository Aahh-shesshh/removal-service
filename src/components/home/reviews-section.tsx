"use client";
import React from "react";
import { data } from "@/data/home/section-3";
import { cn } from "@/lib/utils";
import TitleContainer from "../title-container";
import ReviewCard from "./review-card";
import { motion } from "framer-motion";
import {
  LucideStar,
  LucideQrCode,
  LucideSmartphone,
  LucideArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function ReviewsSection() {
  // Replace this with your actual review link
  const reviewLink = " https://g.page/r/Cf9N7jdlGcScEBE/review";
  const qrCodeUrl = `/review.png`;

  return (
    <div className="relative space-y-16" id="testimonials">
      {/* Background decorations */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="absolute -top-20 left-1/4 h-32 w-32 rounded-full bg-green-100/20"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="absolute right-10 top-1/3 h-20 w-20 rounded-full bg-blue-100/20"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        className="absolute -bottom-16 left-1/3 h-24 w-24 rounded-full bg-yellow-100/20"
      />

      {/* Enhanced title container */}
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
        className="relative z-10"
      >
        <TitleContainer
          className="w-full md:w-3/5"
          title={data.title}
          description={data.description}
        />

        {/* Stats bar */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center space-x-3 rounded-full bg-green-50 px-4 py-2">
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

          <div className="flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm font-semibold text-blue-700">
              {data.reviews.length}+ Happy Customers
            </span>
          </div>

          <div className="flex items-center space-x-2 rounded-full bg-gray-50 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-gray-500" />
            <span className="text-sm font-semibold text-gray-700">
              Verified Reviews
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main content area with reviews and QR section */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-12">
        {/* Reviews grid - takes up more space */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={cn(
            "gap-6 space-y-6 columns-1 sm:columns-2 lg:gap-8 lg:space-y-8 lg:col-span-8",
            data.reviews.length < 5 && "md:columns-2",
            data.reviews.length < 3 && "md:columns-1",
            data.reviews.length >= 5 && "md:columns-2"
          )}
        >
          {data.reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", duration: 0.6, bounce: 0.3 },
                },
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
        </motion.div>

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
          <div className="sticky top-24 space-y-6">
            {/* Main QR Card */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-blue-50 p-6 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-200/30" />
              <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-blue-200/30" />

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
                <div className="flex justify-center">
                  <div className="rounded-xl border-4 border-white bg-white p-4 shadow-xl">
                    <Image
                      src={qrCodeUrl}
                      height={400}
                      width={400}
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
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl lg:hidden"
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

            {/* Trust badge */}
            <div className="rounded-xl bg-gradient-to-r from-green-600 to-green-700 p-4 text-center text-white shadow-lg">
              <p className="text-sm font-semibold">Your feedback matters! 🌟</p>
              <p className="mt-1 text-xs opacity-90">
                Help others make confident decisions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
