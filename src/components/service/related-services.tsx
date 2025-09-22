import Link from "next/link";
import React from "react";

import { data } from "@/data/services";

import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type TProps = {
  except: number;
};

export default function RelatedServices({ except }: TProps) {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-extrabold leading-tight">
        Related services
      </h1>
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {data.list
              ?.filter((item) => item.id !== except)
              ?.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="py-4 transition-all duration-300 ease-in-out hover:-translate-y-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="shadow-block border p-1">
                    <Button
                      asChild
                      variant="link"
                      className="my-2 h-auto whitespace-break-spaces text-lg font-bold"
                    >
                      <Link href={`/service/${item.slug}`}>{item.title}</Link>
                    </Button>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
