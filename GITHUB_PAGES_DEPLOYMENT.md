# GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio website to GitHub Pages:

## Prerequisites
- GitHub account
- Git installed on your computer

## Step-by-Step Deployment

### 1. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository (e.g., `deep-mondal-portfolio`)
4. Make it public (required for free GitHub Pages)
5. Don't initialize with README since you already have code
6. Click "Create repository"

### 2. Update Configuration
1. Open `vite.config.static.ts` 
2. Replace `'/your-repo-name/'` with `'/deep-mondal-portfolio/'` (or whatever you named your repo)

### 3. Upload Your Code to GitHub
Run these commands in your project folder:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/deep-mondal-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click the "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

### 5. Deploy the Site
The GitHub Action will automatically:
- Install dependencies
- Build your static site
- Deploy to GitHub Pages

Your site will be available at: `https://YOUR_USERNAME.github.io/deep-mondal-portfolio/`

## Manual Build (Alternative)
If you prefer to build locally and push the built files:

```bash
# Build the static site
node build-static.js

# The built files will be in the 'dist' folder
# You can then push the dist folder to a 'gh-pages' branch
```

## Important Notes
- It may take a few minutes for your site to be available after first deployment
- Any future pushes to the main branch will automatically rebuild and redeploy your site
- Make sure your repository is public for free GitHub Pages hosting
- Your profile picture and other assets are included in the build

## Troubleshooting
- If images don't load, check that the base path in `vite.config.static.ts` matches your repository name
- If the site shows a 404, ensure GitHub Pages is enabled and pointing to the correct source
- Check the Actions tab for any build errors

Your professional portfolio will be live and accessible to share with potential employers and collaborators!