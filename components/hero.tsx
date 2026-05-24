"use client";

import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Grid layout */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left column - Main content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="mb-8 inline-block border-2 border-foreground px-4 py-2">
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                AI-Powered Contract Analysis
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Understand
              <br />
              Any Contract
              <br />
              <span className="bg-foreground px-2 text-background">
                In Simple Terms
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Upload your contract and get a plain-English explanation.
              No lawyer needed. Rent agreements, ownership contracts,
              divorce papers — we explain it all like you&apos;re five.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group border-2 border-foreground bg-foreground px-8 py-6 text-base font-bold uppercase tracking-wide text-background hover:bg-background hover:text-foreground"
                asChild
              >
                <Link href="#upload">
                  Analyze Your Contract
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground bg-transparent px-8 py-6 text-base font-bold uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background"
                asChild
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Right column - Stats grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-foreground bg-card p-6">
                <span className="block text-5xl font-black text-foreground">50K+</span>
                <span className="mt-2 block text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Contracts Analyzed
                </span>
              </div>
              <div className="border-2 border-foreground bg-card p-6">
                <span className="block text-5xl font-black text-foreground">30s</span>
                <span className="mt-2 block text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Average Analysis Time
                </span>
              </div>
              <div className="border-2 border-foreground bg-card p-6">
                <span className="block text-5xl font-black text-foreground">4.9</span>
                <span className="mt-2 block text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  User Rating
                </span>
              </div>
              <div className="border-2 border-foreground bg-foreground p-6">
                <Shield className="h-10 w-10 text-background" />
                <span className="mt-2 block text-sm font-medium uppercase tracking-wide text-background">
                  Bank-Level Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
