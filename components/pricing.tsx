import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type PlanKey = "free" | "pro" | "business";

const planDefs: { key: PlanKey; price: string; periodKey: "forever" | "perMonth"; popular: boolean }[] = [
  { key: "free", price: "$0", periodKey: "forever", popular: false },
  { key: "pro", price: "$19", periodKey: "perMonth", popular: true },
  { key: "business", price: "$79", periodKey: "perMonth", popular: false },
];

export function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("subheading")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {planDefs.map((plan) => {
            const features = t.raw(`plans.${plan.key}.features`) as string[];
            return (
              <div
                key={plan.key}
                className={`relative border p-6 ${
                  plan.popular
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 right-6 bg-background px-2.5 py-0.5 text-xs font-medium text-foreground ring-1 ring-foreground/20">
                    {t("mostPopular")}
                  </span>
                )}

                <h3 className="text-base font-semibold">
                  {t(`plans.${plan.key}.name`)}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {t(`plans.${plan.key}.description`)}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-background/70" : "text-muted-foreground"
                    }`}
                  >
                    / {t(plan.periodKey)}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.popular ? "text-background" : "text-foreground"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-8 w-full ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {t(`plans.${plan.key}.cta`)}
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t("guarantee")}
        </p>
      </div>
    </section>
  );
}
