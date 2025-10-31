import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsAppBtn() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href={`https://wa.me/61491388096?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20your%20removal%20services`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-2 animate-bounce hover:animate-none transition-all duration-500"
    >
      {/* Main WhatsApp Button */}
      <div className="relative">
        {/* Pulsing background effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full opacity-75 animate-ping"></div>

        {/* Button with gradient border */}
        <div className="relative p-1 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
          <div className="bg-white rounded-full p-2 sm:p-3">
            <RiWhatsappFill className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 group-hover:text-green-600 transition-colors" />
          </div>
        </div>

        {/* Online indicator dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse shadow-lg"></div>
      </div>

      {/* Text label that appears on hover */}
      <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -left-36 top-1/2 -translate-y-1/2">
        <div className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl border border-gray-200 whitespace-nowrap">
          <p className="text-sm font-semibold">Send Message !</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 bg-white border-r border-t border-gray-200 rotate-45"></div>
        </div>
      </div>
    </a>
  );
}
