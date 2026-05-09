// src/components/marketing/templates/TemplateBody.tsx
"use client"

import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  "Fully Responsive Design",
  "Customizable Sections",
  "Clean and Modern Layout",
  "SEO Optimized",
  "Fast Loading Times",
  "Advanced Animations",
  "Built-in Analytics",
];

const tags = ["E-Commerce", "Fashion Store", "Clean", "Minimal", "Modern", "Lifestyle"];

const pages = [
  "Homepage",
  "Product Listing",
  "Product Details",
  "About Us",
  "Contact / Support",
  "Blog",
];

interface TemplateBodyProps {
  images: string[];
  about: string[];
  templateName: string;
}

export default function TemplateBody({ images, about, templateName }: TemplateBodyProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(images.length - 1, i + 1));

  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* ── Preview carousel ── */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-gray-100">
          <div className="relative w-full h-[420px] md:h-[520px]">
            <Image
              src={images[current]}
              alt={`${templateName} preview ${current + 1}`}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-[#cc3602] disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next */}
          <button
            onClick={next}
            disabled={current === images.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-[#cc3602] disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* ── Two-column body ── */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-10">

            {/* About */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-4">
                About This Template
              </h2>
              {about.map((para, i) => (
                <p key={i} className="text-sm text-gray-500 leading-relaxed mb-3">
                  {para}
                </p>
              ))}
            </div>

            {/* Features */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-4">
                Features
              </h2>
              <div className="flex flex-col gap-3">
                {features.map((f) => (
                  <div
                    key={f}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="w-full lg:w-64 shrink-0 flex flex-col gap-8">

            {/* Tags */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pages */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-4">Pages</h2>
              <ul className="flex flex-col gap-2">
                {pages.map((page) => (
                  <li key={page} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="text-gray-300">•</span>
                    {page}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="text-base font-semibold text-[#241717] mb-3">Support</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {templateName} Website Template is made to be simple to edit and
                customize. If you run into any issues, notice a bug, or just want
                to say hello, email us at{" "}
                <a
                  href="mailto:help@branmart.com"
                  className="text-[#cc3602] hover:underline"
                >
                  help@branmart.com
                </a>
                . We're happy to help!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}