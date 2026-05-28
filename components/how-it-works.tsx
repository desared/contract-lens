"use client";

import { Upload, Cpu, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload your contract",
    description: "Drag and drop a PDF, Word doc, or photo. We accept all common formats.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI reads every clause",
    description: "Our model identifies key terms, obligations, and potential concerns.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Get a clear breakdown",
    description: "A jargon-free explanation of what the contract actually means for you.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three simple steps from upload to understanding.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.step}
              className="border border-border bg-background p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {step.step}
                </span>
                <div className="inline-flex h-9 w-9 items-center justify-center bg-foreground/5">
                  <step.icon className="h-4 w-4 text-foreground" />
                </div>
              </div>

              <h3 className="mb-2 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
