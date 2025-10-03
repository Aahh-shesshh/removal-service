import React from "react";
import { data } from "@/data/services";
import TitleContainer from "../title-container";
import ServiceCard from "./service-card";

export default function ServicesSection() {
  return (
    <div className="relative space-y-16" id="services">
      {/* Background decorations */}
      <div className="absolute -top-10 right-0 h-20 w-20 rounded-full bg-green-100/30" />
      <div className="absolute left-10 top-1/3 h-16 w-16 rounded-full bg-blue-100/30" />

      <TitleContainer
        className="relative z-10 w-full md:w-3/5"
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
      />

      <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.list?.map((review, i) => (
          <ServiceCard
            key={i}
            number={i + 1}
            overview={review?.overview}
            icon={review.icon}
            title={review.title}
            slug={review.slug}
          />
        ))}
      </div>
    </div>
  );
}
