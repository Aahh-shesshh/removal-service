export const {
  NEXT_PUBLIC_MAPS_API_KEY,

  NEXT_PUBLIC_GTAG_ID,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  NEXT_PUBLIC_SITE_URL,
  NODE_ENV,

  EMAIL_USER,
  EMAIL_PASSWORD,

  CONTACT_FORM_SERVICE_ID,
  CONTACT_FORM_TEMPLATE_ID,

  QUOTE_FORM_SERVICE_ID,
  QUOTE_FORM_TEMPLATE_ID,
} = process.env;
export const IS_DEV = NODE_ENV === "development";

export const COMPANY_NAME = "Multi Removal & Cleaning Services";
export const COMPANY_LOGO = "/logo/logo-svg.svg";
export const COMPANY_LOGO_WHITE = "/logo/white-logo-svg.svg";
export const COMPANY_INFO_EMAIL = "panta.multiservices@gmail.com";
// export const COMPANY_PHONE_NUMBER = "0410 936 413,  0491 388 096";
export const COMPANY_PHONE_NUMBER = "61 491 388 096";
export const COMPANY_WHATSAPP_NUMBER = "61 491 388 096";
export const COMPANY_ADDRESS = "7 Paringa Rd, Glenorchy TAS 7010, Australia";
export const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/p/Multi-removal-100066793002136/";
export const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/multi_removal_services/embed";
export const COMPANY_GOOGLE_MAP_IFRAME =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.78174971851!2d147.3670125402465!3d-42.853441905630234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e75e3b69e66ef%3A0x9cc4196537ee4dff!2sMulti%20Removal%20%26%20Cleaning%20Services!5e0!3m2!1sen!2snp!4v1711863403041!5m2!1sen!2snp&loading=async";
export const SITE_URL = IS_DEV ? "/" : NEXT_PUBLIC_SITE_URL!;

export const gallery_images = [
  {
    src: "/removal-pics/hero-image.jpg",
    alt: "Loading furniture into truck",
  },
  {
    src: "/removal-pics/members.jpg",
    alt: "Professional movers wrapping furniture",
  },
  {
    src: "/removal-pics/members2.jpg",
    alt: "Moving truck and team at work",
  },
  {
    src: "/removal-pics/onboarding-logo.jpg",
    alt: "Careful furniture handling",
  },
  {
    src: "/removal-pics/onboarding.jpg",
    alt: "Storage facility operations",
  },
  {
    src: "/removal-pics/parcel.jpg",
    alt: "Professional moving truck",
  },
  {
    src: "/removal-pics/removal-pic.jpg",
    alt: "Professional moving truck",
  },
  {
    src: "/removal-pics/remv2.jpg",
    alt: "Professional moving truck",
  },
  {
    src: "/removal-pics/rmv-3.jpg",
    alt: "Professional moving truck",
  },
  {
    src: "/removal-pics/setup.jpg",
    alt: "Professional moving truck",
  },
  {
    src: "/removal-pics/trucks.jpg",
    alt: "Professional moving truck",
  },
  {
    src: "/removal-pics/trucks2.jpg",
    alt: "Professional moving truck",
  },
];
