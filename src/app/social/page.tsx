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

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/justduckits?psln=MWlqa3F1dGc1d24wdg%3D%3D&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18Zh8XnFWX/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ducksontiktok?_r=1&_t=ZP-9Am0q6HhNeQ",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14 3h2.2a4.8 4.8 0 0 0 3.3 3.2V8.5a7 7 0 0 1-3.3-1.1v6.7a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.3a3.3 3.3 0 1 0 2.3 3.1V3z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/ducksonx?s=11",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M17.5 3h3.1l-6.8 7.8L22 21h-6.2l-4.8-6.3L5.7 21H2.6l7.3-8.4L2 3h6.3l4.4 5.8L17.5 3zm-1.1 16.2h1.7L7.7 4.7H5.9l10.5 14.5z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@justduckits?si=8oNcuZGQXxoYGprt",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z" />
      </svg>
    ),
  },
];

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
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground hover:border-primary hover:text-primary transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <SocialVisitForm />
    </div>
  );
}
