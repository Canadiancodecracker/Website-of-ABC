export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "slug", type: "slug", options: { source: "name_en" }, validation: (Rule: any) => Rule.required() },
    { name: "category", type: "reference", to: [{ type: "productCategory" }], validation: (Rule: any) => Rule.required() },
    { name: "name_en", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "name_zh", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "summary_en", type: "text" },
    { name: "summary_zh", type: "text" },
    { name: "applications_en", type: "array", of: [{ type: "string" }] },
    { name: "applications_zh", type: "array", of: [{ type: "string" }] },
    {
      name: "specRows",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "key_en", type: "string" },
          { name: "key_zh", type: "string" },
          { name: "value_en", type: "string" },
          { name: "value_zh", type: "string" }
        ]
      }]
    },
    { name: "packaging_en", type: "text" },
    { name: "packaging_zh", type: "text" },
    { name: "downloads", type: "array", of: [{ type: "reference", to: [{ type: "downloadDocument" }] }] }
  ]
};
