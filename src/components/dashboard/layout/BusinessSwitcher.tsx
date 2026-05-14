"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Plus, Settings } from "lucide-react";
import { cn } from "@/src/lib/cn";

type Status = "active" | "trial" | "expired";

interface Business {
  id: string;
  name: string;
  initials: string;
  status: Status;
  planLabel: string;
  trialDaysLeft?: number;
  avatarBg: string;
  avatarText: string;
  dotColor: string;
}

const businesses: Business[] = [
  {
    id: "mitchell",
    name: "Mitchell Dental Clinic",
    initials: "MD",
    status: "active",
    planLabel: "Pro",
    avatarBg: "bg-orange-100",
    avatarText: "text-orange-700",
    dotColor: "bg-green-500",
  },
  {
    id: "wellness",
    name: "Sarah's Wellness Studio",
    initials: "SW",
    status: "trial",
    planLabel: "Trial",
    trialDaysLeft: 5,
    avatarBg: "bg-slate-200",
    avatarText: "text-slate-600",
    dotColor: "bg-amber-500",
  },
  {
    id: "coffee",
    name: "Downtown Coffee Co.",
    initials: "DC",
    status: "expired",
    planLabel: "Pro Expired",
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-700",
    dotColor: "bg-red-500",
  },
];

function statusLine(b: Business): string {
  if (b.status === "trial") return `Trial · ${b.trialDaysLeft}d left`;
  if (b.status === "expired") return "Pro · Expired";
  return b.planLabel;
}

export default function BusinessSwitcher() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("mitchell");
  const ref = useRef<HTMLDivElement>(null);

  const selected = businesses.find((b) => b.id === selectedId)!;

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-2 py-1.5 rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div className="relative shrink-0">
          <div
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold",
              selected.avatarBg,
              selected.avatarText,
            )}
          >
            {selected.initials}
          </div>
          <span
            className={cn(
              "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white",
              selected.dotColor,
            )}
          />
        </div>
        <div className="flex-1 text-left min-w-0">
          <p className="text-sm font-semibold text-[#241717] truncate">
            {selected.name}
          </p>
          <p className="text-xs font-medium text-[#cc3602]">
            {selected.planLabel}
            {selected.status === "trial" && (
              <> · {selected.trialDaysLeft}d left</>
            )}
          </p>
        </div>
        <ChevronDown
          size={15}
          className={cn(
            "text-gray-400 transition-transform shrink-0",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-lg py-2 z-50">
          <p className="text-[10px] font-bold text-gray-400 tracking-wider px-4 py-2">
            BUSINESSES
          </p>

          {businesses.map((b) => {
            const isSelected = b.id === selectedId;
            return (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedId(b.id);
                  setOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 transition-colors text-left mx-1 rounded-xl",
                  isSelected ? "bg-[#fff6ec]" : "hover:bg-gray-50",
                )}
              >
                <div className="relative shrink-0">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold",
                      b.avatarBg,
                      b.avatarText,
                    )}
                  >
                    {b.initials}
                  </div>
                  <span
                    className={cn(
                      "absolute bottom-0 right-0 w-2 h-2 rounded-full border-2 border-white",
                      b.dotColor,
                    )}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "text-sm font-semibold truncate",
                      isSelected ? "text-[#cc3602]" : "text-[#241717]",
                    )}
                  >
                    {b.name}
                  </p>
                  <p
                    className={cn(
                      "text-xs",
                      isSelected
                        ? "text-[#cc3602]"
                        : b.status === "expired"
                        ? "text-red-500"
                        : b.status === "trial"
                        ? "text-amber-600"
                        : "text-gray-400",
                    )}
                  >
                    {statusLine(b)}
                  </p>
                </div>
              </button>
            );
          })}

          <div className="h-px bg-gray-100 my-2" />

          <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-[#cc3602] hover:bg-gray-50 transition-colors text-left">
            <Plus size={15} />
            Create New Business
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors text-left">
            <Settings size={15} />
            Manage Businesses
          </button>
        </div>
      )}
    </div>
  );
}
