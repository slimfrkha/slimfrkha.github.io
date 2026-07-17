# slimfrkha.github.io

Personal website — [slimfrkha.github.io](https://slimfrkha.github.io). Built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # preview the build locally
```

## Content — where to edit

| What | File |
|------|------|
| Name, role, bio, links, skills, languages | `src/data/site.ts` |
| Experience | `src/data/experience.ts` |
| Publications & writing | `src/data/publications.ts` |
| Patents | `src/data/patents.ts` |
| Talks | `src/data/talks.ts` |
| Education | `src/data/education.ts` |
| Open source (projects + contributions) | `src/data/projects.ts` |
| Colors / styling | `src/styles/global.css` |

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. One-time setup: repo **Settings → Pages → Source →
GitHub Actions**.
