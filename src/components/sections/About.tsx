import Image from "next/image";
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

            <div className="mt-10 flex items-center gap-6 flex-wrap">
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

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/daniel-klecka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-c-text-2 hover:text-c-accent transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/daniel_klecka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-c-text-2 hover:text-c-accent transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Photo column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-c-border">
              <Image
                src="/daniel klecka foto.png"
                alt="Daniel Klečka"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
