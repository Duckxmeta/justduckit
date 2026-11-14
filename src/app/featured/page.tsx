import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Get featured or build your site",
  description:
    "A one-month local feature on Just Duck It’s public pages, or a deposit toward a funnel website you own. Independent work for Middle Tennessee businesses. No invented audience numbers.",
  alternates: { canonical: "https://www.justduckit.xyz/featured" },
  openGraph: {
    title: "Get featured or build your site | Just Duck It",
    description:
      "A one-month local feature on Just Duck It’s public pages, or a deposit toward a funnel website you own.",
    url: "https://www.justduckit.xyz/featured",
  },
};

const FEATURE_150 = "https://buy.stripe.com/bJebJ12OAbcQfyH3P37ok02";
const FEATURE_300 = "https://buy.stripe.com/aFa4gz1Kw4Os9aj4T77ok03";
const DEPOSIT_300 = "https://buy.stripe.com/5kQaEX74Q3Ko0DNdpD7ok04";
const GUIDE_CENTER_HILL = "https://buy.stripe.com/00wfZh88U3Ko86f71f7ok01";
const GUIDE_DEKALB = "https://buy.stripe.com/14AdR93SE80Ecmvbhv7ok05";
const GUIDE_MURFREESBORO = "https://buy.stripe.com/00w6oH1Kwgxa9aj5Xb7ok06";

const socials = [
  { name: "Facebook", handle: "At JustDuckit", href: "https://www.facebook.com/share/18Zh8XnFWX/" },
  { name: "Instagram", handle: "@justduckits", href: "https://www.instagram.com/justduckits" },
  { name: "TikTok", handle: "@ducksontiktok", href: "https://www.tiktok.com/@ducksontiktok" },
  { name: "X", handle: "@Ducksonx", href: "https://x.com/ducksonx" },
];

const offers = [
  {
    name: "Local Feature",
    term: "1 month",
    price: "$150",
    href: FEATURE_150,
    cta: "Pay $150",
    body: "Your business name in the descriptions of the videos and posts already being made about this Middle Tennessee landscape during that month, plus a thank-you and a short, honest mention when it actually fits the story. This is the work already happening on Facebook, Instagram, TikTok, and X — not a separate ad campaign, and not a promise of a certain number of views or customers.",
  },
  {
    name: "Premium Local Feature",
    term: "1 month",
    price: "$300",
    href: FEATURE_300,
    cta: "Pay $300",
    highlight: true,
    body: "Everything in the $150 feature, plus a dedicated thank-you post about your business on those same public pages, and a more prominent mention in that month’s work. Still a local feature, not a media kit and not a guarantee of reach.",
  },
  {
    name: "Funnel Website Deposit",
    term: "toward a site starting at $900",
    price: "$300",
    href: DEPOSIT_300,
    cta: "Pay $300 deposit",
    body: "A deposit toward a client-owned funnel website, starting at $900. You own the finished site; it is not rented from Just Duck It. The deposit holds the start of work after a written scope. The remaining balance depends on the agreed pages and is due as set out in that scope. This is not a promise of search ranking or walk-in traffic.",
  },
];

const guides = [
  {
    name: "Center Hill Lake & Edgar Evins: A Pocket Field Guide",
    price: "$8",
    href: GUIDE_CENTER_HILL,
    body: "A short, sourced walking history of Center Hill Dam, the lake, and Edgar Evins State Park. Independent guide — not a park or Corps publication.",
  },
  {
    name: "DeKalb County & Smithville: A Pocket History",
    price: "$8",
    href: GUIDE_DEKALB,
    body: "A short, sourced history of the county seat, Liberty, Alexandria, the square, the Jamboree, and the Craft Center. Where two sources disagree on a date, the guide says so.",
  },
  {
    name: "From Cannonsburgh to Murfreesboro: A Pocket History",
    price: "$8",
    href: GUIDE_MURFREESBORO,
    body: "A short, sourced account of how Rutherford County’s seat was named, and how the Cannonsburgh Village you can visit today relates to that story.",
  },
];

export default function FeaturedPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
          <MapPin className="h-4 w-4" />
          <span>Smithville · Center Hill · Middle Tennessee</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Get featured. Or build a site you own.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          I’m Duck. I live near Smithville and Center Hill Lake, and I document this landscape — the square, the lake, the roads in between — on the public pages people around here actually use. Local businesses have already paid to put their name in front of that work. I also build funnel websites for clients in the area. Those sites are fully owned by the client, not rented.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This page does not invent follower counts, view numbers, or testimonials. A feature is a month of honest mentions in work already being made. A website is a site you own, with a written scope first.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.name}
            className={`rounded-2xl border p-6 space-y-4 ${
              offer.highlight ? "border-primary/50 bg-white/5" : "border-border"
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{offer.name}</h2>
                <p className="text-xs font-mono text-muted-foreground mt-1">{offer.term}</p>
              </div>
              <p className="text-2xl font-extrabold text-foreground">{offer.price}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{offer.body}</p>
            <a
              href={offer.href}
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition"
            >
              {offer.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
        Checkout collects your name, phone, email, and business name or website so Duck can follow up. After payment you will be sent to a thank-you page. Questions before you pay:{" "}
        <a href="mailto:duck@justduckit.xyz" className="text-primary hover:underline font-semibold">
          duck@justduckit.xyz
        </a>
        .
      </p>

      <div className="mt-16 space-y-4">
        <h2 className="text-lg font-bold text-foreground">Pocket field guides</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Short, sourced PDFs for a drive or a visit. Independent Just Duck It guides. Not affiliated with the parks, cities, or agencies named in them. Hours change; confirm them on official sites before you go.
        </p>
        <div className="divide-y divide-border/60 border border-border rounded-2xl overflow-hidden">
          {guides.map((guide) => (
            <div key={guide.name} className="p-5 sm:p-6 space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">{guide.name}</h3>
                <span className="text-sm font-bold text-foreground">{guide.price}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{guide.body}</p>
              <a
                href={guide.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Buy the PDF <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 space-y-4">
        <h2 className="text-lg font-bold text-foreground">The public pages</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Features run on the same accounts already in use. Look at the work first, then decide.
        </p>
        <ul className="flex flex-wrap gap-3">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-primary/40 hover:text-primary transition"
              >
                {s.name} <span className="text-muted-foreground ml-1.5">{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 border-t border-border/50 pt-8 space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          Just Duck It / Duck. Contact:{" "}
          <a href="mailto:duck@justduckit.xyz" className="text-primary hover:underline font-semibold">
            duck@justduckit.xyz
          </a>
          . For other web and systems work, see{" "}
          <Link href="/work" className="text-primary hover:underline font-semibold">
            Work with me
          </Link>
          .
        </p>
        <p>
          A monthly feature is not exclusive, and it is not a promise of tourist-bus traffic. A funnel site starts with a written scope; the $300 is a deposit toward that work, not the full project price.
        </p>
      </div>
    </div>
  );
}
