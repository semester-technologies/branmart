// src/components/marketing/features/FeaturesHero.tsx

import Link from "next/link";

export default function FeaturesHero() {
  return (
    <section className="w-full py-20 px-4 bg-[#fff6ec]">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#461004] uppercase leading-tight">
          Everything Your <br /> Business Website Needs
        </h1>

        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          From multi-page websites to WhatsApp integration. Branmart has all the
          tools to build your professional online presence.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/sign-up"
            className="text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-6 py-3 rounded-full transition-colors"
          >
            Start Free
          </Link>
          <Link
            href="/templates"
            className="text-sm font-medium text-[#461004] bg-[#fde8d0] hover:bg-[#fdd5b0] px-6 py-3 rounded-full transition-colors"
          >
            Explore Templates
          </Link>
        </div>

      </div>
    </section>
  );
}