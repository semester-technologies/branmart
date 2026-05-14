import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/src/lib/cn";

export default function WelcomeHeader({
  disabled = false,
}: {
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <h1 className="text-3xl font-bold text-[#241717] mb-1">
          Welcome back, Sarah
        </h1>
        <p className="text-sm text-gray-500">
          Here&apos;s what&apos;s happening with{" "}
          <span className="font-semibold text-[#241717]">
            Mitchell Dental Clinic
          </span>
          .
        </p>
      </div>

      <Link
        href="/websites/new"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={cn(
          "inline-flex items-center gap-3 text-white px-5 py-3 rounded-xl transition-colors shrink-0",
          disabled
            ? "bg-orange-300 cursor-not-allowed pointer-events-none"
            : "bg-[#cc3602] hover:bg-[#e65a29]",
        )}
      >
        <Plus size={20} className="shrink-0" />
        <div className="text-left">
          <p className="text-sm font-bold leading-tight">Create Website</p>
          <p className="text-xs opacity-80 leading-tight mt-0.5">
            Start from a template
          </p>
        </div>
      </Link>
    </div>
  );
}
