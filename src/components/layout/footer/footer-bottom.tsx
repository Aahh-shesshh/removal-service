import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/data/constants";
import { data } from "@/data/footer";

export default function FooterBottom() {
  return (
    <div className="layout flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between md:gap-4">
      {/* Copyright */}
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-green-400" />
        <p className="font-medium text-white/90">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}
        </p>
      </div>

      {/* Disclaimer Menu */}
      <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
        {data.disclaimer_menu.map((item, i) => (
          <React.Fragment key={i}>
            <li className="inline-block">
              <Button
                variant="link"
                asChild
                className="h-auto p-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <Link
                  href={item.url}
                  className="hover:underline decoration-green-400 underline-offset-4"
                >
                  {item.title}
                </Link>
              </Button>
            </li>
            {i < data.disclaimer_menu.length - 1 && (
              <li className="text-white/40">|</li>
            )}
          </React.Fragment>
        ))}
      </ul>

    
    </div>
  );
}
