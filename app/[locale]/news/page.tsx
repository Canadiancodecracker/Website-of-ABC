import React from 'react';
import { NewsList } from '@/components/news/NewsList';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getNewsData } from '@/lib/utils/data';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

export default async function NewsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];
  const newsData = await getNewsData();

  const newsItems = newsData.news.map((item) => ({
    title: locale === 'zh' ? item.title_zh : item.title_en,
    date: locale === 'zh' ? item.date_zh : item.date,
    excerpt: locale === 'zh' ? item.summary_zh : item.summary_en,
    href: `/${locale}/news/${item.id}`,
  }));

  return (
    <PageContainer className="py-16">
      <SectionHeader title={t.news.allNews} />
      <div className="mt-10">
        <NewsList items={newsItems} />
      </div>
    </PageContainer>
  );
}

