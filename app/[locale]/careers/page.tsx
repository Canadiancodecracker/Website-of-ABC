import React from 'react';
import { CareerIntro } from '@/components/careers/CareerIntro';
import { JobList } from '@/components/careers/JobList';
import { PageContainer } from '@/components/layout/PageContainer';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

export default function CareersPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];

  return (
    <PageContainer className="py-16">
      <CareerIntro
        title={t.nav.about.careers}
        paragraphs={[
          'Join our team and be part of a company that is shaping the future of chemical manufacturing.',
          'We offer competitive compensation, comprehensive benefits, and opportunities for professional growth.',
        ]}
      />
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
        <JobList
          jobs={[
            {
              title: 'Chemical Engineer',
              location: 'Ningxia, China',
              type: 'Full-time',
              description: 'We are seeking an experienced chemical engineer to join our production team.',
              href: `/${locale}/careers/chemical-engineer`,
            },
            {
              title: 'Quality Control Specialist',
              location: 'Ningxia, China',
              type: 'Full-time',
              description: 'Join our QC team to ensure the highest quality standards for our products.',
              href: `/${locale}/careers/qc-specialist`,
            },
          ]}
        />
      </div>
    </PageContainer>
  );
}

