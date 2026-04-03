import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Supplements and Nutraceuticals Manufacturing — Capsules, Gummies, Powders",
  description:
    "GMP certified supplement manufacturing. Colostrum, gummies, functional coffee, wellness blends. Global ingredient sourcing.",
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

export default function SupplementsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative min-h-[921px] flex items-center px-8 md:px-24 overflow-hidden bg-surface-container-low">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto z-10">
            <div>
              <span className="font-label uppercase text-xs tracking-[0.3em] text-outline mb-6 block">
                Precision Nutraceuticals
              </span>
              <h1 className="font-headline italic text-6xl md:text-8xl text-primary leading-[1.1] mb-8 tracking-tight">
                The Future of <br />
                Human Vitality
              </h1>
              <p className="text-on-surface-variant max-w-md text-lg leading-relaxed mb-10 font-light">
                Where rigorous laboratory science meets the quiet elegance of
                natural wellness. We formulate and manufacture the highest
                quality supplements, nutraceuticals and functional foods.
              </p>
              <div className="flex items-center space-x-8">
                <Link
                  href="/get-started"
                  className="bg-primary text-on-primary px-8 py-4 rounded-md font-label uppercase text-xs tracking-widest hover:opacity-90 transition-all editorial-shadow"
                >
                  Start Formulation
                </Link>
                <Link
                  href="/about"
                  className="text-primary font-label uppercase text-xs tracking-widest border-b border-outline-variant hover:border-primary transition-all pb-1"
                >
                  Our Credentials
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-lg editorial-shadow">
                <img src="/images/amber-apothecary-bottles-hero.jpg" alt="Amber glass apothecary bottles on warm stone surface with soft morning light" className="w-full h-full object-cover" />
              </div>
              {/* Data Sheet Overlay */}
              <div className="absolute -bottom-8 -left-12 hidden xl:block p-8 bg-surface-container-lowest editorial-shadow max-w-xs rounded-lg">
                <h4 className="font-headline text-xl italic text-primary mb-2">
                  GMP Certified Facility
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-surface-container-high pb-1">
                    <span className="text-[10px] uppercase tracking-wider text-outline">
                      Formulation Library
                    </span>
                    <span className="text-[10px] font-bold">500+ Formulas</span>
                  </div>
                  <div className="flex justify-between border-b border-surface-container-high pb-1">
                    <span className="text-[10px] uppercase tracking-wider text-outline">
                      Ingredient Sourcing
                    </span>
                    <span className="text-[10px] font-bold">
                      Japan, Italy, France
                    </span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant leading-tight pt-2">
                    Full FDA registration and international compliance support
                    included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Formulations Bento Grid */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-outline mb-4 block">
                What&apos;s in Demand
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-tight italic">
                Trending Formulations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large card */}
              <div className="bg-surface-container-low rounded-xl p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden">
                <span className="font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                  High Demand
                </span>
                <h3 className="font-headline text-3xl text-primary mb-3">
                  Colostrum &amp; Immunity
                </h3>
                <p className="font-body text-on-surface-variant max-w-md">
                  Bovine colostrum supplements for gut health, immunity support
                  and athletic recovery. Capsules, powders and functional drinks.
                </p>
              </div>

              {/* Right card */}
              <div className="bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between min-h-[400px] editorial-shadow">
                <MaterialIcon
                  name="science"
                  className="text-primary text-4xl"
                />
                <div>
                  <h3 className="font-headline text-3xl text-primary mb-3">
                    Adaptogenic Blends
                  </h3>
                  <p className="font-body text-on-surface-variant mb-4">
                    Ashwagandha, Rhodiola, Reishi and other adaptogens
                    formulated for stress management and sustained energy.
                  </p>
                  <Link
                    href="/products"
                    className="font-label text-xs uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
                  >
                    Explore Catalog →
                  </Link>
                </div>
              </div>

              {/* Dark card */}
              <div className="bg-primary text-on-primary rounded-xl p-10 flex flex-col justify-end min-h-[300px]">
                <span className="font-label text-[10px] uppercase tracking-widest text-on-primary-container mb-2">
                  Trending
                </span>
                <h3 className="font-headline text-3xl mb-3">Beauty Gummies</h3>
                <p className="font-body text-on-primary-container">
                  Biotin, collagen and vitamin complexes in chewable gummy
                  format. The fastest growing supplement category globally.
                </p>
              </div>

              {/* Wide card */}
              <div className="bg-surface-container rounded-xl p-10 flex flex-col justify-end min-h-[300px]">
                <h3 className="font-headline text-3xl text-primary mb-3">
                  Functional Coffee &amp; Energy
                </h3>
                <p className="font-body text-on-surface-variant">
                  Nootropic blended coffee, energy sachets and focus
                  formulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Sourcing */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-20 italic text-center">
              Global Sourcing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  location: "Bionap, Italy",
                  desc: "Standardized Mediterranean botanical extracts. Polyphenol rich compounds from olive, citrus and volcanic soil botanicals for cardiovascular and cognitive support.",
                },
                {
                  location: "Inabata, Japan",
                  desc: "Clinical grade matcha, marine collagen and specialty Japanese actives sourced through century old supply chain relationships.",
                },
                {
                  location: "Sahmyook University, Korea",
                  desc: "Academic research partnership for dermatological studies and next generation wellness ingredient validation.",
                },
              ].map((source) => (
                <div key={source.location}>
                  <p className="font-label text-xs uppercase tracking-widest text-tertiary mb-4">
                    {source.location}
                  </p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {source.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-outline mb-4 block">
                Methodology
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-tight italic">
                The TF Protocol
              </h2>
              <p className="font-body text-on-surface-variant mt-4 max-w-2xl">
                Our manufacturing process ensures every ingredient serves its
                purpose with precision.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  num: "01",
                  title: "Raw Material Verification",
                  desc: "Testing every botanical and active ingredient for purity and potency before formulation begins.",
                },
                {
                  num: "02",
                  title: "Formulation and Blending",
                  desc: "Precision mixing with temperature and humidity controls to preserve active compound integrity.",
                },
                {
                  num: "03",
                  title: "Encapsulation and Processing",
                  desc: "Capsules, tablets, gummies, powders and liquids produced on dedicated supplement production lines.",
                },
              ].map((step) => (
                <div key={step.num}>
                  <span className="font-headline text-6xl text-surface-container-highest select-none">
                    {step.num}
                  </span>
                  <h4 className="font-headline text-2xl text-primary mt-4 mb-4">
                    {step.title}
                  </h4>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Manufacture */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-surface-container-lowest rounded-xl p-10 editorial-shadow">
                  <div className="aspect-[3/2] bg-surface-container-high rounded-lg mb-6 overflow-hidden">
                    <img src="/images/green-white-capsules-glass-tray.jpg" alt="Capsules arranged in minimalist glass tray" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-3">
                    Capsules and Softgels
                  </h3>
                  <p className="font-body text-on-surface-variant">
                    Hard shell and softgel encapsulation for vitamins, minerals,
                    herbal extracts and specialty compounds.
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-10 editorial-shadow">
                  <div className="aspect-[3/2] bg-surface-container-high rounded-lg mb-6 overflow-hidden">
                    <img src="/images/organic-powders-ceramic-bowls.jpg" alt="Organic powders in ceramic bowls on textured surface" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-3">
                    Powders and Sachets
                  </h3>
                  <p className="font-body text-on-surface-variant">
                    Single serve sachets, bulk powders and stick packs for
                    collagen, protein, fiber and custom blends.
                  </p>
                </div>
              </div>
              <div className="space-y-8 md:mt-16">
                <div className="bg-surface-container-lowest rounded-xl p-10 editorial-shadow">
                  <div className="aspect-[3/2] bg-surface-container-high rounded-lg mb-6 overflow-hidden">
                    <img src="/images/gold-oil-capsules-lab-surface.jpg" alt="Clear capsules filled with gold oil on laboratory surface" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-3">
                    Gummies and Chewables
                  </h3>
                  <p className="font-body text-on-surface-variant">
                    Pectin and gelatin based gummy supplements in custom shapes,
                    flavors and formulations.
                  </p>
                </div>
                <div className="bg-primary text-on-primary rounded-xl p-10">
                  <h3 className="font-headline text-2xl mb-3">Bespoke R&amp;D</h3>
                  <p className="font-body text-on-primary-container mb-6">
                    Collaborate with our team to develop proprietary supplement
                    formulations that define your brand.
                  </p>
                  <Link
                    href="/get-started"
                    className="inline-block bg-surface-container-lowest text-primary px-8 py-3 rounded-md font-label text-xs uppercase tracking-widest hover:opacity-90 transition-all"
                  >
                    Request Technical Brief
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <MaterialIcon
              name="format_quote"
              filled
              className="text-tertiary-fixed-dim text-6xl mb-8"
            />
            <p className="font-headline text-3xl md:text-4xl italic text-primary leading-relaxed mb-8">
              &ldquo;The future of wellness is not about more supplements. It is
              about better formulations that the body can actually use.&rdquo;
            </p>
            <p className="font-label text-xs uppercase tracking-widest text-outline">
              Dr. Sang Hyun Moh, R&amp;D Manager, TF Cosmetology
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
