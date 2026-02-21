# Sanity CMS Setup

This project includes a headless CMS schema model for:
- `productCategory`
- `product`
- `downloadDocument`
- `storyArticle`
- `newsPressRelease`
- `event`
- `jobPosting`
- `siteSettings`

## Quick setup
1. Create a Sanity project and dataset.
2. Install Sanity dependencies in this Next.js project.
3. Register the schemas from `cms/sanity/schemas/index.ts`.
4. Map GROQ queries to `lib/cms/data.ts` shape.

## Bilingual strategy
Each content model uses paired fields (`title_en`, `title_zh`, etc.) to keep locale routes and slugs stable across `/en` and `/zh`.
