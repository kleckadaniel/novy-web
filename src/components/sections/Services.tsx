import type { ContentData, ServiceItem } from "@/lib/types";

interface ServicesProps {
  data: ContentData["services"];
}

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <article className="group relative border border-neutral-200 rounded-2xl p-7 md:p-8 bg-white hover:border-neutral-400 hover:shadow-lg transition-all duration-300">
      {/* Index number */}
      <span className="block text-xs font-medium text-neutral-300 mb-5 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Problem statement */}
      <p className="text-sm text-neutral-500 leading-relaxed mb-5 min-h-[3.5rem]">
        {item.problem}
      </p>

      {/* Divider */}
      <div className="w-8 h-px bg-neutral-200 mb-5" />

      {/* Solution label */}
      <h3 className="text-base font-medium text-neutral-900 mb-5">
        {item.solution}
      </h3>

      {/* Outputs */}
      <ul className="flex flex-col gap-2">
        {item.outputs.map((output) => (
          <li key={output} className="flex items-start gap-2.5 text-sm text-neutral-500">
            <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-neutral-300" />
            {output}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services({ data }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-[#f7f5f1]">
      <div className="container-content">
        {/* Header */}
        <div className="mb-14 md:mb-16 max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-normal text-neutral-900 leading-tight mb-4">
            {data.headline}
          </h2>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {data.items.map((item, i) => (
            <ServiceCard key={item.solution} item={item} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-sm text-neutral-400 text-center max-w-lg mx-auto leading-relaxed">
          Výstupy se liší podle potřeby. Základ je vždy stejný —{" "}
          <span className="text-neutral-600">strategie a správný nápad.</span>
        </p>
      </div>
    </section>
  );
}
