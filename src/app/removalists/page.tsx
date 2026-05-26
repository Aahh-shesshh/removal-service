import type { Metadata } from "next";
import {
  CheckCircle,
  MapPin,
  Star,
  Shield,
  Clock,
  Award,
  Truck,
  Home,
  Building2,
  Package,
} from "lucide-react";
import {
  COMPANY_NAME,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  NEXT_PUBLIC_SITE_URL,
  SITE_URL,
} from "@/data/constants";
import ReceiveQuotesForYourMove from "@/components/service/receive-quotes-for-your-move";
import PostCodeInput from "@/components/post-code-input";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: `Removalists Hobart | ${COMPANY_NAME}`,
  description:
    "Looking for trusted removalists in Hobart? Multi Removal & Cleaning Services offers affordable house removals, office relocations, and cleaning across Hobart and Tasmania. Get a free quote today.",
  alternates: {
    canonical: `${SITE_URL}/removalists-hobart`,
  },
  keywords: [
    "removalists Hobart",
    "removal service Hobart",
    "movers Hobart Tasmania",
    "cheap removalist Hobart",
    "house removal Hobart",
    "office relocation Hobart",
    "furniture removals Hobart",
    "two man and van Hobart",
    "local movers Hobart TAS",
    "affordable removalists Tasmania",
  ],
  robots: "index, follow",
  verification: {
    google: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: `Removalists Hobart | ${COMPANY_NAME}`,
    description:
      "Trusted removalists in Hobart, Tasmania. Affordable house removals, office relocations & cleaning. Fully insured. Get a free quote.",
    url: `${SITE_URL}/removalists-hobart`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Removalists Hobart | ${COMPANY_NAME}`,
    description:
      "Trusted removalists in Hobart, Tasmania. Affordable house removals, office relocations & cleaning. Fully insured. Get a free quote.",
  },
  metadataBase: new URL(NEXT_PUBLIC_SITE_URL!),
};

const services = [
  {
    icon: Home,
    title: "House Removals",
    description:
      "Moving home in Hobart or across Tasmania? Our experienced team handles everything from packing to unpacking with care.",
  },
  {
    icon: Building2,
    title: "Office Relocations",
    description:
      "Minimise downtime with our efficient office relocation service. We move your business safely and quickly.",
  },
  {
    icon: Package,
    title: "Packing Services",
    description:
      "Professional packing using quality materials to ensure your belongings arrive safe and undamaged.",
  },
  {
    icon: Truck,
    title: "Furniture Removals",
    description:
      "From single items to full households — we carefully transport all types of furniture across Hobart and TAS.",
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "$2M public liability coverage on every move.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    desc: "We respect your schedule and show up when promised.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    desc: "Hundreds of happy customers across Hobart and Tasmania.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Award,
    title: "Licensed Professionals",
    desc: "Trained, background-checked removalists you can trust.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const areas = [
  "Hobart CBD",
  "Sandy Bay",
  "Battery Point",
  "North Hobart",
  "Glenorchy",
  "Kingborough",
  "Clarence",
  "Huonville",
  "Launceston",
  "Devonport",
];

export default function RemovalistsHobart() {
  return (
    <div className="bg-gray-50/50">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-pulse" />
          <div
            className="absolute bottom-24 right-16 w-16 h-16 bg-green-100 rounded-full opacity-30 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-10 h-10 bg-yellow-100 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              <span>Serving Hobart &amp; All of Tasmania</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Removalists Hobart
              </span>
              <br />
              <span className="text-gray-900 text-3xl md:text-4xl">
                Trusted, Affordable &amp; Fully Insured
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re moving house, relocating your office, or need
              a reliable two-man and van service in Hobart — Multi Removal &amp;
              Cleaning Services has you covered. Professional movers, stress-free
              experience.
            </p>

            <PostCodeInput />

            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {[
                "Free Quote",
                "No Hidden Fees",
                "Insured Moves",
                "Same-Day Available",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Removal Services in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Hobart &amp; Tasmania
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From small apartments to large family homes and commercial
              offices — we handle every type of move across Hobart and the
              wider Tasmania region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Hobart Chooses{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Multi Removal
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;re not just movers — we&apos;re your neighbours. Local
                knowledge, honest pricing, and a team that genuinely cares about
                your move.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 ${item.bg} rounded-2xl h-fit`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Areas we serve */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Areas We Serve
                </h2>
              </div>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Based in Hobart, we cover the entire greater Hobart region and
                provide removal services across Tasmania.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 text-gray-800 rounded-full font-medium text-sm hover:border-blue-300 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold text-gray-900">
                  Currently accepting bookings across all Hobart &amp; TAS areas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ReceiveQuotesForYourMove />
        </div>
      </section>
      <Footer />
    </div>
  );
}