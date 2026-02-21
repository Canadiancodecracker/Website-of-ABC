import { Pillar } from "@/lib/cms/types";
import { Locale } from "@/lib/i18n/config";

export function Pillars({ locale, items }: { locale: Locale; items: Pillar[] }) {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 md:px-6" id="pillars">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((pillar, idx) => (
          <article
            key={pillar.id}
            className="story-reveal rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-soft"
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            <h2 className="text-2xl font-semibold text-brand-ink">{pillar.title[locale]}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-ink/80">{pillar.body[locale]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
