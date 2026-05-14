"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { useBusiness } from "./BusinessContext";

export default function BusinessAlertBanner() {
  const { selected } = useBusiness();

  if (selected.status === "trial") {
    return (
      <div className="bg-[#fff6ec] border-b border-orange-100 px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[#cc3602]">
          Your trial for{" "}
          <span className="font-semibold">{selected.name}</span> ends in{" "}
          <span className="font-semibold">
            {selected.trialDaysLeft} days
          </span>
          . Upgrade to keep all features.
        </p>
        <Link
          href="/billing"
          className="text-sm font-semibold text-white bg-[#cc3602] hover:bg-[#e65a29] px-4 py-2 rounded-lg transition-colors shrink-0"
        >
          Upgrade Now
        </Link>
      </div>
    );
  }

  if (selected.status === "expired") {
    return (
      <div className="bg-red-50 border-b border-red-100 px-4 sm:px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-red-600 flex items-center gap-2 min-w-0">
          <AlertCircle size={16} className="shrink-0" />
          <span>
            <span className="font-semibold">{selected.name}</span>{" "}
            subscription has expired. Renew to regain access.
          </span>
        </p>
        <Link
          href="/billing"
          className="text-sm font-semibold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors shrink-0"
        >
          Renew Now
        </Link>
      </div>
    );
  }

  return null;
}
