import Image from "next/image";
import Link from "next/link";

const companies = [
  { name: "Lightbox", logo: "/" },
  { name: "Galileo", logo: "/" },
  { name: "FeedFetcher", logo: "/" },
  { name: "Boltshift", logo: "/" },
  { name: "Hertzscale", logo: "/" },
  { name: "Globalsoft", logo: "/" },
];

const servicesData = [
  {
    title: "Search Engine Optimization",
    bgColor: "bg-white",
    textColor: "text-black",
    image: "/",
    link: "/services/seo",
  },
  {
    title: "Pay-per-click advertising",
    bgColor: "bg-purple-200",
    textColor: "text-black",
    image: "/",
    link: "/services/ppc",
  },
  {
    title: "Social Media Marketing",
    bgColor: "bg-black",
    textColor: "text-white",
    image: "/",
    link: "/services/social-media",
  },
  {
    title: "Email Marketing",
    bgColor: "bg-white",
    textColor: "text-black",
    image: "/",
    link: "/services/email-marketing",
  },
  {
    title: "Content Creation",
    bgColor: "bg-purple-200",
    textColor: "text-black",
    image: "/",
    link: "/services/content-creation",
  },
  {
    title: "Analytics and Tracking",
    bgColor: "bg-black",
    textColor: "text-white",
    image: "/",
    link: "/services/analytics",
  },
];

export function TrustedSection() {
  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-400 mb-8">
          Trusted by thousands of companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center space-x-2">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-gray-400 text-sm">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-transparent py-20 text-white">
      <div className="container mx-auto px-4">
        <TrustedSection />

        <div className="mb-12 mt-20">
          <h2 className="inline-block rounded-full bg-[#9eff00] px-4 py-2 text-lg font-semibold text-black">
            Services
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className={`${service.bgColor} ${
                service.textColor
              } group relative overflow-hidden rounded-3xl p-6 transition-transform hover:scale-[1.02] h-64 ${
                service.bgColor === "bg-black" ? "bg-opacity-50" : ""
              }`}>
              <div className="relative z-10 h-full flex flex-col justify-between max-w-[60%]">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <Link
                  href={service.link}
                  className={`inline-flex items-center space-x-2 rounded-full ${
                    service.bgColor === "bg-black"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } px-4 py-2 text-sm font-medium transition-colors hover:bg-opacity-90 self-start`}>
                  <span>Service Info</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              <div className="absolute right-0 top-0 w-32 h-32 mt-4 mr-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={128}
                  height={128}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = () => {
  return (
    <main>
      <ServicesSection />
    </main>
  );
};

export default services;
