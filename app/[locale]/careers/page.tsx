import { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { jobs } from "@/lib/cms/data";
import { Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/pageMetadata";
import { formatDate } from "@/lib/utils/format";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "Careers", zh: "加入我们" },
    description: { en: "Career opportunities in R&D, production, and global markets.", zh: "研发、生产与国际市场岗位机会。" },
    path: "/careers"
  });
}

export default function CareersPage({ params }: { params: { locale: Locale } }) {
  const l = params.locale;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: jobs.map((job, index) => ({
            "@type": "JobPosting",
            position: index + 1,
            title: job.title[l],
            datePosted: job.postedAt,
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: job.location[l]
              }
            }
          }))
        }}
      />
      <h1 className="text-4xl font-semibold text-brand-ink">{l === "en" ? "Careers" : "加入我们"}</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-ink/80">
        {l === "en"
          ? "Build a global career in high-impact chemistry, biotechnology, and sustainable manufacturing."
          : "在高价值化学、生物技术与可持续制造领域打造全球化职业路径。"}
      </p>

      <section className="mt-8 grid gap-4">
        {jobs.map((job) => (
          <article key={job.id} className="rounded-2xl border border-brand-ink/10 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-semibold">{job.title[l]}</h2>
            <p className="mt-1 text-xs text-brand-ink/65">
              {job.team[l]} · {job.location[l]} · {formatDate(job.postedAt, l)}
            </p>
            <p className="mt-2 text-sm text-brand-ink/80">{job.summary[l]}</p>
            <button className="mt-3 rounded-full bg-brand-ink px-4 py-2 text-xs text-white hover:bg-brand-emerald">
              {l === "en" ? "Apply now" : "立即申请"}
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
