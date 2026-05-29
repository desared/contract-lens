import { ScanLine } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");

  const groups = [
    {
      title: t("product"),
      items: [
        { label: t("features"), href: "#features" },
        { label: t("pricing"), href: "#pricing" },
        { label: t("api"), href: "#" },
      ],
    },
    {
      title: t("company"),
      items: [
        { label: t("about"), href: "#" },
        { label: t("blog"), href: "#" },
        { label: t("careers"), href: "#" },
      ],
    },
    {
      title: t("legal"),
      items: [
        { label: t("privacy"), href: "#" },
        { label: t("terms"), href: "#" },
        { label: t("security"), href: "#" },
      ],
    },
  ];

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
              {t("tagline")}
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                {group.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
