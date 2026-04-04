import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  allArticles,
  getArticleBySlug,
  getRelatedArticles,
  getNextArticle,
} from "@/data/articles";
import type { ContentBlock } from "@/data/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | TF Cosmetology Insights`,
    description: article.excerpt,
  };
}

function renderContentBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="text-3xl font-headline font-medium text-primary mt-12 mb-6"
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mb-8">
          {block.text}
        </p>
      );
    case "quote":
      return (
        <div
          key={index}
          className="my-16 px-12 py-10 bg-surface-container-low rounded-xl relative overflow-hidden"
        >
          <span className="material-symbols-outlined text-6xl absolute -top-2 -left-2 opacity-10 text-primary">
            format_quote
          </span>
          <blockquote className="text-3xl italic leading-snug text-primary font-headline font-light">
            &ldquo;{block.text}&rdquo;
          </blockquote>
        </div>
      );
    case "image":
      return (
        <div key={index} className="mb-16">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full h-[400px] object-cover rounded-lg mb-4 grayscale hover:grayscale-0 transition-all duration-700"
          />
          {block.caption && (
            <p className="font-label text-[11px] text-outline text-right italic uppercase tracking-wider">
              {block.caption}
            </p>
          )}
        </div>
      );
    case "table":
      return (
        <div
          key={index}
          className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow my-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full font-label text-sm">
              <thead className="text-outline uppercase tracking-widest text-[10px]">
                <tr>
                  {block.headers?.map((h, i) => (
                    <th key={i} className="text-left py-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {block.rows?.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`py-4 ${ci === 0 ? "font-bold" : ""} ${
                          ci === row.length - 1
                            ? "text-primary font-bold"
                            : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(slug, 3);
  const next = getNextArticle(slug);

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-12">
            <div className="md:w-2/3">
              <span className="font-label text-xs tracking-[0.2em] uppercase text-primary font-bold mb-6 block">
                {article.tag} | TF Cosmetology Journal
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-on-surface leading-[1.1] mb-8">
                {article.title}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-outline-variant/20">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-outline font-label">
                Author
              </span>
              <span className="font-headline text-lg italic">
                {article.author}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-outline font-label">
                Publication Date
              </span>
              <span className="font-label text-sm font-semibold">
                {article.date}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-outline font-label">
                Reading Time
              </span>
              <span className="font-label text-sm font-semibold">
                {article.readTime}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-outline font-label">
                Category
              </span>
              <span className="font-label text-sm font-semibold">
                {article.tag}
              </span>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Body Content */}
          <article className="lg:w-[65%] font-headline text-lg leading-relaxed text-on-surface/90">
            {article.content.map((block, i) => renderContentBlock(block, i))}

            <div className="mt-20 pt-8 border-t border-outline-variant/20">
              <p className="font-label text-[10px] text-outline leading-loose uppercase tracking-widest">
                Published by TF Cosmetology Journal.
                <br />
                For inquiries regarding this article, contact
                sales@tfcosmetology.com.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-[35%]">
            <div className="sticky top-32 flex flex-col gap-12">
              {/* Actions */}
              <div className="bg-surface-container rounded-lg p-8">
                <Link
                  href="/get-started"
                  className="w-full bg-primary text-on-primary py-4 rounded-md flex items-center justify-center gap-3 mb-4 hover:opacity-90 transition-all font-label font-bold tracking-tight"
                >
                  <MaterialIcon name="mail" />
                  Get a Free Quote
                </Link>
                <button className="w-full border border-primary text-primary py-4 rounded-md flex items-center justify-center gap-3 hover:bg-surface-container-high transition-all font-label font-bold tracking-tight">
                  <MaterialIcon name="share" />
                  Share Article
                </button>
              </div>

              {/* Related Articles */}
              <div className="flex flex-col gap-6">
                <h4 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-outline border-b border-outline-variant/20 pb-4">
                  Related Articles
                </h4>
                <div className="flex flex-col gap-8">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/insights/${rel.slug}`}
                      className="group"
                    >
                      <span className="font-label text-[10px] text-tertiary font-bold block mb-1 uppercase tracking-widest">
                        {rel.tag}
                      </span>
                      <h5 className="font-headline text-xl group-hover:text-primary transition-colors">
                        {rel.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share Icons */}
              <div className="flex gap-4 pt-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center cursor-pointer hover:bg-primary hover:text-on-primary transition-all">
                  <MaterialIcon name="alternate_email" className="text-sm" />
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center cursor-pointer hover:bg-primary hover:text-on-primary transition-all">
                  <MaterialIcon name="link" className="text-sm" />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Author & Next Article Section */}
        <section className="mt-32 pt-24 border-t border-outline-variant/30 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* About Author */}
          <div className="bg-surface-container-low p-10 rounded-xl flex gap-8 items-start">
            <img
              src={article.authorImage}
              alt={article.author}
              className="w-24 h-24 rounded-full object-cover grayscale border-2 border-surface-container-highest"
            />
            <div>
              <span className="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block">
                Author
              </span>
              <h4 className="font-headline text-2xl mb-3">{article.author}</h4>
              <p className="font-body text-base text-on-surface-variant leading-snug">
                {article.authorTitle}
              </p>
            </div>
          </div>

          {/* Next Article */}
          {next && (
            <div className="flex flex-col justify-center items-end text-right">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">
                Next Article
              </span>
              <Link href={`/insights/${next.slug}`} className="group">
                <h4 className="font-headline text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">
                  {next.title}
                </h4>
                <span className="font-label text-sm font-bold text-primary flex items-center justify-end gap-2">
                  Read Next Article{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </span>
              </Link>
            </div>
          )}
        </section>

        {/* Newsletter Bar */}
        <section className="mt-32 bg-primary p-12 md:p-20 rounded-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="font-headline text-4xl text-on-primary leading-tight">
                Get Monthly Beauty Industry Insights
              </h2>
              <p className="font-body text-on-primary/60 mt-4">
                Join brand founders and R&amp;D specialists receiving our
                curated intelligence report.
              </p>
            </div>
            <form className="md:w-1/2 flex w-full">
              <input
                className="bg-white/10 border-none text-white placeholder:text-white/40 w-full px-6 py-4 rounded-l-md focus:ring-1 focus:ring-on-primary transition-all font-label"
                placeholder="your@email.com"
                type="email"
              />
              <button
                type="submit"
                className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-8 py-4 rounded-r-md whitespace-nowrap hover:opacity-90 transition-all font-label uppercase tracking-widest text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </section>
      </main>
      <Footer />
    </>
  );
}
