import Image from "next/image";
import { Story } from "@/lib/cms/types";
import { Locale } from "@/lib/i18n/config";
import { formatDate } from "@/lib/utils/format";
import { LocaleLink } from "@/components/shared/LocaleLink";

export function StoryGrid({ locale, items }: { locale: Locale; items: Story[] }) {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 md:px-6">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-semibold text-brand-ink">{locale === "en" ? "Latest Stories" : "最新故事"}</h2>
        <LocaleLink href="/news" className="text-sm font-medium text-brand-sky hover:underline">
          {locale === "en" ? "View all" : "查看全部"}
        </LocaleLink>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((story) => (
          <article key={story.slug} className="overflow-hidden rounded-2xl border border-brand-ink/10 bg-white shadow-soft">
            <div className="relative h-48">
              <Image src={story.heroImage} alt={story.title[locale]} fill className="object-cover" />
            </div>
            <div className="p-5">
              <span className="rounded-full bg-brand-cloud px-2 py-1 text-xs font-medium text-brand-ink">
                {story.category}
              </span>
              <h3 className="mt-3 line-clamp-2 text-xl font-semibold text-brand-ink">{story.title[locale]}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-brand-ink/80">{story.excerpt[locale]}</p>
              <p className="mt-3 text-xs text-brand-ink/60">{formatDate(story.publishedAt, locale)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
