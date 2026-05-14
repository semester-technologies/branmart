// src/components/auth/SignInForm.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Shield, AlertCircle } from "lucide-react";
import { cn } from "@/src/lib/cn";
import AuthTopBar from "./AuthTopBar";
import AuthRightPanel from "./AuthRightPanel";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setServerError("");
      try {
        // TODO: call Django API
        // await clientSignIn(values.email, values.password);
        // router.push("/dashboard");

        // Simulate error for now
        setServerError("Incorrect email or password. Please try again.");
      } catch (err: any) {
        setServerError(err.message || "Incorrect email or password. Please try again.");
      }
    },
  });

  const inputClass = (touched: boolean | undefined, error: string | undefined) =>
    cn(
      "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors",
      touched && error
        ? "border-red-400 bg-red-50 focus:border-red-400"
        : "border-gray-200 focus:border-[#cc3602]"
    );

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Left */}
      <div className="flex-1 flex flex-col bg-white px-8 md:px-12 py-6 overflow-y-auto">
        <AuthTopBar />

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <h1 className="text-2xl font-bold text-[#241717] mb-1">Login your account</h1>
          <p className="text-sm text-gray-500 mb-6">Start building your professional website today</p>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 hover:border-gray-400 transition-colors mb-4">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Server error banner */}
          {serverError && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
              <AlertCircle size={14} className="text-red-500 shrink-0" />
              <p className="text-xs text-red-600">{serverError}</p>
            </div>
          )}

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="you@business.com"
                {...formik.getFieldProps("email")}
                className={inputClass(formik.touched.email, formik.errors.email)}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  {...formik.getFieldProps("password")}
                  className={cn(inputClass(formik.touched.password, formik.errors.password), "pr-10")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.password}</p>
              )}
              {/* Forgot password */}
              <div className="flex justify-end mt-1.5">
                <Link href="/forgot-password" className="text-xs text-[#cc3602] hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-3.5 rounded-xl transition-colors"
            >
              Login
            </button>

            {/* Security note */}
            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <Shield size={12} />
              Secure, encrypted platform. Your data is protected.
            </p>

          </form>

          <p className="text-center text-sm text-gray-500 mt-5">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-[#cc3602] font-medium">Create Account</Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          © 2026 Branmart. All rights reserved.
        </p>
      </div>

      <AuthRightPanel />
    </div>
  );
}