"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";

export default function ProjectScopeQuiz() {
  const [needSolved, setNeedSolved] = useState("More Customers & Sales (Website/Brand)");
  const [bottleneck, setBottleneck] = useState("");
  const [nameAndBusiness, setNameAndBusiness] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
  };

  const smsText = `Custom Plan Request:\nSolving: ${needSolved}\nBottleneck: ${bottleneck}\nName & Business: ${nameAndBusiness}\nContact: ${contactInfo}`;
  const smsUrl = `sms:+16156694135?body=${encodeURIComponent(smsText)}`;

  return (
    <div
      id="intake-form"
      className="w-full max-w-3xl mx-auto p-6 md:p-10 bg-card/40 border border-primary/40 rounded-3xl shadow-2xl backdrop-blur-md text-foreground font-sans scroll-mt-24"
    >
      <div className="space-y-2 mb-6 text-center sm:text-left">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
          30-Second Inquiry
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Get Your Custom Plan & Quote
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          Tell us about your business goals and we will prepare a clear, fixed-scope action plan within 24 hours.
        </p>
      </div>

      <form
        action="https://formspree.io/f/xgaookvk"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="_to" value="justduckitsolutions@duck.com" />
        <input type="hidden" name="cc" value="ducksonx@duck.com" />
        <input
          type="hidden"
          name="_subject"
          value={`Plan & Quote Request — ${needSolved} (${nameAndBusiness.trim() || "New Inquiry"})`}
        />

        {/* Field 1: What do you need solved? */}
        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
            1. What do you need solved? *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "More Customers & Sales (Website/Brand)", value: "More Customers & Sales (Website/Brand)" },
              { label: "Eliminate Manual Work (SOP Automation)", value: "Eliminate Manual Work (SOP Automation)" },
              { label: "Both", value: "Both" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setNeedSolved(opt.value)}
                className={`p-3.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between ${
                  needSolved === opt.value
                    ? "border-primary bg-primary/10 text-primary shadow-md shadow-primary/10"
                    : "border-border bg-background/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <span>{opt.label}</span>
                {needSolved === opt.value && <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 ml-1" />}
              </button>
            ))}
          </div>
          <input type="hidden" name="What Needed Solved" value={needSolved} />
        </div>

        {/* Field 2: Where is your biggest bottleneck right now? */}
        <div>
          <label htmlFor="intake-bottleneck" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
            2. Where is your biggest bottleneck right now? *
          </label>
          <textarea
            id="intake-bottleneck"
            name="Biggest Bottleneck"
            rows={3}
            required
            value={bottleneck}
            onChange={(e) => setBottleneck(e.target.value)}
            placeholder="e.g. Current site looks dated and doesn't convert, or staff spends 15 hours a week copying data between spreadsheets..."
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          />
        </div>

        {/* Field 3 & 4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Field 3: Your Name & Business Name */}
          <div>
            <label htmlFor="intake-name" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              3. Your Name & Business Name *
            </label>
            <input
              type="text"
              id="intake-name"
              name="Name and Business"
              required
              value={nameAndBusiness}
              onChange={(e) => setNameAndBusiness(e.target.value)}
              placeholder="e.g. Sarah Jenkins / Apex Consulting"
              className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Field 4: Email or Phone for the Proposal */}
          <div>
            <label htmlFor="intake-contact" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              4. Email or Phone for the Proposal *
            </label>
            <input
              type="text"
              id="intake-contact"
              name="Contact Info"
              required
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="sarah@apex.com or (615) 555-0199"
              className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-sm transition shadow-lg shadow-primary/20 cursor-pointer"
          >
            <Send className="h-4 w-4" />
            <span>Get Your Custom Plan & Quote</span>
          </button>

          <a
            href={smsUrl}
            className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-border bg-white/5 hover:bg-white/10 text-foreground font-semibold text-xs transition cursor-pointer"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Text Details to (615) 669-4135</span>
          </a>
        </div>

        {/* Under-Button Reassurance */}
        <p className="text-xs text-muted-foreground text-center pt-2 font-mono flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
          <span>Direct scope response within 24 hours. No high-pressure calls.</span>
        </p>

        {submitted && (
          <div className="mt-4 rounded-2xl border border-primary/40 bg-primary/10 p-5 space-y-3 animate-in fade-in">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <CheckCircle2 className="h-5 w-5" />
              <span>Inquiry received! Tap to text details directly for instant priority:</span>
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
      </form>
    </div>
  );
}
