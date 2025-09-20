import { z } from 'zod';

import { data } from '@/data/services';

export const schema = z.object({
  pickup_post_code: z.string().optional(),
  pickup_post_code_relevant_address: z.string().optional(),
  drop_post_code: z.string().optional(),
  drop_post_code_relevant_address: z.string().optional(),
  service: z.enum([
    ...(data.list?.map((service) => service.slug.toString()) || []),
  ] as [string]),
  pickup_address: z.string().optional(),
  drop_address: z.string().optional(),
  pickup_date: z.string().optional(),
  full_name: z.string().min(1),
  email: z.string().email(),
  phone_number: z.string().optional(),
  message: z.string().max(500).min(1),
  floor: z.string().optional(),
  driveway_status: z.string().optional(),
});
