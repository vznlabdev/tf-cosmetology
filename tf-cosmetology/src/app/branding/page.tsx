import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Branding Services — Logo, Packaging and Regulatory Labeling | TF Cosmetology",
  description:
    "Full brand development from identity design to FDA compliant packaging. We build brands not just products.",
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

export default function BrandingPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="relative min-h-[700px] flex items-center px-8 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">
                Brand Development
              </span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-primary leading-[0.95] mb-8">
                We Build Brands.{" "}
                <span className="italic">Not Just Products.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl mb-12 font-body font-light leading-relaxed">
                From your first idea to shelf ready packaging, we handle the
                creative and strategic side of launching your product line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="bg-primary text-on-primary px-10 py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest shadow-lg hover:opacity-95 transition-all text-center"
                >
                  Start Your Brand
                </Link>
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow bg-surface-container">
                <img
                  src="/images/black-cosmetic-tube-gold-text.jpg"
                  alt="Premium cosmetic tube packaging with gold label design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 translate-x-1/4 skew-x-12 opacity-50" />
        </section>

        {/* Services Grid */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Brand Identity */}
              <div className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow">
                <MaterialIcon
                  name="palette"
                  className="text-primary text-4xl mb-6 block"
                />
                <h3 className="font-headline text-2xl text-primary mb-4 italic">
                  Brand Identity
                </h3>
                <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                  Logo design, color systems, typography selection and visual
                  identity development tailored to your market positioning.
                </p>
                <ul className="space-y-2">
                  {[
                    "Brand Strategy",
                    "Visual Identity",
                    "Style Guidelines",
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

              {/* Card 2 - Packaging Design (Featured) */}
              <div className="bg-primary text-on-primary p-10 rounded-xl editorial-shadow">
                <MaterialIcon
                  name="inventory_2"
                  className="text-primary-fixed text-4xl mb-6 block"
                />
                <h3 className="font-headline text-2xl mb-4 italic">
                  Packaging Design
                </h3>
                <p className="font-body text-on-primary-container mb-6 leading-relaxed">
                  Structural packaging engineering, label design, material
                  selection and print production management. From concept sketch
                  to production ready files.
                </p>
                <ul className="space-y-2">
                  {[
                    "Structural Design",
                    "Label and Print",
                    "Material Sourcing",
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

              {/* Card 3 - Regulatory Labeling */}
              <div className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow">
                <MaterialIcon
                  name="gavel"
                  className="text-primary text-4xl mb-6 block"
                />
                <h3 className="font-headline text-2xl text-primary mb-4 italic">
                  Regulatory Labeling
                </h3>
                <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                  FDA compliant ingredient lists, required disclaimers, barcode
                  generation and market specific labeling for Thailand, EU,
                  ASEAN and global export.
                </p>
                <ul className="space-y-2">
                  {[
                    "FDA Labeling",
                    "Barcode Creation",
                    "Export Compliance",
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

        {/* Portfolio Showcase */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow bg-surface-container">
                <img
                  src="/images/flat-lay-product-mockups.jpg"
                  alt="Elegant minimalist product mockups with clean labels"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8 italic">
                Already Have Your Branding?
              </h2>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-8 max-w-xl">
                No problem. Send us your design files and specifications. We
                produce to your exact requirements and manage the entire print
                and packaging production process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: "upload_file", label: "Design Files", desc: "AI, PDF, PSD accepted" },
                  { icon: "print", label: "Print Management", desc: "End to end production" },
                  { icon: "local_shipping", label: "Delivery", desc: "Direct to your warehouse" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <MaterialIcon
                      name={item.icon}
                      className="text-tertiary text-2xl mt-0.5"
                    />
                    <div>
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface font-bold">
                        {item.label}
                      </p>
                      <p className="font-body text-sm text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/get-started"
                className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all inline-block"
              >
                Upload Your Specs
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-5xl md:text-7xl font-light tracking-tighter text-primary italic mb-8">
              Start Building Your Brand
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
              Our creative and production teams work together to bring your
              vision to life.
            </p>
            <Link
              href="/get-started"
              className="bg-primary text-on-primary px-12 py-5 rounded-md font-label text-sm uppercase tracking-[0.2em] shadow-xl shadow-primary/10 hover:shadow-2xl transition-all inline-block"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
