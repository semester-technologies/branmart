"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/src/lib/cn";
import { type Template } from "./types";

interface TemplateCardProps {
  template: Template;
  onUse: (template: Template) => void;
}

export default function TemplateCard({ template, onUse }: TemplateCardProps) {
  return (
    <div className="flex flex-col gap-2 group">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100">
        {template.image ? (
          <Image
            src={template.image}
            alt={template.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            className={cn(
              "w-full h-full bg-gradient-to-br",
              template.previewGradient,
            )}
          />
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => onUse(template)}
            className="bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-semibold px-6 py-2 rounded-full transition-colors"
          >
            Use template
          </button>
          <Link
            href={`/templates/${template.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#241717] text-sm font-medium px-5 py-2 rounded-full inline-flex items-center gap-1.5 hover:bg-gray-50 transition-colors"
          >
            Preview <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 px-1">
        <p className="text-sm font-bold text-[#241717] truncate">
          {template.name}
        </p>
        <span
          className={cn(
            "text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0",
            template.type === "free"
              ? "bg-gray-100 text-gray-500"
              : "bg-amber-50 text-amber-700",
          )}
        >
          {template.type === "free" ? "Free" : "Premium"}
        </span>
      </div>
    </div>
  );
}
