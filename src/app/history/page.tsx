import Link from "next/link";
import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Local History | Places You Drive Past",
  description: "Full stories behind the markers, towns, and superlatives in Middle Tennessee. Smithville, Cookeville, DeKalb County, and surrounding areas.",
};

function formatDate(d: string) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function HistoryPage() {
  const all = getAllArticles();
  const history = all.filter(
    (a) =>
      a.category?.toLowerCase().includes("history") ||
      a.category?.toLowerCase().includes("local") ||
      a.title?.toLowerCase().includes("tennessee") ||
      a.title?.toLowerCase().includes("smithville") ||
      a.title?.toLowerCase().includes("cookeville")
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
          <MapPin className="h-4 w-4" />
          <span>Local History</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Places you drive past</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The full version of the short videos. Superlative hooks, the labeled beats, then-vs-now context, and the practical details for finding the spot. Smithville, DeKalb County, Cookeville, and Middle Tennessee.
        </p>
        <p className="text-xs text-muted-foreground">
          If you saw a reel and want the longer story, it lives here.
        </p>
      </div>

      {history.length > 0 ? (
        <div className="divide-y divide-border/60">
          {history.map((item) => (
            <Link key={item.slug} href={`/articles/${item.slug}`} className="group block py-6">
              <div className="text-xs font-mono text-muted-foreground mb-1.5">
                <span className="text-primary">{item.category}</span>
                {item.date && <span> · {formatDate(item.date)}</span>}
              </div>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary">{item.title}</h2>
              <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">{item.description}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read the full story <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border p-6 space-y-3">
          <p className="text-sm text-muted-foreground">
            History pieces are coming. Each one expands a short video: the superlative as the title, the labeled beats as sections, location details, and a soft close.
          </p>
          <p className="text-sm text-muted-foreground">
            In the meantime, the sanctuary story and practical work for local businesses are here:
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://adoptaduck.org" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
              Sanctuary ↗
            </a>
            <Link href="/work" className="text-sm font-semibold text-primary hover:underline">
              Websites & systems
            </Link>
          </div>
        </div>
      )}

      <div className="mt-12 border-t border-border/50 pt-8 text-sm text-muted-foreground leading-relaxed">
        <p>
          These spots are on the same roads as Decent Ducks Sanctuary. Filming them is part of documenting the region. The practical side is websites and systems that help local businesses get found.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link href="/work" className="text-primary font-semibold hover:underline">
            Work with me
          </Link>
          <a href="https://adoptaduck.org" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
            Sanctuary
          </a>
        </div>
      </div>
    </div>
  );
}
