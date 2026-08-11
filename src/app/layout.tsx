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
    default: "JustDuckIt | Builder, Writer & Duck Enthusiast",
    template: "%s | JustDuckIt",
  },
  description: "Personal brand and projects of JustDuckIt. Building cool products, writing articles, sharing DDNYC updates, and documenting the duck sanctuary story.",
  keywords: ["JustDuckIt", "DDNYC", "Doginal Dogs", "Duck Sanctuary", "Personal Brand", "Web Development", "Blockchain", "Blogging"],
  authors: [{ name: "JustDuckIt" }],
  creator: "JustDuckIt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justduckit.xyz",
    siteName: "JustDuckIt",
    title: "JustDuckIt | Builder, Writer & Duck Enthusiast",
    description: "Personal brand and projects of JustDuckIt. Building cool products, writing articles, sharing DDNYC updates, and documenting the duck sanctuary story.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "JustDuckIt Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JustDuckIt | Builder, Writer & Duck Enthusiast",
    description: "Personal brand and projects of JustDuckIt. Building cool products, writing articles, sharing DDNYC updates, and documenting the duck sanctuary story.",
    images: ["/logo.jpg"],
    creator: "@justduckit",
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
    "@type": "Person",
    "name": "JustDuckIt",
    "url": "https://justduckit.xyz",
    "image": "https://justduckit.xyz/logo.jpg",
    "sameAs": [
      "https://x.com",
      "https://github.com"
    ],
    "jobTitle": "Builder, Writer, Sanctuary Founder",
    "knowsAbout": ["Duck Sanctuary", "Doginal Dogs", "Software Engineering", "Technical Writing"]
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
