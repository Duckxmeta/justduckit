import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Star, Sparkles, Mic, HelpCircle } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  const articles = getAllArticles();
  const recentArticles = articles.slice(0, 2);

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
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono">
            <Mic className="h-3.5 w-3.5" />
            <span>Speaking Live at DDNYC: "Betting on Yourself"</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground animate-in fade-in zoom-in duration-500">
            It started with a <span className="text-gradient-gold">duck.</span>
          </h1>
 
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-lg leading-8 text-muted-foreground">
              We turned a real-life rescue into a media company, digital brands, and an on-chain community. 
              From live events to building in public, everything we do comes back to one idea: <strong className="text-foreground">bet on yourself</strong>.
            </p>
            <p className="text-sm font-mono text-primary font-semibold tracking-wider uppercase">
              Next up — speaking at DDNYC in front of 300+ people.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/articles/betting-on-yourself-ddnyc"
              className="flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3.5 hover:bg-primary-hover active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-primary/10"
            >
              <Mic className="h-4 w-4" />
              <span>Read the Speaking Preview</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-xl border border-border glass-panel text-sm px-6 py-3.5 hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Our Pivot Story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Featured Pillars Section */}
        <div className="mt-24 sm:mt-32">
          <div className="border-b border-border pb-6 mb-12 text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center justify-center sm:justify-start gap-2">
              <Star className="h-5 w-5 text-primary fill-primary/10" />
              <span>Featured Initiatives</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              The pivot from traditional event management to digital brand building and on-chain communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* DDNYC Speaking */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/20 transition-all flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/media/ddnyc-speaking-thumbnail.jpg"
                  alt="DDNYC Stage Inspiration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-primary text-xs font-mono border border-primary/20 backdrop-blur-md">
                    Milestone Event
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  DDNYC: Speaking Live
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground flex-grow">
                  A milestone moment presenting in front of 300+ industry builders in New York. Discussing the core strategy of betting on your own ideas, building networks, and scaling digital asset ecosystems.
                </p>
                <div className="pt-3">
                  <Link href="/about#ddnyc" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Speaking Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Decent Ducks Pivot */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/20 transition-all flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/media/decent-ducks-logo-thumbnail.png"
                  alt="Decent Ducks Sanctuary Brand"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-primary text-xs font-mono border border-primary/20 backdrop-blur-md">
                    Decent Ducks
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  The Sanctuary Pivot
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground flex-grow">
                  How starting the Decent Ducks Sanctuary (and Web3 NFT project) broke the mold of traditional marketing management, sparking a full pivot into digital media production and active brand building.
                </p>
                <div className="pt-3">
                  <Link href="/about#pivot" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>The Pivot Story</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Doginal Dogs Partnership */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/20 transition-all flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/media/doginal-dogs-pool-thumbnail.png"
                  alt="Doginal Dogs Asset"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-primary text-xs font-mono border border-primary/20 backdrop-blur-md">
                    DOGE Blockchain
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Doginal Dogs Partnership
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground flex-grow">
                  Partnering with the Doginal Dogs community to add value through fresh ideas, video production support for creators, and future real-world collaborations — including a possible retreat on the water and an IRL DDL tournament.
                </p>
                <div className="pt-3">
                  <Link href="/about#doginals" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Doginal Lessons</span>
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
                <span>Published Articles</span>
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
                    className="p-6 rounded-2xl border border-border bg-card/20 hover:bg-card/45 hover:border-primary/10 transition-all flex flex-col sm:flex-row gap-6"
                  >
                    <div className="relative h-32 w-full sm:w-44 overflow-hidden rounded-xl flex-shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-w-640px) 100vw, 176px"
                      />
                    </div>
                    <div className="flex flex-col justify-between space-y-2">
                      <div>
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                          <span className="text-primary">{article.category}</span>
                          <span>&bull;</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground mt-1 hover:text-primary transition-colors">
                          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                      <Link
                        href={`/articles/${article.slug}`}
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        <span>Read full article</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-12 border border-dashed border-border rounded-2xl text-muted-foreground">
                  Drafting new articles. Check back shortly!
                </div>
              )}
            </div>
          </div>

          {/* Newsletter Panel */}
          <div className="flex flex-col justify-center rounded-3xl border border-border bg-card/30 p-8 glass-panel h-fit space-y-6 lg:sticky lg:top-24">
            <div className="space-y-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                Direct Updates
              </span>
              <h2 className="text-xl font-bold text-foreground">The Duck Digest</h2>
              <p className="text-sm text-muted-foreground">
                Get behind-the-scenes essays on digital brand building, live event activations, and Dogecoin community updates.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
