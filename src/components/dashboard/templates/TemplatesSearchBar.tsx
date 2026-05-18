"use client";

import { Search } from "lucide-react";
import { cn } from "@/src/lib/cn";
import { CATEGORIES, type TemplateCategory } from "./types";

export type CategoryFilter = "All" | TemplateCategory;

interface TemplatesSearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: CategoryFilter;
  onCategoryChange: (value: CategoryFilter) => void;
}

const allCategories: CategoryFilter[] = ["All", ...CATEGORIES];

export default function TemplatesSearchBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: TemplatesSearchBarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search templates..."
          className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-300"
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1">
        {allCategories.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "shrink-0 text-sm font-medium px-4 py-1.5 rounded-lg transition-colors",
                active
                  ? "bg-[#cc3602] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:text-[#241717]",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
