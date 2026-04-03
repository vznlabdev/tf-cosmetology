import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center pt-20 px-8 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">
                The Premium OEM Standard
              </span>
              <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight text-on-background leading-[0.9] mb-8 text-balanced">
                Your Brand{" "}
                <br />
                <span className="italic font-light">Starts Here</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl mb-12 font-body font-light leading-relaxed">
                GMP Certified. World Class R&amp;D. Trusted by 500 Plus Brands.
                We transform clinical innovation into market-leading cosmetic
                and nutraceutical excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="bg-primary text-on-primary px-10 py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest shadow-lg hover:opacity-95 transition-all text-center"
                >
                  Get a Free Quote
                </Link>
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all">
                  Download Our Catalog
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow bg-surface-container">
                <Image
                  src="/images/elegant-glass-skincare-bottles.jpg"
                  alt="Elegant glass skincare bottles on textured stone surface with soft shadows and warm morning light"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover grayscale-[20%] mix-blend-multiply opacity-90"
                  priority
                  unoptimized
                />
              </div>
              {/* Value Badges Floating */}
              <div className="absolute -bottom-6 -left-12 bg-surface-container-lowest p-6 rounded-lg editorial-shadow hidden xl:block border border-outline-variant/10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <MaterialIcon
                      name="verified"
                      className="text-tertiary"
                    />
                    <span className="font-label text-xs uppercase tracking-widest font-bold">
                      Low Minimums
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MaterialIcon
                      name="description"
                      className="text-tertiary"
                    />
                    <span className="font-label text-xs uppercase tracking-widest font-bold">
                      FDA Registration Handled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 translate-x-1/4 skew-x-12 opacity-50" />
        </section>

        {/* Logo Marquee */}
        <section className="py-12 bg-surface-container-low/50">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-wrap justify-between items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <span className="font-label font-bold tracking-widest text-lg">
                GMP
              </span>
              <span className="font-label font-bold tracking-widest text-lg">
                ISO
              </span>
              <span className="font-label font-bold tracking-widest text-lg">
                FDA
              </span>
              <span className="font-headline italic text-xl">Inabata</span>
              <span className="font-headline italic text-xl">Vevy Europe</span>
              <span className="font-headline italic text-xl">
                Alban Muller
              </span>
              <span className="font-headline italic text-xl text-center leading-none">
                Sahmyook
                <br />
                <span className="text-[10px] uppercase tracking-tighter font-label">
                  University Korea
                </span>
              </span>
              <span className="font-label font-bold text-xl">
                Bionap Italy
              </span>
            </div>
          </div>
        </section>

        {/* Segment Cards */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-headline text-5xl font-light tracking-tight mb-20 text-center">
              What Are You Looking For?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "rocket_launch",
                  title: "Launch My Own Brand",
                  subtitle: "For influencers and first time founders",
                  link: "Explore Path",
                  href: "/get-started",
                },
                {
                  icon: "handshake",
                  title: "Find an OEM Partner",
                  subtitle: "For existing beauty and wellness brands",
                  link: "OEM Capabilities",
                  href: "/services",
                },
                {
                  icon: "language",
                  title: "Distribute Products",
                  subtitle: "For international buyers and distributors",
                  link: "Wholesale Info",
                  href: "/get-started",
                },
                {
                  icon: "science",
                  title: "Develop a Custom Formula",
                  subtitle:
                    "Cosmetics, supplements or functional foods",
                  link: "R&D Services",
                  href: "/services",
                },
              ].map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group bg-surface-container p-10 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-500 cursor-pointer flex flex-col justify-between h-80"
                >
                  <div>
                    <MaterialIcon
                      name={card.icon}
                      className="text-4xl mb-6 block group-hover:text-primary-fixed transition-colors"
                    />
                    <h3 className="font-headline text-2xl font-normal mb-2 leading-tight group-hover:italic transition-all">
                      {card.title}
                    </h3>
                    <p className="text-sm font-body opacity-70">
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest font-bold">
                    {card.link}{" "}
                    <MaterialIcon name="arrow_forward" className="text-sm" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid (Asymmetric Bento) */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-4 h-auto md:h-[800px]">
              <Link
                href="/products"
                className="md:col-span-8 md:row-span-1 relative group overflow-hidden rounded-xl min-h-[300px]"
              >
                <img src="/images/cream-texture-aesthetic.jpg" alt="Skincare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-black/60 to-transparent w-full text-white">
                  <h4 className="font-headline text-3xl font-light">
                    Skincare
                  </h4>
                  <p className="text-sm font-body opacity-80 mt-2">
                    Serums, creams, cleansers, masks and treatments
                  </p>
                </div>
              </Link>
              <Link
                href="/products"
                className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl min-h-[250px]"
              >
                <img src="/images/luxury-bath-botanical-soap.jpg" alt="Body Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full text-white">
                  <h4 className="font-headline text-2xl font-light">
                    Body Care
                  </h4>
                </div>
              </Link>
              <Link
                href="/supplements"
                className="md:col-span-3 md:row-span-1 relative group overflow-hidden rounded-xl min-h-[250px]"
              >
                <img src="/images/supplement-capsules-frosted-bottle.jpg" alt="Supplements" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full text-white">
                  <h4 className="font-headline text-2xl font-light">
                    Supplements
                  </h4>
                </div>
              </Link>
              <Link
                href="/products"
                className="md:col-span-3 md:row-span-1 relative group overflow-hidden rounded-xl min-h-[250px]"
              >
                <img src="/images/handmade-artisanal-soap-lavender.jpg" alt="Soap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full text-white">
                  <h4 className="font-headline text-2xl font-light">Soap</h4>
                </div>
              </Link>
              <Link
                href="/products"
                className="md:col-span-6 md:row-span-1 relative group overflow-hidden rounded-xl min-h-[250px]"
              >
                <img src="/images/high-end-makeup-swatches.jpg" alt="Makeup and Specialty" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full text-white">
                  <h4 className="font-headline text-3xl font-light">
                    Makeup &amp; Specialty
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="font-headline text-5xl font-light tracking-tight">
                How It Works
              </h2>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant max-w-xs text-right hidden md:block">
                From concept to delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-outline-variant/30 -z-10" />

              {[
                {
                  num: "01",
                  title: "Share Your Vision",
                  body: "Tell us what you want to create. We listen, ask the right questions and build a plan tailored to your goals.",
                  isIcon: false,
                },
                {
                  num: "02",
                  title: "We Develop Your Formula",
                  body: "Our R&D partners in Korea, Italy and France craft custom prototypes for your approval.",
                  isIcon: false,
                },
                {
                  num: "03",
                  title: "Production & Compliance",
                  body: "GMP certified manufacturing with full regulatory support and FDA registration.",
                  isIcon: false,
                },
                {
                  num: "04",
                  title: "Ship Worldwide",
                  body: "Finished products packaged and delivered to any global market.",
                  isIcon: true,
                },
              ].map((step) => (
                <div key={step.num} className="relative pt-12">
                  {step.isIcon ? (
                    <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center editorial-shadow mb-8">
                      <MaterialIcon name="public" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center editorial-shadow mb-8 border border-outline-variant/10">
                      <span className="text-xl font-normal font-headline">
                        {step.num}
                      </span>
                    </div>
                  )}
                  <h4 className="font-headline text-2xl font-normal mb-4">
                    {step.title}
                  </h4>
                  <p className="text-on-surface-variant font-body leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-8 bg-surface-container-low overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "We came in with nothing but an idea for a skincare line. TF guided us through formula development, packaging and FDA registration. Our first production run sold out in two weeks.",
                  role: "Founder & Creator",
                  company: "Independent Skincare Brand, Thailand",
                },
                {
                  quote:
                    "Switching manufacturers to TF improved our quality consistency and cut our per unit costs. The R&D team understood exactly what we needed.",
                  role: "Supply Chain Director",
                  company: "Established Beauty Brand, Europe",
                },
                {
                  quote:
                    "They provided all compliance documentation fast and accurately. Distribution into the EU has never been this smooth.",
                  role: "International Distributor",
                  company: "Wellness Distribution Group, Germany",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest p-12 rounded-xl editorial-shadow relative"
                >
                  <MaterialIcon
                    name="format_quote"
                    filled
                    className="text-tertiary-fixed-dim text-6xl absolute -top-4 -right-2 opacity-50"
                  />
                  <p className="font-headline text-2xl italic font-light mb-8 leading-snug">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest" />
                    <div>
                      <h5 className="font-label font-bold text-xs uppercase tracking-widest">
                        {t.role}
                      </h5>
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global R&D Partners Ticker */}
        <section className="py-8 bg-primary text-on-primary overflow-hidden">
          <div className="flex whitespace-nowrap gap-16 items-center">
            <div className="flex gap-16 items-center animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center">
                  <span className="font-label text-xs uppercase tracking-[0.4em] font-semibold">
                    Global R&amp;D Partners
                  </span>
                  <span className="h-1 w-1 rounded-full bg-on-primary/30" />
                  <span className="font-headline italic text-lg uppercase tracking-widest font-light">
                    Korea
                  </span>
                  <span className="h-1 w-1 rounded-full bg-on-primary/30" />
                  <span className="font-headline italic text-lg uppercase tracking-widest font-light">
                    Italy
                  </span>
                  <span className="h-1 w-1 rounded-full bg-on-primary/30" />
                  <span className="font-headline italic text-lg uppercase tracking-widest font-light">
                    France
                  </span>
                  <span className="h-1 w-1 rounded-full bg-on-primary/30" />
                  <span className="font-headline italic text-lg uppercase tracking-widest font-light">
                    Japan
                  </span>
                  <span className="h-1 w-1 rounded-full bg-on-primary/30" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky CTA Section */}
        <section
          className="py-32 px-8 bg-surface-container-high relative overflow-hidden"
          id="contact"
        >
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <div className="bg-surface-container-lowest rounded-2xl p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 editorial-shadow">
              <div>
                <h2 className="font-headline text-5xl font-normal tracking-tight mb-8 leading-none text-primary">
                  Ready to Build <br />
                  Your Brand?
                </h2>
                <p className="text-xl text-on-surface-variant font-body font-light mb-12">
                  Join over 500 brands that started their journey in our
                  laboratories. Tell us about your project and we will put
                  together a custom plan.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <MaterialIcon
                      name="verified_user"
                      className="text-primary text-3xl"
                    />
                    <div>
                      <h6 className="font-label font-extrabold uppercase tracking-widest text-xs mb-1">
                        Strict Confidentiality
                      </h6>
                      <p className="text-sm text-on-surface-variant font-body">
                        Your formulas and IP are protected by legal NDAs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <MaterialIcon
                      name="biotech"
                      className="text-primary text-3xl"
                    />
                    <div>
                      <h6 className="font-label font-extrabold uppercase tracking-widest text-xs mb-1">
                        Premium Ingredients
                      </h6>
                      <p className="text-sm text-on-surface-variant font-body">
                        Sourced globally from Korea, Italy, France and Japan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 transition-all py-3 px-0 placeholder:text-outline-variant font-body"
                    />
                  </div>
                  <div className="relative group">
                    <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@brand.com"
                      className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 transition-all py-3 px-0 placeholder:text-outline-variant font-body"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                    Product Interest
                  </label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 transition-all py-3 px-0 appearance-none font-body">
                    <option>Skincare Formulation</option>
                    <option>Body Care &amp; Personal Care</option>
                    <option>Health Supplements</option>
                    <option>Functional Foods</option>
                    <option>Specialty Makeup</option>
                    <option>Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-5 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-xl"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
          {/* Decorative circle */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl" />
        </section>
      </main>
      <Footer />
    </>
  );
}
