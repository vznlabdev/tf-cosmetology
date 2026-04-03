import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Story — TF Cosmetology Since 1990",
  description:
    "The history and evolution of TF Cosmetology from Bangkok startup to globally connected OEM manufacturer.",
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

export default function HeritagePage() {
  const leaders = [
    {
      image: "/images/ceo-portrait-arkarapat.jpg",
      name: "Arkarapat Chanajindasopon",
      title: "Chief Executive Officer",
    },
    {
      image: "/images/qc-rd-director-portrait.jpg",
      name: "Penchit Charoensiri",
      title: "QC and R&D Director",
    },
    {
      image: "/images/rd-manager-portrait.jpg",
      name: "Dr. Sang Hyun Moh",
      title: "R&D Manager",
    },
    {
      image: "/images/professional-man-glasses-studio.jpg",
      name: "Our Growing Team",
      title: "Operations and Production",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-32 px-8 overflow-hidden">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6 block">
                Our Heritage
              </span>
              <h1 className="font-headline text-6xl md:text-8xl leading-[1.05] text-primary mb-8">
                The bridge between{" "}
                <span className="italic">botanical soul</span> and clinical
                rigor.
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                TF Cosmetology was founded on a singular premise: that great
                products require both the wisdom of natural science and the
                precision of modern manufacturing.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-lg">
                <img
                  src="/images/vintage-apothecary-bottle-stone.jpg"
                  alt="Vintage glass apothecary bottle on a stone surface with soft morning light"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-8 bg-surface-container-lowest shadow-2xl rounded-lg max-w-[240px]">
                <p className="font-headline text-3xl text-tertiary">1990</p>
                <p className="font-label text-[10px] uppercase tracking-widest mt-2 text-outline">
                  The First Formulation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Bento */}
        <section className="py-24 bg-surface-container-low px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between h-full min-h-[320px] editorial-shadow">
                <MaterialIcon
                  name="biotech"
                  className="text-4xl text-primary block"
                />
                <div>
                  <h3 className="font-headline text-2xl mb-4">
                    Pharmaceutical Precision
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Every ingredient is verified. Every formula is validated. We
                    bring pharmaceutical grade standards to cosmetics and
                    supplement manufacturing.
                  </p>
                </div>
              </div>
              {/* Value 2 - Featured */}
              <div className="bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between h-full min-h-[320px] editorial-shadow">
                <MaterialIcon
                  name="eco"
                  className="text-4xl text-primary-fixed-dim block"
                />
                <div>
                  <h3 className="font-headline text-2xl mb-4">
                    Natural Innovation
                  </h3>
                  <p className="font-body text-sm opacity-80 leading-relaxed">
                    We source from trusted botanical suppliers worldwide. Science
                    enhances what nature provides. Our partners in Italy and
                    France lead in plant based active extraction.
                  </p>
                </div>
              </div>
              {/* Value 3 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between h-full min-h-[320px] editorial-shadow">
                <MaterialIcon
                  name="history_edu"
                  className="text-4xl text-tertiary block"
                />
                <div>
                  <h3 className="font-headline text-2xl mb-4">
                    Trusted Legacy
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Over 30 years of manufacturing for brands across Asia and
                    Europe. We build long term partnerships, not one off
                    transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-32 px-8 bg-background">
          <div className="max-w-screen-lg mx-auto">
            <h2 className="font-headline text-4xl mb-20 text-center">
              A Legacy of Innovation
            </h2>
            <div className="space-y-24">
              {/* Timeline Entry 1 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <img
                    src="/images/1920s-laboratory-photograph.jpg"
                    alt="Historic laboratory with glass beakers and scientific equipment"
                    className="w-full aspect-video object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-tertiary font-bold tracking-widest text-xs">
                    FOUNDATION
                  </span>
                  <h3 className="font-headline text-3xl mt-2 mb-4">
                    1990: Bangkok
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    TF Cosmetology established in Bangkok, Thailand. Beginning
                    with cosmetics contract manufacturing for local beauty
                    brands, bringing pharmaceutical grade precision to every
                    formulation.
                  </p>
                </div>
              </div>

              {/* Timeline Entry 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <img
                    src="/images/skin-cell-structure-microscopic.jpg"
                    alt="Modern microscopic view of skin cell structure"
                    className="w-full aspect-video object-cover rounded-lg shadow-inner"
                  />
                </div>
                <div className="w-full md:w-1/2 text-right md:text-left">
                  <span className="font-label text-tertiary font-bold tracking-widest text-xs">
                    EVOLUTION
                  </span>
                  <h3 className="font-headline text-3xl mt-2 mb-4">
                    International Expansion
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Partnerships formed with Inabata Japan, Vevy Europe Italy and
                    Alban Muller France. TF becomes a globally connected
                    manufacturer with R&amp;D laboratories across three
                    continents.
                  </p>
                </div>
              </div>

              {/* Timeline Entry 3 */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <img
                    src="/images/laboratory-beaker-pipettes.jpg"
                    alt="Laboratory beakers and pipettes in a clinical setting"
                    className="w-full aspect-video object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-label text-tertiary font-bold tracking-widest text-xs">
                    CERTIFICATION
                  </span>
                  <h3 className="font-headline text-3xl mt-2 mb-4">
                    GMP and ISO Standards
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Achieved full GMP and ISO certification, standardizing
                    manufacturing excellence across the entire facility. Every
                    batch now meets international safety and quality benchmarks.
                  </p>
                </div>
              </div>

              {/* Timeline Entry 4 */}
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <img
                    src="/images/laboratory-glassware-golden-sunlight.jpg"
                    alt="Laboratory glassware illuminated by golden sunlight"
                    className="w-full aspect-video object-cover rounded-lg shadow-inner"
                  />
                </div>
                <div className="w-full md:w-1/2 text-right md:text-left">
                  <span className="font-label text-tertiary font-bold tracking-widest text-xs">
                    TODAY
                  </span>
                  <h3 className="font-headline text-3xl mt-2 mb-4">
                    500 Plus Brands
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Celebrating 500 successful brand launches serving clients
                    across Asia, Europe and North America. Continuing to expand
                    into supplements, functional foods and specialty
                    formulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-32 px-8 bg-surface-container-highest/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl mb-4">The Custodians</h2>
              <p className="font-body text-on-surface-variant max-w-2xl">
                The team continuing our legacy of manufacturing excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader) => (
                <div key={leader.name} className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-container mb-6">
                    <img
                      src={leader.image}
                      alt={`${leader.name} — ${leader.title}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-headline text-xl">{leader.name}</h4>
                  <p className="font-label text-[10px] uppercase tracking-widest text-outline mt-1">
                    {leader.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8 border-t border-outline-variant/15">
          <div className="max-w-screen-md mx-auto text-center">
            <h2 className="font-headline text-4xl mb-6">
              Experience the Formulation.
            </h2>
            <p className="font-body text-on-surface-variant mb-10">
              Ready to discuss your next project? Our team is here to help.
            </p>
            <Link
              href="/get-started"
              className="bg-primary text-on-primary px-10 py-4 rounded-md font-label text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-colors inline-block"
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
