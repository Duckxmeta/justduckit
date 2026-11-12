import Link from "next/link";
import { ArrowRight, MapPin, Feather, Briefcase } from "lucide-react";
import { getAllArticles } from "@/lib/articles";

function formatDate(d: string) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function Home() {
  const articles = getAllArticles();
  const historyArticles = articles.filter((a) => a.category?.toLowerCase().includes("history") || a.category?.toLowerCase().includes("local")).slice(0, 3);
  const recentArticles = articles.slice(0, 4);

  const paths = [
    {
      icon: MapPin,
      title: "Local History",
      body: "Places you drive past. The full story behind the markers, towns, and superlatives.",
      href: "/history",
      cta: "See the spots",
    },
    {
      icon: Feather,
      title: "Sanctuary",
      body: "Decent Ducks Sanctuary. Real animals, real land, the origin that started the work.",
      href: "https://adoptaduck.org",
      external: true,
      cta: "Visit the sanctuary",
    },
    {
      icon: Briefcase,
      title: "Web & Systems",
      body: "Custom sites and simple automations for local businesses. Filming these spots is part of how we help the area get found.",
      href: "/work",
      cta: "Get a custom plan",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-500/20 to-orange-500/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Local history, the land, and practical help for Middle Tennessee
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-foreground font-medium">
            Short videos about places you drive past. The fuller story lives here. The same roads connect the sanctuary and the work we do for local businesses.
          </p>
          <p className="text-sm text-muted-foreground">
            Smithville, DeKalb County, Cookeville, and surrounding Middle Tennessee.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/history"
              className="flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition cursor-pointer"
            >
              <span>Local history</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
            >
              Websites & systems
            </Link>
          </div>
        </div>

        {/* Three paths */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {paths.map((p) => {
            const Icon = p.icon;
            const inner = (
              <div className="rounded-2xl border border-border p-5 space-y-2 h-full hover:border-primary/40 transition">
                <Icon className="h-5 w-5 text-primary" />
                <h2 className="text-base font-semibold text-foreground">{p.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                  {p.cta} <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            );
            return p.external ? (
              <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <Link key={p.title} href={p.href} className="block">
                {inner}
              </Link>
            );
          })}
        </div>

        {/* History highlight if any */}
        {historyArticles.length > 0 && (
          <div className="mt-16">
            <div className="flex items-baseline justify-between border-b border-border pb-3 mb-6">
              <h2 className="text-lg font-bold text-foreground">Places you drive past</h2>
              <Link href="/history" className="text-sm font-semibold text-primary hover:underline">
                All history
              </Link>
            </div>
            <div className="divide-y divide-border/60">
              {historyArticles.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group block py-5">
                  <div className="text-xs font-mono text-muted-foreground mb-1">
                    <span className="text-primary">{article.category}</span>
                    {article.date && <span> · {formatDate(article.date)}</span>}
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Recent articles */}
        <div className="mt-16">
          <div className="flex items-baseline justify-between border-b border-border pb-3 mb-6">
            <h2 className="text-lg font-bold text-foreground">Latest</h2>
            <Link href="/articles" className="text-sm font-semibold text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="divide-y divide-border/60">
            {recentArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group block py-5">
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  <span className="text-primary">{article.category}</span>
                  {article.date && <span> · {formatDate(article.date)}</span>}
                </div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary">{article.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-10 max-w-2xl mx-auto text-sm text-muted-foreground leading-relaxed text-center">
          <p>
            Filming local spots is part of how we document the same region the sanctuary sits on. The work for local businesses is the practical side of the same roads.
          </p>
        </div>
      </div>
    </div>
  );
}
