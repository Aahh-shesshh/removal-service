import React, { useEffect, useState } from "react";
import { Input } from "./input";

type TProps = {
  onChange?: ({
    location,
    postal_code,
    name,
  }: {
    location?: string;
    postal_code?: string;
    name?: string;
  }) => void;
};

export default function MapAutocompleteInput({ onChange }: TProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === "undefined") return;

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    // Wait for Google Maps to load
    const checkGoogleMaps = setInterval(() => {
      if (window.google && window.google.maps) {
        setIsLoaded(true);
        clearInterval(checkGoogleMaps);
      }
    }, 100);

    // Cleanup interval after 10 seconds to prevent infinite checking
    const timeout = setTimeout(() => {
      clearInterval(checkGoogleMaps);
      console.error("Google Maps failed to load");
    }, 10000);

    return () => {
      clearInterval(checkGoogleMaps);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !ref.current) return;

    const autoComplete = new window.google.maps.places.Autocomplete(
      ref.current,
      {
        componentRestrictions: {
          country: "au",
        },
      }
    );

    const listener = autoComplete.addListener("place_changed", () => {
      const place = autoComplete.getPlace();
      if (onChange && place.formatted_address) {
        onChange({
          location: place.formatted_address,
          postal_code: place.address_components?.find((component) =>
            component.types.includes("postal_code")
          )?.long_name,
          name: place.name,
        });
      }
    });

    return () => {
      if (window.google && window.google.maps && window.google.maps.event) {
        window.google.maps.event.removeListener(listener);
      }
    };
  }, [isLoaded, onChange]);

  return (
    <Input placeholder="Enter your location" ref={ref} disabled={!isLoaded} />
  );
}
