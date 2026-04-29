# Shree Ramji - AI/ML Engineer Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing AI/ML projects and expertise.

## Features

- **Dark/Light Mode** - Toggle between themes with persistence
- **Animated Hero Section** - Typewriter effect for role titles
- **Filterable Projects** - Filter by category (ML/AI, GenAI, MLOps, etc.)
- **Skills Tabs** - Organized by specialty area
- **Experience Timeline** - Interactive vertical timeline
- **Services Section** - Freelance service offerings
- **Contact Form** - Integrated contact functionality
- **Responsive Design** - Mobile-first, works on all devices
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **SEO Optimized** - Meta tags and Open Graph for social sharing

## Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/anshs990/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment to GitHub Pages

### First-Time Setup

1. **Install gh-pages (already in devDependencies):**
```bash
npm install
```

2. **Update package.json homepage** (already configured):
```json
"homepage": "https://anshs990.github.io/portfolio"
```

3. **Deploy manually (one-time):**
```bash
npm run deploy
```

4. **Configure GitHub Repository:**
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The CI/CD pipeline is already configured in `.github/workflows/deploy.yml`

### Automatic Deployment

The GitHub Actions workflow automatically deploys on every push to the `main` branch:

```bash
# Make changes, then
git add .
git commit -m "Your commit message"
git push origin main
```

The deployment will happen automatically. Check the "Actions" tab in your GitHub repository for progress.

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD pipeline
├── public/
│   ├── index.html           # HTML template with SEO meta tags
│   └── 404.html             # SPA support for GitHub Pages
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Services.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── BackToTop.js
│   │   └── LoadingScreen.js
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Update Personal Information

Edit the component files in `src/components/`:
- **Hero.js** - Name, tagline, social links
- **About.js** - Bio text, stats
- **Skills.js** - Skills and categories
- **Projects.js** - Project data
- **Experience.js** - Work history
- **Contact.js** - Contact information

### Change Color Scheme

Edit `tailwind.config.js`:
```js
colors: {
  navy: { /* ... */ },
  electric: { /* ... */ },
}
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email:** shreeram.tech.dev@gmail.com
- **GitHub:** [anshs990](https://github.com/anshs990)
- **LinkedIn:** [shreeram07](https://linkedin.com/in/shreeram07)
