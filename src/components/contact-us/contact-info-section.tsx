import {
  LucideMail,
  LucideMapPin,
  LucidePhoneCall,
  LucideGlobe,
} from "lucide-react";
import React from "react";

import { data } from "@/data/contact-us";

export default function ContactInfoSection() {
  return (
    <div className="w-full space-y-8 md:space-y-10">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">
            {data.title}
          </h1>
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold leading-tight text-green-700 flex items-center">
          <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-3"></div>
          Feel free to say hello !!
        </h3>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          We're here to help with all your removal and cleaning needs. Get in
          touch with us through any of the channels below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-6">
        {/* Address Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-green-200/60 bg-white p-4 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div className="relative flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <LucideMapPin className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-3 flex-1">
              <h6 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                Head Office Address
              </h6>
              <p className="text-gray-700 font-medium leading-relaxed">
                {data.address}
              </p>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-green-100/50 to-green-200/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>

        {/* Phone Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-green-200/60 bg-white p-4 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div className="relative flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <LucidePhoneCall className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-3 flex-1">
              <h6 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                Contact Numbers
              </h6>
              <div className="space-y-1">
                {data.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone}`}
                    className="block text-gray-700 font-medium hover:text-green-600 transition-colors duration-200"
                  >
                    📞 {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-green-100/50 to-green-200/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>

        {/* Email & Website Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-green-200/60 bg-white p-4 md:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div className="relative flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <LucideMail className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-3 flex-1">
              <h6 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                Email & Website
              </h6>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <LucideGlobe className="h-4 w-4 text-green-600" />
                  <a
                    href={data.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-200"
                  >
                    {data.site}
                  </a>
                </div>
                {data.mails.map((email, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <LucideMail className="h-4 w-4 text-green-600" />
                    <a
                      href={`mailto:${email}`}
                      className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-200"
                    >
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-green-100/50 to-green-200/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200">
        <div className="text-center space-y-3">
          <h4 className="text-lg font-bold text-gray-900">
            Ready to Get Started?
          </h4>
          <p className="text-gray-600">
            Contact us today for a free quote and let us handle your removal
            needs professionally.
          </p>
          <div className="flex justify-center space-x-3 pt-2">
            <div className="flex items-center space-x-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
