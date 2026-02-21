# QA Checklist

## i18n
- [ ] Locale switch preserves route context (`/en/...` <-> `/zh/...`).
- [ ] No mixed-language fragments.
- [ ] Product names/spec tables consistent across locales.

## Responsive
- [ ] Header/navigation usable at 320px width.
- [ ] Hero content readable on mobile.
- [ ] Product/download tables scroll or stack correctly.
- [ ] Contact form and filters work on touch devices.

## Performance
- [ ] LCP target met on Home and Product pages.
- [ ] CLS under threshold; no major layout shifts.
- [ ] INP acceptable for nav/filter/form interactions.
- [ ] Images/video lazy/optimized with poster fallback.

## SEO
- [ ] Per-page metadata and canonical/alternate locale tags.
- [ ] OpenGraph/Twitter metadata set.
- [ ] `sitemap.xml` and `robots.txt` valid.
- [ ] JSON-LD present for Organization/Product/Article/JobPosting.

## Accessibility
- [ ] Keyboard navigation for all key controls.
- [ ] Focus states visible.
- [ ] Color contrast meets WCAG AA.
- [ ] `prefers-reduced-motion` behavior verified.

## Security + Forms
- [ ] Honeypot anti-spam blocks bot submissions.
- [ ] Security headers enabled.
- [ ] Input validation for required fields.

## Regression
- [ ] No broken internal links.
- [ ] No 404 for seeded routes.
- [ ] Download links mapped to valid files.
