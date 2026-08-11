import Link from "next/link";
import Image from "next/image";
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12.98 2.61 1.49 4.1 1.6v3.29c-1.28.02-2.52-.3-3.61-1-.95-.66-1.7-1.59-2.1-2.67v8.83c.03 2.24-1.12 4.36-3.05 5.5-1.93 1.11-4.39 1.11-6.32 0-2.09-1.2-3.23-3.62-2.92-6.01.27-2.13 1.84-3.95 3.94-4.44.75-.17 1.53-.18 2.28-.01V12.5c-.8-.18-1.64-.1-2.4.21-1.39.57-2.33 1.94-2.38 3.44-.08 1.72.93 3.32 2.5 3.99 1.56.66 3.4.3 4.59-.92 1.02-1.04 1.25-2.62 1.21-4.04V.02z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Brand tagline */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-7 w-7 overflow-hidden rounded-lg border border-border">
                <Image
                  src="/media/decent-duck-logo.png"
                  alt="JustDuckIt Logo"
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                JustDuckIt<span className="text-primary font-black">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Personal brand of a builder, writer, and duck enthusiast. Scaling ideas from zero to production.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ducksonx?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@ducksontiktok?_r=1&_t=ZP-98nrNNydKBy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok Profile"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/Ry8zBm5Yvb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Discord Server"
              >
                <DiscordIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link href="/newsletter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Projects & Sanctuary</h3>
                <ul className="mt-4 space-y-2">
                  <li className="text-sm text-muted-foreground">
                    <a
                      href="https://adoptaduck.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Duck Sanctuary ↗</span>
                    </a>
                  </li>
                  <li className="text-sm text-muted-foreground">
                    <span className="hover:text-primary transition-colors cursor-pointer">DDNYC Photos</span>
                  </li>
                  <li className="text-sm text-muted-foreground">
                    <a
                      href="https://doginaldogs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Doginal Dogs ↗</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Want to get in touch? Send us a message on{" "}
                <a
                  href="https://discord.gg/Ry8zBm5Yvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Discord ↗
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} JustDuckIt. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Designed for <a href="https://justduckit.xyz" className="text-primary hover:underline">justduckit.xyz</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
