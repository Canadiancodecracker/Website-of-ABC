import { Locale } from "@/lib/i18n/config";

export type LocalizedString = Record<Locale, string>;

export type SiteSettings = {
  brandName: LocalizedString;
  tagline: LocalizedString;
  siteUrl: string;
  socialLinks: { label: string; href: string }[];
  corporateAddress: LocalizedString;
  phone: string;
  email: string;
};

export type KPI = {
  value: number;
  suffix?: string;
  label: LocalizedString;
};

export type Pillar = {
  id: string;
  title: LocalizedString;
  body: LocalizedString;
};

export type ProductCategory = {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type DownloadItem = {
  id: string;
  label: LocalizedString;
  docType: "TDS" | "SDS" | "Certificate" | "COA";
  version: string;
  href: string;
  gated?: boolean;
};

export type Product = {
  slug: string;
  categorySlug: string;
  name: LocalizedString;
  summary: LocalizedString;
  applications: LocalizedString[];
  specs: { key: LocalizedString; value: LocalizedString }[];
  packaging: LocalizedString;
  downloads: DownloadItem[];
};

export type Story = {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  category: "Innovation" | "Sustainability" | "Press Release" | "Event";
  publishedAt: string;
  heroImage: string;
};

export type JobPosting = {
  id: string;
  title: LocalizedString;
  location: LocalizedString;
  team: LocalizedString;
  summary: LocalizedString;
  postedAt: string;
};

export type LocalePathBuilder = {
  locale: Locale;
  path: string;
};
