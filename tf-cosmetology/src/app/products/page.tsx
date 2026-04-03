"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const categories = [
  "All",
  "Skincare",
  "Body Care",
  "Supplements",
  "Soap",
  "Makeup",
  "Functional Foods",
  "Specialty",
];

const products = [
  {
    title: "Advanced Skincare",
    tags: ["Hyaluronic Acid", "Niacinamide", "Ceramides"],
    badge: "Low MOQ Available",
    category: "Skincare",
    image: "/images/glass-dropper-bottle-warm-stone.jpg",
  },
  {
    title: "Body Care",
    tags: ["Shea Butter", "Vitamin E", "Botanical Oils"],
    badge: "Low MOQ Available",
    category: "Body Care",
    image: "/images/cosmetic-textures-cream-gel.jpg",
  },
  {
    title: "Supplements and Nutraceuticals",
    tags: ["Collagen", "Colostrum", "Ashwagandha"],
    badge: null,
    category: "Supplements",
    image: "/images/lab-supplements-powders-petri.jpg",
  },
  {
    title: "Botanical Soap",
    tags: ["Cold Pressed", "Essential Oils", "Herbal Clay"],
    badge: "Low MOQ Available",
    category: "Soap",
    image: "/images/artisan-soap-botanical-stone.jpg",
  },
  {
    title: "Makeup",
    tags: ["Mineral Based", "Clean Formula", "SPF Protection"],
    badge: null,
    category: "Makeup",
    image: "/images/modern-makeup-pigments-brushes.jpg",
  },
  {
    title: "Functional Foods and Specialty",
    tags: ["Gummies", "Energy Coffee", "Colostrum Drinks"],
    badge: "Low MOQ Available",
    category: "Functional Foods",
    image: "/images/laboratory-glassware-golden-sunlight.jpg",
  },
];

const quizOptions = [
  "Premium Luxury",
  "Dermatology Clinical",
  "Clean Organic",
  "Mass Market",
  "Wellness and Supplements",
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showEmailGate, setShowEmailGate] = useState(false);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="px-8 max-w-screen-2xl mx-auto mb-16">
          <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-primary mb-8 italic">
            Explore Our Product Range
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Proven formulas ready to customize or build from scratch. Our
            laboratory combines decades of formulation heritage with modern
            molecular science.
          </p>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-[88px] z-40 bg-surface/90 backdrop-blur-md mb-20">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex overflow-x-auto pb-4 gap-8 border-b border-outline-variant/20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`whitespace-nowrap font-label text-sm uppercase tracking-[0.2em] pb-4 transition-colors ${
                    activeFilter === cat
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant/60 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-8 max-w-screen-2xl mx-auto pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <div
                key={product.title}
                className="bg-surface-container-lowest rounded-xl editorial-shadow overflow-hidden group"
              >
                <div className="aspect-[4/3] bg-surface-container-high relative overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-label uppercase tracking-widest text-primary">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-2xl text-primary mb-4">
                    {product.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-label uppercase tracking-widest text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowEmailGate(true)}
                      className="flex-1 bg-primary text-on-primary py-3 rounded-md font-label text-xs uppercase tracking-widest hover:opacity-90 transition-all text-center"
                    >
                      View Catalog
                    </button>
                    <Link
                      href="/get-started"
                      className="flex-1 bg-secondary-container text-on-secondary-container py-3 rounded-md font-label text-xs uppercase tracking-widest hover:bg-surface-container-highest transition-all text-center"
                    >
                      Request Sample
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-surface-container rounded-full text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-8">
              Takes less than 2 minutes
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6 italic">
              Not Sure What You Need?
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-16 max-w-2xl mx-auto">
              Answer three quick questions about your brand and vision. Our R&amp;D
              team will curate a selection of formulas tailored to your market.
            </p>
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-outline mb-6">
                What is your primary market focus?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {quizOptions.map((opt) => (
                  <button
                    key={opt}
                    className="px-6 py-3 bg-surface-container-lowest rounded-full font-label text-sm hover:bg-primary hover:text-on-primary transition-all editorial-shadow"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Floating R&D Button */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
          <Link
            href="/services"
            className="bg-primary text-on-primary px-4 py-6 rounded-l-xl font-label text-[10px] uppercase tracking-widest writing-mode-vertical hover:opacity-90 transition-all editorial-shadow"
            style={{ writingMode: "vertical-rl" }}
          >
            Need Something Custom? Talk to R&amp;D
          </Link>
        </div>
      </main>

      {/* Email Gate Modal */}
      {showEmailGate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl p-12 max-w-md w-full mx-4 editorial-shadow relative">
            <button
              onClick={() => setShowEmailGate(false)}
              className="absolute top-4 right-4 text-outline hover:text-on-surface"
            >
              <MaterialIcon name="close" />
            </button>
            <h2 className="font-headline text-3xl text-primary mb-4">
              Access Full Catalog
            </h2>
            <p className="font-body text-on-surface-variant mb-8">
              Enter your details to receive our complete formula directory and
              ingredient specifications.
            </p>
            <form className="space-y-6">
              <div>
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body"
                />
              </div>
              <div>
                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                  Professional Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all"
              >
                Download PDF
              </button>
              <p className="text-[10px] text-outline text-center">
                By clicking download you agree to our privacy policy regarding
                business communications.
              </p>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
