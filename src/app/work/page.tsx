import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowUpRight, Video, Globe, Shield, Sparkles, Clock, CreditCard } from "lucide-react";
import WorkContactForm from "@/components/WorkContactForm";

export const metadata: Metadata = {
  title: "Work with me | Kyle Kinkin — JustDuckIt",
  description:
    "Kyle Kinkin (JustDuckIt) builds websites for local businesses and shoots short social videos. Fixed price, one person, no agency layer.",
  alternates: { canonical: "https://justduckit.xyz/work" },
};

export default function WorkPage() {
  const packages = [
    {
      name: "Starter",
      price: "$900",
      description: "Best for a simple local service page.",
      delivery: "2–3 week delivery",
      features: [
        "Up to 5 pages (home, about, services, contact, one extra)",
        "Mobile layout & contact form",
        "Basic SEO titles",
        "2 revision rounds",
      ],
      paymentPlan: "$450 now, then $150/mo for 3 months",
      highlight: false,
    },
    {
      name: "Business",
      price: "$1,600",
      description: "Best for detailers, stylists, marinas, and shops.",
      delivery: "3–5 week delivery",
      features: [
        "Up to 10 pages",
        "Service or package pages",
        "Gallery & reviews section",
        "Google listing and map links",
        "Analytics integration",
        "3 revision rounds",
      ],
      paymentPlan: "$800 now, then $200/mo for 4 months",
      highlight: true,
    },
    {
      name: "Custom",
      price: "$2,800",
      description: "Best for rescues, booking businesses, or anything beyond a brochure.",
      delivery: "Scoped on a call",
      features: [
        "Booking, payments, listings, or donate flow",
        "Scoped on a kick-off call",
        "Extra features quoted separately",
      ],
      paymentPlan: "$1,400 now, then $200/mo for 7 months",
      highlight: false,
    },
  ];

  const portfolio = [
    {
      name: "Relentless Mobile Details",
      category: "Auto Detailing",
      url: "https://relentlessmobiledetails.com",
    },
    {
      name: "Kit Kat Alley Rescue",
      category: "Animal Rescue",
      url: "https://kitkatalleyrescue.org",
    },
    {
      name: "Beauty by Rilee",
      category: "Stylist & Salon",
      url: "https://beautyby-rilee-bol99850f-flowmarket1-3159s-projects.vercel.app/",
    },
    {
      name: "Hidden Harbor Marina",
      category: "Marina & Boating",
      url: "https://hidden-harbor-8j3ysrtkj-flowmarket1-3159s-projects.vercel.app/",
    },
    {
      name: "Vee",
      category: "Personal brand",
      url: "https://veesite-rgkyo2lpo-flowmarket1-3159s-projects.vercel.app/",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 space-y-20">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
            <Globe className="h-3.5 w-3.5" />
            <span>Local Web & Video</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-tight">
            Sites for local businesses. <span className="text-gradient-gold">One person, fixed price, no agency layer.</span>
          </h1>

          <p className="text-lg leading-8 text-muted-foreground">
            Kyle Kinkin (JustDuckIt) builds websites for local businesses and can shoot short social videos when the job is close enough to drive to. Half to start. The rest before launch, or on a short monthly plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#packages"
              className="flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3.5 hover:bg-primary-hover active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-primary/10"
            >
              <span>View Packages</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-border glass-panel text-sm px-6 py-3.5 hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
            </a>
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
              Clear scope, fixed pricing, and flexible payment terms. Domain and hosting are client costs.
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
                    <p className="text-xs text-muted-foreground mt-1">{pkg.description}</p>
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
                  <div className="bg-background/60 rounded-xl p-3.5 border border-border/40 text-xs">
                    <span className="font-semibold text-foreground block mb-0.5 flex items-center gap-1">
                      <CreditCard className="h-3.5 w-3.5 text-primary" />
                      Payment Plan Option:
                    </span>
                    <span className="text-muted-foreground font-mono">{pkg.paymentPlan}</span>
                  </div>
                  <a
                    href="#contact"
                    className={`block w-full text-center rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
                      pkg.highlight
                        ? "bg-primary text-black hover:bg-primary-hover shadow-md shadow-primary/10"
                        : "border border-border bg-white/5 hover:bg-white/10 text-foreground"
                    }`}
                  >
                    Select {pkg.name}
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
                <strong className="text-foreground">Starter package:</strong> Full payment up front preferred, or use the 3-month payment plan ($450 now, then $150/mo for 3 months).
              </p>
              <p>
                <strong className="text-foreground">Business & Custom packages:</strong> 50% to start, 50% before the site goes live. Monthly payment plans are also available on both options.
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

        {/* Portfolio Section */}
        <section className="space-y-8">
          <div className="border-b border-border pb-4">
            <h2 className="text-2xl font-bold text-foreground">Completed Work</h2>
            <p className="text-sm text-muted-foreground mt-1">Recent client sites and live builds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card/30 p-6 hover:border-primary/40 hover:bg-card/60 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-semibold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {site.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {site.name}
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 text-xs font-mono text-muted-foreground truncate">
                  {site.url.replace(/^https?:\/\//, "")}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Simple Lead Form Contact Section */}
        <WorkContactForm />

      </div>
    </div>
  );
}
