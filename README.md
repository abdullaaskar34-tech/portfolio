# Abdulla Askar Portfolio Website

Open this folder in VS Code:

```bash
code /Users/ask3r/Desktop/website_cv
```

Main files:

- `src/main.jsx` - React components and portfolio content
- `src/styles.css` - Tailwind entry file and small custom styles
- `index.html` - Vite app shell
- `tailwind.config.js` - design tokens and animations
- `assets/` - replaceable image files

Run the site locally:

```bash
npm install
npm run dev
```

Open the Vite URL printed by the terminal, usually:

```bash
http://localhost:5173/
```

Build for production:

```bash
npm run build
```

If you use VS Code Live Server, run `npm run build` first. Live Server is configured to open the built `dist` folder.

Replace these placeholder files with your real photos when ready:

- `assets/profile-photo-placeholder.svg`
- `assets/portfolio-wide-photo-placeholder.svg`
- `assets/projects-banner-placeholder.svg`
- `assets/project-ai-triage-device.svg`
- `assets/project-blood-sugar-tracking.svg`
- `assets/project-collaborative-robot.svg`
- `assets/project-gbm-drug-platform.svg`
- `assets/project-pcb-design.svg`
- `assets/project-python-training.svg`

Keep the same file names, or update the image paths inside `index.html`.
