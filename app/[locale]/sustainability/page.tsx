import React from 'react';
import { SustainabilityPillars } from '@/components/sustainability/SustainabilityPillars';
import { EHSCommitment } from '@/components/sustainability/EHSCommitment';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

export default function SustainabilityPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];

  return (
    <PageContainer className="py-16">
      <SectionHeader
        title={t.sus.title}
        subtitle={t.sus.desc}
      />
      <div className="mt-10">
        <SustainabilityPillars
          pillars={[
            {
              icon: '🌱',
              title: 'Environmental Responsibility',
              description: 'Minimizing environmental impact through efficient processes and waste reduction',
            },
            {
              icon: '⚡',
              title: 'Energy Efficiency',
              description: 'Optimizing energy consumption and implementing renewable energy solutions',
            },
            {
              icon: '🤝',
              title: 'Social Responsibility',
              description: 'Supporting local communities and ensuring safe working conditions',
            },
          ]}
        />
      </div>
      <div className="mt-16">
        <EHSCommitment
          title="EHS Commitment"
          paragraphs={[
            'We are committed to maintaining the highest standards of Environmental, Health, and Safety (EHS) practices across all our operations.',
            'Our comprehensive EHS management system ensures compliance with international standards and continuous improvement in safety performance.',
          ]}
          icons={[
            { icon: '🛡️', label: 'Safety First' },
            { icon: '🌍', label: 'Environmental Protection' },
            { icon: '👥', label: 'Employee Wellbeing' },
          ]}
        />
      </div>
    </PageContainer>
  );
}

