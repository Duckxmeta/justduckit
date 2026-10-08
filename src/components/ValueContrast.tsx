import { CheckCircle2, XCircle, Zap, ShieldAlert } from "lucide-react";

export default function ValueContrast() {
  return (
    <section className="scroll-mt-24 rounded-3xl border border-border bg-card/30 p-8 sm:p-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
          <Zap className="h-3.5 w-3.5" />
          <span>The Business Outcome Gap</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Turnkey Business Automation. <span className="text-gradient-gold">Available Nationwide.</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Why settle for slow, bloated websites and agency overhead when you can have lightning-fast systems and automated client funnels?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {/* Column 1: Traditional Agency Setup */}
        <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Traditional Agency Setup</h3>
              <p className="text-xs text-red-400 font-mono">Slow Sites & Manual Overwork</p>
            </div>
          </div>

          <ul className="space-y-4 text-xs text-muted-foreground">
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">3–5+ Second Load Times:</strong> Heavy, unoptimized websites turn prospective clients away before they even view your offer.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Constant Maintenance Breakdown:</strong> Outdated plugins and brittle templates frequently break layouts and cause site downtime.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Expensive Monthly Overhead:</strong> Paying monthly agency retainer fees for minimal work and delayed responses.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Manual Back-and-Forth:</strong> Spending hours tracking client details by hand, manual invoicing, and back-and-forth scheduling.
              </span>
            </li>
          </ul>
        </div>

        {/* Column 2: JustDuckIt Modern Systems */}
        <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 sm:p-8 space-y-6 shadow-xl shadow-primary/5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/30 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">JustDuckIt Modern Systems</h3>
              <p className="text-xs text-primary font-mono font-semibold">Custom Web Architecture & Automation</p>
            </div>
          </div>

          <ul className="space-y-4 text-xs text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Instant Load Speed:</strong> Fast, reliable systems that never crash when traffic spikes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Zero Maintenance Hassle:</strong> Secure, hands-off platform built for maximum reliability with zero maintenance hassle.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Automated Lead Capture:</strong> Automated lead capture that pipes inquiries straight to your phone & CRM.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Hands-Off Workflows:</strong> Hands-off workflows that eliminate manual data entry, invoicing, and scheduling.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

