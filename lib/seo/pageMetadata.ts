import { Metadata } from "next";
import { Locale } from "@/lib/i18n/config";
import { siteDefaults } from "@/lib/cms/data";

export function pageMetadata(options: {
  locale: Locale;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  path: string;
}): Metadata {
  const { locale, title, description, path } = options;
  return {
    title: title[locale],
    description: description[locale],
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        zh: `/zh${path}`
      }
    },
    openGraph: {
      title: title[locale],
      description: description[locale],
      url: `${siteDefaults.siteUrl}/${locale}${path}`,
      siteName: siteDefaults.brandName[locale]
    },
    twitter: {
      card: "summary_large_image",
      title: title[locale],
      description: description[locale]
    }
  };
}
