# Repository Guidelines

## Project Structure & Module Organization
`src/pages` holds page-level Astro entry points, while reusable UI lives in `src/components` and shared layouts in `src/layouts`. Content collections (projects, timeline, etc.) live under `src/content` so schema typing stays strict. Styling primitives such as tokens, Tailwind layers, and glassmorphism helpers live in `src/styles`, with any TypeScript helpers in `src/utils`. Static assets that must bypass the bundler belong in `public/`, and the production build is emitted to `dist/`. Align new modules with these folders instead of introducing ad-hoc directories.

## Build, Test, and Development Commands
Use `npm run dev` for hot-reload development at `http://localhost:4321`. `npm run build` runs the Astro compiler with the GitHub Pages base path and writes the optimized site to `dist/`. `npm run preview` serves that build so you can smoke-test production paths before pushing. Run `npm install` before anything else to sync dependencies.

## Coding Style & Naming Conventions
Stick to TypeScript everywhere (`.astro` + `.ts`). Components, layouts, and utilities export PascalCase symbols that mirror their filenames. Favor Tailwind utility classes declared in `tailwind.config.ts`; fall back to `src/styles/*.css` for shared layers only. Keep indentation at two spaces, no semicolons in Astro templates, and prefer named exports. Run `npx astro check` or rely on the IDE TypeScript server to catch typing issues early.

## Testing Guidelines
There is no automated test harness yet, so treat `npm run preview` sessions as regression passes: verify both light/dark themes, intersection animations, and GitHub Pages base paths. When adding client scripts, write them as small islands under `src/components` and confirm they hydrate only when needed. Document manual test steps inside the PR if they are non-trivial.

## Commit & Pull Request Guidelines
Commits are short, imperative summaries (e.g., "Refine hero grid", "Adjust theme toggle"). Keep related changes together—style tweaks and content edits should not share a commit with build tooling. Pull requests should describe the motivation, list visible changes, and mention any new content collections or config updates. Link an issue when applicable and attach screenshots or GIFs for visual shifts so reviewers can compare light/dark variants quickly.
