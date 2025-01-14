import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Maria Katz",
    position: "Director ejecutivo",
    image: "/",
    linkedIn: "#",
    description:
      "Más de 3 años de experiencia en publicidad de búsqueda paga. Experto en gestión de campañas y análisis de rendimiento.",
  },
  {
    name: "John Smith",
    position: "Director de Marketing",
    image: "/",
    linkedIn: "#",
    description:
      "Especialista en estrategias de marketing digital con enfoque en ROI y crecimiento sostenible.",
  },
  {
    name: "Ana García",
    position: "Analista SEO",
    image: "/",
    linkedIn: "#",
    description:
      "Experta en optimización de motores de búsqueda y análisis de datos de tráfico web.",
  },
  {
    name: "David Chen",
    position: "Desarrollador Senior",
    image: "/",
    linkedIn: "#",
    description:
      "Especialista en desarrollo web y optimización de rendimiento de sitios.",
  },
  {
    name: "Sarah Johnson",
    position: "Diseñadora UX/UI",
    image: "/",
    linkedIn: "#",
    description:
      "Creadora de experiencias de usuario intuitivas y diseños web modernos.",
  },
  {
    name: "Carlos Rodriguez",
    position: "Especialista en PPC",
    image: "/",
    linkedIn: "#",
    description:
      "Experto en campañas de pago por clic y optimización de conversiones.",
  },
];

export function TeamSection() {
  return (
    <section className="bg-transparent py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block rounded-full bg-[#9eff00] px-4 py-2 text-lg font-semibold text-black">
            Equipo
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Conoce al equipo capacitado y experimentado detrás de nuestras
            exitosas estrategias de marketing digital.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-gray-700 bg-black/30 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                      style={{
                        filter:
                          "sepia(100%) hue-rotate(50deg) saturate(400%) brightness(95%)",
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.position}</p>
                  </div>
                </div>
                <Link
                  href={member.linkedIn}
                  className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900">
            Ver todo el equipo
          </Link>
        </div>
      </div>
    </section>
  );
}
