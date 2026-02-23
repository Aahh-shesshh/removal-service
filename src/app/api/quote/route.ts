import { NextResponse } from "next/server";

import transporter, { mailOptions } from "../utils/nodemailer";
import { schema } from "@/validators/contact";
import { emailTemplate } from "../utils/emailTemplate";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { success, data } = schema.safeParse(body);

    if (!success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 409 },
      );
    }

    await transporter.sendMail({
      ...mailOptions,
      replyTo: data.email, // reply goes directly to the customer
      subject: `New Inquiry — ${data.service_type} from ${data.full_name}`,
      html: emailTemplate(data),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (e) {
    // Log the actual error so you can see what's going wrong
    console.error("[CONTACT FORM ERROR]", e);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
