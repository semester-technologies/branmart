// src/components/marketing/templates/TemplateTestimonial.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The theme is easily customised with clean and stylish sections that work great on both mobile and desktop.",
    name: "Adaeze O.",
    category: "Fashion & Accessories",
    avatar: "/images/avatars/adaeze.png",
    template: {
      name: "Fashion Store",
      image: "/images/templates/flone.png",
      href: "/templates/1",
    },
  },
  {
    quote:
      "Setting up my restaurant page was incredibly fast. The template had everything I needed out of the box.",
    name: "Chidi B.",
    category: "Food & Restaurant",
    avatar: "/images/avatars/chidi.png",
    template: {
      name: "Restaurant Pro",
      image: "/images/templates/mixtas.png",
      href: "/templates/2",
    },
  },
  {
    quote:
      "My clients are always impressed by how professional my site looks. Branmart templates are top-tier.",
    name: "Fatima A.",
    category: "Skincare Brand",
    avatar: "/images/avatars/fatima.png",
    template: {
      name: "Beauty Store",
      image: "/images/templates/phlox.png",
      href: "/templates/3",
    },
  },
];

export default function TemplateTestimonial() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(testimonials.length - 1, i + 1));

  return (
    <section className="w-full py-20 px-4 bg-[#241717]">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left: testimonial */}
        <div className="flex-1 flex flex-col gap-8">
          <p className="text-sm font-medium text-[#cc3602]">Testimonials</p>

          <blockquote className="text-white text-2xl md:text-3xl font-medium leading-snug">
            {t.quote}
          </blockquote>

          {/* Reviewer */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-600 shrink-0">
              <Image
                src={t.avatar}
                alt={t.name}
                width={44}
                height={44}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-gray-400">{t.category}</p>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              disabled={index === testimonials.length - 1}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right: template card */}
        <div className="w-full lg:w-[360px] shrink-0 flex flex-col gap-3">
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden bg-gray-800">
            <Image
              src={t.template.image}
              alt={t.template.name}
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t.template.name}</p>
            <Link
              href={t.template.href}
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors mt-0.5"
            >
              View template
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}