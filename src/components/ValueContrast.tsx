import { CheckCircle2, XCircle, Zap, ShieldAlert, ShieldCheck, Cpu } from "lucide-react";

export default function ValueContrast() {
  return (
    <section className="scroll-mt-24 rounded-3xl border border-border bg-card/30 p-8 sm:p-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
          <Cpu className="h-3.5 w-3.5" />
          <span>The Technology Gap</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Enterprise-Grade Engineering. <span className="text-gradient-gold">Built for Middle Tennessee.</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Why settle for outdated WordPress templates and agency overhead when you can have sub-second static speed and custom software architecture?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {/* Column 1: Traditional Agency CMS */}
        <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Traditional Agency CMS</h3>
              <p className="text-xs text-red-400 font-mono">WordPress, Elementor & Plugin Bloat</p>
            </div>
          </div>

          <ul className="space-y-4 text-xs text-muted-foreground">
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">3–5+ Second Load Times:</strong> Heavy database queries and unoptimized third-party plugins destroy mobile conversion rates.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Constant Breakage & Vulnerabilities:</strong> Weekly plugin updates break layouts, cause database errors, and leave sites open to security exploits.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Agency Retainer Layer:</strong> Paying $500+/mo to an agency just to click "Update Plugin" on a broken dashboard.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Rigid Templating:</strong> Locked into pre-made themes that look like thousands of other local business sites.
              </span>
            </li>
          </ul>
        </div>

        {/* Column 2: JustDuckIt Modern Stack */}
        <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 sm:p-8 space-y-6 shadow-xl shadow-primary/5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/30 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">JustDuckIt Modern Stack</h3>
              <p className="text-xs text-primary font-mono font-semibold">Next.js 16, Vercel Edge & AI Automation</p>
            </div>
          </div>

          <ul className="space-y-4 text-xs text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Sub-Second Speed (100/100 Core Web Vitals):</strong> Pre-rendered static pages served instantly globally via Vercel Edge.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Zero Plugin Bloat & Unhackable Core:</strong> Static React/Next.js architecture with zero database vulnerabilities or plugin updates.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">Custom AI & API Integrations:</strong> Direct lead routing via SMS/email webhooks, automated CRM booking, and custom AI agents.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground block">One-on-One Direct Engineer Access:</strong> Build directly with Kyle Kinkin. No account managers, no middle layer.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
