import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Compliance & Standards | TF Cosmetology",
  description:
    "GMP certification, ISO 22716 & 9001:2015, FDA Thailand registration and international export standards. TF Cosmetology's regulatory framework.",
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

export default function CompliancePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-outline mb-6 block">
                Regulatory Framework
              </span>
              <h1 className="text-6xl md:text-8xl font-headline tracking-tighter leading-tight text-primary">
                Global Compliance <br />& Standards
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                Precision-engineered manufacturing processes validated through
                rigorous international scrutiny. We operate at the intersection
                of heritage formulation and clinical excellence.
              </p>
            </div>
          </div>
        </header>

        {/* Standards Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/15 rounded-xl overflow-hidden">
            {/* GMP */}
            <div className="bg-surface p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-container/10 text-primary font-label text-[10px] uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    Active Certification
                  </span>
                  <MaterialIcon
                    name="verified"
                    className="text-4xl text-primary/20"
                  />
                </div>
                <h3 className="text-3xl font-headline mb-4">
                  Good Manufacturing Practice (GMP)
                </h3>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-sm">
                  The definitive standard for quality assurance in cosmetic
                  production. Our facilities maintain strict environmental
                  controls, equipment calibration protocols and batch
                  documentation to ensure product safety and uniformity across
                  every production run.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="flex flex-col">
                  <span className="font-label text-[10px] uppercase text-outline">
                    Protocol
                  </span>
                  <span className="font-body text-sm font-bold">
                    ASEAN-GMP 2024
                  </span>
                </div>
                <div className="h-8 w-px bg-outline-variant/30" />
                <div className="flex flex-col">
                  <span className="font-label text-[10px] uppercase text-outline">
                    Audit Score
                  </span>
                  <span className="font-body text-sm font-bold">
                    99.8% Compliance
                  </span>
                </div>
              </div>
            </div>

            {/* ISO */}
            <div className="bg-surface-container-low p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-tertiary-container/10 text-tertiary font-label text-[10px] uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full mr-2" />
                    Quality Management
                  </span>
                  <MaterialIcon
                    name="architecture"
                    className="text-4xl text-tertiary/20"
                  />
                </div>
                <h3 className="text-3xl font-headline mb-4">
                  ISO 22716 & 9001:2015
                </h3>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-sm">
                  Globally recognized benchmarks for Quality Management Systems.
                  ISO 22716 governs cosmetics-specific GMP guidelines while ISO
                  9001:2015 validates our organizational quality framework
                  including documentation control, personnel training and
                  supplier qualification.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-surface-container px-3 py-2 rounded text-[11px] font-label font-bold uppercase tracking-tighter">
                  ISO:22716 COSMETICS
                </div>
                <div className="bg-surface-container px-3 py-2 rounded text-[11px] font-label font-bold uppercase tracking-tighter">
                  ISO:9001 SYSTEMS
                </div>
              </div>
            </div>

            {/* FDA Thailand */}
            <div className="bg-surface-container-low p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-container/10 text-primary font-label text-[10px] uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    Local Registration
                  </span>
                  <MaterialIcon
                    name="clinical_notes"
                    className="text-4xl text-primary/20"
                  />
                </div>
                <h3 className="text-3xl font-headline mb-4">
                  FDA Thailand Registration
                </h3>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-sm">
                  Full alignment with the Thai Food and Drug Administration
                  (Thai FDA). Every formulation undergoes rigorous safety
                  assessments, ingredient verification, label review and
                  microbiological testing before receiving market clearance for
                  domestic distribution.
                </p>
              </div>
              <div className="mt-8">
                <div className="font-label text-[10px] uppercase text-outline mb-1">
                  Registration Status
                </div>
                <div className="font-body text-sm italic">
                  &ldquo;Certified for OEM Cosmetic Manufacturing&rdquo;
                </div>
              </div>
            </div>

            {/* International Export */}
            <div className="bg-surface p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-[10px] uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-outline rounded-full mr-2" />
                    Global Logistics
                  </span>
                  <MaterialIcon
                    name="public"
                    className="text-4xl text-outline/20"
                  />
                </div>
                <h3 className="text-3xl font-headline mb-4">
                  International Export Standards
                </h3>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-sm">
                  Streamlined regulatory pathways for the EU (CPNP), US (FDA
                  VCRP), and ASEAN Harmonization. We provide full dossier
                  preparation, Certificate of Free Sale documentation and
                  regulatory support for global distribution partners.
                </p>
              </div>
              <div className="mt-8 flex gap-6">
                <div className="opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="font-label text-xs font-black tracking-widest">
                    EU (CE)
                  </span>
                </div>
                <div className="opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="font-label text-xs font-black tracking-widest">
                    US (FDA)
                  </span>
                </div>
                <div className="opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="font-label text-xs font-black tracking-widest">
                    ASEAN (ACC)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Integrity & Testing */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="bg-surface-container p-12 rounded-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2 className="text-5xl font-headline mb-6">
                  Technical Integrity & Testing
                </h2>
                <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                  Our laboratory doesn&apos;t just meet standards — we define
                  them. Each batch undergoes a multi-phase validation process
                  including stability testing, preservative efficacy and
                  toxicological review before release.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 text-sm font-body font-semibold">
                    <MaterialIcon
                      name="science"
                      className="text-primary text-xl"
                    />
                    <span>
                      High-Performance Liquid Chromatography (HPLC)
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm font-body font-semibold">
                    <MaterialIcon
                      name="biotech"
                      className="text-primary text-xl"
                    />
                    <span>
                      Microbiological Safety Screens (Total Plate Count)
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm font-body font-semibold">
                    <MaterialIcon
                      name="thermostat"
                      className="text-primary text-xl"
                    />
                    <span>
                      Accelerated Shelf-Life Stability Chambers
                    </span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
                  <h4 className="font-label text-[10px] uppercase tracking-widest text-outline mb-6">
                    Validation Dashboard
                  </h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                      <span className="font-headline text-xl">
                        Raw Material Purity
                      </span>
                      <span className="font-body text-2xl font-light">
                        99.98%
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                      <span className="font-headline text-xl">
                        Environmental Sterility
                      </span>
                      <span className="font-body text-2xl font-light">
                        Class 10k
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                      <span className="font-headline text-xl">
                        Batch Consistency Deviation
                      </span>
                      <span className="font-body text-2xl font-light">
                        &lt; 0.02%
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                      <span className="font-headline text-xl">
                        Traceability Matrix
                      </span>
                      <span className="font-body text-2xl font-light">
                        Full Lifecycle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Callout (Asymmetric) */}
        <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-xl">
              <Image
                src="/images/modern-lab-interior-hero.jpg"
                alt="Modern pharmaceutical laboratory interior"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-tertiary-fixed rounded-xl -z-10 opacity-20" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-headline mb-8 leading-tight">
              Beyond Documentation: A Culture of Compliance
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body leading-relaxed">
              <p>
                Compliance is not a static milestone but an ongoing commitment
                to the safety of the end consumer. At TF Cosmetology, our
                regulatory team works in tandem with our R&D scientists from
                the very first concept.
              </p>
              <p>
                This proactive approach ensures that every ingredient is not
                only effective but also aligns with the evolving landscape of
                international safety regulations, including restricted
                substances lists and sustainable sourcing mandates.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-outline-variant/30 flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
                <MaterialIcon
                  name="shield_person"
                  className="text-primary text-3xl"
                />
              </div>
              <div>
                <h5 className="font-headline text-lg italic">
                  Regulatory Affairs Division
                </h5>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                  TF Cosmetology Quality Assurance
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
