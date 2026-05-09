// src/components/marketing/home/Testimonials.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    review:
      "Branmart helped me launch my fashion store in one weekend. I added my products, customized the theme, and started selling immediately.",
    name: "Adaeze O.",
    category: "Fashion & Accessories",
    avatar: "/images/avatars/adaeze.png",
  },
  {
    id: 2,
    review:
      "I manage products, payments, and orders from one dashboard. Branmart saves me hours every week.",
    name: "Michael T.",
    category: "Tech Gadgets",
    avatar: "/images/avatars/michael.png",
  },
  {
    id: 3,
    review:
      "The templates look modern and professional. My customers love the shopping experience.",
    name: "Fatima A.",
    category: "Skincare Brand",
    avatar: "/images/avatars/fatima.png",
  },
  {
    id: 4,
    review:
      "Setting up my restaurant page took less than an hour. The WhatsApp integration alone doubled my inquiries.",
    name: "Chidi B.",
    category: "Food & Restaurant",
    avatar: "/images/avatars/michael.png",
  },
  {
    id: 5,
    review:
      "As a real estate agent, I needed something professional fast. Branmart delivered exactly that.",
    name: "Tunde M.",
    category: "Real Estate",
    avatar: "/images/avatars/michael.png",
  },
];

const VISIBLE = 3;

export default function Testimonials() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(testimonials.length - VISIBLE, s + 1));

  const visible = testimonials.slice(start, start + VISIBLE);

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* ── Top row ── */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-14">

          {/* Left: heading */}
          <div className="flex-1">
            <p className="text-sm font-medium text-[#cc3602] mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#461004] uppercase leading-tight mb-3">
              Trusted By 25,000+ <br /> Happy Customers
            </h2>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Real feedback from entrepreneurs who built and launched their
              stores with Branmart.
            </p>
          </div>

          {/* Right: stat cards */}
          <div className="flex gap-4 shrink-0">
            <div className="bg-[#fff6ec] rounded-2xl px-6 py-5 flex flex-col gap-1 min-w-[160px]">
              <span className="font-display text-3xl font-bold text-[#241717]">
                12,000+
              </span>
              <span className="text-sm text-gray-500 leading-snug">
                Active users visiting every month!
              </span>
            </div>
            <div className="bg-[#fff6ec] rounded-2xl px-6 py-5 flex flex-col gap-1 min-w-[180px]">
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl font-bold text-[#241717]">
                  4.8
                </span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500 leading-snug">
                Rated 4.9 by 2,423 happy customers
              </span>
            </div>
          </div>
        </div>

        {/* ── Testimonial cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((t) => (
            <div
              key={t.id}
              className="border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
            >
              {/* Quote mark */}
              <span className="text-4xl font-bold text-[#cc3602] leading-none">
                "
              </span>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {t.review}
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-sm font-semibold text-[#241717]">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Prev / Next ── */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prev}
            disabled={start === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#cc3602] hover:text-[#cc3602] disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={start >= testimonials.length - VISIBLE}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#cc3602] hover:text-[#cc3602] disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}