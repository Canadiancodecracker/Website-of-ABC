export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    { name: "slug", type: "slug", options: { source: "title_en" } },
    { name: "title_en", type: "string" },
    { name: "title_zh", type: "string" },
    { name: "location_en", type: "string" },
    { name: "location_zh", type: "string" },
    { name: "startDate", type: "datetime" },
    { name: "endDate", type: "datetime" }
  ]
};
