import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/ui/header-1";
import { HeroSection, StatsSection } from "@/components/ui/hero-1";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { ContractUpload } from "@/components/contract-upload";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        <HeroSection />
        <StatsSection />
        <Features />
        <HowItWorks />
        <ContractUpload />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
