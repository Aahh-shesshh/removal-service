import React from 'react';

import Facebook from '@/components/facebook';
import Instagram from '@/components/instagram';
import ReceiveQuotesForYourMove from '@/components/service/receive-quotes-for-your-move';
import { data } from '@/data/terms-of-service';

export default function TermsOfService() {
  return (
    <div>
      <div className="layout pb-24">
        <div className="gap-8 lg:flex">
          <div className="w-full max-w-3xl space-y-6 py-12">
            <h1 className="text-4xl font-black leading-tight">{data.title}</h1>
            <p className="text-lg text-gray-700">{data.description}</p>
            <div className="space-y-6 py-8">
              {data.sections.map((item, i) => (
                <div key={i} className="space-y-4">
                  <h2 className="text-2xl font-black">{item.title}</h2>
                  <p className="text-lg text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex-1 space-y-6 py-14">
            <Facebook />
            <Instagram />
          </div>
        </div>
        <ReceiveQuotesForYourMove />
      </div>
    </div>
  );
}
