import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work with me | Kyle Kinkin",
  description:
    "Kyle Kinkin builds simple websites and Google listings for small businesses. Fair pricing. Free photos if you need them.",
  alternates: { canonical: "https://justduckit.xyz/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Websites that get called</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Work with me.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Most of this site is for search engines and the work already happening in public.
        This page is for owners who need a site that actually gets the phone to ring — without an agency price tag.
      </p>

      <section className="mt-12 rounded-2xl border border-border bg-white/5 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">The starter package</p>
        <p className="mt-2 text-3xl font-bold text-foreground">$497</p>
        <p className="mt-1 text-sm text-muted-foreground">Agencies often charge $2,500–$6,000 for the same stack.</p>
        <ul className="mt-6 space-y-3 text-muted-foreground">
          <li>One-page site that works on a phone</li>
          <li>Hours, menu or services, photos, map, tap-to-call</li>
          <li>Google Business Profile cleaned up</li>
          <li>If you don’t have photos, I’ll come take them. No extra charge.</li>
          <li>About two weeks. You own it. No 12-month contract.</li>
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Extra pages $75 each. Hosting and small edits $29/month. If $497 is tight, say so — the Google listing cleanup can still start at $0.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">How it works</h2>
        <ol className="mt-4 space-y-3 text-muted-foreground list-decimal pl-5">
          <li>I look at your Google listing the way a customer would. Fifteen minutes. Free.</li>
          <li>You send hours. If photos are missing, I shoot them on site — included.</li>
          <li>I build the page. You approve it. Done.</li>
        </ol>
      </section>

      <section className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-foreground">Text “GOOGLE” and I’ll pull up your listing.</h2>
        <p className="mt-4 text-lg text-foreground">Kyle Kinkin</p>
        <p className="mt-2">
          <a className="text-primary font-semibold hover:underline" href="tel:+18156414809">
            (815) 641-4809
          </a>
        </p>
        <p className="mt-1">
          <a className="text-primary font-semibold hover:underline" href="mailto:ducksonx@duck.com">
            ducksonx@duck.com
          </a>
        </p>
      </section>

      <p className="mt-10 text-sm text-muted-foreground">
        Want the long version of who I am? <Link href="/about" className="text-primary hover:underline">Read the about page</Link>.
      </p>
    </main>
  );
}
