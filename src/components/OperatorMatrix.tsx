import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, Cpu } from "lucide-react";

export default function OperatorMatrix() {
  return (
    <section className="scroll-mt-24 rounded-3xl border border-border bg-card/30 p-8 sm:p-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
          <Cpu className="h-3.5 w-3.5" />
          <span>The Systems Advantage</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Why Random Websites Fail. <span className="text-gradient-gold">Why Automated Systems Win.</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Comparing traditional ad-hoc website management against modern business automation architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {/* Operator A */}
        <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Operator A (Ad-Hoc Setup)</h3>
              <p className="text-xs text-red-400 font-mono">Traditional Agency & Fragile Tools</p>
            </div>
          </div>

          <ul className="space-y-4 text-xs text-muted-foreground">
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Slow Load Speed & Crashes:</strong> Unoptimized setups destroy visitor retention and lose potential clients.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Manual Lead Traps:</strong> Leads sit in unseen inboxes for hours instead of notifying your phone instantly.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Agency Middle Layer:</strong> Paying high monthly retainers to account managers who provide slow responses.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Repetitive Daily Work:</strong> Hours wasted manually emailing back and forth, copying spreadsheet rows, and invoicing.
              </span>
            </li>
          </ul>
        </div>

        {/* Operator B */}
        <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 sm:p-8 space-y-6 shadow-xl shadow-primary/5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/30 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Operator B (Automated System)</h3>
              <p className="text-xs text-primary font-mono font-semibold">JustDuckIt Automated Systems Stack</p>
            </div>
          </div>

          <ul className="space-y-4 text-xs text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Maximum Uptime & High Speed:</strong> Fast, reliable systems that never crash when traffic spikes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Instant Lead Routing:</strong> Automated lead capture that pipes inquiries straight to your phone & CRM.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Direct Partner Support:</strong> Work directly with your dedicated systems designer—zero agency fluff.
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

