import React from 'react';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { translations } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Applications', href: '/applications' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale || 'en';
  const t = translations[locale];

  return (
    <>
      <SiteHeader
        navItems={navItems.map((item) => ({
          ...item,
          href: `/${locale}${item.href === '/' ? '' : item.href}`,
        }))}
        locale={locale}
      />
      <main className="pt-20">{children}</main>
      <SiteFooter
        companyName={t.corp}
        address="Ningxia, China"
        email="info@abcchemical.example"
        phone="+86 XXX XXXX XXXX"
        quickLinks={[
          { label: t.footer.privacy, href: `/${locale}/privacy` },
          { label: t.footer.terms, href: `/${locale}/terms` },
          { label: t.footer.compliance, href: `/${locale}/compliance` },
        ]}
      />
    </>
  );
}

