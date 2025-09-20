type ServicePathParams = {
  id: string;
  query: string;
};

export const pathsWihtoutPrefix = {
  SEARCH_ADDRESS_BY_NAME: '/api/address/by-name/',
  SEARCH_ADDRESS_BY_POSTCODE: '/api/address/by-post-code/',

  CONTACT_FORM: '/api/contact/',
  QUOTE_FORM: '/api/quote/',

  T2: ({ id }: ServicePathParams) => `/t2/?${id}`,
};

const pathsWithPrefix = Object.entries(pathsWihtoutPrefix).map(
  ([key, value]) => {
    if (typeof value === 'function') {
      return {
        [key]: (args: Parameters<typeof value>) =>
          `${process.env.API_BASE_URL}${value(
            args as unknown as ServicePathParams,
          )}`,
      };
    }
    return {
      [key]: `${process.env.API_BASE_URL}${value}`,
    };
  },
);

export const PATH = Object.assign({}, ...pathsWithPrefix) as {
  [key in keyof typeof pathsWihtoutPrefix]: (typeof pathsWihtoutPrefix)[key];
};
