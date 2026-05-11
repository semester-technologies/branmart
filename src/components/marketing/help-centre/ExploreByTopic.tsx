// src/components/marketing/help-centre/ExploreByTopic.tsx

import { Layers, Pen, Globe, FileText, Monitor } from "lucide-react";
import Link from "next/link";

const topics = [
  {
    icon: Layers,
    title: "Getting Started",
    slug: "getting-started",
    description: "Learn how to create your account, choose a template, and launch your website.",
  },
  {
    icon: Pen,
    title: "Website Builder",
    slug: "website-builder",
    description: "Step-by-step tutorials for designing and customizing your site.",
  },
  {
    icon: Globe,
    title: "Domains & Hosting",
    slug: "domains-hosting",
    description: "Connect custom domains, manage hosting, and configure DNS settings.",
  },
  {
    icon: FileText,
    title: "Account & Billing",
    slug: "account-billing",
    description: "Manage subscriptions, invoices, and payment methods.",
  },
  {
    icon: Monitor,
    title: "Troubleshooting",
    slug: "troubleshooting",
    description: "Fix common errors and get back on track quickly.",
  },
];

export default function ExploreByTopic() {
  return (
    <section className="w-full px-4 py-6 bg-white">
      <div className="max-w-5xl mx-auto bg-[#241717] rounded-3xl p-10">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="font-display text-4xl font-bold text-white uppercase leading-tight mb-2">
            Explore By Topic
          </h2>
          <p className="text-sm text-gray-400">
            Select a category to find the right answers faster.
          </p>
        </div>

        {/* Grid — 3 top, 2 bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <Link
                href={`/help-centre/${topic.slug}`}
              key={topic.title}
              className="bg-[#fff6ec] rounded-2xl p-6 flex flex-col gap-4 text-left hover:bg-[#fde8d0] transition-colors"
            >
              <topic.icon size={22} className="text-[#cc3602]" />
              <div>
                <p className="text-sm font-semibold text-[#241717] mb-2">
                  {topic.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}