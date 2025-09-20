import React, { useEffect } from 'react';

import { Input } from './input';

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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!ref.current) return;

    const autoComplete = new window.google.maps.places.Autocomplete(
      ref.current,
      {
        componentRestrictions: {
          country: 'au',
        },
      },
    );

    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();

      if (onChange && place.formatted_address) {
        onChange({
          location: place.formatted_address,
          postal_code: place.address_components?.find((component) =>
            component.types.includes('postal_code'),
          )?.long_name,
          name: place.name,
        });
      }
    });

    return () => {
      autoComplete.unbindAll();
    };
  }, [onChange]);

  return <Input placeholder="Enter your location" ref={ref} />;
}
