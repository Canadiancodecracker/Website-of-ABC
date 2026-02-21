import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { KpiCounter } from "@/components/home/KpiCounter";
import { Pillars } from "@/components/home/Pillars";
import { StoryGrid } from "@/components/home/StoryGrid";
import { ProductCard } from "@/components/product/ProductCard";
import { JsonLd } from "@/components/shared/JsonLd";
import { kpis, pillars, productCategories, products, stories } from "@/lib/cms/data";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";
import { organizationSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/pageMetadata";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "Home", zh: "首页" },
    description: {
      en: "Global leader in APIs, food additives, and feed additives with innovation and sustainability at the core.",
      zh: "聚焦原料药、食品添加剂和饲料添加剂，以创新与可持续为核心。"
    },
    path: ""
  });
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <JsonLd data={organizationSchema(params.locale)} />
      <Hero locale={params.locale} dict={dict} />
      <KpiCounter locale={params.locale} items={kpis} />
      <Pillars locale={params.locale} items={pillars} />

      <section className="mx-auto mt-16 max-w-7xl px-4 md:px-6" id="featured-products">
        <h2 className="text-3xl font-semibold text-brand-ink">
          {params.locale === "en" ? "Featured Product Categories" : "重点产品分类"}
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {productCategories.map((category) => (
            <div key={category.slug} className="rounded-2xl border border-brand-ink/10 bg-white p-5 shadow-soft">
              <h3 className="text-xl font-semibold">{category.title[params.locale]}</h3>
              <p className="mt-2 text-sm text-brand-ink/80">{category.description[params.locale]}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} locale={params.locale} product={product} />
          ))}
        </div>
      </section>

      <StoryGrid locale={params.locale} items={stories} />

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
        <div className="rounded-2xl bg-brand-ink p-6 text-white">
          <h2 className="text-2xl font-semibold">{dict.nav.sustainability}</h2>
          <p className="mt-2 text-sm text-white/80">
            {params.locale === "en"
              ? "Track our emissions, waste, and water initiatives across operations and supplier network."
              : "了解我们在运营与供应链中推进减排、减废与节水的举措。"}
          </p>
          <a href={`/${params.locale}/sustainability`} className="mt-4 inline-block text-sm font-medium underline">
            {dict.common.learnMore}
          </a>
        </div>
        <div className="rounded-2xl bg-brand-emerald p-6 text-white">
          <h2 className="text-2xl font-semibold">{dict.nav.careers}</h2>
          <p className="mt-2 text-sm text-white/85">
            {params.locale === "en"
              ? "Join teams building high-impact chemistry and biotechnology products for global health and nutrition."
              : "加入我们，一起打造服务全球健康与营养的高价值化学与生物技术产品。"}
          </p>
          <a href={`/${params.locale}/careers`} className="mt-4 inline-block text-sm font-medium underline">
            {dict.common.learnMore}
          </a>
        </div>
      </section>
    </>
  );
}
