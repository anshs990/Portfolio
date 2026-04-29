# Deployment Guide - GitHub Pages

## Quick Start: Deploy in 5 Steps

### Step 1: Initialize Git Repository

Open a terminal in the project folder:

```bash
cd "D:\Claude Code\Portfolio"
git init
git add .
git commit -m "Initial commit: Shree Ramji portfolio"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Set as **Public**
4. Click "Create repository"

### Step 3: Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/anshs990/portfolio.git
git push -u origin main
```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The workflow will automatically trigger on push

### Step 5: Wait for Deployment

1. Go to **Actions** tab in your repository
2. Wait for the "Deploy to GitHub Pages" workflow to complete (green checkmark)
3. Your site will be live at: `https://anshs990.github.io/portfolio`

---

## Future Updates

After the initial setup, all future deployments are automatic:

```bash
# Make your changes, then:
git add .
git commit -m "Updated projects section"
git push origin main
```

The GitHub Actions workflow will automatically rebuild and deploy your site.

---

## Manual Deployment (Alternative)

If you prefer manual deployment instead of GitHub Actions:

```bash
npm run deploy
```

Then in GitHub Settings → Pages, set:
- **Source**: Deploy from a branch
- **Branch**: gh-pages
- **Folder**: / (root)

---

## Troubleshooting

### 404 Error After Deployment

1. Make sure the repository name matches the `homepage` field in `package.json`
2. Wait 2-3 minutes after deployment completes
3. Try clearing browser cache

### Build Fails

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Not Loading

This is usually a path issue. Make sure:
1. The `homepage` field in `package.json` is correct
2. You've rebuilt after changing the homepage field

---

## Files Already Configured

The following files are already set up for deployment:

- ✅ `package.json` - homepage field and deploy scripts
- ✅ `.github/workflows/deploy.yml` - CI/CD pipeline
- ✅ `public/404.html` - SPA routing support
- ✅ `public/index.html` - SEO meta tags

---

## Your Site Features

Once deployed, your portfolio will have:

- **Dark/Light Mode Toggle** - Persists user preference
- **Animated Hero** - Typewriter effect for role titles
- **Filterable Projects** - 12 projects across 7 categories
- **Skills Tabs** - 6 categories of technical skills
- **Experience Timeline** - Interactive vertical timeline
- **Services Section** - 6 freelance service cards
- **Contact Form** - Ready for integration
- **Mobile Responsive** - Works on all screen sizes
- **SEO Optimized** - Open Graph tags for social sharing

---

## Post-Deployment Checklist

- [ ] Replace `/Shree_Ramji_CV.pdf` with actual CV file in `public/` folder
- [ ] Replace `/Shree_Ramji_Resume.pdf` with actual resume file
- [ ] Add `og-image.png` to `public/` for social sharing preview
- [ ] Update GitHub project links in `Projects.js` with actual repo URLs
- [ ] Test contact form integration (consider Formspree or EmailJS)

---

## Need Help?

- GitHub Pages Docs: https://pages.github.com/
- React Deployment Guide: https://create-react-app.dev/docs/deployment/
- GitHub Actions Docs: https://docs.github.com/en/actions
