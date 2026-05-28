"use client";

import {
  FileText,
  MessageSquare,
  AlertTriangle,
  Zap,
  Lock,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Any contract type",
    description:
      "Leases, employment contracts, NDAs, divorce papers, purchase agreements — we handle them all.",
  },
  {
    icon: MessageSquare,
    title: "Plain-English explanations",
    description:
      "No legal jargon. Every clause translated into language anyone can understand.",
  },
  {
    icon: AlertTriangle,
    title: "Red-flag detection",
    description:
      "We surface concerning clauses, unfair terms, and risks you should know about.",
  },
  {
    icon: Zap,
    title: "Instant analysis",
    description:
      "Get your contract explained in seconds — no waiting on lawyer consultations.",
  },
  {
    icon: Lock,
    title: "Private & secure",
    description:
      "Documents are encrypted and deleted after analysis. We never share your data.",
  },
  {
    icon: Languages,
    title: "Multiple languages",
    description:
      "Upload in any language, read explanations in the one you prefer.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Everything you need to read the fine print
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Our AI reads contracts so you don't have to — and tells you exactly what matters.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-foreground/5">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
