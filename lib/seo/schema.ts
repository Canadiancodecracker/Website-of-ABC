import { Locale } from "@/lib/i18n/config";
import { siteDefaults } from "@/lib/cms/data";

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteDefaults.brandName[locale],
    url: siteDefaults.siteUrl,
    email: siteDefaults.email,
    telephone: siteDefaults.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yinchuan",
      addressCountry: "CN",
      streetAddress: siteDefaults.corporateAddress[locale]
    }
  };
}
