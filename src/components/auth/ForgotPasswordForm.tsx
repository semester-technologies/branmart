// src/components/auth/ForgotPasswordForm.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ArrowLeft, AlertCircle, Mail, RotateCcw } from "lucide-react";
import { cn } from "@/src/lib/cn";
import AuthTopBar from "./AuthTopBar";
import AuthRightPanel from "./AuthRightPanel";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {

    const router = useRouter()
//   const [sent, setSent] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

//   useEffect(() => {
//     if (!sent) return;
//     setCountdown(60);
//     setCanResend(false);
//     const timer = setInterval(() => {
//       setCountdown((c) => {
//         if (c <= 1) { clearInterval(timer); setCanResend(true); return 0; }
//         return c - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [sent]);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
    }),
onSubmit: () => {
  // TODO: call Django API
  router.push("/forgot-password/verify");
},
  });

  const inputClass = cn(
    "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors",
    formik.touched.email && formik.errors.email
      ? "border-red-400 bg-red-50 focus:border-red-400"
      : "border-gray-200 focus:border-[#cc3602]"
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col bg-white px-8 md:px-12 py-6 overflow-y-auto">
        <AuthTopBar />

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">

          {/* {!sent ? ( */}
            <>
              {/* ── Form state ── */}
              <h1 className="text-2xl font-bold text-[#241717] mb-1">Forgot your password?</h1>
              <p className="text-sm text-gray-500 mb-6">
                No worries. Enter your email and we'll send you a link to reset it.
              </p>

              {/* Error banner */}
              {formik.submitCount > 0 && formik.errors.email && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
                  <AlertCircle size={14} className="text-red-500 shrink-0" />
                  <p className="text-xs text-red-600">{formik.errors.email}</p>
                </div>
              )}

              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Email address</label>
                  <input
                    type="email"
                    placeholder="you@business.com"
                    {...formik.getFieldProps("email")}
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-3.5 rounded-xl transition-colors"
                >
                  Send Reset Link
                </button>
              </form>

              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors mt-5"
              >
                <ArrowLeft size={14} /> Back to login
              </Link>
            </>
          {/* ) : ( */}
            {/* <> */}
              {/* ── Sent state ── */}
              {/* <div className="flex flex-col items-center text-center gap-5">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                  <Mail size={24} className="text-green-500" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-[#241717] mb-2">Check your email</h1>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    We sent a password reset link to{" "}
                    <strong className="text-[#241717]">{formik.values.email}</strong>. Click
                    the link in the email to reset your password.
                  </p>
                </div>

                <button
                  onClick={() => canResend && setSent(false)}
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
            </>
          )} */}
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          © 2026 Branmart. All rights reserved.
        </p>
      </div>
      <AuthRightPanel />
    </div>
  );
}