import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Pocket field guides",
  description:
    "Short, sourced Middle Tennessee field guides from Just Duck It. Preview the cover, contents, and a sample before you buy. $8 each.",
  alternates: { canonical: "https://www.justduckit.xyz/guides" },
};

export default function GuidesIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="space-y-4 mb-12">
        <p className="text-xs font-mono uppercase tracking-wider text-primary">Just Duck It</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Pocket field guides
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Short, sourced PDFs for a drive or a visit in Middle Tennessee. Preview the cover, the contents, and a short excerpt before you spend $8. Independent Just Duck It guides — not affiliated with the parks, cities, or agencies named in them. Hours change; confirm them on official sites before you go.
        </p>
      </div>

      <div className="space-y-6">
        {guides.map((guide) => (
          <article key={guide.slug} className="rounded-2xl border border-border p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-5 items-start">
              <Link href={`/guides/${guide.slug}`} className="block mx-auto sm:mx-0 w-full max-w-[140px]">
                <Image
                  src={guide.coverSrc}
                  alt={guide.coverAlt}
                  width={612}
                  height={792}
                  className="w-full h-auto rounded-lg border border-border"
                />
              </Link>
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-base font-semibold text-foreground">{guide.title}</h2>
                  <span className="text-sm font-bold text-foreground">{guide.price}</span>
                </div>
                <p className="text-xs font-mono text-muted-foreground">{guide.pages} pages</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{guide.blurb}</p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Preview the guide <ArrowRight className="h-3 w-3" />
                  </Link>
                  <a href={guide.stripeUrl} className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline">
                    Buy for $8
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
