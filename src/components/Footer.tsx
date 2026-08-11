import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://justduckit.xyz"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
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
                    <span className="hover:text-primary transition-colors cursor-pointer">Duck Sanctuary</span>
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
              <p className="mt-4 text-sm text-muted-foreground">
                Questions or collaborations? Reach out via Twitter/X or subscribe to the newsletter.
              </p>
              <p className="mt-2 text-xs text-primary font-mono">
                hello@justduckit.xyz
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
