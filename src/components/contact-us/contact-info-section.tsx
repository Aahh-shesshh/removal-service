import { LucideMail, LucideMapPin, LucidePhoneCall } from 'lucide-react';
import React from 'react';

import { data } from '@/data/contact-us';

export default function ContactInfoSection() {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-black leading-tight">{data.title}</h1>
        <h3 className="w-full text-xl font-bold leading-tight">
          Feel free to say hello !!
        </h3>
      </div>
      <div className="flex items-center gap-4 rounded-xl border border-primary px-4 py-3 md:gap-6 md:px-6 md:py-4">
        <div className="rounded-full bg-yellow-500/30 p-5">
          <LucideMapPin className="text-3xl md:text-4xl" />
        </div>
        <div className="space-y-2">
          <h6 className="text-xl font-semibold md:text-2xl">
            Head office address:
          </h6>
          <p className="text-sm text-black">{data.address}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-primary px-4 py-3 md:gap-6 md:px-6 md:py-4">
        <div className="rounded-full bg-yellow-500/30 p-5">
          <LucidePhoneCall className="text-3xl md:text-4xl" />
        </div>
        <div className="space-y-2">
          <h6 className="text-xl font-semibold md:text-2xl">Contact number:</h6>
          <p className="text-sm text-black">
            Phone-no: {data.phones.join(', ')}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-primary px-4 py-3 md:gap-6 md:px-6 md:py-4">
        <div className="rounded-full bg-yellow-500/30 p-5">
          <LucideMail className="text-3xl md:text-4xl" />
        </div>
        <div className="space-y-2">
          <h6 className="text-xl font-semibold md:text-2xl">Email address:</h6>
          <p className="text-sm text-black">
            Website-url: {data.site}
            <br />
            Email-link: {data.mails.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}
