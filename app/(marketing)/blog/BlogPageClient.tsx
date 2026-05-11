// app/(marketing)/blog/page.tsx
"use client";

import { useState } from "react";
import BlogHero from "@/src/components/marketing/blog/BlogHero";
import BlogGrid from "@/src/components/marketing/blog/BlogGrid";
import NewsletterStrip from "@/src/components/marketing/blog/NewsletterStrip";
import CTABanner from "@/src/components/marketing/home/CTABanner";

export const metadata = { title: "Company Blog" };


export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <>
      <BlogHero
        onSearch={setSearch}
        onCategory={setCategory}
        activeCategory={category}
      />
      <BlogGrid search={search} category={category} />
      <NewsletterStrip />
            <CTABanner
              heading={"Build Your Next Big Idea\n with Branmart"}
              subtext="Start your free website today and turn your ideas into a thriving business."
              primaryLabel="Get Started free"
              primaryHref="/sign-up"
            />
    </>
  );
}