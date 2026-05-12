// src/components/marketing/TermsOfService.tsx
"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "eligibility", label: "1. Eligibility" },
  { id: "account-registration", label: "2. Account Registration" },
  { id: "user-conduct", label: "3. User Conduct" },
  { id: "payment-billing", label: "4. Payment and Billing" },
  { id: "intellectual-property", label: "5. Intellectual Property" },
  { id: "template-content-use", label: "6. Template and Content Use" },
  { id: "termination", label: "7. Termination" },
  { id: "disclaimers", label: "8. Disclaimers and Limitation of Liability" },
  { id: "indemnification", label: "9. Indemnification" },
  { id: "governing-law", label: "10. Governing Body" },
  { id: "changes-terms", label: "11. Change of Terms" },
  { id: "contact", label: "12. Contact Information" },
];

export default function TermsOfService() {
  const [active, setActive] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#241717] uppercase mb-4">
            Terms Of Service
          </h1>
          <p className="text-xs text-gray-400">Last Updated</p>
          <p className="text-sm text-gray-600">November 11, 2025</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left: sticky TOC */}
          <aside className="w-full lg:w-56 shrink-0 lg:sticky lg:top-24">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Table of Contents
            </p>
            <div className="flex flex-col gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-xs py-1.5 pl-3 border-l-2 transition-colors leading-relaxed ${
                    active === s.id
                      ? "border-[#cc3602] text-[#cc3602] font-medium"
                      : "border-transparent text-gray-500 hover:text-[#cc3602]"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Right: content */}
          <div className="flex-1 flex flex-col gap-10 text-sm text-gray-600 leading-relaxed">

            <div id="introduction">
              <h2 className="text-base font-semibold text-[#241717] mb-3">Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of Branmart ("we," "our," or "us"),
                including our website, platform, and services. By accessing or using Branmart, you
                agree to comply with these Terms.
              </p>
            </div>

            <div id="eligibility">
              <h2 className="text-base font-semibold text-[#241717] mb-3">1. Eligibility</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "You must be at least 18 years old to use Branmart.",
                  "By using our services, you confirm that you have the legal authority to enter into this agreement.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="account-registration">
              <h2 className="text-base font-semibold text-[#241717] mb-3">2. Account Registration</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "You must create an account to access certain features.",
                  "Keep your login credentials secure and confidential.",
                  "You are responsible for all activity under your account.",
                  "Notify us immediately if your account is compromised.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="user-conduct">
              <h2 className="text-base font-semibold text-[#241717] mb-3">3. User Conduct</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "Violate any laws or regulations while using Branmart.",
                  "Upload or share content that is illegal, harmful, or offensive.",
                  "Interfere with the operation of Branmart or attempt to gain unauthorized access.",
                  "Use the platform to harass, spam, or harm others.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="payment-billing">
              <h2 className="text-base font-semibold text-[#241717] mb-3">4. Payment and Billing</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "Subscription fees are billed according to the plan selected.",
                  "Payment methods must be valid and up-to-date.",
                  "You authorize us to charge your chosen payment method for recurring subscriptions.",
                  "All fees are non-refundable unless stated in our Refund Policy.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="intellectual-property">
              <h2 className="text-base font-semibold text-[#241717] mb-3">5. Intellectual Property</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "Branmart owns all intellectual property rights in the platform, templates, and content we provide.",
                  "You retain ownership of content you create using Branmart.",
                  "You are granted a limited, non-exclusive license to use Branmart templates and tools in accordance with these Terms.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="template-content-use">
              <h2 className="text-base font-semibold text-[#241717] mb-3">6. Template and Content Use</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "Templates are for personal or business use based on your license.",
                  "Redistribution, resale, or sharing of templates without permission is prohibited.",
                  "You are responsible for any content you publish using Branmart.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="termination">
              <h2 className="text-base font-semibold text-[#241717] mb-3">7. Termination</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "We may suspend or terminate your account for violations of these Terms.",
                  "You may cancel your account at any time through your dashboard.",
                  "Upon termination, your access to the platform and content may be restricted.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="disclaimers">
              <h2 className="text-base font-semibold text-[#241717] mb-3">8. Disclaimers and Limitation of Liability</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "Branmart is provided \"as is.\" We do not guarantee uninterrupted or error-free service.",
                  "We are not liable for indirect, incidental, or consequential damages arising from your use of Branmart.",
                  "You use Branmart at your own risk.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="indemnification">
              <h2 className="text-base font-semibold text-[#241717] mb-3">9. Indemnification</h2>
              <p className="mb-3">
                You agree to indemnify and hold harmless Branmart, its affiliates, and employees
                from any claims, losses, or damages arising from:
              </p>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "Your use of the platform",
                  "Your violation of these Terms",
                  "Your violation of any laws or third-party rights",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="governing-law">
              <h2 className="text-base font-semibold text-[#241717] mb-3">10. Governing Law</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "These Terms are governed by the laws of Nigeria.",
                  "Any disputes will be resolved in the courts of Lagos, Nigeria.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="changes-terms">
              <h2 className="text-base font-semibold text-[#241717] mb-3">11. Changes to Terms</h2>
              <ul className="flex flex-col gap-1.5 pl-2">
                {[
                  "We may update these Terms from time to time.",
                  "Updated Terms will be posted on our website with a revised effective date.",
                  "Continued use of Branmart after changes constitutes acceptance of the new Terms.",
                ].map((i) => <li key={i} className="flex gap-2"><span className="text-gray-300 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>

            <div id="contact">
              <h2 className="text-base font-semibold text-[#241717] mb-3">12. Contact Information</h2>
              <p className="mb-2">For questions about these Terms, please contact:</p>
              <p>
                Email:{" "}
                <a href="mailto:legal@branmart.com" className="underline hover:text-[#cc3602]">
                  legal@branmart.com
                </a>
              </p>
              <p>Address: 45, Innovation Drive, Lagos, Nigeria</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}