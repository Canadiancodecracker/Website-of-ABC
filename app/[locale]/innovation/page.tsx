import { Metadata } from "next";
import { stories } from "@/lib/cms/data";
import { pageMetadata } from "@/lib/seo/pageMetadata";
import { Locale } from "@/lib/i18n/config";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "Innovation & R&D", zh: "创新与研发" },
    description: { en: "Capabilities, labs, partnerships, and innovation stories.", zh: "能力平台、实验室、合作项目与创新故事。" },
    path: "/innovation"
  });
}

export default function InnovationPage({ params }: { params: { locale: Locale } }) {
  const l = params.locale;
  const innovationStories = stories.filter((s) => ["Innovation", "Event"].includes(s.category));

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-4xl font-semibold text-brand-ink">{l === "en" ? "Innovation & R&D" : "创新与研发"}</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-ink/80">
        {l === "en"
          ? "Our capabilities span process chemistry, analytical development, pilot production, and strategic partnerships."
          : "我们的能力覆盖工艺化学、分析开发、中试生产及战略合作。"}
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          l === "en" ? "Process Development Labs" : "工艺开发实验室",
          l === "en" ? "Pilot & Scale-up Platforms" : "中试与放大平台",
          l === "en" ? "Patent & IP Program" : "专利与知识产权体系"
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-brand-ink/10 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-brand-ink">{item}</h2>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-semibold text-brand-ink">{l === "en" ? "Innovation Stories" : "创新故事"}</h2>
        <div className="mt-4 grid gap-4">
          {innovationStories.map((story) => (
            <article key={story.slug} className="rounded-xl border border-brand-ink/10 p-4">
              <p className="text-xs text-brand-ink/60">{story.category}</p>
              <h3 className="mt-1 text-lg font-semibold">{story.title[l]}</h3>
              <p className="mt-1 text-sm text-brand-ink/80">{story.excerpt[l]}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
