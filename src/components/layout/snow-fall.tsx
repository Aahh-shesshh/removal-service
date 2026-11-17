"use client";

import React, { useMemo } from "react";

const FLAKE_COUNT = 40;

export default function Snowfall() {
  // Generated once on the client, so there's no hydration mismatch
  const flakes = useMemo(
    () =>
      Array.from({ length: FLAKE_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 4 + Math.random() * 6,
        duration: 8 + Math.random() * 10,
        delay: -Math.random() * 15,
        drift: -30 + Math.random() * 60,
        opacity: 0.4 + Math.random() * 0.6,
      })),
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden motion-reduce:hidden"
    >
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={
            {
              left: `${f.left}%`,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              animationDuration: `${f.duration}s`,
              animationDelay: `${f.delay}s`,
              "--drift": `${f.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
