import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Star, Sparkles, Feather } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  const articles = getAllArticles();
  const recentArticles = articles.slice(0, 2); // Show top 2 articles

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      {/* Background glow effects */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-500/20 to-orange-500/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Welcome to JustDuckIt.xyz</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
            Pioneering the Intersection of{" "}
            <span className="text-gradient-gold">Tech & Conservation</span>
          </h1>

          <p className="text-lg leading-8 text-muted-foreground">
            JustDuckIt is a personal brand centered on building software, launching creative digital asset projects like 
            <strong className="text-foreground"> Doginal Dogs</strong>, and founding the 
            <strong className="text-foreground"> DDNYC Duck Sanctuary</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/articles"
              className="flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3.5 hover:bg-primary-hover active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-primary/10"
            >
              <Feather className="h-4 w-4" />
              <span>Read My Articles</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-xl border border-border glass-panel text-sm px-6 py-3.5 hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore My Story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="mt-24 sm:mt-32">
          <div className="border-b border-border pb-6 mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Star className="h-5 w-5 text-primary fill-primary/10" />
              <span>Featured Initiatives</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Highlighting physical sanctuary operations and web3 technology experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Duck Sanctuary Card */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/20 transition-all flex flex-col">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/duck-sanctuary.jpg"
                  alt="DDNYC Duck Sanctuary Pond"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-primary text-xs font-mono border border-primary/20 backdrop-blur-md">
                    Sanctuary Project
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  DDNYC Duck Sanctuary
                </h3>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
                  Caring for and protecting local duck populations in New York. We focus on building modern, eco-friendly viewing pavilions, promoting wetlands conservation, and rescuing abandoned domestic ducks.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <Link href="/about#sanctuary" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5">
                    <span>Learn our sanctuary story</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Doginal Dogs Card */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/20 transition-all flex flex-col">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/doginal-dog.jpg"
                  alt="Doginal Dog Cyber Artwork"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-primary text-xs font-mono border border-primary/20 backdrop-blur-md">
                    Web3 & Blockchain
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Doginal Dogs Inspiration
                </h3>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
                  Exploring the frontier of Doge blockchain art. Doginal Dogs represent retro-pixel art aesthetics combined with modern on-chain ownership, building a vibrant digital creator network.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <Link href="/articles/doginal-dogs-blockchain" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5">
                    <span>Read doginal writeup</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog and Newsletter Grid */}
        <div className="mt-24 sm:mt-32 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Recent Articles */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border-b border-border pb-4 flex justify-between items-baseline">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Recent Writing</span>
              </h2>
              <Link href="/articles" className="text-xs font-semibold text-primary hover:underline">
                View all articles
              </Link>
            </div>

            <div className="space-y-6">
              {recentArticles.length > 0 ? (
                recentArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="p-6 rounded-2xl border border-border bg-card/20 hover:bg-card/40 hover:border-primary/10 transition-all flex flex-col sm:flex-row gap-6"
                  >
                    <div className="relative h-32 w-full sm:w-48 overflow-hidden rounded-xl flex-shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-w-640px) 100vw, 192px"
                      />
                    </div>
                    <div className="flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                          <span className="text-primary">{article.category}</span>
                          <span>&bull;</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mt-1 hover:text-primary transition-colors">
                          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/articles/${article.slug}`}
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-2"
                      >
                        <span>Read full article</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-12 border border-dashed border-border rounded-2xl text-muted-foreground">
                  No articles published yet. Stay tuned!
                </div>
              )}
            </div>
          </div>

          {/* Newsletter Panel */}
          <div className="flex flex-col justify-center rounded-3xl border border-border bg-card/30 p-8 glass-panel h-fit space-y-6 lg:sticky lg:top-24">
            <div className="space-y-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                Weekly Digest
              </span>
              <h2 className="text-xl font-bold text-foreground">The Duck Feed</h2>
              <p className="text-sm text-muted-foreground">
                Get behind-the-scenes updates on sanctuary construction, dev logs on Doginal Dogs, and fresh tech articles. No spam.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
