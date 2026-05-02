import { NextResponse } from "next/server";
import transporter, { mailOptions } from "../utils/nodemailer";
import { contactSchema } from "@/validators/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { success, data } = contactSchema.safeParse(body);

    

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
      replyTo: data.email,
      subject: `New Contact Inquiry from ${data.full_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 20px; background-color: #f0f4f8;">
          <div style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">

            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1a7a4a 0%, #2d9e6b 100%); padding: 28px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
                📬 New Contact Inquiry
              </h1>
              <p style="margin: 8px 0 0; color: #a8f0cc; font-size: 13px;">
                Submitted via website — please review and respond promptly
              </p>
            </div>

            <!-- Contact Info -->
            <div style="padding: 24px 32px 0;">
              <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 1px;">Contact Details</p>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; width: 38%; border-bottom: 1px solid #e2e8f0;">Full Name</td>
                  <td style="padding: 12px 16px; color: #1a202c; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${data.full_name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Email</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${data.email}" style="color: #2b6cb0; text-decoration: none; font-weight: 600;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600;">Phone</td>
                  <td style="padding: 12px 16px; color: #1a202c;">${data.phone_number ?? "Not provided"}</td>
                </tr>
              </table>
            </div>

            <!-- Message -->
            <div style="padding: 20px 32px 28px;">
              <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2d9e6b; border-radius: 6px; padding: 16px 20px; color: #2d3748; font-size: 14px; line-height: 1.7;">
                ${data.message}
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f0f4f8; padding: 16px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; color: #a0aec0; font-size: 12px;">This is an automated notification from your website. Please do not reply to this email.</p>
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (e) {
    console.error("[CONTACT FORM ERROR]", e);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}