import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getGuide, getGuideSlugs, guides } from "@/lib/guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide preview" };
  return {
    title: `Preview: ${guide.title}`,
    description: `${guide.blurb} ${guide.pages} pages. Preview the cover, contents, and a short excerpt before you buy.`,
    alternates: { canonical: `https://www.justduckit.xyz/guides/${guide.slug}` },
    openGraph: {
      title: `Preview: ${guide.title}`,
      description: guide.blurb,
      url: `https://www.justduckit.xyz/guides/${guide.slug}`,
      images: [{ url: guide.coverSrc, width: 612, height: 792, alt: guide.coverAlt }],
    },
  };
}

export default async function GuidePreviewPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const others = guides.filter((g) => g.slug !== guide.slug);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-xs font-mono uppercase tracking-wider text-primary mb-3">
        <Link href="/guides" className="hover:underline">
          Pocket field guides
        </Link>
        <span className="text-muted-foreground"> · Preview</span>
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
        {guide.title}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">{guide.subtitle}</p>
      <p className="mt-1 text-xs font-mono text-muted-foreground">
        {guide.pages} pages · {guide.price} · Independent Just Duck It PDF
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-8 items-start">
        <div className="mx-auto sm:mx-0 w-full max-w-[220px]">
          <div className="relative overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src={guide.coverSrc}
              alt={guide.coverAlt}
              width={612}
              height={792}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground text-center">
            Watermarked cover preview. The full PDF is delivered after purchase.
          </p>
        </div>

        <div className="space-y-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{guide.blurb}</p>
          <a
            href={guide.stripeUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition"
          >
            Buy for $8 <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-xs text-muted-foreground">
            After payment you will be sent to a private download page. This preview does not include the full guide.
          </p>
        </div>
      </div>

      <div className="mt-14 space-y-3">
        <h2 className="text-lg font-bold text-foreground">What’s in the guide</h2>
        <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
          {guide.sections.map((section) => (
            <li key={section} className="leading-relaxed">
              {section}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14 space-y-3">
        <h2 className="text-lg font-bold text-foreground">A short sample</h2>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          From the opening pages — not the full chapter
        </p>
        <div className="rounded-2xl border border-border p-5 sm:p-6 space-y-4">
          {guide.excerpt.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)} className="text-sm text-foreground/90 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-14 space-y-3">
        <h2 className="text-lg font-bold text-foreground">Sources cited in the PDF</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every historical claim in the paid guide is tied to a source. The list below is the same source list printed at the back of the PDF.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          {guide.sources.map((source) => (
            <li key={source.label} className="pl-4" style={{ textIndent: "-1rem" }}>
              <span className="mr-2">•</span>
              {source.href ? (
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                  {source.label}
                </a>
              ) : (
                source.label
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-2xl border border-primary/40 bg-white/5 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-base font-semibold text-foreground">Want the full guide?</p>
          <p className="text-sm text-muted-foreground mt-1">
            {guide.pages} pages, sources cited, delivered as a PDF after checkout.
          </p>
        </div>
        <a
          href={guide.stripeUrl}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition"
        >
          Buy for $8 <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {others.length > 0 && (
        <div className="mt-16 space-y-3">
          <h2 className="text-lg font-bold text-foreground">Other pocket guides</h2>
          <ul className="divide-y divide-border/60 border border-border rounded-2xl overflow-hidden">
            {others.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="block p-5 hover:bg-white/5 transition">
                  <p className="text-sm font-semibold text-foreground">{g.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {g.pages} pages · Preview before you buy
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-12 text-sm text-muted-foreground">
        <Link href="/featured" className="text-primary font-semibold hover:underline">
          Back to Get featured
        </Link>
        {" · "}
        <Link href="/guides" className="hover:underline">
          All guides
        </Link>
      </p>
    </div>
  );
}
