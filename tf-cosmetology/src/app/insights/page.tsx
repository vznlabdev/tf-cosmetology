"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, featuredArticle } from "@/data/articles";
import type { ArticleTag } from "@/data/articles";

type FilterTag = "All" | ArticleTag;

const filterTabs: FilterTag[] = [
  "All",
  "Ingredients",
  "Trends",
  "Industry News",
  "Guides",
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");

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
          <Link href={`/insights/${featuredArticle.slug}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5">
              <div className="lg:col-span-7 h-[500px] lg:h-[600px] relative overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-label text-xs uppercase tracking-[0.2em] px-3 py-1 bg-primary text-on-primary rounded-full">
                    {featuredArticle.tag}
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest text-outline">
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="font-headline text-4xl lg:text-5xl leading-[1.1] mb-6 text-on-surface tracking-tight">
                  {featuredArticle.title}
                </h2>
                <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed opacity-90">
                  {featuredArticle.excerpt}
                </p>
                <span className="group flex items-center gap-3 font-label font-bold text-primary uppercase tracking-widest text-sm">
                  Read the Full Article
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          </Link>
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
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group"
            >
              <article>
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
                <span className="inline-flex items-center font-label text-xs font-bold uppercase tracking-widest text-primary border-b border-transparent group-hover:border-primary transition-all">
                  Read More
                </span>
              </article>
            </Link>
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
