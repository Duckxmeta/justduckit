"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/95 backdrop-blur-lg border-t border-primary/30 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <a
        href="#intake-form"
        className="w-full py-3.5 px-4 rounded-xl bg-primary text-black text-center font-extrabold text-xs tracking-tight hover:bg-primary-hover transition shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer"
      >
        <Sparkles className="h-4 w-4 flex-shrink-0 text-black" />
        <span>Get Your Custom Plan & Quote</span>
        <ArrowRight className="h-4 w-4 text-black flex-shrink-0" />
      </a>
    </div>
  );
}
