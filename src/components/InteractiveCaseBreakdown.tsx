"use client";

import React, { useState } from "react";
import { Shield, ArrowUpRight, Check, Zap, Layers, Cpu, Code2, Database, Workflow, FileCode } from "lucide-react";

export default function InteractiveCaseBreakdown() {
  const [activeTab, setActiveTab] = useState<"ui" | "logic">("ui");

  const caseStudies = [
    {
      id: "thinkrr",
      client: "Thinkrr.ai",
      type: "Enterprise SOP & AI Pipeline",
      metricBadges: ["Zero-bloat code", "Client-owned systems", "100% turnkey handoff"],
      uiBuild: {
        title: "Front-Facing UI Experience",
        desc: "High-contrast agent control portal with instant document upload and status monitoring.",
        highlights: ["Sub-second UI response time", "Interactive multi-agent dashboard", "Mobile-optimized review flow"],
      },
      logicDiagram: {
        title: "Back-Office Automation Logic Diagram",
        desc: "Automated document ingestion, multi-model AI routing, vector database indexing, and CRM Webhook dispatch.",
        trigger: "PDF / Doc Ingestion Event",
        steps: [
          "Document Parse & OCR Tokenizer",
          "Multi-Model Reasoning (Claude/GPT-4o)",
          "Structured JSON Webhook Dispatch",
          "Automated Client Notification Trigger",
        ],
      },
      link: "https://thinkrr.ai",
    },
    {
      id: "inspect",
      client: "Inspect Canada",
      type: "Field Operations & Intake Automation",
      metricBadges: ["Zero-bloat code", "Client-owned systems", "100% turnkey handoff"],
      uiBuild: {
        title: "Front-Facing Inspection Booking UI",
        desc: "Frictionless mobile form with location auto-complete and instant inspector schedule sync.",
        highlights: ["100/100 Mobile Performance", "Tap-to-call direct routing", "Live scheduling matrix"],
      },
      logicDiagram: {
        title: "Back-Office Field Fulfillment Pipeline",
        desc: "Form submission triggers real-time inspector SMS, auto-generates invoice draft, and updates field CRM.",
        trigger: "Field Inspection Form Submit",
        steps: [
          "Formspree/API Webhook Receive",
          "Geographic Inspector Matching",
          "Instant Twilio SMS Dispatch",
          "Automated PDF Report Generation",
        ],
      },
      link: "https://inspect.ca",
    },
    {
      id: "pastry",
      client: "Pastry Popup Fundraiser",
      type: "Flash Sale & Inventory Engine",
      metricBadges: ["Zero-bloat code", "Client-owned systems", "100% turnkey handoff"],
      uiBuild: {
        title: "High-Volume Flash Sale Interface",
        desc: "Real-time inventory countdown, instant cart checkout, and digital receipt generation.",
        highlights: ["Sub-second checkout flow", "Real-time stock ticker", "Mobile payment rails"],
      },
      logicDiagram: {
        title: "Back-Office Inventory & Payment Rails",
        desc: "Order trigger locks inventory slot, validates Stripe payment webhook, and fires automated pickup receipt.",
        trigger: "Stripe Checkout Event",
        steps: [
          "Real-time Inventory Lock",
          "Stripe Payment Validation",
          "Automated Email & SMS Confirmation",
          "Fulfillment Queue Webhook Dispatch",
        ],
      },
      link: "#qualifier-form",
    },
  ];

  return (
    <section id="proof-breakdown" className="scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
            <Shield className="h-3.5 w-3.5" />
            <span>Proof of Execution</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Front-Facing UI <span className="text-gradient-gold">Side-by-Side</span> with Back-Office Logic
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            We don't just design pretty screens—we engineer the underlying database, webhook, and automation logic that run your business.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center p-1 bg-card/60 border border-border/60 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab("ui")}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === "ui"
                ? "bg-primary text-black shadow-md shadow-primary/10"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Front-Facing UI Builds
          </button>
          <button
            onClick={() => setActiveTab("logic")}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === "logic"
                ? "bg-primary text-black shadow-md shadow-primary/10"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Back-Office Logic Diagrams
          </button>
        </div>
      </div>

      {/* Proof Metrics Badges */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold">
          <Check className="h-3.5 w-3.5" /> Zero-bloat code
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold">
          <Check className="h-3.5 w-3.5" /> Client-owned systems
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold">
          <Check className="h-3.5 w-3.5" /> 100% turnkey handoff
        </span>
      </div>

      {/* Case Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-border bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-primary/40 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20">
                  {item.type}
                </span>
                {item.link !== "#qualifier-form" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 font-mono"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-muted-foreground">Turnkey Engine</span>
                )}
              </div>

              <h3 className="text-xl font-bold text-foreground">{item.client}</h3>

              {/* Dynamic View Content */}
              {activeTab === "ui" ? (
                <div className="space-y-3 bg-background/60 p-4 rounded-2xl border border-border/40 text-xs">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <FileCode className="h-4 w-4 text-primary" />
                    <span>{item.uiBuild.title}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.uiBuild.desc}</p>
                  <ul className="space-y-1.5 pt-2 border-t border-border/40 text-[11px] text-muted-foreground">
                    {item.uiBuild.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Zap className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 bg-background/60 p-4 rounded-2xl border border-border/40 text-xs font-mono">
                  <div className="flex items-center gap-2 text-foreground font-semibold font-sans">
                    <Workflow className="h-4 w-4 text-primary" />
                    <span>{item.logicDiagram.title}</span>
                  </div>
                  <div className="bg-card p-2.5 rounded-xl border border-primary/20 text-primary text-[11px]">
                    Trigger: {item.logicDiagram.trigger}
                  </div>
                  <div className="space-y-1 pt-1">
                    {item.logicDiagram.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="text-primary font-bold">{idx + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>Execution Spec</span>
              <span className="text-primary">100% Client Owned</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
