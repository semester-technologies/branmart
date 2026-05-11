// src/components/marketing/blog/BlogHero.tsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/src/lib/cn";

const categories = [
  "All",
  "E-commerce",
  "Website Design",
  "Marketing",
  "Business Growth",
  "Product Updates",
];

interface BlogHeroProps {
  onSearch: (val: string) => void;
  onCategory: (cat: string) => void;
  activeCategory: string;
}

export default function BlogHero({ onSearch, onCategory, activeCategory }: BlogHeroProps) {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Label + heading */}
        <p className="text-sm font-medium text-[#cc3602]">Blog</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#241717] uppercase leading-tight">
          Insights, Tips, And Stories <br /> For Online Growth
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          Learn how to build, manage, and scale your business with expert advice
          from the Branmart team.
        </p>

        {/* Search */}
        <div className="flex items-center gap-3 w-full max-w-sm border border-gray-200 rounded-full px-4 py-2.5 focus-within:border-[#cc3602] transition-colors">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search articles..."
            onChange={(e) => onSearch(e.target.value)}
            className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none bg-transparent"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategory(cat)}
              className={cn(
                "text-sm px-4 py-1.5 rounded-full border transition-colors",
                activeCategory === cat
                  ? "bg-[#cc3602] border-[#cc3602] text-white"
                  : "border-gray-300 text-gray-600 hover:border-[#cc3602] hover:text-[#cc3602]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}