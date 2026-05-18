"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/cn";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

function pagesToShow(page: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const result: (number | "ellipsis")[] = [];
  const showLeft = Math.max(2, page - 1);
  const showRight = Math.min(total - 1, page + 1);

  result.push(1);
  if (showLeft > 2) result.push("ellipsis");
  for (let i = showLeft; i <= showRight; i++) result.push(i);
  if (showRight < total - 1) result.push("ellipsis");
  result.push(total);

  return result;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = pagesToShow(page, totalPages);
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className="flex items-center justify-between gap-2 flex-wrap">
      <button
        onClick={() => canPrev && onChange(page - 1)}
        disabled={!canPrev}
        className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-sm text-[#241717] px-4 py-2 rounded-full transition-colors hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ArrowLeft size={14} /> Previous
      </button>

      <div className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <span key={`e-${i}`} className="px-2 text-sm text-gray-400">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onChange(p)}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "w-9 h-9 text-sm rounded-lg transition-colors",
                p === page
                  ? "bg-[#fff6ec] text-[#cc3602] font-semibold"
                  : "text-gray-600 hover:bg-gray-50",
              )}
            >
              {p}
            </button>
          ),
        )}
      </div>

      <button
        onClick={() => canNext && onChange(page + 1)}
        disabled={!canNext}
        className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-sm text-[#241717] px-4 py-2 rounded-full transition-colors hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next <ArrowRight size={14} />
      </button>
    </div>
  );
}
