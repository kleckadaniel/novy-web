"use client";

import type { Client } from "@/lib/types";

interface LogoMarqueeProps {
  clients: Client[];
}

export default function LogoMarquee({ clients }: LogoMarqueeProps) {
  // Duplicate the array so the marquee loops seamlessly
  const doubled = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-6" aria-hidden="true">
      {/* Fade masks on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-c-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-c-surface to-transparent" />

      <div className="flex animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 mx-10 flex items-center justify-center"
          >
            {client.logo ? (
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={client.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 w-auto object-contain grayscale opacity-50 hover:opacity-80 transition-opacity"
                />
              </a>
            ) : (
              /* Placeholder: replace with real logo when available */
              <div className="h-8 px-6 flex items-center justify-center border border-c-border rounded-md bg-c-bg">
                <span className="text-xs text-c-text-3 font-medium whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
