import React from 'react';

import { INSTAGRAM_PROFILE_URL } from '@/data/constants';

export default function Instagram() {
  return (
    <iframe
      title="Instagram"
      src={INSTAGRAM_PROFILE_URL}
      width="100%"
      className="h-[450px]"
    />
  );
}
