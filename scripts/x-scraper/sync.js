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
  // Fix sameSite
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

  // Go to profile to test login
  console.log('Navigating to profile...');
  await page.goto(`https://x.com/${USERNAME}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  // Check if we are logged in
  const isLoggedIn = await page.locator('[data-testid="SideNav_AccountSwitcher_Button"], [aria-label*="Profile"]').count() > 0;
  console.log('Logged in:', isLoggedIn);

  // ============================================
  // 1. BACKFILL X ARTICLES
  // ============================================
  console.log('Looking for existing X Articles...');

  await page.goto(`https://x.com/${USERNAME}/articles`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  // Scroll to load more
  for (let i = 0; i < 5; i++) {
    await page.mouse.wheel(0, 3000);
    await page.waitForTimeout(2000);
  }

  const articles = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('article, [data-testid="cellInnerDiv"]').forEach(el => {
      const linkEl = el.querySelector('a[href*="/status/"], a[href*="/articles/"]');
      const titleEl = el.querySelector('[data-testid="tweetText"], h2, span');
      const timeEl = el.querySelector('time');

      if (linkEl && titleEl) {
        const title = titleEl.innerText.trim().slice(0, 120);
        if (title.length > 10) {
          items.push({
            title,
            url: linkEl.href,
            date: timeEl ? timeEl.getAttribute('datetime') : new Date().toISOString(),
          });
        }
      }
    });
    // Remove duplicates
    const unique = [];
    const seen = new Set();
    for (const item of items) {
      if (!seen.has(item.url)) {
        seen.add(item.url);
        unique.push(item);
      }
    }
    return unique;
  });

  console.log(`Found ${articles.length} potential articles`);

  for (const article of articles) {
    const id = article.url.split('/').pop().split('?')[0];
    if (alreadyExists(id)) {
      console.log('Skipping existing:', article.title);
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
    console.log('Created article:', filename);
  }

  // ============================================
  // 2. PHOTO TWEETS → MEDIA
  // ============================================
  console.log('Checking recent tweets for photos...');

  await page.goto(`https://x.com/${USERNAME}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  for (let i = 0; i < 4; i++) {
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
