// src/components/marketing/templates/TemplatesHero.tsx

import Link from "next/link";

export default function TemplatesHero() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#461004] uppercase leading-tight">
          Find The Perfect Template For <br /> Your Business
        </h1>

        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          Explore professional designs for every industry. Customize them to
          fit your brand and launch faster.
        </p>

        <Link
          href="templates/all"
          className="text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-7 py-3 rounded-full transition-colors"
        >
          Explore all templates
        </Link>

      </div>
    </section>
  );
}