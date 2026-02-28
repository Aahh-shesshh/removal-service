import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  COMPANY_ADDRESS,
  COMPANY_GOOGLE_MAP_IFRAME,
  COMPANY_INFO_EMAIL,
  COMPANY_PHONE_NUMBER,
  FACEBOOK_PAGE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/data/constants";
import { data } from "@/data/footer";

import FooterBottom from "./footer-bottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/4 h-20 w-20 rounded-full bg-green-400/20" />

        <div className="layout relative z-10 flex flex-col items-stretch gap-12 p-10 md:flex-row md:gap-16">
          {/* Left Content Section */}
          <div className="w-full space-y-8">
            {/* Logo and Motto */}
            <div className="space-y-2">
              <Image
                src={"/logo/white-logo-png.png"}
                alt="logo"
                width={200}
                height={80}
                className="h-auto w-auto"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {data.motto}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
              </div>
            </div>

            {/* Combined Get in Touch + Quick Links */}
            <div className="rounded-2xl backdrop-blur-sm space-y-6">
              {/* Quick Links from menu data */}
              <div>
                <h4 className="mb-4 text-lg font-bold text-white">
                  Quick Links
                </h4>
                <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                  {data.menu?.flatMap((item) =>
                    item.items.map((subItem, j) => (
                      <Button
                        key={`${item.title}-${j}`}
                        variant="link"
                        asChild
                        className="h-auto justify-start p-0 text-white/75 hover:text-green-400 transition-colors duration-300"
                      >
                        <Link
                          href={subItem.url}
                          scroll
                          className="flex items-center space-x-2 py-1 hover:translate-x-1 transition-transform duration-300"
                        >
                          <FaArrowRight className="h-2.5 w-2.5 text-green-400/70" />
                          <span className="text-sm">{subItem.title}</span>
                        </Link>
                      </Button>
                    )),
                  )}
                </div>
              </div>
               {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-white/20 via-green-400/30 to-transparent" />
              {/* Contact Info */}
              <div>
                <h4 className="mb-4 text-lg font-bold text-white">
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-white/90">
                    <FaMapMarkerAlt className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                    <span className="text-sm">{COMPANY_ADDRESS}</span>
                  </div>
                  <Link
                    href={`tel:${COMPANY_PHONE_NUMBER}`}
                    className="flex items-center space-x-3 text-white/90 hover:text-green-400 transition-colors duration-300 hover:underline"
                  >
                    <FaPhone className="h-4 w-4 shrink-0 text-green-400" />
                    <span className="text-sm">{COMPANY_PHONE_NUMBER}</span>
                  </Link>
                  <Link
                    href={`mailto:${COMPANY_INFO_EMAIL}`}
                    className="flex items-center space-x-3 text-white/90 hover:text-green-400 transition-colors duration-300 hover:underline"
                  >
                    <FaEnvelope className="h-4 w-4 shrink-0 text-green-400" />
                    <span className="text-sm">{COMPANY_INFO_EMAIL}</span>
                  </Link>
                </div>
              </div>

             

              
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Follow us:</span>
              <Link
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg"
              >
                <FiFacebook
                  size={20}
                  className="text-white transition-colors duration-300 group-hover:text-blue-600"
                />
              </Link>
              <Link
                href={INSTAGRAM_PROFILE_URL.replace("/embed", "")}
                target="_blank"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg"
              >
                <FaInstagram
                  size={20}
                  className="text-white transition-colors duration-300 group-hover:text-pink-600"
                />
              </Link>
            </div>
          </div>

          {/* Right Map Section */}
          <div className="w-full space-y-4">
            {/* Map Header */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400/20 ring-1 ring-green-400/40">
                  <FaMapMarkerAlt className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-wide">
                    Find Us Here
                  </h4>
                  <p className="text-sm text-white/60">
                    We&apos;d love to meet you in person
                  </p>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-green-400/60 via-blue-400/40 to-transparent" />
            </div>

            {/* Map */}
            <div className="group overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <iframe
                title="company-location"
                src={COMPANY_GOOGLE_MAP_IFRAME}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* Address pill below map */}
            <div className="flex items-center space-x-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-green-400" />
              <span className="text-sm text-white/80">{COMPANY_ADDRESS}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800">
        <FooterBottom />
      </div>
    </footer>
  );
}
