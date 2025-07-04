# Deployment Instructions

Follow these steps to deploy your SpeedRead Pro application to GitHub Pages:

## 1. Push to GitHub Repository

If you haven't already connected your local repository to GitHub, follow these steps:

```powershell
# Initialize Git if not already initialized
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial commit with SpeedRead Pro"

# Link to your GitHub repository
git remote add origin https://github.com/vaibhavkumarsingh12/catrc.git

# Push to GitHub
git push -u origin main
```

If your repository is already linked to GitHub:

```powershell
# Add all files to staging
git add .

# Commit the changes
git commit -m "Update SpeedRead Pro with Google AI Integration"

# Push to GitHub
git push origin main
```

## 2. Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/vaibhavkumarsingh12/catrc
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Build and deployment" section:
   - Source: Select "GitHub Actions"
   - The workflow is already set up in the repository

The GitHub Action workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site when you push to the main branch.

## 3. Verify Deployment

1. After pushing your changes, go to the "Actions" tab in your GitHub repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (it typically takes 1-2 minutes)
4. Once complete, your site will be available at: https://vaibhavkumarsingh12.github.io/catrc/

## 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a domain registrar (like Namecheap, GoDaddy, etc.)
2. In your GitHub repository settings, under "Pages":
   - Enter your custom domain name
   - Save
3. Set up DNS records with your domain provider:
   - Add an A record pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to your GitHub Pages URL

Note: The CNAME file is already included in the project's public folder.

## Troubleshooting

If you encounter any issues:

1. Check if the GitHub Action workflow completed successfully
2. Verify that your repository is public or that you have GitHub Pages enabled for private repositories
3. Make sure your `vite.config.js` contains the correct base path: `/catrc/`
4. Check for any console errors in your browser
