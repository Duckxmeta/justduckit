"use client";

import { useState } from "react";
import { Gauge, Send, CheckCircle, MessageSquare, Phone } from "lucide-react";

export default function AuditLeadForm() {
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const bName = businessName.trim() || "[Business]";
  const wUrl = websiteUrl.trim() || "[Website URL]";
  const cInfo = contactInfo.trim() || "[Contact Info]";

  const smsText = `Audit Request: ${bName} / ${wUrl} / ${cInfo}`;
  const smsUrl = `sms:+16156694135?body=${encodeURIComponent(smsText)}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
  };

  return (
    <section id="audit" className="scroll-mt-24 rounded-3xl border border-primary/30 bg-primary/5 p-6 sm:p-10 space-y-6 shadow-xl shadow-primary/5">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
          <Gauge className="h-3.5 w-3.5" />
          <span>Free 15-Minute Tech Audit</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground">
          Get Your Free 15-Minute Site Speed & Tech Audit
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Enter your website below. I'll personally run a Core Web Vitals diagnostic, mobile speed check, and SEO infrastructure review—then text or email you a 15-minute action plan. Zero pressure.
        </p>
      </div>

      <form
        action="https://formspree.io/f/ducksonx@duck.com"
        method="POST"
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-background/70 p-6 sm:p-8 space-y-4"
      >
        <input type="hidden" name="_to" value="justduckitsolutions@duck.com" />
        <input type="hidden" name="cc" value="ducksonx@duck.com" />
        <input
          type="hidden"
          name="_subject"
          value={`Site Audit Request — ${businessName.trim() || "New Lead"}`}
        />
        <input type="hidden" name="source" value="Source: justduckit.xyz (Audit Form)" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="audit-business" className="block text-xs font-medium text-muted-foreground mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="audit-business"
              name="Business Name"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Smithville Auto Repair"
              className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="audit-url" className="block text-xs font-medium text-muted-foreground mb-1">
              Current Website URL
            </label>
            <input
              type="text"
              id="audit-url"
              name="Website URL"
              required
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="e.g. mybusiness.com"
              className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="audit-contact" className="block text-xs font-medium text-muted-foreground mb-1">
              Best Contact (Email or SMS)
            </label>
            <input
              type="text"
              id="audit-contact"
              name="Contact Info"
              required
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="phone or email"
              className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="audit-notes" className="block text-xs font-medium text-muted-foreground mb-1">
            Specific Issues / Goals (Optional)
          </label>
          <input
            type="text"
            id="audit-notes"
            name="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Mobile load is slow, site crashes, or need booking system..."
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <input
          type="hidden"
          name="Lead Summary"
          value={`Audit Request:\nBusiness: ${businessName}\nWebsite: ${websiteUrl}\nContact: ${contactInfo}\nNotes: ${notes}\nSource: justduckit.xyz`}
        />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3.5 hover:bg-primary-hover transition-all cursor-pointer shadow-md shadow-primary/10"
          >
            <Send className="h-4 w-4" />
            <span>Request Free 15-Minute Audit</span>
          </button>

          <a
            href={smsUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white/5 text-foreground font-semibold text-xs px-4 py-3 hover:bg-white/10 transition-all"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Or Text Audit Info Directly to (615) 669-4135</span>
          </a>
        </div>

        {submitted && (
          <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/10 p-5 space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <CheckCircle className="h-5 w-5" />
              <span>Audit request received! Tap to text details for instant priority:</span>
            </div>
            <a
              href={smsUrl}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary hover:underline bg-background/70 px-3.5 py-2.5 rounded-xl border border-primary/20 break-all"
            >
              <MessageSquare className="h-3.5 w-3.5 flex-shrink-0" />
              <span>{smsText}</span>
            </a>
          </div>
        )}
      </form>
    </section>
  );
}
