import React from "react";

import Footer from "@/components/layout/footer";
import Snowfall from "@/components/layout/snow-fall";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Snowfall />
      {children}
      <Footer />
    </div>
  );
}
