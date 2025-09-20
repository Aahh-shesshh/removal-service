'use client';

import { LucideArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { useBookQuoteCtx } from '@/context/book-quote';
import { f } from '@/lib/fetch';
import { cn } from '@/lib/utils';
import { pathsWihtoutPrefix } from '@/services';
import type { TNextAPIError, TPostCodeValidateResponse } from '@/types';

import { Button } from './ui/button';
import { FormInput } from './ui/form-input';

type TProps = {
  className?: string;
};

export default function PostCodeInput({ className }: TProps) {
  const { state: ctx, setState: setCtx } = useBookQuoteCtx();

  const [state, setState] = React.useState({
    loading: false,
    error: false,
  });
  const { push } = useRouter();

  const handleGo = async (e: React.FormEvent<HTMLFormElement>) => {
    setState({
      ...state,
      loading: true,
      error: false,
    });
    e.preventDefault();

    const code = e.currentTarget.postcode.value;

    if (!code || code?.length <= 1) {
      setState({
        ...state,
        loading: false,
        error: true,
      });
      return;
    }

    const res = await f<
      { code: string },
      TPostCodeValidateResponse | TNextAPIError
    >({
      url: pathsWihtoutPrefix.SEARCH_ADDRESS_BY_POSTCODE,
      method: 'POST',
      body: { code },
      success: false,
      error: 'Invalid postcode. Please try again.',
    });

    if (res) {
      if ('data' in res) {
        setCtx({
          ...ctx,
          pickup_post_code_relevant_address: res.data.address,
          pickup_post_code: code,
        });

        push(`/book-quote/select-service/?post-code=${code}`);
      }
    }

    setState({
      ...state,
      loading: false,
      error: false,
    });
  };

  return (
    <form
      onSubmit={handleGo}
      className={cn(
        'flex w-full md:w-4/5 gap-2 rounded-lg bg-brand/20 p-3 md:p-6',
        className,
      )}
    >
      <FormInput
        name="postcode"
        placeholder="Your postcode"
        inputClassName="h-14 text-xl uppercase placeholder:capitalize"
        containerClassName="w-full"
        error={state.error ? 'Invalid postcode. Please try again.' : undefined}
      />
      <Button
        size="xl"
        variant="success"
        type="submit"
        isLoading={state.loading}
      >
        Go <LucideArrowRight className="ml-3" size={22} />
      </Button>
    </form>
  );
}
