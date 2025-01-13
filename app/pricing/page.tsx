import { BackgroundWrapper } from "@/components/ui/background";
import { FAQSection } from "@/components/ui/faq";
import { Footer } from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/nav";
import { PricingSection } from "@/components/ui/pricing";
import { TrustedSection } from "@/components/ui/services";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <BackgroundWrapper>
        <Navbar />
              <Hero />
              <PricingSection />
              <TrustedSection />
              <FAQSection />
              <Footer />
      </BackgroundWrapper>
    </div>
  );
}
