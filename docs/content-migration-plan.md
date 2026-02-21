# Content Migration Plan (Current Site -> New Global Platform)

## 1) Source Audit
- Source: `www.hengkangchina.com`
- Capture and verify:
  - Company facts (founded year, location, site area, registered capital)
  - Compliance/credential claims
  - Existing product lines and downloadable documents
  - Existing news/events entries

## 2) Content Model Mapping
- Company profile pages -> `SiteSettings` + page content modules.
- Product categories -> `ProductCategory`.
- Product detail pages -> `Product`.
- TDS/SDS/COA/certificates -> `Document/Download`.
- News/press/events -> `Story/Article`, `News/PressRelease`, `Event`.
- Job pages -> `JobPosting`.

## 3) Locale Strategy
- Shared route slugs; localized fields stored per entry.
- Mapping rule example:
  - `/en/products/creatine-monohydrate`
  - `/zh/products/creatine-monohydrate`
- All content must pass language QA: no mixed-language fragments.

## 4) Migration Execution Phases
1. Inventory export and URL map creation.
2. Structured extraction into migration sheet (EN + 中文 columns).
3. Translation and terminology harmonization.
4. CMS import (categories -> products -> docs -> stories/news/events -> jobs).
5. Internal review with regulatory/compliance owner.
6. Redirect setup from legacy URLs to new locale routes.

## 5) Governance
- Owner roles:
  - Regulatory/QA approval for claims and credentials.
  - Product management for specs and packaging.
  - Marketing/HR for stories and job postings.
- Publish workflow: Draft -> Review -> Approved -> Published.
- Document versioning required for downloads (TDS/SDS/Certificates).
