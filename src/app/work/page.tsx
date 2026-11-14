"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Answers = {
  need?: string;
  scale?: string;
  check?: string;
  ready?: string;
};

type Question = {
  key: keyof Answers;
  prompt: string;
  options: { id: string; label: string }[];
};

const questions: Record<string, Question> = {
  need: {
    key: "need",
    prompt: "What do you need most right now?",
    options: [
      { id: "site", label: "A simple website for a local business" },
      { id: "learn", label: "I want to learn to build agents or systems" },
      { id: "automate", label: "Automate work in software I already use" },
    ],
  },
  scale: {
    key: "scale",
    prompt: "How big is the project?",
    options: [
      { id: "small", label: "Just me or a small team" },
      { id: "growing", label: "Growing business, a few moving parts" },
      { id: "complex", label: "Larger or multi-tool setup" },
    ],
  },
  check: {
    key: "check",
    prompt: "How should the work be checked?",
    options: [
      { id: "simple", label: "Keep it simple — just run it" },
      { id: "format", label: "Check the format and required steps" },
      { id: "double", label: "Double-check before it goes out" },
    ],
  },
  ready: {
    key: "ready",
    prompt: "How soon do you want to start?",
    options: [
      { id: "now", label: "As soon as possible" },
      { id: "soon", label: "In the next few weeks" },
      { id: "exploring", label: "Just exploring" },
    ],
  },
};

function nextQuestion(a: Answers): keyof Answers | null {
  if (!a.need) return "need";

  // Learn path — short
  if (a.need === "learn") {
    if (!a.ready) return "ready";
    return null;
  }

  // Local / simple site — ask size then ready
  if (a.need === "site") {
    if (!a.scale) return "scale";
    if (!a.ready) return "ready";
    return null;
  }

  // Automate — size, check, ready
  if (!a.scale) return "scale";
  if (!a.check) return "check";
  if (!a.ready) return "ready";
  return null;
}

function recommend(a: Answers) {
  const checkNote =
    a.check === "double"
      ? " We’ll add a stronger check before anything finishes."
      : a.check === "format"
      ? " We’ll check the format and required steps."
      : "";

  if (a.need === "site" || a.scale === "small") {
    return {
      title: "Talk to Duck",
      body: "Local, small, or simple work goes through us directly." + checkNote,
      href: "/featured#visit",
      cta: "Request a visit or message",
      external: false,
    };
  }

  if (a.need === "learn") {
    return {
      title: "Learn on Arsenal",
      body: "Explore the platform and tools to build your own systems.",
      href: "https://arsenal.world/?ref=KYLE-ACDF",
      cta: "Explore Arsenal",
      external: true,
    };
  }

  return {
    title: "Automations with Zen AI",
    body: "Connect and automate the software you already use." + checkNote,
    href: "https://www.zenai.world/start",
    cta: "Start with Zen",
    external: true,
  };
}

export default function WorkPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [history, setHistory] = useState<(keyof Answers)[]>(["need"]);

  const currentKey = nextQuestion(answers);
  const done = currentKey === null;
  const current = currentKey ? questions[currentKey] : null;

  function choose(optionId: string) {
    if (!current) return;
    const next = { ...answers, [current.key]: optionId };
    setAnswers(next);
    const following = nextQuestion(next);
    if (following) {
      setHistory((h) => [...h, following]);
    }
  }

  function back() {
    if (history.length <= 1) return;
    const prev = history[history.length - 2];
    setHistory((h) => h.slice(0, -1));
    setAnswers((a) => {
      const copy = { ...a };
      delete copy[history[history.length - 1]];
      return copy;
    });
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
              setAnswers({});
              setHistory(["need"]);
            }}
            className="block text-xs text-muted-foreground hover:text-foreground mt-4"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="mx-auto max-w-xl px-6 py-24 sm:py-32">
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono text-muted-foreground">
            Step {history.length}
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

        {history.length > 1 && (
          <button
            onClick={back}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
