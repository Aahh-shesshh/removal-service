import React from 'react';

import ContactForm from '@/components/contact-us/contact-form';
import ContactInfoSection from '@/components/contact-us/contact-info-section';

export default function ContactUs() {
  return (
    <div>
      <div className="layout flex flex-col items-stretch gap-6 py-24 md:flex-row lg:gap-12">
        <div className="w-full space-y-6">
          <ContactInfoSection />
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
