'use client';

import React from 'react';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

export default function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];

  const handleSubmit = async (data: {
    name: string;
    company: string;
    email: string;
    product?: string;
    message: string;
  }) => {
    // Formspree integration - replace with your endpoint
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }
  };

  return (
    <PageContainer className="py-16">
      <SectionHeader
        title={t.contact.title}
        subtitle={t.contact.desc}
      />
      <div className="mt-10 grid lg:grid-cols-2 gap-10">
        <div>
          <ContactForm
            onSubmit={handleSubmit}
            productOptions={[
              t.products.p1.title,
              t.products.p2.title,
              t.products.p3.title,
              t.products.p4.title,
            ]}
          />
        </div>
        <aside className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-md">
          <ContactInfo
            companyName={t.corp}
            address="Ningxia, China"
            email="info@abcchemical.example"
            phone="+86 XXX XXXX XXXX"
          />
        </aside>
      </div>
    </PageContainer>
  );
}

