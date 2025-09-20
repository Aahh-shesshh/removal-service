import { NextResponse } from 'next/server';

import {
  EMAIL_USER,
  QUOTE_FORM_SERVICE_ID,
  QUOTE_FORM_TEMPLATE_ID,
} from '@/data/constants';
import { schema } from '@/validators/quote';

import sendMail from '../utils';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { success } = schema.safeParse(body);

    if (!success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    if (!QUOTE_FORM_SERVICE_ID || !QUOTE_FORM_TEMPLATE_ID || !EMAIL_USER) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 409 },
      );
    }

    await sendMail({
      template: 'quote.template',
      context: body,
      subject: 'New Quote Request',
      to: EMAIL_USER!,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
