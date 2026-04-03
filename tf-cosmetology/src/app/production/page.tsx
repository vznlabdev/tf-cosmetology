import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Our Facility — GMP Certified Manufacturing in Bangkok | TF Cosmetology",
  description:
    "Tour our production capabilities. Quality standards, facility specs and manufacturing process for cosmetics and supplements.",
};

function MaterialIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
}

export default function ProductionPage() {
  const capabilities = [
    {
      icon: "face",
      title: "Facial Care",
      body: "Anti-aging serums, hydrating cleansers and regenerative treatments tailored to skin health.",
    },
    {
      icon: "spa",
      title: "Body Care",
      body: "Therapeutic formulations for full body restoration, from lotions to scrubs to sunscreen.",
    },
    {
      icon: "content_cut",
      title: "Hair Care",
      body: "Scalp focused treatments, performance shampoos and conditioning systems.",
    },
    {
      icon: "clean_hands",
      title: "Soap",
      body: "Cold process, milled and specialty soap using botanical oils and herbal ingredients.",
    },
    {
      icon: "biotech",
      title: "Supplements",
      body: "Nutraceutical grade capsules, gummies, powders and functional foods.",
    },
    {
      icon: "science",
      title: "Specialty Products",
      body: "Custom SPF formulations, sanitizers, mouth spray and innovative delivery formats.",
    },
  ];

  const stats = [
    { value: "30+", label: "Years in Operation" },
    { value: "GMP/ISO", label: "Certified Facility" },
    { value: "500+", label: "Brands Launched" },
    { value: "1,000+", label: "Available Formulations" },
  ];

  const standards = [
    {
      icon: "syringe",
      title: "Raw Material Testing",
      body: "Purity verification of every ingredient before it enters formulation.",
    },
    {
      icon: "inventory",
      title: "In Process Quality Checks",
      body: "Real time pH, viscosity and microbial monitoring during mixing.",
    },
    {
      icon: "temp_preferences_eco",
      title: "Stability Testing",
      body: "Accelerated stress testing to ensure product longevity and shelf life.",
    },
    {
      icon: "verified",
      title: "Final Product Verification",
      body: "Full sensory and analytical clearance for every batch before shipping.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative min-h-[700px] flex items-center overflow-hidden px-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div className="z-10">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary/60 mb-6 block">
                Manufacturing Excellence
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-primary leading-[0.9] mb-8 italic">
                Where Your Products <br /> Come to Life
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-md font-light leading-relaxed mb-10">
                A synthesis of pharmaceutical precision and cosmetic artistry.
                We transform visionary concepts into market ready formulations
                in our state of the art facility.
              </p>
              <Link
                href="/get-started"
                className="bg-primary text-on-primary px-10 py-4 rounded-md font-label text-sm uppercase tracking-widest hover:opacity-90 transition-all inline-flex items-center gap-3"
              >
                Tour the facility
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
            <div className="relative h-[600px] w-full bg-surface-container rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/modern-lab-interior-hero.jpg"
                alt="Modern clean laboratory interior with clinical lighting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-5xl font-bold tracking-tight text-primary italic mb-6">
                  Core Capabilities
                </h2>
                <p className="font-body text-lg text-on-surface-variant font-light">
                  From organic skincare to complex pharmaceutical supplements,
                  our multi-disciplinary approach ensures excellence across
                  diverse product categories.
                </p>
              </div>
              <div className="h-[1px] flex-grow mx-12 mb-4 bg-outline-variant opacity-20 hidden md:block" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/10">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className={`bg-surface-container-lowest p-12 group transition-transform duration-400 hover:-translate-y-1 ${
                    i < 3 ? "border-b border-outline-variant/10" : ""
                  } ${i % 3 !== 2 ? "border-r border-outline-variant/10" : ""}`}
                >
                  <MaterialIcon
                    name={cap.icon}
                    className="text-4xl text-primary mb-8 block"
                  />
                  <h3 className="font-headline text-2xl font-semibold mb-4">
                    {cap.title}
                  </h3>
                  <p className="font-body text-on-surface-variant font-light text-sm leading-relaxed">
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facility Stats */}
        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-headline text-5xl md:text-6xl font-bold italic mb-2">
                  {stat.value}
                </div>
                <div className="font-label text-xs uppercase tracking-widest text-on-primary/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-4 block">
                Quality Assurance
              </span>
              <h2 className="font-headline text-5xl font-bold text-primary italic">
                Our Standards
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {standards.map((std) => (
                <div key={std.title} className="relative group">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-container text-primary">
                    <MaterialIcon name={std.icon} className="text-3xl" />
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-4">
                    {std.title}
                  </h4>
                  <p className="font-body text-on-surface-variant text-sm font-light leading-relaxed">
                    {std.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Factory Gallery */}
        <section className="py-20 bg-surface-container-high/30">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[800px]">
              {/* Large image - R&D Laboratory */}
              <div className="col-span-12 md:col-span-8 row-span-2 relative overflow-hidden group rounded-xl">
                <img
                  src="/images/lab-researcher-white-coat.jpg"
                  alt="Scientific researcher in white lab coat working in a modern laboratory"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur px-6 py-3 rounded-md">
                  <span className="font-label text-xs uppercase tracking-widest text-primary">
                    R&amp;D Laboratory
                  </span>
                </div>
              </div>
              {/* Top right - Production Floor */}
              <div className="col-span-6 md:col-span-4 row-span-1 relative overflow-hidden group rounded-xl">
                <img
                  src="/images/production-line-stainless-tanks.jpg"
                  alt="Stainless steel production tanks in manufacturing facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur px-6 py-3 rounded-md">
                  <span className="font-label text-xs uppercase tracking-widest text-primary">
                    Bulk Production
                  </span>
                </div>
              </div>
              {/* Bottom right - Packaging */}
              <div className="col-span-6 md:col-span-4 row-span-1 relative overflow-hidden group rounded-xl">
                <img
                  src="/images/automated-packaging-line.jpg"
                  alt="Professional automated packaging line for cosmetic products"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur px-6 py-3 rounded-md">
                  <span className="font-label text-xs uppercase tracking-widest text-primary">
                    Automated Packaging
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-40 bg-background overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px]" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-tertiary-container/5 rounded-full blur-[120px]" />
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-primary italic mb-12">
              See How We Can Manufacture Your Product
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="/get-started"
                className="bg-primary text-on-primary px-12 py-5 rounded-md font-label text-sm uppercase tracking-[0.2em] shadow-xl shadow-primary/10 hover:shadow-2xl transition-all"
              >
                Get Started
              </Link>
              <button className="text-primary px-12 py-5 rounded-md font-label text-sm uppercase tracking-[0.2em] border border-outline-variant/30 hover:bg-surface-container transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
