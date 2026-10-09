"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, ArrowLeft, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export default function ProjectScopeQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    solving: "",
    timeline: "",
    fullName: "",
    emailOrPhone: "",
    projectBrief: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const step1Options = [
    { label: "New Website & Brand", value: "New Website & Brand", desc: "Custom web design, fast static architecture, conversion optimization" },
    { label: "Re-platforming", value: "Re-platforming", desc: "Migrate away from WordPress/Shopify to zero-maintenance high-speed infrastructure" },
    { label: "Enterprise SOP Automation", value: "Enterprise SOP Automation", desc: "Eliminate manual data entry, connect internal SaaS, automated reporting" },
    { label: "Custom Software Consulting", value: "Custom Software Consulting", desc: "Bespoke internal portals, multi-model AI routing, complex API integrations" },
  ];

  const step2Options = [
    { label: "ASAP (<30 Days)", value: "ASAP (<30 Days)", desc: "Immediate sprint ready for kickoff within 1–2 weeks" },
    { label: "1-3 Months", value: "1-3 Months", desc: "Planned roadmap for upcoming quarter execution" },
    { label: "Strategic Advisory", value: "Strategic Advisory", desc: "Technical evaluation, architecture scoping, and system audit first" },
  ];

  const handleOptionSelect = (key: "solving" | "timeline", val: string) => {
    setSelections((prev) => ({ ...prev, [key]: val }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
  };

  const reset = () => {
    setSelections({
      solving: "",
      timeline: "",
      fullName: "",
      emailOrPhone: "",
      projectBrief: "",
    });
    setCurrentStep(0);
    setSubmitted(false);
  };

  const smsText = `Technical Scope Request:\nSolving: ${selections.solving}\nTimeline: ${selections.timeline}\nName: ${selections.fullName}\nContact: ${selections.emailOrPhone}\nBrief: ${selections.projectBrief}`;
  const smsUrl = `sms:+16156694135?body=${encodeURIComponent(smsText)}`;

  return (
    <div
      id="qualifier-form"
      className="w-full max-w-3xl mx-auto p-6 md:p-10 bg-card/40 border border-primary/40 rounded-3xl shadow-2xl backdrop-blur-md text-foreground font-sans scroll-mt-24"
    >
      <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Interactive 60-Second Technical Scope</span>
        </div>

        {currentStep > 0 && (
          <button
            onClick={reset}
            className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Step Progress Dots */}
      <div className="flex gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
              i <= currentStep ? "bg-primary shadow-sm shadow-primary/20" : "bg-border/60"
            }`}
          />
        ))}
      </div>

      {/* STEP 1: What are we solving? */}
      {currentStep === 0 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            1. What are we solving?
          </h3>

          <div className="space-y-3">
            {step1Options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleOptionSelect("solving", opt.value)}
                data-event="cta_click"
                data-track={`step1_${opt.value}`}
                className="w-full text-left p-5 rounded-2xl border border-border/80 bg-background/60 hover:border-primary/60 hover:bg-primary/10 transition duration-200 flex flex-col group cursor-pointer"
              >
                <span className="font-semibold text-base text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{opt.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </span>
                <span className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: Current timeline & priority? */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              2. Current timeline & priority?
            </h3>
            <span className="text-xs font-mono text-primary font-bold">{selections.solving}</span>
          </div>

          <div className="space-y-3">
            {step2Options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleOptionSelect("timeline", opt.value)}
                data-event="cta_click"
                data-track={`step2_${opt.value}`}
                className="w-full text-left p-5 rounded-2xl border border-border/80 bg-background/60 hover:border-primary/60 hover:bg-primary/10 transition duration-200 flex flex-col group cursor-pointer"
              >
                <span className="font-semibold text-base text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{opt.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </span>
                <span className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{opt.desc}</span>
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setCurrentStep(0)}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to step 1</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Direct contact details + Project Brief */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              3. Contact Details & Brief Scope
            </h3>
            <p className="text-xs text-muted-foreground">
              Scope Summary: <strong className="text-foreground">{selections.solving}</strong> • Target Timeline: <strong className="text-foreground">{selections.timeline}</strong>
            </p>
          </div>

          <form
            action="https://formspree.io/f/xgaookvk"
            method="POST"
            onSubmit={handleFormSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="_to" value="justduckitsolutions@duck.com" />
            <input type="hidden" name="cc" value="ducksonx@duck.com" />
            <input
              type="hidden"
              name="_subject"
              value={`Technical Scope Inquiry — ${selections.solving} (${selections.timeline})`}
            />
            <input type="hidden" name="Objective" value={selections.solving} />
            <input type="hidden" name="Timeline" value={selections.timeline} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="scope-name" className="block text-xs font-medium text-muted-foreground mb-1">
                  Full Name / Company Name *
                </label>
                <input
                  type="text"
                  id="scope-name"
                  name="Full Name"
                  required
                  value={selections.fullName}
                  onChange={(e) => setSelections({ ...selections, fullName: e.target.value })}
                  placeholder="e.g. Alex Morgan / Acme Corp"
                  className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="scope-contact" className="block text-xs font-medium text-muted-foreground mb-1">
                  Best Email or Phone (SMS) *
                </label>
                <input
                  type="text"
                  id="scope-contact"
                  name="Contact Details"
                  required
                  value={selections.emailOrPhone}
                  onChange={(e) => setSelections({ ...selections, emailOrPhone: e.target.value })}
                  placeholder="alex@acme.com or (615) 555-0199"
                  className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="scope-brief" className="block text-xs font-medium text-muted-foreground mb-1">
                Project Brief & Operational Bottlenecks (Optional)
              </label>
              <textarea
                id="scope-brief"
                name="Project Brief"
                rows={3}
                value={selections.projectBrief}
                onChange={(e) => setSelections({ ...selections, projectBrief: e.target.value })}
                placeholder="Briefly describe what you need built, existing tools, or bottlenecks..."
                className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="submit"
                data-event="cta_click"
                data-track="qualifier_form_submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-sm transition shadow-lg shadow-primary/20 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Submit Technical Scope</span>
              </button>

              <a
                href={smsUrl}
                data-event="cta_click"
                data-track="qualifier_sms_direct"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-border bg-white/5 hover:bg-white/10 text-foreground font-semibold text-xs transition cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 text-primary" />
                <span>Text Scope to (615) 669-4135</span>
              </a>
            </div>

            {/* Form Microcopy */}
            <p className="text-[11px] text-muted-foreground text-center pt-2 font-mono flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Direct response within 24 hours. No sales runarounds, straight technical scope.</span>
            </p>
          </form>

          {submitted && (
            <div className="mt-4 rounded-2xl border border-primary/40 bg-primary/10 p-5 space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <CheckCircle2 className="h-5 w-5" />
                <span>Scope received! Tap to text details directly for immediate priority:</span>
              </div>
              <a
                href={smsUrl}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary hover:underline bg-background/80 px-4 py-3 rounded-xl border border-primary/30 break-all"
              >
                <MessageSquare className="h-4 w-4 flex-shrink-0" />
                <span>{smsText}</span>
              </a>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={() => setCurrentStep(1)}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to step 2</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
