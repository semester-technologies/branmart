"use client";

import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";
import { useBusiness } from "../layout/BusinessContext";

export default function ExpiredLockCard() {
  const { selected } = useBusiness();

  if (selected.status !== "expired") return null;

  return (
    <div className="bg-red-50/40 border border-red-100 rounded-2xl px-6 py-10 flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
        <Lock size={20} className="text-red-500" />
      </div>
      <h2 className="text-xl font-bold text-[#241717]">
        Subscription Expired
      </h2>
      <p className="text-sm text-gray-600 max-w-md">
        Your subscription for{" "}
        <span className="font-semibold text-[#241717]">{selected.name}</span>{" "}
        has expired. Renew to regain full access to your website, leads, and
        appointments.
      </p>
      <Link
        href="/billing"
        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors mt-2"
      >
        Renew Subscription <ArrowRight size={15} />
      </Link>
    </div>
  );
}
