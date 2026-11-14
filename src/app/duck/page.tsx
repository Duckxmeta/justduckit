import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Home, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Decent Ducks | Virtual Sanctuary",
  description: "Decent Ducks Sanctuary is a virtual adoption sanctuary for ducks and animals. Physical care by Broken Fence Farms in DeKalb County, Tennessee. Support or adopt a resident at adoptaduck.org.",
  alternates: { canonical: "https://justduckit.xyz/duck" },
};

export default function DuckPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Decent Ducks Sanctuary",
    "url": "https://justduckit.xyz/duck",
    "description": "Virtual adoption sanctuary for ducks and animals. Physical care by Broken Fence Farms in DeKalb County, Tennessee.",
    "sameAs": ["https://adoptaduck.org"],
    "founder": { "@type": "Person", "name": "Kyle Kinkin" }
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-4">
        <p className="text-xs font-mono text-primary uppercase tracking-widest">Decent Ducks</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Virtual sanctuary for ducks and animals
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Support real residents through virtual adoption. Physical care is handled by Broken Fence Farms, our grounds partner in DeKalb County, Tennessee.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://adoptaduck.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition"
          >
            Visit adoptaduck.org <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://adoptaduck.org/adopt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5 transition"
          >
            Adopt a resident
          </a>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">From one egg</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            Decent Ducks started with Jasmine — a duckling found half-in, half-out of her shell. Because her eyes opened to a human first, she imprinted. That single rescue became a lifelong commitment.
          </p>
          <p>
            Trips across Tennessee with Jasmine showed the same pattern: what looked like wild ducks on local ponds were often abandoned domestic pets. Domestic ducks cannot fly or migrate. Without a safe place, most do not survive.
          </p>
          <p>
            The sanctuary exists to give those birds a home, share what care actually takes, and support the residents that call it home.
          </p>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-border p-5 space-y-2">
          <Home className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Rescue</h3>
          <p className="text-sm text-muted-foreground">A safe place for domestic ducks and animals that were never meant for the wild.</p>
        </div>
        <div className="rounded-2xl border border-border p-5 space-y-2">
          <Users className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Education</h3>
          <p className="text-sm text-muted-foreground">What it actually takes to keep ducks — housing, water, and the commitment involved.</p>
        </div>
        <div className="rounded-2xl border border-border p-5 space-y-2">
          <Heart className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Virtual adoption</h3>
          <p className="text-sm text-muted-foreground">Support a real resident from anywhere. Updates and stories live on adoptaduck.org.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">How it works</h2>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
          <li>Virtual adoption supports real birds. Physical care stays with Broken Fence Farms in DeKalb County.</li>
          <li>Found a duck or need to rehome one? Contact Broken Fence Farms directly.</li>
          <li>Residents include ducks, geese, turkeys, and other animals that needed a place.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3">
        <h2 className="text-lg font-bold text-foreground">Support the flock</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Adopt a resident, support the mission, or visit the sanctuary site for the full roster and updates.
        </p>
        <a
          href="https://adoptaduck.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Go to adoptaduck.org <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <p className="text-xs text-muted-foreground">
        Decent Ducks is the original online presence behind JustDuckIt. This page points back to the sanctuary site for adoptions and care updates.
      </p>
    </div>
  );
}
