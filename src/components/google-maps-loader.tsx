"use client";

import Script from "next/script";
import { createContext, useContext, useState } from "react";

type GoogleMapsContextType = {
  isLoaded: boolean;
};

const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isLoaded: false,
});

export const useGoogleMaps = () => useContext(GoogleMapsContext);

export default function GoogleMapsLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
        onLoad={() => setIsLoaded(true)}
        onError={(e) => console.error("Google Maps failed to load", e)}
      />
      <GoogleMapsContext.Provider value={{ isLoaded }}>
        {children}
      </GoogleMapsContext.Provider>
    </>
  );
}
