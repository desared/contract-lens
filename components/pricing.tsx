"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For trying out the service.",
    features: [
      "1 contract analysis per month",
      "Plain-English explanation",
      "PDF upload",
      "Email summary",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For individuals with regular contract needs.",
    features: [
      "20 analyses per month",
      "Clause-by-clause breakdown",
      "Red-flag detection",
      "All file formats",
      "Priority processing",
      "PDF reports",
    ],
    cta: "Start Pro trial",
    popular: true,
  },
  {
    name: "Business",
    price: "$79",
    period: "per month",
    description: "For teams and businesses.",
    features: [
      "Unlimited analyses",
      "Everything in Pro",
      "Team collaboration",
      "API access",
      "Custom branding",
      "Dedicated support",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose a plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border p-6 ${
                plan.popular
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 right-6 bg-background px-2.5 py-0.5 text-xs font-medium text-foreground ring-1 ring-foreground/20">
                  Most popular
                </span>
              )}

              <h3 className="text-base font-semibold">{plan.name}</h3>
              <p
                className={`mt-1 text-sm ${
                  plan.popular ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  / {plan.period}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.popular ? "text-background" : "text-foreground"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}
