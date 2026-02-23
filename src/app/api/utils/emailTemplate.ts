import type { schema } from "@/validators/contact";
import type { z } from "zod";

export const emailTemplate = (data: z.infer<typeof schema>) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Request</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">
            
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg,#16a34a,#15803d);padding:36px 40px;text-align:center;">
                <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.5px;">
                  New Contact Request
                </h1>
                <p style="margin:8px 0 0;color:#bbf7d0;font-size:14px;">
                  You have received a new inquiry from your website
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:36px 40px;">

                <!-- Customer Info Section -->
                <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">
                  Customer Information
                </p>
                <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:28px;">
                  <tr style="background-color:#f9fafb;">
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;width:40%;border-bottom:1px solid #e5e7eb;">Full Name</td>
                    <td style="padding:14px 18px;font-size:13px;color:#111827;border-bottom:1px solid #e5e7eb;">${data.full_name}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Email</td>
                    <td style="padding:14px 18px;font-size:13px;border-bottom:1px solid #e5e7eb;">
                      <a href="mailto:${data.email}" style="color:#16a34a;text-decoration:none;">${data.email}</a>
                    </td>
                  </tr>
                  <tr style="background-color:#f9fafb;">
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;">Phone</td>
                    <td style="padding:14px 18px;font-size:13px;color:#111827;">
                      <a href="tel:${data.phone_number}" style="color:#16a34a;text-decoration:none;">${data.phone_number ?? "N/A"}</a>
                    </td>
                  </tr>
                </table>

                <!-- Service Details Section -->
                <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">
                  Service Details
                </p>
                <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:28px;">
                  <tr style="background-color:#f9fafb;">
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;width:40%;border-bottom:1px solid #e5e7eb;">Service Type</td>
                    <td style="padding:14px 18px;font-size:13px;border-bottom:1px solid #e5e7eb;">
                      <span style="background-color:#dcfce7;color:#15803d;padding:3px 10px;border-radius:999px;font-size:12px;font-weight:600;">
                        ${data.service_type}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Pickup Address</td>
                    <td style="padding:14px 18px;font-size:13px;color:#111827;border-bottom:1px solid #e5e7eb;">${data.pickup_address ?? "N/A"}</td>
                  </tr>
                  <tr style="background-color:#f9fafb;">
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Drop Address</td>
                    <td style="padding:14px 18px;font-size:13px;color:#111827;border-bottom:1px solid #e5e7eb;">${data.drop_address ?? "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Pickup Date</td>
                    <td style="padding:14px 18px;font-size:13px;color:#111827;border-bottom:1px solid #e5e7eb;">${data.pickup_date ?? "N/A"}</td>
                  </tr>
                  <tr style="background-color:#f9fafb;">
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Floor</td>
                    <td style="padding:14px 18px;font-size:13px;color:#111827;border-bottom:1px solid #e5e7eb;">${data.floor ?? "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 18px;font-size:13px;font-weight:600;color:#374151;">Stairs / Steep Driveway</td>
                    <td style="padding:14px 18px;font-size:13px;color:#111827;">${data.driveway_status ?? "N/A"}</td>
                  </tr>
                </table>

                <!-- Message Section -->
                <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">
                  Message
                </p>
                <div style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:18px;font-size:14px;color:#374151;line-height:1.7;">
                  ${data.message}
                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f9fafb;border-top:1px solid #e5e7eb;padding:24px 40px;text-align:center;">
                <p style="margin:0;font-size:12px;color:#9ca3af;">
                  This email was automatically generated from your website contact form.
                </p>
                <p style="margin:6px 0 0;font-size:12px;color:#9ca3af;">
                  Reply directly to this email to respond to ${data.full_name}.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;