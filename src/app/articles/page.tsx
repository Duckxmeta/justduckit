import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Latest writing from JustDuckIt. Local history, ducks, media, and building in public.",
};

function formatDate(d: string) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="space-y-3 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Articles
        </h1>
        <p className="text-sm text-muted-foreground">
          Local history, ducks, media, and building in public. Newest first.
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="divide-y divide-border/60">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground mb-1.5">
                <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  {article.category}
                </span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span>·</span>
                <span>{article.readTime}</span>
                {article.source === "x" && (
                  <>
                    <span>·</span>
                    <span>From X</span>
                  </>
                )}
              </div>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                {article.description}
              </p>
              <span className="mt-2.5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen className="h-8 w-8 mx-auto mb-3" />
          <p className="text-sm">No articles yet.</p>
        </div>
      )}
    </div>
  );
}
