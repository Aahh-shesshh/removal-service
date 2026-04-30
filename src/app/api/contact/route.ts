import { NextResponse } from "next/server";
import transporter, { mailOptions } from "../utils/nodemailer";
import { combinedSchema } from "@/validators/contact";

// Escapes special HTML characters to prevent XSS via user-submitted content
function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: Request) {
  try {
    // Guard: ensure request is JSON
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 },
      );
    }

    const result = combinedSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: result.error.flatten() },
        { status: 400 },
      );
    }

    const data = result.data;

    // Escape all user-supplied fields before embedding in HTML
    const safeName        = escapeHtml(data.full_name);
    const safeEmail       = escapeHtml(data.email);
    const safePhone       = escapeHtml(data.phone_number) || "Not provided";
    const safeService     = escapeHtml(data.service);
    const safePickup      = escapeHtml(data.pickup_address);
    const safeDrop        = escapeHtml(data.drop_address);
    const safeFloor       = escapeHtml(data.floor);
    const safeDriveway    = escapeHtml(data.driveway_status);
    const safeMessage     = escapeHtml(data.message);

    const safePickupDate = data.pickup_date
      ? new Date(data.pickup_date).toLocaleDateString("en-AU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

    const hasServiceSection =
      data.service ||
      data.pickup_address ||
      data.drop_address ||
      data.pickup_date;

    await transporter.sendMail({
      ...mailOptions,
      subject: "New Inquiry Received",
      html: `
<div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 20px; background-color: #f0f4f8;">
  <div style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1a7a4a 0%, #2d9e6b 100%); padding: 28px 32px;">
      <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
        📬 New Inquiry Received
      </h1>
      <p style="margin: 8px 0 0; color: #a8f0cc; font-size: 13px;">
        Submitted via website — please review and respond promptly
      </p>
    </div>

    <!-- Contact Info Section -->
    <div style="padding: 24px 32px 0;">
      <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 1px;">Contact Details</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; width: 38%; border-bottom: 1px solid #e2e8f0;">Full Name</td>
          <td style="padding: 12px 16px; color: #1a202c; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Email</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0;">
            <a href="mailto:${safeEmail}" style="color: #2b6cb0; text-decoration: none; font-weight: 600;">${safeEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600;">Phone</td>
          <td style="padding: 12px 16px; color: #1a202c;">${safePhone}</td>
        </tr>
      </table>
    </div>

    <!-- Service Info Section -->
    ${
      hasServiceSection
        ? `
    <div style="padding: 20px 32px 0;">
      <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 1px;">Service Details</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        ${
          data.service  /* ✅ Fixed: was checking data.type but rendering data.service */
            ? `
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; width: 38%; border-bottom: 1px solid #e2e8f0;">Service Type</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0;">
            <span style="background-color: #d1fae5; color: #065f46; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${safeService}</span>
          </td>
        </tr>`
            : ""
        }
        ${
          data.pickup_address
            ? `
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Pickup Address</td>
          <td style="padding: 12px 16px; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${safePickup}</td>
        </tr>`
            : ""
        }
        ${
          data.drop_address
            ? `
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Drop Address</td>
          <td style="padding: 12px 16px; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${safeDrop}</td>
        </tr>`
            : ""
        }
        ${
          data.pickup_date
            ? `
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Pickup Date</td>
          <td style="padding: 12px 16px; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${safePickupDate}</td>
        </tr>`
            : ""
        }
        ${
          data.floor
            ? `
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Floor</td>
          <td style="padding: 12px 16px; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${safeFloor}</td>
        </tr>`
            : ""
        }
        ${
          data.driveway_status
            ? `
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; color: #555; font-weight: 600;">Stairs / Steep Driveway</td>
          <td style="padding: 12px 16px;">
            <span style="background-color: ${data.driveway_status === "Yes" ? "#fee2e2" : "#d1fae5"}; color: ${data.driveway_status === "Yes" ? "#991b1b" : "#065f46"}; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${safeDriveway}</span>
          </td>
        </tr>`
            : ""
        }
      </table>
    </div>`
        : ""
    }

    <!-- Message Section -->
    <div style="padding: 20px 32px 28px;">
      <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 1px;">Message</p>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2d9e6b; border-radius: 6px; padding: 16px 20px; color: #2d3748; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
        ${safeMessage}
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
  } catch (error) {
    // ✅ Log the real error for debugging (server-side only, never sent to client)
    console.error("[/api/contact] Failed to send email:", error);

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}