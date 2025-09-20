import { z } from 'zod';

import { data } from '@/data/services';

export const schema = z.object({
  full_name: z.string().min(1),
  email: z.string().email(),
  phone_number: z.string().optional(),
  pickup_address: z.string().optional(),
  service_type: z.enum([
    ...(data.list?.map((service) => service.title) || []),
  ] as [string]),
  pickup_date: z.string().optional(),
  drop_address: z.string().optional(),
  message: z.string().max(500).min(1),
  floor: z.string().optional(),
  driveway_status: z.string().optional(),
});
