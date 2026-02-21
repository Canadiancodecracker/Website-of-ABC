export default {
  name: "newsPressRelease",
  title: "News / Press Release",
  type: "document",
  fields: [
    { name: "slug", type: "slug", options: { source: "headline_en" } },
    { name: "headline_en", type: "string" },
    { name: "headline_zh", type: "string" },
    { name: "body_en", type: "text" },
    { name: "body_zh", type: "text" },
    { name: "tags", type: "array", of: [{ type: "string" }] },
    { name: "publishedAt", type: "datetime" }
  ]
};
