import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="font-headline text-2xl italic font-light text-on-background">
            TF Cosmetology
          </div>
          <p className="font-body text-sm text-on-background/60 max-w-sm">
            Leading the cosmetics and nutraceutical OEM industry with clinical
            excellence and scientific integrity since 1990.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h6 className="font-label text-[10px] tracking-widest uppercase text-primary font-extrabold">
              Solutions
            </h6>
            <Link
              href="/services"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Formulation
            </Link>
            <Link
              href="/production"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Manufacturing
            </Link>
            <Link
              href="/branding"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Branding
            </Link>
            <Link
              href="/supplements"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Supplements
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-label text-[10px] tracking-widest uppercase text-primary font-extrabold">
              Company
            </h6>
            <Link
              href="/about"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              About
            </Link>
            <Link
              href="/heritage"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Heritage
            </Link>
            <Link
              href="/production"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Production
            </Link>
            <Link
              href="/insights"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              News
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-label text-[10px] tracking-widest uppercase text-primary font-extrabold">
              Legal
            </h6>
            <Link
              href="/privacy"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Terms of Service
            </Link>
            <Link
              href="/compliance"
              className="font-label text-[10px] tracking-widest uppercase text-on-background/60 hover:text-primary transition-all"
            >
              Regulatory Compliance
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center border-t border-outline-variant/10 pt-8">
        <p className="font-label text-[10px] text-on-background/40 tracking-[0.3em] uppercase font-semibold">
          &copy; 2026 TF Cosmetology (Thailand) Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
