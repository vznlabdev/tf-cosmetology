import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About TF Cosmetology — 30 Plus Years of Manufacturing Excellence",
  description:
    "Meet the team and global R&D network behind 500 plus successful brand launches. GMP certified facility in Bangkok.",
};

function MaterialIcon({
  name,
  className = "",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="px-8 md:px-24 py-20 lg:py-32 flex flex-col items-center text-center max-w-7xl mx-auto">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-primary leading-none mb-8">
            The Team Behind Your Brand
          </h1>
          <p className="font-body text-xl md:text-2xl text-outline max-w-3xl leading-relaxed">
            At TF Cosmetology, we go beyond traditional manufacturing. We
            operate as your strategic partner, combining decades of formulation
            expertise with the precision of modern science to bring your vision
            to life.
          </p>
        </section>

        {/* Leadership */}
        <section className="bg-surface-container-low py-24 px-8 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-headline text-4xl text-primary italic">
                Executive Leadership
              </h2>
              <div className="h-[1px] flex-grow bg-outline-variant/30 mb-2 mx-8 hidden md:block" />
              <span className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                Visionaries in Cosmetic Science
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  name: "Arkarapat Chanajindasopon",
                  title: "Chief Executive Officer",
                  bio: "Over two decades of experience navigating the global cosmetics landscape. Architect of TF's international partnerships across Korea, Italy, France and Japan.",
                  image: "/images/arkarapat-chanajindasopon-portrait.jpg",
                },
                {
                  name: "Penchit Charoensiri",
                  title: "QC and R&D Director",
                  bio: "Oversees quality control protocols and research direction across all product lines. Ensures every batch meets GMP and international safety standards.",
                  image: "/images/penchit-charoensiri-portrait.jpg",
                },
                {
                  name: "Yuki Faith",
                  title: "Executive Director, Global Business Development",
                  bio: "Oversees international business development across all markets. Previously built and exited a beauty, health and wellness franchise serving clients in the United States, Canada, Mexico and Panama.",
                  image: "/images/yuki-faith-portrait.jpg",
                },
              ].map((leader) => (
                <div key={leader.name} className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container-highest">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-1">
                    {leader.name}
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-tertiary mb-4">
                    {leader.title}
                  </p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global R&D Network */}
        <section className="py-24 px-8 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline text-5xl text-primary text-center mb-20 tracking-tight">
              Global R&amp;D Network
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "public",
                  name: "Inabata Japan",
                  desc: "Global ingredient sourcing and supply chain intelligence. Specialty Japanese actives and raw material procurement for advanced formulations.",
                },
                {
                  icon: "biotech",
                  name: "Vevy Europe Italy",
                  desc: "Advanced raw materials and specialized active ingredients since 1959. Pioneers in cutaneous biology and high performance cosmetic textures.",
                },
                {
                  icon: "eco",
                  name: "Alban Muller France",
                  desc: "40 years of expertise in natural cosmetic formulation from the heart of France's Cosmetic Valley. Eco responsible plant based actives.",
                },
                {
                  icon: "school",
                  name: "Sahmyook Health University",
                  desc: "Academic research collaboration focused on dermatological studies, wellness technologies and health science innovation.",
                },
                {
                  icon: "science",
                  name: "Bionap Italy",
                  desc: "Standardized botanical extracts for nutraceuticals and cosmeceuticals. Mediterranean biodiversity for clinically validated efficacy.",
                },
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="p-10 bg-surface-container-lowest rounded-xl shadow-sm border-b-2 border-transparent hover:border-tertiary transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <MaterialIcon
                      name={partner.icon}
                      className="text-primary text-3xl"
                    />
                    <h4 className="font-headline text-2xl text-primary">
                      {partner.name}
                    </h4>
                  </div>
                  <p className="font-body text-on-surface-variant">
                    {partner.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-primary text-on-primary py-24 px-8 md:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "verified",
                title: "GMP Certified",
                desc: "Rigorous manufacturing standards guaranteeing safety, quality and batch consistency for every product.",
              },
              {
                icon: "workspace_premium",
                title: "ISO Accreditation",
                desc: "Internationally recognized quality management systems ensuring your products are ready for any global market.",
              },
              {
                icon: "gavel",
                title: "FDA Thailand",
                desc: "Full compliance with Thai FDA regulations. We handle local registration and smooth regulatory processes for you.",
              },
            ].map((cert) => (
              <div key={cert.title} className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <MaterialIcon
                    name={cert.icon}
                    filled
                    className="text-5xl text-on-primary-container"
                  />
                </div>
                <h4 className="font-headline text-3xl mb-4">{cert.title}</h4>
                <p className="font-body text-on-primary-container text-lg">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 px-8 md:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl text-primary italic text-center mb-20">
              Our Evolution
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-outline-variant/50 hidden md:block" />
              <div className="space-y-24">
                {[
                  {
                    side: "left",
                    title: "Founded 1990",
                    desc: "TF Cosmetology established in Bangkok, bringing pharmaceutical grade precision to cosmetics manufacturing.",
                  },
                  {
                    side: "right",
                    title: "Global Reach",
                    desc: "First international partnerships established with R&D laboratories in Japan and Italy.",
                  },
                  {
                    side: "left",
                    title: "GMP Certification",
                    desc: "Achieved full GMP and ISO certification, standardizing manufacturing excellence across the entire facility.",
                  },
                  {
                    side: "right",
                    title: "500 Plus Brands",
                    desc: "Celebrating 500 successful brand launches serving clients across Asia, Europe and North America.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-between"
                  >
                    <div
                      className={`w-full md:w-5/12 ${item.side === "left" ? "md:text-right" : "md:order-last md:text-left"}`}
                    >
                      <h4 className="font-headline text-3xl text-primary">
                        {item.title}
                      </h4>
                      <p className="font-body text-outline mt-2">
                        {item.desc}
                      </p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-tertiary z-10 hidden md:block" />
                    <div className="w-5/12 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 px-8 flex flex-col items-center text-center">
          <div className="max-w-3xl p-16 bg-surface-container rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-5xl text-primary mb-8 tracking-tight">
                Ready to Work With Us?
              </h2>
              <p className="font-body text-lg text-outline mb-12">
                Our expert team is ready to consult on your next formulation.
                Whether you are launching something new or scaling what you have,
                we are here to help.
              </p>
              <Link
                href="/get-started"
                className="inline-block px-12 py-4 bg-primary text-on-primary font-label text-sm uppercase tracking-[0.2em] rounded-md hover:opacity-90 transition-all shadow-xl shadow-primary/10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
