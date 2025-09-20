'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LucideArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useBookQuoteCtx } from '@/context/book-quote';
import { f } from '@/lib/fetch';
import { pathsWihtoutPrefix } from '@/services';

import { Button } from '../ui/button';
import { DateInput } from '../ui/date-input';
import { FormInput } from '../ui/form-input';
import { SelectInput } from '../ui/select-input';

const schema = z.object({
  full_name: z.string().min(1),
  email: z.string().email(),
  phone_number: z.string().optional(),
  pickup_date: z.string().optional(),
  message: z.string().max(500).min(1),
  floor: z.string().optional(),
  driveway_status: z.string().optional(),
});

export type TAdditionalInformationFormValues = z.infer<typeof schema>;

export default function AdditionalInformationForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { state, setState } = useBookQuoteCtx();

  const { push } = useRouter();

  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<TAdditionalInformationFormValues>({
    resolver: zodResolver(schema),
  });

  const isDisabled = useMemo(
    () =>
      !(
        state?.service ||
        state?.pickup_post_code ||
        state?.pickup_address ||
        state?.drop_address ||
        state?.drop_post_code
      ),
    [state],
  );

  const onSubmit: SubmitHandler<TAdditionalInformationFormValues> = async (
    d,
  ) => {
    setIsLoading(true);
    setState({ ...state, ...d });
    await f({
      url: pathsWihtoutPrefix.QUOTE_FORM,
      method: 'POST',
      body: { ...state, ...d },
      success:
        'Your message has been sent successfully! We will get back to you soon.',
      error: 'Something went wrong!',
    });
    push('/');
    setIsLoading(false);
  };

  return (
    <div>
      <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FormInput
              name="full_name"
              label="Full Name"
              placeholder="Eg. John Doe"
              error={errors.full_name?.message}
              register={register('full_name')}
              containerClassName="w-full"
            />
            <FormInput
              name="email"
              label="Email"
              placeholder="Eg. johndoe@gmail.com"
              error={errors.email?.message}
              register={register('email')}
              containerClassName="w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            {state?.type === 'service' && (
              <DateInput
                name="pickup_date"
                label="Pickup Date"
                onChange={(value) => {
                  setValue('pickup_date', value);
                }}
                containerClassName="w-full"
              />
            )}
            <FormInput
              type="string"
              name="phone_number"
              label="Phone Number"
              placeholder="Eg. 4XX XXX XXX"
              register={register('phone_number')}
              error={errors.phone_number?.message}
              containerClassName="w-full"
            />
          </div>
          {state?.type === 'service' && (
            <FormInput
              name="floor"
              label="Floor"
              type="text"
              className="w-full"
              placeholder="Eg: 1st floor, 2nd floor, etc."
              register={register('floor')}
              error={errors.phone_number?.message}
            />
          )}
          <FormInput
            type="textarea"
            name="message"
            label="Message"
            placeholder="Eg. Extra information about the request"
            error={errors.message?.message}
            register={register('message')}
          />
          {state?.type === 'service' && (
            <SelectInput
              name="driveway_status"
              placeholder="Select a driveway status..."
              label="Are there stairs or steep driveways at any locations?"
              data={
                [
                  { id: 'yes', name: 'Yes' },
                  { id: 'no', name: 'No' },
                ] || []
              }
              get="name"
              stateChange={(value) => setValue('driveway_status', value)}
            />
          )}
        </div>
        <Button
          variant="success"
          size="xl"
          className="w-full space-x-6"
          disabled={isDisabled}
          isLoading={isLoading}
        >
          <span>Submit request</span>
          <LucideArrowRight />
        </Button>
      </form>
    </div>
  );
}
