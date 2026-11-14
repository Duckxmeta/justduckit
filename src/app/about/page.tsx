import Image from "next/image";
import { Mic, Heart, Building, Award, Target, HelpCircle, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kyle Kinkin | JustDuckIt",
  description: "Kyle Kinkin documents local history and places across Middle Tennessee. Founder of Decent Ducks Sanctuary. Based in Tennessee.",
  alternates: { canonical: "https://justduckit.xyz/about" },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://justduckit.xyz/about/#person",
    "name": "Kyle Kinkin",
    "alternateName": ["Duck", "JustDuckIt", "Ducksonx"],
    "url": "https://justduckit.xyz",
    "image": "https://justduckit.xyz/media/kyle-bandit-sanctuary.jpg",
    "jobTitle": "Local history creator",
    "description": "Documents local history and places across Middle Tennessee. Founder of Decent Ducks Sanctuary.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tennessee",
      "addressRegion": "TN"
    },
    "sameAs": [
      "https://x.com/ducksonx",
      "https://www.instagram.com/justduckits",
      "https://www.tiktok.com/@ducksontiktok",
      "https://adoptaduck.org"
    ]
  };

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-amber-500/5 group">
              <Image
                src="/media/kyle-bandit-sanctuary.jpg"
                alt="Kyle Kinkin at Decent Ducks Sanctuary"
                fill
                className="object-cover object-top group-hover:scale-102 transition-transform duration-300"
                sizes="320px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Kyle Kinkin</h2>
              <p className="text-sm font-mono text-primary font-semibold">Local history & places</p>
              <p className="text-xs text-muted-foreground">Middle Tennessee</p>
            </div>

            <div className="w-full max-w-sm rounded-2xl border border-border bg-card/20 p-6 space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Current work</h3>
              <div className="space-y-3 text-sm text-muted-foreground font-sans">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Local history films</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <a href="https://adoptaduck.org" className="hover:text-primary">Decent Ducks Sanctuary</a>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Creative consultant, ZEN AI Co.</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm rounded-2xl border border-border bg-card/20 p-6 space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Find me</h3>
              <div className="space-y-3 text-sm text-muted-foreground font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">X</span>
                  <a href="https://x.com/ducksonx" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@ducksonx</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">IG</span>
                  <a href="https://www.instagram.com/justduckits" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@justduckits</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">TT</span>
                  <a href="https://www.tiktok.com/@ducksontiktok" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@ducksontiktok</a>
                </div>
                <div className="flex items-center gap-2 border-t border-border/40 pt-3">
                  <span className="text-xs font-mono text-primary font-bold w-6">DD</span>
                  <a href="https://adoptaduck.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Decent Ducks</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="lg:col-span-8 space-y-16">

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-2">
              <h2 className="text-lg font-bold text-foreground">Who is Kyle Kinkin?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kyle Kinkin documents the history and places of Middle Tennessee — the spots people drive past every day. He is also the founder of Decent Ducks Sanctuary and a creative consultant at ZEN AI Co.
              </p>
            </div>

            <section id="bio" className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">01</span>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                  Local history, <span className="text-gradient-gold">on location</span>
                </h1>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans">
                <p>
                  Most history content stays on a map or in a textbook. Kyle films the places themselves — small towns, landmarks, and spots across Smithville, Cookeville, DeKalb County, and Middle Tennessee — then puts the fuller story online.
                </p>
                <p>
                  The work is place-based: a superlative or overlooked detail as the hook, then the context that doesn’t fit in a 60-second reel. Locals can find the spot. Visitors get the story behind it.
                </p>
              </div>
            </section>

            <section id="sanctuary" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">02</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Heart className="h-5 w-5 text-rose-500" />
                  Decent Ducks Sanctuary
                </h2>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Kyle founded Decent Ducks Sanctuary after raising ducks and seeing how many domestic birds end up dumped and unable to survive. The sanctuary is real animal care work based in Tennessee, with local partners at Broken Fence Farms.
                </p>
                <p>
                  The history films and the sanctuary are connected by the same land and the same interest in what is actually happening in Middle Tennessee — places, people, and animals.
                </p>
                <a href="https://adoptaduck.org" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                  Decent Ducks Sanctuary →
                </a>
              </div>
            </section>

            <section id="speaking" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">03</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Mic className="h-5 w-5 text-primary" />
                  On stage
                </h2>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Kyle spoke at DDNYC 2026 in New York City in front of 300+ founders and creators. The talk was about the real path — turning the camera on, making videos, and building in public — not a polished pitch.
                </p>
              </div>
            </section>

            <section id="consulting" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">04</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Target className="h-5 w-5 text-primary" />
                  Also available for
                </h2>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Creative consulting with <a href="https://zenai.world/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ZEN AI Co.</a> on websites, automations, and systems. Local business visits for filming are handled through the Social page.
                </p>
                <a href="/work" className="text-sm font-semibold text-primary hover:underline">Automations →</a>
              </div>
            </section>

            <section id="faq" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">05</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Questions
                </h2>
              </div>
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="space-y-2 border-b border-border/30 pb-4">
                  <p className="font-bold text-foreground">Who is Kyle Kinkin?</p>
                  <p className="text-muted-foreground pl-4 border-l border-primary/20">
                    A Middle Tennessee creator who documents local history and places on camera. He also runs Decent Ducks Sanctuary and consults with ZEN AI Co.
                  </p>
                </div>
                <div className="space-y-2 border-b border-border/30 pb-4">
                  <p className="font-bold text-foreground">What is JustDuckIt?</p>
                  <p className="text-muted-foreground pl-4 border-l border-primary/20">
                    Kyle’s brand and site. The main work is place-based history films and the deeper stories behind them.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-foreground">Where is this based?</p>
                  <p className="text-muted-foreground pl-4 border-l border-primary/20">
                    Tennessee. Most filming covers Smithville, DeKalb County, Cookeville, and Middle Tennessee.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
