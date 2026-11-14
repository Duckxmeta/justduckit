"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCIAL_WEBHOOK_URL || "";

const OFFERS = [
  {
    id: "video",
    label: "Video Spotlight — $75 one-time",
    href: "https://buy.stripe.com/eVqfZh2OA0yc86fadr7ok07",
  },
  {
    id: "monthly",
    label: "Monthly Feature — $150/month",
    href: "https://buy.stripe.com/6oUaEX4WIcgU2LVdpD7ok08",
  },
  {
    id: "premium",
    label: "Premium Feature — $300/month",
    href: "https://buy.stripe.com/cNi9AT74Qep2gCL4T77ok09",
  },
  {
    id: "deposit",
    label: "Funnel Website Deposit — $300",
    href: "https://buy.stripe.com/5kQaEX74Q3Ko0DNdpD7ok04",
  },
] as const;

type OfferId = (typeof OFFERS)[number]["id"];

const inputClass =
  "w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50";
const labelClass = "block text-xs font-bold text-foreground uppercase tracking-wider mb-2";

function extractEmail(value: string): string | null {
  const match = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : null;
}

function checkoutUrl(offerId: OfferId, contact: string): string {
  const offer = OFFERS.find((item) => item.id === offerId) ?? OFFERS[0];
  const email = extractEmail(contact);
  if (!email) return offer.href;
  const url = new URL(offer.href);
  url.searchParams.set("prefilled_email", email);
  return url.toString();
}

export default function SocialVisitForm() {
  const [f, setF] = useState({
    name: "",
    business: "",
    address: "",
    contact: "",
    request: "",
    preferredTime: "",
    offer: "video" as OfferId,
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setF({ ...f, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!ENDPOINT) {
      setError("Form isn't connected yet. Please text (615) 669-4135 instead.");
      return;
    }
    const offer = OFFERS.find((item) => item.id === f.offer) ?? OFFERS[0];
    // Keep the original fields the webhook already stores. offer is an extra
    // note so Duck can see which checkout the visitor was sent to.
    const payload = {
      name: f.name,
      business: f.business,
      address: f.address,
      contact: f.contact,
      request: f.request,
      preferredTime: f.preferredTime,
      offer: offer.label,
    };
    const nextCheckout = checkoutUrl(offer.id, f.contact);
    setLoading(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ ok: true }));
      if (data.ok === false) throw new Error(data.error);
      setDone(true);
      window.setTimeout(() => {
        window.location.assign(nextCheckout);
      }, 700);
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
        <h2 className="text-2xl font-extrabold text-foreground">Message sent, taking you to checkout…</h2>
        <p className="text-sm text-muted-foreground">
          Your request was sent. You’ll go to Stripe next to pay for the offer you picked. If you left an email, a confirmation is on its way.
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
      <p className="text-sm text-muted-foreground -mt-2">
        A business, a landmark, or a story. Anyone can request a visit. Your message is sent first, then you’ll go to checkout for the offer you pick.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sv-name" className={labelClass}>Your name *</label>
          <input id="sv-name" required disabled={loading} value={f.name} onChange={set("name")} className={inputClass} placeholder="Kyle" />
        </div>
        <div>
          <label htmlFor="sv-business" className={labelClass}>Place, landmark, or business *</label>
          <input id="sv-business" required disabled={loading} value={f.business} onChange={set("business")} className={inputClass} placeholder="The old mill, my farm, Main Street Cafe" />
        </div>
        <div>
          <label htmlFor="sv-address" className={labelClass}>Location / town *</label>
          <input id="sv-address" required disabled={loading} value={f.address} onChange={set("address")} className={inputClass} placeholder="Smithville, TN" />
        </div>
        <div>
          <label htmlFor="sv-contact" className={labelClass}>Best contact (phone or email) *</label>
          <input id="sv-contact" required disabled={loading} value={f.contact} onChange={set("contact")} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="sv-offer" className={labelClass}>Which offer? *</label>
        <select
          id="sv-offer"
          required
          disabled={loading}
          value={f.offer}
          onChange={set("offer")}
          className={inputClass}
        >
          {OFFERS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          A general visit request defaults to the $75 Video Spotlight. The Monthly and Premium features are subscriptions you can cancel anytime.
        </p>
      </div>

      <div>
        <label htmlFor="sv-request" className={labelClass}>What should we film or talk about? *</label>
        <textarea id="sv-request" required rows={3} disabled={loading} value={f.request} onChange={set("request")} className={`${inputClass} resize-none`} placeholder="The story behind this place, what makes it special, anything we should know." />
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
        <span>{loading ? "Sending..." : "Send request and go to checkout"}</span>
      </button>
    </form>
  );
}
