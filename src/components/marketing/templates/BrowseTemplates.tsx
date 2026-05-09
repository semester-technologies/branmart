// src/components/marketing/templates/BrowseTemplates.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronUp, ChevronDown, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/cn";

const categories = [
  "Online Stores",
  "Restaurants",
  "Real Estates",
  "Consulting & Agencies",
  "Education",
  "Health & Fitness",
  "Events & Bookings",
  "Portfolio & Personal",
  "Technology & SaaS",
];

const templates = [
  { id: 1,  name: "Flone",  image: "/images/templates/flone.png",  badge: "Free"    },
  { id: 2,  name: "Phlox",  image: "/images/templates/phlox.png",  badge: "Premium" },
  { id: 3,  name: "Mixtas", image: "/images/templates/mixtas.png", badge: "Premium" },
  { id: 4,  name: "Mixtas", image: "/images/templates/mixtas.png", badge: "Premium" },
  { id: 5,  name: "Flone",  image: "/images/templates/flone.png",  badge: "Free"    },
  { id: 6,  name: "Phlox",  image: "/images/templates/phlox.png",  badge: "Premium" },
  { id: 7,  name: "Flone",  image: "/images/templates/flone.png",  badge: "Free"    },
  { id: 8,  name: "Phlox",  image: "/images/templates/phlox.png",  badge: "Premium" },
  { id: 9,  name: "Mixtas", image: "/images/templates/mixtas.png", badge: "Premium" },
];

const sortOptions = ["Newest", "Oldest", "Free First", "Premium First"];

const ITEMS_PER_PAGE = 9;
const TOTAL = 123;
const TOTAL_PAGES = Math.ceil(TOTAL / ITEMS_PER_PAGE);

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, "...", total - 2, total - 1, total];
  if (current >= total - 2) return [1, 2, 3, "...", total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

export default function BrowseTemplates() {
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [sort, setSort] = useState("Newest");
  const [priceOpen, setPriceOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);

  const togglePrice = (val: string) =>
    setPriceFilter((p) =>
      p.includes(val) ? p.filter((v) => v !== val) : [...p, val]
    );

  const toggleCategory = (val: string) =>
    setCategoryFilter((p) =>
      p.includes(val) ? p.filter((v) => v !== val) : [...p, val]
    );

  const start = (page - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(page * ITEMS_PER_PAGE, TOTAL);

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Page heading */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase text-center mb-12">
          Browse All Templates
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Sidebar filters ── */}
          <aside className="w-full lg:w-52 shrink-0 flex flex-col gap-6">

            {/* Price filter */}
            <div>
              <button
                onClick={() => setPriceOpen((p) => !p)}
                className="flex items-center justify-between w-full text-sm font-semibold text-[#241717] mb-3"
              >
                Price
                {priceOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
              {priceOpen && (
                <div className="flex flex-col gap-2">
                  {["Free", "Premium"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={priceFilter.includes(opt)}
                        onChange={() => togglePrice(opt)}
                        className="w-4 h-4 accent-[#cc3602] rounded"
                      />
                      <span className="text-sm text-gray-600">{opt}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="h-px bg-gray-100" />

            {/* Category filter */}
            <div>
              <button
                onClick={() => setCategoryOpen((p) => !p)}
                className="flex items-center justify-between w-full text-sm font-semibold text-[#241717] mb-3"
              >
                Category
                {categoryOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>
              {categoryOpen && (
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={categoryFilter.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 accent-[#cc3602] rounded"
                      />
                      <span className="text-sm text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

          </aside>

          {/* ── Main content ── */}
          <div className="flex-1">

            {/* Results bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                {start} - {end} of {TOTAL} Templates
              </p>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen((p) => !p)}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-400 transition-colors"
                >
                  Sort by: <span className="font-medium text-[#241717]">{sort}</span>
                  <ChevronDown size={13} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-10 w-44 bg-white border border-gray-100 rounded-xl shadow-md py-2 z-50">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSort(opt); setSortOpen(false); }}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-sm transition-colors",
                          sort === opt
                            ? "text-[#cc3602] bg-orange-50"
                            : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {templates.map((t) => (
                <div
                  key={t.id}
                  className="group relative rounded-2xl overflow-hidden border border-gray-100"
                >
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                      <Link
                        href={`/templates/${t.id}/use`}
                        className="text-xs font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-4 py-2 rounded-full transition-colors"
                      >
                        Use template
                      </Link>
                      <Link
                        href={`/templates/${t.id}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-white border border-white/60 hover:border-white px-4 py-2 rounded-full transition-colors"
                      >
                        Preview <ExternalLink size={11} />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2.5 bg-white">
                    <span className="text-sm font-semibold text-[#241717]">{t.name}</span>
                    <span className={cn(
                      "text-xs font-medium px-2.5 py-0.5 rounded-full",
                      t.badge === "Free"
                        ? "bg-green-50 text-green-600"
                        : "bg-orange-50 text-[#cc3602]"
                    )}>
                      {t.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Pagination ── */}
            <div className="flex items-center justify-between mt-10 gap-4 flex-wrap">

              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-400 disabled:opacity-30 px-4 py-2 rounded-full transition-colors"
              >
                <ArrowLeft size={14} /> Previous
              </button>

              <div className="flex items-center gap-1">
                {getPageNumbers(page, TOTAL_PAGES).map((p, i) =>
                  p === "..." ? (
                    <span key={`ellipsis-${i}`} className="w-8 text-center text-sm text-gray-400">
                      ...
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setPage(Number(p))}
                      className={cn(
                        "w-8 h-8 rounded-full text-sm font-medium transition-colors",
                        page === p
                          ? "bg-[#241717] text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      {p}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
                disabled={page === TOTAL_PAGES}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-400 disabled:opacity-30 px-4 py-2 rounded-full transition-colors"
              >
                Next <ArrowRight size={14} />
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}