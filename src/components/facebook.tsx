import React from 'react';

import { FACEBOOK_PAGE_URL } from '@/data/constants';

export default function Facebook() {
  return (
    <div
      className="fb-page w-full"
      data-href={FACEBOOK_PAGE_URL}
      data-tabs="timeline"
      data-width="500"
      data-height="100%"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
        <a href={FACEBOOK_PAGE_URL}>Multi removal</a>
      </blockquote>
    </div>
  );
}
