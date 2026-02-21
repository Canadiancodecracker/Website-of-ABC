import { Product } from "@/lib/cms/types";
import { Locale } from "@/lib/i18n/config";
import { LocaleLink } from "@/components/shared/LocaleLink";

export function ProductCard({ locale, product }: { locale: Locale; product: Product }) {
  return (
    <article className="rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-brand-ink">{product.name[locale]}</h3>
      <p className="mt-2 text-sm text-brand-ink/80">{product.summary[locale]}</p>
      <LocaleLink href={`/products/${product.slug}`} className="mt-4 inline-block text-sm font-medium text-brand-sky hover:underline">
        {locale === "en" ? "View details" : "查看详情"}
      </LocaleLink>
    </article>
  );
}
