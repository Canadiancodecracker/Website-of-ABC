import React from 'react';
import { CompanyOverview } from '@/components/about/CompanyOverview';
import { Timeline } from '@/components/about/Timeline';
import { CertificatesGrid } from '@/components/about/CertificatesGrid';
import { FactoryGallery } from '@/components/about/FactoryGallery';
import { PageContainer } from '@/components/layout/PageContainer';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

export default function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];

  return (
    <PageContainer className="py-16">
      <CompanyOverview
        title={t.nav.about.overview}
        description="ABC Chemical Co., Ltd. is a leading manufacturer of high-purity calcium and cyanamide derivatives, serving customers worldwide with reliable, science-driven solutions."
        images={[
          '/assets/images/gallery/raw-material-area.jpg',
          '/assets/images/gallery/reaction-section.jpg',
        ]}
      />
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Company Timeline</h2>
        <Timeline
          items={[
            {
              year: '2020',
              title: 'Company Founded',
              description: 'ABC Chemical Co., Ltd. was established with a vision to provide high-quality chemical solutions.',
            },
            {
              year: '2022',
              title: 'ISO Certifications',
              description: 'Achieved ISO 9001, ISO 14001, and ISO 45001 certifications.',
            },
            {
              year: '2024',
              title: 'Global Expansion',
              description: 'Expanded operations to serve customers in over 50 countries worldwide.',
            },
          ]}
        />
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Certificates</h2>
        <CertificatesGrid
          certificates={[
            {
              name: 'ISO 9001',
              thumbnail: '/assets/iso/iso-9001-certificate.png',
              file: '/assets/iso/iso-9001-certificate.png',
            },
            {
              name: 'ISO 14001',
              thumbnail: '/assets/iso/iso-14001-certificate.png',
              file: '/assets/iso/iso-14001-certificate.png',
            },
            {
              name: 'ISO 45001',
              thumbnail: '/assets/iso/iso-45001-certificate.png',
              file: '/assets/iso/iso-45001-certificate.png',
            },
          ]}
        />
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Factory Gallery</h2>
        <FactoryGallery
          images={[
            '/assets/images/gallery/raw-material-area.jpg',
            '/assets/images/gallery/reaction-section.jpg',
            '/assets/images/gallery/drying-packaging-system.jpg',
            '/assets/images/gallery/qc-qa-lab.jpg',
            '/assets/images/gallery/warehouse-logistics.jpg',
            '/assets/images/gallery/ehs-safety-facilities.jpg',
          ]}
        />
      </div>
    </PageContainer>
  );
}

