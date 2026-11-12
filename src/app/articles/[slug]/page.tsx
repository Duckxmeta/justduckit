import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      url: `https://justduckit.xyz/articles/${slug}`,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl font-extrabold tracking-tight mt-8 mb-4 text-foreground" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4 text-foreground border-b border-border/50 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3 text-foreground" {...props} />,
  p: (props: any) => <p className="text-base text-muted-foreground leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-6 pl-4 text-muted-foreground" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-6 pl-4 text-muted-foreground" {...props} />,
  li: (props: any) => <li className="text-muted-foreground" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary bg-card/40 p-4 italic rounded-r-xl my-6 text-foreground font-medium" {...props} />
  ),
  pre: (props: any) => (
    <pre className="overflow-x-auto rounded-xl border border-border bg-black/40 p-4 text-sm font-mono text-gray-200 mb-6" {...props} />
  ),
  code: (props: any) => <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-primary font-semibold" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline font-semibold" target="_blank" rel="noopener noreferrer" {...props} />,
  hr: () => <hr className="border-border my-8" />,
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const isHistory =
    article.category?.toLowerCase().includes("history") ||
    article.category?.toLowerCase().includes("local") ||
    article.title?.toLowerCase().includes("tennessee");

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": `https://justduckit.xyz${article.image}`,
    "datePublished": article.date,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": "JustDuckIt",
      "url": "https://justduckit.xyz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JustDuckIt",
      "logo": {
        "@type": "ImageObject",
        "url": "https://justduckit.xyz/logo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://justduckit.xyz/articles/${slug}`
    }
  };

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />
      </head>

      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
        <Link
          href={isHistory ? "/history" : "/articles"}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>{isHistory ? "Back to history" : "Back to articles"}</span>
        </Link>

        <header className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              {article.category}
            </span>
            {article.source === "x-article" && (
              <span className="px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                X Article
              </span>
            )}
            <span className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
            {article.sourceUrl && (
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:text-primary-hover font-semibold md:ml-auto"
              >
                <span>Original Post</span>
                <span className="text-[10px]">&nearr;</span>
              </a>
            )}
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground leading-tight">
            {article.title}
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground italic border-l-2 border-border pl-4">
            {article.description}
          </p>

          <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-border mt-8 shadow-xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 768px"
              priority
            />
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>

        {/* Soft close / connective tissue */}
        <div className="mt-12 pt-8 border-t border-border/50 space-y-4 text-sm text-muted-foreground leading-relaxed">
          {isHistory && (
            <p>
              These are the same roads the sanctuary sits on. Filming the spots is part of documenting the region.
            </p>
          )}
          <p>
            If you have a local business or a place worth filming, or if you need a website or simple systems that help people find you:
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link href="/work" className="text-primary font-semibold hover:underline">
              Get a custom plan
            </Link>
            <Link href="/social" className="text-primary font-semibold hover:underline">
              Request a visit
            </Link>
            <a href="https://adoptaduck.org" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              Sanctuary
            </a>
          </div>
        </div>

        <footer className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <Link
            href={isHistory ? "/history" : "/articles"}
            className="text-xs font-semibold text-muted-foreground hover:text-primary"
          >
            ← {isHistory ? "More history" : "More articles"}
          </Link>
        </footer>
      </div>
    </div>
  );
}
