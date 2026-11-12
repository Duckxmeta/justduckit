"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Answers = {
  need?: string;
  scale?: string;
  ready?: string;
};

const questions = [
  {
    key: "need" as const,
    prompt: "What do you need most right now?",
    options: [
      { id: "site", label: "A simple website for a local business" },
      { id: "learn", label: "I want to learn to build agents or systems" },
      { id: "automate", label: "Automate work in software I already use" },
    ],
  },
  {
    key: "scale" as const,
    prompt: "How big is the project?",
    options: [
      { id: "small", label: "Just me or a small team" },
      { id: "growing", label: "Growing business, a few moving parts" },
      { id: "complex", label: "Larger or multi-tool setup" },
    ],
  },
  {
    key: "ready" as const,
    prompt: "How soon do you want to start?",
    options: [
      { id: "now", label: "As soon as possible" },
      { id: "soon", label: "In the next few weeks" },
      { id: "exploring", label: "Just exploring" },
    ],
  },
];

function recommend(a: Answers) {
  // Local, small, or simple → contact Duck
  if (a.need === "site" || a.scale === "small") {
    return {
      title: "Talk to Duck",
      body: "Local, small, or simple work goes through us directly.",
      href: "/social",
      cta: "Request a visit or message",
      external: false,
    };
  }

  // Want to learn to build → Arsenal
  if (a.need === "learn") {
    return {
      title: "Learn on Arsenal",
      body: "Explore the platform and tools to build your own systems.",
      href: "https://arsenal.world/?ref=KYLE-ACDF",
      cta: "Explore Arsenal",
      external: true,
    };
  }

  // Automate existing software → Zen AI
  return {
    title: "Automations with Zen AI",
    body: "Connect and automate the software you already use.",
    href: "https://www.zenai.world/start",
    cta: "Start with Zen",
    external: true,
  };
}

export default function WorkPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const current = questions[step];

  function choose(optionId: string) {
    const next = { ...answers, [current.key]: optionId };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  if (done) {
    const rec = recommend(answers);
    return (
      <div className="mx-auto max-w-xl px-6 py-24 sm:py-32">
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            {rec.title}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">{rec.body}</p>
          <a
            href={rec.href}
            target={rec.external ? "_blank" : undefined}
            rel={rec.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-black font-semibold text-sm px-6 py-3.5 hover:bg-primary-hover transition"
          >
            {rec.cta} <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => {
              setDone(false);
              setStep(0);
              setAnswers({});
            }}
            className="block text-xs text-muted-foreground hover:text-foreground mt-4"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-24 sm:py-32">
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono text-muted-foreground">
            {step + 1} / {questions.length}
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
            {current.prompt}
          </h1>
        </div>

        <div className="space-y-3">
          {current.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => choose(opt.id)}
              className="w-full text-left flex items-center justify-between rounded-xl border border-border px-5 py-4 hover:border-primary/40 hover:bg-white/5 transition group"
            >
              <span className="text-sm font-medium text-foreground">{opt.label}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
