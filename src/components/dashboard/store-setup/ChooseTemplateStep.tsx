// src/components/dashboard/store-setup/ChooseTemplateStep.tsx
"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronUp,
  ChevronDown,
  ExternalLink,
  Search,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
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
  { id: 1, name: "Flone", image: "/images/templates/flone.png", badge: "Free" },
  {
    id: 2,
    name: "Phlox",
    image: "/images/templates/phlox.png",
    badge: "Premium",
  },
  {
    id: 3,
    name: "Mixtas",
    image: "/images/templates/mixtas.png",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Mixtas",
    image: "/images/templates/mixtas.png",
    badge: "Premium",
  },
  { id: 5, name: "Flone", image: "/images/templates/flone.png", badge: "Free" },
  {
    id: 6,
    name: "Phlox",
    image: "/images/templates/phlox.png",
    badge: "Premium",
  },
  { id: 7, name: "Flone", image: "/images/templates/flone.png", badge: "Free" },
  {
    id: 8,
    name: "Phlox",
    image: "/images/templates/phlox.png",
    badge: "Premium",
  },
  {
    id: 9,
    name: "Mixtas",
    image: "/images/templates/mixtas.png",
    badge: "Premium",
  },
];

const ITEMS_PER_PAGE = 9;
const TOTAL = 123;
const TOTAL_PAGES = Math.ceil(TOTAL / ITEMS_PER_PAGE);

const sortOptions = ["Newest", "Name A-Z", "Most Popular"];

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, "...", total - 2, total - 1, total];
  if (current >= total - 2)
    return [1, 2, 3, "...", total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

export default function ChooseTemplateStep() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [sort, setSort] = useState("Newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [page, setPage] = useState(1);
  const sortRef = useRef<HTMLDivElement>(null);

  const start = (page - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(page * ITEMS_PER_PAGE, TOTAL);

  const togglePrice = (val: string) =>
    setPriceFilter((p) =>
      p.includes(val) ? p.filter((v) => v !== val) : [...p, val],
    );

  const toggleCategory = (val: string) =>
    setCategoryFilter((p) =>
      p.includes(val) ? p.filter((v) => v !== val) : [...p, val],
    );

  return (
    <div className="w-full px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#241717] mb-2">
          Choose your template
        </h1>
        <p className="text-sm text-gray-500">
          Pick a starting point for your website. You can customize everything
          later.
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 w-full border border-gray-200 rounded-xl px-4 py-3 mb-8 focus-within:border-[#cc3602] transition-colors">
        <Search size={15} className="text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder="Search templates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none bg-transparent"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* ── Sidebar ── */}
        <aside className="w-full lg:w-52 shrink-0 flex flex-col gap-6">
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
                  <label
                    key={opt}
                    className="flex items-center gap-2 cursor-pointer"
                  >
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

          <div>
            <button
              onClick={() => setCategoryOpen((p) => !p)}
              className="flex items-center justify-between w-full text-sm font-semibold text-[#241717] mb-3"
            >
              Category
              {categoryOpen ? (
                <ChevronUp size={15} />
              ) : (
                <ChevronDown size={15} />
              )}
            </button>
            {categoryOpen && (
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 cursor-pointer"
                  >
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

        {/* ── Main ── */}
        <div className="flex-1">
          {/* Results bar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              {start} - {end} of {TOTAL} Templates
            </p>

            {/* Sort dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setSortOpen((p) => !p)}
                className="inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-400 transition-colors"
              >
                Sort by:{" "}
                <span className="font-medium text-[#241717]">{sort}</span>
                <ChevronDown size={13} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-10 w-44 bg-white border border-gray-100 rounded-xl shadow-md py-2 z-50">
                  {sortOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={sort === opt}
                        onChange={() => {
                          setSort(opt);
                          setSortOpen(false);
                        }}
                        className="w-4 h-4 accent-[#cc3602]"
                      />
                      <span className="text-sm text-gray-600">{opt}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {templates.map((t) => (
              <div
                key={t.id}
                className="group relative rounded-2xl overflow-hidden border border-gray-100"
              >
   <div className="relative w-full h-48 bg-gray-100">
  {/* Mobile tap — goes to preview */}
  <button
    className="absolute inset-0 z-10 md:hidden"
    onClick={() => router.push(`/store-setup/theme/${t.id}`)}
    aria-label={`Preview ${t.name}`}
  />

  <Image
    src={t.image}
    alt={t.name}
    fill
    className="object-cover object-top"
  />

  {/* Desktop hover overlay */}
  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex flex-col items-center justify-center gap-2">
    <button
      onClick={() => router.push("/store-setup/theme-chosen")}
      className="text-xs font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-4 py-2 rounded-full transition-colors"
    >
      Use template
    </button>
    <button
      onClick={() => router.push(`/store-setup/theme/${t.id}`)}
      className="inline-flex items-center gap-1 text-xs font-medium text-white border border-white/60 hover:border-white px-4 py-2 rounded-full transition-colors"
    >
      Preview <ExternalLink size={11} />
    </button>
  </div>
</div>

                <div className="flex items-center justify-between px-3 py-2.5 bg-white">
                  <span className="text-sm font-semibold text-[#241717]">
                    {t.name}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-medium px-2.5 py-0.5 rounded-full",
                      t.badge === "Free"
                        ? "bg-green-50 text-green-600"
                        : "bg-orange-50 text-[#cc3602]",
                    )}
                  >
                    {t.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
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
                  <span
                    key={`e-${i}`}
                    className="w-8 text-center text-sm text-gray-400"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(Number(p))}
                    className={cn(
                      "w-8 h-8 rounded-full text-sm font-medium transition-colors",
                      page === p
                        ? "bg-[#cc3602] text-white"
                        : "text-gray-600 hover:bg-gray-100",
                    )}
                  >
                    {p}
                  </button>
                ),
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
  );
}
