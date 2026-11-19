import { BUSINESS } from "../business-info";

export const data = {
  // Explicit headline lines replace the old split-by-word-count logic.
  headline: {
    line1: "Hobart's Local",
    line2: "Removalists & Cleaners",
    line3: "You Can Rely On",
  },
  // Plain-text version (metadata, alt text, etc.)
  title: "Hobart's local removalists and cleaners you can rely on",
  description: `${BUSINESS.tagline}. We make moving across Tasmania simple, stress-free and affordable, with our own insured crew and a ${BUSINESS.guarantee.name.toLowerCase()} on end-of-lease cleans.`,
  list: [
    { id: 1, title: "Our own local crew, not a middleman directory" },
    {
      id: 2,
      title: `${BUSINESS.google.rating}★ from ${BUSINESS.google.reviewCount} real Google reviews`,
    },
    { id: 3, title: "Free, no-obligation quotes across Hobart and Tasmania" },
  ],
  image: "/removal-pics/hero-image.jpg",
};
