"use client";

import { createContext, useContext, useState } from "react";

export type BusinessStatus = "active" | "trial" | "expired";

export interface Business {
  id: string;
  name: string;
  initials: string;
  status: BusinessStatus;
  planLabel: string;
  trialDaysLeft?: number;
  avatarBg: string;
  avatarText: string;
  dotColor: string;
}

export const businesses: Business[] = [
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

interface BusinessContextValue {
  businesses: Business[];
  selected: Business;
  setSelectedId: (id: string) => void;
}

const BusinessContext = createContext<BusinessContextValue | null>(null);

export function BusinessProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedId, setSelectedId] = useState("mitchell");
  const selected = businesses.find((b) => b.id === selectedId)!;
  return (
    <BusinessContext.Provider
      value={{ businesses, selected, setSelectedId }}
    >
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusiness() {
  const ctx = useContext(BusinessContext);
  if (!ctx) throw new Error("useBusiness must be used within BusinessProvider");
  return ctx;
}
