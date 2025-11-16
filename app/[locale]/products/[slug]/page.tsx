import React from 'react';
import { ProductDetail } from '@/components/products/ProductDetail';
import { PageContainer } from '@/components/layout/PageContainer';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

export default function ProductDetailPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];

  // Mock product data - in real app, fetch from data source
  const productData = {
    name: 'Calcium Carbide',
    chineseName: '电石（碳化钙）',
    cas: '75-20-7',
    formula: 'CaC₂',
    applicationSummary:
      'Calcium carbide is used primarily for the generation of acetylene gas and as a reducing agent in steelmaking.',
    specs: [
      { key: 'Purity', value: '≥98%' },
      { key: 'Appearance', value: 'Gray-black solid' },
      { key: 'Melting Point', value: '2160°C' },
    ],
    grades: [
      {
        gradeName: 'Industrial Grade',
        purity: '98%',
        specs: [
          { key: 'CaC₂ Content', value: '≥98%' },
          { key: 'Phosphorus', value: '≤0.05%' },
        ],
      },
    ],
    packaging: ['25kg bags', '50kg drums', 'Bulk'],
    downloads: [
      { label: 'SDS Document', file: '/assets/sds/SDS_Calcium_Carbide_English.pdf' },
    ],
  };

  return (
    <PageContainer className="py-16">
      <ProductDetail {...productData} />
    </PageContainer>
  );
}

