import React from "react";
import { Cpu, Database, Code, Globe, Zap, Workflow } from "lucide-react";

export default function TechStackTrustGrid() {
  const stack = [
    { name: "Next.js 16", desc: "Sub-Second Edge Rendering", icon: Globe },
    { name: "Supabase", desc: "Relational Data Pipelines", icon: Database },
    { name: "Python / AI", desc: "Custom SOP Automation", icon: Code },
    { name: "Cloud APIs", desc: "Enterprise Interoperability", icon: Cpu },
    { name: "Custom Webhooks", desc: "Real-Time Event Triggers", icon: Zap },
    { name: "Workflow Engines", desc: "Zero-Latency Execution", icon: Workflow },
  ];

  return (
    <div className="w-full pt-8 pb-4">
      <div className="text-center mb-6">
        <p className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
          Engineered With High-Performance Production Stacks
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stack.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.name}
              className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-4 flex flex-col items-center text-center space-y-2 hover:border-primary/40 hover:bg-card/60 transition-all group"
            >
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                <IconComp className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-xs text-foreground font-mono">{item.name}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
