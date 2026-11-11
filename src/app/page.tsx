import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Star, HelpCircle } from "lucide-react";
import { getAllArticles } from "@/lib/articles";

function formatDate(d: string) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function Home() {
  const articles = getAllArticles();
  const recentArticles = articles.slice(0, 5);

  const initiatives = [
    {
      badge: "Decent Ducks",
      title: "The Sanctuary Pivot",
      body: "How starting the Decent Ducks Sanctuary (and Web3 NFT project) broke the mold of traditional marketing management, sparking a full pivot into digital media production and active brand building.",
      href: "/about#pivot",
      cta: "The Pivot Story",
      image: "/media/Banditselfie.jpg",
      alt: "Kyle with Bandit",
    },
    {
      badge: "Media & Content",
      title: "Building in Public",
      body: "Documenting the journey of scaling Decent Ducks, content creation, and media production — sharing real-world lessons from waterfowl rescue to digital brand building.",
      href: "/articles",
      cta: "Read Essays",
      image: "/media/Banditselfie.jpg",
      alt: "Kyle with Bandit selfie",
    },
    {
      badge: "Next Event",
      title: "DDMiami",
      body: "Dec 7–8. Duck will be there.\nNext stop after New York. More soon.",
      href: "/about",
      cta: "About the journey",
      image: "/media/DDMiami.gif",
      alt: "DDMiami 2026",
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

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Websites and automations for Middle Tennessee businesses
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-foreground font-medium">
            Custom sites, local search, and simple back-office systems for Smithville, Cookeville, and the surrounding area. Based in Tennessee.
          </p>
          <p className="text-sm text-muted-foreground">
            Serving Smithville, DeKalb County, Cookeville, and Middle Tennessee.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/work"
              className="flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition cursor-pointer"
            >
              <span>Get a custom plan</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
            >
              See latest work and articles
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-baseline justify-between border-b border-border pb-3 mb-6">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Latest
            </h2>
            <Link href="/articles" className="text-sm font-semibold text-primary hover:underline">
              View all
            </Link>
          </div>

          <div className="divide-y divide-border/60">
            {recentArticles.length > 0 ? (
              recentArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-1.5">
                    <span className="text-primary">{article.category}</span>
                    <span>·</span>
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                    {article.source === "x" && (
                      <>
                        <span>·</span>
                        <span>From X</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))
            ) : (
              <p className="py-8 text-sm text-muted-foreground">Drafting new articles. Check back shortly.</p>
            )}
          </div>
        </div>

        <div className="mt-20">
          <div className="border-b border-border pb-3 mb-6">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              Featured
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {initiatives.map((item) => (
              <div key={item.title} className="rounded-xl border border-border p-4 space-y-2">
                <span className="text-xs font-mono text-primary">{item.badge}</span>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{item.body}</p>
                <Link href={item.href} className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                  {item.cta} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border/50 pt-12 max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-foreground flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="h-4 w-4 text-primary" />
            FAQ
          </h2>
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground">Who is Kyle Kinkin?</h3>
              <p className="text-muted-foreground mt-1">Kyle Kinkin (Duck) is based in Smithville, Tennessee. He builds websites and simple automations for local businesses while running Decent Ducks Sanctuary.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Who is Duck on X (@ducksonx)?</h3>
              <p className="text-muted-foreground mt-1">Duck on X (@ducksonx) is the personal X account of Kyle Kinkin.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">What is JustDuckIt?</h3>
              <p className="text-muted-foreground mt-1">JustDuckIt is Kyle Kinkin (Duck)’s brand for web work, content, and the sanctuary.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Where are services offered?</h3>
              <p className="text-muted-foreground mt-1">Serving Smithville, DeKalb County, Cookeville, and Middle Tennessee. Remote work available for the right project.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
