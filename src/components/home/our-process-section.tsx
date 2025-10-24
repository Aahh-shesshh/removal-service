"use client";
import React from "react";
import { data } from "@/data/home/section-2";
import TitleContainer from "../title-container";
import { motion } from "framer-motion";

export default function OurProcessSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 shadow-lg md:p-16">
      {/* Background decoration */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-100/50"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
        className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-green-100/50"
      />

      <div className="relative flex flex-col items-stretch justify-between gap-12 md:flex-row">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.3,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-2/5"
        >
          <TitleContainer
            subtitle={data.subtitle}
            title={data.title}
            description={data.description}
          />
        </motion.div>

        <div className="md:w-1/2">
          <div className="relative">
            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {data.list.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 50,
                      scale: 0.8,
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        duration: 0.8,
                        bounce: 0.3,
                      },
                    },
                  }}
                  className="group relative flex gap-6 md:gap-8"
                >
                  {/* Step number with enhanced styling */}
                  <div className="relative z-10 flex aspect-square size-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-700 font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <span className="text-lg">{i + 1}</span>
                  </div>

                  {/* Connecting line with improved styling */}
                  {i + 1 !== data.list.length && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.2,
                        ease: "easeOut",
                      }}
                      style={{ originY: 0 }}
                      className="absolute left-6 top-12 h-full w-[3px] bg-gradient-to-b from-green-600 to-green-300 opacity-30"
                    />
                  )}

                  {/* Content with enhanced styling */}
                  <div className="flex-1 space-y-3 rounded-lg bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-white/80 group-hover:shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Success indicator */}
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
                    bounce: 0.4,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 flex items-center justify-center gap-3 rounded-full bg-green-50 px-6 py-3 shadow-sm"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-3 w-3 rounded-full bg-green-500"
              />
              <span className="text-sm font-medium text-green-700">
                Simple & Stress-Free Process
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
