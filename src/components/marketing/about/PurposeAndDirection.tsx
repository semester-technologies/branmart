// src/components/marketing/about/PurposeAndDirection.tsx

import Image from "next/image";

const cards = [
  {
    title: "Our Mission",
    description:
      "To empower individuals and businesses to create, manage, and scale their online presence without barriers.",
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted platform for building and growing digital businesses across every industry.",
  },
];

export default function PurposeAndDirection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h2 className="font-display text-4xl font-bold text-[#461004] uppercase leading-tight mb-3">
              Our Purpose And Direction
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We exist to make website creation simple, accessible, and built for growth.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3"
              >
                <p className="text-sm font-semibold text-[#241717]">{card.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[460px] shrink-0">
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about-purpose.png"
              alt="Two women working together"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}