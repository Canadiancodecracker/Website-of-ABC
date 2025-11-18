import React from 'react';
import { ProcessFlowDiagram } from '@/components/technology/ProcessFlowDiagram';
import { QualitySystemOverview } from '@/components/technology/QualitySystemOverview';
import { LabEquipmentGrid } from '@/components/technology/LabEquipmentGrid';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

export default function TechnologyPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];

  return (
    <PageContainer className="py-16">
      <SectionHeader
        title="Technology & Quality"
        subtitle="Advanced manufacturing processes and rigorous quality control"
      />
      <div className="mt-10">
        <ProcessFlowDiagram
          steps={[
            {
              title: 'Raw Material Processing',
              description: 'High-purity raw materials are carefully selected and processed',
              icon: '⚗️',
            },
            {
              title: 'Synthesis',
              description: 'Controlled reaction processes ensure consistent quality',
              icon: '🔬',
            },
            {
              title: 'Purification',
              description: 'Advanced purification techniques remove impurities',
              icon: '✨',
            },
            {
              title: 'Quality Control',
              description: 'Rigorous testing ensures product specifications',
              icon: '✅',
            },
          ]}
        />
      </div>
      <div className="mt-16">
        <QualitySystemOverview
          title="Quality Management System"
          description="Our comprehensive quality management system ensures consistent product quality and compliance with international standards."
          items={[
            {
              icon: '📋',
              title: 'ISO 9001 Certified',
              text: 'Quality management system certified to international standards',
            },
            {
              icon: '🔍',
              title: 'Rigorous Testing',
              text: 'Comprehensive testing at every stage of production',
            },
            {
              icon: '📊',
              title: 'Continuous Improvement',
              text: 'Ongoing monitoring and optimization of processes',
            },
          ]}
        />
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Laboratory Equipment</h2>
        <LabEquipmentGrid
          items={[
            {
              name: 'Spectrophotometer',
              description: 'Advanced analytical equipment for precise measurements',
            },
            {
              name: 'Gas Chromatograph',
              description: 'High-precision analysis of chemical composition',
            },
            {
              name: 'Quality Control Lab',
              description: 'State-of-the-art testing facilities',
            },
          ]}
        />
      </div>
    </PageContainer>
  );
}

