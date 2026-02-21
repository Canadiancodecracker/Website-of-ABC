import { Metadata } from "next";
import { Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/pageMetadata";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "Sustainability", zh: "可持续发展" },
    description: { en: "Green manufacturing, EHS management, certifications, and ESG programs.", zh: "绿色制造、EHS管理、认证体系与ESG项目。" },
    path: "/sustainability"
  });
}

export default function SustainabilityPage({ params }: { params: { locale: Locale } }) {
  const l = params.locale;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-4xl font-semibold text-brand-ink">{l === "en" ? "Sustainability" : "可持续发展"}</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-ink/80">
        {l === "en"
          ? "Hengkang advances green manufacturing through energy efficiency, cleaner process design, and EHS governance."
          : "恒康通过能效提升、清洁工艺与EHS治理持续推进绿色制造。"}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          {
            en: "Green Manufacturing",
            zh: "绿色制造",
            bodyEn: "Resource-efficient process lines with continuous optimization and digital monitoring.",
            bodyZh: "通过持续优化与数字化监控提升资源利用效率。"
          },
          {
            en: "EHS Management",
            zh: "EHS管理",
            bodyEn: "Operational safety and environmental controls integrated into daily operations.",
            bodyZh: "将安全与环保控制融入日常运营。"
          },
          {
            en: "Certifications",
            zh: "认证体系",
            bodyEn: "Quality and compliance certifications supporting global market requirements.",
            bodyZh: "以质量与合规认证支撑全球市场要求。"
          },
          {
            en: "ESG & CSR",
            zh: "ESG与社会责任",
            bodyEn: "Transparent ESG metrics and local community engagement programs.",
            bodyZh: "公开ESG指标并持续开展社区共建项目。"
          }
        ].map((item) => (
          <article key={item.en} className="rounded-2xl border border-brand-ink/10 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-semibold">{l === "en" ? item.en : item.zh}</h2>
            <p className="mt-2 text-sm text-brand-ink/80">{l === "en" ? item.bodyEn : item.bodyZh}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
