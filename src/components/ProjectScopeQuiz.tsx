"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, ArrowLeft, Calendar, Send } from "lucide-react";

interface StepOption {
  label: string;
  value: string;
  desc: string;
}

interface Step {
  id: "clientType" | "bottleneck" | "timeline";
  title: string;
  options: StepOption[];
}

const steps: Step[] = [
  {
    id: "clientType",
    title: "1. What best describes your business?",
    options: [
      { label: "Local Business / Main Street", value: "local", desc: "Brick & mortar, local service, booking/lead capture" },
      { label: "Growth Agency / Creator Brand", value: "growth", desc: "Content funnels, high-volume automation, digital sales" },
      { label: "Enterprise / Custom Platform", value: "enterprise", desc: "Scalable web apps, complex API workflows, Web3/database systems" },
    ],
  },
  {
    id: "bottleneck",
    title: "2. What is your primary technical bottleneck?",
    options: [
      { label: "Lead Capture & Funnel Conversion", value: "funnel", desc: "Getting views/traffic, but failing to capture and convert qualified leads" },
      { label: "Outdated Site & Poor Infrastructure", value: "infrastructure", desc: "Slow, clunky design, poor mobile UX, or missing key integrations" },
      { label: "Custom App / Automations Needed", value: "custom_tech", desc: "Need bespoke web software, database pipelines, or AI integrations" },
    ],
  },
  {
    id: "timeline",
    title: "3. What is your implementation target?",
    options: [
      { label: "Immediate Sprint (Next 1–2 weeks)", value: "sprint", desc: "Ready to launch an MVP, optimize a funnel, or fix a broken system" },
      { label: "Planned Roadmap (Next 30–60 days)", value: "roadmap", desc: "Full custom design, backend overhaul, or complex deployment" },
      { label: "Consultation & Architecture First", value: "consult", desc: "Need high-level strategy and system scoping before building" },
    ],
  },
];

const recommendations = {
  local: {
    headline: "High-Converting Local Lead Engine",
    summary: "A fast, mobile-first web footprint with automated lead delivery and direct booking workflows.",
    recommendedSprint: "Rapid Deployment / Core Infrastructure Tier",
  },
  growth: {
    headline: "Direct-Response Funnel & Capture System",
    summary: "DM-to-web funnel automation, conversion-tuned landing page, and frictionless qualified lead routing.",
    recommendedSprint: "Growth Engine Tier",
  },
  enterprise: {
    headline: "Custom Full-Stack & Systems Architecture",
    summary: "Bespoke web architecture, database design, or cross-platform integrations built to scale.",
    recommendedSprint: "Custom Engineering Tier",
  },
};

export default function ProjectScopeQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({ clientType: "", bottleneck: "", timeline: "" });

  const handleSelect = (key: "clientType" | "bottleneck" | "timeline", value: string) => {
    const updated = { ...selections, [key]: value };
    setSelections(updated);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(steps.length); // Results step
    }
  };

  const reset = () => {
    setSelections({ clientType: "", bottleneck: "", timeline: "" });
    setCurrentStep(0);
  };

  const selectedType = (selections.clientType as keyof typeof recommendations) || "growth";
  const result = recommendations[selectedType] || recommendations.growth;

  const smsText = `JustDuckIt Scope Assessment:\nClient Type: ${selections.clientType}\nBottleneck: ${selections.bottleneck}\nTimeline: ${selections.timeline}`;
  const smsUrl = `sms:+16156694135?body=${encodeURIComponent(smsText)}`;

  return (
    <div id="diagnostic" className="w-full max-w-3xl mx-auto p-6 md:p-10 bg-card/40 border border-primary/30 rounded-3xl shadow-2xl backdrop-blur-md text-foreground font-sans scroll-mt-24">
      {currentStep < steps.length ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-border/40">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
              Step {currentStep + 1} of {steps.length}
            </span>
            <div className="flex gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-10 rounded-full transition-all duration-300 ${
                    i <= currentStep ? "bg-primary shadow-sm shadow-primary/20" : "bg-border/60"
                  }`}
                />
              ))}
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            {steps[currentStep].title}
          </h3>

          <div className="space-y-3.5">
            {steps[currentStep].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(steps[currentStep].id, opt.value)}
                className="w-full text-left p-5 rounded-2xl border border-border/80 bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition duration-200 flex flex-col group cursor-pointer"
              >
                <span className="font-semibold text-base text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{opt.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </span>
                <span className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{opt.desc}</span>
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <div className="pt-2">
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to previous question</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Diagnostic Complete</span>
            </div>
            <button
              onClick={reset}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">{result.headline}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{result.summary}</p>
          </div>

          <div className="p-5 rounded-2xl bg-background/70 border border-primary/30 text-sm space-y-1">
            <div className="text-primary text-xs font-mono font-bold uppercase tracking-wider">Recommended Architecture Path</div>
            <div className="text-foreground font-semibold text-base">{result.recommendedSprint}</div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-sm transition shadow-lg shadow-primary/10 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Book Architecture Session</span>
            </a>
            <a
              href={smsUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-border bg-white/5 hover:bg-white/10 text-foreground font-semibold text-sm transition cursor-pointer"
            >
              <span>Text Scope to (615) 669-4135</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
