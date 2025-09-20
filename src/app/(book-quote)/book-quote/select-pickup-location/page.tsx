import React from 'react';

import SelectLocationForm from '@/components/book-quote/select-location-form';

export default function SelectPickupLocation() {
  return (
    <div className="layout py-12">
      <div className="mx-auto w-full max-w-3xl">
        <h3 className="border-b-2 py-2 text-xl font-light">
          <span className="font-semibold">
            <span className="mt-3 block sm:mt-0 sm:inline-flex">
              Select pickup location and drop location
            </span>
          </span>
        </h3>
        <div className="space-y-8 py-6">
          <h2 className="text-2xl font-black">Select locations</h2>
          <SelectLocationForm />
        </div>
      </div>
    </div>
  );
}
