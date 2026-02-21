import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DownloadsModule } from "@/components/product/DownloadsModule";
import { JsonLd } from "@/components/shared/JsonLd";
import { getProductBySlug } from "@/lib/cms/data";
import { Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/pageMetadata";

export function generateMetadata({ params }: { params: { locale: Locale; slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {};
  }

  return pageMetadata({
    locale: params.locale,
    title: { en: product.name.en, zh: product.name.zh },
    description: { en: product.summary.en, zh: product.summary.zh },
    path: `/products/${params.slug}`
  });
}

export default function ProductDetailPage({ params }: { params: { locale: Locale; slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const l = params.locale;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name[l],
          description: product.summary[l],
          category: product.categorySlug,
          brand: "Ningxia Hengkang Technology"
        }}
      />
      <h1 className="text-4xl font-semibold text-brand-ink">{product.name[l]}</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-ink/80">{product.summary[l]}</p>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">{l === "en" ? "Applications" : "应用领域"}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-ink/80">
            {product.applications.map((app) => (
              <li key={app.en}>{app[l]}</li>
            ))}
          </ul>

          <h2 className="mt-6 text-xl font-semibold">{l === "en" ? "Key Specifications" : "关键规格"}</h2>
          <div className="mt-3 overflow-hidden rounded-xl border border-brand-ink/10">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {product.specs.map((row) => (
                  <tr key={row.key.en} className="border-b border-brand-ink/10 last:border-none">
                    <th className="w-1/3 bg-brand-cloud px-3 py-2 font-medium text-brand-ink">{row.key[l]}</th>
                    <td className="px-3 py-2 text-brand-ink/80">{row.value[l]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-6 text-xl font-semibold">{l === "en" ? "Packaging" : "包装信息"}</h2>
          <p className="mt-2 text-sm text-brand-ink/80">{product.packaging[l]}</p>
        </div>
        <aside>
          <DownloadsModule locale={l} files={product.downloads} />
          <div className="mt-4 rounded-2xl bg-brand-ink p-5 text-white">
            <h3 className="text-lg font-semibold">{l === "en" ? "Inquiry" : "产品咨询"}</h3>
            <p className="mt-2 text-sm text-white/80">
              {l === "en" ? "Request samples, pricing, and lead time." : "提交样品、报价与交期需求。"}
            </p>
            <a href={`/${l}/contact`} className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-ink">
              {l === "en" ? "Contact sales" : "联系销售"}
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}
