// components/service/service-local-details.tsx

import type { TLocal } from "@/data/local-copy";

export function ServiceLocalDetails({ local }: { local?: TLocal }) {
  if (!local) return null;

  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold">What&apos;s included</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {local.included.map((item) => (
            <li key={item} className="flex gap-2 text-gray-700">
              <span aria-hidden className="text-green-600">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Pricing guide</h2>
        <div className="mt-4 divide-y rounded-lg border bg-white">
          {local.pricing.map((row) => (
            <div key={row.label} className="flex justify-between gap-4 p-4">
              <span>{row.label}</span>
              <span className="font-medium">{row.price}</span>
            </div>
          ))}
        </div>
        {local.pricingNote && (
          <p className="mt-2 text-sm text-gray-500">{local.pricingNote}</p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Optional add-ons</h2>
        <div className="mt-4 divide-y rounded-lg border bg-white">
          {local.addOns.map((a) => (
            <div key={a.name} className="flex justify-between gap-4 p-4">
              <span>{a.name}</span>
              <span className="font-medium">{a.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Good to know in Hobart</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
          {local.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
