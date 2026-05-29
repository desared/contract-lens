import { Upload, Cpu, FileCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const stepDefs = [
  { icon: Upload, step: "01", key: "upload" },
  { icon: Cpu, step: "02", key: "analyze" },
  { icon: FileCheck, step: "03", key: "breakdown" },
] as const;

export function HowItWorks() {
  const t = useTranslations("HowItWorks");
  return (
    <section id="how-it-works" className="border-y border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("subheading")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stepDefs.map((step) => (
            <div
              key={step.step}
              className="border border-border bg-background p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {step.step}
                </span>
                <div className="inline-flex h-9 w-9 items-center justify-center bg-foreground/5">
                  <step.icon className="h-4 w-4 text-foreground" />
                </div>
              </div>

              <h3 className="mb-2 text-base font-semibold text-foreground">
                {t(`steps.${step.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`steps.${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
