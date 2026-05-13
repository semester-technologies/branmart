// src/components/auth/SignUpForm.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, ArrowLeft, Shield } from "lucide-react";
import { cn } from "@/src/lib/cn";
// import router from "next/router";
import { useRouter } from "next/navigation";
import AuthTopBar from "./AuthTopBar";
import AuthRightPanel from "./AuthRightPanel";

function getPasswordStrength(password: string): {
  score: number;
  label: string;
  color: string;
} {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    {
      score: 1,
      label: "Weak — add uppercase, numbers, or symbols",
      color: "bg-red-500",
    },
    { score: 2, label: "Fair", color: "bg-orange-400" },
    { score: 3, label: "Good", color: "bg-blue-500" },
    { score: 4, label: "Strong", color: "bg-green-500" },
  ];
  return levels[score - 1] ?? { score: 0, label: "", color: "" };
}

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      agreed: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Please confirm your password"),
      agreed: Yup.boolean().oneOf(
        [true],
        "Please accept the terms to continue",
      ),
    }),
    onSubmit: (values) => {
      console.log("Submit:", values);
      router.push("/sign-up/verify-email"); // TODO: call Django API to create account and send verification email, then navigate to verification page
      // TODO: call Django API
    },
  });

  const strength = getPasswordStrength(formik.values.password);

  const inputClass = (field: string) =>
    cn(
      "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors",
      formik.touched[field as keyof typeof formik.touched] &&
        formik.errors[field as keyof typeof formik.errors]
        ? "border-red-400 bg-red-50 focus:border-red-400"
        : "border-gray-200 focus:border-[#cc3602]",
    );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* ── Left: form panel ── */}
      <div className="flex-1 flex flex-col bg-white px-8 md:px-12 py-6 overflow-y-auto">
        {/* Top bar */}
        <AuthTopBar />

        {/* Form */}
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <h1 className="text-2xl font-bold text-[#241717] mb-1">
            Create your account
          </h1>
          <p className="text-sm text-gray-500 mb-5">
            Start building your professional website today
          </p>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 hover:border-gray-400 transition-colors mb-3">
            <svg viewBox="0 0 24 24" className="w-4 h-3">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@business.com"
                {...formik.getFieldProps("email")}
                className={inputClass("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <span className="w-3.5 h-3.5 rounded-full border border-red-500 flex items-center justify-center text-[9px]">
                    !
                  </span>
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  {...formik.getFieldProps("password")}
                  className={cn(inputClass("password"), "pr-10")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {/* Strength bar */}
              {formik.values.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-1 flex-1 rounded-full transition-colors",
                          i <= strength.score ? strength.color : "bg-gray-200",
                        )}
                      />
                    ))}
                  </div>
                  <p
                    className={cn("text-xs", {
                      "text-red-500": strength.score === 1,
                      "text-orange-400": strength.score === 2,
                      "text-blue-500": strength.score === 3,
                      "text-green-500": strength.score === 4,
                    })}
                  >
                    {strength.label}
                  </p>
                </div>
              )}

              {formik.touched.password &&
                formik.errors.password &&
                !formik.values.password && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full border border-red-500 flex items-center justify-center text-[9px]">
                      !
                    </span>
                    {formik.errors.password}
                  </p>
                )}
            </div>

            {/* Confirm password */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  {...formik.getFieldProps("confirmPassword")}
                  className={cn(
                    "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors pr-10",
                    formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                      ? "border-red-400 bg-red-50 focus:border-red-400"
                      : formik.touched.confirmPassword &&
                          !formik.errors.confirmPassword &&
                          formik.values.confirmPassword
                        ? "border-green-400 focus:border-green-400"
                        : "border-gray-200 focus:border-[#cc3602]",
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {/* Match feedback */}
              {formik.touched.confirmPassword &&
                formik.values.confirmPassword &&
                (formik.errors.confirmPassword ? (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full border border-red-500 flex items-center justify-center text-[9px]">
                      !
                    </span>
                    {formik.errors.confirmPassword}
                  </p>
                ) : (
                  <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                    ✓ Passwords match
                  </p>
                ))}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...formik.getFieldProps("agreed")}
                  checked={formik.values.agreed}
                  className="mt-0.5 w-4 h-4 accent-[#cc3602] rounded shrink-0"
                />
                <span className="text-xs text-gray-500">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#cc3602] underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#cc3602] underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {formik.touched.agreed && formik.errors.agreed && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <span className="w-3.5 h-3.5 rounded-full border border-red-500 flex items-center justify-center text-[9px]">
                    !
                  </span>
                  {formik.errors.agreed}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-3.5 rounded-xl transition-colors mt-1"
            >
              Create Account
            </button>

            {/* Security note */}
            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <Shield size={12} />
              Secure, encrypted platform. Your data is protected.
            </p>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-[#cc3602] font-medium">
              Log in
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-5">
          © 2026 Branmart. All rights reserved.
        </p>
      </div>

      {/* ── Right: branding panel ── */}
      <AuthRightPanel />
    </div>
  );
}
