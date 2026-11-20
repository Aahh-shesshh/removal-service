// data/service-local-copy.ts
// Overlay that replaces templated copy with Hobart-specific content.
// ⚠️ All prices below are PLACEHOLDERS. Replace with the client's real rates before publishing.

export type TLocal = {
  notes: string[];
  included: string[];
  addOns: { name: string; price: string }[];
  pricing: { label: string; price: string }[];
  pricingNote?: string;
};

type Rewrite = {
  overview: string;
  description: string;
  sections: { title?: string; description?: string; is_list?: boolean }[];
  local: TLocal;
};

const PRICE_NOTE =
  "Prices are a guide for a typical Hobart home and vary with size, condition and access. Send us your details for a fixed quote.";

export const rewrites: Record<string, Rewrite> = {
  "domestic-cleaning-services-in-hobart": {
    overview:
      "Regular and one-off house cleaning across Hobart, from Sandy Bay and Battery Point to Glenorchy and Bellerive. We plan each clean around the home: older Georgian and sandstone cottages, split-level houses on the hill and damp-prone winter bathrooms all need different attention.",
    description:
      "Hobart homes are not all alike. A 1900s weatherboard in West Hobart has timber floors, picture rails and original windows that need gentle products, while a newer Kingston townhouse needs a faster, bathroom-and-kitchen-focused routine. Before your first visit we ask about floor types, pets, stairs and access, so you get a clean matched to your house rather than a generic checklist.",
    sections: [
      { title: "How we handle Hobart homes:" },
      {
        description:
          "Heritage and older homes: Picture rails, timber skirtings, leadlight and original floorboards are cleaned with low-moisture methods to avoid swelling or lifting finishes.",
        is_list: true,
      },
      {
        description:
          "Winter damp and mould: Cold, shaded bathrooms and south-facing bedrooms are common trouble spots in Hobart. We treat mould-prone grout, window sills and shower screens as standard.",
        is_list: true,
      },
      {
        description:
          "Multi-level and hillside houses: We bring equipment up internal stairs and across sloped sites, and work through the house level by level so nothing is missed.",
        is_list: true,
      },
      {
        description:
          "Fortnightly, weekly or one-off: Regular clients get the same cleaner where possible, and we keep a note of your preferences between visits.",
        is_list: true,
      },
    ],
    local: {
      notes: [
        "Tight street parking in Battery Point and Sandy Bay is common, so tell us where we can park.",
        "Wood heaters and open fires produce fine dust. Let us know and we will add extra dusting time.",
      ],
      included: [
        "All bedrooms and living areas: dust, vacuum, mop",
        "Kitchen: benchtops, sink, splashback, exterior of appliances",
        "Bathrooms and toilets: full scrub and sanitise, mirrors, floors",
        "Skirting boards and door frames wiped",
        "Internal glass doors and mirrors",
        "Rubbish bins emptied",
      ],
      addOns: [
        { name: "Inside oven", price: "from $70" },
        { name: "Inside fridge", price: "from $35" },
        { name: "Internal windows", price: "from $5 per pane" },
        { name: "Laundry and linen change", price: "from $30" },
      ],
      pricing: [
        { label: "2-bedroom, 1 bathroom", price: "from $140" },
        { label: "3-bedroom, 1–2 bathrooms", price: "from $190" },
        { label: "4-bedroom, 2 bathrooms", price: "from $250" },
      ],
      pricingNote: PRICE_NOTE,
    },
  },

  "office-cleaning-in-hobart": {
    overview:
      "Scheduled office and commercial cleaning for Hobart businesses, from CBD and Salamanca professional suites to Moonah and Cambridge units. We clean outside trading hours and keep a sign-off sheet so you can see what was done each visit.",
    description:
      "Many Hobart offices sit in converted heritage buildings or multi-tenant suites with shared entrances and older fittings. That means access arrangements, alarm codes and building rules matter as much as the cleaning. We agree entry, keys, bin days and shared-area responsibilities up front, then clean to a written scope.",
    sections: [
      { title: "What sets our office service apart:" },
      {
        description:
          "After-hours scheduling: Early-morning or evening cleans so your team and clients walk into a finished space, with building access and alarm procedures agreed in advance.",
        is_list: true,
      },
      {
        description:
          "Heritage and shared buildings: Narrow stairwells, shared kitchens and older timber floors are covered in the scope, and we follow your building manager's rules.",
        is_list: true,
      },
      {
        description:
          "Written scope and sign-off: You get a checklist per visit, so there are no arguments about what is and is not included.",
        is_list: true,
      },
      {
        description:
          "Flexible frequency: Daily, 2–3 times a week, weekly, or a one-off deep clean before an inspection or lease change.",
        is_list: true,
      },
    ],
    local: {
      notes: [
        "Hobart winters mean wet footprints and grit on entry floors, so we mop entrances on every visit from May to September.",
        "Waterfront and CBD buildings often have restricted loading and bin access. We work with your building manager.",
      ],
      included: [
        "Desks and workstations wiped (cleared surfaces)",
        "Vacuum carpets, mop hard floors",
        "Kitchen and tea point: sinks, benches, microwave exterior",
        "Bathrooms: full clean, restock of consumables if supplied",
        "Bins emptied and relined, recycling taken out",
        "Entrance glass and reception area",
      ],
      addOns: [
        { name: "Carpet steam clean", price: "from $4 per m²" },
        { name: "Internal windows", price: "from $5 per pane" },
        { name: "Fridge clean-out", price: "from $30" },
        { name: "Upholstery cleaning", price: "quote" },
      ],
      pricing: [
        { label: "Small office (up to 100 m²), 2x per week", price: "from $120 per visit" },
        { label: "Medium office (100–300 m²), 3x per week", price: "from $220 per visit" },
        { label: "One-off deep clean", price: "quote on inspection" },
      ],
      pricingNote: PRICE_NOTE,
    },
  },

  "move-in-out-cleaning-in-hobart": {
    overview:
      "Cleaning timed to your move. We work around settlement and key-handover dates in Hobart, getting the property ready for the next occupants or ready for you to unpack on day one.",
    description:
      "Move days in Hobart are tight: steep driveways, narrow streets and truck permits all squeeze the schedule. We coordinate with your removalist so the clean happens when the house is empty, and we can book a time between pickup and keys back or the day before you arrive.",
    sections: [
      { title: "Cleaning around a Hobart move:" },
      {
        description:
          "Empty-house cleaning: We clean cupboards, drawers, wardrobes and behind where furniture stood, which is impossible once everything is back in place.",
        is_list: true,
      },
      {
        description:
          "Kitchens and bathrooms first: These get the most time, including range hood filters, oven interiors, tapware descaling and shower screens.",
        is_list: true,
      },
      {
        description:
          "Timed to your settlement: Tell us your handover date and we will schedule around it. We can clean between your removalists leaving and the keys changing hands.",
        is_list: true,
      },
      {
        description:
          "Pairs with our removals: Book both together and we can sequence the two crews to avoid gaps.",
        is_list: true,
      },
    ],
    local: {
      notes: [
        "On steep or narrow streets in West Hobart and Sandy Bay, tell us where we can park so equipment can be carried in.",
        "Allow a few extra hours if the home has several stairs or split levels.",
      ],
      included: [
        "All rooms: floors, skirtings, light switches, door frames",
        "Inside all cupboards, drawers and wardrobes",
        "Kitchen: benches, sink, range hood exterior, appliance exteriors",
        "Bathrooms and toilets: descale and sanitise",
        "Interior windows, sills and tracks",
        "Garage or laundry sweep",
      ],
      addOns: [
        { name: "Oven deep clean", price: "from $70" },
        { name: "Carpet steam clean (per room)", price: "from $40" },
        { name: "External windows", price: "from $6 per pane" },
        { name: "Balcony or deck wash", price: "from $60" },
      ],
      pricing: [
        { label: "2-bedroom unit or apartment", price: "from $260" },
        { label: "3-bedroom house", price: "from $360" },
        { label: "4-bedroom house", price: "from $470" },
      ],
      pricingNote: PRICE_NOTE,
    },
  },

  "end-of-lease-cleaning-in-hobart": {
    overview:
      "End of lease cleaning for Hobart rentals, done to the standard property managers and landlords check against the entry condition report. If something is missed, we come back and re-clean at no charge.",
    description:
      "In Tasmania your bond is held by the Rental Deposit Authority, and a claim on it usually starts with the property manager comparing the exit condition to the entry report. Cleaning is one of the most common disputes. We work from a room-by-room checklist, and the typical items agents flag include oven interiors, range hoods, window tracks, bathroom grout and marks on walls.",
    sections: [
      { title: "How we help you get your bond back:" },
      {
        description:
          "Checklist-based: We clean to a room-by-room list matched to what agents inspect, and you can send us your property manager's own list.",
        is_list: true,
      },
      {
        description:
          "Common problem areas covered: Oven and rangehood, window tracks and sills, shower screens, grout, skirting boards, light fittings and cupboard interiors.",
        is_list: true,
      },
      {
        description:
          "Re-clean guarantee: If your agent raises a cleaning issue within a stated window after our visit, we return and fix it at no extra cost.",
        is_list: true,
      },
      {
        description:
          "Carpet and curtain requirements: Many Hobart leases require professional carpet cleaning. We can include it and provide a receipt for your agent.",
        is_list: true,
      },
    ],
    local: {
      notes: [
        "Older Hobart rentals often have timber floors, original windows and gas heaters. These need specific care to avoid damage claims.",
        "Check your lease: some agents require a carpet clean receipt. Keep ours handy for the inspection.",
        "Book 3–5 days before your handover so there is time for a re-clean if needed.",
      ],
      included: [
        "Standard 3-bedroom house, 1–2 bathrooms:",
        "All rooms: floors, skirtings, doors, light fittings, switches",
        "Kitchen: oven inside and out, rangehood, cupboards inside, benchtops, splashback",
        "Bathrooms: shower, bath, toilet, vanity, grout, mirrors, exhaust fan cover",
        "Windows inside, plus tracks and sills",
        "Wardrobes and built-ins inside",
        "Laundry tub and cabinets",
        "Garage floor sweep",
      ],
      addOns: [
        { name: "Carpet steam clean (whole house)", price: "from $180" },
        { name: "External windows", price: "from $6 per pane" },
        { name: "Blinds cleaning", price: "from $12 each" },
        { name: "Balcony or deck pressure wash", price: "from $90" },
      ],
      pricing: [
        { label: "1-bedroom unit", price: "from $220" },
        { label: "2-bedroom unit or townhouse", price: "from $320" },
        { label: "3-bedroom house", price: "from $430" },
        { label: "4-bedroom house", price: "from $540" },
      ],
      pricingNote: PRICE_NOTE,
    },
  },

  "window-cleaning-in-hobart": {
    overview:
      "Window cleaning for Hobart homes and businesses, built around the local conditions: salt-laden wind off the Derwent, hillside access and older timber-framed windows.",
    description:
      "Windows in Hobart collect salt spray near the waterfront, dust from wood-heater season and condensation marks in winter. Many hillside homes have windows that are hard to reach from the ground, and heritage homes often have multi-pane sashes that take longer to do properly. We quote after learning your window count, storeys and access.",
    sections: [
      { title: "Window cleaning for Hobart conditions:" },
      {
        description:
          "Salt and wind: Properties in Sandy Bay, Bellerive and Battery Point see salt build-up on exterior glass. We use methods that remove it rather than smear it.",
        is_list: true,
      },
      {
        description:
          "Multi-pane heritage windows: Sash and small-pane windows are cleaned by hand, with frames and sills wiped so water does not stain timber.",
        is_list: true,
      },
      {
        description:
          "Hillside and two-storey access: We use ladders and extension poles suited to sloped ground, and tell you up front if a window needs a different approach.",
        is_list: true,
      },
      {
        description:
          "Tracks and frames: Window tracks, flyscreens and sills are included, not left for you to finish.",
        is_list: true,
      },
    ],
    local: {
      notes: [
        "Winter condensation leaves marks on the inside of glass. Ask for an interior and exterior clean together.",
        "Very high or inaccessible windows may need a separate quote.",
      ],
      included: [
        "Interior and exterior glass",
        "Window frames and sills wiped",
        "Tracks vacuumed and wiped",
        "Flyscreens brushed down",
        "Sliding door glass",
      ],
      addOns: [
        { name: "Solar panel clean", price: "from $60" },
        { name: "Skylight clean", price: "from $25 each" },
        { name: "Post-renovation window clean", price: "quote" },
        { name: "Hard water or salt stain removal", price: "from $10 per pane" },
      ],
      pricing: [
        { label: "Small home (up to 10 windows)", price: "from $120" },
        { label: "Medium home (10–20 windows)", price: "from $200" },
        { label: "Two-storey home (20+ windows)", price: "from $320" },
      ],
      pricingNote: PRICE_NOTE,
    },
  },
};

// Merge helper: applies a rewrite to a service entry.
export function withLocalCopy<T extends { slug?: string; page_data?: any }>(
  service: T,
): T {
  const r = service.slug ? rewrites[service.slug] : undefined;
  if (!r) return service;
  return {
    ...service,
    overview: r.overview,
    description: r.description,
    page_data: {
      ...service.page_data,
      hero_title: "Get a fixed quote",
      hero_subtitle: "Local Hobart cleaners, clear pricing",
      sections: r.sections,
      local: r.local,
    },
  };
}