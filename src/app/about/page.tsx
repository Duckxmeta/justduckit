import Image from "next/image";
import { MessageSquare, Calendar, Mic, Sparkles, Heart, Building, Award, Target, HelpCircle, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kyle Kinkin — Duck, Decent Ducks, DDNYC",
  description: "Kyle Kinkin is a Nashville-based media and events builder, founder of Decent Ducks, and a DDNYC 2026 speaker. Online he is known as Duck and JustDuckIt.",
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
    "jobTitle": "Media and events builder",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nashville",
      "addressRegion": "Tennessee"
    },
    "sameAs": [
      "https://x.com/Ducksonx",
      "https://www.instagram.com/justduckits?utm_source=qr",
      "https://www.tiktok.com/@just.duckit",
      "https://discord.gg/Ry8zBm5Yvb",
      "https://adoptaduck.org",
      "https://zenai.world"
    ],
    "performerIn": [
      {
        "@type": "Event",
        "name": "DDNYC 2026",
        "startDate": "2026-09-02",
        "endDate": "2026-09-04",
        "location": {
          "@type": "Place",
          "name": "Dream Downtown",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New York",
            "addressRegion": "NY"
          }
        }
      }
    ]
  };

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        
        {/* Main Grid: Info Sidebar & rest of copy */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Sidebar: Avatar + Contact Block */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-amber-500/5 group">
              <Image
                src="/media/kyle-bandit-sanctuary.jpg"
                alt="Kyle Kinkin holding a duck at Decent Ducks Sanctuary"
                fill
                className="object-cover object-top group-hover:scale-102 transition-transform duration-300"
                sizes="320px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Kyle Kinkin</h2>
              <p className="text-sm font-mono text-primary font-semibold">Media & Events Builder</p>
              <p className="text-xs text-muted-foreground">Greater Nashville area, Tennessee</p>
            </div>

            <div className="w-full max-w-sm rounded-2xl border border-border bg-card/20 p-6 space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Professional Info</h3>
              <div className="space-y-3 text-sm text-muted-foreground font-sans">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <a
                    href="https://discord.gg/Ry8zBm5Yvb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    Discord Server ↗
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span>Decent Ducks & ZEN AI Co.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>DDNYC 2026 Speaker</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm rounded-2xl border border-border bg-card/20 p-6 space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Links & Community</h3>
              <div className="space-y-3 text-sm text-muted-foreground font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">DD</span>
                  <a
                    href="https://adoptaduck.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    Decent Ducks Sanctuary ↗
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">ZN</span>
                  <a
                    href="https://zenai.world/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    ZEN AI Co. ↗
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">DG</span>
                  <a
                    href="https://doginaldogs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    Doginal Dogs ↗
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">ME</span>
                  <a
                    href="https://magiceden.io/marketplace/decent_ducks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    Decent Ducks Magic Eden ↗
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">YT</span>
                  <a
                    href="https://www.youtube.com/@justduckit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    YouTube Channel ↗
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">TT</span>
                  <a
                    href="https://www.tiktok.com/@just.duckit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    TikTok Profile ↗
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary font-bold w-6">IG</span>
                  <a
                    href="https://www.instagram.com/justduckits?utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    Instagram Profile ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content: Structured Narrative */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Answer Box: Who is Kyle Kinkin? */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-2">
              <h2 className="text-lg font-bold text-foreground">Who is Kyle Kinkin?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kyle Kinkin is a Nashville-based media and events builder, founder of <a href="https://adoptaduck.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Decent Ducks</a>, and a DDNYC 2026 speaker. Online he is known as Duck and JustDuckIt.
              </p>
            </div>

            {/* Section 1: Professional Bio */}
            <section id="bio" className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 1</span>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                  Professional <span className="text-gradient-gold">Identity</span>
                </h1>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans">
                <p>
                  Based in Nashville, Tennessee, we build media, brands, and communities — from live events and content production to on-chain culture and waterfowl rescue.
                </p>
                <p>
                  Spoke at DDNYC 2026 in New York on ‘Betting on Yourself.’
                </p>
                <p>
                  Before this, we spent years in marketing, brand development, and live events. That operating background still shapes how we build today.
                </p>
              </div>

              {/* Active Work */}
              <div className="mt-8 border-t border-border/50 pt-8 space-y-6">
                <h3 className="text-base font-bold text-foreground">Active Work</h3>
                <div className="space-y-6 text-sm leading-relaxed">
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground text-base">
                      <a href="https://adoptaduck.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Decent Ducks</a>
                    </h4>
                    <p className="text-muted-foreground">On-chain project that supports a real-life duck sanctuary.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground text-base">
                      <a href="https://zenai.world/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">ZEN AI Co.</a>
                    </h4>
                    <p className="text-muted-foreground">
                      Creative consultants at <a href="https://zenai.world/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ZEN AI Co.</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: The Pivot Story */}
            <section id="pivot" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 2</span>
                <div className="flex items-center gap-3 border-b border-border pb-2">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose-500 fill-rose-500/10" />
                    <span>The Duck Pivot</span>
                  </h2>
                  <div className="relative h-7 w-7 overflow-hidden rounded-md border border-border/50">
                    <Image
                      src="/media/decent-ducks-nft-solana.png"
                      alt="JustDuckIt black duck logo"
                      fill
                      className="object-cover"
                      sizes="28px"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Traditional event management is built on physical venues, local logistics, and scheduled programming. While we loved the execution of physical events, the catalyst that pivoted our path came from an unexpected place: raising ducks.
                </p>
                <p>
                  Caring for these birds led to founding the <strong className="text-foreground">Decent Ducks Sanctuary</strong>, a physical rescue project with a story to share globally. To fund and build a community around the sanctuary, we launched the <strong className="text-foreground">Decent Ducks NFT project</strong> on Solana.
                </p>
                <p>
                  Managing a digital ecosystem of art, community Discord, and smart contract assets completely shifted our perspective. It proved that digital brand building and direct content creation could scale faster and reach further than traditional marketing.
                </p>
                <div className="pt-1">
                  <a
                    href="https://adoptaduck.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Decent Ducks Sanctuary ↗</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Section 3: DDNYC Speaking Engagement */}
            <section id="ddnyc" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 3</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Mic className="h-5 w-5 text-primary" />
                  <span>Spoke Live at DDNYC 2026</span>
                </h2>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  This journey reached a key milestone at **DDNYC** in New York City. Kyle Kinkin took the stage as a featured speaker, presenting in front of an audience of 300+ founders, creators, and digital asset builders.
                </p>
                <p>
                  The presentation, titled **“Betting on Yourself,”** distilled our career path: stepping away from traditional event coordination, embracing the unexpected inspiration of Decent Ducks, and taking bold risks on our own vision.
                </p>
              </div>
            </section>

            {/* Section 4: Current Focus */}
            <section id="focus" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 4</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Current Focus</span>
                </h2>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Today, our focus is centered on three core pillars: media production, scaling the Decent Ducks sanctuary and on-chain project, and building in public on the JustDuckIt journey.
                </p>
                <p>
                  By taking the execution principles of physical events and combining them with direct digital storytelling, we build authentic brand connections and share every step of the journey with our community.
                </p>
              </div>
            </section>

            {/* Section 5: Sanctuary Collaboration & Digital Advocacy */}
            <section id="collaboration" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 5</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Sanctuary Collaboration & Digital Advocacy</span>
                </h2>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  True advocacy goes beyond our own backyard. We travel to volunteer with animal rescues and sanctuaries across the country, learning firsthand about species care while using web development, content creation, and digital strategy to amplify their stories.
                </p>
                <div className="pt-1">
                  <span className="text-sm font-semibold text-foreground block sm:inline mr-2">
                    Running a sanctuary or rescue organization?
                  </span>
                  <a
                    href="mailto:decentducksorg@gmail.com"
                    className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Get in Touch / Let’s Collaborate ✉</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Section 6: FAQ */}
            <section id="faq" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 6</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <span>Frequently Asked Questions</span>
                </h2>
              </div>
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="space-y-2 border-b border-border/30 pb-4">
                  <p className="font-bold text-foreground font-mono">Q: Who is Kyle Kinkin?</p>
                  <p className="text-muted-foreground pl-4 border-l border-primary/20">
                    A: Kyle Kinkin is a digital content creator, Web3 builder, and founder of JustDuckIt—a duck sanctuary and digital brand. He is also the founder of the Decent Ducks collection on the Solana blockchain and the host behind @DucksOnX.
                  </p>
                </div>
                <div className="space-y-2 border-b border-border/30 pb-4">
                  <p className="font-bold text-foreground font-mono">Q: What is Decent Ducks?</p>
                  <p className="text-muted-foreground pl-4 border-l border-primary/20">
                    A: Decent Ducks is an 888-piece digital asset collection founded on the Solana blockchain by Kyle Kinkin. The project bridges Web3 digital collectibles with real-world animal sanctuary building and content creation.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-foreground font-mono">Q: What is the official handle for JustDuckIt on X and TikTok?</p>
                  <p className="text-muted-foreground pl-4 border-l border-primary/20">
                    A: On X (formerly Twitter), the official handle is @DucksOnX. On TikTok, the handle is @just.duckit, and on Instagram, it is @justduckits.
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
