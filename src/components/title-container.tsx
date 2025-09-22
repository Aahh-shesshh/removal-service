import React from "react";
import { cn } from "@/lib/utils";

type TProps = {
  subtitle: string;
  title: string;
  description: string;
  className: string;
};

export default function TitleContainer({
  subtitle,
  title,
  className,
  description,
}: Partial<TProps>) {
  return (
    <div className={cn("space-y-4", className)}>
      {title || subtitle ? (
        <div className="title-container space-y-2">
          {subtitle ? (
            <p className="h4 relative inline-block">
              {subtitle}
              <div className="absolute -bottom-1 left-0 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
            </p>
          ) : null}
          {title ? (
            <p className="h2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {title}
            </p>
          ) : null}
        </div>
      ) : null}
      {description ? (
        <p
          className="text-lg font-light leading-relaxed text-gray-600"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      ) : null}
    </div>
  );
}
