# 🚀 Deployment Guide - GitHub & Vercel

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ A [GitHub](https://github.com) account
- ✅ A [Vercel](https://vercel.com) account (you can sign up with GitHub)
- ✅ Git installed on your computer

---

## 📦 Part 1: Upload to GitHub

### Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project folder
cd "C:\Users\Kako\Desktop\REM PROJECTTTTT\Love Able\blue-haven-celebration-main"

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit - Birthday website for Remmy 🎂"
```

### Step 2: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `remmy-birthday-celebration` (or any name you prefer)
   - **Description**: "A special birthday website for Remmy 💙"
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### Step 3: Connect Local Repository to GitHub

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/remmy-birthday-celebration.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🌐 Part 2: Deploy to Vercel

### Step 1: Go to Vercel

1. Visit [Vercel](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Sign in with your **GitHub account** (recommended)

### Step 2: Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"remmy-birthday-celebration"** (or whatever you named it)
4. Click **"Import"**

### Step 3: Configure Project Settings

Vercel will automatically detect that it's a **Vite** project. Verify these settings:

- **Framework Preset**: `Vite`
- **Build Command**: `npm run build` (should be auto-detected)
- **Output Directory**: `dist` (should be auto-detected)
- **Install Command**: `npm install` (should be auto-detected)

### Step 4: Deploy!

1. Click **"Deploy"**
2. Wait for the build to complete (usually takes 1-2 minutes)
3. Once done, you'll see: **"🎉 Congratulations!"**
4. Your website is now live!

### Step 5: Get Your Live URL

Vercel will provide you with a URL like:
```
https://remmy-birthday-celebration.vercel.app
```

You can also set up a **custom domain** if you have one!

---

## 🔄 Updating Your Website

Whenever you make changes and want to update the live site:

```bash
# Make your changes, then:
git add .
git commit -m "Description of your changes"
git push origin main
```

**Vercel will automatically redeploy** your site whenever you push to GitHub! 🚀

---

## ⚙️ Optional: Custom Domain Setup

If you want a custom domain (like `remmy-birthday.com`):

1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

---

## 🎯 Important Notes

### Audio File
- The `bury_the_light.mp3` file in the `public` folder will be deployed
- Make sure it's not too large (Vercel has file size limits)
- If the file is too large, consider compressing it or hosting it elsewhere

### Images
- All images in `public/images/` will be deployed
- Optimize images for web to reduce load times

### Environment Variables
- This project doesn't use environment variables
- If you add any in the future, configure them in Vercel's dashboard under **Settings** → **Environment Variables**

---

## 🐛 Troubleshooting

### Build Fails on Vercel
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Audio Doesn't Play
- Some browsers block autoplay
- Users may need to interact with the page first

### Images Not Loading
- Check that image paths are correct
- Images should be in `public/` folder
- Use paths like `/images/rem/image.png` (starting with `/`)

---

## 🎉 You're Done!

Your birthday website is now live on the internet! Share the URL with Remmy and celebrate! 🎂💙

**Live URL Format:**
```
https://your-project-name.vercel.app
```

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **Vite Docs**: https://vitejs.dev

---

**Made with 💙 for Remmy's Special Day!**
