import { NextResponse } from 'next/server';

import { objectToURLSearchParams } from '@/lib/utils';
import type { TSearchAddressResponse } from '@/types/google.types';

export async function POST(req: Request) {
  try {
    const { name, code } = await req.json();

    const query = objectToURLSearchParams({
      address: name,
      key: process.env.MAPS_API_KEY,
      components: `country:AU|${code && `postal_code:${code}`}`,
    });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?${query}`,
      {
        method: 'GET',
        next: {
          revalidate: 60 * 60 * 24,
        },
      },
    );

    const data: TSearchAddressResponse = await response.json();

    const addresses = data.results?.map((result) => result.formatted_address);

    if (data.status === 'OK' && addresses) {
      return NextResponse.json(
        { data: { addresses } },
        { status: response.status },
      );
    }

    if (data.status === 'ZERO_RESULTS') {
      return NextResponse.json(
        { message: 'Invalid post code' },
        { status: 404 },
      );
    }

    if (data.status !== 'OK') {
      return NextResponse.json(
        {
          message:
            data.status || 'Something went wrong while processing the request.',
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Google maps services not available at the moment.' },
      { status: 400 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'A server sided error occurred.' },
      { status: 500 },
    );
  }
}
