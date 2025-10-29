# Deployment Guide - Sanctuary Villas

Complete guide for deploying Sanctuary Villas to Vercel with custom domain.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Step 1: Prepare GitHub Repository](#step-1-prepare-github-repository)
- [Step 2: Deploy to Vercel](#step-2-deploy-to-vercel)
- [Step 3: Configure Environment Variables](#step-3-configure-environment-variables)
- [Step 4: Connect Custom Domain](#step-4-connect-custom-domain)
- [Step 5: Post-Deployment Verification](#step-5-post-deployment-verification)
- [Troubleshooting](#troubleshooting)
- [Cost Breakdown](#cost-breakdown)

## Prerequisites

Before deploying, ensure you have:

- ✅ **GitHub Account**: [github.com](https://github.com)
- ✅ **Vercel Account**: [vercel.com](https://vercel.com) (free tier available)
- ✅ **Boom API Credentials**: `BOOM_CLIENT_ID` and `BOOM_CLIENT_SECRET`
- ✅ **Custom Domain**: (e.g., `sanctuaryvillas.com`) - optional but recommended

## Step 1: Prepare GitHub Repository

### 1.1 Initialize Git Repository (if not done)

```bash
git init
git add .
git commit -m "Initial commit: Sanctuary Villas website"
```

### 1.2 Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `sanctuary-villas`
3. Choose **Private** or **Public** (your choice)
4. **DO NOT** initialize with README (we already have one)

### 1.3 Push to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/sanctuary-villas.git

# Push to main branch
git branch -M main
git push -u origin main
```

**⚠️ Important**: The `.env.local` file is already in `.gitignore` - your secrets are safe!

## Step 2: Deploy to Vercel

### 2.1 Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (or **"Login"** if you have an account)
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub repositories

### 2.2 Import Project

1. Click **"Add New..."** → **"Project"**
2. Find your `sanctuary-villas` repository in the list
3. Click **"Import"**

### 2.3 Configure Project Settings

Vercel will automatically detect:
- ✅ Framework: **Next.js**
- ✅ Build Command: `next build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**No changes needed** - these defaults are correct!

### 2.4 DON'T Deploy Yet!

Click **"Environment Variables"** instead of **"Deploy"** - we need to add secrets first!

## Step 3: Configure Environment Variables

### 3.1 Add Environment Variables

In the Vercel project settings, add these environment variables:

| Key | Value | Environment |
|-----|-------|-------------|
| `BOOM_CLIENT_ID` | `your_actual_client_id` | Production, Preview, Development |
| `BOOM_CLIENT_SECRET` | `your_actual_client_secret` | Production, Preview, Development |
| `BOOM_API_BASE_URL` | `https://app.boomnow.com/open_api/v1` | Production, Preview, Development |

**Important Notes:**
- Replace `your_actual_client_id` and `your_actual_client_secret` with real values
- Select **all three environments** (Production, Preview, Development) for each variable
- Click **"Add"** after each variable

### 3.2 Where to Find Your Credentials

Your Boom API credentials should be available in:
- Boom API Dashboard
- Your current `.env.local` file (locally)
- Email from Boom API team

### 3.3 Deploy Now!

Once all environment variables are added, click **"Deploy"**.

**Deployment takes ~2-3 minutes**. You'll see:
1. ⏳ Installing dependencies
2. ⏳ Building Next.js application
3. ⏳ Optimizing images
4. ✅ Deployment complete!

## Step 4: Connect Custom Domain

### 4.1 Purchase Domain (if needed)

Recommended domain registrars:
- **Namecheap**: ~$10-15/year
- **Google Domains**: ~$12/year
- **GoDaddy**: ~$15/year
- **Cloudflare**: ~$10/year

### 4.2 Add Domain in Vercel

1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter your domain: `sanctuaryvillas.com`
4. Click **"Add"**

### 4.3 Configure DNS Records

Vercel will show you DNS records to add. You have two options:

#### Option A: A Record (Recommended)

Add this A record in your domain registrar's DNS settings:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

For `www` subdomain, add:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

#### Option B: CNAME Record

If your registrar doesn't support A records for root domain:

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600
```

### 4.4 Wait for DNS Propagation

- DNS changes take **5-60 minutes** to propagate
- Vercel will automatically detect when DNS is ready
- SSL certificate will be automatically provisioned (free HTTPS!)

### 4.5 Verify Domain

Once DNS propagates, Vercel will show:
- ✅ **Valid Configuration**
- 🔒 **SSL Certificate Issued**

Your site is now live at `https://sanctuaryvillas.com`!

## Step 5: Post-Deployment Verification

### 5.1 Check Homepage

Visit `https://sanctuaryvillas.com` and verify:
- ✅ Page loads correctly
- ✅ Images display properly
- ✅ Animations work smoothly
- ✅ No console errors (open DevTools → Console)

### 5.2 Test Booking Form

1. Go to the booking section
2. Select dates and guest count
3. Click "Search Availability"
4. Verify listings load from Boom API

**If listings don't load:**
- Check Vercel → Functions → Logs for errors
- Verify environment variables are correct
- Ensure Boom API credentials are valid

### 5.3 Test Contact Form

1. Fill out the contact form
2. Submit the form
3. Check for success/error message

### 5.4 Mobile Responsiveness

Test on different devices:
- 📱 Mobile (375px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

### 5.5 SEO Verification

Check SEO elements:
- Open DevTools → Elements → `<head>`
- Verify `<meta>` tags are present
- Check structured data with [Schema.org Validator](https://validator.schema.org/)
- Test on [Google Search Console](https://search.google.com/search-console)

## Troubleshooting

### Build Fails

**Error:** `Module not found` or `Cannot find module`

**Solution:**
```bash
# Locally, ensure build works
npm run build

# If successful, push changes
git add .
git commit -m "Fix: resolve module dependencies"
git push
```

Vercel will automatically redeploy on push.

### Environment Variables Not Working

**Error:** `Missing Boom API credentials`

**Solution:**
1. Go to Vercel → Project → Settings → Environment Variables
2. Verify all variables are set for **Production** environment
3. Click **"Redeploy"** after adding variables

### 404 Errors on Routes

**Error:** Routes return 404 after deployment

**Solution:**
- Ensure you're using Next.js App Router correctly
- Check `app/` directory structure
- Verify `page.tsx` files exist in route folders

### Images Not Loading

**Error:** Images show broken link icon

**Solution:**
1. Check `next.config.js` → `remotePatterns` configuration
2. Verify image paths in `public/images/` folder
3. Ensure images are committed to Git

### Custom Domain Not Working

**Error:** Domain shows "Domain Not Found"

**Solution:**
1. Verify DNS records in domain registrar
2. Wait 24-48 hours for DNS propagation
3. Use [DNS Checker](https://dnschecker.org/) to verify propagation
4. Check Vercel Domains tab for validation status

### SSL Certificate Issues

**Error:** "Not Secure" warning in browser

**Solution:**
- Wait 24 hours after domain configuration
- Vercel automatically provisions SSL (Let's Encrypt)
- Force HTTPS redirect in `next.config.js` if needed

## Cost Breakdown

### Free Tier (Hobby)
- **Vercel Hosting**: $0/month
- **100GB Bandwidth**: Included
- **Unlimited Deployments**: Included
- **SSL Certificate**: Free
- **Domain**: ~$10-15/year
- **Total**: ~$10-15/year

### Pro Tier (Recommended for production)
- **Vercel Hosting**: $20/month
- **1TB Bandwidth**: Included
- **Advanced Analytics**: Included
- **Team Collaboration**: Up to 10 members
- **Domain**: ~$10-15/year
- **Total**: ~$250/year

### Enterprise
- **Custom Pricing**: Contact Vercel
- Dedicated support, SLA, advanced security

## Continuous Deployment

Every time you push to `main` branch, Vercel will:
1. Automatically build your project
2. Run preview deployment
3. Deploy to production if build succeeds
4. Show deployment status in GitHub commits

**Workflow:**
```bash
# Make changes
git add .
git commit -m "feat: add new feature"
git push

# Vercel automatically deploys 🚀
```

## Monitoring & Analytics

### Vercel Analytics (Built-in)

Enable in Vercel dashboard:
- Real-time visitor tracking
- Performance metrics (Core Web Vitals)
- Deployment logs

### External Tools (Optional)

- **Google Analytics**: Add tracking code to `app/layout.tsx`
- **Hotjar**: Heatmaps and user recordings
- **Sentry**: Error tracking and monitoring

## Next Steps

After deployment, consider:

1. **Set up monitoring**: Enable Vercel Analytics
2. **Add Google Analytics**: Track user behavior
3. **Configure Sentry**: Monitor errors in production
4. **Set up email notifications**: Get notified of failed deployments
5. **Create staging environment**: Use Git branches for testing
6. **Performance optimization**: Monitor Core Web Vitals
7. **SEO submission**: Submit sitemap to Google Search Console

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

**Congratulations! 🎉** Your Sanctuary Villas website is now live on Vercel with custom domain support!
