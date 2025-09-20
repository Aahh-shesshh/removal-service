import type { FieldValues, UseFormSetError } from 'react-hook-form';

import { parseBackendValidation, parseToFormData } from './utils';

type FetchOptions<I> = {
  url: string;
  success?: string | boolean;
  error?: string | false;
  revalidate?: number;
  setError?: UseFormSetError<FieldValues>;
  headers?: Record<string, string>;
  toFormData?: boolean;
} & (
  | {
      method?: 'GET' | 'DELETE';
    }
  | {
      method?: 'POST' | 'PUT' | 'PATCH';
      body?: I | FormData;
    }
);

export const f = async <I extends FieldValues, O>({
  url,
  error,
  headers,
  method,
  revalidate,
  setError,
  toFormData,
  success,
  ...rest
}: FetchOptions<I>): Promise<O | undefined> => {
  const body = 'body' in rest ? rest.body : undefined;

  // need this to prevent deps from throwing an error
  const isServer = typeof window === 'undefined';
  // |
  // v  isServer will be used like this
  const toast = !isServer && (await import('react-hot-toast')).toast;

  const isBodyFormData = body instanceof FormData;

  try {
    const res = await fetch(url, {
      method: method || 'GET',
      headers: {
        ...(!isBodyFormData &&
          !toFormData && {
            'Content-Type': 'application/json',
          }),
        ...(headers && headers),
      },
      ...(method !== 'GET' &&
        (!toFormData
          ? {
              body: isBodyFormData ? body : JSON.stringify(body),
            }
          : {
              body: parseToFormData(body as { [key: string]: any }),
            })),
      ...(revalidate && { next: { revalidate } }),
    });

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`%c ${url} : ${res.status}`, 'color: #ff0000');
    }

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }

    if (res.status === 403) {
      throw new Error('You are not allowed to perform this action.');
    }

    if (res.status === 404) {
      throw new Error('Requested resource not found on the server.');
    }

    if (res.status === 405) {
      throw new Error('Method not allowed.');
    }

    if (res.status === 500) {
      throw new Error('Internal server error.');
    }

    const data = await res.json();

    // (server sent) error strings handling
    if (!res.ok && error !== false) {
      if (setError) {
        const errors = await parseBackendValidation<I, O>(data, setError, true);
        return errors as unknown as O;
      }
      if (toast) {
        toast.error(error || 'Something went wrong! Please try again later.');
      }

      return undefined;
    }

    if (toast && success !== false) {
      toast.success(success || data.message);
    }

    return data;
  } catch (e) {
    const err = e as Error;

    if (toast && error !== false) {
      toast.error(
        error || err.message || 'Something went wrong! Please try again later.',
      );
    }
  }

  return undefined;
};
