// src/components/marketing/templates/TemplatesGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/src/lib/cn";

const categories = [
  "All",
  "Online Stores",
  "Restaurants",
  "Real Estate",
  "Consulting & Agencies",
  "Education",
  "Health & Fitness",
  "Events & Bookings",
  "Portfolio",
];

const templates = [
  { id: 1, name: "Flone",  image: "/images/templates/flone.png",  badge: "Free"    },
  { id: 2, name: "Phlox",  image: "/images/templates/phlox.png",  badge: "Premium" },
  { id: 3, name: "Mixtas", image: "/images/templates/mixtas.png", badge: "Premium" },
  { id: 4, name: "Mixtas", image: "/images/templates/mixtas.png", badge: "Premium" },
  { id: 5, name: "Flone",  image: "/images/templates/flone.png",  badge: "Free"    },
  { id: 6, name: "Phlox",  image: "/images/templates/phlox.png",  badge: "Premium" },
];

export default function TemplatesGrid() {
  const [active, setActive] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <section id="templates" className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading — left aligned */}
        <div className="mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight mb-3">
            Popular Templates People Love
          </h2>
          <p className="text-sm text-gray-500">
            Start with one of our most-used and best-performing designs.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="relative flex items-center mb-10">
          <div
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide pr-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "shrink-0 text-sm px-4 py-1.5 rounded-full border transition-colors",
                  active === cat
                    ? "bg-[#cc3602] border-[#cc3602] text-white"
                    : "border-gray-300 text-gray-600 hover:border-[#cc3602] hover:text-[#cc3602]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm shrink-0"
          >
            <ChevronRight size={15} className="text-gray-600" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <div
              key={t.id}
              className="group relative rounded-2xl overflow-hidden border border-gray-100"
            >
              {/* Screenshot */}
              <div className="relative w-full h-56 bg-gray-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover object-top"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                  <Link
                    href={`/templates/${t.id}/use`}
                    className="text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-5 py-2 rounded-full transition-colors"
                  >
                    Use template
                  </Link>
                  <Link
                    href={`/templates/${t.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white border border-white/60 hover:border-white px-5 py-2 rounded-full transition-colors"
                  >
                    Preview
                    <ExternalLink size={13} />
                  </Link>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between px-4 py-3 bg-white">
                <span className="text-sm font-semibold text-[#241717]">
                  {t.name}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium px-2.5 py-0.5 rounded-full",
                    t.badge === "Free"
                      ? "bg-green-50 text-green-600"
                      : "bg-orange-50 text-[#cc3602]"
                  )}
                >
                  {t.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}