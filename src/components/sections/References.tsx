import LogoMarquee from "@/components/ui/LogoMarquee";
import type { ContentData, Testimonial } from "@/lib/types";

interface ReferencesProps {
  data: ContentData["references"];
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="border border-neutral-200 rounded-2xl p-7 md:p-8 bg-white flex flex-col gap-6">
      {/* Quote mark */}
      <span
        className="block font-display text-5xl leading-none text-neutral-200 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="text-base md:text-lg text-neutral-700 leading-relaxed -mt-4">
        {testimonial.text}
      </p>

      <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100">
        {/* Avatar placeholder */}
        <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-neutral-400"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-800">{testimonial.author}</p>
          <p className="text-xs text-neutral-400">{testimonial.company}</p>
        </div>
      </footer>
    </blockquote>
  );
}

export default function References({ data }: ReferencesProps) {
  return (
    <section id="references" className="section-padding bg-white">
      <div className="container-content">
        {/* Header */}
        <div className="mb-12 md:mb-14 text-center max-w-xl mx-auto">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-normal text-neutral-900 leading-tight">
            {data.headline}
          </h2>
        </div>
      </div>

      {/* Logo marquee — full width */}
      <div className="mb-16">
        <LogoMarquee clients={data.clients} />
      </div>

      {/* Testimonials */}
      {data.testimonials.length > 0 && (
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-neutral-300 tracking-wide uppercase">
            Placeholder reference — nahradit reálnými citáty od klientů
          </p>
        </div>
      )}
    </section>
  );
}
