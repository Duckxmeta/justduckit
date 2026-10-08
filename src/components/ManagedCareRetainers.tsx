import { ShieldCheck, Sparkles, Check, Server, Zap } from "lucide-react";

export default function ManagedCareRetainers() {
  const retainers = [
    {
      name: "Launch Care",
      price: "$49–$79",
      period: "/ mo",
      subtitle: "Essential Post-Launch Maintenance",
      description: "Ideal for growing sites needing rock-solid uptime, security, and minor content adjustments without technical hassle.",
      features: [
        "High-speed secure hosting & SSL security",
        "Domain & site connectivity management",
        "Technical local search optimization maintenance",
        "Minor text & photo updates (up to 2/mo)",
        "Zero long-term contract — pause or cancel anytime",
      ],
      highlight: false,
    },
    {
      name: "Growth & Systems",
      price: "$149–$199",
      period: "/ mo",
      subtitle: "Automated Lead Routing & Operations",
      description: "For active businesses that rely on instant lead response, automated customer routing, and continuous speed optimization.",
      features: [
        "Everything included in Launch Care",
        "Automated lead routing (Instant SMS & Email alerts)",
        "CRM & booking engine integrations",
        "Monthly performance & speed audits",
        "Priority same-day dedicated support",
      ],
      highlight: true,
    },
  ];

  return (
    <section id="retainers" className="scroll-mt-24 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Managed Retainers & Care Tiers</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Ongoing Website Care & <span className="text-gradient-gold">Lead Automation Tiers</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Keep your digital infrastructure fast, secure, and continuously generating leads—without worrying about maintenance or server management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {retainers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-3xl border ${
              tier.highlight
                ? "border-primary/50 bg-primary/5 shadow-2xl shadow-primary/10"
                : "border-border bg-card/40"
            } backdrop-blur-md p-8 flex flex-col justify-between space-y-6 hover:border-primary/40 transition-all`}
          >
            {tier.highlight && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-black text-xs font-bold font-mono shadow-md">
                Recommended for Growth
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                <p className="text-xs text-primary font-mono font-medium mt-0.5">{tier.subtitle}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{tier.description}</p>
              </div>

              <div className="border-y border-border/50 py-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">{tier.price}</span>
                  <span className="text-sm font-medium text-muted-foreground">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-muted-foreground">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40">
              <a
                href="#contact"
                className={`block w-full text-center rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
                  tier.highlight
                    ? "bg-primary text-black hover:bg-primary-hover shadow-md shadow-primary/10"
                    : "border border-border bg-white/5 hover:bg-white/10 text-foreground"
                }`}
              >
                Inquire About {tier.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
