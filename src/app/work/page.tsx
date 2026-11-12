import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work with me | JustDuckIt",
  description: "Start a project with Zen AI Co.",
  alternates: { canonical: "https://justduckit.xyz/work" },
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 sm:py-32">
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            What do you need?
          </h1>
          <p className="text-sm text-muted-foreground">
            Pick the closest fit and we’ll send you to the right place.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="https://www.zenai.world/start"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border px-5 py-4 hover:border-primary/40 hover:bg-white/5 transition group"
          >
            <div>
              <div className="text-sm font-semibold text-foreground">I need a website or systems built</div>
              <div className="text-xs text-muted-foreground mt-0.5">Start a project with Zen</div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </a>

          <a
            href="https://arsenal.world/?ref=KYLE-ACDF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border px-5 py-4 hover:border-primary/40 hover:bg-white/5 transition group"
          >
            <div>
              <div className="text-sm font-semibold text-foreground">I want to see the Arsenal platform</div>
              <div className="text-xs text-muted-foreground mt-0.5">Explore tools and workflows</div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </a>

          <a
            href="https://www.zenai.world/start"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border px-5 py-4 hover:border-primary/40 hover:bg-white/5 transition group"
          >
            <div>
              <div className="text-sm font-semibold text-foreground">I’m not sure yet</div>
              <div className="text-xs text-muted-foreground mt-0.5">Talk it through with Zen</div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}
