import Image from "next/image";
import { MessageSquare, Calendar, Mic, Sparkles, Heart, Building, Award, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Kyle Kinkin's professional path in media and events, the pivot story of Decent Ducks, Doginal Dogs community leadership, and his speaking engagement at DDNYC.",
};

export default function About() {
  const eventTimeline = [
    {
      role: "Creative Consultants",
      company: "ZEN AI Co.",
      companyUrl: "https://zenai.world/",
      period: "2025 – Present",
      description: "Providing strategic creative direction and advisory services on brand development and digital art systems.",
    },
    {
      role: "Founder",
      company: "Decent Ducks",
      period: "2025 – Present",
      description: "Merging the gap between blockchain community and real-life duck care.",
    },
    {
      role: "Owner",
      company: "Pjs Media Co",
      period: "2024 – Present",
      description: "Directing full-service media production and digital brand building, transitioning client stories into high-growth social assets.",
    },
    {
      role: "Owner",
      company: "Ikonic Studio",
      period: "2023 – Present",
      description: "Managing creative design resources and physical brand collateral assets for growth companies.",
    },
    {
      role: "Director of Operations",
      company: "Ikon Marketing",
      period: "2022 – 2023",
      description: "Led local and regional campaign execution, handling brand placements and direct-to-consumer events.",
    },
    {
      role: "Assistant Director",
      company: "Red Mountain Events",
      period: "2021 – 2022",
      description: "Coordinated logistics, stage production, and vendor systems for medium-to-large-scale events.",
    },
    {
      role: "Events Associate",
      company: "Coast To Coast Events",
      period: "2020 – 2021",
      description: "Assisted in day-of coordination, live events setups, and local promotional distributions.",
    },
    {
      role: "Intern",
      company: "BeMarketable",
      period: "2018 – 2020",
      description: "Gained foundational experience in marketing coordination, campaign tracking, and digital outreach.",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        
        {/* Main Grid: Info Sidebar & rest of copy */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Sidebar: Avatar + Contact Block */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-amber-500/5 group">
              <Image
                src="/media/kyle-profile.jpg"
                alt="Kyle Kinkin Portrait"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
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
                  <span>Pjs Media Co & Ikonic Studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Web3 Communities Leader</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content: 5-Part Narrative Structure */}
          <div className="lg:col-span-8 space-y-16">
            
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
                  Based in Nashville, Tennessee, we have built a career across media production, brand development, marketing, and live events. Over the years this path has expanded into digital brand building, on-chain communities, and AI-driven creative work.
                </p>
                <p>
                  We currently operate as Creative Consultants at ZEN AI Co., Founders of Decent Ducks — merging the gap between blockchain community and real-life duck care — and owners of Pjs Media Co and Ikonic Studio.
                </p>
                <p>
                  Earlier in our career we held leadership and management roles across the country in marketing, sales, brand development, and event production. This real-world foundation continues to shape how we approach digital and on-chain work today.
                </p>
              </div>

              {/* Career Timeline */}
              <div className="mt-8 border-t border-border/50 pt-8">
                <h3 className="text-base font-bold text-foreground mb-6">Career Timeline</h3>
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-border">
                  {eventTimeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full bg-primary border-4 border-background" />
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-sm font-bold text-foreground">{item.role}</span>
                          <span className="text-xs text-primary font-mono font-semibold">
                            at{" "}
                            {item.companyUrl ? (
                              <a
                                href={item.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-primary-hover"
                              >
                                {item.company}
                              </a>
                            ) : (
                              item.company
                            )}
                          </span>
                          <span className="text-[10px] text-muted-foreground font-mono ml-auto">{item.period}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
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
                      src="/media/decent-duck-logo.png"
                      alt="Decent Duck Logo"
                      fill
                      className="object-cover"
                      sizes="28px"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Traditional event management is built on checklists, physical venues, and local attendance. While we loved the execution of physical events, 
                  the catalyst that pivoted our path came from a very unexpected place: raising ducks.
                </p>
                <p>
                  Caring for these birds led to founding the <strong className="text-foreground">Decent Ducks Sanctuary</strong>, a physical rescue project 
                  that we quickly realized had a global story to tell. To fund and build a community around the sanctuary, we launched the 
                  <strong className="text-foreground">Decent Ducks NFT project</strong> on Web3. 
                </p>
                <p>
                  Managing a digital ecosystem of art, community discord, and smart contract assets completely shifted our perspective. 
                  It was the spark that proved to us that digital brand building and direct-to-consumer content creation could reach further 
                  and scale faster than local, traditional marketing ever could. This spark led directly to founding Ikonic Studio and Pjs Media.
                </p>
                <div className="pt-1">
                  <a
                    href="https://adoptaduck.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Decent Ducks Sanctuary ↗</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Section 3: Doginal Dogs Chapter */}
            <section id="doginals" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 3</span>
                <div className="flex items-center gap-3 border-b border-border pb-2">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>The Doginal Dogs Chapter</span>
                  </h2>
                  <div className="relative h-7 w-7 overflow-hidden rounded-md border border-border/50">
                    <Image
                      src="/media/doginal-dog-4199.png"
                      alt="Doginal Dog #4199"
                      fill
                      className="object-cover"
                      sizes="28px"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  If Decent Ducks was the spark, partnering with **Doginal Dogs** represents the next level of our career. 
                  Doginal Dogs is an active community built on the Dogecoin (DOGE) blockchain, utilizing raw witness transaction inscriptions 
                  to preserve digital art directly on-chain.
                </p>
                <p>
                  Stepping into leadership and strategic partnership within the Doginal Dogs ecosystem has allowed us to apply our years of media production 
                  and event coordination directly to decentralized technology. By aligning community management, digital content, and on-chain mechanics, 
                  we have pushed the boundaries of what digital art communities can achieve in terms of engagement, utility, and value scaling.
                </p>
                <div className="pt-1">
                  <a
                    href="https://doginaldogs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Doginal Dogs ↗</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Section 4: DDNYC Speaking Engagement */}
            <section id="ddnyc" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 4</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Mic className="h-5 w-5 text-primary" />
                  <span>Speaking Live at DDNYC</span>
                </h2>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  This journey comes to a massive milestone at **DDNYC (Doginal Dogs New York City)**. 
                  We will be participating in the summit, with Kyle Kinkin taking the stage as a featured speaker, presenting in front of an audience of 300+ founders, 
                  creators, and digital asset builders.
                </p>
                <p>
                  Our speaking topic is **“Betting on Yourself.”** 
                  It is a distillation of our career path: leaving the comfort of established, traditional event coordination, 
                  embracing the unexpected inspiration of Decent Ducks, navigating the complex world of Web3 inscriptions, 
                  and building agencies that empower creators. It’s a case study on why the biggest risk you can take is not taking a risk on your own vision.
                </p>
              </div>
            </section>

            {/* Section 5: Current Focus */}
            <section id="focus" className="space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">Part 5</span>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Current Focus</span>
                </h2>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Today, we sit at the intersection of the physical and digital. Our daily focus is scaling Pjs Media Co and Ikonic Studio, 
                  working with clients to build digital brands, and driving growth for on-chain ecosystems like Doginal Dogs.
                </p>
                <p>
                  By taking the rigorous details of physical events production and combining them with the global distribution of digital content, 
                  we help brands build authentic connections that last. Whether it's through code, video, digital assets, or real-life events, 
                  our mission remains: build things that matter, and never hesitate to bet on yourself.
                </p>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
