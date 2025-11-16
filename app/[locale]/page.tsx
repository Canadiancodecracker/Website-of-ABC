import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsGrid } from '@/components/home/StatsGrid';
import { ProductHighlights } from '@/components/home/ProductHighlights';
import { TechnologyQualityPreview } from '@/components/home/TechnologyQualityPreview';
import { SustainabilityPreview } from '@/components/home/SustainabilityPreview';
import { NewsCarousel } from '@/components/home/NewsCarousel';
import { GlobalMap } from '@/components/home/GlobalMap';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { translations } from '@/lib/i18n/translations';
import { getNewsData } from '@/lib/utils/data';
import type { Locale } from '@/lib/i18n/translations';

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];
  const newsData = await getNewsData();

  // Get top 3 news items for carousel
  const topNews = newsData.news
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map((item) => ({
      title: locale === 'zh' ? item.title_zh : item.title_en,
      date: locale === 'zh' ? item.date_zh : item.date,
      excerpt: locale === 'zh' ? item.summary_zh : item.summary_en,
      href: `/${locale}/news/${item.id}`,
    }));

  return (
    <>
      <HeroSection
        title={t.hero.headline}
        subtitle={t.hero.tagline}
        ctaPrimary={{
          label: t.hero.ctaPrimary,
          href: `/${locale}/products`,
        }}
        ctaSecondary={{
          label: t.hero.ctaSecondary,
          href: `/${locale}/contact`,
        }}
      />

      {/* Video Section */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-200">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-brand bg-gray-900">
              <video
                controls
                className="w-full h-auto"
                poster="/assets/images/video-poster.jpg"
              >
                <source src="/Video 2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {t.video.title}
              </h3>
              <p className="mt-2 text-gray-600">{t.video.subtitle}</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Products */}
      <section id="products" className="py-16 sm:py-20">
        <PageContainer>
          <SectionHeader
            title={t.products.title}
            subtitle={t.products.desc}
          />
          <div className="mt-10">
            <ProductHighlights
              products={[
                {
                  name: t.products.p1.title,
                  description: t.products.p1.desc,
                  image: '/assets/images/abc-logo.png',
                  href: `/${locale}/products/calcium-carbide`,
                },
                {
                  name: t.products.p2.title,
                  description: t.products.p2.desc,
                  image: '/assets/images/abc-logo.png',
                  href: `/${locale}/products/cyanamide-derivatives`,
                },
                {
                  name: t.products.p3.title,
                  description: t.products.p3.desc,
                  image: '/assets/images/abc-logo.png',
                  href: `/${locale}/products/performance-products`,
                },
                {
                  name: t.products.p4.title,
                  description: t.products.p4.desc,
                  image: '/assets/images/abc-logo.png',
                  href: `/${locale}/products/industrial-intermediates`,
                },
              ]}
            />
          </div>
        </PageContainer>
      </section>

      {/* Applications */}
      <section id="applications" className="py-16 sm:py-20 bg-white border-y border-gray-200">
        <PageContainer>
          <SectionHeader title={t.apps.title} subtitle={t.apps.desc} />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="app-card">
              <div className="app-icon">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11 21C7 21 3 17 3 13c0-6 6-10 10-10 4 0 8 4 8 8 0 4-4 10-10 10z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.apps.a1.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{t.apps.a1.desc}</p>
            </div>
            <div className="app-card">
              <div className="app-icon">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="8" width="8" height="8" rx="4" />
                  <rect x="13" y="8" width="8" height="8" rx="4" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.apps.a2.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{t.apps.a2.desc}</p>
            </div>
            <div className="app-card">
              <div className="app-icon">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 20h18" />
                  <path d="M7 20V9l4 2V9l6 2v9" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.apps.a3.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{t.apps.a3.desc}</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-16 sm:py-20">
        <PageContainer>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {t.sus.title}
              </h2>
              <p className="mt-3 text-gray-700">{t.sus.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="check"></span>
                  <span>{t.sus.l1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="check"></span>
                  <span>{t.sus.l2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="check"></span>
                  <span>{t.sus.l3}</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="badge">ISO 9001</span>
                <span className="badge">ISO 14001</span>
                <span className="badge">ISO 45001</span>
              </div>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="metric-card">
                <div className="metric">99%</div>
                <div className="metric-label">{t.sus.m1}</div>
              </div>
              <div className="metric-card">
                <div className="metric">24/7</div>
                <div className="metric-label">{t.sus.m2}</div>
              </div>
              <div className="metric-card">
                <div className="metric">ISO</div>
                <div className="metric-label">{t.sus.m3}</div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* News Carousel */}
      {topNews.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
          <PageContainer>
            <NewsCarousel items={topNews} />
          </PageContainer>
        </section>
      )}

      {/* Global Map */}
      <section className="py-16 sm:py-20">
        <PageContainer>
          <GlobalMap
            regions={[
              { name: 'North America', highlight: true },
              { name: 'Europe', highlight: true },
              { name: 'Asia', highlight: true },
              { name: 'South America', highlight: false },
            ]}
          />
        </PageContainer>
      </section>
    </>
  );
}

