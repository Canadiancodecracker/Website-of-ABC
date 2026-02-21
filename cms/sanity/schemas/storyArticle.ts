export default {
  name: "storyArticle",
  title: "Story / Article",
  type: "document",
  fields: [
    { name: "slug", type: "slug", options: { source: "title_en" } },
    { name: "title_en", type: "string" },
    { name: "title_zh", type: "string" },
    { name: "excerpt_en", type: "text" },
    { name: "excerpt_zh", type: "text" },
    { name: "category", type: "string", options: { list: ["Innovation", "Sustainability", "Press Release", "Event"] } },
    { name: "publishedAt", type: "datetime" }
  ]
};
