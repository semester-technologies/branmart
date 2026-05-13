// src/components/dashboard/store-setup/PaymentSuccessStep.tsx

import Link from "next/link";
import Image from "next/image";
import { Check, Mail, Receipt, ArrowRight } from "lucide-react";

export default function PaymentSuccessStep() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden">

      {/* Watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
        <Image
          src="/Branmart-Logo.png"
          alt=""
          width={400}
          height={400}
          style={{ height: "auto", width: "auto" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center gap-6">

        {/* Icon */}
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
          <Check size={28} className="text-green-500" strokeWidth={2.5} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[#241717] mb-2">You're all set!</h1>
          <p className="text-sm text-gray-500">
            Your Pro plan trial is now active. Your 14-day free trial starts today.
          </p>
        </div>

        {/* Plan card */}
        <div className="w-full border border-gray-200 rounded-2xl p-5 text-left flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
              <Receipt size={16} className="text-[#cc3602]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#241717]">Pro Plan</p>
              <p className="text-xs text-gray-400">$19/mo · Monthly billing</p>
            </div>
          </div>
          <div className="h-px bg-gray-100" />
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Mail size={13} />
            A receipt has been sent to your email
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/store-setup/theme"
          className="w-full flex items-center justify-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-4 rounded-xl transition-colors"
        >
          Choose Your Template
          <ArrowRight size={15} />
        </Link>

      </div>
    </div>
  );
}