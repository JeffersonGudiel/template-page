import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="bg-black/50 text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 max-w-xl">
              <h2 className="text-4xl font-bold mb-4">
                Hagamos que las cosas sucedan
              </h2>
              <p className="text-gray-400 mb-8">
                Contáctenos hoy para obtener más información sobre cómo nuestros
                servicios de marketing digital pueden ayudar a su negocio a
                crecer y tener éxito en línea.
              </p>
              <Link
                href="/contact"
                className="inline-flex px-8 py-4 rounded-xl bg-[#9eff00] text-black font-medium hover:bg-[#8adf00] transition-colors">
                Obtenga su propuesta gratuita
              </Link>
            </div>
            <div className="relative h-64 md:h-full md:col-span-1">
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="w-full h-full relative">
                  <Image
                    src="/placeholder-cta-image.jpg"
                    alt="CTA Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl w-full md:w-4/5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
