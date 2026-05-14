import { AlertCircle } from "lucide-react";

interface DashboardAlertBannerProps {
  variant: "trial" | "expired";
  businessName: string;
  daysLeft?: number;
}

export default function DashboardAlertBanner({
  variant,
  businessName,
  daysLeft,
}: DashboardAlertBannerProps) {
  if (variant === "trial") {
    return (
      <div className="bg-orange-50 border-b border-orange-100">
        <div className="px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-[#241717]">
            Your trial for{" "}
            <strong className="font-bold">{businessName}</strong> ends in{" "}
            <strong className="font-bold">{daysLeft} days</strong>. Upgrade to
            keep all features.
          </p>
          <button className="bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0">
            Upgrade Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red-50 border-b border-red-100">
      <div className="px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <AlertCircle size={16} className="text-red-500 shrink-0" />
          <p className="text-sm text-[#241717]">
            <strong className="font-bold">{businessName}</strong> subscription
            has expired. Renew to regain access.
          </p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0">
          Renew Now
        </button>
      </div>
    </div>
  );
}
