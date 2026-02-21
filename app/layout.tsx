import "./globals.css";
import type { Metadata } from "next";
import { siteDefaults } from "@/lib/cms/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteDefaults.siteUrl),
  title: {
    default: siteDefaults.brandName.en,
    template: `%s | ${siteDefaults.brandName.en}`
  },
  description: siteDefaults.tagline.en,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteDefaults.brandName.en,
    title: siteDefaults.brandName.en,
    description: siteDefaults.tagline.en
  },
  twitter: {
    card: "summary_large_image",
    title: siteDefaults.brandName.en,
    description: siteDefaults.tagline.en
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
