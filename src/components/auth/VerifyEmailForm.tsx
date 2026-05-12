// src/components/auth/VerifyEmailForm.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail, RotateCcw } from "lucide-react";

export default function VerifyEmailForm() {
  const [resent, setResent] = useState(false);

  function handleResend() {
    // TODO: call Django API to resend verification email
    setResent(true);
    setTimeout(() => setResent(false), 3000);
  }

  return (
    <div className="flex h-screen overflow-hidden">

      {/* ── Left: content panel ── */}
      <div className="flex-1 flex flex-col bg-white px-8 md:px-12 py-6 overflow-y-auto">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <Link href="/">
            <Image
              src="/Branmart-Logo.png"
              alt="Branmart"
              width={110}
              height={28}
              style={{ height: "auto", width: "auto" }}
            />
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors">
            <ArrowLeft size={14} />
            Back to website
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full text-center gap-5">

          {/* Icon */}
          <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center">
            <Mail size={24} className="text-[#cc3602]" />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-2xl font-bold text-[#241717] mb-2">Verify your email</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              We sent a verification link to <strong className="text-[#241717]">your email</strong>.
              Please check your inbox and click the link to activate your account.
            </p>
          </div>

          {/* Resend button */}
          <button
            onClick={handleResend}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 rounded-xl px-4 py-3 text-sm text-gray-600 transition-colors"
          >
            <RotateCcw size={14} className={resent ? "text-green-500" : ""} />
            {resent ? "Email sent!" : "Resend verification email"}
          </button>

          {/* Change email */}
          <p className="text-sm text-gray-400">
            Wrong email?{" "}
            <Link href="/sign-up" className="text-[#cc3602] underline hover:text-[#e65a29]">
              Change email address
            </Link>
          </p>

        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-5">
          © 2026 Branmart. All rights reserved.
        </p>
      </div>

      {/* ── Right: branding panel ── */}
      <div className="hidden lg:flex w-[580px] shrink-0 bg-[#F07316] flex-col items-center justify-center gap-6 px-12 text-center relative overflow-hidden">

        {/* Background circles */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Icon */}
        <div className="relative z-10 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
          <Image
            src="/b.png"
            alt="Branmart"
            width={40}
            height={40}
            style={{ height: "auto", width: "auto" }}
          />
        </div>

        {/* Text */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white leading-snug mb-3">
            Build your business <br /> website in minutes
          </h2>
          <p className="text-sm text-orange-100 leading-relaxed max-w-xs">
            No coding needed. Choose a template, customize it, and go live — all in under 30 minutes.
          </p>
        </div>

        {/* Stats */}
        <div className="relative z-10 flex items-center gap-6 text-white">
          {[
            { value: "10,000+", label: "businesses" },
            { value: "99.9%",   label: "uptime"     },
            { value: "24/7",    label: "support"    },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-sm font-semibold">{stat.value}</p>
              <p className="text-xs text-orange-200">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}