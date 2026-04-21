# Dawn Brew — Deploy Instructions

## Deploy to Vercel

1. Push this codebase to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and click "Import Project".
3. Select the GitHub repository.
4. Confirm the framework is detected as **Vite**.
5. Leave build command as `vite build` and output directory as `dist`.
6. Click "Deploy".

The site will build and deploy automatically.

## Environment Variables

This is a static site with no required environment variables. All content is client-side rendered.

## First-time setup

No backend setup is required. This site uses no database or server functions.

- The email signup form is UI-only with no submission handler.
- Social links in the footer use placeholder URLs — update them in `src/App.tsx` if needed.

After deployment, your site will be live at the provided Vercel URL.