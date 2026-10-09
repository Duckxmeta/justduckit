"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";

export default function ProjectScopeQuiz() {
  const [needSolved, setNeedSolved] = useState("More Customers & Sales (Website/Brand)");
  const [bottleneck, setBottleneck] = useState("");
  const [nameAndBusiness, setNameAndBusiness] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const nameClean = nameAndBusiness.trim();
    const contactClean = contactInfo.trim();

    if (!nameClean || !contactClean) {
      setErrorMessage("Please fill in both your name/business and contact email/phone.");
      return;
    }

    // Basic email/phone format sanity check
    if (contactClean.length < 5) {
      setErrorMessage("Please enter a valid email address or phone number.");
      return;
    }

    setLoading(true);

    const endpoint =
      "https://script.google.com/macros/s/AKfycbwXEgkzSdBogCFRvsl9WO70BDv_cdNmQ-Kkzu6s-05Zo8nBFmf53DfKzNb-RNoMdLp8/exec";

    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: nameClean,
          email: contactClean,
          solutionNeeded: needSolved,
          bottleneck: bottleneck.trim(),
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Webhook submission error:", err);
      setErrorMessage("Something went wrong sending your brief. Please retry or contact directly.");
    } finally {
      setLoading(false);
    }
  };

  const smsText = `Custom Plan Request:\nSolving: ${needSolved}\nBottleneck: ${bottleneck}\nName & Business: ${nameAndBusiness}\nContact: ${contactInfo}`;
  const smsUrl = `sms:+16156694135?body=${encodeURIComponent(smsText)}`;

  return (
    <div
      id="intake-form"
      className="w-full max-w-3xl mx-auto p-6 md:p-10 bg-card/40 border border-primary/40 rounded-3xl shadow-2xl backdrop-blur-md text-foreground font-sans scroll-mt-24"
    >
      {submitted ? (
        /* POST-SUBMISSION UX (Success Confirmation Card) */
        <div className="space-y-6 text-center sm:text-left animate-in fade-in duration-300 py-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <CheckCircle2 className="h-4 w-4" />
            <span>Submission Confirmed</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight">Brief Received.</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
              We are reviewing your submission now. Check your inbox for confirmation—you will receive your fixed-scope breakdown within 24 hours.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-background/80 border border-primary/30 text-xs text-muted-foreground space-y-2">
            <div className="font-bold text-foreground text-xs uppercase font-mono tracking-wider">Need Immediate Priority?</div>
            <p className="leading-relaxed">
              Text your brief directly to our engineering desk at <strong className="text-primary">(615) 669-4135</strong> for instant same-day response.
            </p>
            <div className="pt-2">
              <a
                href={smsUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-black font-extrabold text-xs hover:bg-primary-hover transition shadow-md shadow-primary/10"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Text Brief to (615) 669-4135</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* INTAKE FORM VIEW */
        <div className="space-y-6">
          <div className="space-y-2 text-center sm:text-left">
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

          <form onSubmit={handleSubmit} className="space-y-5">
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
                    disabled={loading}
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
            </div>

            {/* Field 2: Where is your biggest bottleneck right now? */}
            <div>
              <label htmlFor="intake-bottleneck" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                2. Where is your biggest bottleneck right now?
              </label>
              <textarea
                id="intake-bottleneck"
                name="bottleneck"
                rows={3}
                disabled={loading}
                value={bottleneck}
                onChange={(e) => setBottleneck(e.target.value)}
                placeholder="e.g. Current site looks dated and doesn't convert, or staff spends 15 hours a week copying data between spreadsheets..."
                className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none disabled:opacity-50"
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
                  name="name"
                  required
                  disabled={loading}
                  value={nameAndBusiness}
                  onChange={(e) => setNameAndBusiness(e.target.value)}
                  placeholder="e.g. Sarah Jenkins / Apex Consulting"
                  className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
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
                  name="email"
                  required
                  disabled={loading}
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="sarah@apex.com or (615) 555-0199"
                  className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                />
              </div>
            </div>

            {/* Error Alert Box */}
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/40 text-red-400 text-xs flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Action buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary hover:bg-primary-hover disabled:opacity-60 text-black font-extrabold text-sm transition shadow-lg shadow-primary/20 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-black" />
                    <span>Sending your brief...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-black" />
                    <span>Get Your Custom Plan & Quote</span>
                  </>
                )}
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
          </form>
        </div>
      )}
    </div>
  );
}
