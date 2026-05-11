// src/components/marketing/help-centre/TopicArticles.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Branmart?",
    answer:
      "Branmart is a digital marketplace that provides ready-to-use templates, tools, and resources to help you build and grow your online business. It offers website templates, marketing materials, and automation features designed for entrepreneurs, freelancers, and small teams.",
  },
  { question: "How do I create an account on Branmart?",             answer: "Visit branmart.com and click 'Start for free'. Fill in your details and verify your email to get started."                },
  { question: "How do I choose the right template for my business?", answer: "Browse our template library and filter by industry. Each template includes a preview so you can see it in action."          },
  { question: "How do I download a template after purchase?",        answer: "Go to your dashboard, navigate to 'My Templates', and click the download button next to your purchased template."           },
  { question: "What payment methods are accepted?",                  answer: "We accept Visa, Mastercard, PayPal, Stripe, and several other payment gateways depending on your region."                   },
  { question: "Can I edit the templates after downloading them?",    answer: "Yes. All templates are fully editable using our drag-and-drop editor or your preferred code editor."                        },
  { question: "How do I access my account settings?",               answer: "Click your profile icon in the top right of your dashboard, then select 'Account Settings'."                               },
  { question: "What should I do if I forget my password?",          answer: "Click 'Forgot password' on the sign-in page. We'll send a reset link to your registered email address."                    },
  { question: "Can I use Branmart templates for client projects?",  answer: "Yes, our standard license allows you to use templates for client projects. Check our license page for full details."        },
  { question: "How do I contact support if I face issues?",         answer: "You can reach our support team via live chat in your dashboard, or email us at support@branmart.com."                      },
];

interface TopicArticlesProps {
  topic: string;
  description: string;
  breadcrumb: string;
}

export default function TopicArticles({ topic, description, breadcrumb }: TopicArticlesProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-[#cc3602] transition-colors">Home</Link>
          <span>›</span>
          <Link href="/help-centre" className="hover:text-[#cc3602] transition-colors">Resources</Link>
          <span>›</span>
          <Link href="/help-centre" className="hover:text-[#cc3602] transition-colors">Help Centre</Link>
          <span>›</span>
          <span className="text-gray-600 font-medium">{breadcrumb}</span>
        </nav>

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase mb-3">
            {topic}
          </h1>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        {/* Accordion container */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-[#241717]">
                    {faq.question}
                  </span>
                  {isOpen
                    ? <ChevronUp size={16} className="text-gray-400 shrink-0" />
                    : <ChevronDown size={16} className="text-gray-400 shrink-0" />
                  }
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}