"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <div className="mb-6 inline-flex items-center gap-2 border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 bg-emerald-500" />
          AI-powered contract analysis
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          Understand any contract,{" "}
          <span className="text-muted-foreground">in plain English.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Upload a contract and get a clear, jargon-free explanation in seconds.
          No lawyer needed.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="group bg-foreground px-6 text-background hover:bg-foreground/90"
            asChild
          >
            <Link href="#upload">
              Analyze your contract
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="px-6 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="#how-it-works">See how it works</Link>
          </Button>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-px overflow-hidden border border-border bg-border">
          {[
            { value: "50K+", label: "Contracts analyzed" },
            { value: "30s", label: "Average analysis" },
            { value: "4.9", label: "User rating" },
          ].map((stat) => (
            <div key={stat.label} className="bg-background px-4 py-6">
              <div className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
