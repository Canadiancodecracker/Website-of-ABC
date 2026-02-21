import { Metadata } from "next";
import { products } from "@/lib/cms/data";
import { pageMetadata } from "@/lib/seo/pageMetadata";
import { Locale } from "@/lib/i18n/config";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "Download Center", zh: "资料下载中心" },
    description: { en: "Technical documents and certificates by product.", zh: "按产品分类的技术文档与证书下载。" },
    path: "/downloads"
  });
}

export default function DownloadCenterPage({ params }: { params: { locale: Locale } }) {
  const l = params.locale;
  const rows = products.flatMap((product) =>
    product.downloads.map((file) => ({
      product: product.name[l],
      ...file
    }))
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-4xl font-semibold text-brand-ink">{l === "en" ? "Download Center" : "资料下载中心"}</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-ink/80">
        {l === "en"
          ? "Centralized access to TDS, SDS, COA, and quality certificates with version labels."
          : "集中获取TDS、SDS、COA及质量证书，并显示版本信息。"}
      </p>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-ink/10 bg-white shadow-soft">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-cloud text-brand-ink">
            <tr>
              <th className="px-4 py-3">{l === "en" ? "Product" : "产品"}</th>
              <th className="px-4 py-3">{l === "en" ? "Document" : "文件"}</th>
              <th className="px-4 py-3">{l === "en" ? "Type" : "类型"}</th>
              <th className="px-4 py-3">{l === "en" ? "Version" : "版本"}</th>
              <th className="px-4 py-3">{l === "en" ? "Action" : "操作"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-brand-ink/10">
                <td className="px-4 py-3">{row.product}</td>
                <td className="px-4 py-3">{row.label[l]}</td>
                <td className="px-4 py-3">{row.docType}</td>
                <td className="px-4 py-3">{row.version}</td>
                <td className="px-4 py-3">
                  <a href={row.href} className="rounded-full bg-brand-ink px-3 py-1 text-xs text-white hover:bg-brand-emerald">
                    {l === "en" ? "Download" : "下载"}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
