"use client";

import Image from "next/image";
import { Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface BlogPostHeroProps {
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  publishedOn: string;
}

export default function BlogPostHero({
  category,
  readTime,
  title,
  excerpt,
  image,
  author,
  publishedOn,
}: BlogPostHeroProps) {
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // Only runs on client — no SSR mismatch
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Pills */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#cc3602] bg-[#fff3e7] px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs font-medium text-gray-500 bg-[#fff3e7] px-3 py-1 rounded-full">
            {readTime}
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight">
          {title}
        </h1>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
          {excerpt}
        </p>

        {/* Cover image */}
        <div className="relative w-full h-[360px] md:h-[440px] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between flex-wrap gap-4">

          {/* Left: author + date */}
          <div className="flex items-start gap-10">
            <div>
              <p className="text-xs font-medium text-[#cc3602] mb-1">Written by</p>
              <p className="text-sm font-semibold text-[#241717]">{author}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-[#cc3602] mb-1">Published on</p>
              <p className="text-sm font-semibold text-[#241717]">{publishedOn}</p>
            </div>
          </div>

          {/* Right: share buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 border border-gray-200 hover:border-gray-400 px-3 py-2 rounded-full transition-colors"
            >
              {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
              {copied ? "Copied!" : "Copy link"}
            </button>

            {/* X */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-[#241717] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-[#241717] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-[#241717] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1。729v20。542C0 23。227。792 24 1。771 24h20。451C２３。２ ２４ ２４ ２３。２２７ ２４ ２２。２７１V１。７２９C２４ 。７７４ ２３。２ ０ ２２。２２２ 。０h。００３z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}