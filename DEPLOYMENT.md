# Deploy to GitHub Pages - Setup Guide

## 📋 Prerequisites
- GitHub account
- Git installed on your computer

## 🚀 Deployment Steps

### Step 1: Initialize Git Repository (if not already done)
```bash
cd /Users/ryan/Desktop/RyanPortfolio
git init
git add .
git commit -m "Initial commit: TypeScript/Tailwind portfolio"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Name your repository: **RyanPortfolio**
3. Keep it **public**
4. **Do NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/rj7002/RyanPortfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages (Automatic Deployment)
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. That's it! The workflow will automatically deploy on every push

### Alternative: Manual Deployment with gh-pages
If you prefer manual deployment instead of automatic:
```bash
npm run deploy
```

## 🌐 Your Live Site
After deployment, your portfolio will be available at:
**https://rj7002.github.io/RyanPortfolio/**

## 📝 Notes

### Automatic Deployment
- Every time you push to `main` or `master` branch, GitHub Actions will automatically build and deploy
- Check deployment status in the **Actions** tab on GitHub
- First deployment takes 2-3 minutes

### Manual Deployment
- Run `npm run deploy` anytime to manually deploy
- This builds your site and pushes to the `gh-pages` branch

### Making Updates
1. Edit your code locally
2. Test with `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
4. GitHub Actions will automatically deploy (or run `npm run deploy` for manual)

## 🔧 Configuration Files Created
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment
- `vite.config.ts` - Updated with base URL for GitHub Pages
- `package.json` - Added deploy script

## ⚠️ Important
The `base` in `vite.config.ts` is set to `/RyanPortfolio/` to match your repository name. If you change your repository name, update this value accordingly.

## 🎉 Success!
Once deployed, share your portfolio:
- LinkedIn
- Twitter/X
- GitHub profile README
- Resume

Happy coding! 🚀
