import Image from "next/image";

const companies = [
  { name: "Lightbox", logo: "/logos/lightbox.png" },
  { name: "Galileo", logo: "/logos/galileo.png" },
  { name: "FeedFetcher", logo: "/logos/feedfetcher.png" },
  { name: "Boltshift", logo: "/logos/boltshift.png" },
  { name: "Hertzscale", logo: "/logos/hertzscale.png" },
  { name: "Globalsoft", logo: "/logos/globalsoft.png" },
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
