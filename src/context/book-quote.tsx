'use client';

import { useSearchParams } from 'next/navigation';
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

type TBookQuoteData = {
  pickup_post_code?: string;
  pickup_post_code_relevant_address?: string;
  drop_post_code?: string;
  drop_post_code_relevant_address?: string;
  service?: string;
  pickup_address?: string;
  drop_address?: string;
  pickup_date?: string;
  full_name?: string;
  email?: string;
  phone_number?: string;
  message?: string;
  type?: string;
};

type TBookQuoteContext = {
  state: TBookQuoteData | undefined;
  setState: Dispatch<SetStateAction<TBookQuoteData | undefined>>;
};

const UNDEF = {
  pickup_post_code: undefined,
  pickup_post_code_relevant_address: undefined,
  drop_post_code: undefined,
  drop_post_code_relevant_address: undefined,
  service: undefined,
  pickup_address: undefined,
  drop_address: undefined,
  pickup_date: undefined,
  full_name: undefined,
  email: undefined,
  phone_number: undefined,
  message: undefined,
};

const BookQuoteContext = createContext<TBookQuoteContext>({
  state: UNDEF,
  setState: () => {},
});

export default function BookQuoteContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const code = useSearchParams().get('code');
  const [state, setState] = useState<TBookQuoteData | undefined>({
    ...UNDEF,
    pickup_post_code: code || undefined,
  });

  const ctx = useMemo(
    () => ({
      state,
      setState,
    }),
    [state, setState],
  );

  return (
    <BookQuoteContext.Provider value={ctx}>
      {children}
    </BookQuoteContext.Provider>
  );
}

export const useBookQuoteCtx = () => useContext(BookQuoteContext);
