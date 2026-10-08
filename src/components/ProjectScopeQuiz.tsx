"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, ArrowLeft, Send } from "lucide-react";

interface StepOption {
  label: string;
  value: string;
  desc: string;
}

interface Step {
  id: "businessModel" | "headache" | "desiredOutcome";
  title: string;
  options: StepOption[];
}

const steps: Step[] = [
  {
    id: "businessModel",
    title: "1. What type of business are you operating?",
    options: [
      { label: "Client & Service Provider", value: "service", desc: "Consultants, contractors, professional services, local operators" },
      { label: "High-Volume Digital / Creator Brand", value: "creator", desc: "Online courses, digital products, high-traffic media, e-commerce" },
      { label: "Custom Operations / Enterprise", value: "enterprise", desc: "Multi-location teams, internal portals, custom operational software" },
    ],
  },
  {
    id: "headache",
    title: "2. What is your biggest daily headache?",
    options: [
      { label: "Losing Potential Clients", value: "leads", desc: "People visit our site or view our content, but they don’t book or call" },
      { label: "Manual, Repetitive Work", value: "manual", desc: "Too much time spent emailing back and forth, invoicing, or tracking spreadsheets" },
      { label: "Outdated & Embarrassing Website", value: "outdated", desc: "Current setup looks old, breaks on mobile, and doesn’t represent our quality" },
    ],
  },
  {
    id: "desiredOutcome",
    title: "3. What does success look like for this sprint?",
    options: [
      { label: "Hands-off Lead Generation", value: "leadGen", desc: "A clear landing page and automatic scheduler that fills the calendar" },
      { label: "Full Operational Automation", value: "automation", desc: "Connect all my tools together so work happens automatically in the background" },
      { label: "Turnkey Digital Overhaul", value: "overhaul", desc: "Rebuild our online presence from the ground up with ongoing support" },
    ],
  },
];

const recommendations = {
  service: {
    headline: "The Client Engine",
    summary: "Turn attention into paid calls with a conversion-focused web design, frictionless mobile booking, and zero technical maintenance.",
    recommendedSprint: "The Client Engine Package",
  },
  creator: {
    headline: "Automation Suite",
    summary: "Eliminate manual data entry with instant lead notifications, automated email/SMS follow-up, and unified calendar & payment sync.",
    recommendedSprint: "Automation Suite Package",
  },
  enterprise: {
    headline: "Bespoke Platforms",
    summary: "Custom systems built to scale: private client portals, centralized operations hubs, and end-to-end custom workflows.",
    recommendedSprint: "Bespoke Platforms Package",
  },
};

export default function ProjectScopeQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({ businessModel: "", headache: "", desiredOutcome: "" });

  const handleSelect = (key: "businessModel" | "headache" | "desiredOutcome", value: string) => {
    const updated = { ...selections, [key]: value };
    setSelections(updated);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(steps.length); // Results step
    }
  };

  const reset = () => {
    setSelections({ businessModel: "", headache: "", desiredOutcome: "" });
    setCurrentStep(0);
  };

  const selectedType = (selections.businessModel as keyof typeof recommendations) || "service";
  const result = recommendations[selectedType] || recommendations.service;

  const smsText = `JustDuckIt Scope Assessment:\nBusiness: ${selections.businessModel}\nHeadache: ${selections.headache}\nDesired Outcome: ${selections.desiredOutcome}`;
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
              <span>System Scope Complete</span>
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
            <div className="text-primary text-xs font-mono font-bold uppercase tracking-wider">Recommended System Plan</div>
            <div className="text-foreground font-semibold text-base">{result.recommendedSprint}</div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-sm transition shadow-lg shadow-primary/10 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Book Strategy Session</span>
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

