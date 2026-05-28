import { Header } from "@/components/ui/header-1";
import { HeroSection } from "@/components/ui/hero-1";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { ContractUpload } from "@/components/contract-upload";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        <HeroSection />
        <Features />
        <HowItWorks />
        <ContractUpload />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
