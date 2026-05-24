"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-foreground">
            <FileText className="h-5 w-5 text-background" />
          </div>
          <span className="text-xl font-bold uppercase tracking-wider text-foreground">
            ContractLens
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {["Features", "How It Works", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="border-2 border-transparent px-4 py-2 text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden border-2 border-foreground bg-transparent text-foreground uppercase tracking-wide hover:bg-foreground hover:text-background md:inline-flex"
          >
            Sign In
          </Button>
          <Button
            asChild
            className="border-2 border-foreground bg-foreground text-background uppercase tracking-wide hover:bg-background hover:text-foreground"
          >
            <Link href="#upload">Try Free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
