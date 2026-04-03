"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Supplements", href: "/supplements" },
  { label: "Journal", href: "/insights" },
  { label: "Contact", href: "/get-started" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locale, setLocale] = useState<"en" | "th">("en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="font-headline font-semibold text-2xl tracking-tighter text-on-background"
        >
          TF Cosmetology
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-background/70 hover:text-primary transition-colors font-headline italic tracking-tight text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLocale(locale === "en" ? "th" : "en")}
            className="flex items-center gap-1.5 font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <span className={locale === "en" ? "font-bold text-primary" : ""}>EN</span>
            <span className="text-outline-variant">|</span>
            <span className={locale === "th" ? "font-bold text-primary" : ""}>TH</span>
          </button>
          <Link
            href="/get-started"
            className="bg-primary text-on-primary px-8 py-2.5 rounded-md font-label font-medium tracking-wide hover:opacity-90 transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-on-background transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-background transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-background transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-surface px-8 pb-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-on-background/70 hover:text-primary font-headline italic text-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setLocale(locale === "en" ? "th" : "en")}
            className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant"
          >
            <span className={locale === "en" ? "font-bold text-primary" : ""}>EN</span>
            <span className="text-outline-variant">|</span>
            <span className={locale === "th" ? "font-bold text-primary" : ""}>TH</span>
          </button>
          <Link
            href="/get-started"
            className="block bg-primary text-on-primary px-8 py-3 rounded-md font-label font-medium tracking-wide text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
