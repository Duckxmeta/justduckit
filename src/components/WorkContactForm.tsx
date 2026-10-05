"use client";

import { useState } from "react";
import { MessageSquare, Phone, Send, CheckCircle } from "lucide-react";

export default function WorkContactForm() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [projectType, setProjectType] = useState("Local Small Business Site");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nameVal = name.trim() || "[Name]";
  const contactVal = contactInfo.trim() || "[Email / Phone]";
  const projectVal = projectType;
  const notesVal = notes.trim() || "[Notes]";

  const prefilledSmsText = `JustDuckIt site: ${nameVal} / ${contactVal} / ${projectVal} / ${notesVal}`;
  const smsUrl = `sms:+16156694135?body=${encodeURIComponent(prefilledSmsText)}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
  };

  return (
    <div id="contact" className="scroll-mt-24 rounded-3xl border border-border bg-card/30 p-6 sm:p-10 space-y-6">
      
      {/* Line above the form */}
      <p className="text-base font-semibold text-primary leading-relaxed">
        Text or send this form. This number is only for the site, so I know you came from JustDuckIt.
      </p>

      {/* Primary Actions: One-tap Text me & Call link */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <a
          href={smsUrl}
          className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-5 py-3 hover:bg-primary-hover transition-all shadow-md shadow-primary/10 cursor-pointer"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Text me</span>
        </a>

        <a
          href="tel:+16156694135"
          className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
        >
          Call (615) 669-4135 — I may not answer. Text or the form is better.
        </a>
      </div>

      {/* Formspree Email Form */}
      <form
        action="https://formspree.io/f/ducksonx@duck.com"
        method="POST"
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-background/50 p-6 sm:p-8 space-y-4"
      >
        <input type="hidden" name="_to" value="ducksonx@duck.com" />
        <input
          type="hidden"
          name="_subject"
          value={`JustDuckIt site lead — ${projectType} (${name.trim() || "New Lead"})`}
        />
        <input
          type="hidden"
          name="source"
          value="Source: justduckit.xyz"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="contactInfo" className="block text-xs font-medium text-muted-foreground mb-1">
              Email / Phone
            </label>
            <input
              type="text"
              id="contactInfo"
              name="Email or Phone"
              required
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="email@example.com or (615) 555-0123"
              className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="block text-xs font-medium text-muted-foreground mb-1">
            Project Type
          </label>
          <select
            id="projectType"
            name="Project Type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="Local Small Business Site">Local Small Business Site</option>
            <option value="Custom Software / AI Automation">Custom Software / AI Automation</option>
            <option value="Web3 / Custom Dev">Web3 / Custom Dev</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="block text-xs font-medium text-muted-foreground mb-1">
            Notes
          </label>
          <textarea
            id="notes"
            name="Notes"
            rows={4}
            required
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Tell me about your business, goal, or technical needs..."
            className="w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Formatted body summary including Source: justduckit.xyz */}
        <input
          type="hidden"
          name="Lead Summary"
          value={`Name: ${name}\nContact: ${contactInfo}\nProject Type: ${projectType}\nNotes: ${notes}\nSource: justduckit.xyz`}
        />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3 hover:bg-primary-hover transition-all cursor-pointer shadow-md shadow-primary/10"
          >
            <Send className="h-4 w-4" />
            <span>Send Lead Form</span>
          </button>
        </div>

        {submitted && (
          <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/10 p-5 space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <CheckCircle className="h-5 w-5" />
              <span>Form submitted! Tap below to text me directly:</span>
            </div>
            <a
              href={smsUrl}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary hover:underline bg-background/70 px-3.5 py-2.5 rounded-xl border border-primary/20 break-all"
            >
              <MessageSquare className="h-3.5 w-3.5 flex-shrink-0" />
              <span>{prefilledSmsText}</span>
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
