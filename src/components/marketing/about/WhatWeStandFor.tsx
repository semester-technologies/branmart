// src/components/marketing/about/WhatWeStandFor.tsx

import Image from "next/image";

const values = [
  {
    number: "01",
    title: "Simplicity",
    description:
      "We believe building a website should be easy for everyone. Branmart removes technical barriers with tools that help you launch and manage your business website in minutes. Every feature is designed to save time and keep the process simple.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "We constantly improve Branmart with new tools and ideas that help businesses grow. From design flexibility to smart integrations, we bring modern solutions that keep you ahead in a fast-changing digital space.",
  },
  {
    number: "03",
    title: "Customer Focus",
    description:
      "Your goals shape what we build. We listen to user feedback, refine our features, and deliver updates that make your experience better. Every improvement is focused on helping you succeed online.",
  },
  {
    number: "04",
    title: "Integrity",
    description:
      "We build with transparency and trust. Our platform keeps your data secure and our policies clear. We value honesty in our work and in our relationship with every user.",
  },
];

export default function WhatWeStandFor() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* Left: image */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="relative w-full h-[460px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about-values.png"
              alt="Branmart team celebrating"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: values */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="mb-4">
            <h2 className="font-display text-4xl font-bold text-[#461004] uppercase leading-tight mb-3">
              What We Stand For
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our values shape how we build, support, and grow with every user.
            </p>
          </div>

          {values.map((v) => (
            <div
              key={v.number}
              className="border border-gray-200 rounded-2xl p-6 flex gap-5"
            >
              <span className="text-sm font-semibold text-gray-300 shrink-0 mt-0.5">
                {v.number}
              </span>
              <div>
                <p className="text-sm font-semibold text-[#241717] mb-2">{v.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}