// src/components/marketing/templates/TemplateDetail.tsx

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Clock,
  BookOpen,
  Eye,
  Star,
} from "lucide-react";

interface TemplateDetailProps {
  name: string;
  category: string;
  description: string;
  stats: {
    creator: string;
    published: string;
    pages: number;
    users: string;
    rating: string;
    reviews: string;
  };
  templateId: string;
}

export default function TemplateDetail({
  name,
  category,
  description,
  stats,
  templateId,
}: TemplateDetailProps) {
  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link
            href="/templates"
            className="hover:text-[#cc3602] transition-colors"
          >
            Templates
          </Link>
          <span>›</span>
          <Link
            href="/templates"
            className="hover:text-[#cc3602] transition-colors"
          >
            {category}
          </Link>
          <span>›</span>
          <span className="font-semibold text-[#241717]">{name}</span>
        </nav>

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#241717] uppercase leading-tight mb-5">
          {name}
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-wrap mb-10">
          <Link
            href={`/templates/${templateId}/use`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-6 py-3 rounded-full transition-colors"
          >
            Use Template
          </Link>
          <Link
            href="#preview"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#461004] bg-[#fde8d0] hover:bg-[#fdd5b0] px-6 py-3 rounded-full transition-colors"
          >
            Button CTA
            <ExternalLink size={13} />
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-8" />

        {/* Stats strip */}
        <div className="flex flex-wrap items-start gap-10">
          {/* Creator */}
          <div className="flex flex-col items-center gap-1 text-center">
            {/* Branmart S icon */}
            <div className="text-[#cc3602]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 7C6 5.34 7.34 4 9 4h6c1.66 0 3 1.34 3 3v1c0 1.1-.9 2-2 2H9c-1.1 0-2 .9-2 2v1c0 1.66 1.34 3 3 3h6c1.66 0 3 1.34 3 3v0c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3"
                  stroke="#cc3602"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#241717]">
              {stats.creator}
            </p>
            <p className="text-xs text-gray-400">Creator</p>
          </div>

          {/* Published */}
          <div className="flex flex-col items-center gap-1 text-center">
            <Clock size={22} className="text-gray-400" />
            <p className="text-sm font-semibold text-[#241717]">
              {stats.published}
            </p>
            <p className="text-xs text-gray-400">Published</p>
          </div>

          {/* Pages */}
          <div className="flex flex-col items-center gap-1 text-center">
            <BookOpen size={22} className="text-gray-400" />
            <p className="text-sm font-semibold text-[#241717]">
              {stats.pages}
            </p>
            <p className="text-xs text-gray-400">Pages</p>
          </div>

          {/* Users */}
          <div className="flex flex-col items-center gap-1 text-center">
            <Eye size={22} className="text-gray-400" />
            <p className="text-sm font-semibold text-[#241717]">
              {stats.users}
            </p>
            <p className="text-xs text-gray-400">Users</p>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center gap-1 text-center">
            <Star size={22} className="text-gray-400" />
            <p className="text-sm font-semibold text-[#241717]">
              {stats.rating}{" "}
              <span className="text-xs font-normal text-gray-400">
                ({stats.reviews} Reviews)
              </span>
            </p>
            <p className="text-xs text-gray-400">Ratings</p>
          </div>
        </div>
      </div>
    </section>
  );
}
