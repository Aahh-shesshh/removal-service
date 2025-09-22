import type { IconType } from "react-icons/lib";

export type TPostCodeValidateResponse = {
  data: {
    address: string;
  };
};

export type TAddressSearchResponse = {
  data: {
    addresses: string[];
  };
};

export type TNextAPIError = {
  message: string;
};

export type TServiceData = {
  subtitle?: string;
  title?: string;
  description?: string;
  list?: TService[];
};

export type TAboutUsData = {
  title?: string;
  description?: string;
  paragraphs?: TAboutUsParagraph[];
};

export type TAboutUsParagraph = {
  title?: string;
  image?: string;
  content?: string;
  list?: TSection[];
};

export type TService = {
  id: number;
  title: string;
  type: "service" | "cleaning";
  overview?: string;
  description?: string;
  icon: IconType;
  images?: string[];
  page_data?: TServicePageData;
  slug: string;
};

export type TServicePageData = {
  hero_title?: string;
  hero_subtitle?: string;
  image?: string;
  list?: TCheckList[];
  sections?: TSection[];
};

export type TCheckList = {
  id: number;
  title: string;
};

export type TSection = {
  title?: string;
  description?: string;
  is_list?: boolean;
  image?: string;
};

export type TMailData<T> = {
  to: string;
  template: string;
  subject: string;

  context: T;
};
