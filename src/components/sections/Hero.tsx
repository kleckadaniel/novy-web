import type { ContentData } from "@/lib/types";
import RotatingText from "@/components/ui/RotatingText";

interface HeroProps {
  data: ContentData["hero"];
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0f0f0f 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-content relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Tagline */}
        <p className="animate-fade-in text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-10 md:mb-12">
          {data.tagline}
        </p>

        {/* H1 — static first line + rotating completion */}
        <h1
          className="font-display animate-fade-in-up animation-delay-100 text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] font-normal tracking-tight"
        >
          {/* Static part */}
          <span className="block text-neutral-900">
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
        <p className="animate-fade-in-up animation-delay-300 mt-8 md:mt-10 max-w-lg text-base md:text-lg text-neutral-500 leading-relaxed">
          {data.subtext}
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-400 mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Primary — filled pill */}
          <a
            href="#contact"
            className="inline-flex items-center bg-neutral-900 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-neutral-700 transition-colors"
          >
            {data.cta}
          </a>

          {/* Secondary — text link */}
          <a
            href="#services"
            className="text-sm text-neutral-500 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-600 transition-colors"
          >
            {data.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
