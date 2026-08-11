"use client";

import React from "react";

interface NewsletterFormProps {
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
  return (
    <div className="w-full flex justify-center overflow-hidden rounded-2xl bg-transparent">
      <iframe
        width="540"
        height="305"
        src="https://8c7ddbbc.sibforms.com/v2/serve/MUIFABEBp8NsKHydRQ4p7o14f7NY__6XX9NlIkcQw4SGEu4hy-baUXM3_ZeLKT5d_LWC89hrqVsPYHcQvi4jct4714TM68vAnp8feamJn8ENA52w1CGibGJs7-YcxV5BpNESr6QPdJapR1QQ9khb_2rNyS2L3yFK64sePSqxMzFbnDsSLPpZrfFAuEGnHp3Af7bcYeKI7tNisfrmDA=="
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          background: "transparent",
        }}
        title="Brevo Newsletter Subscription Form"
      />
    </div>
  );
}
