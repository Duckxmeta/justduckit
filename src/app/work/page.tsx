import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight, Video, Globe, Shield, Sparkles, Clock, CreditCard, Cpu, Layers, ArrowRight, Phone, Code2, MapPin } from "lucide-react";
import WorkContactForm from "@/components/WorkContactForm";
import ValueContrast from "@/components/ValueContrast";
import AuditLeadForm from "@/components/AuditLeadForm";
import ManagedCareRetainers from "@/components/ManagedCareRetainers";

export const metadata: Metadata = {
  title: "Custom Web Development, Automation & Technical Infrastructure | Kyle Kinkin — JustDuckIt",
  description:
    "From clean, high-speed websites for Middle Tennessee businesses (Smithville, DeKalb County, Murfreesboro, Cookeville) to proprietary AI workflows and Web3 architecture.",
  keywords: [
    "Middle Tennessee web developer",
    "Smithville TN web design",
    "DeKalb County IT solutions",
    "Murfreesboro web developer",
    "Cookeville custom software",
    "Kyle Kinkin",
    "JustDuckIt",
    "Duck on X",
    "Zen AI Co",
    "Solana Web3 developer",
  ],
  alternates: { canonical: "https://justduckit.xyz/work" },
};

export default function WorkPage() {
  const packages = [
    {
      name: "Starter",
      price: "$900",
      description: "Up to 5 pages. Mobile, contact form, basic SEO, 2 revision rounds.",
      delivery: "2–3 days",
      features: [
        "Up to 5 pages",
        "Mobile layout & contact form",
        "Basic SEO titles & schema",
        "2 revision rounds",
      ],
      paymentPlan: "$450 now, then $150/mo for 3 months",
      highlight: false,
      ctaText: "Select Starter",
      ctaHref: "#contact",
      external: false,
    },
    {
      name: "Business",
      price: "$1,600",
      description: "Up to 10 pages. Service pages, gallery, reviews, Google listing and map links, analytics.",
      delivery: "about 2–3 days",
      features: [
        "Up to 10 pages",
        "Service pages & package listings",
        "Gallery & reviews section",
        "Google listing and map links",
        "Analytics integration",
      ],
      paymentPlan: "$800 now, then $200/mo for 4 months",
      highlight: true,
      ctaText: "Select Business",
      ctaHref: "#contact",
      external: false,
    },
    {
      name: "Enterprise",
      price: "call first",
      description: "For larger clients who need more than one piece of software working together. This is a consulting call, not a fixed site package. We scope it on the phone, then quote it.",
      delivery: "Scoped on call",
      features: [
        "Multi-software integrations",
        "Scoped on phone call",
        "Enterprise scope & quote",
      ],
      paymentPlan: null,
      linkText: "consulting through ZEN AI Co.",
      linkUrl: "https://zenai.world/",
      highlight: false,
      ctaText: "Consulting through ZEN AI Co. ↗",
      ctaHref: "https://zenai.world/",
      external: true,
    },
  ];

  const portfolio = [
    {
      name: "Glow's Haven",
      category: "Local Service & Custom Web",
      challenge: "Client: Glow's Haven (glowshaven.com) needed a modern, mobile-first design with reliable DNS architecture.",
      architecture: "Custom Web Design, Mobile Layout & Domain Architecture",
      result: "Responsive mobile navigation, custom CSS layout, fast DNS/static deployment.",
      url: "https://glowshaven.com",
    },
    {
      name: "Relentless Mobile Details",
      category: "Local Service & Auto Detailing",
      challenge: "Local auto detailer needed a high-speed booking site to capture search traffic and replace lost phone inquiries.",
      architecture: "Next.js, Tailwind CSS, Local Business Schema.org, Formspree API.",
      result: "Sub-second mobile load time with direct tap-to-call and form conversions.",
      url: "https://relentlessmobiledetails.com",
    },
    {
      name: "Kit Kat Alley Rescue",
      category: "Non-Profit Animal Rescue",
      challenge: "Regional cat rescue required an intuitive adoption portal and streamlined donor intake system.",
      architecture: "Next.js, React, Tailwind CSS, Stripe integration, Vercel Edge.",
      result: "Simplified adoption intake workflows and zero-friction donor routing.",
      url: "https://kitkatalleyrescue.org",
    },
    {
      name: "Beauty by Rilee",
      category: "Stylist & Salon",
      challenge: "Independent salon stylist needed a mobile-first service menu and appointment booking hub.",
      architecture: "Next.js, Vercel, Tailwind CSS, Google Business Profile alignment.",
      result: "Delivered in 2 days with automated client booking and high local search rank.",
      url: "https://beautyby-rilee-bol99850f-flowmarket1-3159s-projects.vercel.app/",
    },
    {
      name: "Hidden Harbor Marina",
      category: "Marina & Marine Services",
      challenge: "Regional marina needed a modern web portal for slip reservations and service inquiries.",
      architecture: "Next.js, Tailwind CSS, Dynamic Google Maps API, Vercel Analytics.",
      result: "High-converting landing surface for regional boaters across Middle Tennessee.",
      url: "https://hidden-harbor-8j3ysrtkj-flowmarket1-3159s-projects.vercel.app/",
    },
    {
      name: "Vee",
      category: "Personal brand",
      challenge: "Digital content creator needed a lightweight, high-impact personal brand landing hub.",
      architecture: "Next.js, Vercel Edge, Tailwind CSS, Glassmorphic UI design.",
      result: "Sub-second mobile rendering with unified social & portfolio links.",
      url: "https://veesite-bb4i0ane3-flowmarket1-3159s-projects.vercel.app/",
    },
    {
      name: "ZEN AI Co. / Arsenal OS",
      category: "Enterprise AI & Automation",
      challenge: "Growing organizations needing proprietary AI intake agents, custom web apps, and automated workflows.",
      architecture: "Arsenal Agent OS, Multi-model AI routing (OpenAI/Anthropic/Gemini), Next.js, Supabase.",
      result: "Unified agentic execution environment that automates repetitive back-office operations.",
      url: "https://zenai.world/",
    },
    {
      name: "Decent Ducks Sanctuary",
      category: "Web3 & Wildlife Sanctuary",
      challenge: "On-chain digital asset project bridging digital collectibles with physical sanctuary operations.",
      architecture: "Solana Smart Contracts, Next.js, Waterfowl Rescue Infrastructure, Stripe Merch Rails.",
      result: "888-piece sold-out collection funding real-world animal care & digital advocacy.",
      url: "https://adoptaduck.org",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 space-y-20">
        
        {/* Universal Hero & Router */}
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
            <Code2 className="h-3.5 w-3.5" />
            <span>Middle Tennessee & Enterprise Tech</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-tight">
            Custom Web Development, Automation & <span className="text-gradient-gold">Technical Infrastructure</span>
          </h1>

          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            From clean, high-speed websites for Middle Tennessee businesses to proprietary AI workflows and Web3 architecture.
          </p>

          {/* Audience Router Cards (3 Direct Action Tiles) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            
            {/* Tile 1: Local Businesses */}
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-all">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <Globe className="h-5 w-5" />
                  <span>Local Businesses</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fast, modern sites, booking engines, and local search visibility.
                </p>
              </div>
              <a
                href="#packages"
                className="inline-flex items-center justify-between w-full rounded-xl bg-primary text-black font-semibold text-xs px-4 py-3 hover:bg-primary-hover transition-all"
              >
                <span>Get a Website / Discovery Call</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Tile 2: Custom Systems & Enterprise AI */}
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-all">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <Cpu className="h-5 w-5" />
                  <span>Custom Systems & AI</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Proprietary AI intake agents, custom web apps, and automated operations.
                </p>
              </div>
              <a
                href="#enterprise"
                className="inline-flex items-center justify-between w-full rounded-xl border border-border bg-white/5 text-foreground font-semibold text-xs px-4 py-3 hover:bg-white/10 transition-all"
              >
                <span>Explore Custom Software</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Tile 3: Web3 & Digital Ecosystem */}
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-all">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <Layers className="h-5 w-5" />
                  <span>Web3 & Digital Ecosystem</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Interactive browser builds, Solana smart contracts, and sanctuary initiatives.
                </p>
              </div>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-between w-full rounded-xl border border-border bg-white/5 text-foreground font-semibold text-xs px-4 py-3 hover:bg-white/10 transition-all"
              >
                <span>View Ecosystem & Projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Website Packages Section */}
        <section id="packages" className="space-y-12 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span>Website Packages</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Clear scope, fixed pricing, and fast turnarounds for local businesses across Middle Tennessee (Smithville, DeKalb County, Murfreesboro, Cookeville).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl border ${
                  pkg.highlight
                    ? "border-primary/50 bg-primary/5 shadow-2xl shadow-primary/10"
                    : "border-border bg-card/40"
                } backdrop-blur-md p-8 flex flex-col justify-between transition-all hover:border-primary/40`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-black text-xs font-bold font-mono shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{pkg.description}</p>
                  </div>

                  <div className="border-y border-border/50 py-4 space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-foreground">{pkg.price}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-mono font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{pkg.delivery}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border/40 space-y-4">
                  {pkg.paymentPlan ? (
                    <div className="bg-background/60 rounded-xl p-3.5 border border-border/40 text-xs">
                      <span className="font-semibold text-foreground block mb-0.5 flex items-center gap-1">
                        <CreditCard className="h-3.5 w-3.5 text-primary" />
                        Payment Plan Option:
                      </span>
                      <span className="text-muted-foreground font-mono">{pkg.paymentPlan}</span>
                    </div>
                  ) : (
                    <div className="bg-background/60 rounded-xl p-3.5 border border-border/40 text-xs">
                      <span className="font-semibold text-foreground block mb-0.5">
                        Consulting Partner:
                      </span>
                      <a
                        href={pkg.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-mono"
                      >
                        {pkg.linkText} ↗
                      </a>
                    </div>
                  )}
                  <a
                    href={pkg.ctaHref}
                    target={pkg.external ? "_blank" : undefined}
                    rel={pkg.external ? "noopener noreferrer" : undefined}
                    className={`block w-full text-center rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
                      pkg.highlight
                        ? "bg-primary text-black hover:bg-primary-hover shadow-md shadow-primary/10"
                        : "border border-border bg-white/5 hover:bg-white/10 text-foreground"
                    }`}
                  >
                    {pkg.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Terms & Post-Launch Care */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card/20 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Payment & Staging Terms</span>
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Payment Terms:</strong> 50% to start, 50% before launch.
              </p>
              <p>
                <strong className="text-foreground">Starter plan:</strong> $450 now, then $150/mo for 3 months.
              </p>
              <p>
                <strong className="text-foreground">Business plan:</strong> $800 now, then $200/mo for 4 months.
              </p>
              <p className="text-xs bg-background/50 p-3 rounded-lg border border-border/50 font-mono text-muted-foreground">
                Note: Sites stay on a staging link until the payment plan is current. Domain and hosting are the client’s responsibility.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/20 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>Optional Post-Launch Care</span>
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p className="text-2xl font-bold text-foreground">$75 / mo</p>
              <p>
                Ongoing support for small text updates, photo swaps, and keeping your site fresh after launch.
              </p>
              <p className="text-xs text-muted-foreground">
                No long-term locks — cancel or pause anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Local Video Section */}
        <section className="rounded-3xl border border-primary/20 bg-primary/5 p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold w-fit">
            <Video className="h-3.5 w-3.5" />
            <span>On-Site Video</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-2xl font-bold text-foreground">Local video — $50 value</h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            If the business is close enough to drive to, I’ll come film a short vlog on site. <span className="text-foreground font-semibold">$50 value</span>
          </p>
        </section>

        {/* Value Contrast Section (Enterprise Engineering vs Legacy CMS) */}
        <ValueContrast />

        {/* Productized Audit Lead Capture */}
        <AuditLeadForm />

        {/* Managed Retainer Care Tiers */}
        <ManagedCareRetainers />

        {/* Local Middle Tennessee Geo Target Markets */}
        <section className="rounded-2xl border border-border bg-card/20 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <MapPin className="h-4.5 w-4.5" />
            <span>Middle Tennessee Local Market Services:</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Dedicated engineering & web automation landing hubs for regional business owners across Middle Tennessee:
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/work/web-design-smithville-tn"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-background/60 border border-border text-xs font-semibold hover:border-primary/50 text-foreground transition-all"
            >
              <span>Smithville, TN Web Design</span>
              <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </Link>
            <Link
              href="/work/web-design-liberty-tn"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-background/60 border border-border text-xs font-semibold hover:border-primary/50 text-foreground transition-all"
            >
              <span>Liberty, TN Web Design</span>
              <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </Link>
            <Link
              href="/work/web-design-mcminnville-tn"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-background/60 border border-border text-xs font-semibold hover:border-primary/50 text-foreground transition-all"
            >
              <span>McMinnville, TN Web Design</span>
              <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </Link>
            <Link
              href="/work/web-design-cookeville-tn"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-background/60 border border-border text-xs font-semibold hover:border-primary/50 text-foreground transition-all"
            >
              <span>Cookeville, TN Web Engineering</span>
              <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </Link>
          </div>
        </section>

        {/* Enterprise Systems & Custom Software (ZEN AI Co) */}
        <section id="enterprise" className="scroll-mt-24 rounded-3xl border border-border bg-card/30 p-8 sm:p-12 space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
              <Cpu className="h-3.5 w-3.5" />
              <span>Enterprise & Custom Systems</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Enterprise Software & Custom AI Workflows</h2>
            <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
              For growing organizations and regional enterprises that outgrow off-the-shelf software. In collaboration with Alexander Leschik at ZEN AI Co., we design and build unified agentic systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-background/50 p-6 space-y-2">
              <h3 className="text-base font-bold text-foreground">Proprietary AI Agents</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Custom-trained internal systems designed to handle repetitive customer touchpoints, lead sorting, intake, and back-office operations.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/50 p-6 space-y-2">
              <h3 className="text-base font-bold text-foreground">Bespoke Full-Stack Dev</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Scalable database architecture, private API integrations, multi-tenant spaces, and secure web application environments.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/50 p-6 space-y-2">
              <h3 className="text-base font-bold text-foreground">Automation Infrastructure</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Transitioning legacy operations into unified, intelligent systems built to scale without forcing employees to be the manual wire between tabs.
              </p>
            </div>
          </div>

          {/* Dedicated Partner Subsection */}
          <div className="pt-6 border-t border-border/60 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Enterprise & Automation Systems (via Zen AI Co)</h3>
              <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
                Collaborative systems engineering, custom AI pipelines, and internal tools delivered in partnership with Zen AI Co.
              </p>
            </div>

            {/* 3 Structured Project Proof Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Proof Block 1 */}
              <div className="rounded-2xl border border-border bg-background/60 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      Engineering & Automation Partner
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Thinkrr.ai</h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div>
                      <strong className="text-foreground block">Problem Solved:</strong>
                      <span className="text-muted-foreground">Automating complex AI intake, document reasoning, and multi-model agent execution pipelines.</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Technical Stack:</strong>
                      <span className="text-primary font-mono">Next.js, TypeScript, Arsenal Agent OS, Multi-Model AI Router, Supabase</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-border/40">
                  <a
                    href="https://thinkrr.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>thinkrr.ai</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Proof Block 2 */}
              <div className="rounded-2xl border border-border bg-background/60 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      Engineering & Automation Partner
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Inspect Canada</h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div>
                      <strong className="text-foreground block">Problem Solved:</strong>
                      <span className="text-muted-foreground">Streamlining field inspection intake, automated report dispatching, and client communication workflows.</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Technical Stack:</strong>
                      <span className="text-primary font-mono">Next.js, Node.js, Custom CRM Integrations, Automated SMS/Email Dispatch, Vercel Edge</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-border/40">
                  <a
                    href="https://inspect.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>inspect.ca</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Proof Block 3 */}
              <div className="rounded-2xl border border-border bg-background/60 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      Technical Lead & Automation Partner
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Pastry Popup Fundraiser</h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div>
                      <strong className="text-foreground block">Problem Solved:</strong>
                      <span className="text-muted-foreground">High-volume flash sale order management with automated inventory locking and real-time payment validation.</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Technical Stack:</strong>
                      <span className="text-primary font-mono">Next.js, Stripe Payments, Webhooks Engine, Tailwind CSS, Vercel Infrastructure</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-border/40">
                  <a
                    href="https://pastrypopupfundraiser.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>pastrypopupfundraiser.org</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://zenai.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3.5 hover:bg-primary-hover transition-all shadow-md shadow-primary/10"
            >
              <span>Schedule Custom Software Scope Call (ZEN AI Co.) ↗</span>
            </a>
          </div>
        </section>

        {/* Proof & Portfolio Section (Structured 3-Part Cards) */}
        <section id="portfolio" className="space-y-8 scroll-mt-24">
          <div className="border-b border-border pb-4">
            <h2 className="text-3xl font-bold text-foreground">Proof & Portfolio</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Scannable case studies across local business sites, custom software, and Web3 builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border bg-card/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-primary/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {item.category}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 font-mono"
                    >
                      <span>Visit Live</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="bg-background/60 p-3 rounded-xl border border-border/40">
                      <strong className="text-foreground block mb-0.5">The Client / Challenge:</strong>
                      <span className="text-muted-foreground">{item.challenge}</span>
                    </div>

                    <div className="bg-background/60 p-3 rounded-xl border border-border/40">
                      <strong className="text-foreground block mb-0.5">The Architecture:</strong>
                      <span className="text-primary font-mono">{item.architecture}</span>
                    </div>

                    <div className="bg-background/60 p-3 rounded-xl border border-border/40">
                      <strong className="text-foreground block mb-0.5">The Result / Live Link:</strong>
                      <span className="text-muted-foreground">{item.result}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/40">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>{item.url.replace(/^https?:\/\//, "")}</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Universal Lead Form Section */}
        <WorkContactForm />

      </div>
    </div>
  );
}
