import NewsFeed from "./NewsFeed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "A short mix of local Tennessee, animals, media and tech, and broader crypto market stories. All linked to the original source.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="space-y-3 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">News</h1>
        <p className="text-sm text-muted-foreground">
          A short mix from local Tennessee, animals and waterfowl, media and tech, and the broader crypto market. Every item links to the original source. We do not claim these stories.
        </p>
      </div>
      <NewsFeed />
    </div>
  );
}
