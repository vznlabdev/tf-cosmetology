import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "OEM and ODM Manufacturing Services — From Concept to Delivery",
  description:
    "Bespoke formulation, scalable production and full regulatory compliance. Start your project with TF Cosmetology.",
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

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="relative min-h-[700px] flex items-center px-8 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">
                Scientific Partnership
              </span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-primary leading-[0.95] mb-8">
                The Precision of{" "}
                <span className="italic">Manufacturing.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl mb-12 font-body font-light leading-relaxed">
                TF Cosmetology provides bespoke OEM and ODM solutions for beauty
                and wellness brands worldwide. We bridge the gap between
                visionary formulation and clinical scale production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="bg-primary text-on-primary px-10 py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest shadow-lg hover:opacity-95 transition-all text-center"
                >
                  Start Project
                </Link>
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all">
                  Capability Deck
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow bg-surface-container">
                <img src="/images/apothecary-bottles-pipettes-hero.jpg" alt="Minimalist amber glass apothecary bottles and pipettes on a clean beige stone surface" className="w-full h-full object-cover" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-12 bg-surface-container-lowest p-6 rounded-lg editorial-shadow hidden xl:block border border-outline-variant/10">
                <p className="font-headline text-3xl text-primary mb-1">
                  99.8%
                </p>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                  Batch Compliance Accuracy
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 translate-x-1/4 skew-x-12 opacity-50" />
        </section>

        {/* Manufacturing Ecosystem Grid */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Light */}
              <div className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow">
                <MaterialIcon
                  name="science"
                  className="text-primary text-4xl mb-6 block"
                />
                <h3 className="font-headline text-2xl text-primary mb-4 italic">
                  Bespoke ODM
                </h3>
                <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                  End to end product development leveraging our proprietary
                  library of active ingredients and partnerships with R&amp;D labs
                  in Korea, Italy and France.
                </p>
                <ul className="space-y-2">
                  {[
                    "Market Trend Analysis",
                    "Clinical Validation",
                    "Regulatory Strategy",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2 - Featured Dark */}
              <div className="bg-primary text-on-primary p-10 rounded-xl editorial-shadow">
                <MaterialIcon
                  name="precision_manufacturing"
                  className="text-primary-fixed text-4xl mb-6 block"
                />
                <h3 className="font-headline text-2xl mb-4 italic">
                  Scalable OEM
                </h3>
                <p className="font-body text-on-primary-container mb-6 leading-relaxed">
                  Precision contract manufacturing in our GMP and ISO certified
                  facility. From small batch startup runs to full scale
                  production.
                </p>
                <ul className="space-y-2">
                  {[
                    "GMP Standard Facility",
                    "Automated Filling Lines",
                    "Cold Press Processing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-primary-container"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3 - Light */}
              <div className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow">
                <MaterialIcon
                  name="verified"
                  className="text-primary text-4xl mb-6 block"
                />
                <h3 className="font-headline text-2xl text-primary mb-4 italic">
                  Global Quality
                </h3>
                <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                  Rigorous quality control protocols exceeding international
                  standards. Full regulatory support for Thai FDA, EU and
                  international compliance.
                </p>
                <ul className="space-y-2">
                  {[
                    "Double Blind QC",
                    "EU and FDA Compliance",
                    "Sustainable Sourcing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lab Specifications */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-16 italic">
                Laboratory Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    label: "Facility Rating",
                    value: "GMP and ISO Certified",
                  },
                  {
                    label: "Production Lines",
                    value: "Skincare, Supplements, Soap, Functional Foods",
                  },
                  {
                    label: "Quality Lab",
                    value: "In House Microbiology and Stability Testing",
                  },
                  {
                    label: "Batch Stability",
                    value: "Accelerated 36 Month Testing",
                  },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="border-b border-outline-variant/30 pb-4"
                  >
                    <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                      {spec.label}
                    </p>
                    <p className="font-body text-lg text-on-surface">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex items-center">
              <blockquote className="border-l-4 border-tertiary pl-8">
                <p className="font-headline text-2xl italic text-primary leading-relaxed">
                  &ldquo;Our facility is designed to maintain absolute sterility
                  while fostering the creative precision our chemists need to
                  develop world class formulations.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-12 italic text-center">
              Inquire for Collaboration
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body"
                  />
                </div>
                <div>
                  <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body"
                  />
                </div>
              </div>
              <div>
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                  Project Scope
                </label>
                <select className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 appearance-none font-body">
                  <option>Full ODM Development</option>
                  <option>OEM Formulation Only</option>
                  <option>Supplement Manufacturing</option>
                  <option>Technical Compliance Review</option>
                  <option>Global Distribution Partnership</option>
                </select>
              </div>
              <div>
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-5 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-xl"
              >
                Submit Brief
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
