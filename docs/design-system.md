# Hengkang Enterprise Design System (Hi-Fi Spec)

## 1) Brand Expression
- Positioning: global leader in APIs, food additives, feed additives; innovation + sustainability first.
- Visual tone: precise, premium, scientific, transparent.
- Layout principles: whitespace-first, strong vertical rhythm, clear hierarchy, editorial storytelling blocks.

## 2) Color System
- `--color-ink`: `#0A2A30` (primary text, deep backgrounds)
- `--color-emerald`: `#0B7F62` (sustainability/positive actions)
- `--color-teal`: `#00A3A7` (innovation accents)
- `--color-sky`: `#2B8EE5` (interactive highlights/links)
- `--color-cloud`: `#F2F7F8` (surface backgrounds)
- Hero gradient: `linear-gradient(120deg, rgba(10,42,48,.88), rgba(11,127,98,.74))`

## 3) Typography
- Primary: Public Sans
- CJK support: Noto Sans SC
- H1: 48/56 (desktop), 36/44 (tablet), 32/40 (mobile)
- H2: 32/40, H3: 24/32
- Body L: 18/30, Body M: 16/26, Body S: 14/22
- Labels/meta: 12/18, uppercase for tags/navigation context

## 4) Spacing + Grid
- 8pt spacing scale (`4, 8, 12, 16, 24, 32, 40, 48, 64, 80`)
- Max content width: `1280px`
- Desktop grid: 12 columns, 24px gutters
- Tablet grid: 8 columns, 20px gutters
- Mobile grid: 4 columns, 16px gutters

## 5) Components
- Header: sticky, translucent ink backdrop, global locale toggle (EN/中文), persistent navigation.
- Hero: full-bleed video/cinematic background, gradient overlay, 1 headline + supporting text + 2 CTAs.
- Story card: image top, category pill, editorial title, summary, date.
- KPI counter: animated numeric values with suffix support.
- Product card: category context, summary, detail CTA.
- Specs table block: structured rows from CMS fields (bilingual).
- Downloads module: document type, version, gated flag, tracked download CTA.
- Forms: labeled inputs, anti-spam honeypot, rounded controls, accessible focus styles.

## 6) Motion
- Scroll reveal for storytelling modules (0.8s ease, staggered 120ms).
- Micro hover translation on cards and actionable controls.
- KPI count-up animation with reduced-motion fallback.
- Reduced-motion mode: animations and transitions effectively disabled.

## 7) Page Blueprints (Desktop/Tablet/Mobile)
- Home: Hero -> KPI -> Pillars -> Categories -> Featured products -> Stories -> Sustainability/Careers split CTA.
- About: Profile intro -> facts + credentials -> timeline.
- Products: Category matrix -> product list -> product detail with specs + downloads.
- Innovation: capability cards -> innovation stories feed.
- Sustainability: green manufacturing/EHS/certifications/ESG blocks.
- News: searchable/filterable archive + year index.
- Careers: EVP intro -> job listing cards.
- Contact: routing form + office info + map slot.

## 8) Accessibility
- Color contrast targets WCAG AA or above.
- Keyboard accessibility for nav, toggle, filters, forms.
- Semantic structure (`header`, `main`, `section`, table semantics).
- `prefers-reduced-motion` support for all animated sections.
