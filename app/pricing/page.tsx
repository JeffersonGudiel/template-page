import Background from "@/components/ui/background";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { FAQSection } from "@/components/ui/faq";
import { Footer } from "@/components/ui/Footer";
import Navbar from "@/components/ui/nav";
import { PricingSection } from "@/components/ui/pricing";
import { TrustedSection } from "@/components/ui/services";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <Background />
      <Navbar />
      <div className="mt-24">
        <PricingSection />
      </div>
      <FadeInSection>
        <TrustedSection />
      </FadeInSection>
      <FadeInSection>
        <FAQSection />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </ThemeProvider>
  );
}
