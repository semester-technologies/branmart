"use client";

import { cn } from "@/src/lib/cn";
import { useBusiness } from "../layout/BusinessContext";

export default function DashboardLockGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { selected } = useBusiness();
  const expired = selected.status === "expired";

  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        expired && "opacity-40 pointer-events-none select-none",
      )}
      aria-hidden={expired || undefined}
    >
      {children}
    </div>
  );
}
