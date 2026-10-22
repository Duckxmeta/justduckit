import type { Metadata } from "next";
import { Video } from "lucide-react";
import SocialVisitForm from "@/components/SocialVisitForm";
import SupportButtons from "@/components/SupportButtons";

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

      <div className="rounded-3xl border border-primary/40 bg-card/40 p-6 sm:p-10 space-y-6">
        <h2 className="text-2xl font-extrabold text-foreground">Love ALWAYS Wins</h2>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>Some first dates are dinner and a movie.</p>
          <p>This one starts in Chicago and doesn’t stop until we’ve driven the full length of Route 66.</p>
          <p>She said yes anyway.</p>
          <p>
            Yes to the risk. Yes to the unknown. Yes to building something real in front of a camera and a community that gets to ride along. Every mile will be filmed — not as content for content’s sake, but as a living bridge between old friends and new ones, between America’s past and the world we’re stepping into. All of it because two people decided a dream was worth chasing.
          </p>
          <p>
            If you’ve ever been head-over-heels and wanted the person you care about to feel how serious you are… this is that moment.
          </p>
          <p>Help us turn the yes into the road.</p>
        </div>
        <p className="text-sm font-semibold text-foreground">Support the trip</p>
        <SupportButtons />

        <div className="pt-4 border-t border-border/60 space-y-3">
          <p className="text-sm font-semibold text-foreground">Follow along</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.instagram.com/justduckits?psln=MWlqa3F1dGc1d24wdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Instagram</a>
            <a href="https://www.facebook.com/share/18Zh8XnFWX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Facebook</a>
            <a href="https://www.tiktok.com/@ducksontiktok?_r=1&_t=ZP-9Am0q6HhNeQ" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">TikTok</a>
            <a href="https://x.com/ducksonx?s=11" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">X</a>
          </div>
        </div>
      </div>

      <SocialVisitForm />
    </div>
  );
}
