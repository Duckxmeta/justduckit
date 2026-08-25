import NewsletterForm from "@/components/NewsletterForm";
import { Sparkles, Rss, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Join the JustDuckIt newsletter flock. Get regular updates on duck sanctuary work, blockchain art logs, and software development advice.",
};

export default function NewsletterPage() {
  const benefits = [
    {
      title: "Duck Sanctuary Logs",
      description: "Step-by-step updates on habitat construction, rescue logs, and conservation efforts in NYC.",
      icon: Sparkles,
    },
    {
      title: "Doginal Dogs & Web3 Alpha",
      description: "Dev logs and market thoughts on the evolving Doge blockchain, inscriptions, and digital collectibles.",
      icon: Rss,
    },
    {
      title: "Software Engineering Writing",
      description: "Direct essays and code snippets exploring Next.js, React development, Tailwind CSS, and system architecture.",
      icon: Mail,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center">
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

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          
          {/* Benefits List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-primary text-xs font-mono border border-primary/20">
                The Flock Weekly
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Stay updated with <span className="text-gradient-gold">JustDuckIt</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Subscribe to get weekly insights delivered straight to your inbox. I write about technology, web3 experiments, and native wildlife sanctuary building.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={idx} className="flex gap-4 animate-in fade-in slide-in-from-left-3 duration-300" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-primary/10 text-primary border border-primary/15">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{benefit.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border/50 pt-4">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>We value your privacy. Unsubscribe at any time with one click.</span>
            </div>
          </div>

          {/* Form Container */}
          <div className="space-y-6 animate-in zoom-in-95 duration-300">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-foreground">Join the Flock</h2>
              <p className="text-xs text-muted-foreground">
                Enter your email address below to sign up. Free, short, and highly educational.
              </p>
            </div>
            
            <NewsletterForm compact={false} />

            <div className="border-t border-border/50 pt-4">
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Flock Statistics</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-background/50 border border-border">
                  <div className="text-lg font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Flock Members</div>
                </div>
                <div className="p-3 rounded-xl bg-background/50 border border-border">
                  <div className="text-lg font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Spam-free Guarantee</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
