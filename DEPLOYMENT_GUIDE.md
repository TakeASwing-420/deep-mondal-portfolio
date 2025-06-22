# Deploy Your Portfolio to GitHub Pages

## Quick Setup (5 minutes)

### 1. Create GitHub Repository
- Go to GitHub and create a new **public** repository
- Name it `your-username.github.io` (recommended) or any name like `portfolio`
- Don't initialize with README

### 2. Update Configuration
Edit `vite.config.static.ts` and change line 8:
```typescript
base: '/your-repo-name/', // Change this to your actual repo name
```

**Important**: The repo name in the file should match your GitHub repository name exactly.

If you named your repo `your-username.github.io`, use:
```typescript
base: '/', // For username.github.io repos
```

### 3. Push Your Code
```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 5. Deploy
The workflow will automatically build and deploy your site. Your portfolio will be live at:
- `https://YOUR_USERNAME.github.io/` (if repo is named `your-username.github.io`)
- `https://YOUR_USERNAME.github.io/REPO_NAME/` (for other repo names)

## Manual Testing
To test the build locally:
```bash
npx vite build --config vite.config.static.ts
```

## Troubleshooting

### "File not found" or "Index.html missing" errors:
1. **Check repository name**: The `base` path in `vite.config.static.ts` must exactly match your GitHub repository name
2. **Verify build output**: Make sure the `dist` folder contains an `index.html` file after building
3. **Check GitHub Pages settings**: Go to Settings → Pages → Source should be "GitHub Actions"

### Common fixes:
- **Images not loading**: Ensure `base` path in `vite.config.static.ts` matches your repo name exactly
- **404 errors**: 
  - For `username.github.io` repos: set `base: '/'`
  - For other repos: set `base: '/repo-name/'`
- **Build fails**: Check the Actions tab for detailed error logs
- **Assets missing**: Verify attached assets are copied to the dist folder

### Manual verification:
```bash
# Test build locally
npx vite build --config vite.config.static.ts
# Check if dist/index.html exists
ls -la dist/
```

Your professional portfolio will be live and ready to share!