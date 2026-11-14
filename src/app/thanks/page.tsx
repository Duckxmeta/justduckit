import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Thanks for your payment to Just Duck It. Duck will follow up using the contact details you entered at checkout.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.justduckit.xyz/thanks" },
};

export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 sm:py-32 space-y-6">
      <p className="text-xs font-mono uppercase tracking-wider text-primary">Just Duck It</p>
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Thank you.</h1>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Your payment went through. Duck will follow up using the name, phone, email, and business details you entered at checkout, to confirm what you bought and what happens next.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        If you meant to buy one of the pocket field guides, you should have been sent to a download page instead. Write to{" "}
        <a href="mailto:duck@justduckit.xyz" className="text-primary hover:underline font-semibold">
          duck@justduckit.xyz
        </a>{" "}
        and we will sort it out.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Questions in the meantime: the same address,{" "}
        <a href="mailto:duck@justduckit.xyz" className="text-primary hover:underline font-semibold">
          duck@justduckit.xyz
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        <Link href="/featured" className="text-sm font-semibold text-primary hover:underline">
          Back to offers
        </Link>
        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline">
          Home
        </Link>
      </div>
    </div>
  );
}
