import React from "react";
import { Mail, MapPin, Star, Phone } from "lucide-react";
import Link from "next/link";

export default function TopSlider() {
  return (
    <div className="hidden lg:block bg-gradient-to-r from-[#0a0a15] via-[#0d1528] to-[#0a1a35] relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1 left-10 w-3 h-3 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-20 w-2 h-2 border border-green-300 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1 right-40 w-2 h-2 border border-blue-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-3 left-1/3 w-2 h-2 border border-green-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1 right-1/3 w-3 h-3 border border-blue-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Top gradient line */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>

      <div className="py-3 px-6 relative z-10">
        <div className="container mx-auto flex w-full text-sm text-white gap-6 items-center justify-between">
          {/* Left Section - Contact Info */}
          <div className="flex items-center gap-6">
            {/* Address Section */}
            <div className="group flex items-center gap-2 hover:bg-white/5 rounded-lg px-3 py-2 transition-all duration-300 backdrop-blur-sm">
              <div className="p-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-200">
                <MapPin
                  size={16}
                  className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200"
                />
              </div>
              <span className="hover:text-blue-300 transition-colors duration-200 font-medium">
                Sydney, Melbourne, Brisbane & Perth
              </span>
            </div>

            {/* Phone Section */}
            <div className="group flex items-center gap-2 hover:bg-white/5 rounded-lg px-3 py-2 transition-all duration-300 backdrop-blur-sm">
              <div className="p-1 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-200">
                <Phone
                  size={16}
                  className="text-green-400 group-hover:text-green-300 transition-colors duration-200"
                />
              </div>
              <div className="flex items-center gap-1">
                <Link
                  href="tel:1800REMOVALS"
                  className="hover:text-green-300 transition-colors duration-200 font-medium"
                >
                  1800 REMOVALS
                </Link>
                <span className="text-gray-400 mx-1">|</span>
                <Link
                  href="tel:0412345678"
                  className="hover:text-green-300 transition-colors duration-200 font-medium"
                >
                  04 1234 5678
                </Link>
              </div>
            </div>

            {/* Email Section */}
            <div className="group flex items-center gap-2 hover:bg-white/5 rounded-lg px-3 py-2 transition-all duration-300 backdrop-blur-sm">
              <div className="p-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-200">
                <Mail
                  size={16}
                  className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200"
                />
              </div>
              <Link
                href="mailto:info@multiremoval.com.au"
                className="hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                info@multiremoval.com.au
              </Link>
            </div>
          </div>

          {/* Right Section - Trust Badge & CTA */}
          <div className="flex items-center gap-6">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm opacity-90">
              <div className="p-1 rounded-full bg-yellow-500/20">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-yellow-200 font-medium">
                Australia's #1 Rated
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-green-200 font-medium">24/7 Available</span>
            </div>

            {/* Quick Quote Button */}
            <Link
              href="/book-quote/select-service"
              className="group flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 hover:from-green-500/30 hover:to-blue-500/30 border border-green-400/30 hover:border-green-400/50 rounded-full px-4 py-1.5 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 group-hover:text-green-200 font-medium text-sm">
                Free Quote
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-transparent to-green-900/5 pointer-events-none"></div>
    </div>
  );
}
