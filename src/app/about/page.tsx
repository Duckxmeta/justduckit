import Image from "next/image";
import { Mail, Calendar, Mic, Sparkles, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about JustDuckIt — professional path, media and events history, and the founding story of the DDNYC Duck Sanctuary.",
};

export default function About() {
  const mediaEvents = [
    {
      year: "2025",
      title: "Panel Speaker: Web3 & Decentralized Art",
      event: "Digital Arts Conference, NYC",
      description: "Discussed the future of retro pixel art, digital assets, and building active on-chain creator communities.",
    },
    {
      year: "2024",
      title: "Feature Article: Modern Wildlife Havens",
      event: "Urban Conservation Magazine",
      description: "Profiled the sanctuary's work in building sustainable urban sanctuaries for native duck species.",
    },
    {
      year: "2023",
      title: "Podcast Guest: Scaling Niche Passion Projects",
      event: "The Tech & Hobbyist Podcast",
      description: "Shared insights on launching and funding independent animal rescue projects through digital art communities.",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        
        {/* Intro Grid: Avatar & Story */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Avatar side */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-amber-500/5 group">
              <Image
                src="/images/avatar.jpg"
                alt="JustDuckIt Owner Portrait"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
                sizes="320px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-2xl font-bold text-foreground">JustDuckIt</h2>
              <p className="text-sm font-mono text-primary font-semibold">Founder, Writer & Builder</p>
              <p className="text-xs text-muted-foreground">Based in New York City, NY</p>
            </div>

            <div className="w-full max-w-sm rounded-2xl border border-border bg-card/20 p-6 space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Quick Info</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>hello@justduckit.xyz</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Animal Rights Advocate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Doginals Tech Contributor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Story side */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Hi, I'm <span className="text-gradient-gold">JustDuckIt</span>.
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                I'm a builder and writer focused on software engineering, decentralization, and physical-world ecological impact. I believe in combining tech-enabled systems with direct, ground-level conservation work.
              </p>
            </div>

            {/* Duck Sanctuary Origin Story */}
            <section id="sanctuary" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                <Heart className="h-5 w-5 text-rose-500 fill-rose-500/10" />
                <span>The Duck Sanctuary Story</span>
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  It all started in 2022 when I came across an injured mallard near a concrete waterfront in Brooklyn. In a bustling metropolis like NYC, wildlife is frequently pushed to the absolute margins, struggling with pollution, habitat degradation, and lack of clean water.
                </p>
                <p>
                  I realized that talking about environmental preservation wasn't enough. We needed active, local steps. That’s how the **DDNYC (Duck Sanctuary Project NYC)** was born. What began as helping a single bird has blossomed into building small-scale urban sanctuaries.
                </p>
                <p>
                  Our mission is to establish sustainable sanctuaries equipped with custom, eco-friendly viewing shelters, solar-powered aeration systems for ponds, and nesting environments that protect native ducks from predators. Through this work, we aim to bridge the gap between urban citizens and natural wildlife.
                </p>
              </div>
            </section>

            {/* Media & Events Timeline */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                <Mic className="h-5 w-5 text-primary" />
                <span>Media & Events History</span>
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-border">
                {mediaEvents.map((media, idx) => (
                  <div key={idx} className="relative pl-8 animate-in fade-in slide-in-from-left-4 duration-500">
                    {/* Timeline Node */}
                    <div className="absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full bg-primary border-4 border-background" />
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                          {media.year}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                          <Calendar className="h-3 w-3" />
                          {media.event}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-foreground">{media.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {media.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
