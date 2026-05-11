// src/components/marketing/blog/RelatedPosts.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const related = [
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
    category: "E-commerce",
    date: "October 10, 2025",
    title: "How to Build an Online Store That Sells",
    excerpt: "Learn key steps to create a professional online store, from product setup to payment integration, and start selling fast with Branmart.",
    image: "/images/blog/post-3.png",
    slug: "how-to-build-an-online-store",
  },
];

export default function RelatedPosts() {
  return (
    <section className="w-full py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-lg font-bold text-[#241717] mb-8">Related News</h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {related.map((post) => (
            <article key={post.id} className="flex flex-col gap-4">

              {/* Image */}
              <Link href={`/blog/${post.slug}`}>
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gray-100">
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
                <h3 className="text-sm font-bold text-[#241717] leading-snug hover:text-[#cc3602] transition-colors">
                  {post.title}
                </h3>
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

        {/* View all posts — bottom right */}
        <div className="flex justify-end">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-6 py-3 rounded-full transition-colors"
          >
            View all posts
          </Link>
        </div>

      </div>
    </section>
  );
}