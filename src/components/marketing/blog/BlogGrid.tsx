// src/components/marketing/blog/BlogGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const allPosts = [
  {
    id: 1,
    category: "E-commerce",
    date: "October 10, 2025",
    title: "How to Build an Online Store That Sells",
    excerpt: "Learn key steps to create a professional online store, from product setup to payment integration, and start selling fast with Branmart.",
    image: "/images/blog/post-1.png",
    slug: "how-to-build-an-online-store",
  },
  {
    id: 2,
    category: "Website Design",
    date: "October 28, 2025",
    title: "7 Website Design Mistakes That Hurt Conversions",
    excerpt: "Poor layout and unclear navigation drive visitors away. Here's how to design pages that attract and convert more customers.",
    image: "/images/blog/post-2.png",
    slug: "website-design-mistakes",
  },
  {
    id: 3,
    category: "Marketing",
    date: "November 2, 2025",
    title: "Boost Your Sales with Better Product Photos",
    excerpt: "Clear, consistent, and well-lit product images increase trust and sales. Get simple tips for taking photos that sell.",
    image: "/images/blog/post-3.png",
    slug: "better-product-photos",
  },
  {
    id: 4,
    category: "Website Design",
    date: "November 5, 2025",
    title: "How to Choose the Right Template for Your Brand",
    excerpt: "Your template sets the tone for your brand. Learn how to pick one that reflects your business and appeals to your audience.",
    image: "/images/blog/post-4.png",
    slug: "choose-right-template",
  },
  {
    id: 5,
    category: "Business Growth",
    date: "November 12, 2025",
    title: "5 Ways to Drive Traffic to Your New Website",
    excerpt: "Getting your first visitors doesn't have to be hard. Here are five proven strategies to grow your audience from day one.",
    image: "/images/blog/post-1.png",
    slug: "drive-traffic-to-website",
  },
  {
    id: 6,
    category: "Product Updates",
    date: "November 20, 2025",
    title: "What's New in Branmart: November 2025",
    excerpt: "From new templates to improved analytics, here's everything we shipped this month.",
    image: "/images/blog/post-2.png",
    slug: "whats-new-november-2025",
  },
];

const INITIAL_COUNT = 4;

interface BlogGridProps {
  search: string;
  category: string;
}

export default function BlogGrid({ search, category }: BlogGridProps) {
  const [count, setCount] = useState(INITIAL_COUNT);

  const filtered = allPosts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;

  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {visible.map((post) => (
              <article key={post.id} className="flex flex-col gap-4">

                {/* Image */}
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#cc3602]">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-base font-bold text-[#241717] leading-snug hover:text-[#cc3602] transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#cc3602] hover:gap-2.5 transition-all"
                >
                  Read more <ArrowRight size={14} />
                </Link>

              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-gray-400 py-10">
            No articles found.
          </p>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={() => setCount((c) => c + 4)}
              className="text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-7 py-3 rounded-full transition-colors"
            >
              Load more
            </button>
          </div>
        )}

      </div>
    </section>
  );
}