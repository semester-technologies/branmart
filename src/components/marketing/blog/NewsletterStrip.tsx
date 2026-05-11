// src/components/marketing/blog/NewsletterStrip.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full px-4 py-10 bg-white">
      <div className="max-w-4xl mx-auto bg-[#fff6ec] rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        {/* Left */}
        <div>
          <p className="text-base font-bold text-[#241717] mb-1">
            Join 2,000+ subscribers
          </p>
          <p className="text-sm text-gray-500">
            Stay in the loop with everything you need to know.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#cc3602] transition-colors w-64"
            />
            <button className="text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-5 py-2.5 rounded-full transition-colors shrink-0">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400">
            We care about your data in our{" "}
            <Link href="/privacy-policy" className="underline hover:text-[#cc3602]">
              privacy policy
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}