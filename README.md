# ASNE Showcase

Static public showcase site for ASNE: Artificial Semantic Neural Evaluation.

This repository is intended for GitHub Pages deployment and only contains public-facing project copy, benchmark snapshots, and placeholder visual assets. The core ASNE research repository can remain private while under active development.

## Local Development

```bash
npm install
npm run dev
```

The Vite dev server will print a local URL, usually:

```text
http://localhost:5173/asne-showcase/
```

## Build

```bash
npm run build
```

The static build is written to:

```text
dist/
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

The site is configured for the repository name:

```text
asne-showcase
```

Vite uses:

```ts
base: "/asne-showcase/"
```

Deployment is handled by:

```text
.github/workflows/deploy.yml
```

To deploy:

1. Push this project to a GitHub repository named `asne-showcase`.
2. In GitHub, open repository settings.
3. Go to `Pages`.
4. Set the source to `GitHub Actions`.
5. Push to `main` or run the workflow manually.

## Screenshots and Reports

Placeholder screenshot assets live in:

```text
public/assets/screenshots/
```

Replace these files with exported ASNE visuals when ready:

- `semantic-dashboard.svg`
- `brain-visualizer.svg`
- `timeline-view.svg`
- `section-signal.svg`
- `variant-comparison.svg`

Public reports can be added under a future path such as:

```text
public/reports/
```

Before publishing reports, review them for local machine paths, private repository names, raw data paths, or other development-only metadata.

## Content Notes

The site frames ASNE as an AI and semantic evaluation project with brain-inspired response visualization. It intentionally avoids private source-code details and does not present ASNE outputs as measured brain activity, diagnosis, emotion detection, or measurement of a person's mental state.
