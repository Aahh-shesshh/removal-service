import React from 'react';

import PostCodeInput from '../post-code-input';

export default function ReceiveQuotesForYourMove() {
  return (
    <div className="flex flex-col items-center gap-8 bg-yellow-500/10 p-6 lg:flex-row lg:p-12">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Receive quotes for your move</h3>
        <p className="text-xl font-light">
          Discover which companies match your requirements in a matter of
          minutes.
        </p>
      </div>
      <PostCodeInput className="bg-transparent p-0" />
    </div>
  );
}
