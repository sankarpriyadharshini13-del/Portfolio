# Priyadharshini Sankar — Portfolio

A professional React.js portfolio built with Vite + CSS Modules.

## Folder Structure

```
portfolio-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed responsive navbar with hamburger
│   │   ├── Navbar.module.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── SectionHeader.jsx   # Reusable eyebrow + title + rule
│   │   └── SectionHeader.module.css
│   ├── sections/
│   │   ├── Hero.jsx            # Hero with typing animation + counter stats
│   │   ├── Hero.module.css
│   │   ├── About.jsx
│   │   ├── About.module.css
│   │   ├── Experience.jsx
│   │   ├── Experience.module.css
│   │   ├── Projects.jsx        # Includes upcoming CodeLearn project
│   │   ├── Projects.module.css
│   │   ├── Skills.jsx          # Includes Supabase
│   │   ├── Skills.module.css
│   │   ├── Freelance.jsx       # Full freelance section with CTA
│   │   ├── Freelance.module.css
│   │   ├── Contact.jsx
│   │   └── Contact.module.css
│   ├── hooks/
│   │   └── useReveal.js        # IntersectionObserver scroll reveal
│   ├── data/
│   │   └── portfolio.js        # All content data (easy to edit)
│   ├── App.jsx
│   ├── index.css               # CSS variables + global reset
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Customising Content

Edit `src/data/portfolio.js` to update:
- Your roles (typing animation)
- Stats
- Work experience
- Projects
- Skills
- Freelance services

Update your real LinkedIn/GitHub URLs in the data file and components.
