/**
 * Single source of truth for every business fact shown on the site.
 * Hero, About Us, quote CTA, footer, etc. should import from here
 * so the numbers can never contradict each other again.
 *
 * ONLY put facts here that you can prove (Google profile, insurance
 * certificate, written guarantee terms). Update in one place.
 */
export const BUSINESS = {
  name: "Multi Removal & Cleaning Experts",
  shortName: "Multi Removal",
  tagline: "Locally Owned & Operated in Hobart",
  location: {
    suburb: "Glenorchy",
    city: "Hobart",
    state: "Tasmania",
    cityState: "Hobart, Tasmania",
  },
  google: {
    rating: "5.0",
    reviewCount: "50+", // keep in sync with your Google Business Profile
    label: "Rated on Google",
  },
  guarantee: {
    name: "Bond-Back Guarantee",
    short: "100% guaranteed",
  },
  insurance: {
    name: "Fully Insured",
    short: "Every move covered", // add a dollar figure only if it matches your policy
  },
} as const;
