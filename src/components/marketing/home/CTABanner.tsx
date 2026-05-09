// src/components/marketing/home/CTABanner.tsx

import Link from "next/link";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  heading = "Start Building Your\nWebsite Today",
  subtext = "Create your store, customize your design, and start selling—all in one platform.",
  primaryLabel = "Get Started Free",
  primaryHref = "/sign-up",
  secondaryLabel = "Explore Templates",
  secondaryHref = "/templates",
}: CTABannerProps) {
  return (
    <section className="w-full py-20 px-4 bg-[#fff6ec]">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#461004] uppercase leading-tight whitespace-pre-line">
          {heading}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
          {subtext}
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="text-sm font-medium text-[#461004] border border-[#461004] hover:bg-[#461004] hover:text-white px-6 py-3 rounded-full transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}

          <Link
            href={primaryHref}
            className="text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-6 py-3 rounded-full transition-colors"
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
