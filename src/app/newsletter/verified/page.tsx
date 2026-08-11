import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Home, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription Verified | JustDuckIt",
  description: "Your email has been confirmed. You're now officially part of the flock!",
};

export default function NewsletterVerifiedPage() {
  return (
    <div className="relative isolate overflow-hidden min-h-[75vh] flex flex-col justify-center items-center">
      {/* Background radial gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-500/10 to-orange-500/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-md px-6 text-center w-full">
        <div className="glass-panel border border-border rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/40 space-y-6 animate-in zoom-in-95 duration-300">
          {/* Verified Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-primary border border-primary/20 shadow-inner animate-pulse">
            <ShieldCheck className="h-8 w-8" />
          </div>

          {/* Text Content */}
          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              You’re Fully In
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your email has been confirmed. You’re now officially part of the flock and will receive the <span className="text-primary font-semibold">Duck Digest</span>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col gap-3 justify-center sm:flex-row">
            <Link
              href="/"
              className="flex items-center justify-center rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3 hover:bg-primary-hover active:scale-[0.98] transition-all gap-2"
            >
              <Home className="h-4 w-4" />
              <span>Back Home</span>
            </Link>
            
            <Link
              href="/articles"
              className="flex items-center justify-center rounded-xl border border-border bg-background/50 text-foreground font-semibold text-sm px-6 py-3 hover:bg-card active:scale-[0.98] transition-all gap-2"
            >
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span>Read Articles</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
