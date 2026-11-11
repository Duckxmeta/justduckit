import type { Metadata } from "next";
import { Check, ArrowRight, ShieldCheck, AlertTriangle, Sparkles, Globe, Zap, Clock, Key, FileText } from "lucide-react";
import ProjectScopeQuiz from "@/components/ProjectScopeQuiz";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Websites That Bring in Customers. Automations That Run Your Back Office. | Kyle Kinkin — JustDuckIt",
  description:
    "Custom websites and simple automations for Middle Tennessee businesses. Serving Smithville, Cookeville, and the surrounding area.",
  keywords: [
    "High-Converting Websites",
    "Business Automation",
    "Kyle Kinkin",
    "JustDuckIt",
    "Smithville TN web design",
    "Cookeville web developer",
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

  const recentWork = [
    {
      name: "Local business sites",
      result: "Clean, fast sites built for real local clients.",
      href: "/articles",
      image: "/media/Banditselfie.jpg",
    },
    {
      name: "Sanctuary & content",
      result: "Ongoing digital work tied to real-world animal care.",
      href: "/about",
      image: "/media/DDMiami.gif",
    },
    {
      name: "Automation projects",
      result: "Simple systems that remove repetitive admin.",
      href: "/work#intake-form",
      image: "/media/Banditselfie.jpg",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen pb-20 md:pb-0 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 space-y-24">
        
        {/* Hero */}
        <section id="problem" className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Turnkey Web & Operations</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-[1.15]">
              Websites That Bring in Customers. <span className="text-gradient-gold">Automations That Run Your Back Office.</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-normal">
              Custom sites, local search, and simple systems that reduce manual work. Serving Smithville, DeKalb County, Cookeville, and Middle Tennessee.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#intake-form"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-extrabold text-sm px-8 py-4 hover:bg-primary-hover active:scale-[0.98] transition-all shadow-xl shadow-primary/20 cursor-pointer"
              >
                <span>Get a custom plan</span>
                <ArrowRight className="h-4 w-4 text-black" />
              </a>
              <a href="tel:+16156694135" className="text-sm font-semibold text-primary hover:underline">
                (615) 669-4135
              </a>
            </div>
          </div>

          {/* Recent work */}
          <div className="pt-8">
            <h2 className="text-xl font-bold text-foreground mb-4 text-center">Recent work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recentWork.map((item) => (
                <a key={item.name} href={item.href} className="rounded-2xl border border-border p-4 space-y-2 hover:border-primary/40 transition block">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.result}</p>
                  <span className="text-xs font-semibold text-primary inline-flex items-center gap-1">
                    View <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Pain points - keep but shortened */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <div className="rounded-3xl border border-border/80 bg-card/40 backdrop-blur-md p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  For Small Businesses
                </span>
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Losing Easy Business to Competitors</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You do great work, but your website looks dated, doesn't show up on search, and fails to turn clicks into customers.
              </p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-card/40 backdrop-blur-md p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  For Operations
                </span>
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Wasted Time on Manual Work</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Staff spends hours copying data, chasing approvals, and managing routine steps by hand.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions - softened claim */}
        <section id="solution" className="space-y-12 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Practical Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Straightforward Solutions. <span className="text-gradient-gold">Built to Work.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div id="track-1" className="rounded-3xl border border-primary/30 bg-card/40 p-8 sm:p-10 space-y-8 scroll-mt-24">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Track 1</span>
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground">High-Converting Websites & Brand Identity</h3>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                {track1Bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 rounded-2xl bg-primary/10 border border-primary/30">
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider">The Result:</div>
                <div className="text-sm font-bold text-foreground">A clear online presence that turns visitors into inquiries.</div>
              </div>
            </div>
            <div id="track-2" className="rounded-3xl border border-primary/30 bg-card/40 p-8 sm:p-10 space-y-8 scroll-mt-24">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Track 2</span>
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground">Automated Standard Operating Procedures</h3>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                {track2Bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 rounded-2xl bg-primary/10 border border-primary/30">
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider">The Result:</div>
                <div className="text-sm font-bold text-foreground">Less manual work and fewer errors on routine tasks.</div>
              </div>
            </div>
          </div>
        </section>

        {/* How to buy + form */}
        <section id="how-to-buy" className="space-y-12 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
              <Clock className="h-3.5 w-3.5" />
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">How to Work With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buySteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="rounded-3xl border border-border bg-card/40 p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-mono text-primary">{step.num}</span>
                    <IconComp className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
          <ProjectScopeQuiz />
        </section>

        {/* Sovereign SI - keep */}
        <section id="sovereign-si" className="scroll-mt-24">
          <div className="rounded-3xl border border-border bg-card/30 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Sovereign SI</span>
              <h2 className="text-2xl font-extrabold text-foreground">Sovereign Super Intelligence</h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                Explore Sovereign SI, the super intelligence platform from our partners at Arsenal.
              </p>
            </div>
            <a
              href="https://arsenal.world/?ref=KYLE-ACDF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-primary/40 bg-white/5 hover:bg-white/10 text-foreground font-bold text-sm transition flex-shrink-0"
            >
              <span>Visit Sovereign SI</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </a>
          </div>
        </section>

      </div>
      <MobileStickyCTA />
    </div>
  );
}
