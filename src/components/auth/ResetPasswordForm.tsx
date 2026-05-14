// src/components/auth/ResetPasswordForm.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, KeyRound } from "lucide-react";
import { cn } from "@/src/lib/cn";
import AuthTopBar from "./AuthTopBar";
import AuthRightPanel from "./AuthRightPanel";

export default function ResetPasswordForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
//   const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: Yup.object({
      password: Yup.string().min(8, "At least 8 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Please confirm your password"),
    }),
onSubmit: () => {
  // TODO: call Django API with token
  router.push("/reset-password/success");
},
  });

  const inputClass = (touched: boolean | undefined, error: string | undefined) =>
    cn(
      "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors pr-10",
      touched && error
        ? "border-red-400 bg-red-50 focus:border-red-400"
        : "border-gray-200 focus:border-[#cc3602]"
    );

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col bg-white px-8 md:px-12 py-6 overflow-y-auto">
        <AuthTopBar />

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">

          {/* {!success ? ( */}
            <>
              {/* ── Reset form ── */}
              <h1 className="text-2xl font-bold text-[#241717] mb-1">Reset your password</h1>
              <p className="text-sm text-gray-500 mb-6">Enter your new password.</p>

              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

                {/* Password */}
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      {...formik.getFieldProps("password")}
                      className={inputClass(formik.touched.password, formik.errors.password)}
                    />
                    <button type="button" onClick={() => setShowPassword((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-xs text-red-500 mt-1">{formik.errors.password}</p>
                  )}
                </div>

                {/* Confirm password */}
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Confirm password</label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Re-enter your password"
                      {...formik.getFieldProps("confirmPassword")}
                      className={inputClass(formik.touched.confirmPassword, formik.errors.confirmPassword)}
                    />
                    <button type="button" onClick={() => setShowConfirm((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {formik.touched.confirmPassword && formik.values.confirmPassword && (
                    formik.errors.confirmPassword ? (
                      <p className="text-xs text-red-500 mt-1">{formik.errors.confirmPassword}</p>
                    ) : (
                      <p className="text-xs text-green-500 mt-1">✓ Passwords match</p>
                    )
                  )}
                </div>

                <button type="submit"
                  className="w-full bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-3.5 rounded-xl transition-colors"
                >
                  Reset password
                </button>
              </form>
            </>
          {/* ) : ( */}
            {/* <> */}
              {/* ── Success state ── */}
              {/* <div className="flex flex-col items-center text-center gap-5">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                  <KeyRound size={24} className="text-green-500" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#241717] mb-2">Password Created</h1>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    You have created a new password, login with your new password.
                  </p>
                </div>
                <Link
                  href="/sign-in"
                  className="w-full flex items-center justify-center bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-3.5 rounded-xl transition-colors"
                >
                  Login
                </Link>
              </div>
            </> */}
          {/* )} */}

        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          © 2026 Branmart. All rights reserved.
        </p>
      </div>
      <AuthRightPanel />
    </div>
  );
}