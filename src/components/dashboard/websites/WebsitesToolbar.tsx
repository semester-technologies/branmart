"use client";

import { ChevronDown, LayoutGrid, List, Search } from "lucide-react";
import { cn } from "@/src/lib/cn";

export type ViewMode = "grid" | "list";
export type StatusFilter = "all" | "published" | "draft";

interface WebsitesToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: StatusFilter;
  onStatusChange: (value: StatusFilter) => void;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function WebsitesToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  view,
  onViewChange,
}: WebsitesToolbarProps) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex-1 min-w-[200px] relative">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search websites..."
          className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-300"
        />
      </div>

      <div className="relative">
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value as StatusFilter)}
          aria-label="Filter by status"
          className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-300 cursor-pointer"
        >
          <option value="all">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <ChevronDown
          size={14}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>

      <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 gap-0.5">
        <button
          onClick={() => onViewChange("grid")}
          aria-label="Grid view"
          aria-pressed={view === "grid"}
          className={cn(
            "p-1.5 rounded-lg transition-colors",
            view === "grid"
              ? "bg-gray-100 text-[#241717]"
              : "text-gray-400 hover:text-[#241717]",
          )}
        >
          <LayoutGrid size={16} />
        </button>
        <button
          onClick={() => onViewChange("list")}
          aria-label="List view"
          aria-pressed={view === "list"}
          className={cn(
            "p-1.5 rounded-lg transition-colors",
            view === "list"
              ? "bg-gray-100 text-[#241717]"
              : "text-gray-400 hover:text-[#241717]",
          )}
        >
          <List size={16} />
        </button>
      </div>
    </div>
  );
}
