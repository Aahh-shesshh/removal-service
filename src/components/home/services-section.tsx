"use client";
import React from "react";
import { data } from "@/data/services";
import TitleContainer from "../title-container";
import ServiceCard from "./service-card";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <div className="relative space-y-16" id="services">
      {/* Background decorations */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        className="absolute -top-10 right-0 h-20 w-20 rounded-full bg-green-100/30"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.5 }}
        className="absolute left-10 top-1/3 h-16 w-16 rounded-full bg-blue-100/30"
      />

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
        className="relative z-10"
      >
        <TitleContainer
          className="w-full md:w-3/5"
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.list?.map((review, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
                x: i % 2 === 0 ? -30 : 30,
                scale: 0.9,
              },
              show: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 0.8 * i,
                  bounce: 0.3,
                },
              },
            }}
          >
            <ServiceCard
              number={i + 1}
              overview={review?.overview}
              icon={review.icon}
              title={review.title}
              slug={review.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
