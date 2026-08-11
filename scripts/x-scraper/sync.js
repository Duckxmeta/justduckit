const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const USERNAME = process.env.X_USERNAME || 'Ducksonx';
const COOKIES = JSON.parse(process.env.X_COOKIES || '[]');

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');
const MEDIA_DIR = path.join(process.cwd(), 'public/media');

async function main() {
  // Ensure folders exist
  fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  fs.mkdirSync(MEDIA_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await context.addCookies(COOKIES);

  const page = await context.newPage();

  // Go to profile
  await page.goto(`https://x.com/${USERNAME}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(4000);

  // === 1. Handle X Articles ===
  // X Articles usually appear under the "Articles" tab or have specific markers
  // This section will need slight selector tuning once we see the live page
  console.log('Checking for X Articles...');
  
  // Placeholder logic – we will refine selectors together
  // For now it looks for long-form style posts

  // === 2. Handle tweets that contain photos ===
  console.log('Checking for photo tweets...');

  // Get recent tweets
  const tweets = await page.$$eval('article[data-testid="tweet"]', (nodes) => {
    return nodes.slice(0, 20).map(node => {
      const text = node.querySelector('[data-testid="tweetText"]')?.innerText || '';
      const time = node.querySelector('time')?.getAttribute('datetime') || '';
      const images = Array.from(node.querySelectorAll('img[src*="media"]')).map(img => img.src);
      const link = node.querySelector('a[href*="/status/"]')?.href || '';
      return { text, time, images, link };
    });
  });

  for (const tweet of tweets) {
    if (tweet.images.length === 0) continue;

    // Download images
    for (const imgUrl of tweet.images) {
      try {
        const response = await page.request.get(imgUrl);
        const buffer = await response.body();
        const hash = crypto.createHash('md5').update(imgUrl).digest('hex').slice(0, 10);
        const filename = `${hash}.jpg`;
        const filepath = path.join(MEDIA_DIR, filename);

        if (!fs.existsSync(filepath)) {
          fs.writeFileSync(filepath, buffer);
          console.log('Saved media:', filename);
        }
      } catch (err) {
        console.log('Failed to download image:', imgUrl);
      }
    }
  }

  await browser.close();
  console.log('Sync finished');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
