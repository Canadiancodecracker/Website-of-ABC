# Deploy to Vercel

## Debug: "The specified token is not valid"

If you see:

```text
Error: The specified token is not valid. Use `vercel login` to generate a new token.
```

the CLI is using an expired or missing Vercel token.

## Fix (choose one)

### Option 1: Log in (interactive)

```bash
vercel login
```

Then deploy:

```bash
npm run deploy
```

### Option 2: Use a token (CI / non-interactive)

1. Create a token: [Vercel Account → Tokens](https://vercel.com/account/tokens) → **Create**.
2. Set it when deploying:

   ```bash
   VERCEL_TOKEN=your_token_here npm run deploy
   ```

   Or export it once:

   ```bash
   export VERCEL_TOKEN=your_token_here
   npm run deploy
   ```

## Commands

| Command           | Effect                    |
|-------------------|---------------------------|
| `npm run deploy`  | Preview deployment        |
| `npm run deploy:prod` | Production deployment |

You can also run the script directly:

```bash
bash scripts/deploy.sh           # preview
bash scripts/deploy.sh --prod    # production
```

## GitHub Actions (deploy on push or manually)

This repo includes a workflow that deploys to Vercel on every push to `main` and can be run manually from the **Actions** tab.

### One-time setup

1. **Link the project** (once, on your machine):
   ```bash
   vercel login
   vercel link
   ```
   Choose your scope and link to an existing Vercel project or create one.

2. **Get IDs** (from the repo root after `vercel link`):
   ```bash
   cat .vercel/project.json
   ```
   You’ll see `orgId` and `projectId`. Keep these for the next step.

3. **Create a token:** [Vercel Account → Tokens](https://vercel.com/account/tokens) → **Create**.

4. **Add GitHub secrets:**  
   Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**. Add:
   - `VERCEL_TOKEN` — the token from step 3  
   - `VERCEL_ORG_ID` — `orgId` from step 2  
   - `VERCEL_PROJECT_ID` — `projectId` from step 2  

After that, pushing to `main` or running the **Deploy to Vercel** workflow from the Actions tab will deploy to production. Pushes to other branches run **Deploy to Vercel (Preview)** and create preview URLs.

If the workflow fails with **"Add VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID"**, one or more of those secrets are missing — add them in the repo **Settings → Secrets and variables → Actions**.

## GitHub → Vercel (dashboard integration)

If this repo is connected to Vercel in the Vercel dashboard (Git integration), pushes to the linked branch (e.g. `main`) also trigger automatic deployments there. The GitHub Action above is an alternative that uses your own token and secrets.
