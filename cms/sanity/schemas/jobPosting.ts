export default {
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  fields: [
    { name: "jobId", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "title_en", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "title_zh", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "location_en", type: "string" },
    { name: "location_zh", type: "string" },
    { name: "team_en", type: "string" },
    { name: "team_zh", type: "string" },
    { name: "summary_en", type: "text" },
    { name: "summary_zh", type: "text" },
    { name: "postedAt", type: "date" }
  ]
};
