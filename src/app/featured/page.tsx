import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, MapPin, Video } from "lucide-react";
import SocialVisitForm from "@/components/SocialVisitForm";
import SupportButtons from "@/components/SupportButtons";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Support the work, visit the sanctuary, or get a Decent Duck",
  description:
    "Tip Just Duck It, get involved at the Decent Ducks sanctuary, pick up a Decent Duck NFT, or explore Zen Arsenal. Request a visit and preview the local pocket field guides. Independent work for Middle Tennessee.",
  alternates: { canonical: "https://www.justduckit.xyz/featured" },
  openGraph: {
    title: "Support the work, visit the sanctuary, or get a Decent Duck | Just Duck It",
    description:
      "Tip Just Duck It, get involved at the sanctuary, get a Decent Duck NFT, or explore Zen Arsenal.",
    url: "https://www.justduckit.xyz/featured",
  },
};

const DEPOSIT_300 = "https://buy.stripe.com/5kQaEX74Q3Ko0DNdpD7ok04";
const ZEN_ARSENAL_AFFILIATE = "https://arsenal.world/?ref=KYLE-ACDF";
const ADOPT_A_DUCK = "https://adoptaduck.org";
const ADOPT_A_RESIDENT = "https://adoptaduck.org/adopt";
const DECENT_DUCKS_NFT = "https://www.solonchain.io/marketplace/collection/decent_ducks";

const socials = [
  { name: "Facebook", handle: "At JustDuckit", href: "https://www.facebook.com/share/18Zh8XnFWX/" },
  { name: "Instagram", handle: "@justduckits", href: "https://www.instagram.com/justduckits" },
  { name: "TikTok", handle: "@ducksontiktok", href: "https://www.tiktok.com/@ducksontiktok" },
  { name: "X", handle: "@Ducksonx", href: "https://x.com/ducksonx" },
  { name: "YouTube", handle: "@justduckits", href: "https://youtube.com/@justduckits" },
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
          Support the work. Get involved in the sanctuary.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          I’m Duck. I live near Smithville and Center Hill Lake, and I document this landscape — the square, the lake, the roads in between — on the public pages people around here actually use. If that work is useful to you, a tip is always appreciated. You can also get involved at the Decent Ducks sanctuary, pick up a Decent Duck NFT, or explore Zen Arsenal through my affiliate link.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Have a story, landmark, or business you want filmed?{" "}
          <a href="#visit" className="text-primary font-semibold hover:underline">
            Request a visit
          </a>
          . I film a short vlog on site and take photos for Instagram, Facebook, TikTok, X, and YouTube.
        </p>
      </div>

      <section id="support" className="scroll-mt-24 rounded-3xl border border-primary/40 bg-card/40 p-6 sm:p-10 space-y-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Support / Tip</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Gratuity helps cover the drive and keeps the local videos and guides coming. Use whichever option is easiest: PayPal, Cash App, Stripe, or Solana.
        </p>
        <SupportButtons />
      </section>

      <section id="nft" className="mt-10 rounded-3xl border border-primary/50 bg-white/5 p-6 sm:p-10 space-y-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Get a Decent Duck NFT</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Decent Ducks collection lives on Solana. This is the straightforward way to get one.
        </p>
        <a
          href={DECENT_DUCKS_NFT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-black font-extrabold text-sm px-6 py-4 hover:bg-primary-hover transition"
        >
          Get a Decent Duck NFT <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <section id="sanctuary" className="mt-10 rounded-3xl border border-border p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
          <Heart className="h-4 w-4" />
          <span>Decent Ducks Sanctuary</span>
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Adopt a Duck</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Decent Ducks is a virtual adoption sanctuary for ducks and animals. Physical care is handled by Broken Fence Farms, our grounds partner in DeKalb County, Tennessee. Virtual adoption supports real residents. Visit the sanctuary site to get involved, or adopt a resident directly.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={ADOPT_A_DUCK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition"
          >
            Visit adoptaduck.org <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={ADOPT_A_RESIDENT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5 transition"
          >
            Adopt a resident
          </a>
          <Link
            href="/duck"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5 transition"
          >
            Read the story
          </Link>
        </div>
      </section>

      <section id="zen-arsenal" className="mt-10 rounded-3xl border border-border p-6 sm:p-10 space-y-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Zen Arsenal</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Zen Arsenal is a platform for building custom AI agents and workflows. If you want to explore it, this is my affiliate link.
        </p>
        <a
          href={ZEN_ARSENAL_AFFILIATE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition"
        >
          Explore Zen Arsenal <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <div className="mt-16 space-y-4">
        <h2 className="text-lg font-bold text-foreground">Pocket field guides</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Short, sourced PDFs for a drive or a visit. Preview the cover, the contents, and a short excerpt before you buy, so you can see what you’re paying $8 for. Independent Just Duck It guides. Not affiliated with the parks, cities, or agencies named in them.
        </p>
        <div className="divide-y divide-border/60 border border-border rounded-2xl overflow-hidden">
          {guides.map((guide) => (
            <div key={guide.slug} className="p-5 sm:p-6 space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">{guide.title}</h3>
                <span className="text-sm font-bold text-foreground">{guide.price}</span>
              </div>
              <p className="text-xs font-mono text-muted-foreground">{guide.pages} pages</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{guide.blurb}</p>
              <Link
                href={`/guides/${guide.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Preview the guide <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
        <p className="text-sm">
          <Link href="/guides" className="text-primary font-semibold hover:underline">
            See all guides
          </Link>
        </p>
      </div>

      <div className="mt-16 rounded-2xl border border-border/70 p-5 sm:p-6 space-y-3">
        <h2 className="text-base font-semibold text-foreground">Funnel website deposit</h2>
        <p className="text-xs font-mono text-muted-foreground">One-time $300 deposit, toward a site starting at $900</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A deposit toward a client-owned funnel website. You own the finished site; it is not rented from Just Duck It. The deposit holds the start of work after a written scope. The remaining balance depends on the agreed pages and is due as set out in that scope. This is not a promise of search ranking or walk-in traffic.
        </p>
        <a
          href={DEPOSIT_300}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Pay the $300 deposit <ArrowRight className="h-3 w-3" />
        </a>
      </div>

      <section id="visit" className="mt-16 scroll-mt-24 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
            <Video className="h-3.5 w-3.5" />
            <span>Local visits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Got a story? <span className="text-gradient-gold">We’ll come film it.</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Have a story, landmark, or business you want us to visit? Leave a message below so we can keep making content. If you have a place, a business, or a story worth showing, drop the details in the form. We film a short vlog on site and take photos for Instagram, Facebook, TikTok, X, and YouTube.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A visit request is not a paid booking. Gratuity is always appreciated if you want to support the trip.
          </p>
        </div>

        <SocialVisitForm />
      </section>

      <div className="mt-16 space-y-4">
        <h2 className="text-lg font-bold text-foreground">Follow along</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Visit films run on the same accounts already in use. Look at the work first, then decide.
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
          A visit request is not a paid booking until we agree on one. A funnel site starts with a written scope; the $300 is a deposit toward that work, not the full project price.
        </p>
      </div>
    </div>
  );
}
