// src/components/marketing/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#cc3602] transition-colors";

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#cc3602] mb-3">Contact us</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#241717] uppercase leading-tight mb-4">
            We're Here To Help
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            Whether you have a question, need help, or want to partner with us,
            our team is ready to assist.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">

          {/* First + Last name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                placeholder="First name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Phone number</label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#cc3602] transition-colors">
              <div className="flex items-center gap-1 px-3 border-r border-gray-200 shrink-0">
                <span className="text-sm text-gray-600">US</span>
                <ChevronDown size={13} className="text-gray-400" />
              </div>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={6}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed((p) => !p)}
              className="mt-0.5 w-4 h-4 accent-[#cc3602] rounded shrink-0"
            />
            <span className="text-sm text-gray-500">
              You agree to our friendly{" "}
              <Link href="/privacy-policy" className="underline text-gray-700 hover:text-[#cc3602]">
                privacy policy
              </Link>
              .
            </span>
          </label>

          {/* Submit */}
          <button
            disabled={!agreed}
            className="w-full bg-[#cc3602] hover:bg-[#e65a29] disabled:opacity-50 text-white text-sm font-medium py-4 rounded-full transition-colors"
          >
            Send message
          </button>

        </div>
      </div>
    </section>
  );
}