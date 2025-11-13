// Enhanced SelectServiceForm component
"use client";

import { LucideArrowRight, LucideCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

import { useBookQuoteCtx } from "@/context/book-quote";
import { data } from "@/data/services";
import { cn, genSeq, objectToURLSearchParams } from "@/lib/utils";

import { Button } from "../ui/button";

export default function SelectServiceForm() {
  const code = useSearchParams().get("post-code");
  const { state, setState } = useBookQuoteCtx();

  console.log("state", state);
  console.log("code", code);
  

  const handleClick = (service: string, type: string) => {
    setState({
      ...state,
      service,
      type,
    });
  };

  const query = objectToURLSearchParams({
    "post-code": code,
    service: state?.service,
  });

  const isDisabled = useMemo(() => !state?.service, [state]);
  const Component = isDisabled ? "span" : Link;
  const seq = genSeq(data.list?.length || 0);

  return (
    <div className="space-y-8">
      {/* Service selection grid */}
      <div className="relative">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.list?.map((item, i) => {
            const isSelected = state?.service === item.slug;

            return (
              <li key={i} className="group">
                <div
                  className={cn(
                    "relative overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer",
                    isSelected
                      ? "border-green-500 bg-green-50 shadow-lg shadow-green-500/20 scale-105"
                      : "border-gray-200 bg-white hover:border-green-300 hover:shadow-md hover:scale-102",
                    seq.bigScreen.includes(i) && "md:bg-gray-50/50",
                    seq.omits.includes(i) && "md:bg-white",
                    seq.smallScreen.includes(i) && "bg-gray-50/50"
                  )}
                  onClick={() => handleClick(item.slug, item.type)}
                >
                  {/* Selection indicator */}
                  <div
                    className={cn(
                      "absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300",
                      isSelected
                        ? "bg-green-500 scale-100"
                        : "bg-gray-200 scale-0 group-hover:scale-100"
                    )}
                  >
                    <LucideCheck size={14} className="text-white" />
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    <h3
                      className={cn(
                        "text-base font-semibold leading-tight transition-colors duration-300",
                        isSelected
                          ? "text-green-700"
                          : "text-gray-800 group-hover:text-green-600"
                      )}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover effect overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-300",
                      !isSelected && "group-hover:opacity-100"
                    )}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        {/* Selection count indicator */}
        {state?.service && (
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center space-x-2 rounded-full bg-green-50 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-green-700">
                Service selected
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Action button */}
      <div className="relative">
        <Button
          asChild={!isDisabled}
          variant="success"
          size="xl"
          className={cn(
            "group relative w-full overflow-hidden rounded-xl px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300",
            !isDisabled &&
              "hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
            isDisabled && "opacity-50 cursor-not-allowed"
          )}
          disabled={isDisabled}
        >
          <Component
            href={
              state?.type === "service"
                ? `/book-quote/select-pickup-location/?${query}`
                : "/book-quote/additional-information"
            }
            className={cn(
              "flex w-full items-center justify-center space-x-4",
              isDisabled && "pointer-events-none"
            )}
          >
            <span>
              {state?.type === "service" ? "Select pickup location" : "Next"}
            </span>
            <LucideArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={20}
            />
          </Component>
        </Button>

        {/* Progress indicator */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="flex space-x-1">
            <div className="h-2 w-8 rounded-full bg-green-500" />
            <div className="h-2 w-8 rounded-full bg-gray-200" />
            <div className="h-2 w-8 rounded-full bg-gray-200" />
          </div>
          <span className="ml-2 text-xs text-gray-500">Step 1 of 3</span>
        </div>
      </div>
    </div>
  );
}
