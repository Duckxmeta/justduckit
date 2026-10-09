import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ArrowLeft, Globe, Sparkles, Check, ArrowRight } from "lucide-react";
import ValueContrast from "@/components/ValueContrast";
import AuditLeadForm from "@/components/AuditLeadForm";
import ManagedCareRetainers from "@/components/ManagedCareRetainers";
import WorkContactForm from "@/components/WorkContactForm";

interface GeoMarket {
  slug: string;
  town: string;
  state: string;
  county: string;
  zip: string;
  lat: number;
  lng: number;
  serviceRadiusMiles: number;
  description: string;
  keywords: string[];
}

const geoMarkets: Record<string, GeoMarket> = {
  "web-design-smithville-tn": {
    slug: "web-design-smithville-tn",
    town: "Smithville",
    state: "TN",
    county: "DeKalb County",
    zip: "37166",
    lat: 35.9556,
    lng: -85.8205,
    serviceRadiusMiles: 25,
    description:
      "High-speed custom websites, local SEO titles, and direct lead routing for small businesses in Smithville & DeKalb County, TN.",
    keywords: [
      "Smithville TN web design",
      "DeKalb County web developer",
      "Smithville local business website",
      "Kyle Kinkin Smithville TN",
      "DeKalb County IT solutions",
    ],
  },
  "web-design-liberty-tn": {
    slug: "web-design-liberty-tn",
    town: "Liberty",
    state: "TN",
    county: "DeKalb County",
    zip: "37095",
    lat: 35.9926,
    lng: -85.9733,
    serviceRadiusMiles: 20,
    description:
      "Mobile layout, fast website performance, and automated client booking for Liberty, TN service businesses and contractors.",
    keywords: [
      "Liberty TN web design",
      "Liberty TN website developer",
      "DeKalb County local SEO",
      "Kyle Kinkin Liberty TN",
    ],
  },
  "web-design-mcminnville-tn": {
    slug: "web-design-mcminnville-tn",
    town: "McMinnville",
    state: "TN",
    county: "Warren County",
    zip: "37110",
    lat: 35.6823,
    lng: -85.7725,
    serviceRadiusMiles: 30,
    description:
      "Custom web engineering, lead capture infrastructure, and operational software for McMinnville and Warren County businesses.",
    keywords: [
      "McMinnville TN web developer",
      "Warren County web design",
      "McMinnville business website",
      "Kyle Kinkin McMinnville",
    ],
  },
  "web-design-cookeville-tn": {
    slug: "web-design-cookeville-tn",
    town: "Cookeville",
    state: "TN",
    county: "Putnam County",
    zip: "38501",
    lat: 36.1628,
    lng: -85.5016,
    serviceRadiusMiles: 35,
    description:
      "Enterprise-grade web solutions, automated business workflows, and custom software for Cookeville, TN companies.",
    keywords: [
      "Cookeville TN web developer",
      "Cookeville custom software",
      "Putnam County web design",
      "Kyle Kinkin Cookeville TN",
      "Cookeville AI automation",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(geoMarkets).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const market = geoMarkets[resolvedParams.slug];

  if (!market) {
    return {
      title: "Not Found — JustDuckIt",
    };
  }

  return {
    title: `Custom Web Engineering & Automation for ${market.town} Small Businesses | Kyle Kinkin`,
    description: market.description,
    keywords: market.keywords,
    alternates: {
      canonical: `https://justduckit.xyz/work/${market.slug}`,
    },
  };
}

export default async function GeoMarketPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const market = geoMarkets[resolvedParams.slug];

  if (!market) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `JustDuckIt — Custom Web Engineering (${market.town}, ${market.state})`,
    image: "https://justduckit.xyz/avatar.jpg",
    url: `https://justduckit.xyz/work/${market.slug}`,
    telephone: "+1-615-669-4135",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: market.town,
      addressRegion: market.state,
      postalCode: market.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: market.lat,
      longitude: market.lng,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: market.lat,
        longitude: market.lng,
      },
      geoRadius: `${market.serviceRadiusMiles * 1609.34}`, // radius in meters
    },
    founder: {
      "@type": "Person",
      name: "Kyle Kinkin",
      url: "https://justduckit.xyz",
    },
    description: market.description,
  };

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      {/* LocalBusiness JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 space-y-20">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Work & Packages</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
            <MapPin className="h-3.5 w-3.5" />
            <span>Serving {market.town}, {market.state} ({market.county})</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-tight">
            Custom Web Engineering & Automation for{" "}
            <span className="text-gradient-gold">{market.town} Small Businesses.</span>
          </h1>

          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            {market.description} Build directly with an experienced engineer—no agency fluff, fixed pricing, sub-second speed, and direct text updates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3.5 hover:bg-primary-hover transition-all shadow-md shadow-primary/10"
            >
              <Sparkles className="h-4 w-4" />
              <span>Get Free 15-Min Audit for {market.town} Business</span>
            </a>
            <a
              href="tel:+16156694135"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white/5 text-foreground font-semibold text-sm px-6 py-3.5 hover:bg-white/10 transition-all"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>Call / Text (615) 669-4135</span>
            </a>
          </div>
        </div>

        {/* Value Contrast Section */}
        <ValueContrast />

        {/* Audit Lead Form */}
        <AuditLeadForm />

        {/* Managed Retainer Care Section */}
        <ManagedCareRetainers />

        {/* Universal Contact Lead Form */}
        <WorkContactForm />
      </div>
    </div>
  );
}
