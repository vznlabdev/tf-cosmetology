"use client";

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

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="mb-24 max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-headline font-light tracking-tight leading-tight mb-8">
            Let&apos;s Build Something Together
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-body font-light leading-relaxed">
            Tell us about your project and we will get back to you within 24
            hours with a custom plan.
          </p>
        </section>

        {/* Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form Wizard */}
          <div className="lg:col-span-8">
            <form className="space-y-16">
              {/* Step 1 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-label uppercase tracking-widest text-outline">
                    Step 01
                  </span>
                  <h2 className="text-3xl font-headline italic">
                    I want to...
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "rocket_launch",
                      label: "Launch a New Brand",
                      value: "launch",
                    },
                    {
                      icon: "add_circle",
                      label: "Add Products to My Existing Line",
                      value: "add",
                    },
                    {
                      icon: "public",
                      label: "Distribute Products in My Country",
                      value: "distribute",
                    },
                    {
                      icon: "more_horiz",
                      label: "Something Else",
                      value: "other",
                    },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className="group relative flex flex-col justify-between p-8 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-all border-b-2 border-transparent focus-within:border-primary"
                    >
                      <input
                        className="sr-only"
                        name="goal"
                        type="radio"
                        value={opt.value}
                      />
                      <MaterialIcon
                        name={opt.icon}
                        className="text-primary mb-12"
                      />
                      <span className="text-lg font-headline font-semibold">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-label uppercase tracking-widest text-outline">
                    Step 02
                  </span>
                  <h2 className="text-3xl font-headline italic">
                    I am interested in...
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  {[
                    "Skincare",
                    "Body Care",
                    "Supplements",
                    "Soap",
                    "Makeup",
                    "Functional Foods",
                    "Other",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                        type="checkbox"
                      />
                      <span className="text-on-surface group-hover:text-primary transition-colors">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-label uppercase tracking-widest text-outline">
                    Step 03
                  </span>
                  <h2 className="text-3xl font-headline italic">
                    My estimated starting quantity is...
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Under 500 Units",
                    "500 to 2000",
                    "2000 to 5000",
                    "5000 Plus",
                  ].map((qty) => (
                    <label
                      key={qty}
                      className="px-6 py-3 bg-surface-container rounded-full cursor-pointer hover:bg-surface-container-highest transition-colors flex items-center gap-2"
                    >
                      <input
                        className="text-primary border-outline-variant focus:ring-primary"
                        name="qty"
                        type="radio"
                      />
                      <span className="text-sm font-medium">{qty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 4 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-label uppercase tracking-widest text-outline">
                    Step 04
                  </span>
                  <h2 className="text-3xl font-headline italic">
                    Your Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body"
                    />
                  </div>
                  <div>
                    <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body"
                    />
                  </div>
                  <div>
                    <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-label text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">
                    Your Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-0 border-b-2 border-outline/30 focus:border-primary focus:ring-0 py-3 px-0 font-body resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-5 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-xl"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>

            {/* Post Submission */}
            <div className="mt-24 p-12 bg-surface-container-low rounded-2xl">
              <h3 className="font-headline text-2xl italic text-primary mb-8">
                Thanks. Here is what happens next.
              </h3>
              <div className="space-y-6">
                {[
                  "We review your brief within 24 hours",
                  "We send relevant samples and pricing",
                  "You decide if we are the right fit",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center font-label text-xs font-bold">
                      {i + 1}
                    </div>
                    <p className="font-body text-on-surface-variant">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            {/* Direct Channels */}
            <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow">
              <h4 className="font-headline text-xl text-primary mb-6">
                Direct Channels
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MaterialIcon name="phone" className="text-primary mt-0.5" />
                  <div className="font-body text-sm space-y-1">
                    <div>063-535-2158</div>
                    <div>093-625-6556</div>
                    <div>089-362-9491</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MaterialIcon name="phone" className="text-primary" />
                  <span className="font-body text-sm">
                    English / International: +1 512-290-5329
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MaterialIcon name="call" className="text-primary" />
                  <span className="font-body text-sm">Tel: 02-987-1625</span>
                </div>
                <div className="flex items-center gap-3">
                  <MaterialIcon name="chat_bubble" className="text-primary" />
                  <span className="font-body text-sm">
                    LINE: @tf-cosmetology
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MaterialIcon name="mail" className="text-primary" />
                  <span className="font-body text-sm">
                    sales@tfcosmetology.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MaterialIcon name="schedule" className="text-primary" />
                  <span className="font-body text-sm">
                    Mon to Fri, 10am to 5:30pm Bangkok Time
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-surface-container rounded-xl h-48 relative overflow-hidden">
              <img src="/images/abstract-city-map-grey.jpg" alt="Map of Bangkok" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MaterialIcon
                    name="location_on"
                    className="text-primary text-4xl"
                  />
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface mt-2 font-bold leading-relaxed">
                    42/34 Moo 5 Tambon Lamlukka<br />
                    Amphur Lamlukka, Pathum Thani 12150
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow">
              <p className="font-headline text-lg italic text-primary leading-relaxed mb-4">
                &ldquo;Their attention to detail during the sampling phase was
                exactly what our brand needed to launch with confidence.&rdquo;
              </p>
              <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                Brand Founder, Independent Skincare Line
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
