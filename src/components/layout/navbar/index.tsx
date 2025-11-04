"use client";

import { LucideMenu, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  COMPANY_LOGO,
  COMPANY_WHATSAPP_NUMBER,
  SITE_URL,
} from "@/data/constants";
import { cn } from "@/lib/utils";
import { Menu } from "./menu";

const MobileDrawer = dynamic(() => import("./mobile-drawer"), {
  ssr: false,
  loading: () => (
    <Button variant="link" className="block md:hidden">
      <LucideMenu size={20} />
    </Button>
  ),
});

export default function Navbar() {
  return (
    <div
      className={cn(
        "border-b border-gray-200/60 shadow-lg bg-white/95 backdrop-blur-md sticky top-0 z-50"
      )}
    >
      <nav className="layout flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-16 lg:gap-24">
          <Link
            href={SITE_URL || "/"}
            className="transition-all duration-300 hover:scale-105 hover:drop-shadow-md"
          >
            <Image
              src={COMPANY_LOGO || ""}
              alt="logo"
              width={180}
              height={180}
              className="drop-shadow-sm"
            />
          </Link>
          <Menu />
        </div>
        <div className="flex items-center gap-3">
          <Link href={`tel:${COMPANY_WHATSAPP_NUMBER}`}>
            <Button
              variant="success"
              type="submit"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold sm:px-6 px-4 sm:py-3 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-500/20 hover:border-green-400/30"
            >
              <div className="p-1 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-200">
                <Phone
                  size={16}
                  className="text-green-400 group-hover:text-green-300 transition-colors duration-200"
                />
              </div>
              <span className="sm:block hidden ml-2">{COMPANY_WHATSAPP_NUMBER}</span>
            </Button>
          </Link>
          <MobileDrawer />
        </div>
      </nav>
    </div>
  );
}
