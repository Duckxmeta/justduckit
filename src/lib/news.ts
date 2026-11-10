export type NewsItem = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  source: string;
  category: string;
};

type Source = {
  name: string;
  category: string;
  url: string;
  limit: number;
};

const SOURCES: Source[] = [
  {
    name: "Tennessee Star",
    category: "Local",
    url: "https://tennesseestar.com/news/feed",
    limit: 2,
  },
  {
    name: "Nashville Banner",
    category: "Local",
    url: "https://nashvillebanner.com/feed/",
    limit: 2,
  },
  {
    name: "Ducks Unlimited",
    category: "Animals",
    url: "https://www.ducks.org/newsroom/feed",
    limit: 2,
  },
  {
    name: "Poultry World",
    category: "Animals",
    url: "https://www.poultryworld.net/rss",
    limit: 2,
  },
  {
    name: "TechCrunch AI",
    category: "Media & Tech",
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
    limit: 2,
  },
  {
    name: "The Verge",
    category: "Media & Tech",
    url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml",
    limit: 2,
  },
  {
    name: "Cointelegraph",
    category: "Crypto",
    url: "https://cointelegraph.com/rss/tag/dogecoin",
    limit: 1,
  },
  {
    name: "NewsBTC",
    category: "Crypto",
    url: "https://www.newsbtc.com/news/dogecoin/feed/",
    limit: 1,
  },
];

function strip(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "\"").replace(/&#39;/g, "'").trim();
}

function pick(xml: string, tag: string) {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  if (!m) return "";
  return strip(m[1].replace(/<!\[CDATA\[|\]\]>/g, ""));
}

function parseItems(xml: string, source: Source): NewsItem[] {
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) || [];
  return blocks.slice(0, source.limit).map((block) => {
    const title = pick(block, "title");
    const link =
      pick(block, "link") ||
      (block.match(/<link[^>]*href="([^"]+)"/i)?.[1] ?? "");
    const date = pick(block, "pubDate") || pick(block, "published") || pick(block, "updated");
    const excerpt = pick(block, "description") || pick(block, "summary") || pick(block, "content");
    return {
      title,
      link,
      date,
      excerpt: excerpt.slice(0, 220),
      source: source.name,
      category: source.category,
    };
  }).filter((i) => i.title && i.link);
}

async function fetchSource(source: Source): Promise<NewsItem[]> {
  try {
    const res = await fetch(source.url, {
      next: { revalidate: 60 * 60 * 6 },
      headers: { "User-Agent": "JustDuckIt/1.0" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseItems(xml, source);
  } catch {
    return [];
  }
}

export async function getNews(): Promise<NewsItem[]> {
  const lists = await Promise.all(SOURCES.map(fetchSource));
  const items = lists.flat();
  return items.sort((a, b) => {
    const da = new Date(a.date).getTime() || 0;
    const db = new Date(b.date).getTime() || 0;
    return db - da;
  });
}
