import { NextResponse } from 'next/server';

import { objectToURLSearchParams } from '@/lib/utils';
import type { TValidatePostCodeResponse } from '@/types/google.types';

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code || (code?.length || 0) < 4) {
      return NextResponse.json(
        { message: 'Invalid post code' },
        { status: 400 },
      );
    }

    const country = 'AU';
    const query = objectToURLSearchParams({
      address: `${code},${country}`,
      key: process.env.MAPS_API_KEY,
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

    const data: TValidatePostCodeResponse = await response.json();

    const formattedAddress = data.results.at(0)?.formatted_address;

    if (data.status === 'OK' && formattedAddress) {
      return NextResponse.json(
        { data: { address: formattedAddress } },
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
