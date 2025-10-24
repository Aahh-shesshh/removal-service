"use client";
import React from "react";

import { data } from "@/data/home/section-4";
import { cn } from "@/lib/utils";

import TitleContainer from "../title-container";
import FeatureCard from "./feature-card";
import { motion } from "framer-motion";

export default function WhyUsSection() {
  return (
    <div className="space-y-16">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -30 },
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
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <TitleContainer
          className="w-full md:w-3/5"
          title={data.title}
          subtitle={data.subtitle}
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8")}
      >
        {data.list.map((review, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
                scale: 0.85,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 0.8,
                  bounce: 0.35,
                },
              },
            }}
          >
            <FeatureCard
              description={review.description}
              icon={review.icon}
              title={review.title}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
