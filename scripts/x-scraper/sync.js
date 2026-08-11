const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const USERNAME = process.env.X_USERNAME || 'Ducksonx';
const COOKIES = JSON.parse(process.env.X_COOKIES || '[]');

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
  const files = fs.readdirSync(ARTICLES_DIR);
  return files.some(file => file.includes(id));
}

async function main() {
  fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  fs.mkdirSync(MEDIA_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await context.addCookies(COOKIES);

  const page = await context.newPage();

  // ============================================
  // 1. BACKFILL X ARTICLES
  // ============================================
  console.log('Looking for existing X Articles...');

  // Go to the Articles tab
  await page.goto(`https://x.com/${USERNAME}/articles`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);

  // Scroll a few times to load more articles
  for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, 3000);
    await page.waitForTimeout(2000);
  }

  // Extract articles (selectors may need small adjustments after first run)
  const articles = await page.evaluate(() => {
    const items = [];
    // Try common patterns X uses for Articles
    document.querySelectorAll('article, [data-testid="cellInnerDiv"]').forEach(el => {
      const linkEl = el.querySelector('a[href*="/articles/"], a[href*="/status/"]');
      const titleEl = el.querySelector('h2, [data-testid="tweetText"], span');
      const timeEl = el.querySelector('time');

      if (linkEl && titleEl) {
        items.push({
          title: titleEl.innerText.trim().slice(0, 120),
          url: linkEl.href,
          date: timeEl ? timeEl.getAttribute('datetime') : new Date().toISOString(),
        });
      }
    });
    return items;
  });

  console.log(`Found ${articles.length} potential articles`);

  for (const article of articles) {
    const id = article.url.split('/').pop();
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
    console.log('Created article:', filename);
  }

  // ============================================
  // 2. PHOTO TWEETS → MEDIA FOLDER
  // ============================================
  console.log('Checking recent tweets for photos...');

  await page.goto(`https://x.com/${USERNAME}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(4000);

  // Scroll to load more tweets
  for (let i = 0; i < 3; i++) {
    await page.mouse.wheel(0, 2500);
    await page.waitForTimeout(1500);
  }

  const tweets = await page.$$eval('article[data-testid="tweet"]', (nodes) => {
    return nodes.slice(0, 30).map(node => {
      const images = Array.from(node.querySelectorAll('img[src*="pbs.twimg.com/media"]'))
        .map(img => img.src.replace(/&name=\w+/, '&name=large')); // get higher quality
      return { images };
    });
  });

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
      } catch (err) {
        console.log('Failed image:', imgUrl);
      }
    }
  }

  await browser.close();
  console.log('Sync complete');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
