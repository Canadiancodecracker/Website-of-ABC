import React from 'react';
import { NewsArticle } from '@/components/news/NewsArticle';
import { PageContainer } from '@/components/layout/PageContainer';
import { getNewsData } from '@/lib/utils/data';
import type { Locale } from '@/lib/i18n/translations';
import { notFound } from 'next/navigation';

export default async function NewsArticlePage({
  params,
}: {
  params: { locale: Locale; id: string };
}) {
  const locale = params.locale || 'en';
  const newsData = await getNewsData();
  const article = newsData.news.find((item) => item.id.toString() === params.id);

  if (!article) {
    notFound();
  }

  return (
    <PageContainer className="py-16">
      <NewsArticle
        title={locale === 'zh' ? article.title_zh : article.title_en}
        date={locale === 'zh' ? article.date_zh : article.date}
        body={`<p>${locale === 'zh' ? article.summary_zh : article.summary_en}</p><p>Full article content would be loaded from MDX or HTML file.</p>`}
      />
    </PageContainer>
  );
}

