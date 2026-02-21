export default {
  name: "downloadDocument",
  title: "Download Document",
  type: "document",
  fields: [
    { name: "title_en", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "title_zh", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "docType", type: "string", options: { list: ["TDS", "SDS", "Certificate", "COA"] } },
    { name: "version", type: "string" },
    { name: "file", type: "file", options: { accept: ".pdf" } },
    { name: "gated", type: "boolean", initialValue: false }
  ]
};
