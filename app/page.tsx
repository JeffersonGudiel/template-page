import { Background } from "@/components/ui/background";
import { CTASection } from "@/components/ui/cta";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Footer } from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/nav";
import { PricingSection } from "@/components/ui/pricing";
import { ProcessSection } from "@/components/ui/process";
import { ServicesSection } from "@/components/ui/services";
import { TeamSection } from "@/components/ui/team";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <Background />
      <div className="relative min-h-screen w-full">
        <Navbar />
        <Hero />
        <FadeInSection>
          <ServicesSection />
        </FadeInSection>
        <FadeInSection>
          <CTASection />
        </FadeInSection>
        <FadeInSection>
          <ProcessSection />
        </FadeInSection>
        <FadeInSection>
          <PricingSection />
        </FadeInSection>
        <FadeInSection>
          <TeamSection />
        </FadeInSection>
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>
    </ThemeProvider>
  );
}
