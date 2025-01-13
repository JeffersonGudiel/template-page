import { BackgroundWrapper } from "@/components/ui/background";
import Navbar from "@/components/ui/nav";
import { ContactSection } from "@/components/ui/contact";
import { FAQSection } from "@/components/ui/faq";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <BackgroundWrapper>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          <ContactSection />
                  <FAQSection />
                  <Footer />
        </main>
      </div>
    </BackgroundWrapper>
  );
}
