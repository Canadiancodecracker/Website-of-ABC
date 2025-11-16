import React from 'react';
import { ProductList } from '@/components/products/ProductList';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

export default function ProductsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];

  return (
    <PageContainer className="py-16">
      <SectionHeader
        title={t.products.title}
        subtitle={t.products.desc}
      />
      <div className="mt-10">
        <ProductList
          products={[
            {
              name: t.products.p1.title,
              chineseName: locale === 'zh' ? '电石（碳化钙）' : undefined,
              slug: 'calcium-carbide',
              image: '/assets/images/abc-logo.png',
              shortDescription: t.products.p1.desc,
            },
            {
              name: t.products.p2.title,
              chineseName: locale === 'zh' ? '氰胺衍生物' : undefined,
              slug: 'cyanamide-derivatives',
              image: '/assets/images/abc-logo.png',
              shortDescription: t.products.p2.desc,
            },
            {
              name: t.products.p3.title,
              chineseName: locale === 'zh' ? '性能产品' : undefined,
              slug: 'performance-products',
              image: '/assets/images/abc-logo.png',
              shortDescription: t.products.p3.desc,
            },
            {
              name: t.products.p4.title,
              chineseName: locale === 'zh' ? '工业中间体' : undefined,
              slug: 'industrial-intermediates',
              image: '/assets/images/abc-logo.png',
              shortDescription: t.products.p4.desc,
            },
          ]}
        />
      </div>
    </PageContainer>
  );
}

