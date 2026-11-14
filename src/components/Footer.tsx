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

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-7 w-7 overflow-hidden rounded-lg border border-border">
                <Image
                  src="/media/decent-ducks-nft-solana.png"
                  alt="JustDuckIt black duck logo"
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
              Based in Tennessee
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/ducksonx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X Profile">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/justduckits" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram Profile">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@ducksontiktok" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok Profile">
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/18Zh8XnFWX/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook Profile">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@justduckits" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube Channel">
                <YouTubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <nav aria-label="Footer Navigation">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                  <li><Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work with me</Link></li>
                  <li><Link href="/featured" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Get featured</Link></li>
                  <li><Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Articles</Link></li>
                </ul>
              </nav>
              <nav aria-label="Footer Projects" className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Projects & Sanctuary</h3>
                <ul className="mt-4 space-y-2">
                  <li className="text-sm text-muted-foreground">
                    <a href="https://adoptaduck.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1">
                      <span>Duck Sanctuary ↗</span>
                    </a>
                  </li>
                  <li className="text-sm text-muted-foreground">
                    <a href="https://doginaldogs.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1">
                      <span>Doginal Dogs ↗</span>
                    </a>
                  </li>
                  <li className="text-sm text-muted-foreground">
                    <a href="https://cryptospaces.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1">
                      <span>Crypto Spaces Network ↗</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Kyle Kinkin<br />
                <a href="tel:+16156694135" className="text-primary hover:underline font-semibold">(615) 669-4135</a><br />
                <a href="mailto:duck@justduckit.xyz" className="text-primary hover:underline font-semibold">duck@justduckit.xyz</a>
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Sites and listings:{" "}
                <Link href="/work" className="text-primary hover:underline font-semibold">Work with me</Link>
                {" · "}
                <Link href="/featured" className="text-primary hover:underline font-semibold">Get featured</Link>.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} JustDuckIt. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            Designed for <a href="https://justduckit.xyz" className="text-primary hover:underline">justduckit.xyz</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
