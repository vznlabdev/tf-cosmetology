import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | TF Cosmetology",
  description:
    "Terms of service for TF Cosmetology OEM manufacturing. Inquiry submissions, intellectual property, confidentiality and liability.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-32">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-24">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-outline mb-6 block">
            Regulatory Documentation
          </span>
          <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-primary leading-tight">
            Terms of Service
          </h1>
          <div className="mt-12 h-px w-24 bg-tertiary mx-auto opacity-30" />
          <p className="mt-8 font-headline italic text-xl text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Establishing the standards and legal framework for B2B
            manufacturing partnerships with TF Cosmetology.
          </p>
        </section>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-6 space-y-24">
          {/* Section 1: Agreement */}
          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-baseline">
              <div className="w-full md:w-1/4 shrink-0">
                <span className="font-headline italic text-3xl text-tertiary opacity-40">
                  01
                </span>
                <h2 className="font-label font-bold text-xs uppercase tracking-widest mt-2">
                  Agreement to Terms
                </h2>
              </div>
              <div className="w-full">
                <p className="font-body text-lg leading-relaxed text-on-surface opacity-90">
                  By accessing the TF Cosmetology website, submitting an inquiry
                  through our Get Started form, or engaging our OEM
                  manufacturing services, you acknowledge that you have read,
                  understood and agreed to be bound by these Terms of Service.
                  These terms constitute a binding agreement between TF
                  Cosmetology Co., Ltd. and the client.
                </p>
                <p className="mt-6 font-body text-base leading-relaxed text-on-surface-variant">
                  Our services are intended for business-to-business (B2B)
                  clients including brand owners, distributors and private label
                  partners. We reserve the right to decline service to any party
                  that does not meet our partnership criteria or cannot provide
                  valid business documentation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Inquiry Submissions (Bento card) */}
          <section className="bg-surface-container-low rounded-xl p-12 md:p-16">
            <div className="mb-12">
              <span className="font-headline italic text-3xl text-tertiary opacity-40">
                02
              </span>
              <h2 className="font-label font-bold text-xs uppercase tracking-widest mt-2 mb-6">
                Inquiry Submissions & Project Scope
              </h2>
              <p className="font-headline text-3xl leading-snug text-primary">
                Every project begins with a conversation. Submissions through
                our forms are invitations to collaborate, not binding contracts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-4">
                <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-primary">
                  Inquiry Process
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Submitting an inquiry through our website does not constitute a
                  binding order or manufacturing agreement. All projects require
                  a formal quotation, agreed specifications and a signed
                  manufacturing contract before production begins.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-primary">
                  Project Specifications
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Final formulations, packaging specifications and minimum order
                  quantities are determined during the consultation phase.
                  Changes to agreed specifications after production has commenced
                  may incur additional costs and timeline adjustments.
                </p>
              </div>
            </div>
            <div className="mt-16 relative overflow-hidden rounded-lg aspect-[21/9]">
              <img
                src="/images/production-line-stainless-tanks.jpg"
                alt="Manufacturing facility with stainless steel production equipment"
                className="object-cover w-full h-full grayscale opacity-50 contrast-125"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] font-label uppercase tracking-[0.4em] opacity-80">
                  Manufacturing Partnership Standards
                </span>
              </div>
            </div>
          </section>

          {/* Section 3: IP */}
          <section className="relative border-l-2 border-primary/5 pl-12 py-4">
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-headline italic text-3xl text-tertiary opacity-40">
                  03
                </span>
                <h2 className="font-label font-bold text-xs uppercase tracking-widest mt-2">
                  Intellectual Property
                </h2>
              </div>
              <p className="font-headline text-2xl leading-relaxed text-on-surface italic">
                &ldquo;Your brand identity is yours. Our formulation expertise
                is ours. Together we create something neither could alone.&rdquo;
              </p>
              <div className="space-y-6 max-w-2xl">
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  All proprietary formulation methods, process technologies,
                  base formulations and manufacturing know-how developed by TF
                  Cosmetology remain the exclusive intellectual property of TF
                  Cosmetology Co., Ltd. unless a written IP transfer agreement is
                  executed.
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  Clients retain full ownership of their brand names,
                  trademarks, packaging designs and any custom formulations
                  developed exclusively for their brand under a paid development
                  contract. Base formulations available to multiple clients
                  remain TF Cosmetology property.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Confidentiality */}
          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-full md:w-1/4 shrink-0">
                <span className="font-headline italic text-3xl text-tertiary opacity-40">
                  04
                </span>
                <h2 className="font-label font-bold text-xs uppercase tracking-widest mt-2">
                  Confidentiality
                </h2>
              </div>
              <div className="w-full space-y-8">
                <div className="p-8 bg-surface-container-highest rounded-lg">
                  <h3 className="font-label font-bold text-[10px] uppercase tracking-widest text-primary mb-4">
                    Mutual Non-Disclosure
                  </h3>
                  <p className="font-body text-sm text-on-surface leading-relaxed">
                    Both parties agree to maintain strict confidentiality
                    regarding all proprietary information exchanged during the
                    inquiry, development and manufacturing process. This includes
                    formulation details, pricing structures, business strategies
                    and client lists. Confidentiality obligations survive
                    termination of any business relationship.
                  </p>
                </div>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  TF Cosmetology will never disclose the identity of our
                  private-label manufacturing clients or share your product
                  formulation details with third parties without explicit written
                  consent. We operate under a strict white-label confidentiality
                  protocol for all OEM partnerships.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Liability */}
          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-full md:w-1/4 shrink-0">
                <span className="font-headline italic text-3xl text-tertiary opacity-40">
                  05
                </span>
                <h2 className="font-label font-bold text-xs uppercase tracking-widest mt-2">
                  Liability & Indemnity
                </h2>
              </div>
              <div className="w-full space-y-8">
                <div className="p-8 bg-surface-container-highest rounded-lg">
                  <h3 className="font-label font-bold text-[10px] uppercase tracking-widest text-primary mb-4">
                    Limitation of Liability
                  </h3>
                  <p className="font-body text-sm text-on-surface leading-relaxed">
                    TF Cosmetology&apos;s liability for any claim arising from
                    manufacturing services shall not exceed the total amount paid
                    by the client for the specific batch or order in question.
                    We are not liable for indirect, incidental or consequential
                    damages.
                  </p>
                </div>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  Clients agree to indemnify and hold TF Cosmetology harmless
                  from claims arising from product misuse, unauthorized
                  reformulation, failure to follow storage and handling
                  instructions, or marketing claims not approved by our
                  regulatory team. Product liability transfers to the client upon
                  confirmed delivery and acceptance of goods.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Governing Law */}
          <section className="flex flex-col items-center text-center pb-12">
            <span className="font-headline italic text-3xl text-tertiary opacity-40">
              06
            </span>
            <h2 className="font-label font-bold text-xs uppercase tracking-widest mt-2 mb-8">
              Governing Law
            </h2>
            <p className="font-body text-lg text-primary max-w-xl">
              These terms shall be governed by and construed in accordance with
              the laws of the Kingdom of Thailand. Any disputes arising from
              these terms shall be subject to the exclusive jurisdiction of the
              courts of Thailand.
            </p>
            <div className="mt-16 flex flex-col md:flex-row gap-4">
              <Link
                href="/get-started"
                className="bg-primary text-white px-10 py-4 font-label font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Start a Project
              </Link>
              <Link
                href="/compliance"
                className="bg-secondary-container text-on-secondary-container px-10 py-4 font-label font-bold text-xs uppercase tracking-widest hover:bg-surface-variant transition-colors"
              >
                View Compliance Standards
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
