"use client";

import { ChevronDown } from "lucide-react";

export type TypeFilter = "all" | "free" | "premium";
export type SortBy = "newest" | "name" | "popular";

interface TemplatesToolbarProps {
  shownStart: number;
  shownEnd: number;
  total: number;
  type: TypeFilter;
  onTypeChange: (value: TypeFilter) => void;
  sort: SortBy;
  onSortChange: (value: SortBy) => void;
}

const typeLabels: Record<TypeFilter, string> = {
  all:     "All",
  free:    "Free",
  premium: "Premium",
};

const sortLabels: Record<SortBy, string> = {
  newest:  "Newest",
  name:    "Name A-Z",
  popular: "Most Popular",
};

function Select<T extends string>({
  label,
  value,
  options,
  labels,
  onChange,
}: {
  label: string;
  value: T;
  options: T[];
  labels: Record<T, string>;
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-gray-500">{label}:</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
          aria-label={label}
          className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-1.5 text-sm text-[#241717] focus:outline-none focus:border-gray-300 cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {labels[opt]}
            </option>
          ))}
        </select>
        <ChevronDown
          size={12}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default function TemplatesToolbar({
  shownStart,
  shownEnd,
  total,
  type,
  onTypeChange,
  sort,
  onSortChange,
}: TemplatesToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      <p className="text-sm text-gray-500">
        {shownStart}-{shownEnd} of {total} Templates
      </p>
      <div className="flex items-center gap-4 flex-wrap">
        <Select<TypeFilter>
          label="Type"
          value={type}
          options={["all", "free", "premium"]}
          labels={typeLabels}
          onChange={onTypeChange}
        />
        <Select<SortBy>
          label="Sort by"
          value={sort}
          options={["newest", "name", "popular"]}
          labels={sortLabels}
          onChange={onSortChange}
        />
      </div>
    </div>
  );
}
