import type { ContentData } from "@/lib/types";

interface AboutProps {
  data: ContentData["about"];
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-c-bg">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-normal text-c-text leading-tight mb-8">
              {data.headline}
            </h2>

            <p className="text-base md:text-lg text-c-text-2 leading-relaxed mb-6">
              {data.text}
            </p>

            <div className="border-l-2 border-c-border pl-5">
              <p className="text-sm text-c-text-2 leading-relaxed italic">
                {data.note}
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-c-text underline underline-offset-4 decoration-[rgba(15,61,62,0.35)] hover:text-c-accent hover:decoration-c-accent transition-colors"
              >
                Napište mi
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Photo column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-c-border">
              {/*
               * Replace this placeholder with a real <Image /> component when the photo is ready.
               * Example:
               *   import Image from "next/image";
               *   <Image src="/photos/daniel.jpg" alt="Daniel Klečka" fill className="object-cover" />
               */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-c-text-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" />
                </svg>
                <span className="text-xs tracking-wider uppercase">Fotografie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
