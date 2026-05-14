import { ArrowRight, Lock } from "lucide-react";

export default function SubscriptionExpiredState({
  businessName,
}: {
  businessName: string;
}) {
  return (
    <div className="bg-red-50/50 border border-red-100 rounded-2xl p-10 flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-1">
        <Lock size={20} className="text-red-500" />
      </div>
      <h2 className="text-xl font-bold text-[#241717]">Subscription Expired</h2>
      <p className="text-sm text-gray-500 max-w-md">
        Your subscription for{" "}
        <strong className="font-semibold text-[#241717]">{businessName}</strong>{" "}
        has expired. Renew to regain full access to your website, leads, and
        appointments.
      </p>
      <button className="mt-3 inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-6 py-3 rounded-xl transition-colors">
        Renew Subscription
        <ArrowRight size={15} />
      </button>
    </div>
  );
}
