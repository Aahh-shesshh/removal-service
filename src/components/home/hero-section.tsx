"use client";
import {
  LucideArrowRight,
  LucideAward,
  LucideCheck,
  LucideClock,
  LucideShield,
  LucideStar,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { data } from "@/data/home/section-1";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative sm:overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-40 animate-pulse" />
        <div
          className="absolute bottom-32 right-16 w-16 h-16 bg-green-100 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative mx-auto px-6 pt-16">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 0.8,
                    bounce: 0.3,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
            >
              <LucideStar className="w-4 h-4 fill-current" />
              <span>Australia's #1 Removal Service</span>
            </motion.div>

            {/* Main Heading with gradient text */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 0.8,
                    delay: 0.2,
                    bounce: 0.3,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {data.title.split(" ").slice(0, 2).join(" ")}
                </span>
                <br />
                <span className="text-gray-900">
                  {data.title.split(" ").slice(2, 5).join(" ")}
                </span>
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {data.title.split(" ").slice(5).join(" ")}
                  </span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Experience Australia's most trusted removal service. We make
                moving simple, stress-free, and affordable with our verified
                professionals and guaranteed satisfaction.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: 0.4,
                    bounce: 0.3,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/book-quote/select-service">
                <Button
                  size="xl"
                  variant="success"
                  className=" w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3"
                >
                  Request a Service
                  <LucideArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button
                  size="xl"
                  variant="outline"
                  className=" w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 flex items-center gap-3"
                >
                  <LucideClock className="w-5 h-5" />
                  Book Service
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.6,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 0.6,
                      bounce: 0.3,
                    },
                  },
                }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <LucideShield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Fully Insured
                  </div>
                  <div className="text-sm text-gray-600">$2M Coverage</div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 0.6,
                      bounce: 0.3,
                    },
                  },
                }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 bg-green-100 rounded-lg">
                  <LucideStar className="w-5 h-5 text-green-600 fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    5-Star Rated
                  </div>
                  <div className="text-sm text-gray-600">2000+ Reviews</div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 0.6,
                      bounce: 0.3,
                    },
                  },
                }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <LucideAward className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Award Winning
                  </div>
                  <div className="text-sm text-gray-600">Since 2018</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature List with enhanced styling */}
            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.9,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="space-y-4 text-left max-w-md mx-auto lg:mx-0"
            >
              {data.list?.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        duration: 0.5,
                        bounce: 0.3,
                      },
                    },
                  }}
                  className="flex items-start gap-4 p-3 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                >
                  <div className="p-1 bg-green-100 rounded-full mt-1">
                    <LucideCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {item.title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Image with enhanced styling */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100, scale: 0.8 },
              show: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.3,
                  bounce: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="flex-1 sticky top-0 max-w-lg lg:max-w-none"
          >
            <div className="relative">
              {/* Main image container with gradient border */}
              <div className="relative p-1 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-3xl">
                <div className="bg-white p-2 rounded-3xl">
                  <Image
                    src={data.image}
                    alt="Professional movers at work"
                    width={500}
                    height={500}
                    className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                    loading="eager"
                    quality={80}
                  />
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 0.8,
                      delay: 1.2,
                      bounce: 0.4,
                    },
                  },
                }}
                initial="hidden"
                animate="show"
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="sm:text-2xl text-lg font-bold text-green-600">
                  10K+
                </div>
                <div className="sm:text-sm text-xs text-gray-600">
                  Happy Customers
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -30, scale: 0.8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 0.8,
                      delay: 1.4,
                      bounce: 0.4,
                    },
                  },
                }}
                initial="hidden"
                animate="show"
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="sm:text-2xl text-lg font-bold text-blue-600">
                  24/7
                </div>
                <div className="sm:text-sm text-xs text-gray-600">
                  Support Available
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
