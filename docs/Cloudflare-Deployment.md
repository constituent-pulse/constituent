# Cloudflare Deployment

Constituent deploys the Expo web build to Cloudflare Workers Static Assets. The Worker is static-assets only: no Worker API script, bindings, secrets, databases, or runtime backend logic are configured.

## Login

Install dependencies, then authenticate Wrangler with Cloudflare:

```sh
npm install
npx wrangler login
```

## Build

Create the Expo web output in `dist/`:

```sh
npm run build:web
```

The `dist/` directory is ignored by git and should not be committed.

## Local Preview

After building, preview the same static-assets configuration locally:

```sh
npm run preview:cloudflare
```

Wrangler reads `wrangler.jsonc`, serves assets from `dist/`, and uses SPA fallback routing so Expo Router paths can be refreshed directly in the browser.

## Deployment

Deploy the preview Worker:

```sh
npm run deploy:preview
```

This deploys the `constituent-preview` Worker using Cloudflare Workers Static Assets.

## Updating The Deployment

For each update:

```sh
npm run build:web
npm run deploy:preview
```

Rebuilding refreshes `dist/`; deploying uploads the new static assets.

## Custom Domain Later

When a production domain is ready, add a route or custom domain for the Worker in the Cloudflare dashboard or through Wrangler configuration. Keep secrets, databases, and Worker API bindings out of this static preview setup unless a future backend feature is explicitly approved.
