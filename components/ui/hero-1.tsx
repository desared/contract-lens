import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SparklesIcon, ArrowRightIcon, UploadIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <section className="relative mx-auto w-full max-w-5xl">
      <div
        aria-hidden="true"
        className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
      >
        <div className="absolute inset-0 -top-14 -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(0,0,0,0.08),transparent)]" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
      >
        <div className="absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]" />
        <div className="absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]" />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-1 size-full overflow-hidden"
        >
          <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
          <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
          <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
        </div>

        <a
          className={cn(
            "group mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow-sm",
            "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out",
          )}
          href="#features"
        >
          <SparklesIcon className="size-3 text-muted-foreground" />
          <span className="text-xs">{t("badge")}</span>
          <span className="block h-5 border-l" />
          <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
        </a>

        <h1
          className={cn(
            "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl",
            "[text-shadow:0_0_50px_rgba(0,0,0,0.15)]",
          )}
        >
          {t("titleLine1")} <br /> {t("titleLine2")}
        </h1>

        <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-md animate-in fill-mode-backwards text-center text-base text-foreground/80 tracking-wide delay-200 duration-500 ease-out sm:text-lg md:text-xl">
          {t("subtitleLine1")} <br /> {t("subtitleLine2")}
        </p>

        <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
          <Button asChild className="rounded-full" size="lg" variant="secondary">
            <a href="#pricing">{t("seePricing")}</a>
          </Button>
          <Button asChild className="rounded-full" size="lg">
            <a href="#upload">
              <UploadIcon data-icon="inline-start" className="mr-2 size-4" />
              {t("analyzeCta")}
              <ArrowRightIcon className="ms-2 size-4" data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const t = useTranslations("Stats");
  const stats = [
    { value: "10K+", label: t("contractsAnalyzed") },
    { value: "30s", label: t("averageTime") },
    { value: "98%", label: t("clauseAccuracy") },
    { value: "4.9", label: t("userRating") },
  ];

  return (
    <section className="relative border-t pt-10 pb-14">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-lg font-medium tracking-tight text-muted-foreground md:text-xl">
          {t("headingLead")}{" "}
          <span className="text-foreground">{t("headingHighlight")}</span>
        </h2>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-background px-4 py-8"
            >
              <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
