import React from 'react';

import SelectServiceForm from '@/components/book-quote/select-service-form';

export default function BookQuote() {
  return (
    <div className="layout py-12">
      <div className="mx-auto w-full max-w-3xl">
        <h3 className="border-b-2 py-2 text-xl font-light">
          <span className="font-semibold">
            <span className="mt-3 block sm:mt-0 sm:inline-flex">
              Select a service
            </span>
          </span>
        </h3>
        <div className="space-y-8 py-6">
          <h2 className="text-2xl font-black">Services</h2>
          <SelectServiceForm />
        </div>
      </div>
    </div>
  );
}
