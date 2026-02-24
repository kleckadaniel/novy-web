import type { ContentData, ServiceItem } from "@/lib/types";

interface ServicesProps {
  data: ContentData["services"];
}

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className="group relative border border-c-border rounded-2xl p-7 md:p-8 bg-c-surface hover:border-c-text hover:shadow-lg transition-all duration-300">
      {/* Solution label */}
      <h3 className="text-base font-medium text-c-text mb-5">
        {item.solution}
      </h3>

      {/* Divider */}
      <div className="w-8 h-px bg-c-border mb-5" />

      {/* Problem statement */}
      <p className="text-sm text-c-text-2 leading-relaxed mb-5 min-h-[3.5rem]">
        {item.problem}
      </p>

      {/* Outputs */}
      <ul className="flex flex-col gap-2">
        {item.outputs.map((output) => (
          <li key={output} className="flex items-start gap-2.5 text-sm text-c-text-2">
            <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-c-text-3" />
            {output}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services({ data }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-c-bg">
      <div className="container-content">
        {/* Header */}
        <div className="mb-14 md:mb-16 max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-normal text-c-text leading-tight mb-4">
            {data.headline}
          </h2>
          <p
            className="text-base md:text-lg text-c-text-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.intro }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {data.items.map((item) => (
            <ServiceCard key={item.solution} item={item} />
          ))}
        </div>


      </div>
    </section>
  );
}
