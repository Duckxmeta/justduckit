"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Failed to subscribe. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thank you! You've been subscribed to the JustDuckIt newsletter.");
      setEmail("");
      
      try {
        localStorage.setItem("justduckit_subscribed", "true");
      } catch (err) {
        console.error("Local storage error:", err);
      }
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setStatus("error");
      setMessage("Failed to connect to the server. Please check your network and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-300">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mb-4 border border-emerald-500/20">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Welcome to the Flock!</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm">
          {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className={`relative flex items-center ${compact ? "flex-col sm:flex-row gap-2" : "flex-col gap-3"}`}>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="newsletter-email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            disabled={status === "loading"}
            className="block w-full rounded-xl border border-border bg-background/50 pl-10 pr-3 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all disabled:opacity-50"
            placeholder="ducky@example.com"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`flex items-center justify-center rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3 hover:bg-primary-hover active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap gap-2 ${
            compact ? "w-full sm:w-auto" : "w-full"
          }`}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>Join Newsletter</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-rose-500 font-medium pl-1 animate-in slide-in-from-top-1 duration-200">
          {message}
        </p>
      )}
    </form>
  );
}
