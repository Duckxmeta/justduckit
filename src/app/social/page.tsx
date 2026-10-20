import type { Metadata } from "next";
import { Video } from "lucide-react";
import SocialVisitForm from "@/components/SocialVisitForm";

export const metadata: Metadata = {
  title: "Request a Visit | JustDuckIt",
  description:
    "Local businesses can request a visit. We film a short vlog and shoot photos for Instagram, Facebook, TikTok, and X.",
  alternates: { canonical: "https://justduckit.xyz/social" },
};

export default function SocialPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 space-y-12">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
          <Video className="h-3.5 w-3.5" />
          <span>Local visits</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
          Come by. <span className="text-gradient-gold">We’ll film it.</span>
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Local businesses can request a visit. We show up, film a short vlog at the location, and shoot photos for
          posts across Instagram, Facebook, TikTok, and X. Close enough to
          drive to.
        </p>
      </div>

      <SocialVisitForm />
    </div>
  );
}
