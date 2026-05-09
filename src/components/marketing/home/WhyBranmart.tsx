// src/components/marketing/home/WhyBranmart.tsx

import Image from "next/image";
import { Zap, Pen, CreditCard, Globe } from "lucide-react";

const points = [
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Launch your store in less than 30 minutes.",
  },
  {
    icon: Pen,
    title: "Flexible Design",
    description: "Customize, edit text, images, and layout easily.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Integrated gateways for global transactions.",
  },
  {
    icon: Globe,
    title: "All-In-One Platform",
    description: "Hosting, domains, analytics, and marketing tools included.",
  },
];

export default function WhyBranmart() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* ── Left: text ── */}
        <div className="flex-1">
          {/* Label + heading */}
          <p className="text-sm font-medium text-[#cc3602] mb-3">
            Why Branmart
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#461004] uppercase leading-tight mb-10">
            Why Businesses <br /> Choose Branmart
          </h2>

          {/* 2x2 grid with dividers */}
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {points.map((point) => (
              <div key={point.title} className="p-6 flex flex-col gap-3">
                <point.icon size={20} className="text-[#cc3602]" />
                <h3 className="text-xs font-bold text-[#241717] uppercase tracking-wide">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: image ── */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/images/why-branmart.png"
              alt="Two women working on a laptop"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}