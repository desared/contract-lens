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
    title: "Any Contract Type",
    description:
      "Rent agreements, employment contracts, divorce papers, NDAs, purchase agreements — we handle them all.",
    number: "01",
  },
  {
    icon: MessageSquare,
    title: "Baby-Simple Explanations",
    description:
      "No legal jargon. We explain every clause in plain English that anyone can understand.",
    number: "02",
  },
  {
    icon: AlertTriangle,
    title: "Red Flag Detection",
    description:
      "We highlight concerning clauses, unfair terms, and potential risks you should know about.",
    number: "03",
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description:
      "Get your contract explained in seconds, not days. No waiting for expensive lawyer consultations.",
    number: "04",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description:
      "Your documents are encrypted and automatically deleted after analysis. We never share your data.",
    number: "05",
  },
  {
    icon: Languages,
    title: "Multiple Languages",
    description:
      "Upload contracts in any language and get explanations in the language you prefer.",
    number: "06",
  },
];

export function Features() {
  return (
    <section id="features" className="border-y-2 border-foreground py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16 grid gap-4 lg:grid-cols-2 lg:items-end">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-foreground md:text-5xl">
            Everything You Need to
            <br />
            <span className="bg-foreground px-2 text-background">
              Understand Your Contracts
            </span>
          </h2>
          <p className="max-w-lg text-lg text-muted-foreground lg:text-right">
            Our AI reads the fine print so you don&apos;t have to.
            Get clarity on what you&apos;re actually signing.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group border-2 border-foreground bg-card p-6 transition-colors hover:bg-foreground"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="border-2 border-foreground p-3 transition-colors group-hover:border-background group-hover:bg-background">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <span className="text-4xl font-black text-muted-foreground/30 transition-colors group-hover:text-background/30">
                  {feature.number}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-background">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-background/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
