// src/components/dashboard/store-setup/ChoosePlanStep.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/cn";
import ComparisonTable from "./ComparisonTable";

const plans = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Start Free",
    featured: false,
    features: [
      { label: "1 page website", included: true },
      { label: "Branmart subdomain", included: true },
      { label: "Basic templates", included: true },
      { label: "Contact form", included: true },
      { label: "Mobile responsive", included: true },
      { label: "Branmart branding", included: false },
      { label: "No custom domain", included: false },
      { label: "Limited templates", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing businesses",
    monthlyPrice: 19,
    yearlyPrice: 15,
    cta: "Start Free Trial",
    featured: true,
    features: [
      { label: "Up to 5 pages", included: true },
      { label: "Custom domain", included: true },
      { label: "All templates", included: true },
      { label: "WhatsApp integration", included: true },
      { label: "Appointment booking", included: true },
      { label: "Google Maps embed", included: true },
      { label: "No Branmart branding", included: true },
      { label: "Priority email support", included: true },
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "For established businesses",
    monthlyPrice: 39,
    yearlyPrice: 31,
    cta: "Start Free Trial",
    featured: false,
    features: [
      { label: "Up to 15 pages", included: true },
      { label: "Custom domain", included: true },
      { label: "All Pro features", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Custom forms", included: true },
      { label: "Blog section", included: true },
      { label: "SEO tools", included: true },
      { label: "Priority phone support", included: true },
    ],
  },
];

export default function ChoosePlanStep() {
  const [yearly, setYearly] = useState(false);
  const router = useRouter();
  const [showComparison, setShowComparison] = useState(false);

  function handleSelect(planId: string) {
    if (planId === "free") {
      router.push("/store-setup/theme");
    } else {
      router.push("/store-setup/payment");
    }
  }

  return (
    <div className="w-full flex flex-col items-center px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#241717] mb-2">
          Choose your plan
        </h1>
        <p className="text-sm text-gray-500">
          Start free, upgrade when you need more. No commitments.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex items-center bg-gray-100 rounded-full p-1 mb-10 gap-1">
        <button
          onClick={() => setYearly(false)}
          className={cn(
            "text-sm px-5 py-2 rounded-full transition-colors font-medium",
            !yearly ? "bg-white text-[#241717] shadow-sm" : "text-gray-500",
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => setYearly(true)}
          className={cn(
            "text-sm px-5 py-2 rounded-full transition-colors font-medium flex items-center gap-2",
            yearly ? "bg-white text-[#241717] shadow-sm" : "text-gray-500",
          )}
        >
          Yearly
          <span className="text-xs font-semibold text-green-500">Save 20%</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative rounded-2xl p-6 flex flex-col gap-5 border",
              plan.featured ? "border-[#cc3602] border-2" : "border-gray-200",
            )}
          >
            {/* Most popular badge */}
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#cc3602] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              </div>
            )}

            {/* Plan info */}
            <div>
              <p className="text-base font-bold text-[#241717] mb-1">
                {plan.name}
              </p>
              <p className="text-sm text-gray-500">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-1">
              <span className="font-display text-5xl font-bold text-[#241717]">
                ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
              </span>
              {(yearly ? plan.yearlyPrice : plan.monthlyPrice) > 0 && (
                <span className="text-sm text-gray-400 mb-2">/mo</span>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => handleSelect(plan.id)}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors border",
                plan.featured
                  ? "bg-[#cc3602] hover:bg-[#e65a29] text-white border-transparent"
                  : "bg-white hover:bg-gray-50 text-[#241717] border-gray-200",
              )}
            >
              {plan.cta}
              <ArrowRight size={14} />
            </button>

            {/* Features */}
            <ul className="flex flex-col gap-2.5">
              {plan.features.map((feature) => (
                <li key={feature.label} className="flex items-center gap-2.5">
                  {feature.included ? (
                    <Check size={14} className="text-green-500 shrink-0" />
                  ) : (
                    <X size={14} className="text-gray-300 shrink-0" />
                  )}
                  <span
                    className={cn(
                      "text-sm",
                      feature.included ? "text-gray-700" : "text-gray-400",
                    )}
                  >
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Compare features */}
      <button
        onClick={() => setShowComparison((p) => !p)}
        className="text-sm font-medium text-[#cc3602] border border-[#cc3602] hover:bg-orange-50 px-6 py-3 rounded-full transition-colors"
      >
        {showComparison ? "Hide feature comparison" : "Compare all features"}
      </button>

      {showComparison && <ComparisonTable />}
    </div>
  );
}
