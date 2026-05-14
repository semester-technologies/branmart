// src/components/auth/ForgotPasswordVerify.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft, Mail, RotateCcw } from "lucide-react";
import AuthTopBar from "./AuthTopBar";
import AuthRightPanel from "./AuthRightPanel";

export default function ForgotPasswordVerify() {
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
//   const [verified, setVerified] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { clearInterval(timer); setCanResend(true); return 0; }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function handleResend() {
    // TODO: call Django API to resend
    setCountdown(60);
    setCanResend(false);
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col bg-white px-8 md:px-12 py-6 overflow-y-auto">
        <AuthTopBar />
        <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full text-center gap-5">

          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
            <Mail size={24} className="text-green-500" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#241717] mb-2">Check your email</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              We sent a password reset link to{" "}
              <strong className="text-[#241717]">your email</strong>. Click
              the link in the email to reset your password.
            </p>
          </div>

          <button
            onClick={handleResend}
            disabled={!canResend}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 disabled:opacity-60 rounded-xl px-4 py-3 text-sm text-gray-600 transition-colors"
          >
            <RotateCcw size={14} />
            {canResend ? "Resend email" : `Resend in ${countdown}s`}
          </button>

          <Link
            href="/sign-in"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors"
          >
            <ArrowLeft size={14} /> Back to login
          </Link>



        </div>
        <p className="text-center text-xs text-gray-400 mt-5">© 2026 Branmart. All rights reserved.</p>
      </div>
      <AuthRightPanel />
    </div>
  );
}