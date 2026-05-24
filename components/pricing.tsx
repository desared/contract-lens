"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out the service",
    features: [
      "1 contract analysis per month",
      "Basic plain-English explanation",
      "PDF upload support",
      "Email summary",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For individuals who need regular contract help",
    features: [
      "20 contract analyses per month",
      "Detailed clause-by-clause breakdown",
      "Red flag detection & warnings",
      "All file formats supported",
      "Priority processing",
      "Download PDF reports",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "$79",
    period: "per month",
    description: "For teams and businesses",
    features: [
      "Unlimited contract analyses",
      "Everything in Pro",
      "Team collaboration",
      "API access",
      "Custom branding",
      "Dedicated support",
      "Bulk upload",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-foreground py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16 grid gap-4 lg:grid-cols-2 lg:items-end">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-foreground md:text-5xl">
            Simple,
            <br />
            <span className="bg-foreground px-2 text-background">
              Transparent Pricing
            </span>
          </h2>
          <p className="max-w-lg text-lg text-muted-foreground lg:text-right">
            Choose the plan that fits your needs.
            No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border-2 p-8 ${
                plan.popular
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-6">
                  <span className="border-2 border-background bg-background px-4 py-1 text-sm font-bold uppercase tracking-wide text-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold uppercase tracking-wide ${
                    plan.popular ? "text-background" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-5xl font-black ${
                    plan.popular ? "text-background" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }
                >
                  {" "}
                  / {plan.period}
                </span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border ${
                        plan.popular ? "border-background" : "border-foreground"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          plan.popular ? "text-background" : "text-foreground"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-background" : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full border-2 font-bold uppercase tracking-wide ${
                  plan.popular
                    ? "border-background bg-background text-foreground hover:bg-transparent hover:text-background"
                    : "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="mt-12 border-2 border-foreground p-6 text-center">
          <p className="font-bold uppercase tracking-wide text-foreground">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
