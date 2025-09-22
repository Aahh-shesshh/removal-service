import { type LucideIcon } from "lucide-react";
import React from "react";

type TProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({ description, title, ...props }: TProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50/50 p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Background decorative elements */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100/30 to-green-100/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-gradient-to-br from-green-100/20 to-blue-100/20" />

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Enhanced icon container */}
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-sm">
              <props.icon
                className="text-white transition-transform duration-500 group-hover:scale-110"
                size={28}
              />
            </div>
          </div>

          {/* Floating accent dot */}
          <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-sm transition-all duration-500 group-hover:scale-125" />
        </div>

        {/* Text content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-green-600">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 w-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 group-hover:w-16" />
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-gradient-to-br from-blue-500/10 to-green-500/10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
    </div>
  );
}
