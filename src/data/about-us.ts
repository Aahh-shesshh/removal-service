import type { TAboutUsData } from "@/types";
import { BUSINESS } from "@/data/business-info";

export const data: TAboutUsData = {
  title: "About Multi Removal and Cleaning Experts Hobart",
  description:
    `Multi Removal and Cleaning Experts is a locally owned and operated removalist and cleaning service based in ${BUSINESS.location.suburb}, ${BUSINESS.location.city}. ` +
    "We specialise in house removals, office relocations and end-of-lease cleaning across Hobart and Tasmania. " +
    "Our affordable two-man and van service, professional packers and fully insured movers make your move stress-free. " +
    "Whether you need a local removalist in Hobart or a complete removal and cleaning package, " +
    "we deliver reliable, fast and affordable service every time. " +
    "Serving Hobart TAS and surrounding areas. Get your free quote today.",
  paragraphs: [
    {
      title: "Removal Services in Hobart",
      content:
        "Whether you're moving homes, offices or relocating your business, our local team of removalists will make the transition smooth and stress-free. Our removal services include:",
      list: [
        {
          title: "House Removals Hobart:",
          description:
            "Our experienced house removalists handle your belongings with care, ensuring a seamless move to your new home.",
          is_list: true,
        },
        {
          title: "Office Relocations Hobart:",
          description:
            "We know how important it is to minimise downtime. We plan and carry out your office relocation with precision.",
          is_list: true,
        },
        {
          title: "Piano Removals Hobart:",
          description:
            "Pianos need specialised handling. Our team is trained to move your instrument with the utmost care.",
          is_list: true,
        },
        {
          title: "Furniture Pickup and Delivery Hobart:",
          description:
            "Need furniture collected or delivered? We'll get your items to their destination safely.",
          is_list: true,
        },
      ],
    },
    {
      title: "Cleaning Services in Hobart",
      content:
        "In addition to removals, we offer a range of cleaning services in Hobart, including:",
      list: [
        {
          title: "End of Lease Cleaning Hobart:",
          description: `We'll leave your rental spotless, backed by our ${BUSINESS.guarantee.name} so you can get your bond back without the hassle.`,
          is_list: true,
        },
        {
          title: "Commercial Cleaning Hobart:",
          description:
            "We keep your office or business premises clean and professional.",
          is_list: true,
        },
        {
          title: "Steam Carpet Cleaning Hobart:",
          description:
            "Our steam cleaning gives tired carpets a fresh, revitalised finish.",
          is_list: true,
        },
      ],
    },
    {
      title: "Locally Owned, Locally Accountable",
      content: `We're based in ${BUSINESS.location.suburb} and work across ${BUSINESS.location.cityState}. Because we're a local crew rather than a national directory, you deal with the same people from quote to move day, and our ${BUSINESS.google.reviewCount} Google reviews are from Tasmanian customers just like you.`,
    },
    {
      title: "Eco-Friendly and Responsible Services",
      content:
        "We take our responsibility to the environment and our customers seriously, with controlled water and energy use on every job. Our team is fully insured to give you peace of mind during your move or cleaning project.",
      list: [
        {
          description:
            "Call us today for a free quote on removals or cleaning in Hobart.",
        },
      ],
    },
  ],
};
