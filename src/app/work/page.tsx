import type { Metadata } from "next";
import { Check, ArrowRight, ShieldCheck, AlertTriangle, Sparkles, Globe, Zap, Clock, Key, FileText, CheckCircle2 } from "lucide-react";
import ProjectScopeQuiz from "@/components/ProjectScopeQuiz";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Websites That Bring in Customers. Automations That Run Your Back Office. | Kyle Kinkin — JustDuckIt",
  description:
    "We eliminate the two biggest profit leaks in modern business: lost sales from outdated websites and wasted payroll from manual administrative work.",
  keywords: [
    "High-Converting Websites",
    "Business Automation",
    "Automated SOPs",
    "Lead Capture",
    "Kyle Kinkin",
    "JustDuckIt",
    "Nationwide Web Solutions",
  ],
  alternates: { canonical: "https://justduckit.xyz/work" },
};

export default function WorkPage() {
  const track1Bullets = [
    "Custom, professional websites designed specifically to make booking or buying effortless",
    "Clear, authoritative branding that establishes instant trust in your market",
    "Automated customer lead capture that alerts you the second an inquiry arrives",
  ];

  const track2Bullets = [
    "Direct connections between your existing business tools so work flows automatically",
    "Hands-off standard operating procedures that execute without human babysitting",
    "Real-time tracking so leadership has instant visibility without asking for status updates",
  ];

  const buySteps = [
    {
      num: "01",
      title: "Tell Us What Needs Fixing",
      desc: "Submit the 30-second form below with your primary bottleneck.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Receive Your Action Plan",
      desc: "We send a clear, fixed-scope proposal and timeline within 24 hours—no sales runarounds.",
      icon: Clock,
    },
    {
      num: "03",
      title: "We Build & Launch",
      desc: "We install the solution, hand over the keys, and you own 100% of the finished asset.",
      icon: Key,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen pb-20 md:pb-0 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 space-y-24">
        
        {/* ==================================================================== */}
        {/* SECTION 1: THE PROBLEM WE SOLVE (Hero & Diagnosis) */}
        {/* ==================================================================== */}
        <section id="problem" className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
          
          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Turnkey Web & Operations Architecture</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-[1.15]">
              Websites That Bring in Customers. <span className="text-gradient-gold">Automations That Run Your Back Office.</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-normal">
              We eliminate the two biggest profit leaks in modern business: lost sales from outdated websites and wasted payroll from manual administrative work.
            </p>

            <div className="pt-2">
              <a
                href="#intake-form"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-extrabold text-sm px-8 py-4 hover:bg-primary-hover active:scale-[0.98] transition-all shadow-xl shadow-primary/20 cursor-pointer"
              >
                <span>Get Your Custom Plan & Quote</span>
                <ArrowRight className="h-4 w-4 text-black" />
              </a>
            </div>
          </div>

          {/* Side-by-Side Pain Points (High Contrast Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            
            {/* Card A: SMBs */}
            <div className="rounded-3xl border border-border/80 bg-card/40 backdrop-blur-md p-8 sm:p-10 space-y-6 hover:border-primary/40 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    For Small & Medium Businesses
                  </span>
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground">Losing Easy Business to Competitors</h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground block mb-1">The Problem:</strong>
                  You do great work, but your website looks dated, doesn't show up on search, and fails to turn clicks into paying customers. You are losing easy business to competitors with better storefronts.
                </p>
              </div>

              <div className="pt-4 border-t border-border/40">
                <a
                  href="#track-1"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline font-mono uppercase tracking-wider"
                >
                  <span>See Web Solution</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Card B: Operations & Enterprise Teams */}
            <div className="rounded-3xl border border-border/80 bg-card/40 backdrop-blur-md p-8 sm:p-10 space-y-6 hover:border-primary/40 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    For Operations & Enterprise Teams
                  </span>
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground">Wasted Payroll Eating Your Margin</h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground block mb-1">The Problem:</strong>
                  Your staff wastes dozens of hours each week copying data between software, tracking down approvals, and managing routine steps manually. Human error and back-office friction are eating your margin.
                </p>
              </div>

              <div className="pt-4 border-t border-border/40">
                <a
                  href="#track-2"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline font-mono uppercase tracking-wider"
                >
                  <span>See Automation Solution</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* ==================================================================== */}
        {/* SECTION 2: HOW WE SOLVE IT (The Solution) */}
        {/* ==================================================================== */}
        <section id="solution" className="space-y-12 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Proven Business Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Straightforward Solutions. <span className="text-gradient-gold">Built to Deliver ROI.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Track 1 Solution */}
            <div
              id="track-1"
              className="rounded-3xl border border-primary/30 bg-card/40 backdrop-blur-md p-8 sm:p-10 space-y-8 hover:border-primary/60 transition-all flex flex-col justify-between scroll-mt-24"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    Track 1
                  </span>
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                  High-Converting Websites & Brand Identity
                </h3>

                <ul className="space-y-3.5 text-sm text-muted-foreground">
                  {track1Bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Result Box */}
              <div className="p-5 rounded-2xl bg-primary/10 border border-primary/30 space-y-1">
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  The Result:
                </div>
                <div className="text-sm sm:text-base font-bold text-foreground">
                  A turnkey online asset that pays for itself in customer conversions.
                </div>
              </div>
            </div>

            {/* Track 2 Solution */}
            <div
              id="track-2"
              className="rounded-3xl border border-primary/30 bg-card/40 backdrop-blur-md p-8 sm:p-10 space-y-8 hover:border-primary/60 transition-all flex flex-col justify-between scroll-mt-24"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    Track 2
                  </span>
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                  Automated Standard Operating Procedures (SOPs)
                </h3>

                <ul className="space-y-3.5 text-sm text-muted-foreground">
                  {track2Bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Result Box */}
              <div className="p-5 rounded-2xl bg-primary/10 border border-primary/30 space-y-1">
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  The Result:
                </div>
                <div className="text-sm sm:text-base font-bold text-foreground">
                  Hundreds of payroll hours saved and an error-free operational backbone.
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ==================================================================== */}
        {/* SECTION 3: HOW TO BUY (3-Step Purchase Process & Intake) */}
        {/* ==================================================================== */}
        <section id="how-to-buy" className="space-y-12 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
              <Clock className="h-3.5 w-3.5" />
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              How to Work With Us
            </h2>
          </div>

          {/* 3 Step Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buySteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 space-y-4 hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-extrabold font-mono text-primary">{step.num}</span>
                      <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* The Conversion Anchor Intake Form */}
          <ProjectScopeQuiz />
        </section>

      </div>

      {/* Persistent Mobile Bottom CTA */}
      <MobileStickyCTA />
    </div>
  );
}
