# Thomas Patsanis · Portfolio

Modern Astro + TypeScript portfolio for Thomas Patsanis — playful, Star Wars-inspired, and infused with alpine calm. The site ships a dark/light theme, intersection-based motion, and GitHub Pages deployment out of the box.

## 🧰 Tech Stack
- [Astro](https://astro.build/) with strict TypeScript
- Tailwind CSS (custom theme + glassmorphism helpers)
- Small vanilla TypeScript islands for filters, theme toggle, and form UX
- GitHub Actions workflow for Pages deployment

## 🚀 Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:4321` to explore the site with hot reload.

## 🧪 Building & Previewing
```bash
npm run build   # outputs to dist/
npm run preview # serves the production build locally
```
The project is configured with `site = https://tompats.github.io` and `base = /portfolio` so paths line up with GitHub Pages.

## 🌐 Deploying to GitHub Pages
1. Push to `main`. The workflow at `.github/workflows/deploy.yml` installs dependencies, builds the Astro site, and uploads `dist/` as an artifact.
2. The `deploy` job publishes that artifact via `actions/deploy-pages`, targeting the `github-pages` environment.
3. In your repository settings, enable GitHub Pages with the "GitHub Actions" deployment source.

Once the workflow finishes, your site is live at `https://tompats.github.io/portfolio/`.
