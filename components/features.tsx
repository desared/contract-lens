import {
  FileText,
  MessageSquare,
  AlertTriangle,
  Zap,
  Lock,
  Languages,
} from "lucide-react";
import { useTranslations } from "next-intl";

const featureItems = [
  { icon: FileText, key: "anyContract" },
  { icon: MessageSquare, key: "plainEnglish" },
  { icon: AlertTriangle, key: "redFlag" },
  { icon: Zap, key: "instant" },
  { icon: Lock, key: "private" },
  { icon: Languages, key: "languages" },
] as const;

export function Features() {
  const t = useTranslations("Features");
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            {t("subheading")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature) => (
            <div
              key={feature.key}
              className="border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-foreground/5">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {t(`items.${feature.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
