"use client";

import { Upload, Cpu, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Contract",
    description:
      "Drag and drop your PDF, Word document, or even snap a photo. We accept all common file formats.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analyzes Every Clause",
    description:
      "Our AI reads through every line, identifying key terms, obligations, and potential concerns.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Get Your Simple Explanation",
    description:
      "Receive a clear, jargon-free breakdown of what the contract actually means for you.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-foreground py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-background md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-lg text-lg text-background/70">
            Three simple steps to understand any contract
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative border-2 border-background bg-background p-8"
            >
              {/* Step number */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-6xl font-black text-foreground/10">
                  {step.step}
                </span>
                <div className="border-2 border-foreground p-3">
                  <step.icon className="h-6 w-6 text-foreground" />
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <div className="flex h-8 w-8 items-center justify-center bg-foreground text-background">
                    <span className="text-lg">→</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
