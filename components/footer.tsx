import Link from "next/link";
import { ScanLine } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center bg-foreground">
                <ScanLine className="h-4 w-4 text-background" />
              </div>
              <span className="text-base font-semibold tracking-tight text-foreground">
                ContractLess
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Making legal documents accessible to everyone, one contract at a time.
            </p>
          </div>

          {[
            { title: "Product", items: ["Features", "Pricing", "API"] },
            { title: "Company", items: ["About", "Blog", "Careers"] },
            { title: "Legal", items: ["Privacy", "Terms", "Security"] },
          ].map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                {group.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 ContractLess. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
