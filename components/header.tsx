"use client";

import Link from "next/link";
import { ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-foreground">
            <ScanLine className="h-4 w-4 text-background" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            ContractLess
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {["Features", "How it works", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex"
          >
            Sign in
          </Button>
          <Button
            asChild
            className="bg-foreground text-sm font-medium text-background hover:bg-foreground/90"
          >
            <Link href="#upload">Try free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
