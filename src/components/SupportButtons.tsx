"use client";

import { useState } from "react";

const SOL = "CwZDNu744EPtZzDNvhdgrxFJmKq9GHygZHQb6z4ToD6n";

export default function SupportButtons() {
  const [copied, setCopied] = useState(false);

  const copySol = async () => {
    try {
      await navigator.clipboard.writeText(SOL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <a
        href="https://www.paypal.com/ncp/payment/PLB-VXAQGRVZ8E69"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#003087] hover:bg-[#001f5c] text-white font-semibold text-sm transition"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.168 7.41-.332 2.11h3.79a.641.641 0 0 0 .633-.54l.026-.13.5-3.17.032-.174a.641.641 0 0 1 .633-.54h.399c3.25 0 5.795-1.32 6.538-5.137.31-1.594.149-2.925-.58-3.862a2.8 2.8 0 0 0-.639-.56z" />
        </svg>
        PayPal
      </a>

      <a
        href="https://cash.app/$Duckxmeta"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#00D632] hover:bg-[#00b82b] text-black font-semibold text-sm transition"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.59 3.475a5.1 5.1 0 0 0-3.05-3.05c-1.31-.42-2.5-.42-4.79-.42H8.25c-2.29 0-3.48 0-4.79.42a5.1 5.1 0 0 0-3.05 3.05C.0 4.785.0 5.975.0 8.265v7.47c0 2.29 0 3.48.41 4.79a5.1 5.1 0 0 0 3.05 3.05c1.31.42 2.5.42 4.79.42h7.5c2.29 0 3.48 0 4.79-.42a5.1 5.1 0 0 0 3.05-3.05c.41-1.31.41-2.5.41-4.79v-7.47c0-2.29 0-3.48-.41-4.79zM17.22 10.44l-6.14 6.14a.75.75 0 0 1-1.06 0l-3.24-3.24a.75.75 0 1 1 1.06-1.06l2.71 2.71 5.61-5.61a.75.75 0 1 1 1.06 1.06z" />
        </svg>
        Cash App
      </a>

      <button
        type="button"
        onClick={copySol}
        className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-[#9945FF] to-[#14F195] text-black font-semibold text-sm transition hover:opacity-90"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4.5 16.5c-.83 0-1.5-.67-1.5-1.5V6c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v.5h-1.5V6h-9v9h.5V16.5H4.5zm3 3c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9zm1.5-1.5h6v-6h-6v6z" />
        </svg>
        {copied ? "Copied" : "Copy Solana address"}
      </button>

      <p className="text-xs text-muted-foreground break-all">
        {SOL}
      </p>
    </div>
  );
}
