import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight, Globe, Shield, Sparkles, Clock, CreditCard, Cpu, Layers, Send, Zap, ArrowRight, Code2 } from "lucide-react";
import WorkContactForm from "@/components/WorkContactForm";
import ValueContrast from "@/components/ValueContrast";
import AuditLeadForm from "@/components/AuditLeadForm";
import ManagedCareRetainers from "@/components/ManagedCareRetainers";
import ProjectScopeQuiz from "@/components/ProjectScopeQuiz";
import OperatorMatrix from "@/components/OperatorMatrix";
import TechStackTrustGrid from "@/components/TechStackTrustGrid";
import TwoPathwaysRouter from "@/components/TwoPathwaysRouter";
import InteractiveCaseBreakdown from "@/components/InteractiveCaseBreakdown";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Websites Built to Convert. Automations Built to Scale. | Kyle Kinkin — JustDuckIt",
  description:
    "We design high-performance digital presence for growing brands and engineer custom software SOP automations that eliminate enterprise operational drag.",
  keywords: [
    "Systems-Driven Web Design",
    "Enterprise Operations",
    "Websites Built to Convert",
    "Automations Built to Scale",
    "Custom Software SOP",
    "Kyle Kinkin",
    "JustDuckIt",
    "Nationwide Web Architecture",
  ],
  alternates: { canonical: "https://justduckit.xyz/work" },
};

export default function WorkPage() {
  const packages = [
    {
      name: "Starter Engine",
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
      ctaHref: "#qualifier-form",
      external: false,
    },
    {
      name: "Business Engine",
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
      ctaHref: "#qualifier-form",
      external: false,
    },
    {
      name: "Enterprise Architecture",
      price: "Scoped on Call",
      description: "Custom software SOP automations, internal portals, and multi-system integrations.",
      delivery: "Scoped on call",
      features: [
        "Multi-system integrations",
        "Proprietary SOP mapping",
        "Scoped on strategy call",
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

  return (
    <div className="relative isolate overflow-hidden min-h-screen pb-16 md:pb-0">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 space-y-20">
        
        {/* 1. HERO SECTION (Above the Fold) */}
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="h-4 w-4" />
            <span>Systems-Driven Web Design & Enterprise Operations</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-tight">
            Websites Built to Convert. <span className="text-gradient-gold">Automations Built to Scale.</span>
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-normal">
            We design high-performance digital presence for growing brands and engineer custom software SOP automations that eliminate enterprise operational drag.
          </p>

          {/* Dual Primary CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#smb-track"
              data-event="cta_click"
              data-track="hero_smb_cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-black font-extrabold text-sm px-8 py-4 hover:bg-primary-hover active:scale-[0.98] transition-all shadow-xl shadow-primary/20 cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>Launch Your Brand & Web</span>
            </a>

            <a
              href="#enterprise-track"
              data-event="cta_click"
              data-track="hero_enterprise_cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-white/5 hover:bg-white/10 text-foreground font-extrabold text-sm px-8 py-4 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Scope Automation & Architecture</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </a>
          </div>

          {/* Trust Indicators: Tech Stack Competency Grid */}
          <TechStackTrustGrid />
        </div>

        {/* 2. THE "TWO PATHWAYS" AUDIENCE ROUTER */}
        <TwoPathwaysRouter />

        {/* 3. PROOF OF EXECUTION (Interactive Case Breakdown) */}
        <InteractiveCaseBreakdown />

        {/* 4. INTERACTIVE 60-SECOND INQUIRY FORM (Conversion Anchor) */}
        <section id="diagnostic-anchor" className="scroll-mt-24 space-y-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Ready to Eliminate Friction?
            </h2>
            <p className="text-xs text-muted-foreground">
              Complete the 60-second qualifier below for direct technical scoping within 24 hours.
            </p>
          </div>
          <ProjectScopeQuiz />
        </section>

        {/* 5. OPERATOR CONTRAST MATRIX & VALUE COMPARISON */}
        <OperatorMatrix />
        <ValueContrast />

        {/* 6. TURNKEY WEBSITE PACKAGES & ENTERPRISE ARCHITECTURE */}
        <section id="packages" className="space-y-8 scroll-mt-24">
          <div className="border-b border-border pb-6 text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
              <Globe className="h-3.5 w-3.5" />
              <span>Fixed-Scope & Enterprise Packages</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Transparent Engineering Tiers
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl">
              From turnkey fixed-scope brand engines to enterprise software advisory and custom SOP automation.
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
                      <span className="text-3xl font-extrabold text-foreground">{pkg.price}</span>
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
                    data-event="cta_click"
                    data-track={`package_${pkg.name}`}
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

        {/* 7. MANAGED CARE RETAINERS */}
        <ManagedCareRetainers />

        {/* 8. FREE 15-MINUTE TECH & SPEED AUDIT */}
        <AuditLeadForm />

        {/* 9. DIRECT INTAKE FORM */}
        <WorkContactForm />

      </div>

      {/* MOBILE STICKY BOTTOM CTA */}
      <MobileStickyCTA />
    </div>
  );
}
