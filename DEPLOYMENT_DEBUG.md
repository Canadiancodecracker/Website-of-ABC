# Deployment debug – website-of-abc.vercel.app

## What was checked

- **website-of-abc.vercel.app** – main production domain  
- **website-of-3jrltlaxr-ming2008s-projects.vercel.app** – preview/deployment URL  

---

## Issue 1: Wrong site on website-of-abc.vercel.app

**Symptom:** The domain serves a **Next.js** site titled **"Ningxia Hengkang Technology Co., Ltd."** (APIs, food and feed ingredients), not the **ABC Chemical** static site from this repo.

**Cause:** The domain `website-of-abc.vercel.app` is attached to a **different Vercel project** (the Ningxia Hengkang Next.js app), not to the project that deploys **Canadiancodecracker/Website-of-ABC**.

**Fix (choose one):**

1. **Use the correct project for this domain**
   - In [Vercel Dashboard](https://vercel.com/dashboard): open the project that is connected to **Website-of-ABC** (this repo).
   - Go to **Settings → Domains**.
   - Add **website-of-abc.vercel.app** to this project (if it’s on another project, remove it there first).
   - Deploy this project so the latest build is live.

2. **Or point the domain to this repo’s project**
   - Find the Vercel project that deploys from **Canadiancodecracker/Website-of-ABC**.
   - In that project: **Settings → Domains** → add **website-of-abc.vercel.app**.
   - Remove **website-of-abc.vercel.app** from the Ningxia Hengkang project so only the ABC project uses it.

After this, **website-of-abc.vercel.app** should serve the static ABC Chemical site (this repo).

---

## Issue 2: 401 on preview URL (website-of-3jrltlaxr-...)

**Symptom:**  
`https://website-of-3jrltlaxr-ming2008s-projects.vercel.app` returns **401 Unauthorized**.

**Cause:** **Vercel Deployment Protection** is enabled (password protection or Vercel Authentication) for that deployment/preview.

**Fix:**

- In the **Vercel project** that owns that URL: **Settings → Deployment Protection**.
- For **Preview Deployments**, either:
  - Turn off **Vercel Authentication** / **Password Protection**, or  
  - Add yourself (or your team) so previews are accessible.

Use the **production** domain (**website-of-abc.vercel.app**) once it’s fixed as above to share the live ABC site.

---

## This repo (Website-of-ABC)

- **Content:** Static HTML/CSS/JS (e.g. `index.html`, `style.css`). `vercel.json` forces static (no framework, no build). `.vercelignore` excludes `app/`, `components/`, and Next-related files so only the ABC Chemical static site is deployed.
- **Deploy:** Push to `main` or run the **Deploy to Vercel** GitHub Action (after adding `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`). See [DEPLOY.md](DEPLOY.md).

After fixing the domain (Issue 1) and optionally preview protection (Issue 2), redeploy this project so **website-of-abc.vercel.app** serves the correct static site.
