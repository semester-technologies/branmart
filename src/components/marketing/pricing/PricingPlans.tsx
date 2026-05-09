// src/components/marketing/pricing/PricingPlans.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/src/lib/cn";

const plans = [
  {
    name: "Basic Plan",
    description: "Get started and explore the basics at no cost.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Get Started Now",
    featured: false,
    features: [
      "Basic website builder",
      "5 Products",
      "Branmart subdomain",
      "Basic analytics",
    ],
  },
  {
    name: "Pro Plan",
    description: "Launch your store with essential tools for growth.",
    monthlyPrice: 15,
    yearlyPrice: 12,
    cta: "Get Started Now",
    featured: true,
    features: [
      "Up to 5 pages",
      "Custom domain",
      "All templates",
      "WhatsApp integration",
      "Appointment booking",
      "Google Maps embed",
      "Priority support",
      "Multiple staff accounts",
    ],
  },
  {
    name: "Business Plan",
    description: "Scale your business with advanced features and insights.",
    monthlyPrice: 29,
    yearlyPrice: 23,
    cta: "Get Started Now",
    featured: false,
    features: [
      "All Pro Features",
      "API access",
      "Advanced reporting",
      "Dedicated support manager",
    ],
  },
];

export default function PricingPlans() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-full py-20 px-4 bg-[#fff6ec]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#241717] uppercase leading-tight mb-4">
            Simple Pricing For <br /> Every Business
          </h1>
          <p className="text-sm text-gray-500">
            Choose a plan that fits your business and scale with ease
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5">
            <span className={cn("text-sm", !yearly ? "font-semibold text-[#241717]" : "text-gray-400")}>
              Monthly
            </span>
            <button
              onClick={() => setYearly((p) => !p)}
              className={cn(
                "relative w-10 h-6 rounded-full transition-colors",
                yearly ? "bg-[#241717]" : "bg-gray-300"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform",
                  yearly ? "translate-x-5" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm", yearly ? "font-semibold text-[#241717]" : "text-gray-400")}>
              Yearly
            </span>
            <span className="text-xs font-semibold text-[#cc3602]">SAVE 20%</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-3xl p-8 flex flex-col gap-6",
                plan.featured
                  ? "bg-[#241717] text-white"
                  : "bg-white border border-gray-200 text-[#241717]"
              )}
            >
              {/* Plan name + desc */}
              <div>
                <p className={cn(
                  "text-sm font-semibold mb-2",
                  plan.featured ? "text-white" : "text-[#241717]"
                )}>
                  {plan.name}
                </p>
                <p className={cn(
                  "text-sm leading-relaxed",
                  plan.featured ? "text-gray-400" : "text-gray-500"
                )}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span className={cn(
                  "font-display text-5xl font-bold",
                  plan.featured ? "text-white" : "text-[#241717]"
                )}>
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className={cn(
                  "text-sm mb-2",
                  plan.featured ? "text-gray-400" : "text-gray-400"
                )}>
                  /monthly
                </span>
              </div>

              {/* CTA */}
              <Link
                href="/sign-up"
                className={cn(
                  "w-full text-center text-sm font-medium py-3 rounded-full transition-colors",
                  plan.featured
                    ? "bg-[#fde8d0] text-[#cc3602] hover:bg-[#fdd5b0]"
                    : "border border-gray-200 text-[#241717] hover:border-gray-400"
                )}
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle
                      size={16}
                      className={cn(
                        "shrink-0",
                        plan.featured ? "text-[#cc3602]" : "text-[#cc3602]"
                      )}
                    />
                    <span className={cn(
                      "text-sm",
                      plan.featured ? "text-gray-300" : "text-gray-600"
                    )}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}