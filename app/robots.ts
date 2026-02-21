import { MetadataRoute } from "next";
import { siteDefaults } from "@/lib/cms/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteDefaults.siteUrl}/sitemap.xml`
  };
}
