import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight, Star } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Read long-form writing by JustDuckIt. Exploring modern software development, duck sanctuary logs, and Doge blockchain art.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-500/10 to-orange-500/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Long-form <span className="text-gradient-gold">Articles</span>
          </h1>
          <p className="text-base text-muted-foreground">
            Essays on technical architecture, design logs from the duck sanctuary, and blockchain experiments.
          </p>
        </div>

        {/* Articles Feed */}
        <div className="max-w-4xl mx-auto">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {articles.map((article, idx) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group relative flex flex-col md:flex-row gap-8 rounded-3xl border border-border bg-card/25 p-6 hover:bg-card/45 hover:border-primary/15 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {/* Image wrapper */}
                  <div className="relative h-56 w-full md:w-80 overflow-hidden rounded-2xl flex-shrink-0">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 320px"
                      priority={idx === 0}
                    />
                  </div>

                  {/* Text details */}
                  <div className="flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {article.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                      <span
                        className="text-sm font-semibold text-primary group-hover:underline flex items-center gap-1.5"
                      >
                        <span>Read full post</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-border rounded-3xl space-y-4">
              <BookOpen className="h-10 w-10 text-muted-foreground mx-auto" />
              <h3 className="text-lg font-bold text-foreground">No articles yet</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Articles are currently being drafted. Join the newsletter to be notified when the first article drops!
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
