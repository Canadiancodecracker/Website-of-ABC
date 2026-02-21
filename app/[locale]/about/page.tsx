import { Metadata } from "next";
import { companyFacts } from "@/lib/cms/data";
import { pageMetadata } from "@/lib/seo/pageMetadata";
import { Locale } from "@/lib/i18n/config";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "About Us", zh: "关于我们" },
    description: { en: "Company profile, mission, timeline, and compliance credentials.", zh: "公司简介、使命愿景、发展历程与合规资质。" },
    path: "/about"
  });
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const l = params.locale;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-4xl font-semibold text-brand-ink">{l === "en" ? "About Us" : "关于我们"}</h1>
      <p className="mt-4 max-w-3xl text-brand-ink/85">
        {l === "en"
          ? "Ningxia Hengkang Technology is a high-growth enterprise integrating API, food additive, and feed additive manufacturing with innovation and sustainability at the core."
          : "宁夏恒康科技有限公司是一家聚焦原料药、食品添加剂与饲料添加剂的成长型企业，以创新与可持续为核心。"}
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-brand-ink/10 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-semibold">{l === "en" ? "Company Facts" : "公司概况"}</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-ink/80">
            <li>{l === "en" ? `Founded: ${companyFacts.founded}` : `成立时间：${companyFacts.founded}年`}</li>
            <li>{companyFacts.location[l]}</li>
            <li>{companyFacts.siteArea[l]}</li>
            <li>{companyFacts.registeredCapital[l]}</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-brand-ink/10 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-semibold">{l === "en" ? "Compliance & Credentials" : "合规与资质"}</h2>
          <p className="mt-3 text-sm text-brand-ink/80">{companyFacts.credentials[l]}</p>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold">{l === "en" ? "History Timeline" : "发展历程"}</h2>
        <ol className="mt-4 space-y-3 text-sm text-brand-ink/80">
          <li>{l === "en" ? "2013: Company founded in Yinchuan Biotech Park" : "2013：公司在银川生物科技园成立"}</li>
          <li>{l === "en" ? "2017: First large-scale export milestone" : "2017：达成首个大规模出口里程碑"}</li>
          <li>{l === "en" ? "2021: New clean manufacturing line commissioned" : "2021：新建清洁生产线投产"}</li>
          <li>{l === "en" ? "2025: Expanded global partnerships and innovation programs" : "2025：拓展全球合作与创新项目"}</li>
        </ol>
      </section>
    </div>
  );
}
