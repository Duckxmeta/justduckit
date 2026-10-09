import React from "react";
import { Globe, Cpu, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";

export default function TwoPathwaysRouter() {
  return (
    <section id="pathways" className="scroll-mt-24 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Tailored Conversion Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Select Your Objective. <span className="text-gradient-gold">Eliminate Operational Friction.</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We separate customer-facing web experiences from deep enterprise automation so both buyer tracks get zero fluff and precise technical execution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Track A: SMBs & Growing Brands */}
        <div
          id="smb-track"
          className="rounded-3xl border border-primary/30 bg-card/40 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-primary/60 transition-all shadow-xl shadow-primary/5 group"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                Track A • Growth & Conversion
              </span>
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform">
                <Globe className="h-6 w-6" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">For SMBs & Growing Brands</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Turn website traffic into predictable, paid inquiries with a high-speed web footprint and unified brand system.
              </p>
            </div>

            {/* Pain Points */}
            <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-5 space-y-2">
              <div className="text-xs font-bold text-red-400 font-mono uppercase flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>The Operational Pain:</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Outdated websites, fragmented branding, poor mobile UX, and zero organic conversion.
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-foreground font-mono uppercase tracking-wider">
                Turnkey Engineering Deliverables:
              </div>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom fast-loading web architecture with sub-second mobile rendering</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Conversion-tuned design & structural SEO setup</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Automated lead capture piping inquiries directly to SMS & CRM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40">
            <a
              href="#qualifier-form"
              data-event="cta_click"
              data-track="smb_track"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-sm transition shadow-lg shadow-primary/10 cursor-pointer"
            >
              <span>Get a Fixed-Scope Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Track B: Mid-Market & Enterprise Operations */}
        <div
          id="enterprise-track"
          className="rounded-3xl border border-primary/30 bg-card/40 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-primary/60 transition-all shadow-xl shadow-primary/5 group"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                Track B • Enterprise Automation
              </span>
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform">
                <Cpu className="h-6 w-6" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">For Mid-Market & Enterprise Operations</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Eliminate internal operational drag and manual human data bottlenecks with custom software SOP automations.
              </p>
            </div>

            {/* Pain Points */}
            <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-5 space-y-2">
              <div className="text-xs font-bold text-red-400 font-mono uppercase flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>The Operational Pain:</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Manual human bottlenecks, fragmented SaaS subscriptions, disconnected legacy databases, and slow report generation.
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-foreground font-mono uppercase tracking-wider">
                Turnkey Engineering Deliverables:
              </div>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Proprietary system audits & enterprise software SOP mapping</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Automated SOP pipelines & internal operations tooling</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom API bridges & multi-model AI document reasoning engines</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40">
            <a
              href="#qualifier-form"
              data-event="cta_click"
              data-track="enterprise_track"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-primary/40 bg-white/5 hover:bg-white/10 text-foreground font-bold text-sm transition cursor-pointer"
            >
              <span>Request an Operations Audit</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
