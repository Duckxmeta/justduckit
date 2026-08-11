const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const USERNAME = process.env.X_USERNAME || 'Ducksonx';
let rawCookies = [];

try {
  rawCookies = JSON.parse(process.env.X_COOKIES || '[]');
} catch (e) {
  console.error('Failed to parse X_COOKIES. Make sure it is valid JSON.');
  process.exit(1);
}

// Normalize cookies for Playwright
const COOKIES = rawCookies.map(cookie => {
  let sameSite = cookie.sameSite || cookie.same_site || 'Lax';
  if (!['Strict', 'Lax', 'None'].includes(sameSite)) {
    sameSite = 'Lax';
  }

  return {
    name: cookie.name,
    value: cookie.value,
    domain: cookie.domain || '.x.com',
    path: cookie.path || '/',
    expires: cookie.expires || cookie.expirationDate || -1,
    httpOnly: cookie.httpOnly || false,
    secure: cookie.secure || true,
    sameSite: sameSite
  };
});

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');
const MEDIA_DIR = path.join(process.cwd(), 'public/media');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80);
}

function alreadyExists(id) {
  if (!fs.existsSync(ARTICLES_DIR)) return false;
  const files = fs.readdirSync(ARTICLES_DIR);
  return files.some(file => file.includes(id));
}

async function main() {
  fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  fs.mkdirSync(MEDIA_DIR, { recursive: true });

  console.log(`Loaded ${COOKIES.length} cookies`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  
  try {
    await context.addCookies(COOKIES);
  } catch (err) {
    console.error('Failed to add cookies:', err.message);
    process.exit(1);
  }

  const page = await context.newPage();
  
  // Pipe browser console.logs to Node stdout
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));

  // Go to profile to test login
  console.log('Navigating to profile to check login state...');
  await page.goto(`https://x.com/${USERNAME}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  // Check if we are logged in
  const isLoggedIn = await page.locator('[data-testid="SideNav_AccountSwitcher_Button"], [aria-label*="Profile"]').count() > 0;
  console.log('Logged in:', isLoggedIn);

  const foundArticles = [];

  // ============================================
  // Strategy A: Scrape from the dedicated Articles tab
  // ============================================
  console.log('Navigating to Articles tab...');
  await page.goto(`https://x.com/${USERNAME}/articles`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  // Scroll to load articles
  for (let i = 0; i < 5; i++) {
    await page.mouse.wheel(0, 3000);
    await page.waitForTimeout(2000);
  }

  console.log('Extracting from Articles tab...');
  const tabArticles = await page.evaluate(() => {
    const items = [];
    
    // Log DOM state for debugging
    const articles = document.querySelectorAll('article');
    const cells = document.querySelectorAll('[data-testid="cellInnerDiv"]');
    console.log(`Articles tab DOM: articles count = ${articles.length}, cellInnerDiv count = ${cells.length}`);

    // Scan all links on page looking for /articles/
    const allLinks = Array.from(document.querySelectorAll('a'));
    const articleLinks = allLinks.filter(a => a.href && a.href.includes('/articles/'));
    console.log(`Total links with '/articles/' on page: ${articleLinks.length}`);

    const uiKeywords = ['cookie', 'cookies', 'terms', 'privacy', 'log in', 'sign up', 'x corp', 'twitter', 'something went wrong', 'try reloading'];

    articleLinks.forEach((link, idx) => {
      console.log(`Found article link candidate: ${link.href}`);
      
      // Strict rule: URL must contain '/articles/'
      if (!link.href.includes('/articles/')) {
        console.log(`Skipping link: URL does not contain /articles/: ${link.href}`);
        return;
      }

      // Try to find title in closest parent container
      const container = link.closest('article, [data-testid="cellInnerDiv"]') || link.parentElement;
      let title = "";
      if (container) {
        const titleEl = container.querySelector('h1, h2, h3, [data-testid="tweetText"], [style*="font-weight"]');
        if (titleEl) title = titleEl.innerText.trim();
      }
      if (!title) title = link.innerText.trim() || "X Article";
      
      // Clean up title string
      title = title.split('\n')[0];

      // Check against UI keywords
      const titleLower = title.toLowerCase();
      const isUiText = uiKeywords.some(keyword => titleLower.includes(keyword));

      if (isUiText) {
        console.log(`Skipping link: title looks like UI text (${title}): ${link.href}`);
        return;
      }

      if (title.length > 5) {
        items.push({
          title,
          url: link.href,
          date: new Date().toISOString()
        });
      } else {
        console.log(`Skipping link: title too short (${title}): ${link.href}`);
      }
    });

    return items;
  });

  foundArticles.push(...tabArticles);
  console.log(`Articles tab scraping returned ${tabArticles.length} items`);

  // ============================================
  // Strategy B: Scrape from main profile feed
  // ============================================
  console.log('Navigating to main profile feed to check for inline articles...');
  await page.goto(`https://x.com/${USERNAME}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  // Scroll to load tweets
  for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, 3000);
    await page.waitForTimeout(2000);
  }

  const feedArticles = await page.evaluate(() => {
    const items = [];
    const uiKeywords = ['cookie', 'cookies', 'terms', 'privacy', 'log in', 'sign up', 'x corp', 'twitter', 'something went wrong', 'try reloading'];
    
    // Look for links with /articles/ inside the main timeline cells
    document.querySelectorAll('article, [data-testid="tweet"]').forEach(el => {
      const linkEl = el.querySelector('a[href*="/articles/"]');
      if (linkEl) {
        console.log(`Found inline article link in profile feed: ${linkEl.href}`);
        
        const titleEl = el.querySelector('[data-testid="tweetText"], h2, span');
        let title = titleEl ? titleEl.innerText.trim() : "X Article";
        title = title.split('\n')[0];

        const titleLower = title.toLowerCase();
        const isUiText = uiKeywords.some(keyword => titleLower.includes(keyword));

        if (isUiText) {
          console.log(`Skipping inline link: title looks like UI text (${title}): ${linkEl.href}`);
          return;
        }

        items.push({
          title,
          url: linkEl.href,
          date: new Date().toISOString()
        });
      }
    });
    return items;
  });

  foundArticles.push(...feedArticles);
  console.log(`Main profile feed scraping returned ${feedArticles.length} items`);

  // ============================================
  // Deduplicate and process found articles
  // ============================================
  const uniqueArticles = [];
  const seenUrls = new Set();

  for (const article of foundArticles) {
    if (!seenUrls.has(article.url)) {
      seenUrls.add(article.url);
      uniqueArticles.push(article);
    }
  }

  console.log(`Total unique articles located: ${uniqueArticles.length}`);

  for (const article of uniqueArticles) {
    const id = article.url.split('/').pop().split('?')[0];
    if (alreadyExists(id)) {
      console.log('Skipping existing article:', article.title);
      continue;
    }

    const slug = slugify(article.title) || id;
    const filename = `${slug}-${id}.mdx`;
    const filepath = path.join(ARTICLES_DIR, filename);

    const content = `---
title: "${article.title.replace(/"/g, '\\"')}"
date: "${article.date}"
source: "x-article"
sourceUrl: "${article.url}"
---

${article.title}

[Read original on X](${article.url})
`;

    fs.writeFileSync(filepath, content);
    console.log('Created mdx article:', filename);
  }

  // ============================================
  // 2. PHOTO TWEETS → MEDIA
  // ============================================
  console.log('Checking recent tweets for photos...');
  // We are already on the profile page, just scroll to gather tweets
  for (let i = 0; i < 3; i++) {
    await page.mouse.wheel(0, 2500);
    await page.waitForTimeout(1500);
  }

  const tweets = await page.$$eval('article[data-testid="tweet"]', (nodes) => {
    return nodes.slice(0, 40).map(node => {
      const images = Array.from(node.querySelectorAll('img[src*="pbs.twimg.com/media"]'))
        .map(img => img.src.replace(/name=\w+/, 'name=large'));
      return { images };
    });
  });

  let savedCount = 0;
  for (const tweet of tweets) {
    for (const imgUrl of tweet.images) {
      try {
        const hash = crypto.createHash('md5').update(imgUrl).digest('hex').slice(0, 12);
        const filename = `${hash}.jpg`;
        const filepath = path.join(MEDIA_DIR, filename);

        if (fs.existsSync(filepath)) continue;

        const response = await page.request.get(imgUrl);
        const buffer = await response.body();
        fs.writeFileSync(filepath, buffer);
        console.log('Saved media:', filename);
        savedCount++;
      } catch (err) {
        // ignore individual image failures
      }
    }
  }

  console.log(`Saved ${savedCount} new images`);
  await browser.close();
  console.log('Sync complete');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
