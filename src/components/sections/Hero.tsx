import type { ContentData } from "@/lib/types";

interface HeroProps {
  data: ContentData["hero"];
}

export default function Hero({ data }: HeroProps) {
  // Split the headline by \n so we can render each line
  const headlineLines = data.headline.split("\n");

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      {/* Subtle background texture / grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0f0f0f 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-content relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Label / tagline */}
        <p className="animate-fade-in text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-10 md:mb-12">
          {data.tagline}
        </p>

        {/* Main headline */}
        <h1 className="font-display animate-fade-in-up animation-delay-100">
          {headlineLines.map((line, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                <span className="text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] font-normal text-neutral-900 tracking-tight">
                  {line}
                </span>
              ) : (
                <span className="text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] font-normal text-neutral-300 tracking-tight italic">
                  {line}
                </span>
              )}
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p className="animate-fade-in-up animation-delay-300 mt-8 md:mt-10 max-w-xl text-base md:text-lg text-neutral-500 leading-relaxed">
          {data.subtext}
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-400 mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
          >
            {data.cta}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="translate-x-0 group-hover:translate-x-0.5 transition-transform"
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
          <a
            href="#services"
            className="text-sm text-neutral-500 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-600 transition-colors"
          >
            Co pro vás dělám
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in animation-delay-600 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-300">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-neutral-300 to-transparent" />
      </div>
    </section>
  );
}
