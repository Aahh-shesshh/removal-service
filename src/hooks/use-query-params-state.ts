import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { objectToURLSearchParams } from '@/lib/utils';

type IOptions = {
  shouldDebounce?: boolean;
  debounce?: number;
  keys: string[];
  defaultValues?: Array<string | undefined>;
};

export default function useQueryParamsState(options: IOptions) {
  const { replace } = useRouter();

  const [data, setData] = useState<{
    [key: string]: string;
  }>(
    options.keys.reduce((acc, key, index) => {
      return {
        ...acc,
        [key]: options.defaultValues?.[index] || '',
      };
    }, {}),
  );

  useEffect(() => {
    const params = objectToURLSearchParams(data);
    if (options.shouldDebounce) {
      const timeout = setTimeout(() => {
        replace(`?${params}`);
      }, options.debounce || 500);

      return () => clearTimeout(timeout);
    }
    replace(`?${params}`);

    return () => {};
  }, [replace, data, options.shouldDebounce, options.debounce, options.keys]);

  return {
    data,
    setData,
  };
}
