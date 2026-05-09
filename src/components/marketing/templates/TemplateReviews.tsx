// src/components/marketing/templates/TemplateReviews.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    quote:
      "The theme is easily customised with clean and stylish sections that work great on both mobile and desktop.",
    name: "Adaeze O.",
    category: "Fashion & Accessories",
    avatar: "/images/avatars/adaeze.png",
  },
  {
    quote:
      "Setting up my store took less than a day. The layout is beautiful and my customers love it.",
    name: "Michael T.",
    category: "Tech Gadgets",
    avatar: "/images/avatars/michael.png",
  },
  {
    quote:
      "Exactly what I needed for my skincare brand. Clean, modern, and converts really well.",
    name: "Fatima A.",
    category: "Skincare Brand",
    avatar: "/images/avatars/fatima.png",
  },
];

export default function TemplateReviews() {
  const [index, setIndex] = useState(0);
  const r = reviews[index];

  return (
    <section className="w-full py-20 px-4 bg-[#f5f5f5]">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight mb-4">
          What Users Love About <br /> This Template
        </h2>
        <p className="text-sm text-gray-500 mb-14">
          Hear from business owners who started their stores with Branmart.
        </p>

        {/* Quote */}
        <p className="text-xl md:text-2xl text-[#241717] leading-relaxed mb-10 max-w-2xl">
          {r.quote}
        </p>

        {/* Reviewer */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
            <Image
              src={r.avatar}
              alt={r.name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm font-semibold text-[#241717]">{r.name}</p>
          <p className="text-xs text-gray-400">{r.category}</p>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#cc3602] hover:text-[#cc3602] disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(reviews.length - 1, i + 1))}
            disabled={index === reviews.length - 1}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#cc3602] hover:text-[#cc3602] disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}