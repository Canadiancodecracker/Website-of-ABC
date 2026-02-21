import { MetadataRoute } from "next";
import { products, siteDefaults } from "@/lib/cms/data";
import { locales } from "@/lib/i18n/config";

const staticRoutes = ["", "/about", "/products", "/innovation", "/sustainability", "/news", "/careers", "/contact", "/downloads"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localeUrls = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${siteDefaults.siteUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    }))
  );

  const productUrls = locales.flatMap((locale) =>
    products.map((product) => ({
      url: `${siteDefaults.siteUrl}/${locale}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    }))
  );

  return [...localeUrls, ...productUrls];
}
