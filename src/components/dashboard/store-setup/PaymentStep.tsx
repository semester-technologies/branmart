// src/components/dashboard/store-setup/PaymentStep.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CreditCard, Tag, Lock, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/src/lib/cn";

function isExpired(value: string): boolean {
  if (!/^\d{2}\/\d{2}$/.test(value)) return false;
  const [mm, yy] = value.split("/").map(Number);
  const now = new Date();
  const expiry = new Date(2000 + yy, mm - 1, 1);
  return expiry < new Date(now.getFullYear(), now.getMonth(), 1);
}

export default function PaymentStep() {
  const router = useRouter();
  const [promoApplied, setPromoApplied] = useState(false);

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiry: "",
      cvc: "",
      name: "",
      country: "",
      promo: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, "Card number must be 16 digits")
        .required("Card number is required"),
      expiry: Yup.string()
        .matches(/^\d{2}\/\d{2}$/, "Use MM/YY format")
        .required("Expiry date is required")
        .test("not-expired", "Card expired", (val) => !isExpired(val ?? "")),
      cvc: Yup.string()
        .matches(/^\d{3,4}$/, "CVC must be 3 or 4 digits")
        .required("CVC is required"),
      name: Yup.string().required("Cardholder name is required"),
      country: Yup.string().required("Billing country is required"),
    }),
    onSubmit: () => {
      // TODO: call Django payment API
      router.push("/store-setup/payment-success");
    },
  });

  const inputClass = (field: string) =>
    cn(
      "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors",
      formik.touched[field as keyof typeof formik.touched] &&
        formik.errors[field as keyof typeof formik.errors]
        ? "border-red-400 bg-red-50 focus:border-red-400"
        : "border-gray-200 focus:border-[#cc3602]"
    );

  return (
    <div className="w-full px-4 py-10 max-w-4xl mx-auto">

      {/* Back */}
      <Link
        href="/store-setup/plan"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to plans
      </Link>

      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* ── Left: form ── */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#241717] mb-1">Payment details</h1>
          <p className="text-sm text-gray-500 mb-8">
            You won't be charged today — your 14-day free trial starts now.
          </p>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">

            {/* Card number */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Card number</label>
              <div className="relative">
                <CreditCard size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength={16}
                  {...formik.getFieldProps("cardNumber")}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    formik.setFieldValue("cardNumber", val);
                  }}
                  className={cn(inputClass("cardNumber"), "pl-10")}
                />
              </div>
              {formik.touched.cardNumber && formik.errors.cardNumber && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.cardNumber}</p>
              )}
            </div>

            {/* Expiry + CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Expiry date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength={5}
                  {...formik.getFieldProps("expiry")}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, "");
                    if (val.length >= 2) val = val.slice(0, 2) + "/" + val.slice(2);
                    formik.setFieldValue("expiry", val);
                  }}
                  className={inputClass("expiry")}
                />
                {formik.touched.expiry && formik.errors.expiry && (
                  <p className="text-xs text-red-500 mt-1">{formik.errors.expiry}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">CVC</label>
                <input
                  type="text"
                  placeholder="123"
                  maxLength={4}
                  {...formik.getFieldProps("cvc")}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    formik.setFieldValue("cvc", val);
                  }}
                  className={inputClass("cvc")}
                />
                {formik.touched.cvc && formik.errors.cvc && (
                  <p className="text-xs text-red-500 mt-1">{formik.errors.cvc}</p>
                )}
              </div>
            </div>

            {/* Cardholder name */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Cardholder name</label>
              <input
                type="text"
                placeholder="John Doe"
                {...formik.getFieldProps("name")}
                className={inputClass("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.name}</p>
              )}
            </div>

            {/* Billing country */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">Billing country</label>
              <input
                type="text"
                placeholder="Nigeria"
                {...formik.getFieldProps("country")}
                className={inputClass("country")}
              />
              {formik.touched.country && formik.errors.country && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.country}</p>
              )}
            </div>

            {/* Promo code */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1.5">
                Promo code <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter code"
                    {...formik.getFieldProps("promo")}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#cc3602] transition-colors"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setPromoApplied(true)}
                  className="text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-400 px-5 py-3 rounded-xl transition-colors shrink-0"
                >
                  {promoApplied ? "Applied ✓" : "Apply"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-4 rounded-xl transition-colors mt-1"
            >
              <Lock size={14} />
              Start Free Trial
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <Lock size={11} />
              Encrypted and secure. Cancel anytime.
            </p>

          </form>
        </div>

        {/* ── Right: order summary ── */}
        <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24">
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
            <p className="text-sm font-semibold text-[#241717]">Order summary</p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Pro plan</span>
              <span className="font-medium text-[#241717]">$19/mo</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Billing cycle</span>
              <span className="font-medium text-[#241717]">Monthly</span>
            </div>

            <div className="h-px bg-gray-100" />

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Due today</span>
              <span className="text-2xl font-bold text-[#241717]">$0.00</span>
            </div>
            <p className="text-xs text-gray-400">After 14-day trial: $19/mo</p>

            <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2.5">
              {["14-day free trial", "Cancel anytime", "No charges today"].map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <Check size={13} className="text-green-500 shrink-0" />
                  <span className="text-xs text-gray-600">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}