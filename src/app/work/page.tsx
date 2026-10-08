import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight, Globe, Shield, Sparkles, Clock, CreditCard, Cpu, Layers, Send, Zap, Bot, Smartphone, CheckCircle2 } from "lucide-react";
import WorkContactForm from "@/components/WorkContactForm";
import ValueContrast from "@/components/ValueContrast";
import AuditLeadForm from "@/components/AuditLeadForm";
import ManagedCareRetainers from "@/components/ManagedCareRetainers";
import ProjectScopeQuiz from "@/components/ProjectScopeQuiz";
import OperatorMatrix from "@/components/OperatorMatrix";

export const metadata: Metadata = {
  title: "Systems Architecture & Automation | Kyle Kinkin — JustDuckIt",
  description:
    "We design custom websites, automated booking funnels, and backend workflows that handle repetitive operations so you can focus on running your business. Partnering nationwide.",
  keywords: [
    "Systems Architecture",
    "Business Automation",
    "Custom Web Design",
    "Automated Booking Funnels",
    "Backend Workflows",
    "Kyle Kinkin",
    "JustDuckIt",
    "Nationwide Business Automation",
  ],
  alternates: { canonical: "https://justduckit.xyz/work" },
};

export default function WorkPage() {
  const pillarGrid = [
    {
      title: "THE CLIENT ENGINE",
      tagline: "Turn attention into paid calls.",
      bullets: [
        "Conversion-focused web design",
        "Frictionless mobile booking",
        "Zero technical maintenance",
      ],
      icon: Globe,
    },
    {
      title: "AUTOMATION SUITE",
      tagline: "Eliminate manual data entry.",
      bullets: [
        "Instant lead notifications",
        "Automated email/SMS follow-up",
        "Unified calendar & payment sync",
      ],
      icon: Zap,
    },
    {
      title: "BESPOKE PLATFORMS",
      tagline: "Custom systems built to scale.",
      bullets: [
        "Private client portals",
        "Centralized operations hubs",
        "End-to-end custom workflows",
      ],
      icon: Cpu,
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$900",
      description: "Up to 5 pages. Mobile layout, contact form, basic search setup, 2 revision rounds.",
      delivery: "2–3 days",
      features: [
        "Up to 5 pages",
        "Mobile layout & contact form",
        "Basic search titles & structure",
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
      description: "Up to 10 pages. Service pages, gallery, reviews, business listing links, analytics.",
      delivery: "about 2–3 days",
      features: [
        "Up to 10 pages",
        "Service pages & package listings",
        "Gallery & reviews section",
        "Business listing & map links",
        "Performance analytics integration",
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
      description: "For larger clients who need custom operational software working together. Scoped directly on a phone call, then quoted.",
      delivery: "Scoped on call",
      features: [
        "Multi-software integrations",
        "Scoped on strategy call",
        "Custom scope & quote",
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
      challenge: "Client needed a modern, mobile-first web design to capture new client bookings.",
      architecture: "Conversion-Focused Web Design & Mobile Experience",
      result: "Responsive mobile navigation, custom design, fast static performance.",
      url: "https://glowshaven.com",
    },
    {
      name: "Relentless Mobile Details",
      category: "Local Service & Auto Detailing",
      challenge: "Local auto detailer needed a high-speed booking site to capture search traffic and replace lost phone inquiries.",
      architecture: "Custom Mobile Web App, Business Search Optimization & Direct Form Routing.",
      result: "Sub-second mobile load time with direct tap-to-call and form conversions.",
      url: "https://relentlessmobiledetails.com",
    },
    {
      name: "Kit Kat Alley Rescue",
      category: "Non-Profit Animal Rescue",
      challenge: "Regional cat rescue required an intuitive adoption portal and streamlined donor intake system.",
      architecture: "Custom Web Design & Streamlined Payment Rails.",
      result: "Simplified adoption intake workflows and zero-friction donor routing.",
      url: "https://kitkatalleyrescue.org",
    },
    {
      name: "Beauty by Rilee",
      category: "Stylist & Salon",
      challenge: "Independent salon stylist needed a mobile-first service menu and appointment booking hub.",
      architecture: "Custom Mobile Site & Automated Client Booking Alignment.",
      result: "Delivered in 2 days with automated client booking and top search rank.",
      url: "https://beautyby-rilee-bol99850f-flowmarket1-3159s-projects.vercel.app/",
    },
    {
      name: "Hidden Harbor Marina",
      category: "Marina & Marine Services",
      challenge: "Regional marina needed a modern web portal for slip reservations and service inquiries.",
      architecture: "Custom Web Design, Interactive Mapping & Analytics.",
      result: "High-converting landing surface for boaters nationwide.",
      url: "https://hidden-harbor-8j3ysrtkj-flowmarket1-3159s-projects.vercel.app/",
    },
    {
      name: "Vee",
      category: "Personal Brand",
      challenge: "Digital content creator needed a lightweight, high-impact personal brand landing hub.",
      architecture: "High-Performance Personal Web Design & Brand Hub.",
      result: "Sub-second mobile rendering with unified social & portfolio links.",
      url: "https://veesite-bb4i0ane3-flowmarket1-3159s-projects.vercel.app/",
    },
    {
      name: "ZEN AI Co. / Arsenal OS",
      category: "Enterprise AI & Automation",
      challenge: "Growing organizations needing proprietary intake agents, custom web apps, and automated workflows.",
      architecture: "Custom Operations Platform, Multi-Model Routing & Automated Database Pipelines.",
      result: "Unified execution environment that automates repetitive back-office operations.",
      url: "https://zenai.world/",
    },
    {
      name: "Decent Ducks Sanctuary",
      category: "Digital Assets & Wildlife Sanctuary",
      challenge: "Digital asset project bridging digital collectibles with physical sanctuary operations.",
      architecture: "Digital Asset Infrastructure, Waterfowl Rescue Support & Online Sales Rails.",
      result: "888-piece sold-out collection funding real-world animal care & digital advocacy.",
      url: "https://adoptaduck.org",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 space-y-20">
        
        {/* 1. HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="h-3.5 w-3.5" />
            <span>SYSTEMS ARCHITECTURE & AUTOMATION</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-tight">
            Build a business that captures clients and runs smoothly—<span className="text-gradient-gold">without the tech headaches.</span>
          </h1>

          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            "We design custom websites, automated booking funnels, and backend workflows that handle repetitive operations so you can focus on running your business."
          </p>

          <div className="pt-2">
            <a
              href="#diagnostic"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-bold text-sm px-8 py-4 hover:bg-primary-hover active:scale-[0.98] transition-all shadow-xl shadow-primary/20 cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>Run 60-Second System Scope</span>
            </a>
          </div>

          {/* 3-Pillar Capability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
            {pillarGrid.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-border bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-4 hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary w-fit">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base tracking-wider text-foreground uppercase">{pillar.title}</h3>
                      <p className="text-xs font-semibold text-primary mt-1">{pillar.tagline}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-border/40 text-xs text-muted-foreground">
                    {pillar.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. INTERACTIVE DIAGNOSTIC (The Bridge) */}
        <section id="diagnostic" className="scroll-mt-24">
          <ProjectScopeQuiz />
        </section>

        {/* 3. THE CONTRAST MATRIX (Operator A vs Operator B) */}
        <OperatorMatrix />
        <ValueContrast />

        {/* 4. STREAMLINED PROOF */}
        <section id="proof" className="space-y-16 scroll-mt-24">
          
          {/* Proof Section Header */}
          <div className="border-b border-border pb-6 text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
              <Shield className="h-3.5 w-3.5" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Streamlined Proof & Capabilities
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Real outcomes delivered for service providers, modern brands, and growing operators nationwide.
            </p>
          </div>

          {/* Category A: Turnkey Client Systems & Website Packages */}
          <div id="packages" className="space-y-8 scroll-mt-24">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>1. Turnkey Website Packages & Lead Engines</span>
              </h3>
              <p className="text-xs text-muted-foreground">Fixed-scope systems designed to convert visitors into paid calls.</p>
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
                      <h4 className="text-xl font-bold text-foreground">{pkg.name}</h4>
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
          </div>

          {/* Category B: Custom Operations & Enterprise Systems (Zen AI Co) */}
          <div id="enterprise" className="space-y-8 scroll-mt-24">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <span>2. Custom Operational Platforms (via Zen AI Co)</span>
              </h3>
              <p className="text-xs text-muted-foreground">Internal portals, automated workflows, and multi-location operations hubs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Proof Block 1 */}
              <div className="rounded-2xl border border-border bg-card/40 p-6 space-y-4 flex flex-col justify-between hover:border-primary/40 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      Automation Partner
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Thinkrr.ai</h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div>
                      <strong className="text-foreground block">Problem Solved:</strong>
                      <span className="text-muted-foreground">Automating complex intake, document reasoning, and multi-agent execution pipelines.</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Systems Architecture:</strong>
                      <span className="text-primary font-mono">Custom Web Architecture, Multi-Model AI Router, Operations Hub</span>
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
              <div className="rounded-2xl border border-border bg-card/40 p-6 space-y-4 flex flex-col justify-between hover:border-primary/40 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      Automation Partner
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Inspect Canada</h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div>
                      <strong className="text-foreground block">Problem Solved:</strong>
                      <span className="text-muted-foreground">Streamlining field inspection intake, automated report dispatching, and client communication workflows.</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Systems Architecture:</strong>
                      <span className="text-primary font-mono">Custom Web Architecture, Inspection Intake, Automated SMS/Email Dispatch</span>
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
              <div className="rounded-2xl border border-border bg-card/40 p-6 space-y-4 flex flex-col justify-between hover:border-primary/40 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      Automation Partner
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Pastry Popup Fundraiser</h4>
                  <div className="space-y-2 text-xs leading-relaxed">
                    <div>
                      <strong className="text-foreground block">Problem Solved:</strong>
                      <span className="text-muted-foreground">High-volume flash sale order management with automated inventory locking and real-time payment validation.</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Systems Architecture:</strong>
                      <span className="text-primary font-mono">Custom Flash Sale Engine, Automated Inventory & Payment Validation</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-border/40">
                  <span className="text-xs font-mono text-muted-foreground">
                    Custom Flash Sale Architecture
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Category C: Portfolio & Client Case Highlights */}
          <div id="portfolio" className="space-y-8 scroll-mt-24">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                <span>3. Selected Brand & Platform Case Studies</span>
              </h3>
              <p className="text-xs text-muted-foreground">Custom websites, automated client engines, and operational platforms built nationwide.</p>
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

                    <h4 className="text-xl font-bold text-foreground">{item.name}</h4>

                    <div className="space-y-3 text-xs leading-relaxed">
                      <div className="bg-background/60 p-3 rounded-xl border border-border/40">
                        <strong className="text-foreground block mb-0.5">The Client / Challenge:</strong>
                        <span className="text-muted-foreground">{item.challenge}</span>
                      </div>

                      <div className="bg-background/60 p-3 rounded-xl border border-border/40">
                        <strong className="text-foreground block mb-0.5">The Solution:</strong>
                        <span className="text-primary font-mono">{item.architecture}</span>
                      </div>

                      <div className="bg-background/60 p-3 rounded-xl border border-border/40">
                        <strong className="text-foreground block mb-0.5">The Business Outcome:</strong>
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
          </div>

        </section>

        {/* Managed Care Retainers */}
        <ManagedCareRetainers />

        {/* Audit Lead Capture */}
        <AuditLeadForm />

        {/* Universal Direct Contact Intake */}
        <WorkContactForm />

      </div>
    </div>
  );
}

