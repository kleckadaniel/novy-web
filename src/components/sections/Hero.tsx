import type { ContentData } from "@/lib/types";
import RotatingText from "@/components/ui/RotatingText";

interface HeroProps {
  data: ContentData["hero"];
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-c-surface overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--text) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-content relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Tagline */}
        <p className="animate-fade-in text-xs font-medium tracking-[0.2em] uppercase text-c-text-3 mb-10 md:mb-12">
          {data.tagline}
        </p>

        {/* H1 — static first line + rotating completion */}
        <h1
          className="font-display animate-fade-in-up animation-delay-100 text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] font-normal tracking-tight"
        >
          {/* Static part */}
          <span className="block text-c-text">
            {data.headlineStatic}
          </span>

          {/*
           * Fixed-height container — prevents layout shifts when the rotating
           * word changes length. overflow-hidden clips the enter/exit movement.
           * 1.15em gives a touch of breathing room above the line's descenders.
           */}
          <span
            className="block overflow-hidden"
            style={{ height: "1.15em" }}
          >
            <RotatingText words={data.rotatingWords} />
          </span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-in-up animation-delay-300 mt-8 md:mt-10 max-w-lg text-base md:text-lg text-c-text-2 leading-relaxed">
          {data.subtext}
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-400 mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Primary — filled pill */}
          <a
            href="#kontakt"
            className="inline-flex items-center bg-c-text text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-c-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-accent transition-colors"
          >
            {data.cta}
          </a>

          {/* Secondary — text link */}
          <a
            href="#sluzby"
            className="text-sm text-c-text-2 hover:text-c-accent underline underline-offset-4 decoration-[rgba(15,61,62,0.35)] hover:decoration-c-accent transition-colors"
          >
            {data.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
