import { Metadata } from "next";
import { NewsFilters } from "@/components/news/NewsFilters";
import { JsonLd } from "@/components/shared/JsonLd";
import { stories } from "@/lib/cms/data";
import { Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/pageMetadata";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "News & Media", zh: "新闻与媒体" },
    description: { en: "Press releases, industry updates, and events archive.", zh: "新闻稿、行业资讯与活动归档。" },
    path: "/news"
  });
}

export default function NewsPage({ params }: { params: { locale: Locale } }) {
  const l = params.locale;

  return (
    <div className="py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: stories.map((story, index) => ({
            "@type": "Article",
            position: index + 1,
            headline: story.title[l],
            datePublished: story.publishedAt
          }))
        }}
      />
      <div className="mx-auto mb-8 max-w-7xl px-4 md:px-6">
        <h1 className="text-4xl font-semibold text-brand-ink">{l === "en" ? "News & Media" : "新闻与媒体"}</h1>
        <p className="mt-3 max-w-3xl text-sm text-brand-ink/80">
          {l === "en"
            ? "Filter press releases, industry updates, and event highlights by category, keyword, and year."
            : "按类别、关键词和年份筛选新闻稿、行业动态与活动资讯。"}
        </p>
      </div>
      <NewsFilters locale={l} items={stories} />
    </div>
  );
}
