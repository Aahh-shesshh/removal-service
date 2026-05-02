import { z } from "zod";

// Used by /api/contact — simple inquiry form
export const contactSchema = z.object({
  full_name: z.string().min(1),
  email: z.string().email(),
  phone_number: z.string().optional(),
  message: z.string().min(1).max(500),
});

// Used by /api/quote — full booking/service form (AdditionalInformationForm + context state)
export const quoteSchema = z.object({
  // Contact fields
  full_name: z.string().min(1),
  email: z.string().email(),
  phone_number: z.string().optional(),
  message: z.string().min(1).max(500),

  // From BookQuoteCtx state (merged in the form's onSubmit)
  type: z.string().optional(),
  service: z.string().optional(),
  pickup_address: z.string().optional(),
  pickup_post_code: z.string().optional(),
  drop_address: z.string().optional(),
  drop_post_code: z.string().optional(),

  // Additional fields shown when type === "service"
  pickup_date: z.string().optional(),
  floor: z.string().optional(),
  driveway_status: z.string().optional(),
});

export type TContactFormValues = z.infer<typeof contactSchema>;
export type TQuoteFormValues = z.infer<typeof quoteSchema>;
