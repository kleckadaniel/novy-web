import type { ContentData, WhyMePoint } from "@/lib/types";

interface WhyMeProps {
  data: ContentData["whyMe"];
}

const icons = [
  // Lightbulb
  <svg key="lightbulb" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6M10 22h4M12 2C8.686 2 6 4.686 6 8c0 2.215 1.13 4.16 2.835 5.286C9.428 13.788 10 14.538 10 16h4c0-1.462.572-2.212 1.165-2.714C16.87 12.16 18 10.215 18 8c0-3.314-2.686-6-6-6z" />
  </svg>,
  // Target / strategy
  <svg key="target" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // Sparkles / AI
  <svg key="sparkles" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z" />
    <path d="M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75L19 3z" />
  </svg>,
];

function WhyMeCard({
  point,
  index,
}: {
  point: WhyMePoint;
  index: number;
}) {
  return (
    <div className="group flex flex-col gap-5">
      {/* Icon circle */}
      <div className="w-11 h-11 rounded-full border border-c-border flex items-center justify-center text-c-text-2 group-hover:border-c-text group-hover:text-c-text transition-all duration-300">
        {icons[index]}
      </div>

      {/* Number + Title */}
      <div>
        <span className="block text-[10px] font-medium tracking-[0.15em] uppercase text-c-text-3 mb-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-medium text-c-text mb-2">
          {point.title}
        </h3>
        <p className="text-sm md:text-base text-c-text-2 leading-relaxed">
          {point.text}
        </p>
      </div>
    </div>
  );
}

export default function WhyMe({ data }: WhyMeProps) {
  return (
    <section id="why-me" className="section-padding bg-c-surface">
      <div className="container-content">
        {/* Header */}
        <div className="mb-14 md:mb-16 max-w-xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-normal text-c-text leading-tight mb-4">
            {data.headline}
          </h2>
          <p className="text-base md:text-lg text-c-text-2 leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
          {data.points.map((point, i) => (
            <WhyMeCard key={point.title} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
