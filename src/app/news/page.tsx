import { getNews } from "@/lib/news";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "A short mix of local Tennessee, animals, media and tech, and light crypto stories. All linked to the original source.",
};

function formatDate(d: string) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default async function NewsPage() {
  const items = await getNews();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="space-y-3 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">News</h1>
        <p className="text-sm text-muted-foreground">
          A short mix from local Tennessee, animals and waterfowl, media and tech, and light Dogecoin coverage. Every item links to the original source. We do not claim these stories.
        </p>
      </div>

      {items.length > 0 ? (
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
