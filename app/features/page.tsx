import { Background } from "@/components/ui/background";
import { Blog } from "@/components/ui/blog";
import { Calendario } from "@/components/ui/calendario";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { FAQSection } from "@/components/ui/faq";
import { Footer } from "@/components/ui/Footer";
import Navbar from "@/components/ui/nav";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <Background />
      <main className="flex min-h-screen flex-col items-center justify-start">
        <Navbar />
        <div className="relative min-h-screen w-full">
          <div className="w-full max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mt-24 mb-8 text-center">
              Calendario de Eventos
            </h1>
            <Calendario />
          </div>
          <FadeInSection>
            <Blog />
          </FadeInSection>
          <FadeInSection>
            <FAQSection />
          </FadeInSection>
          <FadeInSection>
            <Footer />
          </FadeInSection>
        </div>
      </main>
    </ThemeProvider>
  );
}
