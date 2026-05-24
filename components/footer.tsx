import Link from "next/link";
import { FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-foreground">
                <FileText className="h-5 w-5 text-background" />
              </div>
              <span className="text-xl font-bold uppercase tracking-wider text-foreground">
                ContractLens
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Making legal documents accessible to everyone, one contract at a
              time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wide text-foreground">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              {["Features", "Pricing", "API"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "API" ? "#" : `#${item.toLowerCase()}`}
                    className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wide text-foreground">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {["About", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wide text-foreground">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-foreground pt-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            &copy; 2024 ContractLens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
