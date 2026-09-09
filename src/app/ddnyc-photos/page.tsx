import Link from "next/link";
import { Camera, MapPin, Calendar, ArrowLeft, Sparkles } from "lucide-react";
import { getDDNYCPhotos } from "@/lib/ddnyc-photos";
import PhotoGallery from "@/components/PhotoGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DDNYC 2026 Photos | JustDuckIt",
  description: "Photo gallery from DDNYC 2026 in New York City featuring Kyle Kinkin (Duck / JustDuckIt), stage panel discussions, and community highlights.",
  openGraph: {
    title: "DDNYC 2026 Photo Gallery | JustDuckIt",
    description: "Full photo gallery from DDNYC 2026 in New York City.",
    images: [{ url: "/media/ddnyc-speaking-panel.JPG" }],
  },
};

export default function DDNYCPhotosPage() {
  const photos = getDDNYCPhotos();

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-500/20 to-orange-500/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/about#ddnyc"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Speaking Details</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-semibold">
              <Camera className="h-3.5 w-3.5" />
              <span>Event Photo Gallery</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/60 text-muted-foreground border border-border text-xs font-mono">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>New York City</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/60 text-muted-foreground border border-border text-xs font-mono">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span>DDNYC 2026</span>
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            DDNYC 2026 <span className="text-gradient-gold">Photo Gallery</span>
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed">
            Highlights and full photo showcase from DDNYC 2026 in New York featuring Kyle Kinkin (Duck / JustDuckIt), stage panel discussions, networking, and community moments.
          </p>

          <div className="pt-2 text-xs font-mono text-primary font-semibold">
            Showcasing {photos.length} photos
          </div>
        </div>

        {/* Photos Grid Component */}
        <PhotoGallery photos={photos} />

      </div>
    </div>
  );
}
