"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCIAL_WEBHOOK_URL || "";

const inputClass =
  "w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50";
const labelClass = "block text-xs font-bold text-foreground uppercase tracking-wider mb-2";

export default function SocialVisitForm() {
  const [f, setF] = useState({ name: "", business: "", address: "", contact: "", request: "", preferredTime: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!ENDPOINT) {
      setError("Form isn't connected yet. Please text (615) 669-4135 instead.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(f),
      });
      const data = await res.json().catch(() => ({ ok: true }));
      if (data.ok === false) throw new Error(data.error);
      setDone(true);
    } catch {
      setError("Something went wrong sending your request. Please retry or text (615) 669-4135.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div id="request" className="rounded-3xl border border-primary/40 bg-card/40 p-8 sm:p-10 space-y-3">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-extrabold text-foreground">Request received.</h2>
        <p className="text-sm text-muted-foreground">
          Thanks — we’ll look it over and reply if it fits. If you left an email, a confirmation is on its way.
        </p>
      </div>
    );
  }

  return (
    <form
      id="request"
      onSubmit={onSubmit}
      className="rounded-3xl border border-primary/40 bg-card/40 p-6 sm:p-10 space-y-5 scroll-mt-24"
    >
      <h2 className="text-2xl font-extrabold text-foreground">Request a visit</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sv-name" className={labelClass}>Name *</label>
          <input id="sv-name" required disabled={loading} value={f.name} onChange={set("name")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="sv-business" className={labelClass}>Business name *</label>
          <input id="sv-business" required disabled={loading} value={f.business} onChange={set("business")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="sv-address" className={labelClass}>Business address / town *</label>
          <input id="sv-address" required disabled={loading} value={f.address} onChange={set("address")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="sv-contact" className={labelClass}>Best contact (phone or email) *</label>
          <input id="sv-contact" required disabled={loading} value={f.contact} onChange={set("contact")} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="sv-request" className={labelClass}>What you want filmed or highlighted *</label>
        <textarea id="sv-request" required rows={3} disabled={loading} value={f.request} onChange={set("request")} className={`${inputClass} resize-none`} />
      </div>

      <div>
        <label htmlFor="sv-time" className={labelClass}>Preferred day or timeframe (optional)</label>
        <input id="sv-time" disabled={loading} value={f.preferredTime} onChange={set("preferredTime")} className={inputClass} />
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/40 text-red-400 text-xs flex items-start gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary hover:bg-primary-hover disabled:opacity-60 text-black font-extrabold text-sm transition cursor-pointer"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        <span>{loading ? "Sending..." : "Send request"}</span>
      </button>
    </form>
  );
}
