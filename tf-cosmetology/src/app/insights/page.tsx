"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ArticleTag =
  | "All"
  | "Ingredients"
  | "Trends"
  | "Industry News"
  | "Guides";

const articles = [
  {
    tag: "Ingredients" as ArticleTag,
    title: "Colostrum: The Ingredient Redefining Gut Health Supplements",
    excerpt:
      "Why bovine colostrum is becoming the most requested ingredient in supplement manufacturing and what brands should know.",
    image: "/images/dried-botanical-elements-stones.jpg",
    alt: "Dried botanical elements and smooth ceramic stones on a textured background",
  },
  {
    tag: "Trends" as ArticleTag,
    title: "Why Gummies Are Outselling Capsules 3 to 1",
    excerpt:
      "Consumer preference data shows gummy supplements are dominating. Here is how to formulate for taste and efficacy.",
    image: "/images/iridescent-cosmetic-gel-textures.jpg",
    alt: "Iridescent cosmetic gel textures with prismatic light reflections",
  },
  {
    tag: "Industry News" as ArticleTag,
    title: "Thai FDA Updates for Cosmetic and Supplement Manufacturers",
    excerpt:
      "Key regulatory changes affecting OEM producers in Thailand and what they mean for your compliance strategy.",
    image: "/images/robotic-assembly-line-skincare.jpg",
    alt: "Robotic assembly line for skincare packaging in a sterile facility",
  },
  {
    tag: "Guides" as ArticleTag,
    title: "How to Launch a Skincare Brand with an OEM Partner",
    excerpt:
      "A step by step guide for first time founders navigating product development, MOQs and manufacturing timelines.",
    image: "/images/flat-lay-product-mockups.jpg",
    alt: "Elegant minimalist product mockups with clean labels",
  },
  {
    tag: "Ingredients" as ArticleTag,
    title: "Niacinamide, Peptides and Ceramides: The 2026 Skincare Stack",
    excerpt:
      "The three ingredients driving formulation requests this year and how to differentiate your products.",
    image: "/images/blue-algae-microscope.jpg",
    alt: "Blue algae structures under a microscope with teal lighting",
  },
  {
    tag: "Trends" as ArticleTag,
    title: "Energy Coffee Meets Beauty: The Functional Beverage Opportunity",
    excerpt:
      "How brands are combining nootropics, collagen and specialty coffee into a new supplement category.",
    image: "/images/glass-test-tubes-flower-petals.jpg",
    alt: "Glass test tubes containing fluids and soft white flower petals",
  },
];

const filterTabs: ArticleTag[] = [
  "All",
  "Ingredients",
  "Trends",
  "Industry News",
  "Guides",
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState<ArticleTag>("All");

  const filtered =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.tag === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-32 px-8 max-w-screen-2xl mx-auto">
        {/* Hero */}
        <header className="mb-20 max-w-3xl">
          <h1 className="font-headline text-6xl md:text-8xl font-light tracking-tighter text-primary mb-6 italic">
            Insights
          </h1>
          <p className="font-body text-xl md:text-2xl text-outline leading-relaxed font-light">
            Trends, ingredients and industry knowledge to help you build a
            better brand.
          </p>
        </header>

        {/* Featured Article */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5">
            <div className="lg:col-span-7 h-[500px] lg:h-[600px] relative overflow-hidden">
              <img
                src="/images/featured-article-laboratory-glassware.jpg"
                alt="Laboratory glassware with botanical extracts and golden backlighting"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-label text-xs uppercase tracking-[0.2em] px-3 py-1 bg-primary text-on-primary rounded-full">
                  Industry News
                </span>
                <span className="font-label text-xs uppercase tracking-widest text-outline">
                  5 min read
                </span>
              </div>
              <h2 className="font-headline text-4xl lg:text-5xl leading-[1.1] mb-6 text-on-surface tracking-tight">
                The Rise of Functional Foods in Beauty and Wellness
              </h2>
              <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed opacity-90">
                From colostrum supplements to nootropic coffee blends, the line
                between cosmetics and nutrition is disappearing. We explore how
                contract manufacturers are adapting to meet demand across both
                categories.
              </p>
              <span className="group flex items-center gap-3 font-label font-bold text-primary uppercase tracking-widest text-sm cursor-pointer">
                Read the Full Article
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <nav className="flex flex-wrap items-center gap-x-10 gap-y-4 mb-16 pb-6 border-b border-outline-variant/20">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`font-label text-sm uppercase tracking-widest pb-2 transition-colors ${
                activeFilter === tab
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-outline hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {filtered.map((article) => (
            <article key={article.title} className="group">
              <div className="aspect-[4/5] mb-8 overflow-hidden rounded-lg bg-surface-container">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label text-[10px] uppercase tracking-widest px-2 py-0.5 border border-outline/30 rounded text-outline">
                  {article.tag}
                </span>
              </div>
              <h3 className="font-headline text-2xl mb-4 text-on-surface leading-tight group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="font-body text-on-surface-variant line-clamp-2 mb-6 text-sm leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center font-label text-xs font-bold uppercase tracking-widest text-primary border-b border-transparent hover:border-primary transition-all cursor-pointer">
                Read More
              </span>
            </article>
          ))}
        </section>

        {/* Newsletter Bar */}
        <section className="mt-32 p-12 lg:p-20 rounded-xl bg-surface-container-high relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-headline text-3xl md:text-5xl text-primary mb-4 leading-tight">
                Get Monthly Beauty Industry Insights
              </h2>
              <p className="font-body text-on-surface-variant text-lg">
                Join brand founders and R&amp;D specialists receiving our
                curated intelligence report.
              </p>
            </div>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow min-w-[300px]">
                <input
                  className="w-full bg-surface-container-lowest border-none px-6 py-4 rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50 font-label"
                  placeholder="professional@email.com"
                  type="email"
                />
              </div>
              <button
                className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label uppercase tracking-widest text-sm font-bold hover:opacity-90 transition-colors whitespace-nowrap"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
