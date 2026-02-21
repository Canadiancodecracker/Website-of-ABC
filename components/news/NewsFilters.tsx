"use client";

import { useMemo, useState } from "react";
import { Story } from "@/lib/cms/types";
import { Locale } from "@/lib/i18n/config";
import { formatDate } from "@/lib/utils/format";

export function NewsFilters({ locale, items }: { locale: Locale; items: Story[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const categoryOk = active === "All" || item.category === active;
      const text = `${item.title[locale]} ${item.excerpt[locale]}`.toLowerCase();
      const queryOk = text.includes(query.toLowerCase());
      return categoryOk && queryOk;
    });
  }, [active, items, locale, query]);

  const years = [...new Set(items.map((item) => new Date(item.publishedAt).getFullYear()))].sort((a, b) => b - a);

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="rounded-2xl border border-brand-ink/10 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={locale === "en" ? "Search stories" : "搜索内容"}
            className="min-w-[220px] flex-1 rounded-full border border-brand-ink/20 px-4 py-2 text-sm outline-none focus:border-brand-sky"
          />
          {[
            "All",
            "Press Release",
            "Innovation",
            "Sustainability",
            "Event"
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`rounded-full px-3 py-1 text-xs font-medium ${active === tag ? "bg-brand-ink text-white" : "bg-brand-cloud text-brand-ink"}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-brand-ink/70">
          {locale === "en" ? "Year archive" : "年份归档"}: {years.join(" / ")}
        </p>
      </div>
      <div className="mt-6 grid gap-4">
        {filtered.map((item) => (
          <article key={item.slug} className="rounded-2xl border border-brand-ink/10 bg-white p-5 shadow-soft">
            <p className="text-xs text-brand-ink/60">
              {item.category} · {formatDate(item.publishedAt, locale)}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-brand-ink">{item.title[locale]}</h3>
            <p className="mt-2 text-sm text-brand-ink/80">{item.excerpt[locale]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
