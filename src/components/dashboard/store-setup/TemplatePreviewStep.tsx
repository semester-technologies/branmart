// src/components/dashboard/store-setup/TemplatePreviewStep.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock, BookOpen, Eye, Star, ExternalLink,
  Monitor, Tablet, Smartphone, X,
} from "lucide-react";
import { cn } from "@/src/lib/cn";

const features = [
  "Fully Responsive Design", "Customizable Sections",
  "Clean and Modern Layout", "SEO Optimized",
  "Fast Loading Times", "Advanced Animations", "Built-in Analytics",
];

const tags = ["E-Commerce", "Fashion Store", "Clean", "Minimal", "Modern", "Lifestyle"];

const pages = [
  "Homepage", "Product Listing", "Product Details",
  "About Us", "Contact / Support", "Blog",
];

type DeviceSize = "desktop" | "tablet" | "mobile";

const deviceWidths: Record<DeviceSize, string> = {
  desktop: "100%",
  tablet:  "768px",
  mobile:  "375px",
};

interface Props {
  templateName?: string;
}

export default function TemplatePreviewStep({ templateName = "Mixtas" }: Props) {
  const router = useRouter();
  const [device, setDevice] = useState<DeviceSize>("desktop");
  const [showModal, setShowModal] = useState(false);

  function handleConfirm() {
    setShowModal(false);
    router.push("/store-setup/theme-chosen");
  }

  return (
    <div className="w-full px-4 py-10 max-w-5xl mx-auto">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
        <button
          onClick={() => router.back()}
          className="hover:text-[#cc3602] transition-colors"
        >
          Templates
        </button>
        <span>›</span>
        <span className="text-gray-600 font-medium">{templateName}</span>
      </nav>

      {/* Heading */}
      <h1 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight mb-4">
        {templateName} - Modern Fashion Store
      </h1>

      <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-6">
        {templateName} is perfect for fashion, gadgets, and lifestyle brands that want a modern,
        high-converting website. With clean typography, ample white space, and a sleek layout,
        it creates a seamless experience that drives signups and sales.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3 flex-wrap mb-8">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-6 py-3 rounded-full transition-colors"
        >
          Use Template
        </button>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-[#461004] bg-[#fde8d0] hover:bg-[#fdd5b0] px-6 py-3 rounded-full transition-colors">
          Button CTA
          <ExternalLink size={13} />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mb-8" />

      {/* Stats */}
      <div className="flex flex-wrap items-start gap-10 mb-12">
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="text-[#cc3602]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 7C6 5.34 7.34 4 9 4h6c1.66 0 3 1.34 3 3v1c0 1.1-.9 2-2 2H9c-1.1 0-2 .9-2 2v1c0 1.66 1.34 3 3 3h6c1.66 0 3 1.34 3 3v0c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3" stroke="#cc3602" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-semibold text-[#241717]">Branmart Themes</p>
          <p className="text-xs text-gray-400">Creator</p>
        </div>
        {[
          { icon: Clock,    value: "1 week ago", label: "Published" },
          { icon: BookOpen, value: "5",          label: "Pages"     },
          { icon: Eye,      value: "12.1k",      label: "Users"     },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <stat.icon size={22} className="text-gray-400" />
            <p className="text-sm font-semibold text-[#241717]">{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1 text-center">
          <Star size={22} className="text-gray-400" />
          <p className="text-sm font-semibold text-[#241717]">
            4.7 <span className="text-xs font-normal text-gray-400">(9.7k Reviews)</span>
          </p>
          <p className="text-xs text-gray-400">Ratings</p>
        </div>
      </div>

      {/* Preview iframe */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden mb-12">

        {/* Preview toolbar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white">
          <span className="text-sm font-medium text-gray-600">{templateName}</span>
          <div className="flex items-center gap-2">
            {(["desktop", "tablet", "mobile"] as DeviceSize[]).map((d) => {
              const icons = { desktop: Monitor, tablet: Tablet, mobile: Smartphone };
              const Icon = icons[d];
              return (
                <button
                  key={d}
                  onClick={() => setDevice(d)}
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                    device === d ? "bg-gray-100 text-[#cc3602]" : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  <Icon size={16} />
                </button>
              );
            })}
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Preview area */}
        <div className="bg-gray-50 flex justify-center p-4 transition-all">
          <div
            className="relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300"
            style={{ width: deviceWidths[device], maxWidth: "100%" }}
          >
            <div className="relative w-full h-[480px]">
              <Image
                src="/images/templates/flone.png"
                alt={`${templateName} preview`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Two-column body */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">

        {/* Left */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h2 className="text-base font-semibold text-[#241717] mb-4">About This Template</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              Simple, clean, and designed to convert. {templateName} is a premium e-commerce
              template for Fashion businesses that need a high-performing landing page.
              It features a sleek, modern layout with white space and bold typography to
              make content stand out.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Ideal for fashion, gadgets, and lifestyle brands. {templateName} provides the perfect
              foundation for a professional and engaging web presence that turns visitors to customers.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#241717] mb-4">Features</h2>
            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f} className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-64 shrink-0 flex flex-col gap-8">
          <div>
            <h2 className="text-base font-semibold text-[#241717] mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-base font-semibold text-[#241717] mb-4">Pages</h2>
            <ul className="flex flex-col gap-2">
              {pages.map((page) => (
                <li key={page} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-gray-300">•</span>{page}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-base font-semibold text-[#241717] mb-3">Support</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              {templateName} Website Template is made to be simple to edit and customize.
              If you run into any issues, email us at{" "}
              <a href="mailto:help@branmart.com" className="text-[#cc3602] hover:underline">
                help@branmart.com
              </a>. We're happy to help!
            </p>
          </div>
        </div>

      </div>

      {/* ── Confirm modal ── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm flex flex-col gap-5 shadow-xl">
            <div>
              <h2 className="text-lg font-bold text-[#241717] mb-2">
                Use "{templateName}"?
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Your website will be set up with this template's layout and sample content.
                You'll be able to customize everything — text, images, colors, and more — in the next steps.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-400 py-3 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] py-3 rounded-xl transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}