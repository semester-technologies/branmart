// src/components/auth/VerifyEmailForm.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, RotateCcw, CheckCircle, ArrowRight } from "lucide-react";
import AuthTopBar from "./AuthTopBar";
import AuthRightPanel from "./AuthRightPanel";

export default function VerifyEmailForm() {
  const [resent, setResent] = useState(false);
  // TODO: replace with real check from Django API / URL token
  const [verified, setVerified] = useState(false);

  function handleResend() {
    setResent(true);
    setTimeout(() => setResent(false), 3000);
  }

  return (
    <div className="flex h-screen overflow-hidden">

      <div className="flex-1 flex flex-col bg-white px-8 md:px-12 py-6 overflow-y-auto">
        <AuthTopBar />

        <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full text-center gap-5">

          {!verified ? (
            <>
              {/* ── Unverified state ── */}
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center">
                <Mail size={24} className="text-[#cc3602]" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-[#241717] mb-2">
                  Verify your email
                </h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We sent a verification link to{" "}
                  <strong className="text-[#241717]">your email</strong>. Please
                  check your inbox and click the link to activate your account.
                </p>
              </div>

              <button
                onClick={handleResend}
                className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 rounded-xl px-4 py-3 text-sm text-gray-600 transition-colors"
              >
                <RotateCcw size={14} className={resent ? "text-green-500" : ""} />
                {resent ? "Email sent!" : "Resend verification email"}
              </button>

              <p className="text-sm text-gray-400">
                Wrong email?{" "}
                <Link href="/sign-up" className="text-[#cc3602] underline hover:text-[#e65a29]">
                  Change email address
                </Link>
              </p>

              {/* Dev only — remove when Django token check is wired up */}
              <button
                onClick={() => setVerified(true)}
                className="text-xs text-gray-300 hover:text-gray-400 mt-2"
              >
                (simulate verification)
              </button>
            </>
          ) : (
            <>
              {/* ── Verified state ── */}
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle size={28} className="text-green-500" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-[#241717] mb-2">
                  Email verified!
                </h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Your email has been successfully verified. Let's get your
                  website set up.
                </p>
              </div>

              <Link
                href="/store-setup/welcome"
                className="w-full flex items-center justify-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-3.5 rounded-xl transition-colors"
              >
                Continue to Setup
                <ArrowRight size={15} />
              </Link>
            </>
          )}

        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          © 2026 Branmart. All rights reserved.
        </p>
      </div>

      <AuthRightPanel />
    </div>
  );
}