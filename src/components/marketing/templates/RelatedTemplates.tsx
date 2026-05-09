// src/components/marketing/templates/RelatedTemplates.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/cn";

const related = [
  { id: 1, name: "Flone",  image: "/images/templates/flone.png",  badge: "Free"    },
  { id: 2, name: "Mixtas", image: "/images/templates/mixtas.png", badge: "Premium" },
  { id: 3, name: "Phlox",  image: "/images/templates/phlox.png",  badge: "Premium" },
  { id: 4, name: "Flone",  image: "/images/templates/flone.png",  badge: "Free"    },
];

export default function RelatedTemplates() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-4xl font-bold text-[#241717] uppercase leading-tight mb-2">
              You Might Also Like
            </h2>
            <p className="text-sm text-gray-500">
              Explore other templates made for online businesses.
            </p>
          </div>
          <Link
            href="/templates/all"
            className="inline-flex items-center gap-2 shrink-0 text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-5 py-2.5 rounded-full transition-colors self-start"
          >
            View all templates
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((t) => (
            <Link
              key={t.id}
              href={`/templates/${t.id}`}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-sm transition-shadow"
            >
              <div className="relative w-full h-44 bg-gray-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 bg-white">
                <span className="text-sm font-semibold text-[#241717]">
                  {t.name}
                </span>
                <span className={cn(
                  "text-xs font-medium px-2.5 py-0.5 rounded-full",
                  t.badge === "Free"
                    ? "bg-green-50 text-green-600"
                    : "bg-orange-50 text-[#cc3602]"
                )}>
                  {t.badge}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}