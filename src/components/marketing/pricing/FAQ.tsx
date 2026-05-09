// src/components/marketing/pricing/FAQ.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/src/lib/cn";

const faqs = [
  {
    question: "What is Branmart?",
    answer:
      "Branmart is an all-in-one website builder that helps you create and manage online stores without coding. You can build, customize, and sell in one place.",
  },
  {
    question: "Can I connect my own domain?",
    answer:
      "Yes! You can connect your existing domain or purchase a new one directly through Branmart on any paid plan.",
  },
  {
    question: "What plans do you offer?",
    answer:
      "We offer three plans: Basic (free), Pro ($15/month), and Business ($29/month). Each plan comes with increasing features and limits.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings.",
  },
  {
    question: "How secure is Branmart?",
    answer:
      "All stores on Branmart are protected with SSL encryption, automatic backups, and secure payment gateways.",
  },
  {
    question: "Do I need technical skills to use Branmart?",
    answer:
      "Not at all. Branmart is built for non-technical users. Our drag-and-drop editor makes it easy to build a professional site without writing code.",
  },
  {
    question: "Does Branmart support online payments?",
    answer:
      "Yes. Branmart integrates with major payment gateways including Stripe, PayPal, Paystack, and more.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes! Our Basic plan is completely free and includes a website builder, 5 products, and a Branmart subdomain.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer:
      "Your store will revert to the Basic plan. You won't lose your data, but premium features will be disabled.",
  },
  {
    question: "Can I get help if I face issues?",
    answer:
      "Yes. We offer email support on all plans, priority chat support on Pro, and a dedicated account manager on Business.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const left = faqs.slice(0, 5);
  const right = faqs.slice(5);

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Learn more about how Branmart works, what it offers, and how to get
            started with your website.
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[left, right].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((faq, i) => {
                const index = ci * 5 + i;
                const isOpen = open === index;
                return (
                  <div
                    key={faq.question}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-[#241717]">
                        {faq.question}
                      </span>
                      {isOpen
                        ? <Minus size={16} className="text-gray-400 shrink-0" />
                        : <Plus size={16} className="text-gray-400 shrink-0" />
                      }
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}