# CDN Shelling Architecture Demo

This repository demonstrates the **"CDN Shelling"** architecture using two different React frameworks: **Vite** and **Next.js**.

The goal of this architecture is to minimize hosting costs (compute and bandwidth) on platforms like Vercel by serving a static "App Shell" from the CDN (Cloudflare/Vercel Edge) and fetching data directly from the client side.

## Projects

### 1. `vite-shell` (Recommended Reference)
A standard **Vite + React** Single Page Application (SPA).
*   **Mechanism**: The `index.html` is the "Shell". It loads instantly.
*   **Routing**: Client-side (React Router or similar).
*   **Data Fetching**: Purely client-side (using `SWR`).
*   **Deployment**: Standard static site.
*   **Why it works**: By definition, an SPA *is* an app shell. Vercel only serves the static files.

### 2. `next-shell` (Next.js Static Export)
A **Next.js** application configured for **Static Exports**.
*   **Mechanism**: Uses `output: 'export'` in `next.config.ts`.
*   **Routing**: File-system based, but pre-rendered to HTML.
*   **Data Fetching**: `page.tsx` is a Client Component fetching data via `SWR`.
*   **No SSR**: Explicitly disables Node.js server runtime to ensure zero "Serverless Function" execution.

## Comparison

| Feature | `vite-shell` | `next-shell` |
| :--- | :--- | :--- |
| **Build Output** | `dist/index.html` + JS/CSS | `out/index.html` + JS/CSS |
| **Server Runtime** | None (Static) | None (Static Export) |
| **Vercel Cost** | Bandwidth Only (Cacheable) | Bandwidth Only (Cacheable) |
| **Complexity** | Low | Low (with `output: export`) |

## How to Run locally

### Vite Shell
```bash
cd vite-shell
npm install
npm run dev
```

### Next.js Shell
```bash
cd next-shell
npm install
npm run dev
```

## How to Deploy
Deploying either folder to Vercel will effectively "Shell" your backend if you configure caching correctly.
1.  **Vite**: Deploy `vite-shell`. Vercel auto-detects Vite.
2.  **Next**: Deploy `next-shell`. Vercel auto-detects Next.js.

To implement the full "CDN Shelling" pattern:
1.  Put **Cloudflare** in front of Vercel.
2.  Cache `your-domain.com/*` (the HTML shell) at Cloudflare Edge.
3.  Ensure your API calls go to a separate backend (e.g., `api.your-domain.com`).
