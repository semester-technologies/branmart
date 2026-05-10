// src/components/marketing/about/AboutHero.tsx

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full py-16 px-4 bg-[#fff6ec]">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#241717] uppercase leading-tight mb-4">
            Powering Businesses To <br /> Build And Grow Online
          </h1>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Branmart makes it simple for anyone to create a professional
            website, manage their store, and sell online without technical skills.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden">
          <Image
            src="/images/about-hero.png"
            alt="Branmart team"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}