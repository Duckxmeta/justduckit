import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock, ArrowLeft, Heart, Share2 } from "lucide-react";
import type { Metadata } from "next";

// Props definition matching Next.js 15 async params rule
interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate Dynamic Metadata for Article SEO
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

// Pre-render static paths for performance
export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Custom MDX styling components mapping
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

  // Schema.org JSON-LD BlogPosting
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
        
        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to articles</span>
        </Link>

        {/* Article Meta Header */}
        <header className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground leading-tight">
            {article.title}
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground italic border-l-2 border-border pl-4">
            {article.description}
          </p>

          {/* Featured Image */}
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

        {/* Article Content */}
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>

        {/* Footer actions */}
        <footer className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border hover:border-primary/25 hover:bg-white/5 text-xs text-muted-foreground hover:text-foreground transition-all">
              <Heart className="h-3.5 w-3.5" />
              <span>Like article</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border hover:border-primary/25 hover:bg-white/5 text-xs text-muted-foreground hover:text-foreground transition-all">
              <Share2 className="h-3.5 w-3.5" />
              <span>Share</span>
            </button>
          </div>
          
          <Link
            href="/newsletter"
            className="text-xs font-semibold text-primary hover:underline"
          >
            Join the newsletter flock &rarr;
          </Link>
        </footer>

      </div>
    </div>
  );
}
