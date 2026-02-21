export default {
  name: "productCategory",
  title: "Product Category",
  type: "document",
  fields: [
    { name: "slug", type: "slug", options: { source: "title_en" }, validation: (Rule: any) => Rule.required() },
    { name: "title_en", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "title_zh", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "description_en", type: "text" },
    { name: "description_zh", type: "text" }
  ]
};
