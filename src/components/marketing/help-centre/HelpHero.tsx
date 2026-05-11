// src/components/marketing/help-centre/HelpHero.tsx
"use client";

import { Search } from "lucide-react";

interface HelpHeroProps {
  onSearch: (val: string) => void;
}

export default function HelpHero({ onSearch }: HelpHeroProps) {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">

        <p className="text-sm font-medium text-[#cc3602]">Help Centre</p>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#241717] uppercase leading-tight">
          How Can We <br /> Help You?
        </h1>

        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          Find step-by-step guides, common solutions, and answers to your
          questions about using Branmart.
        </p>

        {/* Search */}
        <div className="flex items-center gap-3 w-full max-w-sm border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#cc3602] transition-colors">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search a keyword"
            onChange={(e) => onSearch(e.target.value)}
            className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none bg-transparent"
          />
        </div>

      </div>
    </section>
  );
}