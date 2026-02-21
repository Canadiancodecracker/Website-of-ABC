import { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { pageMetadata } from "@/lib/seo/pageMetadata";
import { productCategories, products } from "@/lib/cms/data";
import { Locale } from "@/lib/i18n/config";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "Products", zh: "产品中心" },
    description: { en: "Browse API, food additive, and feed additive portfolios with specs and downloads.", zh: "查看原料药、食品添加剂与饲料添加剂产品及规格下载。" },
    path: "/products"
  });
}

export default function ProductsPage({ params }: { params: { locale: Locale } }) {
  const l = params.locale;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-4xl font-semibold text-brand-ink">{l === "en" ? "Products" : "产品中心"}</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-ink/80">
        {l === "en"
          ? "Browse APIs, food additives, and feed additives with application notes, specification blocks, and downloadable technical documents."
          : "浏览原料药、食品添加剂和饲料添加剂，查看应用信息、规格参数及技术文件下载。"}
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {productCategories.map((cat) => (
          <article key={cat.slug} className="rounded-2xl border border-brand-ink/10 bg-white p-5">
            <h2 className="text-xl font-semibold">{cat.title[l]}</h2>
            <p className="mt-2 text-sm text-brand-ink/80">{cat.description[l]}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} locale={l} product={product} />
        ))}
      </section>
    </div>
  );
}
