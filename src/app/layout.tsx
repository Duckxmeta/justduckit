import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justduckit.xyz"),
  title: {
    default: "Kyle Kinkin | Media, Events & Digital Brand Builder",
    template: "%s | Kyle Kinkin",
  },
  description: "Personal brand of Kyle Kinkin, a media and events professional based in Nashville, TN. Owner of Pjs Media Co & Ikonic Studio, and leader within the Doginal Dogs community. Speaking at DDNYC on Betting on Yourself.",
  keywords: ["Kyle Kinkin", "Pjs Media", "Ikonic Studio", "Decent Ducks", "Doginal Dogs", "DDNYC", "Betting on Yourself", "Nashville Tennessee", "Events Management", "Digital Art"],
  authors: [{ name: "Kyle Kinkin" }],
  creator: "Kyle Kinkin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justduckit.xyz",
    siteName: "Kyle Kinkin",
    title: "Kyle Kinkin | Media, Events & Digital Brand Builder",
    description: "Personal brand of Kyle Kinkin, a media and events professional based in Nashville, TN. Owner of Pjs Media Co & Ikonic Studio. Speaking at DDNYC on Betting on Yourself.",
    images: [
      {
        url: "/media/decent-ducks-nft-solana.png",
        width: 800,
        height: 800,
        alt: "Decent Ducks Solana NFT art collection founded by Kyle Kinkin (@DucksOnX).",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Kinkin | Media, Events & Digital Brand Builder",
    description: "Personal brand of Kyle Kinkin, a media and events professional based in Nashville, TN. Owner of Pjs Media Co & Ikonic Studio. Speaking at DDNYC on Betting on Yourself.",
    images: ["/media/decent-ducks-nft-solana.png"],
    creator: "@kylekinkin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://justduckit.xyz/#person",
        "name": "Kyle Kinkin",
        "alternateName": [
          "Duck",
          "Duck on X",
          "ducks",
          "Ducksonx",
          "Just Duck It"
        ],
        "url": "https://justduckit.xyz",
        "mainEntityOfPage": "https://justduckit.xyz",
        "jobTitle": ["Founder", "Software Developer", "Waterfowl Rescuer"],
        "description": "Kyle Kinkin (known online as Duck on X / @Ducksonx and Just Duck It) is a software developer, Web3 creator, and waterfowl rescue founder.",
        "sameAs": [
          "https://x.com/Ducksonx",
          "https://tiktok.com/@just.duckit",
          "https://instagram.com/@justduckits",
          "https://www.amazon.com/shop/justtduckit",
          "https://kylekinkin.com",
          "https://ducksonx.com"
        ],
        "knowsAbout": [
          "Waterfowl Care & Rescue",
          "Web Application Development",
          "Solana Blockchain & Web3",
          "Decent Ducks"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://justduckit.xyz/#website",
        "url": "https://justduckit.xyz",
        "name": "Just Duck It | Kyle Kinkin Official Site",
        "alternateName": ["Duck on X", "Kyle Kinkin Portfolio", "Decent Ducks"],
        "publisher": { "@id": "https://justduckit.xyz/#person" }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
