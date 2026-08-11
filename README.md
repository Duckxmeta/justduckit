# JustDuckIt Personal Brand Website

A premium, modern, and high-end personal brand website for **JustDuckIt** (domain: `justduckit.xyz`), built using the latest Next.js (App Router), TypeScript, Tailwind CSS v4, and MDX-based writing tools.

---

## Technical Stack & Features

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 (with custom Midnight & Gold variables and glassmorphism)
- **Blog Engine**: Dynamic MDX loader (`next-mdx-remote` & `gray-matter`) supporting long-form posts
- **SEO & Metas**: Metadata API, dynamic Open Graph maps, search crawler indexing rules (`robots.txt`), dynamic XML maps (`sitemap.ts`), and JSON-LD structured data
- **Asset Integrity**: Premium generated images for the logo, sanctuary, Doginal Dog art, and avatar (no placeholders)

---

## Directory Structure

```
├── content/               # MDX Blog articles
│   └── articles/          # .mdx files
├── public/                # Custom high-fidelity visual assets
│   ├── logo.jpg           # Gold geometric duck logo
│   └── images/            # Showcase images (Sanctuary, Doginals, Avatar)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About story & media timeline
│   │   ├── articles/      # Blog listing & dynamic article route
│   │   ├── newsletter/    # Newsletter landing page
│   │   ├── globals.css    # Midnight & Gold CSS theme variables
│   │   ├── layout.tsx     # Fonts, Navbar, Footer, and global SEO
│   │   ├── page.tsx       # Home page (Hero, Sanctuary, and Doginals cards)
│   │   ├── robots.ts      # Crawler rules
│   │   └── sitemap.ts     # Dynamic sitemap.xml generator
│   ├── components/        # Layout and Form components (Navbar, Footer, NewsletterForm)
│   └── lib/               # Shared utilities (articles parser, className helper)
```

---

## Local Development

### 1. Install Node.js & Dependencies
Since Node.js was installed locally at `~/Development/node`, make sure it is in your path (already added to your `~/.zshrc`):

```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build & Production Check
To compile and test the static pages locally:
```bash
npm run build
```

---

## GitHub & Vercel Deployment Instructions

Follow these exact steps to push your code to GitHub and connect it to Vercel with your custom domain.

### Step 1: Create a Private GitHub Repository & Push

You can do this either via the GitHub CLI (`gh`) or the GitHub Website.

#### Option A: Using the GitHub CLI (Recommended)
If you have the `gh` tool installed, run:
```bash
# Create the private repo and push your existing local repository automatically
gh repo create justduckit --private --source=. --remote=origin --push
```

#### Option B: Using the GitHub Web Interface
1. Go to [github.com/new](https://github.com/new).
2. Set the repository name to `justduckit`.
3. Select **Private**.
4. **Do not** initialize with a README, `.gitignore`, or license.
5. Click **Create repository**.
6. Run the following commands in your project directory:
```bash
# Link your local repo and push to main
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/justduckit.git
git branch -M main
git push -u origin main
```

---

### Step 2: Connect to Vercel with Domain

#### Option A: Via Vercel Web Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New** > **Project**.
3. Import your new private `justduckit` repository.
4. Keep the default Next.js build settings and click **Deploy**.
5. Once deployed, go to the project **Settings** > **Domains**.
6. Add `justduckit.xyz` (and `www.justduckit.xyz` if desired).
7. Update your DNS settings at your domain registrar to point to Vercel (CNAME and A records provided by Vercel).

#### Option B: Via Vercel CLI
If you prefer deploying from the terminal:
```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Log in to your Vercel account
vercel login

# 3. Initialize and deploy the project
vercel

# 4. Link your custom domain
vercel domains add justduckit.xyz
```
