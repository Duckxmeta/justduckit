import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Work with Zen AI Co | JustDuckIt",
  description: "Consult with Zen AI Co for custom agentic systems and the Arsenal platform. Creative consulting for brand development and digital systems.",
  alternates: { canonical: "https://justduckit.xyz/work" },
};

export default function WorkPage() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            <span>Creative Consulting</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Consult with Zen AI Co
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Custom agentic systems and the Arsenal platform for brand development, digital art systems, and business workflows. We consult with Zen AI Co on creative direction and implementation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.zenai.world/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-extrabold text-sm px-8 py-4 hover:bg-primary-hover active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
            >
              <span>Start with Zen</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://arsenal.world/?ref=KYLE-ACDF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border text-sm px-6 py-3.5 hover:bg-white/5 transition font-semibold"
            >
              <span>Explore Arsenal</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground pt-6">
            Based in Tennessee. Serving local and remote clients through Zen AI Co.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-border p-6 sm:p-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-lg font-bold text-foreground">What this looks like</h2>
          <p>
            Strategic creative direction, brand systems, and digital tools that connect content, operations, and audience. Zen AI Co combines custom agentic systems with the Arsenal platform to build, connect, and automate business workflows.
          </p>
          <p>
            If you want to talk through a project, use the start link above. For the Arsenal platform itself, the second link includes our affiliate reference.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.zenai.world/start"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
          >
            Go to zenai.world/start <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
