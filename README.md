# Halpt Landing Page

A pixel-faithful React recreation of the Halpt landing page with dark theme, animated sparkline, and full component breakdown.

## Folder Structure

```
halpt/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component
    ├── App.css               # Global styles + CSS variables
    └── components/
        ├── Banner.jsx        # Top announcement strip
        ├── Banner.module.css
        ├── Navbar.jsx        # Sticky navigation bar
        ├── Navbar.module.css
        ├── Hero.jsx          # Left copy + right dashboard
        ├── Hero.module.css
        ├── DashboardCard.jsx # AI score dashboard UI
        ├── DashboardCard.module.css
        ├── FeaturesSection.jsx  # 6-card feature grid
        ├── FeaturesSection.module.css
        ├── Footer.jsx
        └── Footer.module.css
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```
