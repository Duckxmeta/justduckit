"use client";

import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  source: string;
  category: string;
};

function formatDate(d: string) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function timeAgo(iso: string) {
  const ms = Date.now() - new Date(iso).getTime();
  if (ms < 60_000) return "just now";
  const m = Math.floor(ms / 60_000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  return `${h}h ago`;
}

export default function NewsFeed() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const res = await fetch("/api/news", { cache: "no-store" });
      const data = await res.json();
      setItems(data.items || []);
      setUpdatedAt(data.updatedAt || new Date().toISOString());
    } catch {
      // keep previous items
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    const id = setInterval(load, 2 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6 text-xs text-muted-foreground font-mono">
        <span>Live feed</span>
        <span>{updatedAt ? `Updated ${timeAgo(updatedAt)}` : "Loading..."}</span>
      </div>

      {loading && items.length === 0 ? (
        <p className="text-sm text-muted-foreground">Loading stories...</p>
      ) : items.length > 0 ? (
        <div className="divide-y divide-border/60">
          {items.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-6"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground mb-1.5">
                <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  {item.category}
                </span>
                <span>{item.source}</span>
                {item.date && (
                  <>
                    <span>·</span>
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </>
                )}
              </div>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              {item.excerpt && (
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
              )}
              <span className="mt-2.5 inline-flex text-sm font-semibold text-primary">
                Read at {item.source} →
              </span>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No stories loaded yet. Check back shortly.</p>
      )}
    </div>
  );
}
