import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | TF Cosmetology",
  description:
    "How TF Cosmetology collects, uses and protects your personal information. Inquiry forms, catalog downloads and website analytics.",
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

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-24 text-center md:text-left">
            <div className="mb-4 inline-block">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-tertiary-container bg-tertiary-fixed px-3 py-1 rounded-full">
                Legal Framework
              </span>
            </div>
            <h1 className="font-headline text-6xl md:text-7xl font-light tracking-tight text-primary leading-none mb-8">
              Privacy Policy
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-on-surface-variant font-label text-sm tracking-wide">
              <span className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-outline-variant" />
                Last Updated: April 2, 2026
              </span>
              <span className="hidden md:block text-outline-variant opacity-30">
                |
              </span>
              <span>Document Ref: TFC-2026-PRIV-01</span>
            </div>
          </header>

          {/* Intro */}
          <section className="mb-20">
            <p className="font-headline text-2xl leading-relaxed text-on-surface italic opacity-80">
              At TF Cosmetology, we treat your data with the same precision we
              apply to our formulations. This policy explains how we collect, use
              and protect your personal information when you interact with our
              website, inquiry forms and business communications.
            </p>
          </section>

          {/* Content Blocks */}
          <div className="space-y-24">
            {/* Section 1 */}
            <article>
              <div className="flex items-baseline gap-6 mb-8 border-b border-outline-variant/15 pb-4">
                <span className="font-headline text-4xl italic text-tertiary-container opacity-40">
                  01.
                </span>
                <h2 className="font-headline text-3xl text-primary">
                  Information We Collect
                </h2>
              </div>
              <div className="font-headline text-xl leading-[1.8] text-on-surface space-y-6">
                <p>
                  We collect information that you provide directly when using our
                  services. This includes contact details submitted through our
                  Get Started form, quote request forms, and catalog download
                  requests, such as your name, email address, phone number,
                  company name and project details.
                </p>
                <p>
                  When you browse our website, we automatically collect technical
                  data including IP address, browser type, device information,
                  pages visited and session duration. This data helps us improve
                  our website experience and understand how visitors engage with
                  our content.
                </p>
              </div>
            </article>

            {/* Section 2 */}
            <article>
              <div className="flex items-baseline gap-6 mb-8 border-b border-outline-variant/15 pb-4">
                <span className="font-headline text-4xl italic text-tertiary-container opacity-40">
                  02.
                </span>
                <h2 className="font-headline text-3xl text-primary">
                  How We Use Your Data
                </h2>
              </div>
              <div className="font-headline text-xl leading-[1.8] text-on-surface space-y-6">
                <p>
                  We use the information we collect strictly for legitimate
                  business purposes:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="flex items-start gap-4">
                    <MaterialIcon
                      name="mail"
                      className="text-primary text-sm mt-2"
                    />
                    <span>
                      Responding to your inquiry with a custom manufacturing plan
                      within 24 hours of submission.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <MaterialIcon
                      name="description"
                      className="text-primary text-sm mt-2"
                    />
                    <span>
                      Delivering product catalogs and technical documentation you
                      have requested.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <MaterialIcon
                      name="analytics"
                      className="text-primary text-sm mt-2"
                    />
                    <span>
                      Analyzing website traffic patterns to improve our content
                      and user experience.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <MaterialIcon
                      name="campaign"
                      className="text-primary text-sm mt-2"
                    />
                    <span>
                      Sending industry insights and product updates to
                      subscribers who have opted in to our newsletter.
                    </span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Image Break */}
            <figure className="my-32">
              <div className="aspect-[21/9] w-full overflow-hidden rounded-xl bg-surface-container">
                <img
                  src="/images/laboratory-glassware-golden-sunlight.jpg"
                  alt="Laboratory glassware in warm golden sunlight"
                  className="w-full h-full object-cover mix-blend-multiply opacity-60 grayscale"
                />
              </div>
              <figcaption className="mt-4 font-label text-[10px] uppercase tracking-widest text-outline text-center">
                Data integrity is as fundamental as ingredient purity.
              </figcaption>
            </figure>

            {/* Section 3 */}
            <article>
              <div className="flex items-baseline gap-6 mb-8 border-b border-outline-variant/15 pb-4">
                <span className="font-headline text-4xl italic text-tertiary-container opacity-40">
                  03.
                </span>
                <h2 className="font-headline text-3xl text-primary">
                  Cookies and Analytics
                </h2>
              </div>
              <div className="font-headline text-xl leading-[1.8] text-on-surface space-y-6">
                <p>
                  Our website uses cookies and similar tracking technologies to
                  maintain session state, remember your preferences and collect
                  aggregated analytics data. We use Vercel Analytics and may use
                  third party analytics services to understand website usage
                  patterns.
                </p>
                <p>
                  You may configure your browser to reject cookies. However,
                  some features such as form pre-filling and session persistence
                  may not function as intended without them.
                </p>
              </div>
            </article>

            {/* Section 4 */}
            <article>
              <div className="flex items-baseline gap-6 mb-8 border-b border-outline-variant/15 pb-4">
                <span className="font-headline text-4xl italic text-tertiary-container opacity-40">
                  04.
                </span>
                <h2 className="font-headline text-3xl text-primary">
                  Third Party Disclosure
                </h2>
              </div>
              <div className="font-headline text-xl leading-[1.8] text-on-surface space-y-6">
                <p>
                  TF Cosmetology does not sell, trade or transfer your personal
                  information to external marketing entities. We share data only
                  with trusted service providers who assist in operating our
                  website and delivering our services, and only under strict
                  confidentiality agreements.
                </p>
                <p>
                  We may disclose information when required by law or to protect
                  the rights and safety of TF Cosmetology, our clients or the
                  public.
                </p>
              </div>
            </article>

            {/* Section 5 */}
            <article>
              <div className="flex items-baseline gap-6 mb-8 border-b border-outline-variant/15 pb-4">
                <span className="font-headline text-4xl italic text-tertiary-container opacity-40">
                  05.
                </span>
                <h2 className="font-headline text-3xl text-primary">
                  Your Rights
                </h2>
              </div>
              <div className="font-headline text-xl leading-[1.8] text-on-surface space-y-6">
                <p>
                  Under applicable data protection laws including Thailand&apos;s
                  Personal Data Protection Act (PDPA), you have the right to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="p-8 bg-surface-container-low rounded-xl">
                    <h4 className="font-label font-bold text-xs uppercase tracking-widest mb-4 text-primary">
                      Access and Portability
                    </h4>
                    <p className="text-sm opacity-80 font-body">
                      Request a copy of the personal data we hold about you or
                      your organization in a portable format.
                    </p>
                  </div>
                  <div className="p-8 bg-surface-container-low rounded-xl">
                    <h4 className="font-label font-bold text-xs uppercase tracking-widest mb-4 text-primary">
                      Correction and Erasure
                    </h4>
                    <p className="text-sm opacity-80 font-body">
                      Request correction of inaccurate data or permanent
                      deletion of your personal information from our systems.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Contact CTA */}
          <section className="mt-32 p-12 bg-primary text-on-primary rounded-xl text-center">
            <h3 className="font-headline text-3xl mb-6 italic">
              Privacy Inquiry
            </h3>
            <p className="font-body text-sm tracking-wide opacity-80 mb-8 max-w-lg mx-auto">
              If you have questions about this policy or wish to exercise your
              data rights, please contact us. We respond to all privacy requests
              within 30 days.
            </p>
            <Link
              href="/get-started"
              className="inline-block px-8 py-4 bg-surface text-primary font-label font-bold text-xs uppercase tracking-widest rounded-md hover:bg-secondary-fixed transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
