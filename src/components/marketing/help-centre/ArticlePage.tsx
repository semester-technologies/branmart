// src/components/marketing/help-centre/ArticlePage.tsx
"use client";

import Link from "next/link";
import { Share2 } from "lucide-react";

const sections = [
  { id: "introduction",    label: "Introduction"                        },
  { id: "step-1",          label: "Step 1: Complete Your Website Design" },
  { id: "step-2",          label: "Step 2: Set Up Your Domain"           },
  { id: "step-3",          label: "Step 3: Configure Your Website Settings" },
  { id: "step-4",          label: "Step 4: Preview Your Website"         },
  { id: "step-5",          label: "Step 5: Publish Your Website"         },
  { id: "step-6",          label: "Step 6: Post-Publish Checklist"       },
  { id: "tips",            label: "Tips"                                 },
];

export default function ArticlePage() {
  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-[#cc3602]">Home</Link>
          <span>›</span>
          <Link href="/help-centre" className="hover:text-[#cc3602]">Resources</Link>
          <span>›</span>
          <Link href="/help-centre" className="hover:text-[#cc3602]">Help Centre</Link>
          <span>›</span>
          <span className="text-gray-600 font-medium">How to Publish Your Website</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* ── Left: article content ── */}
          <article className="flex-1 flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">

            {/* Title */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight mb-3">
                How To Publish Your Website
              </h1>
              <p className="text-sm text-gray-500 mb-2">
                Learn how to create your account, choose a template, and launch your website.
              </p>
              <p className="text-xs text-gray-400">3 min read</p>
            </div>

            {/* Introduction */}
            <div id="introduction">
              <h2 className="text-base font-bold text-[#241717] mb-3">Introduction</h2>
              <p>
                Publishing your website on Branmart is simple and requires no coding. Once you
                finish designing and customizing your site, you can make it live so visitors can
                access it. This guide walks you through the entire process.
              </p>
            </div>

            {/* Step 1 */}
            <div id="step-1">
              <h2 className="text-base font-bold text-[#241717] mb-3">
                Step 1: Complete Your Website Design
              </h2>
              <p className="mb-3">Before publishing, make sure:</p>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "All pages have content (text, images, videos).",
                  "Your navigation menu is set up correctly.",
                  "Products or services are added if it's an online store.",
                  "Templates and sections are customized to your brand.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-300 mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div id="step-2">
              <h2 className="text-base font-bold text-[#241717] mb-3">
                Step 2: Set Up Your Domain
              </h2>
              <p className="mb-3">You can choose to:</p>
              <ul className="flex flex-col gap-1.5 pl-2 mb-4">
                {[
                  "Use a Branmart subdomain (e.g., yoursite.branmart.com) – Free option.",
                  "Connect a custom domain you already own.",
                  "Purchase a new custom domain directly from Branmart.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-300 mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
              <p className="mb-3">To connect a custom domain:</p>
              <ol className="flex flex-col gap-1.5 pl-4 list-decimal">
                {[
                  "Go to Dashboard → Domain Settings.",
                  "Enter your domain name.",
                  "Follow the on-screen instructions to update your DNS records.",
                  "Save and verify.",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>

            {/* Step 3 */}
            <div id="step-3">
              <h2 className="text-base font-bold text-[#241717] mb-3">
                Step 3: Configure Your Website Settings
              </h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "Add a site title and tagline.",
                  "Set up SEO options for pages (meta titles, descriptions).",
                  "Enable analytics to track visitors.",
                  "Adjust privacy settings if needed (e.g., password-protect pages).",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-300 mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 4 */}
            <div id="step-4">
              <h2 className="text-base font-bold text-[#241717] mb-3">
                Step 4: Preview Your Website
              </h2>
              <p className="mb-3">Before publishing:</p>
              <ol className="flex flex-col gap-1.5 pl-4 list-decimal">
                {[
                  "Click the Preview button in the top menu.",
                  "Check your site on desktop, tablet, and mobile views.",
                  "Test navigation, links, forms, and checkout if applicable.",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>

            {/* Step 5 */}
            <div id="step-5">
              <h2 className="text-base font-bold text-[#241717] mb-3">
                Step 5: Publish Your Website
              </h2>
              <p className="mb-3">Once ready:</p>
              <ol className="flex flex-col gap-1.5 pl-4 list-decimal mb-4">
                {[
                  "Click the Publish button in the dashboard.",
                  "Confirm your domain selection.",
                  "Your site will go live immediately.",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <p>You'll receive a confirmation message with the link to your website.</p>
            </div>

            {/* Step 6 */}
            <div id="step-6">
              <h2 className="text-base font-bold text-[#241717] mb-3">
                Step 6: Post-Publish Checklist
              </h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "Test your live site to ensure everything works.",
                  "Share your website link on social media and email campaigns.",
                  "Monitor analytics for visitor behavior and traffic.",
                  "Update content regularly to keep the site fresh.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-300 mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div id="tips">
              <h2 className="text-base font-bold text-[#241717] mb-3">Tips</h2>
              <ul className="flex flex-col gap-1.5 pl-2 mb-6">
                {[
                  "Enable SSL for secure connections if using a custom domain.",
                  "Keep your Branmart dashboard open to make quick edits after publishing.",
                  "Regularly back up your site to avoid data loss.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-300 mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">
                If you need help, visit our{" "}
                <Link href="/contact-us" className="underline hover:text-[#cc3602]">
                  Contact Support
                </Link>{" "}
                page or chat with our support team in your dashboard.
              </p>
            </div>

          </article>

          {/* ── Right: sticky sidebar ── */}
          <aside className="w-full lg:w-56 shrink-0 lg:sticky lg:top-24 flex flex-col gap-8">

            {/* Table of contents */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                On this page
              </p>
              <div className="flex flex-col gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-xs text-gray-500 hover:text-[#cc3602] transition-colors leading-relaxed"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Share */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Share this article
              </p>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-[#cc3602] hover:text-[#cc3602] transition-colors"
              >
                <Share2 size={14} />
              </button>
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}