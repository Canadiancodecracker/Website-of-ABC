export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "brandName_en", type: "string", title: "Brand Name (EN)", validation: (Rule: any) => Rule.required() },
    { name: "brandName_zh", type: "string", title: "Brand Name (ZH)", validation: (Rule: any) => Rule.required() },
    { name: "tagline_en", type: "text", title: "Tagline (EN)" },
    { name: "tagline_zh", type: "text", title: "Tagline (ZH)" },
    { name: "socialLinks", title: "Social Links", type: "array", of: [{ type: "object", fields: [
      { name: "label", type: "string" },
      { name: "href", type: "url" }
    ] }] }
  ]
};
