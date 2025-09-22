import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

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
          <div className="w-full space-y-10">
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

            {/* Menu Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {data.menu?.map((item, i) => (
                <div key={i} className="group   space-y-4">
                  <div className="flex w-full  items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <h4 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-green-200">
                      {item.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((subItem, j) => (
                      <li key={j}>
                        <Button
                          variant="link"
                          asChild
                          className="h-auto p-0 text-white/80 hover:text-white transition-colors duration-300"
                        >
                          <Link
                            href={subItem.url}
                            scroll
                            className="flex items-center space-x-2 hover:translate-x-1 transition-transform duration-300"
                          >
                            <span className="h-1 w-1 rounded-full bg-white/60" />
                            <span>{subItem.title}</span>
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h4 className="mb-4 text-lg font-bold text-white">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/90">
                  <FaMapMarkerAlt className="h-4 w-4 text-green-400" />
                  <span className="text-sm">{COMPANY_ADDRESS}</span>
                </div>
                <Link
                  href={`tel:${COMPANY_PHONE_NUMBER}`}
                  className="flex items-center space-x-3 text-white/90 hover:text-green-400 transition-colors duration-300 hover:underline"
                >
                  <FaPhone className="h-4 w-4 text-green-400" />
                  <span className="text-sm">{COMPANY_PHONE_NUMBER}</span>
                </Link>
                <Link
                  href={`mailto:${COMPANY_INFO_EMAIL}`}
                  className="flex items-center space-x-3 text-white/90 hover:text-green-400 transition-colors duration-300 hover:underline"
                >
                  <FaEnvelope className="h-4 w-4 text-green-400" />
                  <span className="text-sm">{COMPANY_INFO_EMAIL}</span>
                </Link>
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
          <div className="w-full">
            <div className="group overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative">
                <iframe
                  title="company-location"
                  src={COMPANY_GOOGLE_MAP_IFRAME}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
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
