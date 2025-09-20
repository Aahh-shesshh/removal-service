import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useBookQuoteCtx } from '@/context/book-quote';
import { f } from '@/lib/fetch';
import { pathsWihtoutPrefix } from '@/services';
import type { TAddressSearchResponse, TNextAPIError } from '@/types';

export default function useSearchAddressDebounce(mode: 'pickup' | 'drop') {
  const { state } = useBookQuoteCtx();

  const pickupPostCode =
    useSearchParams().get('pickup-post-code') || state?.pickup_post_code;

  const code = mode === 'pickup' ? pickupPostCode : state?.drop_post_code;

  const [search, setSearch] = useState<string | undefined>();

  const [isSearching, setIsSearching] = useState(false);

  const [addresses, setAddresses] = useState<string[] | undefined>();

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const fn = async () => {
      timeout = setTimeout(async () => {
        if (!search) return;
        setIsSearching(true);

        const res = await f<
          { name: string; code?: string },
          TAddressSearchResponse | TNextAPIError
        >({
          url: pathsWihtoutPrefix.SEARCH_ADDRESS_BY_NAME,
          method: 'POST',
          body: { name: search, code },
          success: false,
          error: "Couldn't find any addresses matching the postal code.",
        });

        if (res) {
          if ('data' in res) {
            setAddresses(res.data.addresses);
          }
        }
        setIsSearching(false);
      }, 1000);
    };

    fn();

    return () => clearTimeout(timeout);
  }, [search, code]);

  return { search, data: addresses, changeSearch, loading: isSearching };
}
