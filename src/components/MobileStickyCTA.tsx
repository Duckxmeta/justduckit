"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/90 backdrop-blur-lg border-t border-primary/30 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="#qualifier-form"
          data-event="cta_click"
          data-track="mobile_sticky_smb"
          className="flex-1 py-3 px-3 rounded-xl bg-primary text-black text-center font-extrabold text-xs tracking-tight hover:bg-primary-hover transition shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Sparkles className="h-3.5 w-3.5 flex-shrink-0" />
          <span>Launch Brand & Web</span>
        </a>

        <a
          href="#qualifier-form"
          data-event="cta_click"
          data-track="mobile_sticky_enterprise"
          className="flex-1 py-3 px-3 rounded-xl border border-primary/40 bg-white/5 text-foreground text-center font-extrabold text-xs tracking-tight hover:bg-white/10 transition flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Scope Automation</span>
          <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
        </a>
      </div>
    </div>
  );
}
